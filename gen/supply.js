// Originally translated from src/SUPPLY.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Supply",
  ["Form", "frm_Supply", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Quantity of Goods in Each Planet", "BackColor": 0, "ForeColor": 65535, "Left": 495, "Top": 1650, "Width": 6765, "Height": 3960, "WindowState": 2, "FontName": "MS Sans Serif", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "FillStyle": 0, "FillColor": 16777215, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 495, "ClientTop": 1650, "ClientWidth": 6765, "ClientHeight": 3960}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 12632256, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
      ["MMControl", "b_Sound", {"Left": 5820, "Top": 0, "Width": 3540, "Height": 330, "TabIndex": 14, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 12632256, "Left": 0, "Top": 345, "Width": 9600, "Height": 645, "TabIndex": 10, "AutoSizeChildren": 7, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
        ["VideoSoftElastic", "b_CargoOnShip", {"BackColor": 12632256, "Left": 90, "Top": 75, "Width": 5640, "Height": 495, "TabIndex": 13, "BorderWidth": 7, "BevelInner": 0, "BevelOuter": 4, "BevelInnerWidth": 0, "BevelOuterWidth": 7, "FloodDirection": 1, "FloodColor": 255, "Caption": "Cargo on Ship: 0000", "CaptionPos": 4}],
        ["VideoSoftElastic", "b_Cash", {"BackColor": 16777088, "Left": 5805, "Top": 75, "Width": 1860, "Height": 495, "TabIndex": 12, "BorderWidth": 7, "BevelInner": 0, "BevelOuter": 4, "BevelInnerWidth": 0, "BevelOuterWidth": 7, "Caption": "Cash: 0,000,000", "CaptionPos": 4, "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_Profit", {"BackColor": 16777088, "Left": 7755, "Top": 75, "Width": 1755, "Height": 495, "TabIndex": 11, "BorderWidth": 7, "BevelInner": 0, "BevelOuter": 4, "BevelInnerWidth": 0, "BevelOuterWidth": 7, "Caption": "Profit: 000,000", "CaptionPos": 4, "IntBkg": 16777088}]
      ]],
      ["VideoSoftElastic", "b_Message", {"BackColor": 0, "ForeColor": 16776960, "Left": 0, "Top": 990, "Width": 9600, "Height": 645, "TabIndex": 9, "FontName": "MS Sans Serif", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 9, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "BevelOuterWidth": 9, "Caption": "Click on the commodity you wish to buy or sell.", "CaptionPos": 4, "IntBkg": 0}],
      ["VideoSoftElastic", "GridContainer", {"BackColor": 16776960, "Left": 0, "Top": 1740, "Width": 9600, "Height": 4575, "TabIndex": 7, "AutoSizeChildren": 1, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16776960}, [
        ["Grid", "b_Grid", {"BackColor": 16776960, "ForeColor": 0, "Left": 0, "Top": 0, "Width": 9600, "Height": 4575, "FontName": "Arial", "FontSize": 9, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 8, "Rows": 19, "Cols": 16, "ScrollBars": 0, "HighLight": 0}]
      ]],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 12632256, "Left": 0, "Top": 6315, "Width": 9600, "Height": 570, "TabIndex": 2, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
        ["VideoSoftElastic", "b_Help", {"BackColor": 8421376, "ForeColor": 16777215, "Left": 7200, "Top": 0, "Width": 2400, "Height": 570, "TabIndex": 6, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 8421376}],
        ["VideoSoftElastic", "b_GoodsOnShip", {"BackColor": 8421376, "ForeColor": 16777215, "Left": 4800, "Top": 0, "Width": 2400, "Height": 570, "TabIndex": 5, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "Goods on Ship", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 8421376}],
        ["VideoSoftElastic", "b_Market", {"BackColor": 8421376, "ForeColor": 16777215, "Left": 2400, "Top": 0, "Width": 2400, "Height": 570, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "Marketplace", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 8421376}],
        ["VideoSoftElastic", "b_ExitSupply", {"BackColor": 8421376, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 2400, "Height": 570, "TabIndex": 3, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 8421376}]
      ]],
      ["VideoSoftElastic", "b_TitleBar", {"BackColor": 4210688, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 9600, "Height": 345, "TabIndex": 1, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777088, "Caption": "QUANTITY OF GOODS ON EACH PLANET", "CaptionPos": 4, "IntBkg": 4210688}],
      ["Image", "Image2", {"Picture": {"frx": "frx/SUPPLY/Image2.Picture.bmp"}, "Left": 3780, "Top": 4710, "Width": 855, "Height": 780, "Visible": 0, "Stretch": -1}]
    ]],
    ["Image", "Image3", {"Picture": {"frx": "frx/SUPPLY/Image3.Picture.bmp"}, "Left": 2790, "Top": 1590, "Width": 480, "Height": 660, "Visible": 0, "Stretch": -1}],
    ["Image", "Image1", {"Picture": {"frx": "frx/SUPPLY/Image1.Picture.bmp"}, "Left": 3150, "Top": 1860, "Width": 600, "Height": 450, "Visible": 0, "Stretch": -1}]
  ]],
