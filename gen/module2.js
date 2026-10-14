// Originally translated from src/Module2.BAS by tools/vb2js.py; this JavaScript is now the source.


async function autoSave() {
    if (game.isEmailGame == 0) {
        if (game.saveSlot == 0) {
        } else {
            await saveGame();
        }
    } else if (game.isEmailGame == -1) {
        if (Trim(game.emailFileName) == "") {
        } else {
            await saveEmailGame("MAIN MENU");
        }
    }
}

function restockPlanets() {
    let i = 0;
    let item = 0;
    let planet = 0;
    let low = 0;
    let high = 0;
    for (i = 1; i <= game.numRivals; i++) {
        if (((rivals.shipSize[i] / 4) - 100) > 0) {
            game.planetSupplyBoost[rivals.planet[i]] = CLng(game.planetSupplyBoost[rivals.planet[i]] + ((rivals.shipSize[i] / 4) - 100));
        }
    }
    for (planet = 0; planet <= LAST_PLANET; planet++) {
        for (i = 0; i <= 2; i++) {
            for (item = 0; item <= 5; item++) {
                low = CLng(0.2 * game.supplyPercent[planet][i][item]);
                high = game.supplyPercent[planet][i][item];
                game.available[planet][i][item] = randomBetween(low, high);
                low = CLng(0.2 * game.planetSupplyBoost[planet] * (game.supplyPercent[planet][i][item] / 100));
                high = CLng(game.planetSupplyBoost[planet] * (game.supplyPercent[planet][i][item] / 100));
                game.available[planet][i][item] = game.available[planet][i][item] + randomBetween(low, high);
                if (randomBetween(0, 130) >= game.supplyPercent[planet][i][item]) {
                    game.available[planet][i][item] = 0;
                }
            }
        }
    }
    for (i = 0; i <= LAST_PLANET; i++) {
        game.planetSupplyBoost[i] = 0;
    }
}

function updatePrices() {
    let category = 0;
    let item = 0;
    let planet = 0;
    let step = 0;
    let maxPrice = 0;
    let minPrice = 0;
    for (planet = 0; planet <= LAST_PLANET; planet++) {
        step = 0;
        maxPrice = 0;
        for (category = 0; category <= 2; category++) {
            for (item = 0; item <= 5; item++) {
                step = step + 5;
                minPrice = (game.marketDifficulty + 1) * step;
                maxPrice = maxPrice + 40;
                game.prices[planet][category][item] = CInt(((maxPrice - minPrice) * (100 - game.supplyPercent[planet][category][item]) / 100) + minPrice);
            }
        }
    }
}

function updateRivalNetWorth() {
    let rival = 0;
    let planet = 0;
    for (rival = 1; rival <= game.numRivals; rival++) {
        rivals.netWorth[rival] = rivals.cash[rival];
        for (planet = 0; planet <= LAST_PLANET; planet++) {
            if (game.turn <= 15) {
                rivals.netWorth[rival] = rivals.netWorth[rival] + (rivals.shares[rival][planet] * game.stockPrices[planet][game.turn]);
            } else {
                rivals.netWorth[rival] = rivals.netWorth[rival] + (rivals.shares[rival][planet] * game.stockPrices[planet][15]);
            }
        }
    }
}

function generatePassengers() {
    player.passengersBoarded = 0;
    player.ticketPrice = player.nextTicketPrice;
    player.passengersWaiting = randomBetween(0, player.passengerCapacity) + randomBetween(player.adExtraPassengers / 4, player.adExtraPassengers);
    if (player.ticketPrice < 100) {
        player.ticketPrice = 100;
    }
    if (player.ticketPrice <= 4000) {
        player.passengersWaiting = CLng((player.passengersWaiting * 1000) / player.ticketPrice);
    } else if (player.ticketPrice <= 5000) {
        player.passengersWaiting = CLng((player.passengersWaiting * 1000) / (1.5 * player.ticketPrice));
    } else if (player.ticketPrice <= 6000) {
        player.passengersWaiting = CLng((player.passengersWaiting * 1000) / (2.25 * player.ticketPrice));
    } else if (player.ticketPrice <= 7000) {
        player.passengersWaiting = CLng((player.passengersWaiting * 1000) / (3.25 * player.ticketPrice));
    } else if (player.ticketPrice <= 8000) {
        player.passengersWaiting = CLng((player.passengersWaiting * 1000) / (4.75 * player.ticketPrice));
    } else if (player.ticketPrice <= 9000) {
        player.passengersWaiting = CLng((player.passengersWaiting * 1000) / (7 * player.ticketPrice));
    } else if (player.ticketPrice <= 10000) {
        player.passengersWaiting = CLng((player.passengersWaiting * 1000) / (10 * player.ticketPrice));
    } else {
        player.passengersWaiting = 0;
    }
    player.passengersAboard = player.passengersWaiting;
    if (player.passengersWaiting > player.passengerCapacity) {
        player.passengersAboard = player.passengerCapacity;
    }
}

