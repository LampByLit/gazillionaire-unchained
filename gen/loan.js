// Originally translated from src/LOAN.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Loan",
  ["Form", "frm_Loan", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Loan", "BackColor": 0, "Left": 1110, "Top": 1515, "Width": 6165, "Height": 4830, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 1110, "ClientTop": 1515, "ClientWidth": 6165, "ClientHeight": 4830}, [
    ["Timer", "b_Timer", {"Enabled": 0, "Interval": 1, "Left": 420, "Top": 750}],
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16744576}, [
      ["MMControl", "b_Sound", {"Left": 3690, "Top": 900, "Width": 3540, "Height": 330, "TabIndex": 17, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic4", {"BackColor": 64, "Left": 120, "Top": 5565, "Width": 9360, "Height": 1290, "TabIndex": 9, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777088, "IntBkg": 64}, [
        ["VideoSoftElastic", "b_BorrowMax", {"BackColor": 12632256, "Left": 3120, "Top": 0, "Width": 1560, "Height": 1290, "TabIndex": 16, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Borrow Max", "CaptionPos": 4, "AccessKey": -1}],
        ["VideoSoftElastic", "b_Help1", {"BackColor": 12632256, "ForeColor": 128, "Left": 7800, "Top": 0, "Width": 1560, "Height": 1290, "TabIndex": 14, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 12, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Help", "CaptionPos": 5, "AccessKey": -1, "ShadowColor": 8388608}, [
          ["Image", "b_Help2", {"Picture": {"frx": "frx/LOAN/b_Help2.Picture.ico"}, "Left": 480, "Top": 210, "Width": 600, "Height": 585, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_ExitLoan", {"BackColor": 12632256, "ForeColor": 8388608, "Left": 0, "Top": 0, "Width": 1560, "Height": 1290, "TabIndex": 13, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 8388608, "FloodPercent": 100, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 8388608}],
        ["VideoSoftElastic", "b_PayBackMax", {"BackColor": 12632256, "Left": 6240, "Top": 0, "Width": 1560, "Height": 1290, "TabIndex": 12, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Pay Back Max", "CaptionPos": 4, "AccessKey": -1}],
        ["VideoSoftElastic", "b_PayBack", {"BackColor": 12632256, "Left": 4680, "Top": 0, "Width": 1560, "Height": 1290, "TabIndex": 11, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Pay Back Loan", "CaptionPos": 4, "AccessKey": -1}],
        ["VideoSoftElastic", "b_Borrow", {"BackColor": 12632256, "Left": 1560, "Top": 0, "Width": 1560, "Height": 1290, "TabIndex": 10, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Borrow Money", "CaptionPos": 4, "AccessKey": -1}]
      ]],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 16744576, "Left": 3615, "Top": 990, "Width": 5955, "Height": 4620, "TabIndex": 3, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 7, "BevelOuter": 0, "BevelInnerWidth": 8, "BevelOuterWidth": 0, "ShadowColor": 4194304, "IntBkg": 16744576}, [
        ["VideoSoftElastic", "b_Loan", {"BackColor": 16777088, "Left": 390, "Top": 285, "Width": 5175, "Height": 495, "TabIndex": 8, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 8454143, "Caption": "   Loan Amount", "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_Credit", {"BackColor": 16777088, "Left": 390, "Top": 1905, "Width": 5175, "Height": 525, "TabIndex": 7, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 8454143, "Caption": "   Credit Limit", "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_InterestRate", {"BackColor": 16777088, "Left": 390, "Top": 1080, "Width": 5175, "Height": 495, "TabIndex": 6, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 8454143, "Caption": "   Interest Rate ", "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_Interest", {"BackColor": 16777088, "Left": 390, "Top": 3615, "Width": 5175, "Height": 525, "TabIndex": 5, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 8454143, "Caption": "   Interest Paid", "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_Cash", {"BackColor": 16777088, "Left": 390, "Top": 2745, "Width": 5175, "Height": 525, "TabIndex": 4, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 8454143, "Caption": "   Cash ", "IntBkg": 16777088}]
      ]],
      ["VideoSoftElastic", "VSElastic1", {"BackColor": 4194304, "ForeColor": 64, "Left": 75, "Top": 165, "Width": 3540, "Height": 4995, "TabIndex": 2, "AutoSizeChildren": 7, "BorderWidth": 12, "ChildSpacing": 2, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "ShadowColor": 4210688, "IntBkg": 4194304}, [
        ["Image", "Image1", {"Left": 180, "Top": 195, "Width": 3180, "Height": 4290, "Stretch": -1}],
        ["Label", "Label1", {"Caption": "Trader's Union Official", "ForeColor": 16777215, "Left": 180, "Top": 4515, "Width": 3180, "Height": 285, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 15, "Alignment": 2, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 4194304, "Left": 3765, "Top": 165, "Width": 5700, "Height": 840, "TabIndex": 1, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 15, "BevelInner": 4, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 5, "FloodDirection": 3, "FloodColor": 8454143, "FloodPercent": 100, "Caption": "Trader's Union - Loan Department", "CaptionPos": 4, "ShadowColor": 8454143, "IntBkg": 4194304}]
    ]]
  ]],
function (me) {
    const { b_Timer, FillElastic, b_Sound, VSElastic4, b_BorrowMax, b_Help1, b_Help2, b_ExitLoan } = me.controls;
    const { b_PayBackMax, b_PayBack, b_Borrow, VSElastic2, b_Loan, b_Credit, b_InterestRate, b_Interest } = me.controls;
    const { b_Cash, VSElastic1, Image1, Label1, VSElastic3 } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    let animFrame = 0;
    let animTicks = 0;

    async function b_Borrow_Click() {
        let borrowAmount = 0;
        const ARROW_CURSOR = 1;
        me.MousePointer = HOURGLASS;
        if (player.loan >= player.creditLimit) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Trader's Union";
            frm_Box0.b_Message.Caption = "\n" + "The Trader's Union refuses to loan you any more money. Check your credit limit.";
            await frm_Box0.Show(1);
            borrowAmount = 0;
        } else {
            borrowAmount = await askNumber(0, "", 0.25 * (player.creditLimit - player.loan), (player.creditLimit - player.loan), "Enter the amount you wish to borrow:", "Borrow Money");
        }
        if (borrowAmount == 0) {
        } else if (borrowAmount == -3333) {
        } else if ((borrowAmount + player.loan) > player.creditLimit) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Trader's Union";
            frm_Box0.b_Message.Caption = "\n" + "You can't borrow that much. Check your credit limit.";
            await frm_Box0.Show(1);
        } else {
            player.loan = player.loan + borrowAmount;
            player.cash = player.cash + borrowAmount;
            b_Timer.Enabled = -1;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
        }
        updateDisplay();
        me.MousePointer = ARROW_CURSOR;
    }

    function b_Borrow_MouseDown(Button, Shift, X, Y) {
        b_Borrow.BackColor = 0xFFFFFF;
    }

    function b_Borrow_MouseUp(Button, Shift, X, Y) {
        b_Borrow.BackColor = 0xC0C0C0;
    }

    async function b_BorrowMax_Click() {
        let borrowAmount = 0;
        me.MousePointer = HOURGLASS;
        if (player.loan >= player.creditLimit) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Trader's Union";
            frm_Box0.b_Message.Caption = "\n" + "The Trader's Union refuses to loan you any more money. Check your credit limit.";
            await frm_Box0.Show(1);
            borrowAmount = 0;
        } else {
            borrowAmount = player.creditLimit - player.loan;
        }
        if (borrowAmount == 0) {
        } else {
            player.loan = player.loan + borrowAmount;
            player.cash = player.cash + borrowAmount;
            b_Timer.Enabled = -1;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
        }
        updateDisplay();
        me.MousePointer = ARROW_CURSOR;
    }

    function b_BorrowMax_MouseDown(Button, Shift, X, Y) {
        b_BorrowMax.BackColor = 0xFFFFFF;
    }

    function b_BorrowMax_MouseUp(Button, Shift, X, Y) {
        b_BorrowMax.BackColor = 0xC0C0C0;
    }

    async function b_ExitLoan_Click() {
        me.MousePointer = HOURGLASS;
        b_Timer.Enabled = 0;
        me.BackColor = 0x404040;
        FillElastic.Visible = 0;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_ExitLoan_MouseDown(Button, Shift, X, Y) {
        b_ExitLoan.BackColor = 0xFFFFFF;
    }

    function b_ExitLoan_MouseUp(Button, Shift, X, Y) {
        b_ExitLoan.BackColor = 0xC0C0C0;
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

    async function b_PayBack_Click() {
        let maxPayment = 0;
        let payment = 0;
        me.MousePointer = HOURGLASS;
        if (player.cash == 0) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Trader's Union";
            frm_Box0.b_Message.Caption = "\n" + "You don't have any money. Check your cash.";
            await frm_Box0.Show(1);
            payment = 0;
        } else if (player.loan == 0) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Trader's Union";
            frm_Box0.b_Message.Caption = "\n" + "You don't owe the Trader's Union any money.";
            await frm_Box0.Show(1);
            payment = 0;
        } else {
            if (player.cash <= player.loan) {
                maxPayment = player.cash;
            } else {
                maxPayment = player.loan;
            }
            payment = await askNumber(0, "", 0.25 * maxPayment, maxPayment, "Enter the amount you wish to pay back:", "Pay Back Loan");
        }
        if (payment == 0) {
        } else if (payment == -3333) {
        } else if (payment > player.cash) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Trader's Union";
            frm_Box0.b_Message.Caption = "\n" + "You don't have enough money. Check your cash.";
            await frm_Box0.Show(1);
        } else if (payment >= player.loan) {
            player.cash = player.cash - player.loan;
            player.loan = 0;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            b_Timer.Enabled = -1;
        } else {
            player.loan = player.loan - payment;
            player.cash = player.cash - payment;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            b_Timer.Enabled = -1;
        }
        updateDisplay();
        me.MousePointer = ARROW_CURSOR;
    }

    function b_PayBack_MouseDown(Button, Shift, X, Y) {
        b_PayBack.BackColor = 0xFFFFFF;
    }

    function b_PayBack_MouseUp(Button, Shift, X, Y) {
        b_PayBack.BackColor = 0xC0C0C0;
    }

    async function b_PayBackMax_Click() {
        me.MousePointer = HOURGLASS;
        if (player.cash == 0) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Trader's Union";
            frm_Box0.b_Message.Caption = "\n" + "You don't have any money. Check your cash.";
            await frm_Box0.Show(1);
        } else if (player.loan == 0) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Trader's Union";
            frm_Box0.b_Message.Caption = "\n" + "You don't owe the Trader's Union any money.";
            await frm_Box0.Show(1);
        } else if (player.cash >= player.loan) {
            player.cash = player.cash - player.loan;
            player.loan = 0;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            b_Timer.Enabled = -1;
        } else if (player.loan > player.cash) {
            player.loan = player.loan - player.cash;
            player.cash = 0;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            b_Timer.Enabled = -1;
        }
        updateDisplay();
        me.MousePointer = ARROW_CURSOR;
    }

    function b_PayBackMax_MouseDown(Button, Shift, X, Y) {
        b_PayBackMax.BackColor = 0xFFFFFF;
    }

    function b_PayBackMax_MouseUp(Button, Shift, X, Y) {
        b_PayBackMax.BackColor = 0xC0C0C0;
    }

    function b_Timer_Timer() {
        if (animFrame == 1) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan2.bmp");
        } else if (animFrame == 2) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan2.bmp");
        } else if (animFrame == 3) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan1.bmp");
        }
        animFrame = animFrame + 1;
        if (animFrame == 4) {
            animFrame = 1;
        }
        animTicks = animTicks + 1;
        if (animTicks == 4) {
            b_Timer.Enabled = 0;
            animTicks = 1;
            animFrame = 1;
        }
    }

    async function showHelp() {
        me.MousePointer = HOURGLASS;
        animFrame = 0;
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan1.bmp");
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box2.FillElastic.Caption = "Help (Trader's Union Loan)";
        frm_Box2.b_Message.Caption = "Any time you are on a planet, you may take out a loan from the Trader's Union." + "\n" + "\n" + "You will be charged " + Format(player.loanRate * 100, "#,#0") + "% interest per week. A new week begins every time you travel from one planet to another." + "\n" + "\n" + "The interest accrued on your loan will be automatically added to your debt." + "\n" + "\n" + "Under no circumstances must you allow your loan to exceed your CREDIT LIMIT of " + Format(player.creditLimit, "#,#0") + " kubars. If you ever allow your loan to exceed the CREDIT LIMIT, the Trader's Union will force you into BANKRUPTCY and cause you to lose the game.";
        await frm_Box2.Show(1);
    }

    function updateDisplay() {
        b_Loan.Caption = "  Loan Amount:   " + Format(player.loan, "#,#0");
        b_Credit.Caption = "  Credit Limit:   " + Format(player.creditLimit, "#,#0");
        b_InterestRate.Caption = "  Interest Rate:   " + Format(player.loanRate * 100, "#,#0") + "% per week";
        b_Cash.Caption = "  Cash:   " + Format(player.cash, "#,#0");
        b_Interest.Caption = "  Interest Paid (last week):   " + Format(player.loanInterest, "#,#0");
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_ExitLoan_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan1.bmp");
        animTicks = 1;
        animFrame = 1;
        updateDisplay();
    }

    return {
        b_Borrow_Click, b_Borrow_MouseDown, b_Borrow_MouseUp, b_BorrowMax_Click,
        b_BorrowMax_MouseDown, b_BorrowMax_MouseUp, b_ExitLoan_Click, b_ExitLoan_MouseDown,
        b_ExitLoan_MouseUp, b_Help1_Click, b_Help1_MouseDown, b_Help1_MouseUp,
        b_Help2_Click, b_Help2_MouseDown, b_Help2_MouseUp, b_PayBack_Click,
        b_PayBack_MouseDown, b_PayBack_MouseUp, b_PayBackMax_Click, b_PayBackMax_MouseDown,
        b_PayBackMax_MouseUp, b_Timer_Timer, showHelp, updateDisplay,
        Form_Activate, Form_KeyPress, Form_Load,
    };
});
