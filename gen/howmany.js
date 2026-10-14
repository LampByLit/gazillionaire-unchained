// Originally translated from src/HOWMANY.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_HowManyPlayers",
  ["Form", "frm_HowManyPlayers", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "How Many Players?", "BackColor": 0, "Left": 1485, "Top": 1920, "Width": 6765, "Height": 5205, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 1485, "ClientTop": 1920, "ClientWidth": 6765, "ClientHeight": 5205}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 0, "ForeColor": 32768, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 1, "FontName": "Arial", "FontSize": 15, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 1, "BevelOuterWidth": 0, "CaptionPos": 0, "IntBkg": 0, "PicturePos": 9, "CaptionStyle": 2}, [
      ["MMControl", "b_Sound", {"Left": 5640, "Top": 60, "Width": 3540, "Height": 330, "TabIndex": 10, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic1", {"BackColor": 0, "Left": 2460, "Top": 1260, "Width": 4695, "Height": 4410, "TabIndex": 2, "AutoSizeChildren": 3, "BorderWidth": 0, "ChildSpacing": 8, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0, "PicturePos": 10}, [
        ["VideoSoftElastic", "SixPlayers", {"BackColor": 0, "ForeColor": 16777215, "Left": 0, "Top": 3780, "Width": 4695, "Height": 630, "TabIndex": 7, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Six Players", "CaptionPos": 4, "IntBkg": 0, "PicturePos": 9}],
        ["VideoSoftElastic", "FourPlayers", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 0, "Top": 2280, "Width": 4695, "Height": 630, "TabIndex": 6, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Four Players", "CaptionPos": 4, "IntBkg": 8388608, "PicturePos": 9}],
        ["VideoSoftElastic", "TwoPlayers", {"BackColor": 12582912, "ForeColor": 16777215, "Left": 0, "Top": 765, "Width": 4695, "Height": 645, "TabIndex": 5, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Two Players", "CaptionPos": 4, "IntBkg": 12582912, "PicturePos": 9}],
        ["VideoSoftElastic", "ThreePlayers", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 0, "Top": 1530, "Width": 4695, "Height": 630, "TabIndex": 0, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Three Players", "CaptionPos": 4, "IntBkg": 8388608, "PicturePos": 9}],
        ["VideoSoftElastic", "FivePlayers", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 3030, "Width": 4695, "Height": 630, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Five Players", "CaptionPos": 4, "IntBkg": 4194304, "PicturePos": 9}],
        ["VideoSoftElastic", "OnePlayer", {"BackColor": 16711680, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 4695, "Height": 645, "TabIndex": 3, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "One Player", "CaptionPos": 4, "IntBkg": 16711680, "PicturePos": 9}]
      ]],
      ["Label", "Label2", {"ForeColor": 65535, "Left": 0, "Top": 0, "Width": 3885, "Height": 690, "TabIndex": 9, "Alignment": 2, "BackStyle": 0}],
      ["Label", "Label1", {"ForeColor": 65535, "Left": 90, "Top": 5970, "Width": 3885, "Height": 690, "TabIndex": 8, "Alignment": 2, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, VSElastic1, SixPlayers, FourPlayers, TwoPlayers, ThreePlayers, FivePlayers } = me.controls;
    const { OnePlayer, Label2, Label1 } = me.controls;
    const HOURGLASS = 11;
    const LIGHT_GRAY = 12632256;
    const DARK_NAVY = 4194304;
    const ARROW_CURSOR = 1;
    const NAVY = 8388608;
    const BLUE = 16711680;
    const MEDIUM_BLUE = 12582912;
    let blackBackColor = 0;

    async function goToNextScreen() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        if (game.numPlayers != 1) {
            frm_NameCompany.Tag = "Next Player";
        }
        FillElastic.Visible = 0;
        await frm_NameCompany.Show();
        await Unload(me);
    }

    async function FivePlayers_Click() {
        me.MousePointer = HOURGLASS;
        game.numPlayers = 5;
        await goToNextScreen();
    }

    function FivePlayers_MouseDown(Button, Shift, X, Y) {
        FivePlayers.BackColor = LIGHT_GRAY;
    }

    function FivePlayers_MouseUp(Button, Shift, X, Y) {
        FivePlayers.BackColor = DARK_NAVY;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        FillElastic.Picture = LoadPicture(Trim(paths.imageDir) + "STARS5.BMP");
        if (game.isEmailGame == -1) {
            OnePlayer.Enabled = 0;
        }
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
    }

    async function FourPlayers_Click() {
        me.MousePointer = HOURGLASS;
        game.numPlayers = 4;
        await goToNextScreen();
    }

    function FourPlayers_MouseDown(Button, Shift, X, Y) {
        FourPlayers.BackColor = LIGHT_GRAY;
    }

    function FourPlayers_MouseUp(Button, Shift, X, Y) {
        FourPlayers.BackColor = NAVY;
    }

    function Label1_Click() {
        Label1.Caption = "This cluster of stars is home to a band of rabid rug weavers.";
    }

    function Label2_Click() {
        Label2.Caption = "The programmers just left to get some jelly donuts.";
    }

    async function OnePlayer_Click() {
        me.MousePointer = HOURGLASS;
        game.numPlayers = 1;
        await goToNextScreen();
    }

    function OnePlayer_MouseDown(Button, Shift, X, Y) {
        OnePlayer.BackColor = LIGHT_GRAY;
    }

    function OnePlayer_MouseUp(Button, Shift, X, Y) {
        OnePlayer.BackColor = BLUE;
    }

    async function SixPlayers_Click() {
        me.MousePointer = HOURGLASS;
        game.numPlayers = 6;
        await goToNextScreen();
    }

    function SixPlayers_MouseDown(Button, Shift, X, Y) {
        SixPlayers.BackColor = LIGHT_GRAY;
    }

    function SixPlayers_MouseUp(Button, Shift, X, Y) {
        SixPlayers.BackColor = blackBackColor;
    }

    async function ThreePlayers_Click() {
        me.MousePointer = HOURGLASS;
        game.numPlayers = 3;
        await goToNextScreen();
    }

    function ThreePlayers_MouseDown(Button, Shift, X, Y) {
        ThreePlayers.BackColor = LIGHT_GRAY;
    }

    function ThreePlayers_MouseUp(Button, Shift, X, Y) {
        ThreePlayers.BackColor = NAVY;
    }

    async function TwoPlayers_Click() {
        me.MousePointer = HOURGLASS;
        game.numPlayers = 2;
        await goToNextScreen();
    }

    function TwoPlayers_MouseDown(Button, Shift, X, Y) {
        TwoPlayers.BackColor = LIGHT_GRAY;
    }

    function TwoPlayers_MouseUp(Button, Shift, X, Y) {
        TwoPlayers.BackColor = MEDIUM_BLUE;
    }

    return {
        goToNextScreen, FivePlayers_Click, FivePlayers_MouseDown, FivePlayers_MouseUp,
        Form_Activate, Form_Load, FourPlayers_Click, FourPlayers_MouseDown,
        FourPlayers_MouseUp, Label1_Click, Label2_Click, OnePlayer_Click,
        OnePlayer_MouseDown, OnePlayer_MouseUp, SixPlayers_Click, SixPlayers_MouseDown,
        SixPlayers_MouseUp, ThreePlayers_Click, ThreePlayers_MouseDown, ThreePlayers_MouseUp,
        TwoPlayers_Click, TwoPlayers_MouseDown, TwoPlayers_MouseUp,
    };
});