async function reportFileError(errorNumber) {
    let checklist = "";
    errorNumber = CInt(errorNumber);
    checklist = "\n" + "\n" + "Please check the following:" + "\n" + "\n" + "1) The Gazillionaire CD-ROM must be in the CD-ROM drive at all times, otherwise the game will not function." + "\n" + "\n" + "2) If you are saving your email game to a floppy disk, the disk must be in your floppy drive at all times." + "\n" + "\n" + "3) If you are trying to load an email game, make sure it is the correct file type.";
    if (settings.soundOn == -1) {
        Beep();
    }
    if (errorNumber == 6) {
        frm_Box1Port.b_Yes.Visible = 0;
        frm_Box1Port.b_No.Visible = 0;
        frm_Box1Port.b_OK.Visible = -1;
        frm_Box1Port.b_Container.BackColor = 0x400000;
        frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "PHOTO.BMP");
        frm_Box1Port.b_ImageLable.Caption = "Steve and Naomi";
        frm_Box1Port.b_Message.Caption = "You passed the 2 billion kubar mark!!!! We congratulate you for playing Gazillionaire longer than we ever expected anyone to play. At this point, we have to say the game is officially over. Whether or not you have won or lost is no longer relevant. You are as close to becoming a true Gazillionaire as you will ever be. It's time to take a break and start a new game. You may now consider yourself an honorary member of the Society of Dred, secret email address: dred@lavamind.com";
        await frm_Box1Port.Show(1);
        await MsgBox("Thanks for playing with us. We will now exit the program.", 64, "Goodbye");
        End();
    } else {
        if (ErrorText(errorNumber) == "") {
            await MsgBox("Gazillionaire has encountered a CRITICAL ERROR." + checklist, 16, "Error Detected");
        } else {
            await MsgBox("Gazillionaire has encountered the following ERROR:  " + UCase(ErrorText(errorNumber)) + checklist, 16, "Error Detected");
        }
    }
}

function loadPlayer(index) {
    index = CInt(index);
    FileOpen(10, Trim(paths.configDir) + "PLAYER" + Trim(Format(index, "#0")));
    player = FileGet(10, 1, player);
    FileClose(10);
}

async function saveEmailGame(screenName) {
    let i = 0;
    let header = Space(23);
    let screenTag = Space(9);
    let dot = 0;
    try {
        screenTag = FixStr(screenName, 9);
        storePlayer(game.currentPlayer);
        dot = InStr(1, Trim(game.emailFileName), ".");
        if (dot > 0 && dot >= 8) {
            game.emailFileName = FixStr(Mid(Trim(game.emailFileName), 1, 8) + Mid(Trim(game.emailFileName), dot, 4), 12);
        } else if (dot > 0 && dot < 8) {
            game.emailFileName = FixStr(Mid(Trim(game.emailFileName), 1, dot - 1) + Mid(Trim(game.emailFileName), dot, 4), 12);
        } else {
            game.emailFileName = FixStr(Mid(Trim(game.emailFileName), 1, 8), 12);
        }
        game.emailFileName = FixStr(LCase(Trim(game.emailFileName)), 12);
        if (Right(Trim(settings.emailDir), 1) != "\\") {
            settings.emailDir = FixStr(Trim(settings.emailDir) + "\\", 128);
        }
        header = FixStr("GAZ DELUXE EMAIL GAME  ", 23);
        FileOpen(3, Trim(settings.emailDir) + Trim(game.emailFileName));
        FilePut(3, 1, header);
        FilePut(3, null, screenTag);
        FilePut(3, null, game);
        FilePut(3, null, rivals);
        for (i = 1; i <= game.numPlayers; i++) {
            loadPlayer(i);
            FilePut(3, null, player);
        }
        FileClose(3);
        loadPlayer(game.currentPlayer);
        return;
    } catch (e) {
        Err.Catch(e);
        await reportFileError(Err.Number);
        return;
    }
}

async function saveGame() {
    let i = 0;
    let header = Space(23);
    try {
        header = FixStr("GAZ DELUXE NORMAL GAME ", 23);
        storePlayer(game.currentPlayer);
        FileOpen(1, Trim(paths.saveDir) + "GAME" + Trim(Format(game.saveSlot, "#0")) + ".DAT");
        FilePut(1, 1, header);
        FilePut(1, null, game);
        FilePut(1, null, rivals);
        for (i = 1; i <= game.numPlayers; i++) {
            loadPlayer(i);
            FilePut(1, null, player);
        }
        FileClose(1);
        loadPlayer(game.currentPlayer);
        return;
    } catch (e) {
        Err.Catch(e);
        await reportFileError(Err.Number);
        return;
    }
}

function storePlayer(index) {
    index = CInt(index);
    FileOpen(9, Trim(paths.configDir) + "PLAYER" + Trim(Format(index, "#0")));
    FilePut(9, 1, player);
    FileClose(9);
}

async function spend(amount, showNotice) {
    amount = CLng(amount);
    showNotice = CInt(showNotice);
    if (player.cash >= amount) {
        player.cash = player.cash - amount;
        amount = 0;
    } else {
        amount = amount - player.cash;
        player.cash = 0;
        if (player.bankBalance >= amount) {
            player.bankBalance = player.bankBalance - amount;
            amount = 0;
        } else {
            amount = amount - player.bankBalance;
            player.bankBalance = 0;
            player.loan = player.loan + amount;
            if (showNotice == -1) {
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x4000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan1.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Trader's Union Official";
                frm_Box1Port.b_Message.Caption = "Sorry, but you are out of money." + "\n" + "\n" + "Fortunately, the Trader's Union steps in and loans you " + Format(amount, "#,#0") + " kubars to cover the costs. Don't forget to pay them back!";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
            }
        }
    }
}

function nextGoal() {
    let ret = 0;
    if (game.winner != 0) {
        if (game.goalNetWorth == 1000000) {
            ret = 2000000;
        } else if (game.goalNetWorth == 2000000) {
            ret = 5000000;
        } else if (game.goalNetWorth == 5000000) {
            ret = 10000000;
        } else if (game.goalNetWorth >= 10000000 && game.goalNetWorth < 100000000) {
            ret = game.goalNetWorth + 10000000;
        } else if (game.goalNetWorth >= 100000000) {
            ret = game.goalNetWorth + 100000000;
        }
    } else {
        ret = game.goalNetWorth;
    }
    return ret;
}
