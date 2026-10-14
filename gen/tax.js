// Originally translated from src/TAX.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Tax",
  ["Form", "frm_Tax", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "tax", "BackColor": 0, "Left": 855, "Top": 1980, "Width": 7005, "Height": 4665, "WindowState": 2, "FontName": "Arial", "FontSize": 7.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "Icon": null, "LinkTopic": "frm_Taxes", "KeyPreview": -1, "ClientLeft": 855, "ClientTop": 1980, "ClientWidth": 7005, "ClientHeight": 4665}, [
    ["Timer", "b_Timer", {"Enabled": 0, "Interval": 50, "Left": 120, "Top": 660}],
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16744576}, [
      ["MMControl", "b_Sound", {"Left": 5310, "Top": 30, "Width": 3540, "Height": 330, "TabIndex": 13, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic5", {"BackColor": 16744576, "Left": 5235, "Top": 1230, "Width": 4215, "Height": 4065, "TabIndex": 8, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 7, "BevelOuter": 0, "BevelInnerWidth": 8, "BevelOuterWidth": 0, "ShadowColor": 4194304, "IntBkg": 16744576}, [
        ["VideoSoftElastic", "b_Tax", {"BackColor": 12583104, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 3885, "Height": 690, "TabIndex": 12, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 8454143, "Caption": "   Passenger Taxes", "IntBkg": 12583104}],
        ["VideoSoftElastic", "b_Tariff", {"BackColor": 12583104, "ForeColor": 16777215, "Left": 0, "Top": 1005, "Width": 3885, "Height": 690, "TabIndex": 11, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 8454143, "Caption": "   Commodities Tariffs", "IntBkg": 12583104}],
        ["VideoSoftElastic", "b_Total", {"BackColor": 12583104, "ForeColor": 16777215, "Left": 0, "Top": 2040, "Width": 3885, "Height": 675, "TabIndex": 10, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 8454143, "Caption": "   Total Taxes", "IntBkg": 12583104}],
        ["VideoSoftElastic", "b_Cash", {"BackColor": 12583104, "ForeColor": 16777215, "Left": 0, "Top": 3045, "Width": 3885, "Height": 690, "TabIndex": 9, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 8454143, "Caption": "   Cash ", "IntBkg": 12583104}]
      ]],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 4194304, "Left": 180, "Top": 1200, "Width": 4935, "Height": 3885, "TabIndex": 6, "AutoSizeChildren": 7, "BorderWidth": 12, "ChildSpacing": 2, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "IntBkg": 4194304}, [
        ["Image", "Image1", {"Left": 180, "Top": 180, "Width": 4575, "Height": 3210, "Stretch": -1}],
        ["Label", "Label1", {"Caption": "Tax Auditor", "ForeColor": 16777215, "Left": 180, "Top": 3435, "Width": 4575, "Height": 345, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 7, "Alignment": 2, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "b_Message", {"BackColor": 12582912, "ForeColor": 16777215, "Left": 180, "Top": 180, "Width": 9315, "Height": 735, "TabIndex": 5, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 8454143, "CaptionPos": 4, "IntBkg": 12582912}],
      ["VideoSoftElastic", "VSElastic4", {"BackColor": 16744576, "Left": 180, "Top": 5385, "Width": 9210, "Height": 1335, "TabIndex": 1, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777088, "IntBkg": 16744576}, [
        ["VideoSoftElastic", "b_PayAll", {"BackColor": 12632256, "Left": 3075, "Top": 0, "Width": 3075, "Height": 1335, "TabIndex": 4, "FontName": "Arial", "FontSize": 18, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 10, "FloodColor": 4210688, "FloodPercent": 100, "Caption": "Pay All", "CaptionPos": 4, "AccessKey": -1}],
        ["VideoSoftElastic", "b_ExitTax", {"BackColor": 12632256, "ForeColor": 8388608, "Left": 0, "Top": 0, "Width": 3075, "Height": 1335, "TabIndex": 3, "FontName": "Arial", "FontSize": 18, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 10, "FloodColor": 4210688, "FloodPercent": 100, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 8388608}],
        ["VideoSoftElastic", "b_Help1", {"BackColor": 12632256, "ForeColor": 128, "Left": 6150, "Top": 0, "Width": 3060, "Height": 1335, "TabIndex": 2, "FontName": "Arial", "FontSize": 18, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 10, "FloodColor": 4210688, "FloodPercent": 100, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 16777215}]
      ]]
    ]]
  ]],
