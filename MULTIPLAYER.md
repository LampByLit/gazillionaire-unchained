# Online Multiplayer Specification

Status: planned, not built. Line numbers refer to the code as of commit `6d9c055`.

## 1. Summary

Live online play for 2–6 human players, each in their own browser, joining through a private seat link. Turns are taken one at a time in the game's normal turn order. Each turn has a hard time limit (300 / 500 / 900 seconds, default 500) that covers the whole turn. The server stores and relays the game; all game logic keeps running in the browser, on the same engine as single-player.

## 2. One engine, not a separate game

Online play is a mode of the existing game, not a fork.

- The game logic in `web/gen/*.js` and the runtime in `web/vb.js` are shared, unchanged except for three one-line hooks (section 9). Any fix or feature added to the game applies to online games automatically.
- The online layer is one script, `mod/online.js`, plus new endpoints in `server.js`. It wraps the game's event handlers by name; it does not copy any game code.
- The deployment and URL stay the same. "Play Online" is an option on the start screen, and seat links go to the same page.
- Online mode is built on the existing play-by-email mode, which already passes the complete game state between players once per turn.

### Keeping updates safe for games in progress

1. **Version lock.** Each game stores the build number (`VB.build` from `web/gen/manifest.js`) it was last played on. When a browser joins or reconnects with a different build, it reloads to get the latest code. The server includes the current build in every update, so after a deploy every connected browser reloads between turns.
2. **New fields.** Saved games are JSON copies of the `game`, `rivals`, and `player` objects. When a snapshot loads, any field it lacks is filled in from a freshly created `Game()`, `Rivals()`, or `Player()` (`web/gen/globals.js`). Renamed fields keep going through the existing `LEGACY_FIELDS` migration in `web/legacy-fields.js`.
3. **Touch points.** Changes to the screens listed in section 10 should be checked against `mod/online.js`, because the online layer wraps their handlers. Changes anywhere else need no online work.

## 3. Game rules

### 3.1 Seats and setup
- Live only: all players must be connected for setup and play to proceed normally.
- The host (seat 1) chooses difficulty, number of human players (2–6, single player disabled), planets, and turn length.
- Each player picks their own company name and ship in their own browser. Ships are unique: once a ship is claimed, nobody else can choose it.
- The tutorial is disabled online, as it already is in email mode.

### 3.2 Turn clock
- The clock starts when the turn is handed to the player and runs until their turn hands off to the next player. It covers everything: the Begin Turn screen, arrival popups, trading, events, departure, the auction bid, travel events, and end-of-week processing if their turn ends the week.
- No popups are auto-answered while time remains.
- Warnings: the clock turns yellow at 60 seconds and red at 15 seconds, with an optional beep.
- All players see the same countdown, timed by the server's clock, plus the active player's phase: "Kate is arriving", "Kate is trading on Mira", or "Kate is traveling".

### 3.3 Turn phases

| Phase | Starts when | Ends when |
|---|---|---|
| Arriving | The turn is handed to the player | `frm_Travel4` finishes `Form_Load` (arrival bookkeeping done) |
| On planet | Arrival finished | The player picks a destination (`frm_Auction`, `frm_Travel0`, or `frm_Travel1` loads) |
| Departed | A destination is picked | The next player's turn screen loads (handoff) |

`leave.js` updates the ship's location before the auction screen appears (lines 200–201 and 211–212), so the auction bid is part of the departed phase.

### 3.4 When time runs out

| Phase at timeout | What happens |
|---|---|
| Arriving | Finish arrival with all popups answered instantly, then apply the **stay put** rule |
| On planet, within credit limits | Save the player's completed actions, reload, apply the **stay put** rule |
| On planet, over a credit limit | Save, reload, apply the **bankruptcy** rule |
| Departed | No reload. Answer all remaining popups instantly and skip animations; the turn finishes normally |

**Answering popups instantly:** information popups get OK, yes/no popups get No ("do nothing"). A timeout never spends money. Known quirk: turning down the Quaso Mutta spirit sets bad luck (`travel2.js` lines 3033–3036).

