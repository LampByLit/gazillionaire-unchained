// Originally translated from src/LEAVE.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_LeavePlanet",
  ["Form", "frm_LeavePlanet", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Leave Planet", "BackColor": 0, "Left": 825, "Top": 2145, "Width": 8205, "Height": 5235, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 825, "ClientTop": 2145, "ClientWidth": 8205, "ClientHeight": 5235}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 0, "ForeColor": 65535, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0, "PicturePos": 9}, [
      ["Label", "Label4", {"ForeColor": 65535, "Left": 6900, "Top": 2310, "Width": 2625, "Height": 1125, "TabIndex": 17, "Alignment": 2, "BackStyle": 0}],
      ["Label", "Label3", {"ForeColor": 65535, "Left": 0, "Top": 5520, "Width": 4725, "Height": 300, "TabIndex": 13, "BackStyle": 0}],
      ["Label", "Label2", {"ForeColor": 65535, "Left": 4680, "Top": 1650, "Width": 4920, "Height": 300, "TabIndex": 14, "Alignment": 1, "BackStyle": 0}],
      ["Label", "Label1", {"ForeColor": 65535, "Left": 0, "Top": 2670, "Width": 5220, "Height": 300, "TabIndex": 15, "BackStyle": 0}],
      ...planetButtons({"BackColor": 0, "ForeColor": 16777215, "FontName": "Arial", "FontSize": 6.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "CaptionPos": 5, "PicturePos": 11, "WordWrap": 0, "AccessKey": -1, "IntBkg": 0}, true),
      ["MMControl", "b_Sound", {"Left": 6090, "Top": 90, "Width": 3540, "Height": 330, "TabIndex": 16, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic9", {"BackColor": 0, "Left": 0, "Top": 6240, "Width": 9600, "Height": 630, "TabIndex": 1, "AutoSizeChildren": 1, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "IntBkg": 0}, [
        ["VideoSoftElastic", "b_Facility", {"BackColor": 0, "ForeColor": 16776960, "Left": 4800, "Top": 90, "Width": 2355, "Height": 450, "TabIndex": 12, "BevelInner": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Company Facilities", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}],
        ["VideoSoftElastic", "b_Help", {"BackColor": 0, "ForeColor": 16776960, "Left": 7155, "Top": 90, "Width": 2355, "Height": 450, "TabIndex": 4, "BevelInner": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Stay", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}],
        ["VideoSoftElastic", "b_DistanceChart", {"BackColor": 0, "ForeColor": 16776960, "Left": 2445, "Top": 90, "Width": 2355, "Height": 450, "TabIndex": 3, "BevelInner": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Distance Chart", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}],
        ["VideoSoftElastic", "b_Exit", {"BackColor": 0, "ForeColor": 16776960, "Left": 90, "Top": 90, "Width": 2355, "Height": 450, "TabIndex": 2, "BevelInner": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Return to Main Menu", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}]
      ]]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Planet, b_Sound, VSElastic9, b_Facility, b_Help, b_DistanceChart, b_Exit } = me.controls;
    const { Label4, Label3, Label2, Label1 } = me.controls;
    const HOURGLASS = 11;
    const YELLOW = 65535;
    const ARROW_CURSOR = 1;
    const RED = 255;
    let messageColor = 0;  // Static in travelToPlanet

    async function b_DistanceChart_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await frm_DistanceChart.Show();
        await Unload(me);
    }

    function b_DistanceChart_MouseDown(Button, Shift, X, Y) {
        b_DistanceChart.BackColor = 0x404040;
    }

    function b_DistanceChart_MouseUp(Button, Shift, X, Y) {
        b_DistanceChart.BackColor = 0x0;
    }

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_Exit_MouseDown(Button, Shift, X, Y) {
        b_Exit.BackColor = 0x404040;
    }

    function b_Exit_MouseUp(Button, Shift, X, Y) {
        b_Exit.BackColor = 0x0;
    }

    async function b_Facility_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await frm_Facility.Show();
        await Unload(me);
    }

    function b_Facility_MouseDown(Button, Shift, X, Y) {
        b_Facility.BackColor = 0x404040;
    }

    function b_Facility_MouseUp(Button, Shift, X, Y) {
        b_Facility.BackColor = 0x0;
    }

    async function b_Help_Click() {
        frm_BoxYesNo.FillElastic.Caption = "\n" + "Stay on " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " for a week? No fuel is burned and no passengers board, but crew wages, taxes and loan interest still come due.";
        await frm_BoxYesNo.Show(1);
        const confirmed = frm_BoxYesNo.Tag == "YES";
        await Unload(frm_BoxYesNo);
        if (confirmed) {
            await travelToPlanet(game.planet[game.currentPlayer]);
        }
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = 0x404040;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = 0x0;
    }

    async function b_Planet_Click(Index) {
        me.MousePointer = HOURGLASS;
        if (game.planet[game.currentPlayer] == Index) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Travel";
            frm_Box0.b_Message.Caption = "\n" + "You are already on " + game.planetNames[Index] + ". Try another planet.";
            await frm_Box0.Show(1);
        } else {
            await travelToPlanet((Index));
        }
    }

    async function travelToPlanet(destination) {
        let stockValue = 0;
        let planet = 0;
        let returnToMenu = 0;
        let unusedText = "";
        destination = CInt(destination);
        try {
            const YELLOW = 65535;
            me.MousePointer = HOURGLASS;
            returnToMenu = 0;
            unusedText = "";
            FillElastic.Visible = 0;
            stockValue = 0;
            for (planet = 0; planet <= LAST_PLANET; planet++) {
                if (game.turn <= 15) {
                    stockValue = stockValue + player.shares[planet] * game.stockPrices[planet][game.turn];
                } else {
                    stockValue = stockValue + player.shares[planet] * game.stockPrices[planet][15];
                }
            }
            if (game.graphShowCompany[game.currentPlayer] == 0) {
                game.netWorth[game.currentPlayer] = stockValue + player.cash + player.bankBalance - player.loan - player.zinnLoan;
            } else {
                game.netWorth[game.currentPlayer] = 0;
            }
            await autoSave();
            if (player.zinnLoan > player.zinnCreditLimit || player.loan > player.creditLimit) {
                frm_Box1Port.b_Yes.Caption = "Go To Main Menu";
                frm_Box1Port.b_No.Caption = "Bankrupt Me!";
                frm_Box1Port.b_Yes.Visible = -1;
                frm_Box1Port.b_No.Visible = -1;
                frm_Box1Port.b_OK.Visible = 0;
                frm_Box1Port.b_Container.BackColor = YELLOW;
                frm_Box1Port.b_Message.ForeColor = messageColor;
                if (player.zinnLoan > player.zinnCreditLimit) {
                    frm_Box1Port.b_Message.Caption = "If you leave the planet now you will go bankrupt and lose the game! You cannot owe more than " + Format(player.zinnCreditLimit, "#,#0") + " kubars to Mr. Zinn." + "\n" + "\n" + "Do you want to return to the Main Menu and try to straighten out your finances?" + "\n" + "\n" + "If you click on BANKRUPT ME, you will leave the planet and lose the game. If you click on GO TO MAIN MENU, you will return to the Main Menu.";
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ZINN.BMP");
                    frm_Box1Port.b_ImageLable.Caption = "Mr. Zinn";
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                } else {
                    frm_Box1Port.b_Message.Caption = "If you leave the planet now you will go bankrupt and lose the game! You cannot owe more than " + Format(player.creditLimit, "#,#0") + " kubars to the Trader's Union." + "\n" + "\n" + "Do you want to return to the Main Menu and try to straighten out your finances?" + "\n" + "\n" + "If you click on BANKRUPT ME, you will leave the planet and lose the game. If you click on GO TO MAIN MENU, you will return to the Main Menu.";
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan1.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Trader's Union Official";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                }
                await frm_Box1Port.Show(1);
                me.MousePointer = HOURGLASS;
                if (frm_Box1Port.Tag == "YES") {
                    await Unload(frm_Box1Port);
                    returnToMenu = -1;
                } else {
                    await Unload(frm_Box1Port);
                    for (planet = 0; planet <= LAST_PLANET; planet++) {
                        game.facilitiesOwned[game.currentPlayer][planet] = 0;
                        game.facilityFees[game.currentPlayer][planet] = 0;
                        game.facilityRevenue[game.currentPlayer][planet] = 0;
                    }
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                    }
                    await frm_Bankrupt1.Show();
                    await Unload(me);
                    return;
                }
            }
            if (returnToMenu == -1) {
                await frm_MainMenu.Show();
                await Unload(me);
            } else {
                if (player.quickDeposit == -1) {
                    player.bankBalance = player.bankBalance + player.cash;
                    player.cash = 0;
                }
                if (player.quickTravel == 0 && destination != game.planet[game.currentPlayer]) {
                    me.MousePointer = HOURGLASS;
                    game.previousPlanet[game.currentPlayer] = game.planet[game.currentPlayer];
                    game.planet[game.currentPlayer] = destination;
                    if (game.auctionType == 1 || game.auctionType == 2) {
                        frm_Auction.Tag = "TRAVEL0";
                        await frm_Auction.Show();
                    } else {
                        await frm_Travel0.Show();
                    }
                    await Unload(me);
                } else {
                    me.MousePointer = HOURGLASS;
                    game.previousPlanet[game.currentPlayer] = game.planet[game.currentPlayer];
                    game.planet[game.currentPlayer] = destination;
                    await Load(frm_Travel1);
                    if (game.auctionType == 1 || game.auctionType == 2) {
                        frm_Auction.Tag = "TRAVEL1";
                        await frm_Auction.Show();
                    } else {
                        await Load(frm_Travel1);
                        await frm_Travel1.Show();
                    }
                    await Unload(me);
                }
            }
            return;
        } catch (e) {
            Err.Catch(e);
            await reportFileError(Err.Number);
            return;
        }
    }

    function unusedStub() {
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_Exit_Click();
        }
    }

    function Form_Load() {
        let planet = 0;
        const RED = 255;
        me.MousePointer = HOURGLASS;
        FillElastic.Picture = LoadPicture(Trim(paths.imageDir) + "STARS2.BMP");
        for (planet = 0; planet <= LAST_PLANET; planet++) {
            b_Planet[planet].Picture = LoadPicture(Trim(paths.imageDir) + game.planetNames[planet] + "1.bmp");
            b_Planet[planet].Caption = game.planetNames[planet];
            b_Planet[planet].Left = game.planetX[planet] * MAP_UNIT_X;
            b_Planet[planet].Top = game.planetY[planet] * MAP_UNIT_Y;
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockFacilities) {
            b_Facility.Visible = 0;
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockDistanceChart) {
            b_DistanceChart.Visible = 0;
        }
        if (player.supplyChartPlanet >= 0 && player.supplyChartPlanet <= LAST_PLANET) {
            b_Planet[player.supplyChartPlanet].ForeColor = YELLOW;
        }
        b_Planet[game.planet[game.currentPlayer]].ForeColor = RED;
    }

    function Label1_Click() {
        Label1.Caption = "<-- This way to the Imperial Treasury.";
    }

    function Label2_Click() {
        Label2.Caption = "This way to Dred Nicolson's home planet -->";
    }

    function Label3_Click() {
        Label3.Caption = "<-- This way to Outer Glosser.";
    }

    function Label4_Click() {
        Label4.Caption = "This is the galaxy of Pata Pata Pita.";
    }

    return {
        b_DistanceChart_Click, b_DistanceChart_MouseDown, b_DistanceChart_MouseUp, b_Exit_Click,
        b_Exit_MouseDown, b_Exit_MouseUp, b_Facility_Click, b_Facility_MouseDown,
        b_Facility_MouseUp, b_Help_Click, b_Help_MouseDown, b_Help_MouseUp,
        b_Planet_Click, travelToPlanet, unusedStub, Form_Activate,
        Form_KeyPress, Form_Load, Label1_Click, Label2_Click,
        Label3_Click, Label4_Click,
    };
});
