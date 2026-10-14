// Originally translated from src/BANK.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Bank",
  ["Form", "frm_Bank", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Bank", "BackColor": 0, "Left": 630, "Top": 2145, "Width": 6015, "Height": 4695, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form2", "KeyPreview": -1, "ClientLeft": 630, "ClientTop": 2145, "ClientWidth": 6015, "ClientHeight": 4695}, [
    ["Timer", "b_Timer", {"Enabled": 0, "Interval": 1, "Left": 2100, "Top": 780}],
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "ForeColor": 12583104, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "ShadowColor": 12583104, "IntBkg": 16744576}, [
      ["MMControl", "b_Sound", {"Left": -90, "Top": 0, "Width": 3540, "Height": 330, "TabIndex": 16, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic1", {"BackColor": 4194304, "Left": 150, "Top": 270, "Width": 3270, "Height": 4785, "TabIndex": 14, "AutoSizeChildren": 7, "BorderWidth": 10, "ChildSpacing": 2, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "IntBkg": 4194304}, [
        ["Image", "Image1", {"Left": 150, "Top": 150, "Width": 2970, "Height": 4155, "Stretch": -1}],
        ["Label", "Label1", {"Caption": "Bank Manager", "ForeColor": 16777215, "Left": 150, "Top": 4350, "Width": 2970, "Height": 285, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 15, "Alignment": 2, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "VSElastic4", {"BackColor": 4194368, "Left": 90, "Top": 5475, "Width": 9420, "Height": 1380, "TabIndex": 6, "AutoSizeChildren": 7, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777088, "IntBkg": 4194368}, [
        ["VideoSoftElastic", "b_Help1", {"BackColor": 12632256, "ForeColor": 128, "Left": 7860, "Top": 0, "Width": 1560, "Height": 1380, "TabIndex": 13, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 12, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 0, "FloodPercent": 100, "Caption": "Help", "CaptionPos": 5, "AccessKey": -1, "ShadowColor": 16777215}, [
          ["Image", "b_Help2", {"Picture": {"frx": "frx/BANK/b_Help2.Picture.ico"}, "Left": 405, "Top": 240, "Width": 750, "Height": 630, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_ExitBank", {"BackColor": 12632256, "ForeColor": 8388608, "Left": 0, "Top": 0, "Width": 1575, "Height": 1380, "TabIndex": 12, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 1, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 4194304, "FloodPercent": 100, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 8388608}],
        ["VideoSoftElastic", "b_Deposit", {"BackColor": 12632256, "Left": 1575, "Top": 0, "Width": 1560, "Height": 1380, "TabIndex": 10, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Deposit Money", "CaptionPos": 4, "AccessKey": -1}],
        ["VideoSoftElastic", "b_DepositAll", {"BackColor": 12632256, "Left": 3135, "Top": 0, "Width": 1590, "Height": 1380, "TabIndex": 9, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Deposit Max", "CaptionPos": 4, "AccessKey": -1}],
        ["VideoSoftElastic", "b_WithdrawAll", {"BackColor": 12632256, "Left": 6300, "Top": 0, "Width": 1560, "Height": 1380, "TabIndex": 8, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Withdraw Max", "CaptionPos": 4, "AccessKey": -1}],
        ["VideoSoftElastic", "b_Withdraw", {"BackColor": 12632256, "Left": 4725, "Top": 0, "Width": 1575, "Height": 1380, "TabIndex": 7, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Withdraw Money", "CaptionPos": 4, "AccessKey": -1}]
      ]],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 16744576, "Left": 3405, "Top": 1065, "Width": 6195, "Height": 4410, "TabIndex": 2, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 7, "BevelOuter": 0, "BevelInnerWidth": 8, "BevelOuterWidth": 5, "ShadowColor": 4194304, "IntBkg": 16744576}, [
        ["VideoSoftElastic", "b_Interest", {"BackColor": 8454143, "Left": 480, "Top": 3285, "Width": 5265, "Height": 600, "TabIndex": 11, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777088, "Caption": "   Interest", "IntBkg": 8454143}],
        ["VideoSoftElastic", "b_InterestRate", {"BackColor": 8454143, "Left": 480, "Top": 1365, "Width": 5265, "Height": 555, "TabIndex": 5, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777088, "Caption": "   Interest Rate ", "IntBkg": 8454143}],
        ["VideoSoftElastic", "b_Cash", {"BackColor": 8454143, "Left": 480, "Top": 2340, "Width": 5265, "Height": 570, "TabIndex": 4, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777088, "Caption": "   Cash ", "IntBkg": 8454143}],
        ["VideoSoftElastic", "b_Bank", {"BackColor": 8454143, "Left": 480, "Top": 360, "Width": 5265, "Height": 585, "TabIndex": 3, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777088, "Caption": "   Savings Account ", "IntBkg": 8454143}]
      ]],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 4194304, "Left": 3660, "Top": 270, "Width": 5775, "Height": 810, "TabIndex": 1, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 15, "BevelInner": 4, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 5, "FloodDirection": 3, "FloodColor": 8454016, "FloodPercent": 100, "Caption": "Trader's Union Bank", "CaptionPos": 4, "ShadowColor": 4194368, "IntBkg": 4194304}]
    ]]
  ]],
function (me) {
    const { b_Timer, FillElastic, b_Sound, VSElastic1, Image1, Label1, VSElastic4, b_Help1 } = me.controls;
    const { b_Help2, b_ExitBank, b_Deposit, b_DepositAll, b_WithdrawAll, b_Withdraw, VSElastic2, b_Interest } = me.controls;
    const { b_InterestRate, b_Cash, b_Bank, VSElastic3 } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    let animFrame = 0;
    let animTicks = 0;
    let isDeposit = 0;
    let exitBackColor = 0;  // Static in b_ExitBank_Click

    async function b_Deposit_Click() {
        let depositAmount = 0;
        const ARROW_CURSOR = 1;
        me.MousePointer = HOURGLASS;
        if (player.cash == 0) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "The Bank";
            frm_Box0.b_Message.Caption = "\n" + "You don't have any money. Check your cash.";
            await frm_Box0.Show(1);
            depositAmount = 0;
        } else {
            depositAmount = await askNumber(0, "", 0.25 * player.cash, player.cash, "Enter the amount you wish to deposit:", "Deposit Money");
        }
        if (depositAmount == 0) {
        } else if (depositAmount == -3333) {
        } else if (depositAmount > player.cash) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "The Bank";
            frm_Box0.b_Message.Caption = "\n" + "You don't have enough money. Check your cash.";
            await frm_Box0.Show(1);
        } else {
            player.bankBalance = player.bankBalance + depositAmount;
            player.cash = player.cash - depositAmount;
            isDeposit = -1;
            b_Timer.Enabled = -1;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "bank.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
        }
        updateDisplay();
        me.MousePointer = ARROW_CURSOR;
    }

    function b_Deposit_MouseDown(Button, Shift, X, Y) {
        b_Deposit.BackColor = 0xFFFFFF;
    }

    function b_Deposit_MouseUp(Button, Shift, X, Y) {
        b_Deposit.BackColor = 0xC0C0C0;
    }

    async function b_DepositAll_Click() {
        me.MousePointer = HOURGLASS;
        if (player.cash == 0) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "The Bank";
            frm_Box0.b_Message.Caption = "\n" + "You don't have any money. Check your cash.";
            await frm_Box0.Show(1);
        } else {
            isDeposit = -1;
            b_Timer.Enabled = -1;
            player.bankBalance = player.bankBalance + player.cash;
            player.cash = 0;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "bank.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
        }
        updateDisplay();
        me.MousePointer = ARROW_CURSOR;
    }

    function b_DepositAll_MouseDown(Button, Shift, X, Y) {
        b_DepositAll.BackColor = 0xFFFFFF;
    }

    function b_DepositAll_MouseUp(Button, Shift, X, Y) {
        b_DepositAll.BackColor = 0xC0C0C0;
    }

    async function b_ExitBank_Click() {
        me.MousePointer = HOURGLASS;
        b_Timer.Enabled = 0;
        me.BackColor = exitBackColor;
        FillElastic.Visible = 0;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_ExitBank_MouseDown(Button, Shift, X, Y) {
        b_ExitBank.BackColor = 0xFFFFFF;
    }

    function b_ExitBank_MouseUp(Button, Shift, X, Y) {
        b_ExitBank.BackColor = 0xC0C0C0;
    }

    async function b_Help1_Click() {
        await showHelp();
    }

    function b_Help1_MouseDown(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xFFFFFF;
    }

    function b_Help1_MouseUp(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xC0C0C0;
    }

    async function b_Help2_Click() {
        await showHelp();
    }

    function b_Help2_MouseDown(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xFFFFFF;
    }

    function b_Help2_MouseUp(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xC0C0C0;
    }

    function b_Timer_Timer() {
        if (isDeposit == -1) {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "BANK2.BMP");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "BANK2.BMP");
            } else if (animFrame == 3) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "BANK.BMP");
            }
        } else {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "BANK1.BMP");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "BANK1.BMP");
            } else if (animFrame == 3) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "BANK.BMP");
            }
        }
        animFrame = animFrame + 1;
        if (animFrame == 4) {
            animFrame = 1;
        }
        animTicks = animTicks + 1;
        if (animTicks == 3) {
            b_Timer.Enabled = 0;
            animTicks = 0;
            animFrame = 1;
        }
    }

    async function b_Withdraw_Click() {
        let withdrawAmount = 0;
        me.MousePointer = HOURGLASS;
        if (player.bankBalance == 0) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "The Bank";
            frm_Box0.b_Message.Caption = "\n" + "You don't have any money in your account. Check your account balance.";
            await frm_Box0.Show(1);
            withdrawAmount = 0;
        } else {
            withdrawAmount = await askNumber(0, "", 0.25 * player.bankBalance, player.bankBalance, "Enter the amount you wish to withdraw:", "Withdraw Money");
        }
        if (withdrawAmount == 0) {
        } else if (withdrawAmount == -3333) {
        } else if (withdrawAmount > player.bankBalance) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "The Bank";
            frm_Box0.b_Message.Caption = "\n" + "You don't have enough money in your account. Check your account balance.";
            await frm_Box0.Show(1);
        } else {
            player.bankBalance = player.bankBalance - withdrawAmount;
            player.cash = player.cash + withdrawAmount;
            isDeposit = 0;
            b_Timer.Enabled = -1;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "bank2.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
        }
        updateDisplay();
        me.MousePointer = ARROW_CURSOR;
    }

    function b_Withdraw_MouseDown(Button, Shift, X, Y) {
        b_Withdraw.BackColor = 0xFFFFFF;
    }

    function b_Withdraw_MouseUp(Button, Shift, X, Y) {
        b_Withdraw.BackColor = 0xC0C0C0;
    }

    async function b_WithdrawAll_Click() {
        me.MousePointer = HOURGLASS;
        if (player.bankBalance == 0) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "The Bank";
            frm_Box0.b_Message.Caption = "\n" + "You don't have any money in the bank. Check your account balance.";
            await frm_Box0.Show(1);
        } else {
            player.cash = player.cash + player.bankBalance;
            player.bankBalance = 0;
            isDeposit = 0;
            b_Timer.Enabled = -1;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "bank2.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
        }
        updateDisplay();
        me.MousePointer = ARROW_CURSOR;
    }

    function b_WithdrawAll_MouseDown(Button, Shift, X, Y) {
        b_WithdrawAll.BackColor = 0xFFFFFF;
    }

    function b_WithdrawAll_MouseUp(Button, Shift, X, Y) {
        b_WithdrawAll.BackColor = 0xC0C0C0;
    }

    function updateDisplay() {
        b_Bank.Caption = "  Account Balance:   " + Format(player.bankBalance, "#,#0");
        b_Cash.Caption = "  Cash:   " + Format(player.cash, "#,#0");
        b_InterestRate.Caption = "  Interest Rate:   " + Format(player.bankRate * 100, "#,#0") + "% per week";
        b_Interest.Caption = "  Interest Earned (last week):   " + Format(player.bankInterest, "#,#0");
    }

    async function showHelp() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box1.FillElastic.Caption = "Help (Trader's Union Bank)";
        frm_Box1.b_Message.Caption = "Any time you are on a planet, you may deposit money in your Trader's Union Bank Account. The Trader's Union will pay you " + Format(player.bankRate * 100, "#,#0") + "% interest. Every time you travel to a new planet, the interest will be automatically added to your bank account. There is no limit to how much money you may deposit in your account.";
        await frm_Box1.Show(1);
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_ExitBank_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "BANK.BMP");
        animTicks = 0;
        animFrame = 1;
        updateDisplay();
    }

    return {
        b_Deposit_Click, b_Deposit_MouseDown, b_Deposit_MouseUp, b_DepositAll_Click,
        b_DepositAll_MouseDown, b_DepositAll_MouseUp, b_ExitBank_Click, b_ExitBank_MouseDown,
        b_ExitBank_MouseUp, b_Help1_Click, b_Help1_MouseDown, b_Help1_MouseUp,
        b_Help2_Click, b_Help2_MouseDown, b_Help2_MouseUp, b_Timer_Timer,
        b_Withdraw_Click, b_Withdraw_MouseDown, b_Withdraw_MouseUp, b_WithdrawAll_Click,
        b_WithdrawAll_MouseDown, b_WithdrawAll_MouseUp, updateDisplay, showHelp,
        Form_Activate, Form_KeyPress, Form_Load,
    };
});