function (me) {
    const { b_Timer, FillElastic, b_Sound, VSElastic5, b_Tax, b_Tariff, b_Total, b_Cash } = me.controls;
    const { VSElastic3, Image1, Label1, b_Message, VSElastic4, b_PayAll, b_ExitTax, b_Help1 } = me.controls;
    const HOURGLASS = 11;
    const WHITE = 16777215;
    const ARROW_CURSOR = 1;
    const RED = 255;
    let animFrame = 0;
    let animTicks = 0;

    async function b_ExitTax_Click() {
        me.MousePointer = HOURGLASS;
        b_Timer.Enabled = 0;
        me.BackColor = 0x404040;
        FillElastic.Visible = 0;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_ExitTax_MouseDown(Button, Shift, X, Y) {
        b_ExitTax.BackColor = 0xFFFFFF;
    }

    function b_ExitTax_MouseUp(Button, Shift, X, Y) {
        b_ExitTax.BackColor = 0xC0C0C0;
    }

    async function b_Help1_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box1.FillElastic.Caption = "Help (Imperial Taxes)";
        frm_Box1.b_Message.Caption = "The Imperial Government, which rules over all of Kukubia, levies two types of taxes: a Passenger Tax and a Commodities Tariff. The Passenger Tax is a " + Format(game.passengerTaxRate * 100, "#,#0") + "% tax on all income from passengers. The Commodities Tariff is a " + Format(game.exportTariff * 100, "#,#0") + "% tax on all goods exported from a planet and a " + Format(game.importTariff * 100, "#,#0") + "% tax on all goods imported to a planet. If the goods never leave a planet, you will not be charged any tariffs.";
        await frm_Box1.Show(1);
    }

    function b_Help1_MouseDown(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xFFFFFF;
    }

    function b_Help1_MouseUp(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xC0C0C0;
    }

    async function b_PayAll_Click() {
        me.MousePointer = HOURGLASS;
        b_Message.ForeColor = WHITE;
        if ((player.passengerTaxOwed + player.tariffsOwed) == 0) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Taxes";
            frm_Box0.b_Message.Caption = "\n" + "You don't owe the government any money.";
            await frm_Box0.Show(1);
            b_Message.Caption = "You don't owe the government any money.";
        } else if (player.cash == 0) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Taxes";
            frm_Box0.b_Message.Caption = "\n" + "You don't have any money. Check your cash.";
            await frm_Box0.Show(1);
            b_Message.Caption = "You don't have any money. Check your cash.";
        } else if (player.cash < (player.passengerTaxOwed + player.tariffsOwed)) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Taxes";
            frm_Box0.b_Message.Caption = "\n" + "You don't have enough money. Check your cash.";
            await frm_Box0.Show(1);
            b_Message.Caption = "You don't have enough money to pay all your taxes and tariffs.";
        } else {
            b_Message.Caption = "You paid your taxes & tariffs in full!";
            player.cash = player.cash - (player.passengerTaxOwed + player.tariffsOwed);
            b_Timer.Enabled = 0;
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "TAX.BMP");
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "tax2.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            player.passengerTaxOwed = 0;
            player.tariffsOwed = 0;
        }
        updateDisplay();
        me.MousePointer = ARROW_CURSOR;
    }

    function b_PayAll_MouseDown(Button, Shift, X, Y) {
        b_PayAll.BackColor = 0xFFFFFF;
    }

    function b_PayAll_MouseUp(Button, Shift, X, Y) {
        b_PayAll.BackColor = 0xC0C0C0;
    }

    function b_Timer_Timer() {
        if (animFrame == 1) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "TAX.BMP");
        } else if (animFrame == 2) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "tax2.bmp");
        }
        animFrame = animFrame + 1;
        if (animFrame == 3) {
            animFrame = 1;
        }
        animTicks = animTicks + 1;
        if (animTicks == 6) {
            b_Timer.Enabled = 0;
            animTicks = 0;
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "tax2.bmp");
        }
    }

    function updateDisplay() {
        b_Tax.Caption = "   Passenger Taxes:   " + Format(player.passengerTaxOwed, "#,#0");
        b_Tariff.Caption = "   Commodity Tariffs:   " + Format(player.tariffsOwed, "#,#0");
        b_Total.Caption = "   Total Taxes:   " + Format((player.passengerTaxOwed + player.tariffsOwed), "#,#0");
        b_Cash.Caption = "   Cash:   " + Format(player.cash, "#,#0");
    }

    function Form_Activate() {
        updateDisplay();
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_ExitTax_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        animTicks = 1;
        animFrame = 1;
        if (player.passengerTaxOwed + player.tariffsOwed > 0) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "tax2.bmp");
            b_Timer.Enabled = -1;
        } else {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "tax.bmp");
            b_Timer.Enabled = 0;
        }
        if ((player.tariffsOwed + player.passengerTaxOwed) >= (35 * game.shipSize[game.currentPlayer])) {
            b_Message.ForeColor = RED;
            b_Message.Caption = "The Tax Auditor warns you to pay your taxes immediately.";
        } else if ((25 * game.shipSize[game.currentPlayer]) <= (player.tariffsOwed + player.passengerTaxOwed) && (player.tariffsOwed + player.passengerTaxOwed) < (35 * game.shipSize[game.currentPlayer])) {
            b_Message.Caption = "The Tax Auditor reminds you not to wait until the last minute to pay your taxes.";
        } else if ((15 * game.shipSize[game.currentPlayer]) <= (player.tariffsOwed + player.passengerTaxOwed) && (player.tariffsOwed + player.passengerTaxOwed) < (25 * game.shipSize[game.currentPlayer])) {
            b_Message.Caption = "The Tax Auditor says it never hurts to pay your taxes ahead of time.";
        } else if ((player.tariffsOwed + player.passengerTaxOwed) < (15 * game.shipSize[game.currentPlayer])) {
            b_Message.Caption = "You don't have to pay your taxes right away.";
        }
        if (settings.soundOn == -1 && (player.passengerTaxOwed + player.tariffsOwed) > 0) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "tax.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
    }

    return {
        b_ExitTax_Click, b_ExitTax_MouseDown, b_ExitTax_MouseUp, b_Help1_Click,
        b_Help1_MouseDown, b_Help1_MouseUp, b_PayAll_Click, b_PayAll_MouseDown,
        b_PayAll_MouseUp, b_Timer_Timer, updateDisplay, Form_Activate,
        Form_KeyPress, Form_Load,
    };
});
