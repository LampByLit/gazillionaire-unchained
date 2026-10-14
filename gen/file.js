// Originally translated from src/FILE.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_File",
  ["Form", "frm_File", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ClipControls": 0, "Caption": "File", "BackColor": 0, "Left": 1995, "Top": 1695, "Width": 5715, "Height": 5985, "WindowState": 2, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 1995, "ClientTop": 1695, "ClientWidth": 5715, "ClientHeight": 5985}, [
    ["MMControl", "b_Sound", {"Left": 5760, "Top": 90, "Width": 3540, "Height": 330, "TabIndex": 12, "Visible": 0}],
    ["VideoSoftElastic", "FillElastic", {"BackColor": 0, "ForeColor": 255, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "ChildSpacing": 2, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0, "PicturePos": 9}, [
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 0, "Left": 1380, "Top": 5280, "Width": 6795, "Height": 705, "TabIndex": 5, "FontName": "Times New Roman", "FontSize": 15, "FontBold": -1, "FontItalic": -1, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 12, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0, "QuickPaint": -1, "PicturePos": 9, "CaptionStyle": 1}, [
        ["VideoSoftElastic", "b_Exit", {"BackColor": 0, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 3315, "Height": 705, "TabIndex": 7, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0, "QuickPaint": -1, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Help", {"BackColor": 0, "ForeColor": 16777215, "Left": 3495, "Top": 0, "Width": 3300, "Height": 705, "TabIndex": 6, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0, "QuickPaint": -1, "PicturePos": 9}]
      ]],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 0, "Left": 3150, "Top": 1200, "Width": 3300, "Height": 3420, "TabIndex": 1, "AutoSizeChildren": 3, "BorderWidth": 0, "ChildSpacing": 12, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0, "PicturePos": 10}, [
        ["VideoSoftElastic", "b_Quit", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 2700, "Width": 3300, "Height": 705, "TabIndex": 16, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Quit Game", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304, "QuickPaint": -1, "PicturePos": 9}],
        ["VideoSoftElastic", "b_ShortCuts", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 1800, "Width": 3300, "Height": 705, "TabIndex": 15, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Shortcuts", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304, "QuickPaint": -1, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Configure", {"BackColor": 12582912, "ForeColor": 16777215, "Left": 0, "Top": 900, "Width": 3300, "Height": 720, "TabIndex": 11, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Configure Game", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 12582912, "QuickPaint": -1, "PicturePos": 9}],
        ["VideoSoftElastic", "b_New", {"BackColor": 16711680, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 3300, "Height": 720, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "New Game", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 16711680, "PicturePos": 9}]
      ]],
      ["Label", "Label2", {"ForeColor": 65535, "Left": 5790, "Top": 6060, "Width": 3345, "Height": 690, "TabIndex": 14, "Alignment": 2, "BackStyle": 0}],
      ["Label", "Label1", {"ForeColor": 65535, "Left": 60, "Top": 810, "Width": 3345, "Height": 690, "TabIndex": 13, "Alignment": 2, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { b_Sound, FillElastic, VSElastic3, b_Exit, b_Help, b_Quit } = me.controls;
    const { VSElastic2, b_ShortCuts, b_Configure, b_New, Label2 } = me.controls;
    const { Label1 } = me.controls;
    const HOURGLASS = 11;
    const LIGHT_GRAY = 12632256;
    const ARROW_CURSOR = 1;
    let buttonUpColor = 0;

    async function confirmAbandonGame(action) {
        frm_BoxYesNo.FillElastic.Caption = "\n" + "WARNING:  There is no saving in Gazillionaire Unchained. If you " + action + " now, this game is gone for good. Are you sure?";
        await frm_BoxYesNo.Show(1);
        const confirmed = frm_BoxYesNo.Tag == "YES";
        await Unload(frm_BoxYesNo);
        return confirmed;
    }

    async function b_Configure_Click() {
        me.MousePointer = HOURGLASS;
        await frm_Config.Show(1);
        me.MousePointer = ARROW_CURSOR;
    }

    function b_Configure_MouseDown(Button, Shift, X, Y) {
        b_Configure.BackColor = LIGHT_GRAY;
    }

    function b_Configure_MouseUp(Button, Shift, X, Y) {
        b_Configure.BackColor = 0xC00000;
    }

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_Exit_MouseDown(Button, Shift, X, Y) {
        b_Exit.BackColor = LIGHT_GRAY;
    }

    function b_Exit_MouseUp(Button, Shift, X, Y) {
        b_Exit.BackColor = buttonUpColor;
    }

    async function b_Help_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box1.FillElastic.Caption = "Help (File Options)";
        frm_Box1.b_Message.Caption = "From the FILE OPTIONS menu, you can start a new game, quit Gazillionaire, activate the shortcuts, or configure the game to your system. There is no saving: every game is played to the end.";
        await frm_Box1.Show(1);
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = LIGHT_GRAY;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = buttonUpColor;
    }

    async function b_New_Click() {
        me.MousePointer = HOURGLASS;
        if (await confirmAbandonGame("start a new game")) {
            FillElastic.Visible = 0;
            await frm_BeginGame.Show();
            await Unload(me);
        }
        me.MousePointer = ARROW_CURSOR;
    }

    function b_New_MouseDown(Button, Shift, X, Y) {
        b_New.BackColor = LIGHT_GRAY;
    }

    function b_New_MouseUp(Button, Shift, X, Y) {
        b_New.BackColor = 0xFF0000;
    }

    async function b_Quit_Click() {
        if (await confirmAbandonGame("quit")) {
            FillElastic.Visible = 0;
            End();
        }
    }

    function b_Quit_MouseDown(Button, Shift, X, Y) {
        b_Quit.BackColor = LIGHT_GRAY;
    }

    function b_Quit_MouseUp(Button, Shift, X, Y) {
        b_Quit.BackColor = 0x400000;
    }

    async function b_ShortCuts_Click() {
        me.MousePointer = HOURGLASS;
        if (game.complexity >= game.unlockExplore || game.tutorialMode == 0) {
            await frm_Quick.Show();
            await Unload(me);
        } else {
            frm_Box1.FillElastic.Caption = "Shortcuts";
            frm_Box1.b_Message.Caption = "\n" + "You cannot activate any of the shortcuts until you are finished with the TUTORIAL.";
            await frm_Box1.Show(1);
        }
    }

    function b_ShortCuts_MouseDown(Button, Shift, X, Y) {
        b_ShortCuts.BackColor = LIGHT_GRAY;
    }

    function b_ShortCuts_MouseUp(Button, Shift, X, Y) {
        b_ShortCuts.BackColor = 0x400000;
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
        FillElastic.Picture = LoadPicture(Trim(paths.imageDir) + "STARS3.BMP");
    }

    function Label1_Click() {
        Label1.Caption = "Love it or leave it!";
    }

    function Label2_Click() {
        Label2.Caption = "No, no, no, not here... Keep trying.";
    }

    return {
        b_Configure_Click, b_Configure_MouseDown, b_Configure_MouseUp,
        b_Exit_Click, b_Exit_MouseDown, b_Exit_MouseUp,
        b_Help_Click, b_Help_MouseDown, b_Help_MouseUp,
        b_New_Click, b_New_MouseDown, b_New_MouseUp,
        b_Quit_Click, b_Quit_MouseDown, b_Quit_MouseUp,
        b_ShortCuts_Click, b_ShortCuts_MouseDown, b_ShortCuts_MouseUp,
        Form_Activate, Form_KeyPress, Form_Load, Label1_Click, Label2_Click,
    };
});
