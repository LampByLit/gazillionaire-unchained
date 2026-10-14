// Originally translated from src/QUICK.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Quick",
  ["Form", "frm_Quick", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Quick", "BackColor": 0, "Left": 1110, "Top": 2220, "Width": 7860, "Height": 3240, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 1110, "ClientTop": 2220, "ClientWidth": 7860, "ClientHeight": 3240}, [
    ["MMControl", "b_Sound", {"Left": 4860, "Top": 60, "Width": 3540, "Height": 330, "TabIndex": 20, "Visible": 0}],
    ["VideoSoftElastic", "FillElastic", {"BackColor": 12632256, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 16, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
      ["VideoSoftElastic", "VSElastic1", {"BackColor": 12632256, "Left": 450, "Top": 5580, "Width": 8955, "Height": 585, "TabIndex": 21, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "Note:  Even after you've activated the shortcuts, you can still access the sub-menus by clicking with the RIGHT mouse button instead of the LEFT mouse button.", "AccessKey": -1}],
      ["VideoSoftElastic", "VSElastic8", {"BackColor": 16777088, "Left": 300, "Top": 255, "Width": 9000, "Height": 540, "TabIndex": 19, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Click on the boxes to turn on/off the shortcuts for each menu.", "CaptionPos": 4, "IntBkg": 16777088}],
      ["VideoSoftElastic", "VSElastic4", {"BackColor": 12632256, "Left": 0, "Top": 6300, "Width": 9615, "Height": 615, "TabIndex": 18, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
        ["VideoSoftElastic", "b_Off", {"BackColor": 12632256, "Left": 4815, "Top": 0, "Width": 2400, "Height": 615, "TabIndex": 14, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 5, "Caption": "Everything Off", "CaptionPos": 4, "AccessKey": -1}],
        ["VideoSoftElastic", "b_On", {"BackColor": 12632256, "Left": 2415, "Top": 0, "Width": 2400, "Height": 615, "TabIndex": 13, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 5, "Caption": "Everything On", "CaptionPos": 4, "AccessKey": -1}],
        ["VideoSoftElastic", "b_Help", {"BackColor": 12632256, "Left": 7215, "Top": 0, "Width": 2400, "Height": 615, "TabIndex": 15, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 5, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1}],
        ["VideoSoftElastic", "b_Exit", {"BackColor": 12632256, "Left": 0, "Top": 0, "Width": 2415, "Height": 615, "TabIndex": 12, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 5, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1}]
      ]],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 12632256, "Left": 450, "Top": 960, "Width": 8760, "Height": 4485, "TabIndex": 17, "AutoSizeChildren": 3, "BorderWidth": 0, "ChildSpacing": 9, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
        ["SSCheck", "b_Deposit", {"Left": 0, "Top": 1170, "Width": 8760, "Height": 255, "Caption": "  Quick DEPOSIT automatically deposits all your cash in the Bank before traveling.", "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 3, "Value": -1, "Font3D": 2}],
        ["SSCheck", "b_Warehouse", {"Left": 0, "Top": 4245, "Width": 8760, "Height": 240, "Caption": "  Quick WAREHOUSE allows you to store or take max by clicking on the Warehouse grid.", "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 11, "Value": -1, "Font3D": 2}],
        ["SSCheck", "b_Buy", {"Left": 0, "Top": 2730, "Width": 8760, "Height": 255, "Caption": "  Quick MARKETPLACE allows you to buy or sell max by clicking on the Marketplace grid.", "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 5, "Value": -1, "Font3D": 2}],
        ["SSCheck", "b_Bank", {"Left": 0, "Top": 390, "Width": 8760, "Height": 255, "Caption": "  Quick BANK allows you to deposit or withdraw money from the Main Menu.", "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 1, "Value": -1, "Font3D": 2}],
        ["SSCheck", "b_Borrow", {"Left": 0, "Top": 2340, "Width": 8760, "Height": 255, "Caption": "  Quick LOAN allows you to borrow or pay back money from the Main Menu.", "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 8, "Value": -1, "Font3D": 2}],
        ["SSCheck", "b_Insurance", {"Left": 0, "Top": 1950, "Width": 8760, "Height": 255, "Caption": "  Quick INSURANCE allows you to buy insurance from the Main Menu.", "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 4, "Value": -1, "Font3D": 2}],
        ["SSCheck", "b_Tax", {"Left": 0, "Top": 3870, "Width": 8760, "Height": 240, "Caption": "  Quick TAXES allows you to pay your taxes from the Main Menu.", "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 9, "Value": -1, "Font3D": 2}],
        ["SSCheck", "b_Passengers", {"Left": 0, "Top": 3120, "Width": 8760, "Height": 240, "Caption": "  Quick PASSENGER allows you to pickup passengers from the Main Menu.", "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 10, "Value": -1, "Font3D": 2}],
        ["SSCheck", "b_Journey", {"Left": 0, "Top": 3495, "Width": 8760, "Height": 240, "Caption": "  Quick TRAVEL allows you to skip the animation while traveling.", "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 7, "Value": -1, "Font3D": 2}],
        ["SSCheck", "b_Fuel", {"Left": 0, "Top": 1560, "Width": 8760, "Height": 255, "Caption": "  Quick FUEL allows you to fill up your tank from the Main Menu.", "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 6, "Value": -1, "Font3D": 2}],
        ["SSCheck", "b_Crew", {"Left": 0, "Top": 780, "Width": 8760, "Height": 255, "Caption": "  Quick CREW allows you to pay your crew from the Main Menu.", "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 2, "Value": -1, "Font3D": 2}],
        ["SSCheck", "b_Advertising", {"Left": 0, "Top": 0, "Width": 8760, "Height": 255, "Caption": "  Quick ADVERTISE allows you to advertise from the Main Menu.", "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 0, "Value": -1, "Font3D": 2}]
      ]]
    ]]
  ]],
function (me) {
    const { b_Sound, FillElastic, VSElastic1, VSElastic8, VSElastic4, b_Off, b_On, b_Help } = me.controls;
    const { b_Exit, VSElastic3, b_Deposit, b_Warehouse, b_Buy, b_Bank, b_Borrow, b_Insurance } = me.controls;
    const { b_Tax, b_Passengers, b_Journey, b_Fuel, b_Crew, b_Advertising } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        if (b_Warehouse.Value == -1) {
            player.quickWarehouse = -1;
        } else {
            player.quickWarehouse = 0;
        }
        if (b_Buy.Value == -1) {
            player.quickMarket = -1;
        } else {
            player.quickMarket = 0;
        }
        if (b_Deposit.Value == -1) {
            player.quickDeposit = -1;
        } else {
            player.quickDeposit = 0;
        }
        if (b_Bank.Value == -1) {
            player.quickBank = -1;
        } else {
            player.quickBank = 0;
        }
        if (b_Borrow.Value == -1) {
            player.quickLoan = -1;
        } else {
            player.quickLoan = 0;
        }
        if (b_Advertising.Value == -1) {
            player.quickAdvertise = -1;
        } else {
            player.quickAdvertise = 0;
        }
        if (b_Crew.Value == -1) {
            player.quickCrew = -1;
        } else {
            player.quickCrew = 0;
        }
        if (b_Fuel.Value == -1) {
            player.quickFuel = -1;
        } else {
            player.quickFuel = 0;
        }
        if (b_Journey.Value == -1) {
            player.quickTravel = -1;
        } else {
            player.quickTravel = 0;
        }
        if (b_Passengers.Value == -1) {
            player.quickPassengers = -1;
        } else {
            player.quickPassengers = 0;
        }
        if (b_Tax.Value == -1) {
            player.quickTaxes = -1;
        } else {
            player.quickTaxes = 0;
        }
        if (b_Insurance.Value == -1) {
            player.quickInsurance = -1;
        } else {
            player.quickInsurance = 0;
        }
        await frm_File.Show();
        await Unload(me);
    }

    function b_Exit_MouseDown(Button, Shift, X, Y) {
        b_Exit.BackColor = 0xFFFFFF;
    }

    function b_Exit_MouseUp(Button, Shift, X, Y) {
        b_Exit.BackColor = 0xC0C0C0;
    }

    async function b_Help_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box2.FillElastic.Caption = "Help (Shortcuts)";
        frm_Box2.b_Message.Caption = "The SHORTCUTS menu allows you to speed up the game by cutting down on the number of mouse clicks required to perform routine tasks." + "\n" + "\n" + "When a shortcut is activated, it allows you to pay your crew, or fill up your fuel tank, or buy insurance simply by clicking on the appropriate MAIN MENU button. This way you can bypass the sub-menus." + "\n" + "\n" + "The shortcuts save a lot of time, especially for slow computers. However, even after you've activated the shortcuts, you can still access the sub-menus by clicking with the RIGHT mouse button instead of the LEFT mouse button.";
        await frm_Box2.Show(1);
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = 0xFFFFFF;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = 0xC0C0C0;
    }

    function b_Off_Click() {
        b_Warehouse.Value = 0;
        b_Buy.Value = 0;
        b_Deposit.Value = 0;
        b_Bank.Value = 0;
        b_Borrow.Value = 0;
        b_Advertising.Value = 0;
        b_Crew.Value = 0;
        b_Fuel.Value = 0;
        b_Journey.Value = 0;
        b_Passengers.Value = 0;
        b_Tax.Value = 0;
        b_Insurance.Value = 0;
    }

    function b_Off_MouseDown(Button, Shift, X, Y) {
        b_Off.BackColor = 0xFFFFFF;
    }

    function b_Off_MouseUp(Button, Shift, X, Y) {
        b_Off.BackColor = 0xC0C0C0;
    }

    function b_On_Click() {
        b_Warehouse.Value = -1;
        b_Buy.Value = -1;
        b_Deposit.Value = -1;
        b_Bank.Value = -1;
        b_Borrow.Value = -1;
        b_Advertising.Value = -1;
        b_Crew.Value = -1;
        b_Fuel.Value = -1;
        b_Journey.Value = -1;
        b_Passengers.Value = -1;
        b_Tax.Value = -1;
        b_Insurance.Value = -1;
    }

    function b_On_MouseDown(Button, Shift, X, Y) {
        b_On.BackColor = 0xFFFFFF;
    }

    function b_On_MouseUp(Button, Shift, X, Y) {
        b_On.BackColor = 0xC0C0C0;
    }

    function hideLockedShortcuts() {
        if (game.tutorialMode == -1 && game.complexity < game.unlockAdvertising) {
            b_Advertising.Visible = 0;
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockCrew) {
            b_Crew.Visible = 0;
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockFuel) {
            b_Fuel.Visible = 0;
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockPassengers) {
            b_Passengers.Visible = 0;
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockTaxes) {
            b_Tax.Visible = 0;
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockInsurance) {
            b_Insurance.Visible = 0;
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
        me.MousePointer = HOURGLASS;
        if (player.quickWarehouse == -1) {
            b_Warehouse.Value = -1;
        } else {
            b_Warehouse.Value = 0;
        }
        if (player.quickMarket == -1) {
            b_Buy.Value = -1;
        } else {
            b_Buy.Value = 0;
        }
        if (player.quickDeposit == -1) {
            b_Deposit.Value = -1;
        } else {
            b_Deposit.Value = 0;
        }
        if (player.quickBank == -1) {
            b_Bank.Value = -1;
        } else {
            b_Bank.Value = 0;
        }
        if (player.quickLoan == -1) {
            b_Borrow.Value = -1;
        } else {
            b_Borrow.Value = 0;
        }
        if (player.quickAdvertise == -1) {
            b_Advertising.Value = -1;
        } else {
            b_Advertising.Value = 0;
        }
        if (player.quickCrew == -1) {
            b_Crew.Value = -1;
        } else {
            b_Crew.Value = 0;
        }
        if (player.quickFuel == -1) {
            b_Fuel.Value = -1;
        } else {
            b_Fuel.Value = 0;
        }
        if (player.quickTravel == -1) {
            b_Journey.Value = -1;
        } else {
            b_Journey.Value = 0;
        }
        if (player.quickPassengers == -1) {
            b_Passengers.Value = -1;
        } else {
            b_Passengers.Value = 0;
        }
        if (player.quickTaxes == -1) {
            b_Tax.Value = -1;
        } else {
            b_Tax.Value = 0;
        }
        if (player.quickInsurance == -1) {
            b_Insurance.Value = -1;
        } else {
            b_Insurance.Value = 0;
        }
        me.MousePointer = ARROW_CURSOR;
    }

    return {
        b_Exit_Click, b_Exit_MouseDown, b_Exit_MouseUp, b_Help_Click,
        b_Help_MouseDown, b_Help_MouseUp, b_Off_Click, b_Off_MouseDown,
        b_Off_MouseUp, b_On_Click, b_On_MouseDown, b_On_MouseUp,
        hideLockedShortcuts, Form_Activate, Form_KeyPress, Form_Load,
    };
});
