// Originally translated from src/GRAPH3.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_PieChart",
  ["Form", "frm_PieChart", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Market Strength", "BackColor": 0, "Left": 825, "Top": 2115, "Width": 7365, "Height": 4005, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 825, "ClientTop": 2115, "ClientWidth": 7365, "ClientHeight": 4005}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16744576}, [
      ["MMControl", "b_Sound", {"Left": 5430, "Top": 0, "Width": 3540, "Height": 330, "TabIndex": 5, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 4194304, "Left": 300, "Top": 5835, "Width": 9000, "Height": 930, "TabIndex": 2, "AutoSizeChildren": 1, "BorderWidth": 12, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "b_Help", {"BackColor": 8454143, "Left": 4545, "Top": 180, "Width": 4275, "Height": 570, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 8454143}],
        ["VideoSoftElastic", "b_ExitMarketStrength", {"BackColor": 8454143, "Left": 180, "Top": 180, "Width": 4275, "Height": 570, "TabIndex": 3, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 8454143}]
      ]],
      ["GRAPH", "Graph1", {"Left": 900, "Top": 315, "Width": 7815, "Height": 5385, "TabIndex": 1, "BorderStyle": 0, "NumPoints": 12, "GraphData": [0], "ColorData": [15, 14, 12, 13, 11, 10, 9, 4, 5, 3, 2, 1], "LabelText": [], "LegendText": [], "PatternData": [0], "ExtraData": [], "GraphType": 2, "SymbolData": [], "GraphTitle": "Market Strength", "BottomTitle": "This chart shows each company's ship size.", "Background": 7, "LegendStyle": 1, "ThickLines": 0, "XPosData": [0], "FontFamily": [0], "FontStyle": [2, 0, 2, 2], "FontSize": [250, 140, 80, 90], "AsciiData": [], "AsciiColor": [], "AsciiLabel": [], "AsciiLegend": [], "AsciiPattern": [], "AsciiXPos": [], "AsciiExtra": [], "AsciiSymbol": [], "AsciiFFamily": [], "AsciiFStyle": [], "AsciiFSize": []}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, VSElastic2, b_Help, b_ExitMarketStrength, Graph1 } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    const RED = 255;

    async function b_ExitMarketStrength_Click() {
        me.MousePointer = HOURGLASS;
        if (me.Tag == "NEWTURN" && game.tutorialMode == -1 && game.turn >= 10 || game.complexity >= 8) {
            frm_Complexity.Tag = "COMPLEXITY";
            await Unload(me);
        } else {
            await Unload(me);
        }
    }

    function b_ExitMarketStrength_MouseDown(Button, Shift, X, Y) {
        b_ExitMarketStrength.BackColor = 0xFFFFFF;
    }

    function b_ExitMarketStrength_MouseUp(Button, Shift, X, Y) {
        b_ExitMarketStrength.BackColor = 0x80FFFF;
    }

    async function b_Help_Click() {
        me.MousePointer = HOURGLASS;
        if (me.Tag == "NEWTURN" && game.tutorialMode == -1 && game.turn >= 10 || game.complexity >= 8) {
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
            frm_Box1.FillElastic.Caption = "Help (Market Strength)";
            frm_Box1.b_Message.Caption = "This pie chart shows each company's MARKET STRENGTH. The Market Strength is based on each company's ship size.  The larger the ship, the more cargo and passengers the company can transport between planets.";
            await frm_Box1.Show(1);
        }
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = 0xFFFFFF;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = 0x80FFFF;
    }

    function drawMarketStrength() {
        let company = 0;
        const ARROW_CURSOR = 1;
        me.MousePointer = HOURGLASS;
        Graph1.DrawMode = 1;
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
        Graph1.NumPoints = game.numPlayers + game.numRivals;
        Graph1.GraphType = 2;
        Graph1.GraphStyle = 0;
        for (company = 1; company <= game.numPlayers; company++) {
            Graph1.LegendText = Trim(game.companyNames[company]);
        }
        for (company = 1; company <= game.numRivals; company++) {
            Graph1.LegendText = Trim(rivals.companyNames[company]);
        }
        for (company = 1; company <= game.numPlayers; company++) {
            if (game.graphShowCompany[company] == 0) {
                Graph1.GraphData = game.shipSize[company];
            } else {
                Graph1.GraphData = 0;
            }
        }
        for (company = 1; company <= game.numRivals; company++) {
            Graph1.GraphData = rivals.shipSize[company];
        }
        Graph1.DrawMode = 2;
        me.MousePointer = ARROW_CURSOR;
    }

    function Form_Activate() {
        if (me.Tag != "NEWTURN") {
            Graph1.ThisPoint = game.currentPlayer;
            Graph1.ExtraData = 1;
        }
        if (me.Tag == "NEWTURN" && game.tutorialMode == -1 && game.turn >= 10 || game.complexity >= 8) {
            Graph1.GraphTitle = "Market Strength on Turn " + Format(game.turn, "#,#0");
            b_Help.Caption = "Complexity";
            b_Help.FontSize = 18;
            b_Help.ForeColor = RED;
            b_Help.CaptionPos = 4;
            b_Help.Visible = 0;
        } else if (me.Tag == "NEWTURN") {
            Graph1.GraphTitle = "Market Strength on Turn " + Format(game.turn, "#,#0");
            b_Help.Visible = 0;
        } else if (me.Tag == "MONEY") {
            Graph1.GraphTitle = "Net Worth";
        }
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_ExitMarketStrength_Click();
        }
    }

    function Form_Load() {
        updateRivalNetWorth();
        me.MousePointer = HOURGLASS;
        drawMarketStrength();
    }

    return {
        b_ExitMarketStrength_Click, b_ExitMarketStrength_MouseDown, b_ExitMarketStrength_MouseUp, b_Help_Click,
        b_Help_MouseDown, b_Help_MouseUp, drawMarketStrength, Form_Activate,
        Form_KeyPress, Form_Load,
    };
});