**Credit limits** are the same checks `leave.js` makes on departure (line 141): `player.zinnLoan > player.zinnCreditLimit` or `player.loan > player.creditLimit`.

### 3.5 The stay-put rule
The original game has no option to stay put (`leave.js` line 103 refuses the current planet), so this is a new rule built from existing code:
1. `game.previousPlanet[p] = game.planet[p]` (the ship didn't move).
2. Apply the quick-deposit setting, as `leave.js` lines 194–197 do.
3. Turn on the stay-put flag, then show `frm_Travel2`. Its `Form_Load` runs `processTravelTurn` (`travel2.js` lines 2893–3004), which handles the weekly bookkeeping: interest, wages, fuel, tariffs, insurance, new passengers, net worth, and marking the turn done. Hook 2 skips the random travel events. `processTravelTurn` then hands off to `frm_Travel3`, which runs the end of the week if this was the week's last turn and then hands off to the next player.
4. In next week's turn order, the ship goes last (hook 3). Without the hook, its travel distance of zero would put it first.

Accepted side effects: a small fuel burn (1 plus a size-based amount), cargo taxed on both export and import, and passengers wait a week.

### 3.6 The bankruptcy rule
Same as clicking "Bankrupt Me" in `leave.js` (lines 176–185): clear the player's facilities, then show `frm_Bankrupt1`. The bankruptcy screens' popups and buttons are answered instantly: Continue (`frm_Bankrupt1`), then Continue Game (`frm_Bankrupt3`), which already hands off the turn. If every human is bankrupt, `frm_Bankrupt2` appears and the server marks the game finished.

### 3.7 Disconnects and absent players
- The active player counts as disconnected when their live update stream has been closed for more than 60 seconds.
- **Substitute:** the server picks the lowest-numbered connected seat. That browser loads the snapshot from the start of the turn, runs the timeout path for the arriving phase (arrival, then stay put or bankruptcy), and uploads the result. The absent player loses that turn's actions.
- A turn that ends by timeout or by substitute counts as a miss. After 2 misses in a row the seat is marked **away**, and its turns are handed to a substitute right away. Reconnecting clears away status. A normally finished turn resets the miss count.
- If the active player refreshes mid-turn, they reload the snapshot from the start of the turn with the same random seed (section 8), and the clock keeps running.

### 3.8 Travel time
Unchanged from the original game. Every trip finishes within the week; distance and delay events (`travelDelay` in `travel2.js`) only decide next week's turn order (`computeTurnOrder`, `travel3.js` lines 1470–1499). Nobody waits for a journey, only for other players' turns, which the clock limits.

## 4. Architecture

```
Browser (each seat)                         server.js (Node)
  web/vb.js + web/gen/*.js  (game)   <--->  /api/...    game endpoints
  mod/online.js             (online)        /events     live update stream
                                            data/<gameId>.json   one file per game
```

- The server is a referee and mailbox: it stores the latest snapshot, tracks seats, the clock, connections and misses, and picks substitutes. It never runs game logic.
- The browser is trusted (friends-only play). The only cheat protection is the per-turn random seed.

## 5. Data

### 5.1 Game file (`DATA_DIR/<gameId>.json`)
```json
{
  "id": "k3x9qa",
  "build": 1791927982,
  "status": "setup | playing | finished",
  "turnSeconds": 500,
  "createdAt": 0, "updatedAt": 0,
  "version": 17,
  "seats": [
    { "n": 1, "token": "<secret>", "company": "", "setupDone": false, "misses": 0, "away": false }
  ],
  "shipClaims": { "4": 2 },
  "turn": {
    "id": 42, "seat": 3, "seed": 2894711, "startedAt": 0, "deadline": 0,
    "phase": "arriving | onPlanet | departed",
    "startSnapshot": { }
  },
  "snapshot": { }
}
```
- `token`: 24 random characters from `crypto.randomBytes`. A seat link is `/?g=<id>&s=<token>`.
- `startSnapshot`: the game as it was when the turn began, used for refreshes and substitutes.
- Writes go to a temporary file followed by a rename, so a crash can't leave a half-written file.
- Games with no activity for 30 days are deleted.

### 5.2 Snapshot
The same contents as an email save (`saveEmailGame`, `module2.js` lines 149–187), as JSON:
```json
{
  "game": { },
  "rivals": { },
  "players": [null, { }, { }],
  "meta": { "stayedPut": [3] }
}
```
`meta.stayedPut` lists seats that stayed put this week. Hook 3 reads it, and it's cleared when the next week's turn order has been computed.

## 6. Server API

All requests include the seat token. Responses that change the game include the new `version`. Uploads carry a `baseVersion` and are rejected with `409` if it isn't the current version.

| Method and path | Who | Purpose |
|---|---|---|
| `POST /api/games` `{turnSeconds}` | Anyone | Create a game; returns `{id, token}` for seat 1 |
| `POST /api/games/:id/setup` `{numPlayers, snapshot}` | Host | Store the partial setup (level, players, planets); creates seats 2..N and returns their links |
| `GET /api/games/:id` | Seat | Current game file, minus other seats' tokens |
| `POST /api/games/:id/claim-ship` `{ship}` | Seat | Claim a ship; `409` if already taken |
| `POST /api/games/:id/seat-done` `{companyName, shipType, engineSpeed, player}` | Seat | Submit this seat's setup |
| `POST /api/games/:id/start` `{snapshot}` | Host | Store the merged starting game; status becomes `playing` and turn 1 starts |
| `POST /api/games/:id/phase` `{turnId, phase}` | Active seat | Report `onPlanet` or `departed` |
| `POST /api/games/:id/turn` `{turnId, baseVersion, snapshot, reason}` | Active seat or substitute | End the turn; `reason` is `ended`, `timeout`, or `substitute` |
| `GET /api/games/:id/events` | Seat | Server-sent events stream (below) |

The next active seat is `snapshot.game.currentPlayer` (seat number = player index). Starting a turn sets a new `turn.id`, a new 32-bit `seed`, `deadline = now + turnSeconds`, and stores `startSnapshot`.

### 6.1 Live updates (server-sent events)
- `state`: `{version, build, status, serverNow, turn: {id, seat, deadline, phase}, seats: [{n, company, connected, away, setupDone}], shipClaims}`, sent on every change and every 15 seconds as a keep-alive.
- `substitute`: `{turnId, seat}`, sent to the browser chosen to finish an absent player's turn.

### 6.2 Server timers
- At `deadline + 30s`, if the turn hasn't ended (for example, the active browser froze), pick a substitute.
- When the active seat has been disconnected for 60 seconds, pick a substitute right away.
- When a turn starts for a seat that is away and not connected, pick a substitute right away.

## 7. Client flow (`mod/online.js`)

### 7.1 Start screen and lobby
- Opening the page with `?g=&s=` goes straight into that game. Without them, the start screen shows "Play Online" next to the normal start.
- The lobby is a plain HTML overlay (not a game screen): turn length choice, Create Game, then seat links with copy buttons and live status for each seat (connected, picking, ready).

### 7.2 Setup
1. **Host:** set `game.isEmailGame = -1` with an empty `game.emailFileName`, which turns off every email-mode save (`autoSave`, `module2.js` lines 4–16; `playturn.js` line 955). Run `frm_Level`, `frm_HowManyPlayers`, and `frm_Planets` as usual. When `frm_NameCompany` loads, stop, upload the partial setup, and show the seat links.
2. **Each seat** (the host included, for seat 1): load the partial snapshot. Copy this seat's player record into slot 1, temporarily set `game.numPlayers = 1`, and run `frm_NameCompany` and `frm_ChooseShip`. Hide ships already claimed (`b_Image[n].Visible = 0`, the way `choose.js` hides taken ships). Claim the ship with the server when the purchase is confirmed; if it was just taken, show a message and reopen the ship screen. Hide the email address field in `frm_EmailInfo`. Stop when `frm_Opponents` would open, copy the results back to the real seat number, and submit with `seat-done`.
3. **Host**, once every seat is done: merge each seat's company name, ship type, engine speed, and player record into the full game, restore `numPlayers`, show `frm_Opponents`, then upload with `start`.

### 7.3 Turns
- **Handoff point:** `frm_PlayerTurn` `Form_Load`, the same place email mode saves (`playturn.js` lines 955–962). Run `storePlayer(game.currentPlayer)`, build the snapshot, and upload it with `turn`. If the next seat is this browser's, continue; otherwise show the waiting screen.
- **Turn screen text:** replace the email instructions written by `frm_PlayerTurn` `Form_Activate` (lines 753–775) with the company rankings (`rankingText`) and either "Your turn" or "Waiting for X". Hide Save Game and New Game.
- **Starting your turn:** on a `state` update naming this seat with a new turn id, load `startSnapshot`, set the random seed, and show `frm_PlayerTurn` with Tag `BEGIN TURN`, the same way `emaiload.js` lines 145–148 resume an email game.
- **Phase reports:** after `frm_Travel4` `Form_Load` finishes, report `onPlanet`. On the first `Form_Load` of `frm_Auction`, `frm_Travel0`, or `frm_Travel1`, report `departed`.
- **Waiting screen:** an HTML overlay showing rankings, the countdown, the active player's name and phase, and each seat's connection status.

### 7.4 Timeout (section 3.4)
- The active browser watches the deadline, using the offset between its clock and `serverNow`.
- **Arriving or on planet:** `storePlayer`, build the snapshot, save it to `sessionStorage` marked `{timedOut, turnId, phase}`, and reload. After the reload, load that snapshot. If it was saved during arrival, show `frm_Travel4` in instant-answer mode and wait for its `Form_Load` to finish. Then apply the stay-put rule (3.5) or the bankruptcy rule (3.6), and upload with reason `timeout`.
- **Departed:** switch on instant-answer mode, no reload.

### 7.5 Substitute
On a `substitute` event: load `startSnapshot` and that turn's seed, then run the arriving-phase timeout path in instant-answer mode, and upload with reason `substitute`. Then return to the waiting screen.

### 7.6 Instant-answer mode
- Wrap `Form.prototype.Show` (`vb.js` lines 1372–1396). While the mode is on, a modal form is answered as soon as it opens: fire `b_OK_Click` if `b_OK` is visible, otherwise `b_No_Click` if `b_No` is visible, otherwise `Hide()` the form. Every yes/no popup sets its Tag to `"NO"` when it loads (for example `box1port.js` line 83), so closing it counts as No.
- Built-in `MsgBox` and `InputBox` (`vb.js` lines 410–455): resolve with the first button, or an empty string.
- Screens that wait for a click: `frm_Travel0` (fire `Form_KeyPress` to skip the animation), `frm_Auction` (clear the bid, fire `b_OK_Click`; check during the build that an empty bid doesn't open an error popup), `frm_Bankrupt1` `b_Continue_Click`, `frm_Bankrupt3` `b_ContinueGame_Click`.

## 8. Random numbers
Replace the global `Rnd` (`vb.js` line 88, currently `Math.random()`) with a seeded generator (mulberry32) seeded from `turn.seed`. Every browser uses the seed of the current turn, so refreshing mid-turn replays the same random results. The online layer only replaces `Rnd` in online mode.

## 9. Changes to existing files

Each hook does nothing when `mod/online.js` isn't loaded.

| File | Change |
|---|---|
| `web/index.html` | Load `mod/online.js` after `gen/manifest.js` (line 62). If the file is missing, as with `play-web.cmd`, the game runs normally |
| `web/vb.js` (hook 1) | In `VB.boot`, before `VB.call(Main, [])` (line 1619): `if (VB.afterLoad) await VB.afterLoad();`, so the online layer can wrap forms after they're created |
| `web/gen/travel2.js` (hook 2) | Line 2923: skip `rollTravelEvents()` when `window.ONLINE && ONLINE.stayingPut` |
| `web/gen/travel3.js` (hook 3) | After line 1478: `if (window.ONLINE && ONLINE.stayedPut(i)) game.travelTime[i] = 1e9;` |
| `server.js` | Serve `/mod/*` from `mod/`; add the API, live updates, timers, and storage (section 6) |
| `play-mod.cmd` | Start `node server.js` if it isn't running, then open `http://localhost:8080/` |
| `.gitignore` | Keep `data/` untracked (already the case under the whitelist) |

## 10. Screens the online layer wraps

`frm_BeginGame`, `frm_Level`, `frm_HowManyPlayers`, `frm_Planets`, `frm_NameCompany`, `frm_ChooseShip`, `frm_EmailInfo`, `frm_Opponents`, `frm_PlayerTurn`, `frm_Travel4`, `frm_LeavePlanet`, `frm_Auction`, `frm_Travel0`, `frm_Travel1`, `frm_Travel2`, `frm_Travel3`, `frm_File`, `frm_Bankrupt1`, `frm_Bankrupt2`, `frm_Bankrupt3`, and all popup boxes (`frm_Box0`, `frm_Box1`, `frm_Box1Port`, `frm_Box1Rect`, `frm_Box1Sqr`, `frm_Box2`, `frm_Box3`, `frm_BoxPort`, `frm_BoxYesNo`, `frm_YesNoBox`, `frm_ChooseShip2`).

- Handlers are swapped through `form.$handlers[name]`, because `$fire` looks them up by name at call time (`vb.js` lines 1367–1371).
- `frm_File` (the in-game file menu): hide Save, Load, Email, and New Game. Quit leaves the page; the seat can rejoin from its link.

## 11. Per-tab player storage
Player records are stored as `units/player1` … `units/player6` (`loadPlayer` and `storePlayer`, `module2.js` lines 142–147 and 213–218) in `localStorage`, which every tab on the same site shares. In online mode, the online layer redirects those paths to an in-memory store (`VFS.read`, `write`, and `exists`, `vb.js` lines 275–295), so several seats can play in one browser and players can't overwrite each other's data.

## 12. Deployment
- Railway: attach a volume (for example at `/data`) and set `DATA_DIR=/data`. Locally, `DATA_DIR` defaults to `./data`.
- `PORT` works as it does now.
- Deploying while games are running is safe: browsers reload between turns (section 2).

## 13. Test plan
Run locally with `play-mod.cmd`, using three tabs with three seat links.

1. Setup: three seats pick names and ships; two seats confirm the same ship at the same moment; a seat closes its tab during setup and rejoins; the host's tab closes during setup.
2. Play 5 or more full weeks: turn order, end of week, auctions, rival news, and rankings agree in every tab.
3. Timeouts: on the Begin Turn screen, during arrival popups, on the main menu, inside the market with a quantity half-typed, inside a popup, during the auction bid, during travel events, and while over each credit limit.
4. Refreshing mid-turn gives the same random results, and the clock doesn't reset.
5. Closing the active tab brings in a substitute after 60 seconds. Two misses mark the seat away, and its turns are skipped right away. Rejoining clears away status.
6. A stay-put ship goes last the next week.
7. Bankruptcy of one player; bankruptcy of all players (game marked finished); reaching the win screen.
8. Deploying a new build mid-game: browsers reload between turns, and the game continues.
9. Restarting the server mid-game: the game resumes from its file.

## 14. Estimate

| Piece | Lines |
|---|---|
| Server: API, live updates, timers, substitutes, setup phase, ship claims, storage | ~240 |
| Lobby and waiting screen | ~120 |
| Per-seat setup | ~150 |
| Snapshot load and save, per-tab player storage, field defaults, version lock | ~80 |
| Handoff, phases, turn-screen text, file menu | ~70 |
| Countdown | ~40 |
| Timeout path and substitute (stay put, bankruptcy) | ~75 |
| Instant-answer mode | ~50 |
| Seeded random numbers | ~15 |
| Hooks and launcher | ~10 |
| **Total** | **~850** |

About three focused days including the test plan.

## 15. Out of scope
- Server-side game logic or strong anti-cheat (players can read the full snapshot, including other players' cash).
- Turn-based play without everyone online, and "your turn" notifications.
- Spectators, chat, accounts, and public matchmaking.
- Browsing your own screens while waiting for another player's turn.
- Multi-week journeys.
