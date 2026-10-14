// Originally translated from src/INTRO.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Intro",
  ["Form", "frm_Intro", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Introduction to Game", "BackColor": 0, "Left": 1050, "Top": 2130, "Width": 6105, "Height": 4890, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 1050, "ClientTop": 2130, "ClientWidth": 6105, "ClientHeight": 4890}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 0, "ForeColor": 65535, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0, "PicturePos": 9}, [
      ["MMControl", "b_Sound", {"Left": 5640, "Top": 180, "Width": 3540, "Height": 330, "TabIndex": 1, "Visible": 0}],
      ["Label", "Label6", {"Caption": "(click to continue)", "ForeColor": 16776960, "Left": 7680, "Top": 6570, "Width": 1875, "Height": 255, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 7, "Alignment": 1, "BackStyle": 0}],
      ["Label", "Label3", {"ForeColor": 65535, "Left": 5580, "Top": 5280, "Width": 3885, "Height": 690, "TabIndex": 6, "Alignment": 2, "BackStyle": 0}],
      ["Label", "Label5", {"ForeColor": 16776960, "Left": 1320, "Top": 840, "Width": 6960, "Height": 810, "FontName": "Arial", "FontSize": 30, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 2, "Alignment": 2, "BackStyle": 0}],
      ["Label", "Label4", {"ForeColor": 16776960, "Left": 720, "Top": 3990, "Width": 8175, "Height": 1065, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 3, "BackStyle": 0}],
      ["Label", "Label2", {"ForeColor": 16776960, "Left": 720, "Top": 1920, "Width": 8175, "Height": 1110, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 4, "BackStyle": 0}],
      ["Label", "Label1", {"BackColor": 16711935, "ForeColor": 16776960, "Left": 720, "Top": 3060, "Width": 8175, "Height": 915, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 5, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, Label6, Label3, Label5, Label4, Label2, Label1 } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;

    async function goToBeginGame() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await frm_BeginGame.Show();
        await Unload(me);
    }

    async function FillElastic_Click() {
        await goToBeginGame();
    }

    function Form_Activate() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "mira.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        FillElastic.Picture = LoadPicture(Trim(paths.imageDir) + "planets.bmp");
        me.MousePointer = ARROW_CURSOR;
        Label2.Caption = "For the first time in 700 years, Emperor Dred Nicolson has granted you and a handful of other newly formed trading companies permission to operate inside the Kukubian Colonies.";
        Label1.Caption = "As president of a trading company, you must make a profit transporting essential commodities between the seven planets of Kukubia.";
        Label4.Caption = "Your goal is to build a trade empire by investing in larger ships, buying warehouses and skillfully out-maneuvering your competitors.";
    }

    async function Form_KeyPress(KeyAscii) {
        await goToBeginGame();
    }

    async function Label1_Click() {
        await goToBeginGame();
    }

    async function Label2_Click() {
        await goToBeginGame();
    }

    function Label3_Click() {
        Label3.Caption = "Don't worry. LavaMind loves you.";
    }

    async function Label4_Click() {
        await goToBeginGame();
    }

    async function Label5_Click() {
        await goToBeginGame();
    }

    async function Label6_Click() {
        await goToBeginGame();
    }

    return {
        goToBeginGame, FillElastic_Click, Form_Activate, Form_KeyPress,
        Label1_Click, Label2_Click, Label3_Click, Label4_Click,
        Label5_Click, Label6_Click,
    };
});
