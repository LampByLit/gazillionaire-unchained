// Originally translated from src/TITLE.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_TitlePage",
  ["Form", "frm_TitlePage", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Title Page", "BackColor": 0, "ForeColor": 12632256, "Left": 1635, "Top": 510, "Width": 7365, "Height": 5265, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 1635, "ClientTop": 510, "ClientWidth": 7365, "ClientHeight": 5265}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 0, "ForeColor": 16711680, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "FontName": "Times New Roman", "FontSize": 69.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "CaptionPos": 5, "AccessKey": -1, "IntBkg": 0, "PicturePos": 9}, [
      ["MMControl", "b_Sound", {"Left": 1380, "Top": 120, "Width": 3540, "Height": 330, "TabIndex": 1, "Visible": 0}],
      ["Label", "Label4", {"Caption": "(click to continue)", "ForeColor": 16777215, "Left": 7650, "Top": 6570, "Width": 1875, "Height": 255, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 5, "Alignment": 1, "BackStyle": 0}],
      ["Label", "Label3", {"Caption": "THE GAME OF INTERGALACTIC WHEELIN' AND DEALIN'", "ForeColor": 16777215, "Left": 2340, "Top": 3060, "Width": 5265, "Height": 255, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 4, "Alignment": 2, "BackStyle": 0}],
      ["Label", "Label2", {"ForeColor": 16777215, "Left": 3180, "Top": 5175, "Width": 3555, "Height": 1695, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 3, "Alignment": 2, "BackStyle": 0}],
      ["Label", "Label1", {"Caption": "TM", "ForeColor": 16777215, "Left": 9090, "Top": 360, "Width": 525, "Height": 195, "FontName": "MS Sans Serif", "FontSize": 6, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 2, "Alignment": 2, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, Label4, Label3, Label2, Label1 } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;

    async function goToIntro() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await frm_Intro.Show();
        await Unload(me);
    }

    async function FillElastic_Click() {
        await goToIntro();
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        await goToIntro();
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        FillElastic.Picture = LoadPicture(Trim(paths.imageDir) + "title.bmp");
        Label2.Caption = "Produced, Designed and Programmed" + "\n" + "by" + "\n" + "Naomi Kokubo" + "\n" + "Steven Hoffman" + "\n" + "\n" + "Version 1/1/97" + "\n" + "Copyright (c) 1994 - 1997 LavaMind." + "\n" + "All rights reserved.";
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "pyke.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
    }

    async function Label1_Click() {
        await goToIntro();
    }

    async function Label2_Click() {
        await goToIntro();
    }

    async function Label3_Click() {
        await goToIntro();
    }

    async function Label4_Click() {
        await goToIntro();
    }

    return {
        goToIntro, FillElastic_Click, Form_Activate, Form_KeyPress,
        Form_Load, Label1_Click, Label2_Click, Label3_Click,
        Label4_Click,
    };
});
