// Originally translated from src/PLAYTURN.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_PlayerTurn",
  ["Form", "frm_PlayerTurn", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Player's Turn", "BackColor": 0, "Left": 345, "Top": 2535, "Width": 7350, "Height": 3990, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 345, "ClientTop": 2535, "ClientWidth": 7350, "ClientHeight": 3990}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 0, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16711935, "IntBkg": 0, "PicturePos": 9}, [
      ["VideoSoftElastic", "VSElastic1", {"BackColor": 0, "Left": 0, "Top": 6300, "Width": 9585, "Height": 585, "TabIndex": 9, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 1, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0}, [
        ["VideoSoftElastic", "b_Ranking", {"BackColor": 12632256, "ForeColor": 0, "Left": 7680, "Top": 0, "Width": 1905, "Height": 585, "TabIndex": 12, "FontName": "Arial", "FontSize": 10.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 7, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "Caption": "Ranking", "CaptionPos": 4, "PicturePos": 9, "ForeColorDisabled": 0}],
        ["VideoSoftElastic", "b_SaveGame", {"BackColor": 12632256, "ForeColor": 0, "Left": 5760, "Top": 0, "Width": 1905, "Height": 585, "TabIndex": 3, "FontName": "Arial", "FontSize": 10.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 7, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "Caption": "Save Game", "CaptionPos": 4, "PicturePos": 9, "ForeColorDisabled": 0}],
        ["VideoSoftElastic", "b_BeginTurn", {"BackColor": 12632256, "ForeColor": 0, "Left": 0, "Top": 0, "Width": 1905, "Height": 585, "TabIndex": 4, "FontName": "Arial", "FontSize": 10.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 7, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "Caption": "Begin Turn", "CaptionPos": 4, "PicturePos": 9, "ForeColorDisabled": 0}],
        ["VideoSoftElastic", "b_QuitGame", {"BackColor": 12632256, "ForeColor": 0, "Left": 1920, "Top": 0, "Width": 1905, "Height": 585, "TabIndex": 5, "FontName": "Arial", "FontSize": 10.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 7, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "Caption": "Exit Gazillionaire", "CaptionPos": 4, "PicturePos": 9, "ForeColorDisabled": 0}],
        ["VideoSoftElastic", "b_NewGame", {"BackColor": 12632256, "ForeColor": 0, "Left": 3840, "Top": 0, "Width": 1905, "Height": 585, "TabIndex": 10, "FontName": "Arial", "FontSize": 10.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 7, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "Caption": "Options Menu", "CaptionPos": 4, "PicturePos": 9, "ForeColorDisabled": 0}]
      ]],
      ["MMControl", "b_Sound", {"Left": 750, "Top": 1590, "Width": 3540, "Height": 330, "TabIndex": 8, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 0, "Left": 30, "Top": 1170, "Width": 5415, "Height": 3645, "TabIndex": 1, "AutoSizeChildren": 1, "BorderWidth": 15, "BevelInner": 5, "BevelOuter": 5, "BevelInnerWidth": 7, "BevelOuterWidth": 7, "IntBkg": 0}, [
        ["VideoSoftElastic", "VSElastic2", {"BackColor": 0, "Left": 225, "Top": 225, "Width": 4965, "Height": 3195, "TabIndex": 2, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0}, [
          ["Image", "Image1", {"Left": 0, "Top": 0, "Width": 4965, "Height": 3195, "Stretch": -1}]
        ]]
      ]],
      ["Label", "b_bankrupt", {"Caption": "b_bankrupt", "BackColor": 8421504, "ForeColor": 12632256, "Left": 30, "Top": 4860, "Width": 5415, "Height": 1365, "FontName": "Arial", "FontSize": 10.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 14, "Alignment": 2, "WordWrap": -1, "BackStyle": 0}],
      ["Label", "b_Title", {"Caption": "b_title", "BackColor": 8421504, "ForeColor": 12632256, "Left": 30, "Top": 60, "Width": 5415, "Height": 585, "FontName": "Arial", "FontSize": 22.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 13, "Alignment": 2, "WordWrap": -1, "BackStyle": 0}],
      ["Label", "b_Status", {"Caption": "b_status", "BackColor": 8421504, "ForeColor": 12632256, "Left": 30, "Top": 810, "Width": 5415, "Height": 315, "FontName": "Arial", "FontSize": 10.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 11, "Alignment": 2, "WordWrap": -1, "BackStyle": 0}],
      ["Label", "b_Week", {"Caption": "b_week", "BackColor": 8421504, "ForeColor": 12632256, "Left": 5700, "Top": 60, "Width": 3795, "Height": 585, "FontName": "Arial", "FontSize": 22.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 6, "Alignment": 2, "WordWrap": -1, "BackStyle": 0}],
      ["Label", "b_Message", {"Caption": "Please let us know that an error has occured in frm_PlayerTurn.  You can send email to bugs@lavamind.com   thanks!", "BackColor": 8421504, "ForeColor": 12632256, "Left": 5760, "Top": 810, "Width": 3750, "Height": 5415, "FontName": "Arial", "FontSize": 10.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 7, "WordWrap": -1, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { FillElastic, VSElastic1, b_Ranking, b_SaveGame, b_BeginTurn, b_QuitGame, b_NewGame, b_Sound } = me.controls;
    const { VSElastic3, VSElastic2, Image1, b_bankrupt, b_Title, b_Status, b_Week, b_Message } = me.controls;
    const HOURGLASS = 11;
    const WHITE = 16777215;
    const LIGHT_GRAY = 12632256;
    const ARROW_CURSOR = 1;

    async function b_BeginTurn_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        game.canBuyStock = -1;
        await handleStockCrashes();
        await warnStockCrashes();
        if (game.lastAuctionType == 1 || game.lastAuctionType == -1) {
            await announceShipAuction();
        }
        if (game.lastAuctionType == 2 || game.lastAuctionType == -2) {
            await announceFacilityAuction();
        }
        if (game.winner != 0) {
            await frm_WinGame.Show();
            await Unload(me);
        } else {
            await Load(frm_Travel4);
            await frm_Travel4.Show();
            await Unload(me);
        }
    }

    function b_BeginTurn_MouseDown(Button, Shift, X, Y) {
        b_BeginTurn.BackColor = WHITE;
    }

    function b_BeginTurn_MouseUp(Button, Shift, X, Y) {
        b_BeginTurn.BackColor = LIGHT_GRAY;
    }

    async function b_NewGame_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        await frm_BeginGame.Show();
        await Unload(me);
    }

    function b_NewGame_MouseDown(Button, Shift, X, Y) {
        b_NewGame.BackColor = WHITE;
    }

    function b_NewGame_MouseUp(Button, Shift, X, Y) {
        b_NewGame.BackColor = LIGHT_GRAY;
    }

    function b_QuitGame_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        End();
    }

    function b_QuitGame_MouseDown(Button, Shift, X, Y) {
        b_QuitGame.BackColor = WHITE;
    }

    function b_QuitGame_MouseUp(Button, Shift, X, Y) {
        b_QuitGame.BackColor = LIGHT_GRAY;
    }

    async function b_Ranking_Click() {
        let levelName = "";
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        if (game.skillLevel == 1) {
            levelName = "Tutorial";
        } else if (game.skillLevel == 2) {
            levelName = "Novice";
        } else if (game.skillLevel == 3) {
            levelName = "Beginner";
        } else if (game.skillLevel == 4) {
            levelName = "Intermediate";
        } else if (game.skillLevel == 5) {
            levelName = "Expert";
        } else if (game.skillLevel == 6) {
            levelName = "Master";
        }
        if (game.winner == 0) {
            frm_Box2.FillElastic.Caption = "Company Ranking";
            frm_Box2.b_Message.FontSize = 10.5;
            frm_Box2.b_Message.Caption = "COMPANY RANKING:" + "\n" + "\n" + "The companies are ranked according to their wealth. The first company to reach " + Format(game.goalNetWorth, "#,#0") + " kubars wins the game!" + "\n" + rankingText() + "\n" + "\n" + "DIFFICULTY LEVEL:  " + levelName;
            await frm_Box2.Show(1);
        } else {
            if (game.goalNetWorth == 1000000000) {
                if (game.winner <= 6) {
                    frm_Box2.FillElastic.Caption = "Company Ranking";
                    frm_Box2.b_Message.Caption = Trim(game.companyNames[game.winner]) + " won the game at the END of LAST WEEK, by being the FIRST company to reach " + Format(game.goalNetWorth, "#,#0") + " kubars!!! This means the game is now officially over." + "\n" + "\n" + "CURRENT RANKING (this week):" + "\n" + rankingText() + "\n" + "\n" + "DIFFICULTY LEVEL:  " + levelName;
                    await frm_Box2.Show(1);
                } else {
                    frm_Box2.FillElastic.Caption = "Company Ranking";
                    frm_Box2.b_Message.Caption = Trim(rivals.companyNames[game.winner - 6]) + " won the game at the END of LAST WEEK, by being the FIRST company to reach " + Format(game.goalNetWorth, "#,#0") + " kubars!!! This means the game is now officially over." + "\n" + "\n" + "CURRENT RANKING (this week):" + "\n" + rankingText() + "\n" + "\n" + "DIFFICULTY LEVEL:  " + levelName;
                    await frm_Box2.Show(1);
                }
            } else if (game.winner <= 6) {
                if (game.winner == game.currentPlayer) {
                    frm_Box2.FillElastic.Caption = "Company Ranking";
                    frm_Box2.b_Message.Caption = "You won the game at the END of LAST WEEK, by being the FIRST company to reach " + Format(game.goalNetWorth, "#,#0") + " kubars!!!" + "\n" + "\n" + "CURRENT RANKING (this week):" + "\n" + rankingText() + "\n" + "\n" + "DIFFICULTY LEVEL:  " + levelName;
                    await frm_Box2.Show(1);
                } else {
                    frm_Box2.FillElastic.Caption = "Company Ranking";
                    frm_Box2.b_Message.Caption = Trim(game.companyNames[game.winner]) + " won the game at the END of LAST WEEK, by being the FIRST company to reach " + Format(game.goalNetWorth, "#,#0") + " kubars!!!" + "\n" + "\n" + "CURRENT RANKING (this week):" + "\n" + rankingText() + "\n" + "\n" + "DIFFICULTY LEVEL:  " + levelName;
                    await frm_Box2.Show(1);
                }
            } else {
                frm_Box2.FillElastic.Caption = "Company Ranking";
                frm_Box2.b_Message.Caption = Trim(rivals.companyNames[game.winner - 6]) + " won the game at the END of LAST WEEK, by being the FIRST company to reach " + Format(game.goalNetWorth, "#,#0") + " kubars!!!" + "\n" + "\n" + "CURRENT RANKING (this week):" + "\n" + rankingText() + "\n" + "\n" + "DIFFICULTY LEVEL:  " + levelName;
                await frm_Box2.Show(1);
            }
        }
    }

    function b_Ranking_MouseDown(Button, Shift, X, Y) {
        b_Ranking.BackColor = WHITE;
    }

    function b_Ranking_MouseUp(Button, Shift, X, Y) {
        b_Ranking.BackColor = LIGHT_GRAY;
    }

    async function b_SaveGame_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        frm_SaveEmail.Tag = "STARTTURN";
        await frm_SaveEmail.Show(1);
        FillElastic.Visible = -1;
    }

    function b_SaveGame_MouseDown(Button, Shift, X, Y) {
        b_SaveGame.BackColor = WHITE;
    }

    function b_SaveGame_MouseUp(Button, Shift, X, Y) {
        b_SaveGame.BackColor = LIGHT_GRAY;
    }

    async function announceFacilityAuction() {
        let winnerName = "";
        let runnerUpName = "";
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        if (game.lastAuctionType == 2) {
            if (game.lastAuctionTopBid > 0) {
                if (game.lastAuctionWinner <= 6) {
                    winnerName = Trim(game.companyNames[game.lastAuctionWinner]);
                    if (game.lastAuctionRunnerUp <= 6) {
                        runnerUpName = Trim(game.companyNames[game.lastAuctionRunnerUp]);
                    } else {
                        runnerUpName = Trim(rivals.companyNames[game.lastAuctionRunnerUp - 6]);
                    }
                } else {
                    winnerName = Trim(rivals.companyNames[game.lastAuctionWinner - 6]);
                    if (game.lastAuctionRunnerUp <= 6) {
                        runnerUpName = Trim(game.companyNames[game.lastAuctionRunnerUp]);
                    } else {
                        runnerUpName = Trim(rivals.companyNames[game.lastAuctionRunnerUp - 6]);
                    }
                }
                frm_Box1Rect.b_Yes.Visible = 0;
                frm_Box1Rect.b_No.Visible = 0;
                frm_Box1Rect.b_OK.Visible = -1;
                frm_Box1Rect.b_Container.BackColor = 0x4000;
                if (game.lastAuctionWinner <= 6) {
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[game.lastAuctionWinner])) + ".bmp");
                } else {
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "op" + Trim(Str((game.lastAuctionWinner - 6))) + ".bmp");
                }
                frm_Box1Rect.b_ImageLable.Caption = winnerName + " won the auction!";
                frm_Box1Rect.b_Message.Caption = winnerName + " bid highest, purchasing the " + facilityName(game.lastAuctionFacility) + " on " + game.planetNames[game.lastAuctionPlanet] + " for " + Format(game.lastAuctionTopBid, "#,#0") + " kubars. The next highest was " + runnerUpName + " with a bid of " + Format(game.lastAuctionSecondBid, "#,#0") + " kubars.";
                if (settings.soundOn == -1 && game.lastAuctionWinner <= 6) {
                    b_Sound.Command = "Close";
                    frm_Box1Rect.b_Sound.Command = "Close";
                    if (game.shipType[game.lastAuctionWinner] <= 6) {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[game.lastAuctionWinner])) + ".wav";
                    } else {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[game.lastAuctionWinner] - 6)) + ".wav";
                    }
                    frm_Box1Rect.b_Sound.Command = "Open";
                    frm_Box1Rect.b_Sound.Command = "Play";
                } else if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    frm_Box1Rect.b_Sound.Command = "Close";
                    frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "op" + Trim(Str(game.lastAuctionWinner - 6)) + ".wav";
                    frm_Box1Rect.b_Sound.Command = "Open";
                    frm_Box1Rect.b_Sound.Command = "Play";
                }
                await frm_Box1Rect.Show(1);
                if (game.currentPlayer == game.lastAuctionWinner) {
                    await spend(game.lastAuctionTopBid, -1);
                }
            } else {
                await Load(frm_Box1Port);
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x4000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "DRED.BMP");
                frm_Box1Port.b_ImageLable.Caption = "Emperor Dred Nicolson";
                frm_Box1Port.b_Message.Caption = "Because none of the companies placed a bid for the facility, Emperor Dred Nicolson has canceled this auction.";
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "auction.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
            }
        } else if (game.lastAuctionType == -2) {
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0x4000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "DRED.BMP");
            frm_Box1Port.b_ImageLable.Caption = "Emperor Dred Nicolson";
            frm_Box1Port.b_Message.Caption = "Because more than one company made exactly the same highest bid, all the companies must bid again for the facility. Another auction will be held at the end of this week.";
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "auction.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
        }
    }

    async function announceShipAuction() {
        let winnerName = "";
        let runnerUpName = "";
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        if (game.lastAuctionType == 1) {
            if (game.lastAuctionTopBid > 0) {
                if (game.lastAuctionWinner <= 6) {
                    winnerName = Trim(game.companyNames[game.lastAuctionWinner]);
                    if (game.lastAuctionRunnerUp <= 6) {
                        runnerUpName = Trim(game.companyNames[game.lastAuctionRunnerUp]);
                    } else {
                        runnerUpName = Trim(rivals.companyNames[game.lastAuctionRunnerUp - 6]);
                    }
                } else {
                    winnerName = Trim(rivals.companyNames[game.lastAuctionWinner - 6]);
                    if (game.lastAuctionRunnerUp <= 6) {
                        runnerUpName = Trim(game.companyNames[game.lastAuctionRunnerUp]);
                    } else {
                        runnerUpName = Trim(rivals.companyNames[game.lastAuctionRunnerUp - 6]);
                    }
                }
                frm_Box1Rect.b_Yes.Visible = 0;
                frm_Box1Rect.b_No.Visible = 0;
                frm_Box1Rect.b_OK.Visible = -1;
                frm_Box1Rect.b_Container.BackColor = 0x4000;
                if (game.lastAuctionWinner <= 6) {
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[game.lastAuctionWinner])) + ".bmp");
                } else {
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "op" + Trim(Str((game.lastAuctionWinner - 6))) + ".bmp");
                }
                frm_Box1Rect.b_ImageLable.Caption = winnerName + " won the auction!";
                frm_Box1Rect.b_Message.Caption = winnerName + " bid highest, purchasing a new, larger ship for " + Format(game.lastAuctionTopBid, "#,#0") + " kubars. The next highest was " + runnerUpName + " with a bid of " + Format(game.lastAuctionSecondBid, "#,#0") + " kubars.";
                if (settings.soundOn == -1 && game.lastAuctionWinner <= 6) {
                    frm_Box1Rect.b_Sound.Command = "Close";
                    if (game.shipType[game.lastAuctionWinner] <= 6) {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[game.lastAuctionWinner])) + ".wav";
                    } else {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[game.lastAuctionWinner] - 6)) + ".wav";
                    }
                    frm_Box1Rect.b_Sound.Command = "Open";
                    frm_Box1Rect.b_Sound.Command = "Play";
                } else if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    frm_Box1Rect.b_Sound.Command = "Close";
                    frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "op" + Trim(Str(game.lastAuctionWinner - 6)) + ".wav";
                    frm_Box1Rect.b_Sound.Command = "Open";
                    frm_Box1Rect.b_Sound.Command = "Play";
                }
                await frm_Box1Rect.Show(1);
                if (game.currentPlayer == game.lastAuctionWinner) {
                    await spend(game.lastAuctionTopBid, -1);
                }
            } else {
                await Load(frm_Box1Port);
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x4000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "DRED.BMP");
                frm_Box1Port.b_ImageLable.Caption = "Emperor Dred Nicolson";
                frm_Box1Port.b_Message.Caption = "Because none of the companies placed a bid for the ship, Emperor Dred Nicolson has canceled this auction.";
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "auction.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
            }
        } else if (game.lastAuctionType == -1) {
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0x4000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "DRED.BMP");
            frm_Box1Port.b_ImageLable.Caption = "Emperor Dred Nicolson";
            frm_Box1Port.b_Message.Caption = "Because more than one company made exactly the same highest bid, all the companies must bid again for the ship. Another auction will be held at the end of this week.";
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "auction.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
        }
    }

    function facilityName(facility) {
        let ret = "";
        facility = CInt(facility);
        if (facility == 1) {
            ret = "Conference Center";
        } else if (facility == 2) {
            ret = "Reception Platform";
        } else if (facility == 3) {
            ret = "PassengerTicket Office";
        } else if (facility == 4) {
            ret = "Landing Dock";
        } else if (facility == 5) {
            ret = "Loading Yard";
        } else if (facility == 6) {
            ret = "Stock Yards";
        } else if (facility == 7) {
            ret = "Fuel Storage Tanks";
        } else if (facility == 8) {
            ret = "Grain Silos";
        } else if (facility == 9) {
            ret = "Livestock Pens";
        } else if (facility == 10) {
            ret = "Chemical Tanks";
        } else if (facility == 11) {
            ret = "Armory";
        } else if (facility == 12) {
            ret = "Fuel Pumps";
        } else if (facility == 13) {
            ret = "Radar Tower";
        } else if (facility == 14) {
            ret = "Control Tower";
        } else if (facility == 15) {
            ret = "Microwave Transmitter";
        } else if (facility == 16) {
            ret = "Transmission Lines";
        } else if (facility == 17) {
            ret = "Broadcasting Center";
        } else if (facility == 18) {
            ret = "Communications Center";
        } else if (facility == 19) {
            ret = "Emergency Clinic";
        } else if (facility == 20) {
            ret = "Sick Bay";
        } else if (facility == 21) {
            ret = "Business Bureau";
        } else if (facility == 22) {
            ret = "Customs Office";
        } else if (facility == 23) {
            ret = "Toxic Waste Disposal Units";
        } else if (facility == 24) {
            ret = "Nuclear Holding Tanks";
        } else if (facility == 25) {
            ret = "Packaging Plant";
        } else if (facility == 26) {
            ret = "Supply House";
        } else if (facility == 27) {
            ret = "Assembly Plant";
        } else if (facility == 28) {
            ret = "Warehouse Maintenance Service";
        } else if (facility == 29) {
            ret = "Freight Terminal";
        } else if (facility == 30) {
            ret = "Merchant's Club";
        } else if (facility == 31) {
            ret = "Refrigeration Bay";
        } else if (facility == 32) {
            ret = "Cooling Station";
        } else if (facility == 33) {
            ret = "Conveyor System";
        } else if (facility == 34) {
            ret = "Transit System";
        } else if (facility == 35) {
            ret = "Defensive Shields";
        } else if (facility == 36) {
            ret = "Sewage System";
        } else if (facility == 37) {
            ret = "Food Center";
        } else if (facility == 38) {
            ret = "Distribution Center";
        } else if (facility == 39) {
            ret = "Processing Plant";
        } else if (facility == 40) {
            ret = "Water Works";
        } else if (facility == 41) {
            ret = "Oxygen Tanks";
        } else if (facility == 42) {
            ret = "Life Support System";
        } else if (facility == 43) {
            ret = "Cargo Depot";
        } else if (facility == 44) {
            ret = "Accommodations Bureau";
        } else if (facility == 45) {
            ret = "Gas Lines";
        } else if (facility == 46) {
            ret = "Main Electrical Generator";
        } else if (facility == 47) {
            ret = "Power Plant";
        } else if (facility == 48) {
            ret = "Refueling Depot";
        } else if (facility == 49) {
            ret = "Docking Station";
        } else if (facility == 50) {
            ret = "Transportation Bureau";
        } else if (facility == 51) {
            ret = "Granary";
        } else if (facility == 52) {
            ret = "Arsenal";
        } else if (facility == 53) {
            ret = "Licensing Department";
        } else if (facility == 54) {
            ret = "Security Administration Center";
        } else if (facility == 55) {
            ret = "Planetary Defense System";
        } else if (facility == 56) {
            ret = "Product Inspection Office";
        } else if (facility == 57) {
            ret = "Labor Relations Office";
        } else if (facility == 58) {
            ret = "Information Center";
        } else if (facility == 59) {
            ret = "Launch Pads";
        } else if (facility == 60) {
            ret = "Weather Satellite";
        } else if (facility == 61) {
            ret = "News Satellite";
        } else if (facility == 62) {
            ret = "Transfer Ports";
        } else if (facility == 63) {
            ret = "Landing Strip";
        } else if (facility == 64) {
            ret = "Engine Maintenance Center";
        } else if (facility == 65) {
            ret = "Orbital Control Module";
        } else if (facility == 66) {
            ret = "Technical Support Service";
        } else if (facility == 67) {
            ret = "Interplanetary Registration Center";
        } else if (facility == 68) {
            ret = "Ship Hangars";
        } else if (facility == 69) {
            ret = "Research Labs";
        } else if (facility == 70) {
            ret = "Medical Center";
        } else if (facility == 71) {
            ret = "Commodity Capsules";
        } else if (facility == 72) {
            ret = "Trade Center";
        } else if (facility == 73) {
            ret = "Currency Exchange Department";
        } else if (facility == 74) {
            ret = "Carrier Hub";
        } else if (facility == 75) {
            ret = "Patrol Fleet";
        } else if (facility == 76) {
            ret = "Ammunition Dump";
        } else if (facility == 77) {
            ret = "Garbage Dump";
        } else if (facility == 78) {
            ret = "Freight Elevators";
        } else if (facility == 79) {
            ret = "Stellar Guidance System";
        } else if (facility == 80) {
            ret = "Landing Installations";
        } else if (facility == 81) {
            ret = "Commodities Repository";
        } else if (facility == 82) {
            ret = "Launch Gates";
        } else if (facility == 83) {
            ret = "Passenger Waiting Area";
        } else if (facility == 84) {
            ret = "Navigation Control Building";
        } else if (facility == 85) {
            ret = "Unloading Cranes";
        } else if (facility == 86) {
            ret = "Landing Base";
        } else if (facility == 87) {
            ret = "Fire Department";
        } else if (facility == 88) {
            ret = "Asteriod Destruction Unit";
        } else if (facility == 89) {
            ret = "Asteriod Detection Site";
        } else if (facility == 90) {
            ret = "Solar Dust Collection Center";
        } else if (facility == 91) {
            ret = "Pirate Warning System";
        } else if (facility == 92) {
            ret = "Water Purification Center";
        } else if (facility == 93) {
            ret = "Atmospheric Filtering System";
        } else if (facility == 94) {
            ret = "Temperature Equalizing System";
        } else if (facility == 95) {
            ret = "Transportation Control Center";
        } else if (facility == 96) {
            ret = "Shipping Dry Docks";
        } else if (facility == 97) {
            ret = "Orbiting Repair Center";
        } else if (facility == 98) {
            ret = "Satellite Refueling Station";
        } else if (facility == 99) {
            ret = "Automated Unloading Unit";
        } else if (facility == 100) {
            ret = "Automated Repair Droid";
        }
        return ret;
    }

    function rankingText() {
        let i = 0;
        let rank = 0;
        let bestRival = 0;
        let bestPlayer = 0;
        let text = "";
        let playerListed = [];
        let rivalListed = [];
        let ret = 0;
        playerListed = DimArray([6], 0);
        rivalListed = DimArray([6], 0);
        updateRivalNetWorth();
        text = "";
        for (i = 1; i <= 6; i++) {
            if (game.graphShowCompany[i] == -1 || i > game.numPlayers) {
                playerListed[i] = -1;
            } else {
                playerListed[i] = 0;
            }
        }
        for (i = 1; i <= game.numRivals; i++) {
            rivalListed[i] = 0;
        }
        rank = 1;
        do {
            bestRival = 0;
            for (i = 1; i <= game.numRivals; i++) {
                if (rivalListed[i] == 0) {
                    bestRival = CInt(i);
                    i = game.numRivals;
                }
            }
            if (bestRival != 0) {
                for (i = 1; i <= game.numRivals; i++) {
                    if (rivals.netWorth[i] > rivals.netWorth[bestRival] && rivalListed[i] == 0) {
                        bestRival = CInt(i);
                    }
                }
            }
            bestPlayer = 0;
            for (i = 1; i <= game.numPlayers; i++) {
                if (playerListed[i] == 0) {
                    bestPlayer = CInt(i);
                    i = game.numPlayers;
                }
            }
            if (bestPlayer != 0) {
                for (i = 1; i <= game.numPlayers; i++) {
                    if (game.netWorth[i] > game.netWorth[bestPlayer] && playerListed[i] == 0) {
                        bestPlayer = CInt(i);
                    }
                }
            }
            if (bestRival != 0 && bestPlayer != 0) {
                if (game.netWorth[bestPlayer] >= rivals.netWorth[bestRival]) {
                    text = text + "\n" + Format(rank, "#,#0") + ")  " + Trim(game.companyNames[bestPlayer]) + "   " + Format(game.netWorth[bestPlayer], "#,#0");
                    playerListed[bestPlayer] = -1;
                } else {
                    text = text + "\n" + Format(rank, "#,#0") + ")  " + Trim(rivals.companyNames[bestRival]) + "   " + Format(rivals.netWorth[bestRival], "#,#0");
                    rivalListed[bestRival] = -1;
                }
            } else if (bestRival != 0) {
                text = text + "\n" + Format(rank, "#,#0") + ")  " + Trim(rivals.companyNames[bestRival]) + "   " + Format(rivals.netWorth[bestRival], "#,#0");
                rivalListed[bestRival] = -1;
            } else if (bestPlayer != 0) {
                text = text + "\n" + Format(rank, "#,#0") + ")  " + Trim(game.companyNames[bestPlayer]) + "   " + Format(game.netWorth[bestPlayer], "#,#0");
                playerListed[bestPlayer] = -1;
            }
            rank = rank + 1;
        } while (bestRival != 0 || bestPlayer != 0);
        ret = text;
        return ret;
    }

    async function handleStockCrashes() {
        let planet = 0;
        let rival = 0;
        for (planet = 0; planet <= LAST_PLANET; planet++) {
            if (game.stockCrashed[planet] == -1) {
                player.shares[planet] = 0;
                player.shareAvgCost[planet] = 0;
                for (rival = 1; rival <= game.numRivals; rival++) {
                    rivals.shares[rival][planet] = 0;
                }
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0xC0;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "NEWS.BMP");
                frm_Box1Port.b_ImageLable.Caption = "Emergency Broadcast";
                frm_Box1Port.b_Message.Caption = "This is an emergency update! The stock market on planet " + Trim(game.planetNames[planet]) + " crashed today!!! Everyone who owned shares in the " + Trim(game.planetNames[planet]) + " Exchange lost their entire investment. Supreme Commander Dred Nicolson has intervened and shut down the " + Trim(game.planetNames[planet]) + " Exchange for one week. Investors are protesting, but there is no way to recover the lost money.";
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "stokcrsh.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                }
            }
        }
    }

    async function warnStockCrashes() {
        let planet = 0;
        let nearCrash = 0;
        for (planet = 0; planet <= LAST_PLANET; planet++) {
            if (game.stockCrashed[planet] == 0) {
                nearCrash = 0;
                if (game.turn > 1 && game.turn <= 15) {
                    if (game.stockPrices[planet][game.turn - 1] < 250) {
                        nearCrash = -1;
                    }
                } else {
                    if (game.stockPrices[planet][15] < 250) {
                        nearCrash = -1;
                    }
                }
                if (nearCrash == -1) {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0xC0;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "NEWS.BMP");
                    frm_Box1Port.b_ImageLable.Caption = "Financial Update!";
                    {
                        const sel = (Mod((Add(game.turn, planet)), 11)) + 1;
                        if (sel == 1) {
                            frm_Box1Port.b_Message.Caption = "Financial analysts across Kukubia are warning that the " + Trim(game.planetNames[planet]) + " Exchange is headed for a crash.";
                        } else if (sel == 2) {
                            frm_Box1Port.b_Message.Caption = "It is rumored that Mr. Zinn is selling off a substantial portion of his investments in the " + Trim(game.planetNames[planet]) + " Exchange. Experts predict this rumor may push the " + Trim(game.planetNames[planet]) + " Exchange down further.";
                        } else if (sel == 3) {
                            frm_Box1Port.b_Message.Caption = "Corporate investors throughout the galaxy have been unloading their shares of the " + Trim(game.planetNames[planet]) + " Exchange.";
                        } else if (sel == 4) {
                            frm_Box1Port.b_Message.Caption = "Small investors are flooding the " + Trim(game.planetNames[planet]) + " Exchange with sell orders.";
                        } else if (sel == 5) {
                            frm_Box1Port.b_Message.Caption = "Everyone seems to feel a stock market meltdown on planet " + Trim(game.planetNames[planet]) + " is imminent.";
                        } else if (sel == 6) {
                            frm_Box1Port.b_Message.Caption = "We have reports that the majority of " + Trim(game.planetNames[planet]) + " Exchange shareholders have lost all confidence in the market.";
                        } else if (sel == 7) {
                            frm_Box1Port.b_Message.Caption = "The " + Trim(game.planetNames[planet]) + " Exchange Board of Trustees has called for calm and requested that investors hold onto their shares. However, this has not stemmed the tide of sell orders.";
                        } else if (sel == 8) {
                            frm_Box1Port.b_Message.Caption = "The " + Trim(game.planetNames[planet]) + " Exchange is in a state of utter confusion as investors pack the floor, scrambling to sell their shares. Some investors have been hiring spaceships at exorbitant prices just to make it to " + Trim(game.planetNames[planet]) + " in time to sell off their investments.";
                        } else if (sel == 9) {
                            frm_Box1Port.b_Message.Caption = "A broad based loss of confidence in the " + Trim(game.planetNames[planet]) + " Exchange has lead to a major crash. The " + Trim(game.planetNames[planet]) + " Exchange Board of Trustees is begging investors to hold onto their shares, but no one seems to be willing to take that chance.";
                        } else if (sel == 10) {
                            frm_Box1Port.b_Message.Caption = "A panic selling spree has brought the " + Trim(game.planetNames[planet]) + " Exchange to its knees. It's only a matter of time before it completely crashes.";
                        } else if (sel == 11) {
                            frm_Box1Port.b_Message.Caption = "It appears that the " + Trim(game.planetNames[planet]) + " Exchange is in a free fall. Analysts across Kukubia are advising their clients to sell their shares before it's too late.";
                        }
                    }
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "stokcrsh.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                    }
                }
            }
        }
    }

    function Form_Activate() {
        let levelName = "";
        const ARROW_CURSOR = 1;
        if (game.skillLevel == 1) {
            levelName = "Tutorial";
        } else if (game.skillLevel == 2) {
            levelName = "Novice";
        } else if (game.skillLevel == 3) {
            levelName = "Beginner";
        } else if (game.skillLevel == 4) {
            levelName = "Intermediate";
        } else if (game.skillLevel == 5) {
            levelName = "Expert";
        } else if (game.skillLevel == 6) {
            levelName = "Master";
        }
        if (game.isEmailGame == -1) {
            if (me.Tag == "GAME SAVED") {
                b_Ranking.Visible = -1;
                b_BeginTurn.Visible = 0;
                b_SaveGame.Visible = 0;
                b_QuitGame.Visible = -1;
                b_NewGame.Visible = -1;
                b_Message.Caption = "Send Email:" + "\n" + "\n" + "Now that you have SAVED the game, you should EXIT GAZILLIONAIRE and open your email software." + "\n" + "\n" + "Once inside your email software, ATTACH the file you just saved to an email letter and send it to " + Trim(player.playerName) + " at " + "\n" + "\n" + Trim(player.emailAddress);
            } else if (me.Tag == "BEGIN TURN") {
                b_Ranking.Visible = -1;
                b_BeginTurn.Visible = -1;
                b_SaveGame.Visible = 0;
                b_QuitGame.Visible = -1;
                b_NewGame.Visible = 0;
                b_Message.Caption = "Next Player's Turn:" + "\n" + "\n" + "It is now " + Trim(game.companyNames[game.currentPlayer]) + "'s turn! If your name is " + Trim(player.playerName) + ", click on the BEGIN TURN button to start your turn." + "\n" + "\n" + "If your name isn't " + Trim(player.playerName) + ", you should EXIT GAZILLIONAIRE and open your email software. Once inside your email software, ATTACH the file you just loaded to an email letter and send it to " + Trim(player.playerName) + " at " + "\n" + "\n" + Trim(player.emailAddress);
            } else if (me.Tag == "END TURN") {
                b_Ranking.Visible = -1;
                b_BeginTurn.Visible = -1;
                b_SaveGame.Visible = -1;
                b_QuitGame.Visible = 0;
                b_NewGame.Visible = 0;
                b_Message.Caption = "Play-By-Email:" + "\n" + "\n" + "It is now " + Trim(game.companyNames[game.currentPlayer]) + "'s turn! If your name is " + Trim(player.playerName) + ", click on the BEGIN TURN button to begin your turn." + "\n" + "\n" + "If your name isn't " + Trim(player.playerName) + ", you must now SAVE the email game by clicking on the SAVE GAME button.";
            }
        } else if (game.isEmailGame == 0) {
            b_Ranking.Visible = 0;
            b_BeginTurn.Visible = -1;
            b_SaveGame.Visible = 0;
            b_QuitGame.Visible = 0;
            b_NewGame.Visible = 0;
            if (game.winner == 0) {
                b_Message.Caption = "COMPANY RANKING:" + "\n" + "\n" + "The companies are ranked according to their wealth. The first company to reach " + Format(game.goalNetWorth, "#,#0") + " kubars wins the game!" + "\n" + rankingText() + "\n" + "\n" + "DIFFICULTY LEVEL:  " + levelName;
            } else {
                if (game.goalNetWorth == 1000000000) {
                    if (game.winner <= 6) {
                        b_Message.Caption = Trim(game.companyNames[game.winner]) + " won the game at the END of LAST WEEK, by being the FIRST company to reach " + Format(game.goalNetWorth, "#,#0") + " kubars!!! This means the game is now officially over." + "\n" + "\n" + "CURRENT RANKING (this week):" + "\n" + rankingText() + "\n" + "\n" + "DIFFICULTY LEVEL:  " + levelName;
                    } else {
                        b_Message.Caption = Trim(rivals.companyNames[game.winner - 6]) + " won the game at the END of LAST WEEK, by being the FIRST company to reach " + Format(game.goalNetWorth, "#,#0") + " kubars!!! This means the game is now officially over." + "\n" + "\n" + "CURRENT RANKING (this week):" + "\n" + rankingText() + "\n" + "\n" + "DIFFICULTY LEVEL:  " + levelName;
                    }
                } else if (game.winner <= 6) {
                    if (game.winner == game.currentPlayer) {
                        b_Message.Caption = "You won the game at the END of LAST WEEK, by being the FIRST company to reach " + Format(game.goalNetWorth, "#,#0") + " kubars!!!" + "\n" + "\n" + "CURRENT RANKING (this week):" + "\n" + rankingText() + "\n" + "\n" + "DIFFICULTY LEVEL:  " + levelName;
                    } else {
                        b_Message.Caption = Trim(game.companyNames[game.winner]) + " won the game at the END of LAST WEEK, by being the FIRST company to reach " + Format(game.goalNetWorth, "#,#0") + " kubars!!!" + "\n" + "\n" + "CURRENT RANKING (this week):" + "\n" + rankingText() + "\n" + "\n" + "DIFFICULTY LEVEL:  " + levelName;
                    }
                } else {
                    b_Message.Caption = Trim(rivals.companyNames[game.winner - 6]) + " won the game at the END of LAST WEEK, by being the FIRST company to reach " + Format(game.goalNetWorth, "#,#0") + " kubars!!!" + "\n" + "\n" + "CURRENT RANKING (this week):" + "\n" + rankingText() + "\n" + "\n" + "DIFFICULTY LEVEL:  " + levelName;
                }
            }
        }
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_Load() {
        let i = 0;
        let amount = 0;
        let text = "";
        let emailSaved = 0;
        const ICON_CURSOR = 4;
        me.MousePointer = HOURGLASS;
        emailSaved = 0;
        amount = 0;
        for (i = 0; i <= LAST_PLANET; i++) {
            if (game.turn <= 15) {
                amount = amount + player.shares[i] * game.stockPrices[i][game.turn];
            } else {
                amount = amount + player.shares[i] * game.stockPrices[i][15];
            }
        }
        if (game.graphShowCompany[game.currentPlayer] == 0) {
            game.netWorth[game.currentPlayer] = amount + player.cash + player.bankBalance - player.loan - player.zinnLoan;
        } else {
            game.netWorth[game.currentPlayer] = 0;
        }
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            if (game.shipType[game.currentPlayer] <= 6) {
                b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer])) + ".wav";
            } else {
                b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer] - 6)) + ".wav";
            }
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        b_Title.Caption = Trim(game.companyNames[game.currentPlayer]);
        b_Week.Caption = "Turn " + Format(game.turn, "#,#0");
        text = "";
        for (i = 1; i <= game.numPlayers; i++) {
            if (game.graphShowCompany[i] == -1) {
                text = text + game.companyNames[i] + "\n";
            }
        }
        if (text == "") {
            b_bankrupt.Caption = "Bankrupt Companies:  none";
        } else {
            b_bankrupt.Caption = "Bankrupt Companies: " + "\n" + text;
        }
        amount = CLng((game.netWorth[game.currentPlayer]) / 50000);
        if (game.netWorth[game.currentPlayer] < 0) {
            if (amount < 0) {
                amount = amount * (-1);
            }
            if (amount > 9) {
                amount = 9;
            }
            if (amount == 0) {
                text = "Unfortunate";
            } else if (amount == 1) {
                text = "Inefficient";
            } else if (amount == 2) {
                text = "Needy";
            } else if (amount == 3) {
                text = "Indigent";
            } else if (amount == 4) {
                text = "Unprosperous";
            } else if (amount == 5) {
                text = "Unsuccessful";
            } else if (amount == 6) {
                text = "Debtor";
            } else if (amount == 7) {
                text = "Insolvent";
            } else if (amount == 8) {
                text = "Disasterous";
            } else if (amount == 9) {
                text = "Destitute";
            }
            b_Status.Caption = "Status: " + text;
            {
                const sel = ((Mod(player.arrivalRoll, 4)) + 1);
                if (sel == 1) {
                    text = "Trader";
                } else if (sel == 2) {
                    text = "Merchant";
                } else if (sel == 3) {
                    text = "Business Person";
                } else if (sel == 4) {
                    text = "Entrepreneur";
                }
            }
            b_Status.Caption = b_Status.Caption + " " + text;
        } else if (game.netWorth[game.currentPlayer] >= 0) {
            if (amount > 20) {
                amount = 20;
            }
            if (amount == 0) {
                text = "Struggling";
            } else if (amount == 1) {
                text = "Average";
            } else if (amount == 2) {
                text = "Striving";
            } else if (amount == 3) {
                text = "Industrious";
            } else if (amount == 4) {
                text = "Intelligent";
            } else if (amount == 5) {
                text = "Diligent";
            } else if (amount == 6) {
                text = "Advantageous";
            } else if (amount == 7) {
                text = "Assiduous";
            } else if (amount == 8) {
                text = "Capitalist";
            } else if (amount == 9) {
                text = "Ardent";
            } else if (amount == 10) {
                text = "First Rate";
            } else if (amount == 11) {
                text = "Successful";
            } else if (amount == 12) {
                text = "Enterprising";
            } else if (amount == 13) {
                text = "Prosperous";
            } else if (amount == 15) {
                text = "Thriving";
            } else if (amount == 15) {
                text = "Exceptional";
            } else if (amount == 16) {
                text = "Wealthy";
            } else if (amount == 17) {
                text = "Elite";
            } else if (amount == 18) {
                text = "Outstanding";
            } else if (amount == 19) {
                text = "Paramount";
            } else if (amount == 20) {
                text = "Supreme";
            }
            b_Status.Caption = "Status: " + text;
            {
                const sel = ((Mod(player.arrivalRoll, 4)) + 1);
                if (sel == 1) {
                    text = "Trader";
                } else if (sel == 2) {
                    text = "Merchant";
                } else if (sel == 3) {
                    text = "Business Person";
                } else if (sel == 4) {
                    text = "Entrepreneur";
                }
            }
            b_Status.Caption = b_Status.Caption + " " + text;
        }
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer])) + ".bmp");
        if (game.isEmailGame == -1 && emailSaved == 0) {
            emailSaved = -1;
            if (Trim(game.emailFileName) == "") {
            } else {
                me.MousePointer = ICON_CURSOR;
                await saveEmailGame("STARTTURN");
                me.MousePointer = ARROW_CURSOR;
            }
        }
    }

    return {
        b_BeginTurn_Click, b_BeginTurn_MouseDown, b_BeginTurn_MouseUp, b_NewGame_Click,
        b_NewGame_MouseDown, b_NewGame_MouseUp, b_QuitGame_Click, b_QuitGame_MouseDown,
        b_QuitGame_MouseUp, b_Ranking_Click, b_Ranking_MouseDown, b_Ranking_MouseUp,
        b_SaveGame_Click, b_SaveGame_MouseDown, b_SaveGame_MouseUp, announceFacilityAuction,
        announceShipAuction, facilityName, rankingText, handleStockCrashes,
        warnStockCrashes, Form_Activate, Form_Load,
    };
});
