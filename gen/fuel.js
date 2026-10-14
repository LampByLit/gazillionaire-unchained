// Originally translated from src/FUEL.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Fuel",
  ["Form", "frm_Fuel", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Fuel", "BackColor": 0, "Left": -165, "Top": 3105, "Width": 7035, "Height": 5025, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": -165, "ClientTop": 3105, "ClientWidth": 7035, "ClientHeight": 5025}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 4210752, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 4, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 15, "BevelOuter": 5, "BevelInnerWidth": 5, "BevelOuterWidth": 10, "FloodDirection": 3, "FloodColor": 4210752, "FloodPercent": 100, "IntBkg": 4210752}, [
      ["MMControl", "b_Sound", {"Left": 5460, "Top": 60, "Width": 3540, "Height": 330, "TabIndex": 14, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic5", {"BackColor": 0, "Left": 660, "Top": 345, "Width": 8280, "Height": 1095, "TabIndex": 10, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelOuterWidth": 5, "IntBkg": 0}, [
        ["VideoSoftElastic", "VSElastic6", {"BackColor": 0, "ForeColor": 16776960, "Left": 270, "Top": 90, "Width": 1590, "Height": 525, "TabIndex": 12, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 2, "BevelOuterWidth": 0, "Caption": "Fuel Tank Capacity: ", "CaptionPos": 5, "ShadowColor": 8388608, "IntBkg": 0}],
        ["VideoSoftElastic", "b_FuelTank", {"BackColor": 12632256, "ForeColor": 16777215, "Left": 2085, "Top": 255, "Width": 5955, "Height": 585, "TabIndex": 11, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 7, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 5, "FloodDirection": 1, "FloodColor": 255, "FloodPercent": 80, "Caption": "Fuel Tank", "CaptionPos": 4, "ShadowColor": 255}],
        ["Label", "b_FuelTankCapacity", {"Caption": " xxx", "BackColor": 12632256, "ForeColor": 255, "Left": 285, "Top": 675, "Width": 1575, "Height": 270, "FontName": "MS Serif", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 13, "Alignment": 2, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "VSElastic4", {"BackColor": 4210752, "Left": 2070, "Top": 2025, "Width": 5805, "Height": 2625, "TabIndex": 9, "AutoSizeChildren": 3, "BorderWidth": 15, "BevelInner": 5, "BevelOuter": 6, "BevelOuterWidth": 5, "IntBkg": 4210752}, [
        ["VideoSoftElastic", "b_FuelPriceRange", {"BackColor": 12632256, "Left": 225, "Top": 795, "Width": 5355, "Height": 480, "TabIndex": 5, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 7, "BevelOuter": 6, "BevelInnerWidth": 8, "BevelOuterWidth": 5, "FloodColor": 16777088, "Caption": "   Fuel Price Range"}],
        ["VideoSoftElastic", "b_Fuel", {"BackColor": 12632256, "Left": 225, "Top": 1365, "Width": 5355, "Height": 480, "TabIndex": 6, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 7, "BevelOuter": 6, "BevelInnerWidth": 8, "BevelOuterWidth": 5, "FloodColor": 16777088, "Caption": "   Fuel Remaining In Tank"}],
        ["VideoSoftElastic", "b_Cash", {"BackColor": 12632256, "Left": 225, "Top": 1935, "Width": 5355, "Height": 465, "TabIndex": 7, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 7, "BevelOuter": 6, "BevelInnerWidth": 8, "BevelOuterWidth": 5, "FloodColor": 16777088, "Caption": "   Cash "}],
        ["VideoSoftElastic", "b_Cost", {"BackColor": 12632256, "Left": 225, "Top": 225, "Width": 5355, "Height": 480, "TabIndex": 8, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 7, "BevelOuter": 6, "BevelInnerWidth": 8, "BevelOuterWidth": 5, "FloodColor": 16777088, "Caption": "   Fuel Cost"}]
      ]],
      ["VideoSoftElastic", "b_Help", {"BackColor": 0, "ForeColor": 16777215, "Left": 7560, "Top": 5160, "Width": 1665, "Height": 1335, "TabIndex": 0, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 14, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 8, "FloodColor": 0, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 0}],
      ["VideoSoftElastic", "b_FillUp1", {"BackColor": 0, "Left": 2415, "Top": 5160, "Width": 4845, "Height": 1335, "TabIndex": 1, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 14, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 8, "FloodColor": 16777215, "ShadowColor": 16777215, "IntBkg": 0}, [
        ["VideoSoftElastic", "b_FillUp3", {"BackColor": 0, "ForeColor": 255, "Left": 900, "Top": 225, "Width": 3735, "Height": 930, "TabIndex": 2, "FontName": "MS Sans Serif", "FontSize": 16.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelOuter": 0, "Caption": "FILL UP THE TANK", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}],
        ["Image", "b_FillUp2", {"Picture": {"frx": "frx/FUEL/b_FillUp2.Picture.ico"}, "Left": 210, "Top": 285, "Width": 675, "Height": 765, "Stretch": -1}]
      ]],
      ["VideoSoftElastic", "b_ExitFuel1", {"BackColor": 0, "ForeColor": 16777215, "Left": 375, "Top": 5160, "Width": 1740, "Height": 1335, "TabIndex": 3, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 14, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 8, "FloodColor": 4210752, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 4210752, "IntBkg": 0}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, VSElastic5, VSElastic6, b_FuelTank, b_FuelTankCapacity, VSElastic4, b_FuelPriceRange } = me.controls;
    const { b_Fuel, b_Cash, b_Cost, b_Help, b_FillUp1, b_FillUp3, b_FillUp2, b_ExitFuel1 } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    let normalFuelColor = 0;  // Static in updateDisplay

    async function b_ExitFuel1_Click() {
        me.MousePointer = HOURGLASS;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_ExitFuel1_MouseDown(Button, Shift, X, Y) {
        b_ExitFuel1.BackColor = 0x404040;
    }

    function b_ExitFuel1_MouseUp(Button, Shift, X, Y) {
        b_ExitFuel1.BackColor = 0x0;
    }

    async function b_FillUp1_Click() {
        await buyFuel();
    }

    function b_FillUp1_MouseDown(Button, Shift, X, Y) {
        b_FillUp1.BackColor = 0x808080;
        b_FillUp3.BackColor = 0x808080;
    }

    function b_FillUp1_MouseUp(Button, Shift, X, Y) {
        b_FillUp1.BackColor = 0x0;
        b_FillUp3.BackColor = 0x0;
    }

    async function b_FillUp2_Click() {
        await buyFuel();
    }

    function b_FillUp2_MouseDown(Button, Shift, X, Y) {
        b_FillUp1.BackColor = 0x808080;
        b_FillUp3.BackColor = 0x808080;
    }

    function b_FillUp2_MouseUp(Button, Shift, X, Y) {
        b_FillUp1.BackColor = 0x0;
        b_FillUp3.BackColor = 0x0;
    }

    async function b_FillUp3_Click() {
        await buyFuel();
    }

    function b_FillUp3_MouseDown(Button, Shift, X, Y) {
        b_FillUp1.BackColor = 0x808080;
        b_FillUp3.BackColor = 0x808080;
    }

    function b_FillUp3_MouseUp(Button, Shift, X, Y) {
        b_FillUp1.BackColor = 0x0;
        b_FillUp3.BackColor = 0x0;
    }

    async function b_Help_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box2.FillElastic.Caption = "Help (Fuel)";
        frm_Box2.b_Message.Caption = "Your ship has a " + Format(player.fuelCapacity, "#,#0") + "-ton fuel tank and runs on Ionic Fuel, a combination of nuclear and synthetic fuels. This fuel costs between " + Format(game.fuelBasePrice, "#,#0") + " and " + Format(game.fuelBasePrice * 10, "#,#0") + " kubars per ton." + "\n" + "\n" + "Every time you travel to a planet, your ship consumes between 2 and " + Format((game.shipSize[game.currentPlayer] / 100) + 11, "#,#0") + " tons of fuel. On average, the longer the distance travelled and the larger the ship, the more fuel is used." + "\n" + "\n" + "If you want to save fuel, a good idea is to travel to a nearby planet, rather than one on the other side of Kukubia.";
        await frm_Box2.Show(1);
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = 0x404040;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = 0x0;
    }

    function rerollFuelPrice() {
        {
            const sel = (Mod(game.weeklyRoll, 2)) + 1;
            if (sel == 1) {
                game.fuelPrice[game.planet[game.currentPlayer]] = CLng(((game.fuelBasePrice * 10) / 2) * (game.weeklyRoll / 100));
            } else if (sel == 2) {
                game.fuelPrice[game.planet[game.currentPlayer]] = CLng(((game.fuelBasePrice * 10) / 2) * (1 + (game.weeklyRoll / 100)));
            }
        }
        if (game.fuelPrice[game.planet[game.currentPlayer]] < game.fuelBasePrice) {
            game.fuelPrice[game.planet[game.currentPlayer]] = game.fuelBasePrice;
        }
        if (game.fuelPrice[game.planet[game.currentPlayer]] > (10 * game.fuelBasePrice)) {
            game.fuelPrice[game.planet[game.currentPlayer]] = (10 * game.fuelBasePrice);
        }
        updateDisplay();
    }

    async function buyFuel() {
        let tons = 0;
        const ARROW_CURSOR = 1;
        me.MousePointer = HOURGLASS;
        tons = await askNumber(0, Format((player.fuelCapacity - player.fuel), "##0"), 0.25 * (player.fuelCapacity - player.fuel), (player.fuelCapacity - player.fuel), "Enter the amount of fuel you would like to purchase." + "\n" + "\n" + "Cash:  " + Format(player.cash, "#,#0") + "\n" + "Fuel Tank Capacity:  " + Format(player.fuelCapacity, "#,#0") + " tons" + "\n" + "Fuel in Tank:  " + Format(player.fuel, "#,#0") + " tons", " ");
        if (tons == -3333) {
        } else if ((tons * game.fuelPrice[game.planet[game.currentPlayer]]) > player.cash) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Fuel";
            frm_Box0.b_Message.Caption = "\n" + "You don't have enough money. Check your cash.";
            await frm_Box0.Show(1);
        } else if (tons > (player.fuelCapacity - player.fuel)) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Fuel";
            if ((player.fuelCapacity - player.fuel) == 1) {
                frm_Box0.b_Message.Caption = "\n" + "You cannot purchase that much fuel. You only have room in your tank to buy one ton of fuel.";
            } else {
                frm_Box0.b_Message.Caption = "\n" + "You cannot purchase that much fuel. You only have room in your tank to buy " + Format((player.fuelCapacity - player.fuel), "#,#0") + " tons of fuel.";
            }
            await frm_Box0.Show(1);
        } else if (tons == 0) {
        } else {
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "fuel.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            player.fuel = player.fuel + tons;
            player.cash = player.cash - (tons * game.fuelPrice[game.planet[game.currentPlayer]]);
        }
        updateDisplay();
        me.MousePointer = ARROW_CURSOR;
    }

    function updateDisplay() {
        b_Cost.Caption = "   Fuel Cost ( per ton ):   " + Format(game.fuelPrice[game.planet[game.currentPlayer]], "#,#0") + " kubars";
        b_FuelPriceRange.Caption = "   Fuel Price Range:   " + Format(game.fuelBasePrice, "#,#0") + " to " + Format(game.fuelBasePrice * 10, "#,#0") + " kubars/ton";
        b_Fuel.Caption = "   Fuel Usage:   2 to " + Format((game.shipSize[game.currentPlayer] / 100) + 11, "#,#0") + " tons per trip";
        if (player.cash == 1) {
            b_Cash.Caption = "   Cash:   " + Format(player.cash, "#,#0") + " kubar";
        } else {
            b_Cash.Caption = "   Cash:   " + Format(player.cash, "#,#0") + " kubars";
        }
        b_FuelTank.FloodPercent = 100 * (player.fuel / (player.fuelCapacity));
        b_FuelTankCapacity.Caption = Format(player.fuelCapacity, "#,#0") + " tons";
        if (player.fuel < ((game.shipSize[game.currentPlayer] / 100) + 11)) {
            b_FuelTank.Caption = "LOW on Fuel:  " + Format(player.fuel, "#,#0") + " tons remaining";
            b_Fuel.ForeColor = 0x80;
        } else {
            b_FuelTank.Caption = "Fuel in Tank:  " + Format(player.fuel, "#,#0") + " tons";
            b_Fuel.ForeColor = normalFuelColor;
        }
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 6) {
            rerollFuelPrice();
        } else if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_ExitFuel1_Click();
        }
    }

    function Form_Load() {
        updateDisplay();
    }

    return {
        b_ExitFuel1_Click, b_ExitFuel1_MouseDown, b_ExitFuel1_MouseUp, b_FillUp1_Click,
        b_FillUp1_MouseDown, b_FillUp1_MouseUp, b_FillUp2_Click, b_FillUp2_MouseDown,
        b_FillUp2_MouseUp, b_FillUp3_Click, b_FillUp3_MouseDown, b_FillUp3_MouseUp,
        b_Help_Click, b_Help_MouseDown, b_Help_MouseUp, rerollFuelPrice,
        buyFuel, updateDisplay, Form_Activate, Form_KeyPress,
        Form_Load,
    };
});
