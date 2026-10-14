// Originally translated from src/MONEY.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Money",
  ["Form", "frm_Money", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Money", "BackColor": 0, "Left": 660, "Top": 1560, "Width": 6750, "Height": 4020, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 660, "ClientTop": 1560, "ClientWidth": 6750, "ClientHeight": 4020}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 10, "BevelOuterWidth": 0, "ShadowColor": 16711680, "IntBkg": 16744576}, [
      ["MMControl", "b_Sound", {"Left": 5100, "Top": 900, "Width": 3540, "Height": 330, "TabIndex": 12, "Visible": 0}],
      ["VideoSoftElastic", "b_Status", {"BackColor": 8454143, "Left": 300, "Top": 3000, "Width": 4365, "Height": 675, "TabIndex": 11, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "   Company Status....", "IntBkg": 8454143}],
      ["VideoSoftElastic", "b_CurrentNetworth", {"BackColor": 8454143, "Left": 270, "Top": 510, "Width": 4365, "Height": 660, "TabIndex": 10, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "   Net Worth......", "IntBkg": 8454143}],
      ["VideoSoftElastic", "b_GameLevel", {"BackColor": 8454143, "Left": 270, "Top": 1770, "Width": 4365, "Height": 675, "TabIndex": 9, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "   Game Level.....", "IntBkg": 8454143}],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 4194304, "Left": 0, "Top": 4260, "Width": 9600, "Height": 2625, "TabIndex": 1, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 1, "BorderWidth": 20, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 5, "BevelOuterWidth": 5, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "b_PlayerHistory1", {"BackColor": 16776960, "Left": 1605, "Top": 300, "Width": 1215, "Height": 2025, "TabIndex": 8, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelOuterWidth": 5, "Caption": "Company History", "CaptionPos": 2, "AccessKey": -1, "IntBkg": 16776960}, [
          ["Image", "b_PlayerHistory2", {"Picture": {"frx": "frx/MONEY/b_PlayerHistory2.Picture.ico"}, "Left": 360, "Top": 255, "Width": 480, "Height": 495, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_ShipInfo1", {"BackColor": 16776960, "Left": 6810, "Top": 300, "Width": 1200, "Height": 2025, "TabIndex": 7, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelOuterWidth": 5, "Caption": "Ship Info", "CaptionPos": 2, "AccessKey": -1, "IntBkg": 16776960}, [
          ["Image", "b_ShipInfo2", {"Picture": {"frx": "frx/MONEY/b_ShipInfo2.Picture.ico"}, "Left": 360, "Top": 300, "Width": 480, "Height": 480, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_ComputerPlayer1", {"BackColor": 16776960, "Left": 5520, "Top": 300, "Width": 1200, "Height": 2025, "TabIndex": 6, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelOuterWidth": 5, "Caption": "Computer Players", "CaptionPos": 2, "AccessKey": -1, "IntBkg": 16776960}, [
          ["Image", "b_ComputerPlayer2", {"Picture": {"frx": "frx/MONEY/b_ComputerPlayer2.Picture.ico"}, "Left": 315, "Top": 255, "Width": 495, "Height": 495, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_NetworthGraphs1", {"BackColor": 16776960, "Left": 2910, "Top": 300, "Width": 1215, "Height": 2025, "TabIndex": 5, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelOuterWidth": 5, "Caption": "Net Worth", "CaptionPos": 2, "AccessKey": -1, "IntBkg": 16776960}, [
          ["Image", "b_NetworthGraphs2", {"Picture": {"frx": "frx/MONEY/b_NetworthGraphs2.Picture.ico"}, "Left": 390, "Top": 255, "Width": 495, "Height": 495, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Help1", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 8100, "Top": 300, "Width": 1200, "Height": 2025, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 5, "FloodColor": 0, "FloodPercent": 100, "Caption": "Help", "CaptionPos": 5, "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 8388608}, [
          ["Image", "b_Help2", {"Picture": {"frx": "frx/MONEY/b_Help2.Picture.ico"}, "Left": 300, "Top": 300, "Width": 540, "Height": 870, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_ExitMoney1", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 300, "Top": 300, "Width": 1215, "Height": 2025, "TabIndex": 3, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 5, "FloodColor": 4194304, "Caption": "Continue", "CaptionPos": 5, "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 8388608}, [
          ["Image", "b_ExitMoney2", {"Picture": {"frx": "frx/MONEY/b_ExitMoney2.Picture.ico"}, "Left": 390, "Top": 225, "Width": 465, "Height": 915, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_MarketStrength1", {"BackColor": 16776960, "Left": 4215, "Top": 300, "Width": 1215, "Height": 2025, "TabIndex": 2, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelOuterWidth": 5, "Caption": "Market Strength", "CaptionPos": 2, "AccessKey": -1, "IntBkg": 16776960}, [
          ["Image", "b_MarketStrength2", {"Picture": {"frx": "frx/MONEY/b_MarketStrength2.Picture.ico"}, "Left": 390, "Top": 225, "Width": 480, "Height": 495, "Stretch": -1}]
        ]]
      ]],
      ["Image", "Image1", {"Left": 5280, "Top": 270, "Width": 4035, "Height": 3780, "Stretch": -1}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, b_Status, b_CurrentNetworth, b_GameLevel, VSElastic2, b_PlayerHistory1, b_PlayerHistory2 } = me.controls;
    const { b_ShipInfo1, b_ShipInfo2, b_ComputerPlayer1, b_ComputerPlayer2, b_NetworthGraphs1, b_NetworthGraphs2, b_Help1, b_Help2 } = me.controls;
    const { b_ExitMoney1, b_ExitMoney2, b_MarketStrength1, b_MarketStrength2, Image1 } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;

    async function b_ComputerPlayer1_Click() {
        await showOpponents();
    }

    function b_ComputerPlayer1_MouseDown(Button, Shift, X, Y) {
        b_ComputerPlayer1.BackColor = 0xFFFFFF;
    }

    function b_ComputerPlayer1_MouseUp(Button, Shift, X, Y) {
        b_ComputerPlayer1.BackColor = 0xFFFF00;
    }

    async function b_ComputerPlayer2_Click() {
        await showOpponents();
    }

    function b_ComputerPlayer2_MouseDown(Button, Shift, X, Y) {
        b_ComputerPlayer1.BackColor = 0xFFFFFF;
    }

    function b_ComputerPlayer2_MouseUp(Button, Shift, X, Y) {
        b_ComputerPlayer1.BackColor = 0xFFFF00;
    }

    async function b_ExitMoney1_Click() {
        await returnToMainMenu();
    }

    function b_ExitMoney1_MouseDown(Button, Shift, X, Y) {
        b_ExitMoney1.BackColor = 0xFF0000;
    }

    function b_ExitMoney1_MouseUp(Button, Shift, X, Y) {
        b_ExitMoney1.BackColor = 0x800000;
    }

    async function b_ExitMoney2_Click() {
        await returnToMainMenu();
    }

    function b_ExitMoney2_MouseDown(Button, Shift, X, Y) {
        b_ExitMoney1.BackColor = 0xFF0000;
    }

    function b_ExitMoney2_MouseUp(Button, Shift, X, Y) {
        b_ExitMoney1.BackColor = 0x800000;
    }

    async function b_Help1_Click() {
        await showMoneyHelp();
    }

    function b_Help1_MouseDown(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xFF0000;
    }

    function b_Help1_MouseUp(Button, Shift, X, Y) {
        b_Help1.BackColor = 0x800000;
    }

    async function b_Help2_Click() {
        await showMoneyHelp();
    }

    function b_Help2_MouseDown(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xFF0000;
    }

    function b_Help2_MouseUp(Button, Shift, X, Y) {
        b_Help1.BackColor = 0x800000;
    }

    async function b_MarketStrength1_Click() {
        await showMarketStrength();
    }

    function b_MarketStrength1_MouseDown(Button, Shift, X, Y) {
        b_MarketStrength1.BackColor = 0xFFFFFF;
    }

    function b_MarketStrength1_MouseUp(Button, Shift, X, Y) {
        b_MarketStrength1.BackColor = 0xFFFF00;
    }

    async function b_MarketStrength2_Click() {
        await showMarketStrength();
    }

    function b_MarketStrength2_MouseDown(Button, Shift, X, Y) {
        b_MarketStrength1.BackColor = 0xFFFFFF;
    }

    function b_MarketStrength2_MouseUp(Button, Shift, X, Y) {
        b_MarketStrength1.BackColor = 0xFFFF00;
    }

    async function b_NetworthGraphs1_Click() {
        await showNetWorthGraph();
    }

    function b_NetworthGraphs1_MouseDown(Button, Shift, X, Y) {
        b_NetworthGraphs1.BackColor = 0xFFFFFF;
    }

    function b_NetworthGraphs1_MouseUp(Button, Shift, X, Y) {
        b_NetworthGraphs1.BackColor = 0xFFFF00;
    }

    async function b_NetworthGraphs2_Click() {
        await showNetWorthGraph();
    }

    function b_NetworthGraphs2_MouseDown(Button, Shift, X, Y) {
        b_NetworthGraphs1.BackColor = 0xFFFFFF;
    }

    function b_NetworthGraphs2_MouseUp(Button, Shift, X, Y) {
        b_NetworthGraphs1.BackColor = 0xFFFF00;
    }

    async function b_PlayerHistory1_Click() {
        await showCompanyHistory();
    }

    function b_PlayerHistory1_MouseDown(Button, Shift, X, Y) {
        b_PlayerHistory1.BackColor = 0xFFFFFF;
    }

    function b_PlayerHistory1_MouseUp(Button, Shift, X, Y) {
        b_PlayerHistory1.BackColor = 0xFFFF00;
    }

    async function b_PlayerHistory2_Click() {
        await showCompanyHistory();
    }

    function b_PlayerHistory2_MouseDown(Button, Shift, X, Y) {
        b_PlayerHistory1.BackColor = 0xFFFFFF;
    }

    function b_PlayerHistory2_MouseUp(Button, Shift, X, Y) {
        b_PlayerHistory1.BackColor = 0xFFFF00;
    }

    async function b_ShipInfo1_Click() {
        await showShipInfo();
    }

    function b_ShipInfo1_MouseDown(Button, Shift, X, Y) {
        b_ShipInfo1.BackColor = 0xFFFFFF;
    }

    function b_ShipInfo1_MouseUp(Button, Shift, X, Y) {
        b_ShipInfo1.BackColor = 0xFFFF00;
    }

    async function b_ShipInfo2_Click() {
        await showShipInfo();
    }

    function b_ShipInfo2_MouseDown(Button, Shift, X, Y) {
        b_ShipInfo1.BackColor = 0xFFFFFF;
    }

    function b_ShipInfo2_MouseUp(Button, Shift, X, Y) {
        b_ShipInfo1.BackColor = 0xFFFF00;
    }

    async function returnToMainMenu() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    async function showMoneyHelp() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box1.FillElastic.Caption = "Help (Money)";
        frm_Box1.b_Message.Caption = "The standard currency in Kukubia is the kubar. In order to win the game, your company must attain a NET WORTH of " + Format(nextGoal(), "#,#0") + " kubars. Your NET WORTH is computed by adding together your cash, savings and stock, then subtracting any money you owe the Trader's Union and Mr. Zinn.";
        await frm_Box1.Show(1);
    }

    async function showCompanyHistory() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await frm_LineGraph.Show(1);
        FillElastic.Visible = -1;
    }

    async function showMarketStrength() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await frm_PieChart.Show(1);
        FillElastic.Visible = -1;
    }

    async function showNetWorthGraph() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        frm_BarGraph.Tag = "MONEY";
        await frm_BarGraph.Show(1);
        FillElastic.Visible = -1;
    }

    async function showOpponents() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        frm_Opponents.Tag = "Money";
        await frm_Opponents.Show(1);
        FillElastic.Visible = -1;
    }

    async function showShipInfo() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await Load(frm_ShipInfo);
        await frm_ShipInfo.Show(1);
        FillElastic.Visible = -1;
    }

    async function Form_Activate() {
        me.MousePointer = HOURGLASS;
        await updateMoneyStatus();
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_ExitMoney1_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
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
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "coins.wmf");
    }

    async function updateMoneyStatus() {
        let value = 0;
        let planet = 0;
        let label = "";
        try {
            value = 0;
            for (planet = 0; planet <= LAST_PLANET; planet++) {
                if (game.turn <= 15) {
                    value = value + player.shares[planet] * game.stockPrices[planet][game.turn];
                } else {
                    value = value + player.shares[planet] * game.stockPrices[planet][15];
                }
            }
            if (game.graphShowCompany[game.currentPlayer] == 0) {
                game.netWorth[game.currentPlayer] = value + player.cash + player.bankBalance - player.loan - player.zinnLoan;
            } else {
                game.netWorth[game.currentPlayer] = 0;
            }
            b_CurrentNetworth.Caption = "   Net Worth:   " + Format(game.netWorth[game.currentPlayer], "#,#0");
            if (game.skillLevel == 1) {
                label = "Tutorial";
            } else if (game.skillLevel == 2) {
                label = "Novice";
            } else if (game.skillLevel == 3) {
                label = "Beginner";
            } else if (game.skillLevel == 4) {
                label = "Intermediate";
            } else if (game.skillLevel == 5) {
                label = "Expert";
            } else if (game.skillLevel == 6) {
                label = "Master";
            }
            b_GameLevel.Caption = "   Game Level:   " + label;
            value = CLng((game.netWorth[game.currentPlayer]) / 50000);
            if (game.netWorth[game.currentPlayer] < 0) {
                if (value < 0) {
                    value = value * (-1);
                }
                if (value > 9) {
                    value = 9;
                }
                if (value == 0) {
                    label = "Unfortunate";
                } else if (value == 1) {
                    label = "Inefficient";
                } else if (value == 2) {
                    label = "Needy";
                } else if (value == 3) {
                    label = "Indigent";
                } else if (value == 4) {
                    label = "Unprosperous";
                } else if (value == 5) {
                    label = "Unsuccessful";
                } else if (value == 6) {
                    label = "Debtor";
                } else if (value == 7) {
                    label = "Insolvent";
                } else if (value == 8) {
                    label = "Disasterous";
                } else if (value == 9) {
                    label = "Destitute";
                }
                b_Status.Caption = "   Company Status:   " + label;
            } else if (game.netWorth[game.currentPlayer] >= 0) {
                if (value > 20) {
                    value = 20;
                }
                if (value == 0) {
                    label = "Struggling";
                } else if (value == 1) {
                    label = "Average";
                } else if (value == 2) {
                    label = "Striving";
                } else if (value == 3) {
                    label = "Industrious";
                } else if (value == 4) {
                    label = "Intelligent";
                } else if (value == 5) {
                    label = "Diligent";
                } else if (value == 6) {
                    label = "Advantageous";
                } else if (value == 7) {
                    label = "Assiduous";
                } else if (value == 8) {
                    label = "Capitalist";
                } else if (value == 9) {
                    label = "Ardent";
                } else if (value == 10) {
                    label = "First Rate";
                } else if (value == 11) {
                    label = "Successful";
                } else if (value == 12) {
                    label = "Enterprising";
                } else if (value == 13) {
                    label = "Prosperous";
                } else if (value == 15) {
                    label = "Thriving";
                } else if (value == 15) {
                    label = "Exceptional";
                } else if (value == 16) {
                    label = "Wealthy";
                } else if (value == 17) {
                    label = "Elite";
                } else if (value == 18) {
                    label = "Outstanding";
                } else if (value == 19) {
                    label = "Paramount";
                } else if (value == 20) {
                    label = "Supreme";
                }
                b_Status.Caption = "   Company Status:   " + label;
            }
            return;
        } catch (e) {
            Err.Catch(e);
            await reportFileError(Err.Number);
            return;
        }
    }

    return {
        b_ComputerPlayer1_Click, b_ComputerPlayer1_MouseDown, b_ComputerPlayer1_MouseUp, b_ComputerPlayer2_Click,
        b_ComputerPlayer2_MouseDown, b_ComputerPlayer2_MouseUp, b_ExitMoney1_Click, b_ExitMoney1_MouseDown,
        b_ExitMoney1_MouseUp, b_ExitMoney2_Click, b_ExitMoney2_MouseDown, b_ExitMoney2_MouseUp,
        b_Help1_Click, b_Help1_MouseDown, b_Help1_MouseUp, b_Help2_Click,
        b_Help2_MouseDown, b_Help2_MouseUp, b_MarketStrength1_Click, b_MarketStrength1_MouseDown,
        b_MarketStrength1_MouseUp, b_MarketStrength2_Click, b_MarketStrength2_MouseDown, b_MarketStrength2_MouseUp,
        b_NetworthGraphs1_Click, b_NetworthGraphs1_MouseDown, b_NetworthGraphs1_MouseUp, b_NetworthGraphs2_Click,
        b_NetworthGraphs2_MouseDown, b_NetworthGraphs2_MouseUp, b_PlayerHistory1_Click, b_PlayerHistory1_MouseDown,
        b_PlayerHistory1_MouseUp, b_PlayerHistory2_Click, b_PlayerHistory2_MouseDown, b_PlayerHistory2_MouseUp,
        b_ShipInfo1_Click, b_ShipInfo1_MouseDown, b_ShipInfo1_MouseUp, b_ShipInfo2_Click,
        b_ShipInfo2_MouseDown, b_ShipInfo2_MouseUp, returnToMainMenu, showMoneyHelp,
        showCompanyHistory, showMarketStrength, showNetWorthGraph, showOpponents,
        showShipInfo, Form_Activate, Form_KeyPress, Form_Load,
        updateMoneyStatus,
    };
});