function (me) {
    const { FillElastic, b_Sound, VSElastic3, b_CargoOnShip, b_Cash, b_Profit, b_Message, GridContainer } = me.controls;
    const { b_Grid, VSElastic2, b_Help, b_GoodsOnShip, b_Market, b_ExitSupply, b_TitleBar, Image2 } = me.controls;
    const { Image3, Image1 } = me.controls;
    const VIEW_ALL_COMMODITIES = 1;
    const VIEW_CARGO = 2;
    const VIEW_PLANET_GOODS = 3;
    const VIEW_ALL_GOODS = 4;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    const YELLOW = 65535;
    const RED = 255;
    const GREEN = 65280;
    const MAGENTA = 16711935;
    const CYAN = 16776960;
    let viewMode = 0;
    let rowCount = 0;

    async function b_ExitSupply_Click() {
        me.MousePointer = HOURGLASS;
        frm_Market.Tag = " ";
        await frm_MainMenu.Show();
        await Unload(frm_Market);
        await Unload(frm_Warehouse);
        await Unload(me);
    }

    function b_ExitSupply_MouseDown(Button, Shift, X, Y) {
        me.b_ExitSupply.BackColor = 0xC0C000;
    }

    function b_ExitSupply_MouseUp(Button, Shift, X, Y) {
        me.b_ExitSupply.BackColor = 0x808000;
    }

    function b_GoodsOnShip_Click() {
        let row = 0;
        const ARROW_CURSOR = 1;
        me.MousePointer = HOURGLASS;
        if (viewMode == VIEW_CARGO) {
            viewMode = VIEW_ALL_GOODS;
            frm_Market.Tag = "Marketplace";
            b_GoodsOnShip.Caption = "Show Cargo";
            b_TitleBar.Caption = "Commodity Supply (All Goods on " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + ")";
        } else {
            viewMode = VIEW_CARGO;
            frm_Market.Tag = "Show Cargo";
            b_GoodsOnShip.Caption = "Show All";
            b_TitleBar.Caption = "Commodity Supply (Cargo on Ship)";
        }
        for (row = rowCount; row >= 1; row--) {
            if (row == rowCount) {
                b_Grid.AddItem(" ");
            }
            b_Grid.RemoveItem(row);
        }
        fillGrid();
        sizeGrid();
        me.MousePointer = ARROW_CURSOR;
    }

    function b_GoodsOnShip_MouseDown(Button, Shift, X, Y) {
        me.b_GoodsOnShip.BackColor = 0xC0C000;
    }

    function b_GoodsOnShip_MouseUp(Button, Shift, X, Y) {
        me.b_GoodsOnShip.BackColor = 0x808000;
    }

    function b_Grid_MouseUp(Button, Shift, X, Y) {
        let clickedCol = 0;
        let distance = 0;
        let col = 0;
        const YELLOW = 65535;
        const RED = 255;
        if (Button != 2 && Button != 4) {
            player.supplyChartPlanet = -1;
            clickedCol = CLng(b_Grid.Col);
            b_Grid.Row = 0;
            for (col = 1; col <= LAST_PLANET + 1; col++) {
                b_Grid.ColAlignment[col] = 2;
                b_Grid.Col = col;
                b_Grid.Text = Trim(game.planetNames[col - 1]);
                if ((col - 1) != game.planet[game.currentPlayer]) {
                    b_Grid.Picture = LoadPicture("");
                }
            }
            b_Grid.Col = clickedCol;
            if ((clickedCol - 1) != game.planet[game.currentPlayer]) {
                player.supplyChartPlanet = CInt(b_Grid.Col - 1);
                b_Grid.Picture = Image3.Picture;
                b_Message.ForeColor = YELLOW;
                distance = CLng(Sqr(((game.planetX[game.planet[game.currentPlayer]] - game.planetX[player.supplyChartPlanet])) ** (2) + ((game.planetY[game.planet[game.currentPlayer]] - game.planetY[player.supplyChartPlanet])) ** (2)));
                b_Message.Caption = "The distance from " + UCase(Trim(game.planetNames[game.planet[game.currentPlayer]])) + " to " + UCase(Trim(game.planetNames[player.supplyChartPlanet])) + " is " + Format(distance, "#,#0") + " million kuters.";
            } else if ((clickedCol - 1) == game.planet[game.currentPlayer]) {
                b_Message.ForeColor = RED;
                b_Message.Caption = "You are currently on planet " + UCase(Trim(game.planetNames[game.planet[game.currentPlayer]])) + ".";
            }
        }
    }

    async function b_Help_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box2.FillElastic.Caption = "Help (Commodity Supply)";
        frm_Box2.b_Message.Caption = "This chart gives you a bird's-eye view of each planet's economy." + "\n" + "\n" + "If the SUPPLY is 0%, the goods are rare on the planet, and the price tends to be higher. If the SUPPLY is 100%, the commodity is plentiful on the planet, and the price tends to be lower." + "\n" + "\n" + "Keep in mind that no economy is entirely predictable. Prices can change overnight due to such things as natural disasters, labor strikes, changes in government policy, local wars and many other unexpected events.";
        await frm_Box2.Show(1);
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        me.b_Help.BackColor = 0xC0C000;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        me.b_Help.BackColor = 0x808000;
    }

    async function b_Market_Click() {
        let row = 0;
        me.MousePointer = HOURGLASS;
        for (row = rowCount; row >= 1; row--) {
            if (row == rowCount) {
                b_Grid.AddItem(" ");
            }
            b_Grid.RemoveItem(row);
        }
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        await frm_Market.Show();
    }

    function b_Market_MouseDown(Button, Shift, X, Y) {
        me.b_Market.BackColor = 0xC0C000;
    }

    function b_Market_MouseUp(Button, Shift, X, Y) {
        me.b_Market.BackColor = 0x808000;
    }

    function selectPlanetColumn() {
        let clickedCol = 0;
        let distance = 0;
        let col = 0;
        const GREEN = 65280;
        const MAGENTA = 16711935;
        player.supplyChartPlanet = -1;
        clickedCol = CLng(b_Grid.Col);
        b_Grid.Row = 0;
        for (col = 1; col <= LAST_PLANET + 1; col++) {
            b_Grid.ColAlignment[col] = 2;
            b_Grid.Col = col;
            b_Grid.Text = Trim(game.planetNames[col - 1]);
            if ((col - 1) != game.planet[game.currentPlayer]) {
                b_Grid.Picture = LoadPicture("");
            }
        }
        b_Grid.Col = clickedCol;
        if ((clickedCol - 1) != game.planet[game.currentPlayer]) {
            player.supplyChartPlanet = CInt(b_Grid.Col - 1);
            b_Grid.Picture = Image3.Picture;
            b_Message.ForeColor = GREEN;
            distance = CLng(Sqr(((game.planetX[game.planet[game.currentPlayer]] - game.planetX[player.supplyChartPlanet])) ** (2) + ((game.planetY[game.planet[game.currentPlayer]] - game.planetY[player.supplyChartPlanet])) ** (2)));
            b_Message.Caption = "The distance from " + UCase(Trim(game.planetNames[game.planet[game.currentPlayer]])) + " to " + UCase(Trim(game.planetNames[player.supplyChartPlanet])) + " is " + Format(distance, "#,#0") + " million kuters.";
        } else if ((clickedCol - 1) == game.planet[game.currentPlayer]) {
            b_Message.ForeColor = MAGENTA;
            b_Message.Caption = "You are currently on planet " + UCase(Trim(game.planetNames[game.planet[game.currentPlayer]])) + ".";
        }
    }

    function fillGrid() {
        let col = 0;
        let category = 0;
        let item = 0;
        let row = 0;
        let planetCol = 0;
        let lowestSupply = 0;
        let gridEmpty = 0;
        rowCount = 0;
        if (viewMode == VIEW_ALL_COMMODITIES) {
            rowCount = 18;
        } else if (viewMode == VIEW_CARGO) {
            for (col = 0; col <= 2; col++) {
                for (category = 0; category <= 5; category++) {
                    if (player.cargo[col][category] != 0) {
                        rowCount = rowCount + 1;
                    }
                }
            }
        } else if (viewMode == VIEW_PLANET_GOODS) {
            for (col = 0; col <= 2; col++) {
                for (category = 0; category <= 5; category++) {
                    if (game.available[game.planet[game.currentPlayer]][col][category] != 0) {
                        rowCount = rowCount + 1;
                    }
                }
            }
        } else if (viewMode == VIEW_ALL_GOODS) {
            for (col = 0; col <= 2; col++) {
                for (category = 0; category <= 5; category++) {
                    if (game.available[game.planet[game.currentPlayer]][col][category] != 0 || player.cargo[col][category] != 0) {
                        rowCount = rowCount + 1;
                    }
                }
            }
        }
        b_Grid.Cols = LAST_PLANET + 2;
        if (rowCount == 0) {
            rowCount = 1;
            gridEmpty = -1;
        } else {
            gridEmpty = 0;
        }
        b_Grid.Rows = rowCount + 1;
        for (col = 0; col <= LAST_PLANET + 1; col++) {
            b_Grid.FixedAlignment[col] = 2;
        }
        b_Grid.Row = 0;
        for (col = 1; col <= LAST_PLANET + 1; col++) {
            b_Grid.ColAlignment[col] = 2;
            b_Grid.Col = col;
            b_Grid.Text = Trim(game.planetNames[col - 1]);
            if ((col - 1) == game.planet[game.currentPlayer]) {
                b_Grid.Picture = Image2.Picture;
            }
        }
        if (player.supplyChartPlanet != -1) {
            b_Grid.Col = player.supplyChartPlanet + 1;
            b_Grid.Picture = Image3.Picture;
        }
        b_CargoOnShip.Caption = "ship's cargo bay = " + Format(100 * player.cargoTotal / player.cargoCapacity, "#,#0") + "% filled (" + Format(player.cargoTotal, "#,#0") + "/" + Format(player.cargoCapacity, "#,#0") + ")";
        b_CargoOnShip.FloodPercent = (player.cargoTotal / player.cargoCapacity) * 100;
        b_Cash.Caption = "Cash: " + Format(player.cash, "#,#0");
        b_Profit.Caption = "Profit: " + Format(game.weeklyProfit, "#,#0");
        for (col = 0; col <= LAST_PLANET + 1; col++) {
            b_Grid.Col = col;
            row = 0;
            for (category = 0; category <= 2; category++) {
                for (item = 0; item <= 5; item++) {
                    if (viewMode == VIEW_ALL_COMMODITIES) {
                        row = row + 1;
                        b_Grid.Row = row;
                        if (col == 0) {
                            b_Grid.Text = Trim(game.commodityNames[category][item]);
                        } else {
                            b_Grid.Text = Format(game.supplyPercent[col - 1][category][item], "#,#0") + "%";
                        }
                    } else if (player.cargo[category][item] != 0 && viewMode == VIEW_CARGO) {
                        row = row + 1;
                        b_Grid.Row = row;
                        if (col == 0) {
                            b_Grid.Text = Trim(game.commodityNames[category][item]);
                        } else {
                            b_Grid.Text = Format(game.supplyPercent[col - 1][category][item], "#,#0") + "%";
                        }
                    } else if (game.available[game.planet[game.currentPlayer]][category][item] != 0 && viewMode == VIEW_PLANET_GOODS) {
                        row = row + 1;
                        b_Grid.Row = row;
                        if (col == 0) {
                            b_Grid.Text = Trim(game.commodityNames[category][item]);
                        } else {
                            b_Grid.Text = Format(game.supplyPercent[col - 1][category][item], "#,#0") + "%";
                        }
                    } else if (game.available[game.planet[game.currentPlayer]][category][item] != 0 || player.cargo[category][item] != 0 && viewMode == VIEW_ALL_GOODS) {
                        row = row + 1;
                        b_Grid.Row = row;
                        if (col == 0) {
                            b_Grid.Text = Trim(game.commodityNames[category][item]);
                        } else {
                            b_Grid.Text = Format(game.supplyPercent[col - 1][category][item], "#,#0") + "%";
                        }
                    }
                }
            }
        }
        row = 0;
        for (category = 0; category <= 2; category++) {
            for (item = 0; item <= 5; item++) {
                if (viewMode == VIEW_ALL_COMMODITIES) {
                    row = row + 1;
                    lowestSupply = game.supplyPercent[0][category][item];
                    for (planetCol = 2; planetCol <= LAST_PLANET + 1; planetCol++) {
                        if (lowestSupply > game.supplyPercent[planetCol - 1][category][item]) {
                            lowestSupply = game.supplyPercent[planetCol - 1][category][item];
                        }
                    }
                    b_Grid.Row = row;
                    for (planetCol = 1; planetCol <= LAST_PLANET + 1; planetCol++) {
                        if (game.supplyPercent[planetCol - 1][category][item] == lowestSupply) {
                            b_Grid.Col = planetCol;
                            b_Grid.Picture = Image1.Picture;
                        } else {
                            b_Grid.Col = planetCol;
                        }
                    }
                } else if (player.cargo[category][item] != 0 && viewMode == VIEW_CARGO) {
                    row = row + 1;
                    lowestSupply = game.supplyPercent[0][category][item];
                    for (planetCol = 2; planetCol <= LAST_PLANET + 1; planetCol++) {
                        if (lowestSupply > game.supplyPercent[planetCol - 1][category][item]) {
                            lowestSupply = game.supplyPercent[planetCol - 1][category][item];
                        }
                    }
                    b_Grid.Row = row;
                    for (planetCol = 1; planetCol <= LAST_PLANET + 1; planetCol++) {
                        if (game.supplyPercent[planetCol - 1][category][item] == lowestSupply) {
                            b_Grid.Col = planetCol;
                            b_Grid.Picture = Image1.Picture;
                        } else {
                            b_Grid.Col = planetCol;
                        }
                    }
                } else if (game.available[game.planet[game.currentPlayer]][category][item] != 0 && viewMode == VIEW_PLANET_GOODS) {
                    row = row + 1;
                    lowestSupply = game.supplyPercent[0][category][item];
                    for (planetCol = 2; planetCol <= LAST_PLANET + 1; planetCol++) {
                        if (lowestSupply > game.supplyPercent[planetCol - 1][category][item]) {
                            lowestSupply = game.supplyPercent[planetCol - 1][category][item];
                        }
                    }
                    b_Grid.Row = row;
                    for (planetCol = 1; planetCol <= LAST_PLANET + 1; planetCol++) {
                        if (game.supplyPercent[planetCol - 1][category][item] == lowestSupply) {
                            b_Grid.Col = planetCol;
                            b_Grid.Picture = Image1.Picture;
                        } else {
                            b_Grid.Col = planetCol;
                        }
                    }
                } else if (game.available[game.planet[game.currentPlayer]][category][item] != 0 || player.cargo[category][item] != 0 && viewMode == VIEW_ALL_GOODS) {
                    row = row + 1;
                    lowestSupply = game.supplyPercent[0][category][item];
                    for (planetCol = 2; planetCol <= LAST_PLANET + 1; planetCol++) {
                        if (lowestSupply > game.supplyPercent[planetCol - 1][category][item]) {
                            lowestSupply = game.supplyPercent[planetCol - 1][category][item];
                        }
                    }
                    b_Grid.Row = row;
                    for (planetCol = 1; planetCol <= LAST_PLANET + 1; planetCol++) {
                        if (game.supplyPercent[planetCol - 1][category][item] == lowestSupply) {
                            b_Grid.Col = planetCol;
                            b_Grid.Picture = Image1.Picture;
                        } else {
                            b_Grid.Col = planetCol;
                        }
                    }
                }
            }
        }
        if (gridEmpty == 0) {
            b_Grid.AddItem(" ");
            b_Grid.Row = rowCount + 1;
        }
        b_Grid.Row = 1;
        b_Grid.Col = 1;
    }

    function sizeGrid() {
        let gridHeight = 0;
        let gridWidth = 0;
        let i = 0;
        if (rowCount >= 13) {
            b_Grid.ScrollBars = 3;
        } else {
            b_Grid.ScrollBars = 0;
        }
        if (b_Grid.ScrollBars == 3) {
            gridHeight = Screen.Height * 0.85;
            gridWidth = Screen.Width * 0.95;
        } else {
            gridHeight = Screen.Height * 0.85;
            gridWidth = Screen.Width * 0.99;
        }
        b_Grid.ColWidth[0] = gridWidth / 6;
        for (i = 0; i <= rowCount; i++) {
            b_Grid.RowHeight[i] = gridHeight / 19;
        }
        for (i = 1; i <= LAST_PLANET + 1; i++) {
            b_Grid.ColWidth[i] = (gridWidth - (gridWidth / 6)) / (LAST_PLANET + 1);
        }
    }

    function Form_Activate() {
        me.MousePointer = HOURGLASS;
        if (frm_Market.Tag == "Show Cargo") {
            viewMode = VIEW_CARGO;
            b_GoodsOnShip.Caption = "Show All";
            b_TitleBar.Caption = "Commodity Supply (Cargo on Ship)";
        } else {
            viewMode = VIEW_ALL_GOODS;
            b_GoodsOnShip.Caption = "Show Cargo";
            b_TitleBar.Caption = "Commodity Supply (All Goods on " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + ")";
        }
        fillGrid();
        sizeGrid();
        b_Message.ForeColor = CYAN;
        if (player.cargoTotal == 0) {
            b_Message.Caption = "ADVICE: First buy a commodity with a low Market Price before looking at this chart.";
        } else {
            b_Message.Caption = "If the % is low, the goods are rare on the planet, and the price tends to be higher.";
        }
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_ExitSupply_Click();
        }
    }

    return {
        b_ExitSupply_Click, b_ExitSupply_MouseDown, b_ExitSupply_MouseUp, b_GoodsOnShip_Click,
        b_GoodsOnShip_MouseDown, b_GoodsOnShip_MouseUp, b_Grid_MouseUp, b_Help_Click,
        b_Help_MouseDown, b_Help_MouseUp, b_Market_Click, b_Market_MouseDown,
        b_Market_MouseUp, selectPlanetColumn, fillGrid, sizeGrid,
        Form_Activate, Form_KeyPress,
    };
});
