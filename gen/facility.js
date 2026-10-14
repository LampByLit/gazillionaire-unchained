// Originally translated from src/FACILITY.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Facility",
  ["Form", "frm_Facility", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Facility", "BackColor": 0, "Left": 480, "Top": 1410, "Width": 7710, "Height": 5385, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 480, "ClientTop": 1410, "ClientWidth": 7710, "ClientHeight": 5385}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 12632256, "ForeColor": 65535, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
      ["MMControl", "b_Sound", {"Left": 5340, "Top": 2340, "Width": 3540, "Height": 330, "TabIndex": 16, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 12632256, "Left": 0, "Top": 1965, "Width": 9600, "Height": 4335, "TabIndex": 7, "AutoSizeChildren": 1, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
        ["Grid", "b_Grid", {"BackColor": 16777215, "ForeColor": 0, "Left": 0, "Top": 0, "Width": 9600, "Height": 4335, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 8, "Rows": 19, "Cols": 8, "ScrollBars": 0, "HighLight": 0}]
      ]],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 8421504, "Left": 0, "Top": 6300, "Width": 9600, "Height": 600, "TabIndex": 3, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 8421504}, [
        ["VideoSoftElastic", "b_Exit", {"BackColor": 0, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 3210, "Height": 600, "TabIndex": 6, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}],
        ["VideoSoftElastic", "b_Help", {"BackColor": 0, "ForeColor": 16777215, "Left": 6405, "Top": 0, "Width": 3195, "Height": 600, "TabIndex": 5, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}],
        ["VideoSoftElastic", "b_MainMenu", {"BackColor": 0, "ForeColor": 16777215, "Left": 3210, "Top": 0, "Width": 3195, "Height": 600, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Return to Main Menu", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}]
      ]],
      ["VideoSoftElastic", "VSElastic1", {"BackColor": 0, "Left": 0, "Top": 0, "Width": 9585, "Height": 1035, "TabIndex": 2, "AutoSizeChildren": 1, "BorderWidth": 4, "ChildSpacing": 2, "BevelInner": 0, "BevelInnerWidth": 2, "IntBkg": 0}, [
        ...planetButtons({"BackColor": 0, "ForeColor": 16777215, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "CaptionPos": 0, "AccessKey": -1, "IntBkg": 0}, false),
      ]],
      ["VideoSoftElastic", "b_Message", {"BackColor": 0, "ForeColor": 255, "Left": 0, "Top": 1140, "Width": 9555, "Height": 705, "TabIndex": 1, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 9, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "BevelOuterWidth": 9, "Caption": "Click on the PLANET ICONS to see the FACILITIES located on each planet.", "CaptionPos": 4, "IntBkg": 0}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, VSElastic2, b_Grid, VSElastic3, b_Exit, b_Help, b_MainMenu } = me.controls;
    const { VSElastic1, b_Planet, b_Message } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    let selectedPlanet = 0;
    let rowCount = 0;

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await frm_LeavePlanet.Show();
        await Unload(me);
    }

    function b_Exit_MouseDown(Button, Shift, X, Y) {
        b_Exit.BackColor = 0x404040;
    }

    function b_Exit_MouseUp(Button, Shift, X, Y) {
        b_Exit.BackColor = 0x0;
    }

    async function b_Help_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box3.FillElastic.Caption = "Help (Facilities)";
        frm_Box3.b_Message.Caption = "In an attempt to promote free trade in the Kukubian Colonies, Supreme Commander Dred Nicolson has decided to privatize various government-owned facilities on each planet." + "\n" + "\n" + "Every few turns, Dred Nicolson will auction off such facilities as fuel depots, launch pads and passenger ticket offices to the highest bidder." + "\n" + "\n" + "The company that buys a facility can charge other trading companies a FEE every time they visit the planet where the facility is located. The FEE is the amount of kubars each trading company must pay when arriving on the planet." + "\n" + "\n" + "The REVENUE is the amount of kubars generated from the fees. The company who owns the facility must travel to the planet to collect the REVENUES.";
        await frm_Box3.Show(1);
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = 0x404040;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = 0x0;
    }

    async function b_MainMenu_Click() {
        me.MousePointer = ARROW_CURSOR;
        FillElastic.Visible = 0;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_MainMenu_MouseDown(Button, Shift, X, Y) {
        b_MainMenu.BackColor = 0x404040;
    }

    function b_MainMenu_MouseUp(Button, Shift, X, Y) {
        b_MainMenu.BackColor = 0x0;
    }

    function b_Planet_Click(Index) {
        me.MousePointer = HOURGLASS;
        selectedPlanet = CLng(Index);
        fillFacilityGrid();
        sizeGrid();
        me.MousePointer = ARROW_CURSOR;
    }

    function fillFacilityGrid() {
        let col = 0;
        let human = 0;
        let rival = 0;
        let row = 0;
        if (settings.soundOn == -1 && b_Sound.Tag == "First Sound = True") {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "ping1.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        b_Sound.Tag = "First Sound = True";
        if (selectedPlanet == LAST_PLANET + 1) {
            b_Message.Caption = "Click on the PLANET ICONS to see the FACILITIES located on each planet.";
        } else {
            b_Message.Caption = "Facilities on " + UCase(Trim(game.planetNames[selectedPlanet]));
        }
        row = 0;
        for (col = 1; col <= game.numPlayers; col++) {
            if (game.graphShowCompany[col] == 0) {
                row = row + 1;
            }
        }
        rowCount = row + game.numRivals;
        b_Grid.Cols = 4;
        b_Grid.Rows = rowCount + 1;
        for (col = 0; col <= 3; col++) {
            b_Grid.FixedAlignment[col] = 2;
        }
        b_Grid.Row = 0;
        for (col = 1; col <= 3; col++) {
            b_Grid.ColAlignment[col] = 2;
            b_Grid.Col = col;
            if (col == 1) {
                if (selectedPlanet == LAST_PLANET + 1) {
                    b_Grid.Text = "Facilities";
                } else {
                    b_Grid.Text = "Facilities on " + Trim(game.planetNames[selectedPlanet]);
                }
            } else if (col == 2) {
                b_Grid.Text = "Fees (kubars)";
            } else if (col == 3) {
                b_Grid.Text = "Revenue (kubars)";
            }
        }
        for (col = 0; col <= 3; col++) {
            b_Grid.Col = col;
            row = 0;
            for (human = 1; human <= game.numPlayers; human++) {
                if (game.graphShowCompany[human] == 0) {
                    row = row + 1;
                    b_Grid.Row = row;
                    if (col == 0) {
                        b_Grid.Text = Trim(game.companyNames[human]);
                    } else if (col == 1) {
                        if (selectedPlanet == LAST_PLANET + 1) {
                            b_Grid.Text = "-----";
                        } else {
                            b_Grid.Text = Format(game.facilitiesOwned[human][selectedPlanet], "#,#0");
                        }
                    } else if (col == 2) {
                        if (selectedPlanet == LAST_PLANET + 1) {
                            b_Grid.Text = "-----";
                        } else {
                            b_Grid.Text = Format(game.facilityFees[human][selectedPlanet], "#,#0");
                        }
                    } else if (col == 3) {
                        if (selectedPlanet == LAST_PLANET + 1) {
                            b_Grid.Text = "-----";
                        } else {
                            b_Grid.Text = Format(game.facilityRevenue[human][selectedPlanet], "#,#0");
                        }
                    }
                }
            }
            for (rival = 1; rival <= game.numRivals; rival++) {
                row = row + 1;
                b_Grid.Row = row;
                if (col == 0) {
                    b_Grid.Text = Trim(rivals.companyNames[rival]);
                } else if (col == 1) {
                    if (selectedPlanet == LAST_PLANET + 1) {
                        b_Grid.Text = "-----";
                    } else {
                        b_Grid.Text = Format(rivals.facilitiesOwned[rival][selectedPlanet], "#,#0");
                    }
                } else if (col == 2) {
                    if (selectedPlanet == LAST_PLANET + 1) {
                        b_Grid.Text = "-----";
                    } else {
                        b_Grid.Text = Format(rivals.facilityFees[rival][selectedPlanet], "#,#0");
                    }
                } else if (col == 3) {
                    if (selectedPlanet == LAST_PLANET + 1) {
                        b_Grid.Text = "-----";
                    } else {
                        b_Grid.Text = Format(rivals.facilityRevenue[rival][selectedPlanet], "#,#0");
                    }
                }
            }
        }
        b_Grid.Row = 1;
        b_Grid.Col = 1;
    }

    function sizeGrid() {
        let gridHeight = 0;
        let gridWidth = 0;
        let i = 0;
        b_Grid.ScrollBars = 0;
        gridHeight = Screen.Height * 0.6;
        gridWidth = Screen.Width * 0.99;
        b_Grid.ColWidth[0] = gridWidth / 3.3;
        for (i = 0; i <= rowCount; i++) {
            b_Grid.RowHeight[i] = gridHeight / (game.numPlayers + game.numRivals + 1);
        }
        for (i = 1; i <= 3; i++) {
            b_Grid.ColWidth[i] = (gridWidth - (gridWidth / 3.3)) / 3;
        }
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
        me.MousePointer = HOURGLASS;
        b_Sound.Tag = "First Sound = False";
        selectedPlanet = LAST_PLANET + 1;
        for (planet = 0; planet <= LAST_PLANET; planet++) {
            b_Planet[planet].Picture = LoadPicture(Trim(paths.imageDir) + game.planetNames[planet] + "1.bmp");
            b_Planet[planet].Caption = game.planetNames[planet];
        }
        fillFacilityGrid();
        sizeGrid();
    }

    return {
        b_Exit_Click, b_Exit_MouseDown, b_Exit_MouseUp, b_Help_Click,
        b_Help_MouseDown, b_Help_MouseUp, b_MainMenu_Click, b_MainMenu_MouseDown,
        b_MainMenu_MouseUp, b_Planet_Click, fillFacilityGrid, sizeGrid,
        Form_Activate, Form_KeyPress, Form_Load,
    };
});
