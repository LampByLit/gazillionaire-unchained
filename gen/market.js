// Originally translated from src/MARKET.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Market",
  ["Form", "frm_Market", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Market Place", "BackColor": 0, "ForeColor": 65535, "Left": 780, "Top": 2175, "Width": 7890, "Height": 5415, "WindowState": 2, "FontName": "MS Sans Serif", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "FillStyle": 0, "FillColor": 16777215, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 780, "ClientTop": 2175, "ClientWidth": 7890, "ClientHeight": 5415}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 12632256, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
      ["VideoSoftElastic", "b_Quick", {"BackColor": 8454016, "ForeColor": 0, "Left": 0, "Top": 1845, "Width": 1575, "Height": 345, "TabIndex": 16, "FontName": "Arial", "FontSize": 9, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "Shortcut = off", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 8454016}],
      ["MMControl", "b_Sound", {"Left": 5670, "Top": 2760, "Width": 3540, "Height": 330, "TabIndex": 14, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 12632256, "Left": 0, "Top": 360, "Width": 9600, "Height": 660, "TabIndex": 10, "AutoSizeChildren": 7, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
        ["VideoSoftElastic", "b_Profit", {"BackColor": 49152, "Left": 7755, "Top": 75, "Width": 1770, "Height": 510, "TabIndex": 13, "BorderWidth": 7, "BevelInner": 0, "BevelOuter": 4, "BevelInnerWidth": 0, "BevelOuterWidth": 7, "Caption": "Profit: 000,000", "CaptionPos": 4, "IntBkg": 49152}],
        ["VideoSoftElastic", "b_Cash", {"BackColor": 49152, "Left": 5820, "Top": 75, "Width": 1845, "Height": 510, "TabIndex": 12, "BorderWidth": 7, "BevelInner": 0, "BevelOuter": 4, "BevelInnerWidth": 0, "BevelOuterWidth": 7, "Caption": "Cash: 0,000,000", "CaptionPos": 4, "IntBkg": 49152}],
        ["VideoSoftElastic", "b_CargoOnShip", {"BackColor": 12632256, "Left": 75, "Top": 75, "Width": 5655, "Height": 510, "TabIndex": 11, "BorderWidth": 7, "BevelInner": 0, "BevelOuter": 4, "BevelInnerWidth": 0, "BevelOuterWidth": 7, "FloodDirection": 1, "FloodColor": 255, "Caption": "Cargo on Ship: 0000", "CaptionPos": 4}]
      ]],
      ["VideoSoftElastic", "b_Message", {"BackColor": 0, "ForeColor": 65280, "Left": 0, "Top": 1095, "Width": 9600, "Height": 720, "TabIndex": 9, "FontName": "MS Sans Serif", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 9, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "BevelOuterWidth": 9, "Caption": "Click on the commodity you wish to buy or sell.", "CaptionPos": 4, "IntBkg": 0}],
      ["VideoSoftElastic", "GridContainer", {"BackColor": 16776960, "Left": 0, "Top": 1890, "Width": 9600, "Height": 4410, "TabIndex": 7, "AutoSizeChildren": 1, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16776960}, [
        ["Grid", "b_Grid", {"BackColor": 8454016, "ForeColor": 0, "Left": 0, "Top": 0, "Width": 9600, "Height": 4410, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 8, "Rows": 19, "Cols": 8, "ScrollBars": 0, "BorderStyle": 0, "HighLight": 0}]
      ]],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 12632256, "Left": 0, "Top": 6315, "Width": 9600, "Height": 585, "TabIndex": 2, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
        ["VideoSoftElastic", "b_Warehouse", {"BackColor": 32768, "ForeColor": 16777215, "Left": 5760, "Top": 0, "Width": 1920, "Height": 585, "TabIndex": 15, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "Warehouse", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 32768}],
        ["VideoSoftElastic", "b_Help", {"BackColor": 32768, "ForeColor": 16777215, "Left": 7680, "Top": 0, "Width": 1920, "Height": 585, "TabIndex": 6, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 32768}],
        ["VideoSoftElastic", "b_GoodsOnShip", {"BackColor": 32768, "ForeColor": 16777215, "Left": 3840, "Top": 0, "Width": 1920, "Height": 585, "TabIndex": 5, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "Cargo", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 32768}],
        ["VideoSoftElastic", "b_Supply", {"BackColor": 32768, "ForeColor": 16777215, "Left": 1920, "Top": 0, "Width": 1920, "Height": 585, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "Supply   %", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 32768}],
        ["VideoSoftElastic", "b_Exit", {"BackColor": 32768, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 1920, "Height": 585, "TabIndex": 3, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 32768}]
      ]],
      ["VideoSoftElastic", "b_TitleBar", {"BackColor": 16384, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 9600, "Height": 345, "TabIndex": 1, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 1, "BevelInner": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 1, "FloodColor": 16777088, "Caption": "Market Place", "CaptionPos": 4, "IntBkg": 16384}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Quick, b_Sound, VSElastic3, b_Profit, b_Cash, b_CargoOnShip, b_Message } = me.controls;
    const { GridContainer, b_Grid, VSElastic2, b_Warehouse, b_Help, b_GoodsOnShip, b_Supply, b_Exit } = me.controls;
    const { b_TitleBar } = me.controls;
    const VIEW_ALL_GOODS = 1;
    const VIEW_CARGO = 2;
    const VIEW_PLANET_GOODS = 3;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    const WHITE = 16777215;
    const GREEN = 65280;
    const CYAN = 16776960;
    const MAGENTA = 16711935;
    let viewMode = 0;
    let rowCount = 0;
    let rowCategory = DimArray([18], 0);
    let rowItem = DimArray([18], 0);
    let gridEmpty = 0;

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        me.Tag = " ";
        await frm_MainMenu.Show();
        await Unload(frm_Warehouse);
        await Unload(frm_Supply);
        await Unload(me);
    }

    function b_Exit_MouseDown(Button, Shift, X, Y) {
        b_Exit.BackColor = 0xC000;
    }

    function b_Exit_MouseUp(Button, Shift, X, Y) {
        b_Exit.BackColor = 0x8000;
    }

    function b_GoodsOnShip_Click() {
        let row = 0;
        const ARROW_CURSOR = 1;
        me.MousePointer = HOURGLASS;
        if (viewMode == VIEW_CARGO) {
            viewMode = VIEW_ALL_GOODS;
            b_GoodsOnShip.Caption = "Show Cargo";
            b_TitleBar.Caption = "Marketplace (All Goods on " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + ")";
            me.Tag = "Marketplace";
        } else {
            viewMode = VIEW_CARGO;
            b_GoodsOnShip.Caption = "Show All";
            b_TitleBar.Caption = "Marketplace (Cargo on Ship)";
            me.Tag = "Show Cargo";
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
        b_GoodsOnShip.BackColor = 0xC000;
    }

    function b_GoodsOnShip_MouseUp(Button, Shift, X, Y) {
        b_GoodsOnShip.BackColor = 0x8000;
    }

    function b_Grid_MouseDown(Button, Shift, X, Y) {
        me.KeyPreview = 0;
    }

    async function b_Grid_MouseUp(Button, Shift, X, Y) {
        if (Button != 2 && Button != 4 && b_Grid.Row != rowCount + 1 && b_Grid.Row > 0 && gridEmpty == 0) {
            await tradeCommodity((b_Grid.Row));
        }
        me.KeyPreview = -1;
    }

    async function b_Help_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box3.FillElastic.Caption = "Help (Marketplace)";
        frm_Box3.b_Message.Caption = "As a space merchant, your goal is to buy commodities for a low price on one planet, then travel to another planet and sell them for a substantially higher price." + "\n" + "\n" + "Your ship can hold up to " + Format(player.cargoCapacity, "#,#0") + " tons of cargo. As long as you have enough money and room on your ship, you can purchase any of the goods available for sale. If you make a mistake and buy the wrong commodity, just return it right away and you'll get a full refund." + "\n" + "\n" + "The MARKET PRICE is the price that the commodities are selling for on this planet. The PRICE RANGE shows the lowest and highest possible prices on other planets. The PRICE YOU PAID is the AVERAGE price for which you bought the commodities. The TONS ON " + UCase(Trim(game.planetNames[game.planet[game.currentPlayer]])) + " is the amount of commodities for sale on this planet.";
        await frm_Box3.Show(1);
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = 0xC000;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = 0x8000;
    }

    function b_Quick_Click() {
        if (player.quickMarket == -1) {
            player.quickMarket = 0;
            b_Quick.Caption = "Shortcut = off";
        } else {
            player.quickMarket = -1;
            b_Quick.Caption = "Shortcut = on";
        }
    }

    function b_Quick_MouseDown(Button, Shift, X, Y) {
        b_Quick.BackColor = WHITE;
    }

    function b_Quick_MouseUp(Button, Shift, X, Y) {
        b_Quick.BackColor = 0x80FF80;
    }

    async function b_Supply_Click() {
        let row = 0;
        me.MousePointer = HOURGLASS;
        for (row = rowCount; row >= 1; row--) {
            if (row == rowCount) {
                b_Grid.AddItem(" ");
            }
            b_Grid.RemoveItem(row);
        }
        await frm_Supply.Show();
    }

    function b_Supply_MouseDown(Button, Shift, X, Y) {
        b_Supply.BackColor = 0xC000;
    }

    function b_Supply_MouseUp(Button, Shift, X, Y) {
        b_Supply.BackColor = 0x8000;
    }

    async function b_Warehouse_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        await Unload(frm_Warehouse);
        await frm_Warehouse.Show();
    }

    function b_Warehouse_MouseDown(Button, Shift, X, Y) {
        b_Warehouse.BackColor = 0xC000;
    }

    function b_Warehouse_MouseUp(Button, Shift, X, Y) {
        b_Warehouse.BackColor = 0x8000;
    }

    async function cheatStockCommodity() {
        let category = 0;
        let item = 0;
        category = (Mod(game.weeklyRoll, 3));
        item = (Mod(player.arrivalRoll, 6));
        game.available[game.planet[game.currentPlayer]][category][item] = player.cargoCapacity;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            {
                const sel = Trim(game.commodityNames[category][item]);
                if (sel == "Cantaloupe") {
                    b_Sound.FileName = Trim(paths.soundDir) + "cantalou.wav";
                } else if (sel == "Jelly Beans") {
                    b_Sound.FileName = Trim(paths.soundDir) + "jellybea.wav";
                } else if (sel == "Moon Ferns") {
                    b_Sound.FileName = Trim(paths.soundDir) + "moonfern.wav";
                } else if (sel == "Frog Legs") {
                    b_Sound.FileName = Trim(paths.soundDir) + "frogleg.wav";
                } else if (sel == "Whip Cream") {
                    b_Sound.FileName = Trim(paths.soundDir) + "whipcrem.wav";
                } else if (sel == "Babel Seeds") {
                    b_Sound.FileName = Trim(paths.soundDir) + "babel.wav";
                } else if (sel == "Diapers") {
                    b_Sound.FileName = Trim(paths.soundDir) + "diapers.wav";
                } else if (sel == "Umbrellas") {
                    b_Sound.FileName = Trim(paths.soundDir) + "umbrella.wav";
                } else if (sel == "Toasters") {
                    b_Sound.FileName = Trim(paths.soundDir) + "toasters.wav";
                } else if (sel == "Polyester") {
                    b_Sound.FileName = Trim(paths.soundDir) + "polyestr.wav";
                } else if (sel == "Hair Tonic") {
                    b_Sound.FileName = Trim(paths.soundDir) + "tonic.wav";
                } else if (sel == "Lava Lamps") {
                    b_Sound.FileName = Trim(paths.soundDir) + "lavalamp.wav";
                } else if (sel == "Oxygen") {
                    b_Sound.FileName = Trim(paths.soundDir) + "oxygen.wav";
                } else if (sel == "Oggle Sand") {
                    b_Sound.FileName = Trim(paths.soundDir) + "oggle.wav";
                } else if (sel == "Kryptoons") {
                    b_Sound.FileName = Trim(paths.soundDir) + "kryptoon.wav";
                } else if (sel == "X Fuels") {
                    b_Sound.FileName = Trim(paths.soundDir) + "xfuel.wav";
                } else if (sel == "Gems") {
                    b_Sound.FileName = Trim(paths.soundDir) + "gems.wav";
                } else if (sel == "Exotic") {
                    b_Sound.FileName = Trim(paths.soundDir) + "exotic.wav";
                }
            }
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        fillGrid();
        sizeGrid();
        frm_Box0.FillElastic.Caption = "Cheater!";
        frm_Box0.b_Message.Caption = "\n" + "There are now " + Format(player.cargoCapacity, "#,#0") + " tons of " + Trim(game.commodityNames[category][item]) + " available for you to buy.";
        await frm_Box0.Show(1);
        b_Message.Caption = "There are now " + Format(player.cargoCapacity, "#,#0") + " tons of " + Trim(game.commodityNames[category][item]) + " available for you to buy.";
    }

    async function tradeCommodity(row) {
        let action = "";
        let tons = 0;
        let topPrice = 0;
        let gridRow = 0;
        let maxTons = 0;
        row = CInt(row);
        const GREEN = 65280;
        const CYAN = 16776960;
        const MAGENTA = 16711935;
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            {
                const sel = Trim(game.commodityNames[rowCategory[row]][rowItem[row]]);
                if (sel == "Cantaloupe") {
                    b_Sound.FileName = Trim(paths.soundDir) + "cantalou.wav";
                    topPrice = 40;
                } else if (sel == "Jelly Beans") {
                    b_Sound.FileName = Trim(paths.soundDir) + "jellybea.wav";
                    topPrice = 80;
                } else if (sel == "Moon Ferns") {
                    b_Sound.FileName = Trim(paths.soundDir) + "moonfern.wav";
                    topPrice = 120;
                } else if (sel == "Frog Legs") {
                    b_Sound.FileName = Trim(paths.soundDir) + "frogleg.wav";
                    topPrice = 160;
                } else if (sel == "Whip Cream") {
                    b_Sound.FileName = Trim(paths.soundDir) + "whipcrem.wav";
                    topPrice = 200;
                } else if (sel == "Babel Seeds") {
                    b_Sound.FileName = Trim(paths.soundDir) + "babel.wav";
                    topPrice = 240;
                } else if (sel == "Diapers") {
                    b_Sound.FileName = Trim(paths.soundDir) + "diapers.wav";
                    topPrice = 280;
                } else if (sel == "Umbrellas") {
                    b_Sound.FileName = Trim(paths.soundDir) + "umbrella.wav";
                    topPrice = 320;
                } else if (sel == "Toasters") {
                    b_Sound.FileName = Trim(paths.soundDir) + "toasters.wav";
                    topPrice = 360;
                } else if (sel == "Polyester") {
                    b_Sound.FileName = Trim(paths.soundDir) + "polyestr.wav";
                    topPrice = 400;
                } else if (sel == "Hair Tonic") {
                    b_Sound.FileName = Trim(paths.soundDir) + "tonic.wav";
                    topPrice = 440;
                } else if (sel == "Lava Lamps") {
                    b_Sound.FileName = Trim(paths.soundDir) + "lavalamp.wav";
                    topPrice = 480;
                } else if (sel == "Oxygen") {
                    b_Sound.FileName = Trim(paths.soundDir) + "oxygen.wav";
                    topPrice = 520;
                } else if (sel == "Oggle Sand") {
                    b_Sound.FileName = Trim(paths.soundDir) + "oggle.wav";
                    topPrice = 560;
                } else if (sel == "Kryptoons") {
                    b_Sound.FileName = Trim(paths.soundDir) + "kryptoon.wav";
                    topPrice = 600;
                } else if (sel == "X Fuels") {
                    b_Sound.FileName = Trim(paths.soundDir) + "xfuel.wav";
                    topPrice = 640;
                } else if (sel == "Gems") {
                    b_Sound.FileName = Trim(paths.soundDir) + "gems.wav";
                    topPrice = 680;
                } else if (sel == "Exotic") {
                    b_Sound.FileName = Trim(paths.soundDir) + "exotic.wav";
                    topPrice = 720;
                }
            }
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        if (player.quickMarket == 0) {
            frm_BuySell.Caption = "Buy/Sell " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]);
            if (frm_BuySell.WindowState == 0) {
                frm_BuySell.Move((Screen.Width - frm_BuySell.Width) / 2, (Screen.Height - frm_BuySell.Height) / 1.2);
            }
            await frm_BuySell.Show(1);
            action = frm_BuySell.Tag;
        } else {
            if (player.cargo[rowCategory[row]][rowItem[row]] > 0) {
                action = "SELLMAX";
            } else {
                action = "BUYMAX";
            }
        }
        b_Message.ForeColor = GREEN;
        b_Message.Caption = "";
        if (action == "BUY") {
            tons = -6666;
            if (player.cash == 0) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "You don't have any money. Check your cash.";
                await frm_Box0.Show(1);
                b_Message.Caption = "You cannot buy " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " because you don't have any money.";
            } else if (game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] == 0) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "There are zero tons of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " for sale on this planet. Check Tons on " + Trim(game.planetNames[game.planet[game.currentPlayer]]);
                await frm_Box0.Show(1);
                b_Message.Caption = "You cannot buy " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " because it isn't for sale on this planet.";
            } else if (player.cash < game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]]) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "You don't have enough money. Check your cash.";
                await frm_Box0.Show(1);
                b_Message.Caption = "You cannot buy " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " because you don't have enough money.";
            } else if (player.cargoTotal == player.cargoCapacity) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "There is not enough room on your ship. Check your cargo capacity.";
                await frm_Box0.Show(1);
                b_Message.Caption = "You cannot buy " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " because your ship is already full of cargo.";
            } else {
                if (game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] <= (player.cargoCapacity - player.cargoTotal)) {
                    maxTons = game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]];
                } else {
                    maxTons = player.cargoCapacity - player.cargoTotal;
                }
                if ((maxTons * game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]]) > player.cash) {
                    maxTons = Fix(player.cash / game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]]);
                }
                if (game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] == 1) {
                    b_TitleBar.Tag = "Call Input Box Function";
                    tons = await askNumber(0, Str(maxTons), 0.25 * maxTons, maxTons, "There is " + Format(game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]], "#,#0") + " ton of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " for sale.", "Buy " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]));
                    b_TitleBar.Tag = "";
                } else {
                    b_TitleBar.Tag = "Call Input Box Function";
                    tons = await askNumber(0, Str(maxTons), 0.25 * maxTons, maxTons, "There are " + Format(game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]], "#,#0") + " tons of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " for sale.", "Buy " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]));
                    b_TitleBar.Tag = "";
                }
            }
            if (tons == -6666) {
            } else if (tons == -3333) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                b_Message.Caption = "Your transaction was cancelled. No goods were purchased.";
            } else if (tons == 0) {
                b_Message.Caption = "You didn't purchase any " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + ".";
            } else if (player.cash < (tons * game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]])) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "You don't have enough money. Check your cash.";
                await frm_Box0.Show(1);
                b_Message.Caption = "You cannot buy " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " because you don't have enough money.";
            } else if (tons > game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]]) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "You can't buy that much. Check the tons of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " for sale on " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + ".";
                await frm_Box0.Show(1);
                if (game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] == 1) {
                    b_Message.Caption = "There is only " + Format(game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]], "#,#0") + " ton of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " for sale on this planet.";
                } else {
                    b_Message.Caption = "There are only " + Format(game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]], "#,#0") + " tons of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " for sale on this planet.";
                }
            } else if ((tons + player.cargoTotal) > player.cargoCapacity) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "There is not enough room on your ship. Check your cargo capacity.";
                await frm_Box0.Show(1);
                if ((player.cargoCapacity - player.cargoTotal) == 1) {
                    b_Message.Caption = "You can't buy " + Format(tons, "#,#0") + " tons of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " because you only have space for " + Format(player.cargoCapacity - player.cargoTotal, "#,#0") + " ton.";
                } else {
                    b_Message.Caption = "You can't buy " + Format(tons, "#,#0") + " tons of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " because you only have space for " + Format(player.cargoCapacity - player.cargoTotal, "#,#0") + " tons.";
                }
            } else {
                b_Message.ForeColor = CYAN;
                player.cargoAvgCost[rowCategory[row]][rowItem[row]] = CLng((player.cargoAvgCost[rowCategory[row]][rowItem[row]] * player.cargo[rowCategory[row]][rowItem[row]] + game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * tons) / (player.cargo[rowCategory[row]][rowItem[row]] + tons));
                player.cash = player.cash - (tons * game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]]);
                player.cargoTotal = player.cargoTotal + tons;
                player.cargo[rowCategory[row]][rowItem[row]] = player.cargo[rowCategory[row]][rowItem[row]] + tons;
                game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] = game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] - tons;
                if (tons == 1) {
                    b_Message.Caption = "You just spent " + Format(tons * game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]], "#,#0") + " kubars on " + Format(tons, "#,#0") + " ton of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + ".";
                } else {
                    b_Message.Caption = "You just spent " + Format(tons * game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]], "#,#0") + " kubars on " + Format(tons, "#,#0") + " tons of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + ".";
                }
            }
        } else if (action == "BUYMAX") {
            if (game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] <= (player.cargoCapacity - player.cargoTotal)) {
                tons = game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]];
            } else {
                tons = player.cargoCapacity - player.cargoTotal;
            }
            if ((tons * game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]]) > player.cash) {
                tons = Fix(player.cash / game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]]);
            }
            if (player.cash == 0) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "You don't have any money. Check your cash.";
                await frm_Box0.Show(1);
                b_Message.Caption = "You cannot buy " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " because you don't have any money.";
            } else if (game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] == 0) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "There are zero tons of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " for sale on this planet. Check Tons on " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + ".";
                await frm_Box0.Show(1);
                b_Message.Caption = "You cannot buy " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " because it isn't for sale on this planet.";
            } else if (player.cash < game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]]) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "You don't have enough money. Check your cash.";
                await frm_Box0.Show(1);
                b_Message.Caption = "You cannot buy " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " because you are short on money.";
            } else if (player.cargoTotal == player.cargoCapacity) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "There is not enough room on your ship. Check your cargo capacity.";
                await frm_Box0.Show(1);
                b_Message.Caption = "You cannot buy " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " because your ship is already full of cargo.";
            } else {
                b_Message.ForeColor = CYAN;
                player.cargoAvgCost[rowCategory[row]][rowItem[row]] = CLng((player.cargoAvgCost[rowCategory[row]][rowItem[row]] * player.cargo[rowCategory[row]][rowItem[row]] + game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * tons) / (player.cargo[rowCategory[row]][rowItem[row]] + tons));
                player.cash = player.cash - (tons * game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]]);
                player.cargoTotal = player.cargoTotal + tons;
                player.cargo[rowCategory[row]][rowItem[row]] = player.cargo[rowCategory[row]][rowItem[row]] + tons;
                game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] = game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] - tons;
                if (tons == 1) {
                    b_Message.Caption = "You just spent " + Format(tons * game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]], "#,#0") + " kubars on " + Format(tons, "#,#0") + " ton of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + ".";
                } else {
                    b_Message.Caption = "You just spent " + Format(tons * game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]], "#,#0") + " kubars on " + Format(tons, "#,#0") + " tons of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + ".";
                }
            }
        } else if (action == "SELL") {
            tons = -6666;
            if (player.cargoTotal == 0) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "You don't have any commodities on your ship. Check Cargo on Ship.";
                await frm_Box0.Show(1);
                b_Message.Caption = "Before you can sell a commodity, you must first buy it.";
            } else if (player.cargo[rowCategory[row]][rowItem[row]] == 0) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "You cannot sell " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + ". Check Tons on Ship.";
                await frm_Box0.Show(1);
                b_Message.Caption = "There are zero tons of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " on your ship.";
            } else if (player.cargo[rowCategory[row]][rowItem[row]] == 1) {
                b_TitleBar.Tag = "Call Input Box Function";
                tons = await askNumber(0, Str(player.cargo[rowCategory[row]][rowItem[row]]), 0.25 * player.cargo[rowCategory[row]][rowItem[row]], player.cargo[rowCategory[row]][rowItem[row]], "You have " + Format(player.cargo[rowCategory[row]][rowItem[row]], "#,#0") + " ton of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " on your ship.", "Sell " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]));
                b_TitleBar.Tag = "";
            } else {
                b_TitleBar.Tag = "Call Input Box Function";
                tons = await askNumber(0, Str(player.cargo[rowCategory[row]][rowItem[row]]), 0.25 * player.cargo[rowCategory[row]][rowItem[row]], player.cargo[rowCategory[row]][rowItem[row]], "You have " + Format(player.cargo[rowCategory[row]][rowItem[row]], "#,#0") + " tons of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " on your ship.", "Sell " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]));
                b_TitleBar.Tag = "";
            }
            if (tons == -6666) {
            } else if (tons == -3333) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                b_Message.Caption = "Your transaction was cancelled. No goods were sold.";
            } else if (tons > player.cargo[rowCategory[row]][rowItem[row]]) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "You don't have that many tons of " + Format(Trim(game.commodityNames[rowCategory[row]][rowItem[row]]), "#,#0") + " on your ship. Check Tons on Ship.";
                await frm_Box0.Show(1);
                b_Message.Caption = "You only have " + Format(player.cargo[rowCategory[row]][rowItem[row]], "#,#0") + " tons of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " on your ship.";
            } else if (tons == 0) {
                b_Message.Caption = "You didn't sell any " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + ".";
            } else {
                if ((game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * tons) - (player.cargoAvgCost[rowCategory[row]][rowItem[row]] * tons) < 0) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "baddeal.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                } else if (game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] >= 0.9 * topPrice && (game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * tons) - (player.cargoAvgCost[rowCategory[row]][rowItem[row]] * tons) != 0) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "gooddeal.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                }
                b_Message.ForeColor = MAGENTA;
                if (tons == 1) {
                    b_Message.Caption = "You just made " + Format((game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * tons) - (player.cargoAvgCost[rowCategory[row]][rowItem[row]] * tons), "#,#0") + " kubars profit selling " + Format(tons, "#,#0") + " ton of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + ".";
                } else {
                    b_Message.Caption = "You just made " + Format((game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * tons) - (player.cargoAvgCost[rowCategory[row]][rowItem[row]] * tons), "#,#0") + " kubars profit selling " + Format(tons, "#,#0") + " tons of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + ".";
                }
                game.weeklySales = game.weeklySales + (game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * tons);
                game.weeklyProfit = game.weeklyProfit + (game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * tons) - (player.cargoAvgCost[rowCategory[row]][rowItem[row]] * tons);
                player.cash = player.cash + (game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * tons);
                player.cargoTotal = player.cargoTotal - tons;
                game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] = game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] + tons;
                player.cargo[rowCategory[row]][rowItem[row]] = player.cargo[rowCategory[row]][rowItem[row]] - tons;
                if (player.cargo[rowCategory[row]][rowItem[row]] == 0) {
                    player.cargoAvgCost[rowCategory[row]][rowItem[row]] = 0;
                }
            }
        } else if (action == "SELLMAX") {
            if (player.cargoTotal == 0) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "You don't have any commodities on your ship. Check Cargo on Ship.";
                await frm_Box0.Show(1);
                b_Message.Caption = "Before you can sell a commodity, you must first buy it.";
            } else if (player.cargo[rowCategory[row]][rowItem[row]] == 0) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Market Place";
                frm_Box0.b_Message.Caption = "\n" + "You cannot sell " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + ". Check Tons on Ship.";
                await frm_Box0.Show(1);
                b_Message.Caption = "There are zero tons of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + " on your ship.";
            } else {
                if ((game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * player.cargo[rowCategory[row]][rowItem[row]]) - (player.cargoAvgCost[rowCategory[row]][rowItem[row]] * player.cargo[rowCategory[row]][rowItem[row]]) < 0) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "baddeal.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                } else if (game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] >= 0.9 * topPrice && (game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * player.cargo[rowCategory[row]][rowItem[row]]) - (player.cargoAvgCost[rowCategory[row]][rowItem[row]] * player.cargo[rowCategory[row]][rowItem[row]]) != 0) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "gooddeal.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                }
                b_Message.ForeColor = MAGENTA;
                if (player.cargo[rowCategory[row]][rowItem[row]] == 1) {
                    b_Message.Caption = "You just made " + Format((game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * player.cargo[rowCategory[row]][rowItem[row]]) - (player.cargoAvgCost[rowCategory[row]][rowItem[row]] * player.cargo[rowCategory[row]][rowItem[row]]), "#,#0") + " kubars profit selling " + Format(player.cargo[rowCategory[row]][rowItem[row]], "#,#0") + " ton of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + ".";
                } else {
                    b_Message.Caption = "You just made " + Format((game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * player.cargo[rowCategory[row]][rowItem[row]]) - (player.cargoAvgCost[rowCategory[row]][rowItem[row]] * player.cargo[rowCategory[row]][rowItem[row]]), "#,#0") + " kubars profit selling " + Format(player.cargo[rowCategory[row]][rowItem[row]], "#,#0") + " tons of " + Trim(game.commodityNames[rowCategory[row]][rowItem[row]]) + ".";
                }
                game.weeklySales = game.weeklySales + (game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * player.cargo[rowCategory[row]][rowItem[row]]);
                game.weeklyProfit = game.weeklyProfit + (game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * player.cargo[rowCategory[row]][rowItem[row]]) - (player.cargoAvgCost[rowCategory[row]][rowItem[row]] * player.cargo[rowCategory[row]][rowItem[row]]);
                player.cash = player.cash + (game.prices[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] * player.cargo[rowCategory[row]][rowItem[row]]);
                player.cargoTotal = player.cargoTotal - player.cargo[rowCategory[row]][rowItem[row]];
                game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] = game.available[game.planet[game.currentPlayer]][rowCategory[row]][rowItem[row]] + player.cargo[rowCategory[row]][rowItem[row]];
                player.cargo[rowCategory[row]][rowItem[row]] = 0;
                player.cargoAvgCost[rowCategory[row]][rowItem[row]] = 0;
            }
        } else if (action == "CANCEL") {
            if (settings.soundOn == -1) {
                Beep();
            }
            b_Message.Caption = "Your transaction was cancelled. No goods were bought or sold.";
        }
        await Unload(frm_BuySell);
        for (gridRow = rowCount; gridRow >= 1; gridRow--) {
            if (gridRow == rowCount) {
                b_Grid.AddItem(" ");
            }
            b_Grid.RemoveItem(gridRow);
        }
        fillGrid();
        sizeGrid();
        me.MousePointer = ARROW_CURSOR;
    }

    function fillGrid() {
        let col = 0;
        let category = 0;
        let item = 0;
        let row = 0;
        let lowStep = 0;
        let highPrice = 0;
        let lowPrice = 0;
        gridEmpty = 0;
        if (me.Tag == "Show Cargo") {
            viewMode = VIEW_CARGO;
            b_GoodsOnShip.Caption = "Show All";
            b_TitleBar.Caption = "Marketplace (Cargo on Ship)";
        } else {
            viewMode = VIEW_ALL_GOODS;
            b_GoodsOnShip.Caption = "Show Cargo";
            b_TitleBar.Caption = "Marketplace (All Goods on " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + ")";
            me.Tag = "Marketplace";
        }
        b_CargoOnShip.Caption = "ship's cargo bay = " + Format(100 * player.cargoTotal / player.cargoCapacity, "#,#0") + "% filled (" + Format(player.cargoTotal, "#,#0") + "/" + Format(player.cargoCapacity, "#,#0") + ")";
        b_CargoOnShip.FloodPercent = (player.cargoTotal / player.cargoCapacity) * 100;
        b_Cash.Caption = "Cash: " + Format(player.cash, "#,#0");
        b_Profit.Caption = "Profit: " + Format(game.weeklyProfit, "#,#0");
        rowCount = 0;
        if (viewMode == VIEW_ALL_GOODS) {
            for (col = 0; col <= 2; col++) {
                for (category = 0; category <= 5; category++) {
                    if (player.cargo[col][category] != 0 || game.available[game.planet[game.currentPlayer]][col][category] != 0) {
                        rowCount = rowCount + 1;
                    }
                }
            }
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
        }
        b_Grid.Cols = 6;
        if (rowCount == 0) {
            gridEmpty = -1;
            rowCount = 1;
        } else {
            gridEmpty = 0;
        }
        b_Grid.Rows = rowCount + 1;
        for (col = 0; col <= 5; col++) {
            b_Grid.FixedAlignment[col] = 2;
        }
        b_Grid.Row = 0;
        for (col = 1; col <= 5; col++) {
            b_Grid.ColAlignment[col] = 2;
            b_Grid.Col = col;
            if (col == 1) {
                b_Grid.Text = "Tons on Ship";
            } else if (col == 2) {
                b_Grid.Text = "Tons on " + Trim(game.planetNames[game.planet[game.currentPlayer]]);
            } else if (col == 3) {
                b_Grid.Text = "Price You Paid";
            } else if (col == 4) {
                b_Grid.Text = "Market Price";
            } else if (col == 5) {
                b_Grid.Text = "Price Range";
            }
        }
        for (col = 0; col <= 5; col++) {
            b_Grid.Col = col;
            row = 0;
            lowStep = 0;
            highPrice = 0;
            for (category = 0; category <= 2; category++) {
                for (item = 0; item <= 5; item++) {
                    lowStep = lowStep + 5;
                    lowPrice = (game.marketDifficulty + 1) * lowStep;
                    highPrice = highPrice + 40;
                    if (player.cargo[category][item] != 0 || game.available[game.planet[game.currentPlayer]][category][item] != 0 && viewMode == VIEW_ALL_GOODS) {
                        row = row + 1;
                        rowCategory[row] = CLng(category);
                        rowItem[row] = CLng(item);
                        b_Grid.Row = row;
                        if (col == 0) {
                            b_Grid.Text = Trim(game.commodityNames[category][item]);
                        } else if (col == 1) {
                            b_Grid.Text = Format(player.cargo[category][item], "#,#0");
                        } else if (col == 2) {
                            b_Grid.Text = Format(game.available[game.planet[game.currentPlayer]][category][item], "#,#0");
                        } else if (col == 3) {
                            b_Grid.Text = Format(player.cargoAvgCost[category][item], "#,#0");
                        } else if (col == 4) {
                            b_Grid.Text = Format(game.prices[game.planet[game.currentPlayer]][category][item], "#,#0");
                        } else if (col == 5) {
                            b_Grid.Text = Format(lowPrice, "#,#0") + " - " + Format(highPrice, "#,#0");
                        }
                    } else if (player.cargo[category][item] != 0 && viewMode == VIEW_CARGO) {
                        row = row + 1;
                        rowCategory[row] = CLng(category);
                        rowItem[row] = CLng(item);
                        b_Grid.Row = row;
                        if (col == 0) {
                            b_Grid.Text = Trim(game.commodityNames[category][item]);
                        } else if (col == 1) {
                            b_Grid.Text = Format(player.cargo[category][item], "#,#0");
                        } else if (col == 2) {
                            b_Grid.Text = Format(game.available[game.planet[game.currentPlayer]][category][item], "#,#0");
                        } else if (col == 3) {
                            b_Grid.Text = Format(player.cargoAvgCost[category][item], "#,#0");
                        } else if (col == 4) {
                            b_Grid.Text = Format(game.prices[game.planet[game.currentPlayer]][category][item], "#,#0");
                        } else if (col == 5) {
                            b_Grid.Text = Format(lowPrice, "#,#0") + " - " + Format(highPrice, "#,#0");
                        }
                    } else if (game.available[game.planet[game.currentPlayer]][category][item] != 0 && viewMode == VIEW_PLANET_GOODS) {
                        row = row + 1;
                        rowCategory[row] = CLng(category);
                        rowItem[row] = CLng(item);
                        b_Grid.Row = row;
                        if (col == 0) {
                            b_Grid.Text = Trim(game.commodityNames[category][item]);
                        } else if (col == 1) {
                            b_Grid.Text = Format(player.cargo[category][item], "#,#0");
                        } else if (col == 2) {
                            b_Grid.Text = Format(game.available[game.planet[game.currentPlayer]][category][item], "#,#0");
                        } else if (col == 3) {
                            b_Grid.Text = Format(player.cargoAvgCost[category][item], "#,#0");
                        } else if (col == 4) {
                            b_Grid.Text = Format(game.prices[game.planet[game.currentPlayer]][category][item], "#,#0");
                        } else if (col == 5) {
                            b_Grid.Text = Format(lowPrice, "#,#0") + " - " + Format(highPrice, "#,#0");
                        }
                    }
                }
            }
        }
        if (gridEmpty == 0) {
            b_Grid.AddItem(" ");
            b_Grid.Row = rowCount + 1;
        }
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
        for (i = 0; i <= rowCount; i++) {
            b_Grid.RowHeight[i] = gridHeight / 19;
        }
        for (i = 0; i <= 5; i++) {
            b_Grid.ColWidth[i] = gridWidth / 6;
        }
    }

    function Form_Activate() {
        me.MousePointer = HOURGLASS;
        if (player.quickMarket == -1) {
            b_Quick.Caption = "Shortcut = on";
        } else {
            b_Quick.Caption = "Shortcut = off";
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockSupply) {
            b_Supply.Visible = 0;
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockWarehouse) {
            b_Warehouse.Visible = 0;
        }
        if (b_TitleBar.Tag != "Call Input Box Function") {
            fillGrid();
            sizeGrid();
        }
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 2) {
            await cheatStockCommodity();
        } else if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_Exit_Click();
        }
    }

    return {
        b_Exit_Click, b_Exit_MouseDown, b_Exit_MouseUp, b_GoodsOnShip_Click,
        b_GoodsOnShip_MouseDown, b_GoodsOnShip_MouseUp, b_Grid_MouseDown, b_Grid_MouseUp,
        b_Help_Click, b_Help_MouseDown, b_Help_MouseUp, b_Quick_Click,
        b_Quick_MouseDown, b_Quick_MouseUp, b_Supply_Click, b_Supply_MouseDown,
        b_Supply_MouseUp, b_Warehouse_Click, b_Warehouse_MouseDown, b_Warehouse_MouseUp,
        cheatStockCommodity, tradeCommodity, fillGrid, sizeGrid,
        Form_Activate, Form_KeyPress,
    };
});
