// Originally translated from src/INSURANC.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Insurance",
  ["Form", "frm_Insurance", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Voyager's Insurance", "BackColor": 0, "Left": 555, "Top": 1305, "Width": 6030, "Height": 5415, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 555, "ClientTop": 1305, "ClientWidth": 6030, "ClientHeight": 5415}, [
    ["Timer", "b_Timer", {"Enabled": 0, "Interval": 1, "Left": 2160, "Top": 600}],
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16744576}, [
      ["MMControl", "b_Sound", {"Left": 5340, "Top": 60, "Width": 3540, "Height": 330, "TabIndex": 13, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic4", {"BackColor": 16744576, "Left": 315, "Top": 5310, "Width": 8880, "Height": 1395, "TabIndex": 9, "AutoSizeChildren": 7, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16744576}, [
        ["VideoSoftElastic", "b_Help", {"BackColor": 12632256, "ForeColor": 128, "Left": 6870, "Top": 0, "Width": 2010, "Height": 1395, "TabIndex": 12, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 2, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 10, "FloodColor": 0, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 16777215}],
        ["VideoSoftElastic", "b_BuyInsurance", {"BackColor": 12632256, "Left": 2055, "Top": 0, "Width": 4815, "Height": 1395, "TabIndex": 11, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 10, "FloodColor": 65535, "Caption": "Buy Voyager's Insurance  ", "CaptionPos": 4, "AccessKey": -1}, [
          ["Image", "b_BuyInsurance_Image2", {"Picture": {"frx": "frx/INSURANC/b_BuyInsurance_Image2.Picture.ico"}, "Left": 3930, "Top": 285, "Width": 630, "Height": 855, "Stretch": -1}],
          ["Image", "b_BuyInsurance_Image", {"Picture": {"frx": "frx/INSURANC/b_BuyInsurance_Image.Picture.ico"}, "Left": 330, "Top": 285, "Width": 630, "Height": 855, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_ExitInsurance", {"BackColor": 12632256, "ForeColor": 8388608, "Left": 0, "Top": 0, "Width": 2055, "Height": 1395, "TabIndex": 10, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 10, "FloodColor": 0, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 8388608}]
      ]],
      ["VideoSoftElastic", "VSElastic1", {"BackColor": 4194304, "Left": 315, "Top": 300, "Width": 3240, "Height": 4725, "TabIndex": 8, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 5, "BevelOuterWidth": 6, "IntBkg": 4194304}, [
        ["Image", "Image1", {"Left": 240, "Top": 195, "Width": 2760, "Height": 4035, "Stretch": -1}],
        ["Label", "Label1", {"Caption": "Insurance Salesman", "ForeColor": 16777215, "Left": 195, "Top": 4260, "Width": 2850, "Height": 315, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 7, "Alignment": 2, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 16711680, "Left": 3945, "Top": 300, "Width": 5085, "Height": 1110, "TabIndex": 5, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "CaptionPos": 4, "ShadowColor": 128, "IntBkg": 16711680}, [
        ["Label", "b_Message", {"Caption": "Insurance ranges in price from 15 to 15,000 kubars.", "ForeColor": 16777215, "Left": 210, "Top": 225, "Width": 4665, "Height": 660, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 6, "Alignment": 2, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 16744576, "Left": 3540, "Top": 1410, "Width": 6030, "Height": 3915, "TabIndex": 1, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 7, "BevelOuter": 0, "BevelInnerWidth": 8, "BevelOuterWidth": 0, "ShadowColor": 4194304, "IntBkg": 16744576}, [
        ["VideoSoftElastic", "b_Insurance", {"BackColor": 16777088, "Left": 360, "Top": 360, "Width": 5115, "Height": 690, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "  Insurance Paid for Next Week:   No", "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_Cash", {"BackColor": 16777088, "Left": 330, "Top": 2670, "Width": 5205, "Height": 705, "TabIndex": 3, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "  Cash:   1,000,000", "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_Cost", {"BackColor": 16777088, "Left": 360, "Top": 1500, "Width": 5175, "Height": 705, "TabIndex": 2, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "  Cost of Insurance:   15,000", "IntBkg": 16777088}]
      ]]
    ]]
  ]],
function (me) {
    const { b_Timer, FillElastic, b_Sound, VSElastic4, b_Help, b_BuyInsurance, b_BuyInsurance_Image2, b_BuyInsurance_Image } = me.controls;
    const { b_ExitInsurance, VSElastic1, Image1, Label1, VSElastic3, b_Message, VSElastic2, b_Insurance } = me.controls;
    const { b_Cash, b_Cost } = me.controls;
    const HOURGLASS = 11;
    const RED = 255;
    const ARROW_CURSOR = 1;
    let animFrame = 0;
    let animTicks = 0;

    async function b_BuyInsurance_Click() {
        await buyInsurance();
    }

    async function b_BuyInsurance_Image_Click() {
        await buyInsurance();
    }

    function b_BuyInsurance_Image_MouseDown(Button, Shift, X, Y) {
        b_BuyInsurance.BackColor = 0xFFFFFF;
    }

    function b_BuyInsurance_Image_MouseUp(Button, Shift, X, Y) {
        b_BuyInsurance.BackColor = 0xC0C0C0;
    }

    async function b_BuyInsurance_Image2_Click() {
        await buyInsurance();
    }

    function b_BuyInsurance_Image2_MouseDown(Button, Shift, X, Y) {
        b_BuyInsurance.BackColor = 0xFFFFFF;
    }

    function b_BuyInsurance_Image2_MouseUp(Button, Shift, X, Y) {
        b_BuyInsurance.BackColor = 0xC0C0C0;
    }

    function b_BuyInsurance_MouseDown(Button, Shift, X, Y) {
        b_BuyInsurance.BackColor = 0xFFFFFF;
    }

    function b_BuyInsurance_MouseUp(Button, Shift, X, Y) {
        b_BuyInsurance.BackColor = 0xC0C0C0;
    }

    async function b_ExitInsurance_Click() {
        me.MousePointer = HOURGLASS;
        b_Timer.Enabled = 0;
        me.BackColor = 0x404040;
        FillElastic.Visible = 0;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_ExitInsurance_MouseDown(Button, Shift, X, Y) {
        b_ExitInsurance.BackColor = 0xFFFFFF;
    }

    function b_ExitInsurance_MouseUp(Button, Shift, X, Y) {
        b_ExitInsurance.BackColor = 0xC0C0C0;
    }

    async function b_Help_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box2.FillElastic.Caption = "Help (Voyager's Insurance)";
        frm_Box2.b_Message.Caption = "Any time you are on a planet, you may purchase Voyager's Insurance. This insurance will protect you against a number of misfortunes which may occur during space travel, such as damage from asteroids, losses due to space pirates, warehouse fires, and much more." + "\n" + "\n" + "If you purchase insurance, it will only cover your next trip. You must pay an insurance premium every week if you want to be fully covered." + "\n" + "\n" + "Your insurance costs will rise and fall depending on local conditions, natural disasters, your accident record and fluctuations in the insurance market. Also, if you purchase a larger ship or more warehouse space, your insurance costs will rise.";
        await frm_Box2.Show(1);
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = 0xFFFFFF;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = 0xC0C0C0;
    }

    function b_Timer_Timer() {
        if (animFrame == 1) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure3.bmp");
        } else if (animFrame == 2) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
        } else if (animFrame == 3) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure3.bmp");
        } else if (animFrame == 4) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure2.bmp");
        } else if (animFrame == 5) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
        }
        animFrame = animFrame + 1;
        if (animFrame == 6) {
            animFrame = 1;
        }
        animTicks = animTicks + 1;
        if (animTicks == 6) {
            b_Timer.Enabled = 0;
        }
    }

    async function buyInsurance() {
        me.MousePointer = HOURGLASS;
        if (player.insured == -1) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Insurance";
            frm_Box0.b_Message.Caption = "\n" + "You already purchased Voyager's Insurance.";
            await frm_Box0.Show(1);
            b_Message.Caption = "You have already purchased Voyager's Insurance.";
        } else if (player.cash == 0) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Insurance";
            frm_Box0.b_Message.Caption = "\n" + "You don't have any money. Check your cash.";
            await frm_Box0.Show(1);
            b_Message.Caption = "You don't have enough money to buy Voyager's Insurance.";
        } else if (player.insuranceCost > player.cash) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Insurance";
            frm_Box0.b_Message.Caption = "\n" + "You don't have enough money. Check your cash.";
            await frm_Box0.Show(1);
            b_Message.Caption = "You don't have enough money to buy Voyager's Insurance.";
        } else {
            player.insured = -1;
            b_Timer.Enabled = -1;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            b_Message.Caption = "You just bought Voyager's Insurance for your next journey!";
            b_Message.ForeColor = RED;
            player.cash = player.cash - player.insuranceCost;
        }
        updateDisplay();
        me.MousePointer = ARROW_CURSOR;
    }

    function rerollInsuranceCost() {
        {
            const sel = (Mod(game.weeklyRoll, 2)) + 1;
            if (sel == 1) {
                player.insuranceCost = CLng(((player.insuranceRate * 1000) / 2) * (1 + (game.weeklyRoll / 100)));
            } else if (sel == 2) {
                player.insuranceCost = CLng(((player.insuranceRate * 1000) / 2) * (game.weeklyRoll / 100));
            }
        }
        if (player.insuranceCost < player.insuranceRate) {
            player.insuranceCost = player.insuranceRate;
        }
        if (player.insuranceCost > (1000 * player.insuranceRate)) {
            player.insuranceCost = 1000 * player.insuranceRate;
        }
        updateDisplay();
    }

    function updateDisplay() {
        if (player.insured == 0) {
            b_Insurance.Caption = "   Insurance Paid for Next Week:   No";
        } else {
            b_Insurance.Caption = "   Insurance Paid for Next Week:   Yes";
        }
        b_Cost.Caption = "   Cost of Insurance:   " + Format(player.insuranceCost, "#,#0");
        b_Cash.Caption = "   Cash:   " + Format(player.cash, "#,#0");
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 22) {
            rerollInsuranceCost();
        } else if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_ExitInsurance_Click();
        }
    }

    function Form_Load() {
        animTicks = 1;
        animFrame = 1;
        updateDisplay();
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
        b_BuyInsurance.Caption = "Purchase Voyager's" + "\n" + "Insurance";
        b_Message.Caption = "Your insurance ranges in price from " + Format(player.insuranceRate, "#,#0") + " to " + Format(player.insuranceRate * 1000, "#,#0") + " kubars";
    }

    return {
        b_BuyInsurance_Click, b_BuyInsurance_Image_Click, b_BuyInsurance_Image_MouseDown, b_BuyInsurance_Image_MouseUp,
        b_BuyInsurance_Image2_Click, b_BuyInsurance_Image2_MouseDown, b_BuyInsurance_Image2_MouseUp, b_BuyInsurance_MouseDown,
        b_BuyInsurance_MouseUp, b_ExitInsurance_Click, b_ExitInsurance_MouseDown, b_ExitInsurance_MouseUp,
        b_Help_Click, b_Help_MouseDown, b_Help_MouseUp, b_Timer_Timer,
        buyInsurance, rerollInsuranceCost, updateDisplay, Form_Activate,
        Form_KeyPress, Form_Load,
    };
});
