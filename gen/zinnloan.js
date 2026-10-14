// Originally translated from src/ZINNLOAN.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_ZinnLoan",
  ["Form", "frm_ZinnLoan", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "ZinnLoan", "BackColor": 0, "Left": 2700, "Top": 1545, "Width": 5100, "Height": 5040, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 2700, "ClientTop": 1545, "ClientWidth": 5100, "ClientHeight": 5040}, [
    ["Timer", "b_Timer", {"Enabled": 0, "Interval": 1, "Left": 1980, "Top": 2280}],
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16744576}, [
      ["MMControl", "b_Sound", {"Left": -30, "Top": 120, "Width": 3540, "Height": 330, "TabIndex": 15, "Visible": 0}],
      ["VideoSoftElastic", "Image1Container", {"BackColor": 4194304, "Left": 165, "Top": 150, "Width": 3480, "Height": 5070, "TabIndex": 13, "AutoSizeChildren": 7, "BorderWidth": 10, "ChildSpacing": 2, "BevelInner": 0, "BevelOuter": 1, "BevelOuterWidth": 5, "IntBkg": 4194304}, [
        ["Image", "Image1", {"Left": 135, "Top": 150, "Width": 3210, "Height": 4410, "Stretch": -1}],
        ["Label", "Label1", {"Caption": "Mr. Zinn", "ForeColor": 16777215, "Left": 135, "Top": 4605, "Width": 3210, "Height": 315, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 14, "Alignment": 2, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "VSElastic4", {"BackColor": 4194304, "Left": 135, "Top": 5520, "Width": 9345, "Height": 1320, "TabIndex": 8, "AutoSizeChildren": 7, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777088, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "b_Help1", {"BackColor": 12632256, "ForeColor": 128, "Left": 7035, "Top": 0, "Width": 2310, "Height": 1320, "TabIndex": 12, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 12, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 0, "FloodPercent": 100, "Caption": "Help", "CaptionPos": 5, "AccessKey": -1, "ShadowColor": 8388608}, [
          ["Image", "b_Help2", {"Picture": {"frx": "frx/ZINNLOAN/b_Help2.Picture.ico"}, "Left": 540, "Top": 180, "Width": 1125, "Height": 585, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_ExitZinnLoan", {"BackColor": 12632256, "ForeColor": 8388608, "Left": 0, "Top": 0, "Width": 2340, "Height": 1320, "TabIndex": 11, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 16384, "FloodPercent": 100, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 8388608}],
        ["VideoSoftElastic", "b_PayBack", {"BackColor": 12632256, "Left": 2340, "Top": 0, "Width": 2340, "Height": 1320, "TabIndex": 10, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Pay Back Loan", "CaptionPos": 4, "AccessKey": -1}],
        ["VideoSoftElastic", "b_PayBackMax", {"BackColor": 12632256, "Left": 4680, "Top": 0, "Width": 2355, "Height": 1320, "TabIndex": 9, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Pay Back Maximum", "CaptionPos": 4, "AccessKey": -1}]
      ]],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 16744576, "Left": 3645, "Top": 960, "Width": 5925, "Height": 4575, "TabIndex": 2, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 7, "BevelOuter": 0, "BevelInnerWidth": 8, "BevelOuterWidth": 0, "ShadowColor": 4194304, "IntBkg": 16744576}, [
        ["VideoSoftElastic", "b_Cash", {"BackColor": 8454016, "Left": 420, "Top": 2775, "Width": 5115, "Height": 570, "TabIndex": 7, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 8454016, "Caption": "   Cash", "IntBkg": 8454016}],
        ["VideoSoftElastic", "b_Interest", {"BackColor": 8454016, "Left": 420, "Top": 3600, "Width": 5115, "Height": 570, "TabIndex": 6, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777088, "Caption": "   Interest", "IntBkg": 8454016}],
        ["VideoSoftElastic", "b_InterestRate", {"BackColor": 8454016, "Left": 420, "Top": 1095, "Width": 5115, "Height": 540, "TabIndex": 5, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 8454016, "Caption": "   Interest Rate ", "IntBkg": 8454016}],
        ["VideoSoftElastic", "b_Credit", {"BackColor": 8454016, "Left": 420, "Top": 1920, "Width": 5115, "Height": 525, "TabIndex": 4, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 8454016, "Caption": "   Credit Limit", "IntBkg": 8454016}],
        ["VideoSoftElastic", "b_Loan", {"BackColor": 8454016, "Left": 390, "Top": 240, "Width": 5145, "Height": 540, "TabIndex": 3, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 8454016, "Caption": "   Loan Amount", "IntBkg": 8454016}]
      ]],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 4194304, "Left": 3810, "Top": 150, "Width": 5655, "Height": 810, "TabIndex": 1, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 15, "BevelInner": 4, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 5, "FloodDirection": 3, "FloodColor": 16777088, "FloodPercent": 100, "Caption": "Mr. Zinn's Estate", "CaptionPos": 4, "ShadowColor": 8388608, "IntBkg": 4194304}]
    ]]
  ]],
function (me) {
    const { b_Timer, FillElastic, b_Sound, Image1Container, Image1, Label1, VSElastic4, b_Help1 } = me.controls;
    const { b_Help2, b_ExitZinnLoan, b_PayBack, b_PayBackMax, VSElastic2, b_Cash, b_Interest, b_InterestRate } = me.controls;
    const { b_Credit, b_Loan, VSElastic3 } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    let animFrame = 0;
    let animTicks = 0;
    let exitBackColor = 0;

    async function b_ExitZinnLoan_Click() {
        me.MousePointer = HOURGLASS;
        b_Timer.Enabled = 0;
        me.BackColor = exitBackColor;
        FillElastic.Visible = 0;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_ExitZinnLoan_MouseDown(Button, Shift, X, Y) {
        b_ExitZinnLoan.BackColor = 0xFFFFFF;
    }

    function b_ExitZinnLoan_MouseUp(Button, Shift, X, Y) {
        b_ExitZinnLoan.BackColor = 0xC0C0C0;
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
        let payment = 0;
        let maxPayment = 0;
        const ARROW_CURSOR = 1;
        me.MousePointer = HOURGLASS;
        if (player.cash == 0) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Mr. Zinn";
            frm_Box0.b_Message.Caption = "\n" + "You don't have any money. Check your cash.";
            await frm_Box0.Show(1);
            payment = 0;
        } else if (player.zinnLoan == 0) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Mr. Zinn";
            frm_Box0.b_Message.Caption = "\n" + "You don't owe Mr. Zinn any money.";
            await frm_Box0.Show(1);
            payment = 0;
        } else {
            if (player.cash <= player.zinnLoan) {
                maxPayment = player.cash;
            } else {
                maxPayment = player.zinnLoan;
            }
            payment = await askNumber(0, "", 0.25 * maxPayment, maxPayment, "Enter the amount you wish to pay back:", "Pay Back Zinn Loan");
        }
        if (payment == 0) {
        } else if (payment == -3333) {
        } else if (payment > player.cash) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Mr. Zinn";
            frm_Box0.b_Message.Caption = "\n" + "You don't have enough money. Check your cash.";
            await frm_Box0.Show(1);
        } else if (payment >= player.zinnLoan) {
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            b_Timer.Enabled = -1;
            player.cash = player.cash - player.zinnLoan;
            player.zinnLoan = 0;
        } else {
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            b_Timer.Enabled = -1;
            player.zinnLoan = player.zinnLoan - payment;
            player.cash = player.cash - payment;
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
            frm_Box0.FillElastic.Caption = "Mr. Zinn";
            frm_Box0.b_Message.Caption = "\n" + "You don't have any money. Check your cash.";
            await frm_Box0.Show(1);
        } else if (player.zinnLoan == 0) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Mr. Zinn";
            frm_Box0.b_Message.Caption = "\n" + "You don't owe Mr. Zinn any money.";
            await frm_Box0.Show(1);
        } else if (player.cash >= player.zinnLoan) {
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            b_Timer.Enabled = -1;
            player.cash = player.cash - player.zinnLoan;
            player.zinnLoan = 0;
        } else if (player.zinnLoan > player.cash) {
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            b_Timer.Enabled = -1;
            player.zinnLoan = player.zinnLoan - player.cash;
            player.cash = 0;
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
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zinn2.bmp");
        } else if (animFrame == 2) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zinn3.bmp");
        } else if (animFrame == 3) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zinn3.bmp");
        } else if (animFrame == 4) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zinn2.bmp");
        } else if (animFrame == 5) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ZINN.BMP");
        }
        animFrame = animFrame + 1;
        if (animFrame == 6) {
            animFrame = 1;
        }
        animTicks = animTicks + 1;
        if (animFrame == 3) {
            b_Timer.Interval = 200;
        } else {
            b_Timer.Interval = 1;
        }
        if (animTicks == 6) {
            b_Timer.Enabled = 0;
            animTicks = 1;
            animFrame = 1;
        }
    }

    async function showHelp() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box2.FillElastic.Caption = "Help (Mr. Zinn's Loan)";
        frm_Box2.b_Message.Caption = "Mr. Zinn is a wealthy and somewhat fickle financier. He made his fortune as a merchant on Zile, and now he wants to expand his business." + "\n" + "\n" + "Mr. Zinn is willing to loan you money at " + Format(player.zinnRate * 100, "#,#0") + "% interest per week. The interest is charged every time you leave a planet and travel to a new planet, and this amount is added to your total debt." + "\n" + "\n" + "Under no circumstances must you allow this loan to exceed the maximum CREDIT LIMIT of " + Format(player.zinnCreditLimit, "#,#0") + " kubars. If you ever allow your loan to exceed this CREDIT LIMIT, Mr. Zinn will repossess your ship, which will force you into BANKRUPTCY and cause you to lose the game.";
        await frm_Box2.Show(1);
    }

    function updateDisplay() {
        b_Loan.Caption = "  Loan Amount:   " + Format(player.zinnLoan, "#,#0");
        b_Credit.Caption = "  Credit Limit:   " + Format(player.zinnCreditLimit, "#,#0");
        b_InterestRate.Caption = "  Interest Rate:   " + Format(100 * player.zinnRate, "#,#0") + "% per week";
        b_Cash.Caption = "  Cash:   " + Format(player.cash, "#,#0");
        b_Interest.Caption = "  Interest Paid (last week):   " + Format(player.zinnInterest, "#,#0");
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_ExitZinnLoan_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        animFrame = 1;
        animTicks = 1;
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ZINN.BMP");
        updateDisplay();
    }

    return {
        b_ExitZinnLoan_Click, b_ExitZinnLoan_MouseDown, b_ExitZinnLoan_MouseUp, b_Help1_Click,
        b_Help1_MouseDown, b_Help1_MouseUp, b_Help2_Click, b_Help2_MouseDown,
        b_Help2_MouseUp, b_PayBack_Click, b_PayBack_MouseDown, b_PayBack_MouseUp,
        b_PayBackMax_Click, b_PayBackMax_MouseDown, b_PayBackMax_MouseUp, b_Timer_Timer,
        showHelp, updateDisplay, Form_Activate, Form_KeyPress,
        Form_Load,
    };
});
