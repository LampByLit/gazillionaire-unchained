// Originally translated from src/HELP.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Help",
  ["Form", "frm_Help", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Help", "BackColor": 0, "Left": 1410, "Top": 2025, "Width": 7275, "Height": 6225, "WindowState": 2, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form3", "KeyPreview": -1, "ClientLeft": 1410, "ClientTop": 2025, "ClientWidth": 7275, "ClientHeight": 6225}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "FontName": "Arial", "FontSize": 24, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 4, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 4, "Caption": "Title", "CaptionPos": 3, "IntBkg": 16744576, "PicturePos": 10, "CaptionStyle": 2}, [
      ["MMControl", "b_Sound", {"Left": 5910, "Top": 60, "Width": 3540, "Height": 330, "TabIndex": 4, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic1", {"BackColor": 16777088, "Left": 480, "Top": 690, "Width": 8640, "Height": 5175, "TabIndex": 3, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "IntBkg": 16777088}, [
        ["Label", "b_Message", {"Caption": "Please alert either Steve or Naomi by sending email to bugs@lavamind.com telling them that an error has occurred in frm_Help.   Thanks!!!!", "BackColor": 12632256, "Left": 270, "Top": 270, "Width": 8265, "Height": 4785, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 2, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "b_Exit", {"BackColor": 12632256, "ForeColor": 0, "Left": 480, "Top": 6090, "Width": 8640, "Height": 645, "TabIndex": 1, "FontName": "Arial", "FontSize": 15, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 10}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, VSElastic1, b_Message, b_Exit } = me.controls;
    const HOURGLASS = 11;
    const WHITE = 16777215;
    const LIGHT_GRAY = 12632256;

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await Unload(me);
    }

    function b_Exit_MouseDown(Button, Shift, X, Y) {
        b_Exit.BackColor = WHITE;
    }

    function b_Exit_MouseUp(Button, Shift, X, Y) {
        b_Exit.BackColor = LIGHT_GRAY;
    }

    function Form_Activate() {
        const ARROW_CURSOR = 1;
        me.MousePointer = ARROW_CURSOR;
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
    }

    return {
        b_Exit_Click, b_Exit_MouseDown, b_Exit_MouseUp, Form_Activate,
        Form_Load,
    };
});
