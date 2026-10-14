// Originally translated from src/GRAPH2.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_LineGraph",
  ["Form", "frm_LineGraph", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Player History", "BackColor": 0, "Left": 1230, "Top": 2070, "Width": 7365, "Height": 4020, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 1230, "ClientTop": 2070, "ClientWidth": 7365, "ClientHeight": 4020}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 12632256, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
      ["MMControl", "b_Sound", {"Left": 5520, "Top": 120, "Width": 3540, "Height": 330, "TabIndex": 8, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 12632256, "Left": 180, "Top": 6135, "Width": 9270, "Height": 645, "TabIndex": 2, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
        ["VideoSoftElastic", "b_Help", {"BackColor": 12632256, "Left": 7425, "Top": 0, "Width": 1845, "Height": 645, "TabIndex": 7, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1}],
        ["VideoSoftElastic", "b_All", {"BackColor": 12632256, "Left": 5580, "Top": 0, "Width": 1845, "Height": 645, "TabIndex": 6, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "All Players", "CaptionPos": 4, "AccessKey": -1}],
        ["VideoSoftElastic", "b_Computer", {"BackColor": 12632256, "Left": 3720, "Top": 0, "Width": 1860, "Height": 645, "TabIndex": 5, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Computer Players", "CaptionPos": 4, "AccessKey": -1}],
        ["VideoSoftElastic", "b_Human", {"BackColor": 12632256, "Left": 1860, "Top": 0, "Width": 1860, "Height": 645, "TabIndex": 4, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Human Players", "CaptionPos": 4, "AccessKey": -1}],
        ["VideoSoftElastic", "b_ExitHistory", {"BackColor": 12632256, "Left": 0, "Top": 0, "Width": 1860, "Height": 645, "TabIndex": 3, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1}]
      ]],
      ["GRAPH", "Graph1", {"Left": 180, "Top": 135, "Width": 9270, "Height": 5925, "TabIndex": 1, "BorderStyle": 0, "NumSets": 12, "NumPoints": 21, "GraphData": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "ColorData": [15, 14, 12, 13, 11, 10, 9, 4, 5, 3, 2, 1], "LabelText": [], "LegendText": [], "PatternData": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], "ExtraData": [], "GraphType": 6, "GraphStyle": 4, "SymbolData": [], "GraphTitle": "Company History", "BottomTitle": "This graph shows each company's history over the last 20 turns.", "Background": 8, "LegendStyle": 1, "Foreground": 0, "XPosData": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "FontFamily": [0], "FontStyle": [2, 0, 2], "FontSize": [200, 150, 80, 100], "AsciiData": [], "AsciiColor": [], "AsciiLabel": [], "AsciiLegend": [], "AsciiPattern": [], "AsciiXPos": [], "AsciiExtra": [], "AsciiSymbol": [], "AsciiFFamily": [], "AsciiFStyle": [], "AsciiFSize": []}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, VSElastic2, b_Help, b_All, b_Computer, b_Human, b_ExitHistory } = me.controls;
    const { Graph1 } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    const RED = 255;

    function b_All_Click() {
        drawAllHistory();
    }

    function b_All_MouseDown(Button, Shift, X, Y) {
        b_All.BackColor = 0xFFFFFF;
    }

    function b_All_MouseUp(Button, Shift, X, Y) {
        b_All.BackColor = 0xC0C0C0;
    }

    function b_Computer_Click() {
        let numWeeks = 0;
        let i = 0;
        let week = 0;
        const ARROW_CURSOR = 1;
        me.MousePointer = HOURGLASS;
        updateRivalNetWorth();
        Graph1.DataReset = 9;
        if (game.turn > 20) {
            for (i = 20; i >= 0; i--) {
                Graph1.LabelText = Format(game.turn - i, "#,#0");
            }
        }
        Graph1.NumSets = game.numRivals;
        if (game.numPlayers == 6) {
            Graph1.ColorData = 9;
            Graph1.ColorData = 4;
            Graph1.ColorData = 5;
            Graph1.ColorData = 3;
            Graph1.ColorData = 2;
            Graph1.ColorData = 1;
        } else if (game.numPlayers == 5) {
            Graph1.ColorData = 10;
            Graph1.ColorData = 9;
            Graph1.ColorData = 4;
            Graph1.ColorData = 5;
            Graph1.ColorData = 3;
            Graph1.ColorData = 2;
        } else if (game.numPlayers == 4) {
            Graph1.ColorData = 11;
            Graph1.ColorData = 10;
            Graph1.ColorData = 9;
            Graph1.ColorData = 4;
            Graph1.ColorData = 5;
            Graph1.ColorData = 3;
        } else if (game.numPlayers == 3) {
            Graph1.ColorData = 13;
            Graph1.ColorData = 11;
            Graph1.ColorData = 10;
            Graph1.ColorData = 9;
            Graph1.ColorData = 4;
            Graph1.ColorData = 5;
        } else if (game.numPlayers == 2) {
            Graph1.ColorData = 12;
            Graph1.ColorData = 13;
            Graph1.ColorData = 11;
            Graph1.ColorData = 10;
            Graph1.ColorData = 9;
            Graph1.ColorData = 4;
        } else if (game.numPlayers == 1) {
            Graph1.ColorData = 14;
            Graph1.ColorData = 12;
            Graph1.ColorData = 13;
            Graph1.ColorData = 11;
            Graph1.ColorData = 10;
            Graph1.ColorData = 9;
        }
        if (game.turn + 1 <= 21) {
            numWeeks = game.turn + 1;
        } else {
            numWeeks = 21;
        }
        Graph1.NumPoints = numWeeks;
        for (i = 1; i <= game.numRivals; i++) {
            Graph1.LegendText = Trim(rivals.companyNames[i]);
        }
        Graph1.BottomTitle = "This graph shows the change in each company's net worth over time.";
        for (i = 1; i <= game.numRivals; i++) {
            for (week = 0; week <= (numWeeks - 1); week++) {
                if (week == (numWeeks - 1)) {
                    Graph1.GraphData = rivals.netWorth[i];
                } else {
                    Graph1.GraphData = rivals.netWorthHistory[i][week];
                }
            }
        }
        Graph1.DrawMode = 2;
        me.MousePointer = ARROW_CURSOR;
    }

    function b_Computer_MouseDown(Button, Shift, X, Y) {
        b_Computer.BackColor = 0xFFFFFF;
    }

    function b_Computer_MouseUp(Button, Shift, X, Y) {
        b_Computer.BackColor = 0xC0C0C0;
    }

    async function b_ExitHistory_Click() {
        me.MousePointer = HOURGLASS;
        if (me.Tag == "NEWTURN" && game.tutorialMode == -1 && game.turn >= 10 || game.complexity >= 8) {
            frm_Complexity.Tag = "COMPLEXITY";
            await Unload(me);
        } else {
            await Unload(me);
        }
    }

    function b_ExitHistory_MouseDown(Button, Shift, X, Y) {
        b_ExitHistory.BackColor = 0xFFFFFF;
    }

    function b_ExitHistory_MouseUp(Button, Shift, X, Y) {
        b_ExitHistory.BackColor = 0xC0C0C0;
    }

    async function b_Help_Click() {
        me.MousePointer = HOURGLASS;
        if (b_Help.Visible == 0) {
            me.MousePointer = ARROW_CURSOR;
        } else if (me.Tag == "NEWTURN" && game.tutorialMode == -1 && game.turn >= 10 || game.complexity >= 8) {
            frm_Complexity.Tag = "COMPLEXITY";
            await Unload(me);
        } else {
            me.MousePointer = HOURGLASS;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            frm_Box1.FillElastic.Caption = "Help (Company History)";
            frm_Box1.b_Message.Caption = "The COMPANY HISTORY graph shows the change in each company's net worth over the last 20 weeks (i.e. 20 game turns). Each company's net worth is computed by adding together the company's total cash, savings and stock, then subtracting any money owed to the Trader's Union or Mr. Zinn. In order to win the game, a company must have a net worth of " + Format(nextGoal(), "#,#0") + " kubars.";
            await frm_Box1.Show(1);
        }
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = 0xFFFFFF;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = 0xC0C0C0;
    }

    function b_Human_Click() {
        let i = 0;
        let week = 0;
        let numWeeks = 0;
        me.MousePointer = HOURGLASS;
        Graph1.DataReset = 9;
        if (game.turn > 20) {
            for (i = 20; i >= 0; i--) {
                Graph1.LabelText = Format(game.turn - i, "#,#0");
            }
        }
        Graph1.NumSets = game.numPlayers;
        if (game.numPlayers == 6) {
            if (game.graphShowCompany[1] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 15;
            }
            if (game.graphShowCompany[2] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 14;
            }
            if (game.graphShowCompany[3] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 12;
            }
            if (game.graphShowCompany[4] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 13;
            }
            if (game.graphShowCompany[5] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 11;
            }
            if (game.graphShowCompany[6] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 10;
            }
        } else if (game.numPlayers == 5) {
            if (game.graphShowCompany[1] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 15;
            }
            if (game.graphShowCompany[2] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 14;
            }
            if (game.graphShowCompany[3] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 12;
            }
            if (game.graphShowCompany[4] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 13;
            }
            if (game.graphShowCompany[5] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 11;
            }
        } else if (game.numPlayers == 4) {
            if (game.graphShowCompany[1] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 15;
            }
            if (game.graphShowCompany[2] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 14;
            }
            if (game.graphShowCompany[3] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 12;
            }
            if (game.graphShowCompany[4] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 13;
            }
        } else if (game.numPlayers == 3) {
            if (game.graphShowCompany[1] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 15;
            }
            if (game.graphShowCompany[2] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 14;
            }
            if (game.graphShowCompany[3] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 12;
            }
        } else if (game.numPlayers == 2) {
            if (game.graphShowCompany[1] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 15;
            }
            if (game.graphShowCompany[2] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 14;
            }
        } else if (game.numPlayers == 1) {
            if (game.graphShowCompany[1] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 15;
            }
        }
        if (game.turn + 1 <= 21) {
            numWeeks = game.turn + 1;
        } else {
            numWeeks = 21;
        }
        Graph1.NumPoints = numWeeks;
        for (i = 1; i <= game.numPlayers; i++) {
            Graph1.LegendText = Trim(game.companyNames[i]);
        }
        Graph1.BottomTitle = "This graph shows the change in each company's net worth over time.";
        for (i = 1; i <= game.numPlayers; i++) {
            for (week = 0; week <= (numWeeks - 1); week++) {
                if (week == (numWeeks - 1)) {
                    if (game.graphShowCompany[i] == 0) {
                        Graph1.GraphData = game.netWorth[i];
                    } else {
                        Graph1.GraphData = 0;
                    }
                } else {
                    if (game.graphShowCompany[i] == 0) {
                        Graph1.GraphData = game.netWorthHistory[i][week];
                    } else {
                        Graph1.GraphData = 0;
                    }
                }
            }
        }
        Graph1.DrawMode = 2;
        me.MousePointer = ARROW_CURSOR;
    }

    function b_Human_MouseDown(Button, Shift, X, Y) {
        b_Human.BackColor = 0xFFFFFF;
    }

    function b_Human_MouseUp(Button, Shift, X, Y) {
        b_Human.BackColor = 0xC0C0C0;
    }

    function drawAllHistory() {
        let i = 0;
        let week = 0;
        let numWeeks = 0;
        me.MousePointer = HOURGLASS;
        updateRivalNetWorth();
        Graph1.DataReset = 9;
        if (game.turn > 20) {
            for (i = 20; i >= 0; i--) {
                Graph1.LabelText = Format(game.turn - i, "#,#0");
            }
        }
        Graph1.NumSets = game.numPlayers + game.numRivals;
        if (game.numPlayers == 6) {
            if (game.graphShowCompany[1] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 15;
            }
            if (game.graphShowCompany[2] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 14;
            }
            if (game.graphShowCompany[3] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 12;
            }
            if (game.graphShowCompany[4] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 13;
            }
            if (game.graphShowCompany[5] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 11;
            }
            if (game.graphShowCompany[6] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 10;
            }
            Graph1.ColorData = 9;
            Graph1.ColorData = 4;
            Graph1.ColorData = 5;
            Graph1.ColorData = 3;
            Graph1.ColorData = 2;
            Graph1.ColorData = 1;
        } else if (game.numPlayers == 5) {
            if (game.graphShowCompany[1] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 15;
            }
            if (game.graphShowCompany[2] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 14;
            }
            if (game.graphShowCompany[3] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 12;
            }
            if (game.graphShowCompany[4] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 13;
            }
            if (game.graphShowCompany[5] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 11;
            }
            Graph1.ColorData = 10;
            Graph1.ColorData = 9;
            Graph1.ColorData = 4;
            Graph1.ColorData = 5;
            Graph1.ColorData = 3;
            Graph1.ColorData = 2;
        } else if (game.numPlayers == 4) {
            if (game.graphShowCompany[1] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 15;
            }
            if (game.graphShowCompany[2] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 14;
            }
            if (game.graphShowCompany[3] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 12;
            }
            if (game.graphShowCompany[4] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 13;
            }
            Graph1.ColorData = 11;
            Graph1.ColorData = 10;
            Graph1.ColorData = 9;
            Graph1.ColorData = 4;
            Graph1.ColorData = 5;
            Graph1.ColorData = 3;
        } else if (game.numPlayers == 3) {
            if (game.graphShowCompany[1] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 15;
            }
            if (game.graphShowCompany[2] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 14;
            }
            if (game.graphShowCompany[3] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 12;
            }
            Graph1.ColorData = 13;
            Graph1.ColorData = 11;
            Graph1.ColorData = 10;
            Graph1.ColorData = 9;
            Graph1.ColorData = 4;
            Graph1.ColorData = 5;
        } else if (game.numPlayers == 2) {
            if (game.graphShowCompany[1] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 15;
            }
            if (game.graphShowCompany[2] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 14;
            }
            Graph1.ColorData = 12;
            Graph1.ColorData = 13;
            Graph1.ColorData = 11;
            Graph1.ColorData = 10;
            Graph1.ColorData = 9;
            Graph1.ColorData = 4;
        } else if (game.numPlayers == 1) {
            if (game.graphShowCompany[1] == -1) {
                Graph1.ColorData = 0;
            } else {
                Graph1.ColorData = 15;
            }
            Graph1.ColorData = 14;
            Graph1.ColorData = 12;
            Graph1.ColorData = 13;
            Graph1.ColorData = 11;
            Graph1.ColorData = 10;
            Graph1.ColorData = 9;
        }
        if (game.turn + 1 <= 21) {
            numWeeks = game.turn + 1;
        } else {
            numWeeks = 21;
        }
        Graph1.NumPoints = numWeeks;
        for (i = 1; i <= game.numPlayers; i++) {
            Graph1.LegendText = Trim(game.companyNames[i]);
        }
        for (i = 1; i <= game.numRivals; i++) {
            Graph1.LegendText = Trim(rivals.companyNames[i]);
        }
        Graph1.BottomTitle = "This graph shows the change in each company's net worth over time.";
        for (i = 1; i <= game.numPlayers; i++) {
            for (week = 0; week <= (numWeeks - 1); week++) {
                if (week == (numWeeks - 1)) {
                    if (game.graphShowCompany[i] == 0) {
                        Graph1.GraphData = game.netWorth[i];
                    } else {
                        Graph1.GraphData = 0;
                    }
                } else {
                    if (game.graphShowCompany[i] == 0) {
                        Graph1.GraphData = game.netWorthHistory[i][week];
                    } else {
                        Graph1.GraphData = 0;
                    }
                }
            }
        }
        for (i = 1; i <= game.numRivals; i++) {
            for (week = 0; week <= (numWeeks - 1); week++) {
                if (week == (numWeeks - 1)) {
                    Graph1.GraphData = rivals.netWorth[i];
                } else {
                    Graph1.GraphData = rivals.netWorthHistory[i][week];
                }
            }
        }
        Graph1.DrawMode = 2;
        me.MousePointer = ARROW_CURSOR;
    }

    function drawCurrentPlayerHistory() {
        let i = 0;
        let week = 0;
        let numWeeks = 0;
        Graph1.DataReset = 9;
        if (game.turn > 20) {
            for (i = 20; i >= 0; i--) {
                Graph1.LabelText = Format(game.turn - i, "#,#0");
            }
        }
        Graph1.NumSets = 1;
        if (game.currentPlayer == 1) {
            Graph1.ColorData = 15;
        } else if (game.currentPlayer == 2) {
            Graph1.ColorData = 14;
        } else if (game.currentPlayer == 3) {
            Graph1.ColorData = 12;
        } else if (game.currentPlayer == 4) {
            Graph1.ColorData = 13;
        } else if (game.currentPlayer == 5) {
            Graph1.ColorData = 11;
        } else if (game.currentPlayer == 6) {
            Graph1.ColorData = 10;
        }
        if (game.turn + 1 <= 21) {
            numWeeks = game.turn + 1;
        } else {
            numWeeks = 21;
        }
        Graph1.NumPoints = numWeeks;
        Graph1.LegendText = Trim(game.companyNames[game.currentPlayer]);
        Graph1.BottomTitle = "This graph shows the change in each company's net worth over time.";
        for (week = 0; week <= (numWeeks - 1); week++) {
            if (week == (numWeeks - 1)) {
                Graph1.GraphData = game.netWorth[game.currentPlayer];
            } else {
                Graph1.GraphData = game.netWorthHistory[game.currentPlayer][week];
            }
        }
    }

    function Form_Activate() {
        if (me.Tag == "BANKRUPT") {
            drawCurrentPlayerHistory();
        }
        if (me.Tag == "NEWTURN" && game.tutorialMode == -1 && game.turn >= 10 || game.complexity >= 8) {
            Graph1.GraphTitle = "Company History on Turn " + Format(game.turn, "#,#0");
            b_ExitHistory.Caption = "Continue";
            b_Computer.Visible = 0;
            b_All.Visible = 0;
            b_Human.Visible = 0;
            b_ExitHistory.FontSize = 12;
            b_Help.Caption = "Complexity";
            b_Help.FontSize = 18;
            b_Help.ForeColor = RED;
            b_Help.CaptionPos = 4;
            b_Help.Visible = 0;
        } else if (me.Tag == "NEWTURN" || me.Tag == "BANKRUPT") {
            Graph1.GraphTitle = "Company History on Turn " + Format(game.turn, "#,#0");
            b_ExitHistory.Caption = "Continue";
            b_Help.Visible = 0;
            b_Computer.Visible = 0;
            b_All.Visible = 0;
            b_Human.Visible = 0;
            b_ExitHistory.FontSize = 12;
        }
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_ExitHistory_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        if (me.Tag == "BANKRUPT") {
            drawCurrentPlayerHistory();
        } else {
            drawAllHistory();
        }
    }

    function Graph1_Click() {
        Graph1.ColorData = 15;
        Graph1.ColorData = 14;
        Graph1.ColorData = 12;
        Graph1.ColorData = 13;
        Graph1.ColorData = 11;
        Graph1.ColorData = 10;
        Graph1.ColorData = 9;
        Graph1.ColorData = 4;
        Graph1.ColorData = 5;
        Graph1.ColorData = 3;
        Graph1.ColorData = 2;
        Graph1.ColorData = 1;
    }

    return {
        b_All_Click, b_All_MouseDown, b_All_MouseUp, b_Computer_Click,
        b_Computer_MouseDown, b_Computer_MouseUp, b_ExitHistory_Click, b_ExitHistory_MouseDown,
        b_ExitHistory_MouseUp, b_Help_Click, b_Help_MouseDown, b_Help_MouseUp,
        b_Human_Click, b_Human_MouseDown, b_Human_MouseUp, drawAllHistory,
        drawCurrentPlayerHistory, Form_Activate, Form_KeyPress, Form_Load,
        Graph1_Click,
    };
});
