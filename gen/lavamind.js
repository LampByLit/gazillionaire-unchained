// Originally translated from src/LAVAMIND.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_LavaMind",
  ["Form", "frm_LavaMind", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "LavaMind", "BackColor": 0, "Left": 795, "Top": 1635, "Width": 8205, "Height": 3225, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 795, "ClientTop": 1635, "ClientWidth": 8205, "ClientHeight": 3225}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 0, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0}, [
      ["VideoSoftElastic", "b_Image", {"BackColor": 0, "Left": 0, "Top": 0, "Width": 9600, "Height": 6495, "TabIndex": 6, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0, "PicturePos": 9}, [
        ["MMControl", "b_Sound", {"Left": 5610, "Top": 300, "Width": 3540, "Height": 330, "TabIndex": 7, "Visible": 0}]
      ]],
      ["VideoSoftElastic", "VSElastic1", {"BackColor": 0, "Left": 30, "Top": 6480, "Width": 9540, "Height": 405, "TabIndex": 1, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 1, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "1", "IntBkg": 0}, [
        ["VideoSoftElastic", "b_BeginGame", {"BackColor": 12632256, "Left": 0, "Top": 0, "Width": 2385, "Height": 405, "TabIndex": 5, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Begin  New Game", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 9}],
        ["VideoSoftElastic", "b_QuickStart", {"BackColor": 12632256, "Left": 7170, "Top": 0, "Width": 2370, "Height": 405, "TabIndex": 4, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Skip Introduction", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Configuration", {"BackColor": 12632256, "Left": 2400, "Top": 0, "Width": 2370, "Height": 405, "TabIndex": 3, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Change Configuration", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 9}],
        ["VideoSoftElastic", "b_LavaMind", {"BackColor": 12632256, "Left": 4785, "Top": 0, "Width": 2370, "Height": 405, "TabIndex": 2, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Contact LavaMind", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 9}]
      ]]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Image, b_Sound, VSElastic1, b_BeginGame, b_QuickStart, b_Configuration, b_LavaMind } = me.controls;
    const HOURGLASS = 11;
    const WHITE = 16777215;
    const LIGHT_GRAY = 12632256;
    const ARROW_CURSOR = 1;

    async function b_BeginGame_Click() {
        me.MousePointer = HOURGLASS;
        b_Image.Visible = 0;
        FillElastic.Visible = 0;
        b_Sound.Command = "Close";
        await frm_TitlePage.Show();
        await Unload(me);
    }

    function b_BeginGame_MouseDown(Button, Shift, X, Y) {
        b_BeginGame.BackColor = WHITE;
    }

    function b_BeginGame_MouseUp(Button, Shift, X, Y) {
        b_BeginGame.BackColor = LIGHT_GRAY;
    }

    async function b_Configuration_Click() {
        me.MousePointer = HOURGLASS;
        await frm_Config.Show(1);
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "lavamind.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
    }

    function b_Configuration_MouseDown(Button, Shift, X, Y) {
        b_Configuration.BackColor = WHITE;
    }

    function b_Configuration_MouseUp(Button, Shift, X, Y) {
        b_Configuration.BackColor = LIGHT_GRAY;
    }

    async function b_Image_Click() {
        me.MousePointer = HOURGLASS;
        b_Image.Visible = 0;
        FillElastic.Visible = 0;
        b_Sound.Command = "Close";
        await frm_TitlePage.Show();
        await Unload(me);
    }

    async function b_LavaMind_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        frm_BoxPort.b_Yes.Visible = 0;
        frm_BoxPort.b_No.Visible = 0;
        frm_BoxPort.b_OK.Visible = -1;
        frm_BoxPort.b_Image.Picture = LoadPicture(Trim(paths.imageDir) + "lavamind.bmp");
        frm_BoxPort.b_Title.Caption = "How to Contact" + "\n" + "LavaMind";
        frm_BoxPort.b_Message.Caption = "If you want to get in touch with LavaMind, just send email to the following addresses:" + "\n" + "\n" + "General Info (Auto Reply):" + "\n" + "info@lavamind.com" + "\n" + "\n" + "Tech Support:" + "\n" + "support@lavamind.com" + "\n" + "\n" + "Customer Service:" + "\n" + "service@lavamind.com" + "\n" + "\n" + "Sales:" + "\n" + "sales@lavamind.com" + "\n" + "\n" + "More LavaMind Games:" + "\n" + "games@lavamind.com";
        if (settings.soundOn == -1) {
            frm_BoxPort.b_Sound.Command = "Close";
            frm_BoxPort.b_Sound.FileName = Trim(paths.soundDir) + "hork.wav";
            frm_BoxPort.b_Sound.Command = "Open";
            frm_BoxPort.b_Sound.Command = "Play";
        }
        await frm_BoxPort.Show(1);
        frm_BoxPort.b_Yes.Visible = 0;
        frm_BoxPort.b_No.Visible = 0;
        frm_BoxPort.b_OK.Visible = -1;
        frm_BoxPort.b_Image.Picture = LoadPicture(Trim(paths.imageDir) + "www.bmp");
        frm_BoxPort.b_Title.Caption = "The LavaMind" + "\n" + "Web Sites";
        frm_BoxPort.b_Message.Caption = "A great way to get information about LavaMind is to come and visit the LavaMind Web Sites." + "\n" + "\n" + "These sites are dedicated to games and entertainment. They are packed with graphics, short stories, reviews, movie material, a Virtual Pet Cemetery and even a lunatic or two." + "\n" + "\n" + "These sites also contain information on ordering LavaMind's other games as well as sneak previews of upcoming games." + "\n" + "\n" + "http://www.gazillionaire.com" + "\n" + "http://www.zapitalism.com" + "\n" + "http://www.lavamind.com" + "\n" + "\n" + "email:  web@lavamind.com";
        if (settings.soundOn == -1) {
            frm_BoxPort.b_Sound.Command = "Close";
            frm_BoxPort.b_Sound.FileName = Trim(paths.soundDir) + "tilo.wav";
            frm_BoxPort.b_Sound.Command = "Open";
            frm_BoxPort.b_Sound.Command = "Play";
        }
        await frm_BoxPort.Show(1);
        FillElastic.Visible = -1;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "lavamind.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
    }

    function b_LavaMind_MouseDown(Button, Shift, X, Y) {
        b_LavaMind.BackColor = WHITE;
    }

    function b_LavaMind_MouseUp(Button, Shift, X, Y) {
        b_LavaMind.BackColor = LIGHT_GRAY;
    }

    async function b_QuickStart_Click() {
        me.MousePointer = HOURGLASS;
        b_Image.Visible = 0;
        FillElastic.Visible = 0;
        b_Sound.Command = "Close";
        await frm_BeginGame.Show();
        await Unload(me);
    }

    function b_QuickStart_MouseDown(Button, Shift, X, Y) {
        b_QuickStart.BackColor = WHITE;
    }

    function b_QuickStart_MouseUp(Button, Shift, X, Y) {
        b_QuickStart.BackColor = LIGHT_GRAY;
    }

    async function FillElastic_Click() {
        me.MousePointer = HOURGLASS;
        b_Image.Visible = 0;
        FillElastic.Visible = 0;
        b_Sound.Command = "Close";
        await frm_TitlePage.Show();
        await Unload(me);
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 32) {
            await b_BeginGame_Click();
        } else if (KeyAscii == 27) {
            await b_QuickStart_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        b_Image.Picture = LoadPicture(Trim(paths.imageDir) + "logo.bmp");
        me.Tag = "";
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "lavamind.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
    }

    function Form_Unload(Cancel) {
        b_Sound.Command = "Close";
    }

    return {
        b_BeginGame_Click, b_BeginGame_MouseDown, b_BeginGame_MouseUp, b_Configuration_Click,
        b_Configuration_MouseDown, b_Configuration_MouseUp, b_Image_Click, b_LavaMind_Click,
        b_LavaMind_MouseDown, b_LavaMind_MouseUp, b_QuickStart_Click, b_QuickStart_MouseDown,
        b_QuickStart_MouseUp, FillElastic_Click, Form_Activate, Form_KeyPress,
        Form_Load, Form_Unload,
    };
});
