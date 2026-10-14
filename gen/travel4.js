// Originally translated from src/TRAVEL4.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Travel4",
  ["Form", "frm_Travel4", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Travel 4", "BackColor": 0, "Left": 555, "Top": 1710, "Width": 7980, "Height": 4965, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 555, "ClientTop": 1710, "ClientWidth": 7980, "ClientHeight": 4965}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 0, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0, "PicturePos": 9}, [
      ["MMControl", "b_Sound", {"Left": 5370, "Top": 360, "Width": 3540, "Height": 330, "TabIndex": 4, "Visible": 0}],
      ["Label", "Label3", {"Caption": "Home of Feaks and Friends", "ForeColor": 16777215, "Left": 4170, "Top": 3750, "Width": 5205, "Height": 810, "FontName": "Times New Roman", "FontSize": 12, "FontBold": -1, "FontItalic": -1, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 3, "Alignment": 2, "AutoSize": -1, "WordWrap": -1, "BackStyle": 0}],
      ["Label", "Label2", {"ForeColor": 65535, "Left": 0, "Top": 90, "Width": 9390, "Height": 945, "TabIndex": 2, "BackStyle": 0}],
      ["Label", "Label1", {"Caption": "Welcome To Stye", "ForeColor": 16777215, "Left": 4170, "Top": 1425, "Width": 5190, "Height": 2205, "FontName": "Times New Roman", "FontSize": 48, "FontBold": -1, "FontItalic": -1, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 1, "Alignment": 2, "AutoSize": -1, "WordWrap": -1, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, Label3, Label2, Label1 } = me.controls;
    const HOURGLASS = 11;
    const BLACK = 0;
    const ARROW_CURSOR = 1;

    async function continueToMainMenu() {
        let i = 0;
        let graphKind = 0;
        let leadingRival = 0;
        let leadingPlayer = 0;
        let soundFile = "";
        me.MousePointer = HOURGLASS;
        updateRivalNetWorth();
        FillElastic.Visible = 0;
        me.MousePointer = HOURGLASS;
        graphKind = Mod(game.turn, 3);
        if (graphKind == 1) {
            await Load(frm_BarGraph);
            frm_BarGraph.Tag = "NEWTURN";
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                leadingRival = 1;
                for (i = 2; i <= game.numRivals; i++) {
                    if (rivals.netWorth[i] > rivals.netWorth[leadingRival]) {
                        leadingRival = CLng(i);
                    }
                }
                for (i = 1; i <= game.numPlayers; i++) {
                    if (game.graphShowCompany[i] == 0) {
                        leadingPlayer = CLng(i);
                    }
                }
                for (i = 1; i <= game.numPlayers; i++) {
                    if (game.netWorth[i] > game.netWorth[leadingPlayer] && game.graphShowCompany[i] == 0) {
                        leadingPlayer = CLng(i);
                    }
                }
                if (game.netWorth[leadingPlayer] >= rivals.netWorth[leadingRival]) {
                    if (game.shipType[leadingPlayer] <= 6) {
                        soundFile = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[leadingPlayer])) + ".wav";
                    } else {
                        soundFile = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[leadingPlayer] - 6)) + ".wav";
                    }
                } else {
                    soundFile = Trim(paths.soundDir) + "op" + Trim(Str(leadingRival)) + ".wav";
                }
                frm_BarGraph.b_Sound.Command = "Close";
                frm_BarGraph.b_Sound.FileName = soundFile;
                frm_BarGraph.b_Sound.Command = "Open";
                frm_BarGraph.b_Sound.Command = "Play";
            }
            await frm_BarGraph.Show(1);
        } else if (graphKind == 0) {
            await Load(frm_LineGraph);
            frm_LineGraph.Tag = "NEWTURN";
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                leadingRival = 1;
                for (i = 2; i <= game.numRivals; i++) {
                    if (rivals.netWorth[i] > rivals.netWorth[leadingRival]) {
                        leadingRival = CLng(i);
                    }
                }
                for (i = 1; i <= game.numPlayers; i++) {
                    if (game.graphShowCompany[i] == 0) {
                        leadingPlayer = CLng(i);
                    }
                }
                for (i = 1; i <= game.numPlayers; i++) {
                    if (game.netWorth[i] > game.netWorth[leadingPlayer] && game.graphShowCompany[i] == 0) {
                        leadingPlayer = CLng(i);
                    }
                }
                if (game.netWorth[leadingPlayer] >= rivals.netWorth[leadingRival]) {
                    if (game.shipType[leadingPlayer] <= 6) {
                        soundFile = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[leadingPlayer])) + ".wav";
                    } else {
                        soundFile = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[leadingPlayer] - 6)) + ".wav";
                    }
                } else {
                    soundFile = Trim(paths.soundDir) + "op" + Trim(Str(leadingRival)) + ".wav";
                }
                frm_LineGraph.b_Sound.Command = "Close";
                frm_LineGraph.b_Sound.FileName = soundFile;
                frm_LineGraph.b_Sound.Command = "Open";
                frm_LineGraph.b_Sound.Command = "Play";
            }
            await frm_LineGraph.Show(1);
        } else if (graphKind == 2) {
            await Load(frm_PieChart);
            frm_PieChart.Tag = "NEWTURN";
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                leadingRival = 1;
                for (i = 2; i <= game.numRivals; i++) {
                    if (rivals.netWorth[i] > rivals.netWorth[leadingRival]) {
                        leadingRival = CLng(i);
                    }
                }
                for (i = 1; i <= game.numPlayers; i++) {
                    if (game.graphShowCompany[i] == 0) {
                        leadingPlayer = CLng(i);
                    }
                }
                for (i = 1; i <= game.numPlayers; i++) {
                    if (game.netWorth[i] > game.netWorth[leadingPlayer] && game.graphShowCompany[i] == 0) {
                        leadingPlayer = CLng(i);
                    }
                }
                if (game.netWorth[leadingPlayer] >= rivals.netWorth[leadingRival]) {
                    if (game.shipType[leadingPlayer] <= 6) {
                        soundFile = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[leadingPlayer])) + ".wav";
                    } else {
                        soundFile = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[leadingPlayer] - 6)) + ".wav";
                    }
                } else {
                    soundFile = Trim(paths.soundDir) + "op" + Trim(Str(leadingRival)) + ".wav";
                }
                frm_PieChart.b_Sound.Command = "Close";
                frm_PieChart.b_Sound.FileName = soundFile;
                frm_PieChart.b_Sound.Command = "Open";
                frm_PieChart.b_Sound.Command = "Play";
            }
            await frm_PieChart.Show(1);
        }
        await autoSave();
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        await frm_MainMenu.Show();
        await Unload(me);
    }

    async function announceWeeklyEvent() {
        let eventPlanet = 0;
        eventPlanet = (Mod(game.turn, LAST_PLANET + 1));
        if (game.weeklyEventRoll == 1) {
            if (game.planet[game.currentPlayer] == eventPlanet) {
                frm_Box1Sqr.b_Yes.Visible = 0;
                frm_Box1Sqr.b_No.Visible = 0;
                frm_Box1Sqr.b_OK.Visible = -1;
                frm_Box1Sqr.b_Container.BackColor = 0x4000;
                frm_Box1Sqr.Image1.Picture = LoadPicture(Trim(paths.imageDir) + game.planetNames[eventPlanet] + "2.bmp");
                frm_Box1Sqr.b_Message.Caption = "Due to an unexpected record harvest, the supply of agricultural goods on " + Trim(game.planetNames[eventPlanet]) + " temporarily soars. Prices plummet as Cantaloupe, Jelly Beans, Moon Ferns, Frog Legs, Whip Cream and Babel Seeds flood the market.";
                if (settings.soundOn == -1) {
                    frm_Box1Sqr.b_Sound.Command = "Close";
                    frm_Box1Sqr.b_Sound.FileName = Trim(paths.soundDir) + "event.wav";
                    frm_Box1Sqr.b_Sound.Command = "Open";
                    frm_Box1Sqr.b_Sound.Command = "Play";
                }
                await frm_Box1Sqr.Show(1);
            }
        } else if (game.weeklyEventRoll == 2) {
            if (game.planet[game.currentPlayer] == eventPlanet) {
                frm_Box1Sqr.b_Yes.Visible = 0;
                frm_Box1Sqr.b_No.Visible = 0;
                frm_Box1Sqr.b_OK.Visible = -1;
                frm_Box1Sqr.b_Container.BackColor = 0x4000;
                frm_Box1Sqr.Image1.Picture = LoadPicture(Trim(paths.imageDir) + game.planetNames[eventPlanet] + "2.bmp");
                frm_Box1Sqr.b_Message.Caption = "Due to an unexpected surge in production, the supply of manufactured goods on " + Trim(game.planetNames[eventPlanet]) + " temporarily soars. Prices plummet as Diapers, Umbrellas, Toasters, Polyester, Hair Tonic and Lava Lamps flood the market.";
                if (settings.soundOn == -1) {
                    frm_Box1Sqr.b_Sound.Command = "Close";
                    frm_Box1Sqr.b_Sound.FileName = Trim(paths.soundDir) + "event.wav";
                    frm_Box1Sqr.b_Sound.Command = "Open";
                    frm_Box1Sqr.b_Sound.Command = "Play";
                }
                await frm_Box1Sqr.Show(1);
            }
        } else if (game.weeklyEventRoll == 3) {
            if (game.planet[game.currentPlayer] == eventPlanet) {
                frm_Box1Sqr.b_Yes.Visible = 0;
                frm_Box1Sqr.b_No.Visible = 0;
                frm_Box1Sqr.b_OK.Visible = -1;
                frm_Box1Sqr.b_Container.BackColor = 0x4000;
                frm_Box1Sqr.Image1.Picture = LoadPicture(Trim(paths.imageDir) + game.planetNames[eventPlanet] + "2.bmp");
                frm_Box1Sqr.b_Message.Caption = "Due to an unexpected rash of foreign dumping, the supply of raw materials on " + Trim(game.planetNames[eventPlanet]) + " temporarily soars. Prices plummet as Oxygen, Oggle Sand, Kryptoons, X Fuels, Gems and Exotic flood the market.";
                if (settings.soundOn == -1) {
                    frm_Box1Sqr.b_Sound.Command = "Close";
                    frm_Box1Sqr.b_Sound.FileName = Trim(paths.soundDir) + "event.wav";
                    frm_Box1Sqr.b_Sound.Command = "Open";
                    frm_Box1Sqr.b_Sound.Command = "Play";
                }
                await frm_Box1Sqr.Show(1);
            }
        } else if (game.weeklyEventRoll == 4) {
            if (game.planet[game.currentPlayer] == eventPlanet) {
                frm_Box1Sqr.b_Yes.Visible = 0;
                frm_Box1Sqr.b_No.Visible = 0;
                frm_Box1Sqr.b_OK.Visible = -1;
                frm_Box1Sqr.b_Container.BackColor = 0x4000;
                frm_Box1Sqr.Image1.Picture = LoadPicture(Trim(paths.imageDir) + game.planetNames[eventPlanet] + "2.bmp");
                frm_Box1Sqr.b_Message.Caption = "Due to an unexpectedly poor harvest, the supply of agricultural goods on " + Trim(game.planetNames[eventPlanet]) + " temporarily runs short. Prices soar as Cantaloupe, Jelly Beans, Moon Ferns, Frog Legs, Whip Cream and Babel Seeds become hard to find.";
                if (settings.soundOn == -1) {
                    frm_Box1Sqr.b_Sound.Command = "Close";
                    frm_Box1Sqr.b_Sound.FileName = Trim(paths.soundDir) + "event.wav";
                    frm_Box1Sqr.b_Sound.Command = "Open";
                    frm_Box1Sqr.b_Sound.Command = "Play";
                }
                await frm_Box1Sqr.Show(1);
            }
        } else if (game.weeklyEventRoll == 5) {
            if (game.planet[game.currentPlayer] == eventPlanet) {
                frm_Box1Sqr.b_Yes.Visible = 0;
                frm_Box1Sqr.b_No.Visible = 0;
                frm_Box1Sqr.b_OK.Visible = -1;
                frm_Box1Sqr.b_Container.BackColor = 0x4000;
                frm_Box1Sqr.Image1.Picture = LoadPicture(Trim(paths.imageDir) + game.planetNames[eventPlanet] + "2.bmp");
                frm_Box1Sqr.b_Message.Caption = "Due to labor unrest and strikes across " + Trim(game.planetNames[eventPlanet]) + ", the supply of manufactured goods temporarily runs short. Prices soar as Diapers, Umbrellas, Toasters, Polyester, Hair Tonic and Lava Lamps become hard to find.";
                if (settings.soundOn == -1) {
                    frm_Box1Sqr.b_Sound.Command = "Close";
                    frm_Box1Sqr.b_Sound.FileName = Trim(paths.soundDir) + "event.wav";
                    frm_Box1Sqr.b_Sound.Command = "Open";
                    frm_Box1Sqr.b_Sound.Command = "Play";
                }
                await frm_Box1Sqr.Show(1);
            }
        } else if (game.weeklyEventRoll == 6) {
            if (game.planet[game.currentPlayer] == eventPlanet) {
                frm_Box1Sqr.b_Yes.Visible = 0;
                frm_Box1Sqr.b_No.Visible = 0;
                frm_Box1Sqr.b_OK.Visible = -1;
                frm_Box1Sqr.b_Container.BackColor = 0x4000;
                frm_Box1Sqr.Image1.Picture = LoadPicture(Trim(paths.imageDir) + game.planetNames[eventPlanet] + "2.bmp");
                frm_Box1Sqr.b_Message.Caption = "Due to an unexpected streak of natural disasters on " + Trim(game.planetNames[eventPlanet]) + ", the supply of raw materials temporarily runs short. Prices soar as Oxygen, Oggle Sand, Kryptoons, X Fuels, Gems and Exotic become difficult to find.";
                if (settings.soundOn == -1) {
                    frm_Box1Sqr.b_Sound.Command = "Close";
                    frm_Box1Sqr.b_Sound.FileName = Trim(paths.soundDir) + "event.wav";
                    frm_Box1Sqr.b_Sound.Command = "Open";
                    frm_Box1Sqr.b_Sound.Command = "Play";
                }
                await frm_Box1Sqr.Show(1);
            }
        } else if (game.weeklyEventRoll == 7) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockFuel) {
                frm_Box1Rect.b_Yes.Visible = 0;
                frm_Box1Rect.b_No.Visible = 0;
                frm_Box1Rect.b_OK.Visible = -1;
                frm_Box1Rect.b_Container.BackColor = 0xC0;
                frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "nosh.bmp");
                frm_Box1Rect.b_ImageLable.Caption = "Fuel Prices Sky Rocket";
                frm_Box1Rect.b_Message.Caption = "Due to a galactic fuel shortage, fuel prices are on the rise. You can expect to pay higher prices at the refueling docks in the coming weeks.";
                if (settings.soundOn == -1) {
                    frm_Box1Rect.b_Sound.Command = "Close";
                    frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "nosh.wav";
                    frm_Box1Rect.b_Sound.Command = "Open";
                    frm_Box1Rect.b_Sound.Command = "Play";
                }
                await frm_Box1Rect.Show(1);
            }
        } else if (game.weeklyEventRoll == 8) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockFuel && game.fuelBasePrice >= 15) {
                frm_Box1Rect.b_Yes.Visible = 0;
                frm_Box1Rect.b_No.Visible = 0;
                frm_Box1Rect.b_OK.Visible = -1;
                frm_Box1Rect.b_Container.BackColor = 0x400000;
                frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "nosh.bmp");
                frm_Box1Rect.b_ImageLable.Caption = "Fuel Prices Plummet";
                frm_Box1Rect.b_Message.Caption = "Due to a glut of fuel on the market, fuel prices are falling. You can expect to see lower prices at the refueling docks in the coming weeks.";
                if (settings.soundOn == -1) {
                    frm_Box1Rect.b_Sound.Command = "Close";
                    frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "nosh.wav";
                    frm_Box1Rect.b_Sound.Command = "Open";
                    frm_Box1Rect.b_Sound.Command = "Play";
                }
                await frm_Box1Rect.Show(1);
            }
        } else if (game.weeklyEventRoll == 9) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes && game.complexity >= game.unlockPassengers) {
                if (game.passengerTaxRate < 0.5) {
                    frm_Box1Rect.b_Yes.Visible = 0;
                    frm_Box1Rect.b_No.Visible = 0;
                    frm_Box1Rect.b_OK.Visible = -1;
                    frm_Box1Rect.b_Container.BackColor = 0xC0;
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "TAX.BMP");
                    frm_Box1Rect.b_ImageLable.Caption = "Your Friendly Tax Auditor";
                    frm_Box1Rect.b_Message.Caption = "In order to bring in more revenue, the Imperial Government raises the passenger tax rate from " + Format((game.passengerTaxRate * 100) - 1, "#,#0") + "% to " + Format((game.passengerTaxRate * 100), "#,#0") + "%.";
                    if (settings.soundOn == -1) {
                        frm_Box1Rect.b_Sound.Command = "Close";
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "tax.wav";
                        frm_Box1Rect.b_Sound.Command = "Open";
                        frm_Box1Rect.b_Sound.Command = "Play";
                    }
                    await frm_Box1Rect.Show(1);
                }
            }
        } else if (game.weeklyEventRoll == 10) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes) {
                if (game.exportTariff < 0.15) {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0xC0;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "DRED.BMP");
                    frm_Box1Port.b_ImageLable.Caption = "Emperor Dred Nicolson";
                    frm_Box1Port.b_Message.Caption = "Because Supreme Commander Dred Nicolson has run up a big deficit, the Imperial Government raises the export tariff rate from " + Format((game.exportTariff * 100) - 1, "#,#0") + "% to " + Format((game.exportTariff * 100), "#,#0") + "%.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "tax.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                }
            }
        } else if (game.weeklyEventRoll == 11) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes) {
                if (game.importTariff < 0.15) {
                    frm_Box1Rect.b_Yes.Visible = 0;
                    frm_Box1Rect.b_No.Visible = 0;
                    frm_Box1Rect.b_OK.Visible = -1;
                    frm_Box1Rect.b_Container.BackColor = 0xC0;
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "tax.bmp");
                    frm_Box1Rect.b_ImageLable.Caption = "Your Friendly Tax Auditor";
                    frm_Box1Rect.b_Message.Caption = "Because politicians love to increase taxes, the Imperial Government raises the import tariff rate from " + Format((game.importTariff * 100) - 1, "#,#0") + "% to " + Format((game.importTariff * 100), "#,#0") + "%.";
                    if (settings.soundOn == -1) {
                        frm_Box1Rect.b_Sound.Command = "Close";
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "tax.wav";
                        frm_Box1Rect.b_Sound.Command = "Open";
                        frm_Box1Rect.b_Sound.Command = "Play";
                    }
                    await frm_Box1Rect.Show(1);
                }
            }
        } else if (game.weeklyEventRoll == 12) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes && game.complexity >= game.unlockPassengers) {
                if (game.passengerTaxRate > 0) {
                    frm_Box1Rect.b_Yes.Visible = 0;
                    frm_Box1Rect.b_No.Visible = 0;
                    frm_Box1Rect.b_OK.Visible = -1;
                    frm_Box1Rect.b_Container.BackColor = 0x400000;
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "TAX.BMP");
                    frm_Box1Rect.b_ImageLable.Caption = "Your Friendly Tax Auditor";
                    frm_Box1Rect.b_Message.Caption = "In order to stimulate the sluggish economy, the Imperial Government lowers the passenger tax rate from " + Format((game.passengerTaxRate * 100) + 1, "#,#0") + "% to " + Format((game.passengerTaxRate * 100), "#,#0") + "%.";
                    if (settings.soundOn == -1) {
                        frm_Box1Rect.b_Sound.Command = "Close";
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        frm_Box1Rect.b_Sound.Command = "Open";
                        frm_Box1Rect.b_Sound.Command = "Play";
                    }
                    await frm_Box1Rect.Show(1);
                }
            }
        } else if (game.weeklyEventRoll == 13) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes) {
                if (game.exportTariff >= 0.02) {
                    frm_Box1Rect.b_Yes.Visible = 0;
                    frm_Box1Rect.b_No.Visible = 0;
                    frm_Box1Rect.b_OK.Visible = -1;
                    frm_Box1Rect.b_Container.BackColor = 0x400000;
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "TAX.BMP");
                    frm_Box1Rect.b_ImageLable.Caption = "Your Friendly Tax Auditor";
                    frm_Box1Rect.b_Message.Caption = "In order to stimulate trade, the Imperial Government lowers the export tariff rate from " + Format((game.exportTariff * 100) + 1, "#,#0") + "% to " + Format((game.exportTariff * 100), "#,#0") + "%.";
                    if (settings.soundOn == -1) {
                        frm_Box1Rect.b_Sound.Command = "Close";
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        frm_Box1Rect.b_Sound.Command = "Open";
                        frm_Box1Rect.b_Sound.Command = "Play";
                    }
                    await frm_Box1Rect.Show(1);
                }
            }
        } else if (game.weeklyEventRoll == 14) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes) {
                if (game.importTariff >= 0.02) {
                    frm_Box1Rect.b_Yes.Visible = 0;
                    frm_Box1Rect.b_No.Visible = 0;
                    frm_Box1Rect.b_OK.Visible = -1;
                    frm_Box1Rect.b_Container.BackColor = 0x400000;
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "TAX.BMP");
                    frm_Box1Rect.b_ImageLable.Caption = "Your Friendly Tax Auditor";
                    frm_Box1Rect.b_Message.Caption = "In order to stimulate trade, the Imperial Government lowers the import tariff rate from " + Format((game.importTariff * 100) + 1, "#,#0") + "% to " + Format((game.importTariff * 100), "#,#0") + "%.";
                    if (settings.soundOn == -1) {
                        frm_Box1Rect.b_Sound.Command = "Close";
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        frm_Box1Rect.b_Sound.Command = "Open";
                        frm_Box1Rect.b_Sound.Command = "Play";
                    }
                    await frm_Box1Rect.Show(1);
                }
            }
        } else if (game.weeklyEventRoll == 15) {
            if (game.planet[game.currentPlayer] == eventPlanet) {
                frm_Box1Sqr.b_Yes.Visible = 0;
                frm_Box1Sqr.b_No.Visible = 0;
                frm_Box1Sqr.b_OK.Visible = -1;
                frm_Box1Sqr.b_Container.BackColor = 0x4000;
                frm_Box1Sqr.Image1.Picture = LoadPicture(Trim(paths.imageDir) + game.planetNames[eventPlanet] + "2.bmp");
                frm_Box1Sqr.b_Message.Caption = "The economy on " + Trim(game.planetNames[eventPlanet]) + " over heats! Productivity quadruples and prices plummet. This economic shift has temporarily flooded " + Trim(game.planetNames[eventPlanet]) + " with an over supply of goods.";
                if (settings.soundOn == -1) {
                    frm_Box1Sqr.b_Sound.Command = "Close";
                    frm_Box1Sqr.b_Sound.FileName = Trim(paths.soundDir) + "event.wav";
                    frm_Box1Sqr.b_Sound.Command = "Open";
                    frm_Box1Sqr.b_Sound.Command = "Play";
                }
                await frm_Box1Sqr.Show(1);
            }
        } else if (game.weeklyEventRoll == 16) {
            if (game.planet[game.currentPlayer] == eventPlanet) {
                frm_Box1Sqr.b_Yes.Visible = 0;
                frm_Box1Sqr.b_No.Visible = 0;
                frm_Box1Sqr.b_OK.Visible = -1;
                frm_Box1Sqr.b_Container.BackColor = 0x4000;
                frm_Box1Sqr.Image1.Picture = LoadPicture(Trim(paths.imageDir) + game.planetNames[eventPlanet] + "2.bmp");
                frm_Box1Sqr.b_Message.Caption = "Due to political turmoil and hyper-inflation, there is an economic crash on " + Trim(game.planetNames[eventPlanet]) + "! Production comes to a halt and import prices shoot up. This economic change has temporarily affected the supply of goods on " + Trim(game.planetNames[eventPlanet]) + ".";
                if (settings.soundOn == -1) {
                    frm_Box1Sqr.b_Sound.Command = "Close";
                    frm_Box1Sqr.b_Sound.FileName = Trim(paths.soundDir) + "event.wav";
                    frm_Box1Sqr.b_Sound.Command = "Open";
                    frm_Box1Sqr.b_Sound.Command = "Play";
                }
                await frm_Box1Sqr.Show(1);
            }
        }
    }

    async function announcePlayersArrivedFirst() {
        let otherPlayer = 0;
        let taunt = "";
        const BLACK = 0;
        me.MousePointer = HOURGLASS;
        for (otherPlayer = 1; otherPlayer <= game.numPlayers; otherPlayer++) {
            if (game.turnDone[otherPlayer] == -1 && otherPlayer != game.currentPlayer && game.previousPlanet[otherPlayer] == game.planet[game.currentPlayer]) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    frm_Box1Rect.b_Sound.Command = "Close";
                    if (game.shipType[otherPlayer] <= 6) {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[otherPlayer])) + ".wav";
                    } else {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[otherPlayer] - 6)) + ".wav";
                    }
                    frm_Box1Rect.b_Sound.Command = "Open";
                    frm_Box1Rect.b_Sound.Command = "Play";
                }
                frm_Box1Rect.b_Yes.Visible = 0;
                frm_Box1Rect.b_No.Visible = 0;
                frm_Box1Rect.b_OK.Visible = -1;
                frm_Box1Rect.b_Container.BackColor = 0xFFFF80;
                frm_Box1Rect.b_Message.ForeColor = BLACK;
                frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[otherPlayer])) + ".bmp");
                frm_Box1Rect.b_ImageLable.Caption = Trim(game.companyNames[otherPlayer]) + " Arrives on " + Trim(game.planetNames[game.previousPlanet[otherPlayer]]) + " First!";
                {
                    const sel = randomBetween(1, 60);
                    if (sel == 1) {
                        taunt = "Sorry, but the early bird gets all the tastiest worms.";
                    } else if (sel == 2) {
                        taunt = "It seems like your ship needs a bigger engine.";
                    } else if (sel == 3) {
                        taunt = "It pays to be first!";
                    } else if (sel == 4) {
                        taunt = "I hope there's something left for you.";
                    } else if (sel == 5) {
                        taunt = "The first company to reach a planet, gets first choice of commodities.";
                    } else if (sel == 6) {
                        taunt = "You might try travelling to a closer planet next time.";
                    } else if (sel == 7) {
                        taunt = "Better late than never.";
                    } else if (sel == 8) {
                        taunt = "Don't worry, I'm sure there will be something left for you to buy.";
                    } else if (sel == 9) {
                        taunt = "Faster is better.";
                    } else if (sel == 10) {
                        taunt = "Can't win 'em all!";
                    } else if (sel == 11) {
                        taunt = "It's time for you to upgrade your ship.";
                    } else if (sel == 12) {
                        taunt = "It seems like the competition is getting quicker.";
                    } else if (sel == 13) {
                        taunt = "Speed is a virtue.";
                    } else if (sel == 14) {
                        taunt = "First come, first served.";
                    } else if (sel == 15) {
                        taunt = "The first one to a planet gets the pick of the litter.";
                    } else if (sel == 16) {
                        taunt = "It never hurts to be first.";
                    } else if (sel == 17) {
                        taunt = "Don't worry, there's bound to be something left for you.";
                    } else if (sel == 18) {
                        taunt = "The best products go quickly.";
                    } else if (sel == 19) {
                        taunt = "The competition is hot to trot.";
                    } else if (sel == 20) {
                        taunt = "You've got to be on the ball to beat out the competition.";
                    } else if (sel == 20) {
                        taunt = "You're getting slow in your old age.";
                    } else if (sel == 21) {
                        taunt = "You're slowing down.";
                    } else if (sel == 22) {
                        taunt = "There's a definite need for speed.";
                    } else if (sel == 23) {
                        taunt = "Better to be fast than big.";
                    } else if (sel == 24) {
                        taunt = "Be fast or be last.";
                    } else if (sel == 25) {
                        taunt = "Can't win 'em all.";
                    } else if (sel == 26) {
                        taunt = "A kuarp a day keeps the competition at bay.";
                    } else if (sel == 27) {
                        taunt = "You'll be lucky to fill up your ship.";
                    } else if (sel == 28) {
                        taunt = "Your pilot sure is slow.";
                    } else if (sel == 29) {
                        taunt = "Better late than never.";
                    } else if (sel == 30) {
                        taunt = "Sorry, but there won't be much left for you.";
                    } else {
                        taunt = "";
                    }
                }
                frm_Box1Rect.b_Message.Caption = Trim(game.companyNames[otherPlayer]) + " beats you to " + Trim(game.planetNames[game.previousPlanet[otherPlayer]]) + ". " + taunt;
                await frm_Box1Rect.Show(1);
                me.MousePointer = HOURGLASS;
            }
        }
    }

    async function announceRivalsArrivedFirst() {
        let rival = 0;
        let taunt = "";
        let amountPhrase = "";
        let extraPhrase = "";
        me.MousePointer = HOURGLASS;
        for (rival = 1; rival <= game.numRivals; rival++) {
            if (rivals.turnDone[rival] == 0 && rivals.planet[rival] == game.planet[game.currentPlayer] && rivals.travelTime[rival] < game.travelTime[game.currentPlayer]) {
                {
                    const sel = randomBetween(1, 60);
                    if (sel == 1) {
                        taunt = "Sorry, but the early bird gets all the tastiest worms.";
                    } else if (sel == 2) {
                        taunt = "It seems like your ship needs a bigger engine.";
                    } else if (sel == 3) {
                        taunt = "It pays to be first!";
                    } else if (sel == 4) {
                        taunt = "I hope there's something left for you.";
                    } else if (sel == 5) {
                        taunt = "The first company to reach a planet, gets first choice of commodities.";
                    } else if (sel == 6) {
                        taunt = "You might try travelling to a closer planet next time.";
                    } else if (sel == 7) {
                        taunt = "Better late than never.";
                    } else if (sel == 8) {
                        taunt = "Don't worry, I'm sure there will be something left for you to buy.";
                    } else if (sel == 9) {
                        taunt = "Faster is better.";
                    } else if (sel == 10) {
                        taunt = "Can't win 'em all!";
                    } else if (sel == 11) {
                        taunt = "It's time for you to upgrade your ship.";
                    } else if (sel == 12) {
                        taunt = "It seems like the competition is getting quicker.";
                    } else if (sel == 13) {
                        taunt = "Speed is a virtue.";
                    } else if (sel == 14) {
                        taunt = "First come, first served.";
                    } else if (sel == 15) {
                        taunt = "The first one to a planet gets the pick of the litter.";
                    } else if (sel == 16) {
                        taunt = "It never hurts to be first.";
                    } else if (sel == 17) {
                        taunt = "Don't worry, there's bound to be something left for you.";
                    } else if (sel == 18) {
                        taunt = "The best products go quickly.";
                    } else if (sel == 19) {
                        taunt = "The competition is hot to trot.";
                    } else if (sel == 20) {
                        taunt = "You've got to be on the ball to beat out the competition.";
                    } else if (sel == 20) {
                        taunt = "You're getting slow in your old age.";
                    } else if (sel == 21) {
                        taunt = "You're slowing down.";
                    } else if (sel == 22) {
                        taunt = "There's a definite need for speed.";
                    } else if (sel == 23) {
                        taunt = "Better to be fast than big.";
                    } else if (sel == 24) {
                        taunt = "Be fast or be last.";
                    } else if (sel == 25) {
                        taunt = "Can't win 'em all.";
                    } else if (sel == 26) {
                        taunt = "A kuarp a day keeps the competition at bay.";
                    } else if (sel == 27) {
                        taunt = "You'll be lucky to fill up your ship.";
                    } else if (sel == 28) {
                        taunt = "Your pilot sure is slow.";
                    } else if (sel == 29) {
                        taunt = "Better late than never.";
                    } else if (sel == 30) {
                        taunt = "Sorry, but there won't be much left for you.";
                    } else {
                        taunt = "";
                    }
                }
                rivals.turnDone[rival] = -1;
                rivalSellAndRestock(rival);
                frm_Box1Rect.b_Yes.Visible = 0;
                frm_Box1Rect.b_No.Visible = 0;
                frm_Box1Rect.b_OK.Visible = -1;
                frm_Box1Rect.b_Container.BackColor = 0xFFFF80;
                frm_Box1Rect.b_Message.ForeColor = BLACK;
                frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "op" + Trim(Str((rival))) + ".bmp");
                frm_Box1Rect.b_ImageLable.Caption = Trim(rivals.companyNames[rival]) + " Arrives on " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " First!";
                if (rivals.cargo[rival] == 0) {
                    amountPhrase = "opponent didn't purchase any commodities";
                } else if (game.available[rivals.planet[rival]][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] == 0) {
                    {
                        const sel = randomBetween(1, 20);
                        if (sel == 1) {
                            amountPhrase = "100% of the";
                        } else if (sel == 2) {
                            amountPhrase = "100% of the";
                        } else if (sel == 3) {
                            amountPhrase = "a ship load of";
                        } else if (sel == 4) {
                            amountPhrase = "a mega load of";
                        } else if (sel == 5) {
                            amountPhrase = "a large supply of";
                        } else if (sel == 6) {
                            amountPhrase = "an abundant supply of";
                        } else if (sel == 7) {
                            amountPhrase = "100% of the";
                        } else if (sel == 8) {
                            amountPhrase = "a full load of";
                        } else if (sel == 9) {
                            amountPhrase = "a big stash of";
                        } else if (sel == 10) {
                            amountPhrase = "a huge supply of";
                        } else {
                            amountPhrase = "all of the";
                        }
                    }
                    {
                        const sel = randomBetween(1, 10);
                        if (sel == 1) {
                            extraPhrase = " as well as some other products";
                        } else if (sel == 2) {
                            extraPhrase = " as well as several other commodities";
                        } else if (sel == 3) {
                            extraPhrase = " along with some other commodities";
                        } else if (sel == 4) {
                            extraPhrase = " in addition to some other items";
                        } else if (sel == 5) {
                            extraPhrase = " along with other goods";
                        } else {
                            extraPhrase = "";
                        }
                    }
                } else {
                    {
                        const sel = randomBetween(1, 20);
                        if (sel == 1) {
                            amountPhrase = "some of the";
                        } else if (sel == 2) {
                            amountPhrase = "a good portion of the";
                        } else if (sel == 3) {
                            amountPhrase = "a little of the";
                        } else if (sel == 4) {
                            amountPhrase = "a lot of the";
                        } else if (sel == 5) {
                            amountPhrase = "a fair portion of the";
                        } else if (sel == 6) {
                            amountPhrase = "a healthy portion of the";
                        } else if (sel == 7) {
                            amountPhrase = "a few tons of";
                        } else if (sel == 8) {
                            amountPhrase = "many tons of";
                        } else if (sel == 9) {
                            amountPhrase = "several tons of";
                        } else if (sel == 10) {
                            amountPhrase = "a good amount of the";
                        } else if (sel == 11) {
                            amountPhrase = "a fair amount of the";
                        } else if (sel == 12) {
                            amountPhrase = "a decent supply of";
                        } else if (sel == 13) {
                            amountPhrase = "an average load of";
                        } else if (sel == 14) {
                            amountPhrase = "a substantial portion of the";
                        } else if (sel == 15) {
                            amountPhrase = "a typical haul of";
                        } else if (sel == 16) {
                            amountPhrase = "a typical load of";
                        } else if (sel == 17) {
                            amountPhrase = "a moderate amount of";
                        } else if (sel == 18) {
                            amountPhrase = "just enough";
                        } else if (sel == 19) {
                            amountPhrase = "most of the";
                        } else if (sel == 20) {
                            amountPhrase = "the perfect amount of";
                        }
                    }
                    extraPhrase = "";
                }
                if (amountPhrase == "opponent didn't purchase any commodities") {
                    frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " beats you to " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + ". " + taunt;
                } else {
                    {
                        const sel = randomBetween(1, 5);
                        if (sel == 1) {
                            frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " beats you to " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " and buys up " + amountPhrase + " " + Trim(game.commodityNames[rivals.cargoCategory[rival]][rivals.cargoItem[rival]]) + extraPhrase + " for a very low price! " + "\n" + "\n" + taunt;
                        } else if (sel == 2) {
                            frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " arrives on " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " ahead of you and purchases " + amountPhrase + " " + Trim(game.commodityNames[rivals.cargoCategory[rival]][rivals.cargoItem[rival]]) + extraPhrase + " for a good price! " + "\n" + "\n" + taunt;
                        } else if (sel == 3) {
                            frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " lands on " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " before you and snatches up " + amountPhrase + " " + Trim(game.commodityNames[rivals.cargoCategory[rival]][rivals.cargoItem[rival]]) + extraPhrase + " for a great price! " + "\n" + "\n" + taunt;
                        } else if (sel == 4) {
                            frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " beats you to " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " and buys " + amountPhrase + " " + Trim(game.commodityNames[rivals.cargoCategory[rival]][rivals.cargoItem[rival]]) + extraPhrase + " at a bargain price! " + "\n" + "\n" + taunt;
                        } else if (sel == 5) {
                            frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " makes it to " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " ahead of you and acquires " + amountPhrase + " " + Trim(game.commodityNames[rivals.cargoCategory[rival]][rivals.cargoItem[rival]]) + extraPhrase + " at an excellent price! " + "\n" + "\n" + taunt;
                        }
                    }
                }
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    frm_Box1Rect.b_Sound.Command = "Close";
                    frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "op" + Trim(Str(rival)) + ".wav";
                    frm_Box1Rect.b_Sound.Command = "Open";
                    frm_Box1Rect.b_Sound.Command = "Play";
                }
                await frm_Box1Rect.Show(1);
                me.MousePointer = HOURGLASS;
            }
        }
    }

    function rivalSellAndRestock(rival) {
        let category = 0;
        let item = 0;
        let priceCeiling = 0;
        let bestMargin = 0;
        rival = CInt(rival);
        if (rivals.cargo[rival] > 0) {
            game.available[rivals.planet[rival]][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] = game.available[rivals.planet[rival]][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] + randomBetween(rivals.cargo[rival] / 2, rivals.cargo[rival]);
        }
        rivals.cash[rival] = rivals.cash[rival] + (game.prices[rivals.planet[rival]][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] * rivals.cargo[rival]);
        rivals.cargo[rival] = 0;
        priceCeiling = 0;
        bestMargin = 0;
        for (category = 0; category <= 2; category++) {
            for (item = 0; item <= 5; item++) {
                priceCeiling = priceCeiling + 40;
                if ((priceCeiling - game.prices[rivals.planet[rival]][category][item]) > bestMargin && game.available[rivals.planet[rival]][category][item] > (rivals.shipSize[rival] / 16)) {
                    bestMargin = (priceCeiling - game.prices[rivals.planet[rival]][category][item]);
                    rivals.cargoCategory[rival] = CInt(category);
                    rivals.cargoItem[rival] = CInt(item);
                    rivals.cargo[rival] = CLng((rivals.shipSize[rival] / 4) * (CLng(rivals.intelligence[rival]) / 100));
                }
            }
        }
        rivals.cash[rival] = rivals.cash[rival] - (game.prices[rivals.planet[rival]][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] * rivals.cargo[rival]);
        game.available[rivals.planet[rival]][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] = game.available[rivals.planet[rival]][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] - rivals.cargo[rival];
        if (game.available[rivals.planet[rival]][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] < 0) {
            game.available[rivals.planet[rival]][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] = 0;
        }
    }

    async function settleFacilityFees() {
        let totalFees = 0;
        let company = 0;
        me.MousePointer = HOURGLASS;
        if (game.tutorialMode == 0 || game.complexity >= game.unlockFacilities) {
            totalFees = 0;
            for (company = 1; company <= game.numRivals; company++) {
                totalFees = totalFees + rivals.facilityFees[company][game.planet[game.currentPlayer]];
                rivals.facilityRevenue[company][game.planet[game.currentPlayer]] = rivals.facilityRevenue[company][game.planet[game.currentPlayer]] + rivals.facilityFees[company][game.planet[game.currentPlayer]];
            }
            for (company = 1; company <= game.numPlayers; company++) {
                if (company != game.currentPlayer) {
                    totalFees = totalFees + game.facilityFees[company][game.planet[game.currentPlayer]];
                    game.facilityRevenue[company][game.planet[game.currentPlayer]] = game.facilityRevenue[company][game.planet[game.currentPlayer]] + game.facilityFees[company][game.planet[game.currentPlayer]];
                }
            }
            if (totalFees > 0) {
                await Load(frm_Box1Port);
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0xC0;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan1.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Trader's Union Official";
                frm_Box1Port.b_Message.Caption = "FACILITY FEES:" + "\n" + "\n" + "You must pay " + Format(totalFees, "#,#0") + " kubars in facility fees while visiting " + UCase(Trim(game.planetNames[game.planet[game.currentPlayer]])) + ". This money goes to the companies who own the facilities.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                await spend(totalFees, -1);
            }
            if (game.facilityRevenue[game.currentPlayer][game.planet[game.currentPlayer]] > 0) {
                await Load(frm_Box1Port);
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x4000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "coins.wmf");
                frm_Box1Port.b_ImageLable.Caption = "Profit from Facilities";
                frm_Box1Port.b_Message.Caption = "Your facilities on " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " earned " + Format(game.facilityRevenue[game.currentPlayer][game.planet[game.currentPlayer]], "#,#0") + " kubars while you were away. This money is being added to your cash!";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "coins.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                player.cash = player.cash + game.facilityRevenue[game.currentPlayer][game.planet[game.currentPlayer]];
                game.facilityRevenue[game.currentPlayer][game.planet[game.currentPlayer]] = 0;
            }
        }
        me.MousePointer = HOURGLASS;
    }

    async function FillElastic_Click() {
        await continueToMainMenu();
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        await continueToMainMenu();
    }

    async function Form_Load() {
        let category = 0;
        let item = 0;
        me.MousePointer = HOURGLASS;
        await announcePlayersArrivedFirst();
        await announceRivalsArrivedFirst();
        if (game.turn > 4) {
            await announceWeeklyEvent();
        }
        if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes && (player.passengerTaxOwed + player.tariffsOwed) != 0) {
            for (category = 0; category <= 2; category++) {
                for (item = 0; item <= 5; item++) {
                    player.tariffsOwed = CLng(player.tariffsOwed + (player.cargo[category][item] * game.prices[game.planet[game.currentPlayer]][category][item] * game.importTariff));
                }
            }
        }
        await settleFacilityFees();
        player.supplyChartPlanet = -1;
        Label1.Caption = "Welcome To " + Trim(game.planetNames[game.planet[game.currentPlayer]]);
        FillElastic.Picture = LoadPicture(Trim(paths.imageDir) + game.planetNames[game.planet[game.currentPlayer]] + "3.bmp");
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + game.planetNames[game.planet[game.currentPlayer]] + ".wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        if (game.planetNames[game.planet[game.currentPlayer]] == "Vexx") {
            Label3.Caption = "The Capital of Kukubia";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Pyke") {
            Label3.Caption = "Home of L-Tech Engines";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Mira") {
            Label3.Caption = "Home of Kukubian Religion";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Stye") {
            Label3.Caption = "Headquarters of the Trader's Union";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Loro") {
            Label3.Caption = "The Pleasure Planet";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Zile") {
            Label3.Caption = "Home of Mr. Zinn";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Frac") {
            Label3.Caption = "Home of Voyager's Insurance";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Tilo") {
            Label3.Caption = "The Gambler's Planet";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Queg") {
            Label3.Caption = "The Smuggler's Haven";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Xeen") {
            Label3.Caption = "A Mechanic's Dream";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Ooom") {
            Label3.Caption = "The Fortune Teller's Planet";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Hork") {
            Label3.Caption = "The Media Capital of Kukubia";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Bass") {
            Label3.Caption = "A Playground for Stock Market Analysts";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Nosh") {
            Label3.Caption = "The Gas Station of Kukubia";
        }
    }

    async function Label1_Click() {
        await continueToMainMenu();
    }

    function Label2_Click() {
        if (game.planetNames[game.planet[game.currentPlayer]] == "Vexx") {
            Label2.Alignment = 2;
            Label2.Caption = "<-- Right about here is where Hork Nicolson (Dred's father) was assassinated.";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Pyke") {
            Label2.Alignment = 2;
            Label2.Caption = "This is where the Imperial Mental Institution is located -->";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Mira") {
            Label2.Alignment = 2;
            Label2.Caption = "This is where Dred Nicolson got bitten while hunting his first space snake -->.";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Stye") {
            Label2.Alignment = 1;
            Label2.Caption = "I don't recommend venturing in that direction if you value your life -->";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Loro") {
            Label2.Alignment = 2;
            Label2.Caption = "<-- This is the spot where Lily Slimwagon ate his first slice of lemon pudding.";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Zile") {
            Label2.Alignment = 2;
            Label2.Caption = "Don't ask me what that dot is. I think it's a flaw in your monitor -->.";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Frac") {
            Label2.Alignment = 0;
            Label2.Caption = "<-- Way out there is where Mono Cheezo got lost.";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Tilo") {
            Label2.Alignment = 2;
            Label2.Caption = "<-- Right about here is where Mr. Zinn made his first kubar selling bool nuts to a band of travelling monks.";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Queg") {
            Label2.Alignment = 2;
            Label2.Caption = "This is where Emperor Dred's x-wife lives -->";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Xeen") {
            Label2.Alignment = 2;
            Label2.Caption = "This is where Emperor Bass Nicolson defeated the Hapa Jillos -->";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Ooom") {
            Label2.Alignment = 1;
            Label2.Caption = "This is where Mono Cheezo claims to have lost his memory -->";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Hork") {
            Label2.Alignment = 2;
            Label2.Caption = "<-- This is where Lily Slimwagon ran out of gas.";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Bass") {
            Label2.Alignment = 2;
            Label2.Caption = "Right here is where Mr. Zinn wants to construct a chain of orbiting pay toilets for travellers who can't wait to land -->";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Nosh") {
            Label2.Alignment = 0;
            Label2.Caption = "<-- Legend has it that something interesting must have happened here, but nobody is sure exactly what that something is.";
        }
    }

    async function Label3_Click() {
        await continueToMainMenu();
    }

    return {
        continueToMainMenu, announceWeeklyEvent, announcePlayersArrivedFirst, announceRivalsArrivedFirst,
        rivalSellAndRestock, settleFacilityFees, FillElastic_Click, Form_Activate,
        Form_KeyPress, Form_Load, Label1_Click, Label2_Click,
        Label3_Click,
    };
});
