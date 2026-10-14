// Originally translated from src/BOX2.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Box2",
  ["Form", "frm_Box2", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "BackColor": 0, "Left": 345, "Top": 120, "Width": 8655, "Height": 6825, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form3", "KeyPreview": -1, "ClientLeft": 345, "ClientTop": 120, "ClientWidth": 8655, "ClientHeight": 6825}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 8655, "Height": 6825, "TabIndex": 0, "FontName": "Arial", "FontSize": 24, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 5, "BevelOuter": 1, "BevelInnerWidth": 5, "BevelOuterWidth": 4, "Caption": "Tutorial", "CaptionPos": 3, "IntBkg": 16744576, "PicturePos": 10, "CaptionStyle": 2}, [
      ["VideoSoftElastic", "VSElastic1", {"BackColor": 16777088, "Left": 570, "Top": 945, "Width": 7515, "Height": 4815, "TabIndex": 3, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16777088}, [
        ["Label", "b_Message", {"Caption": "Please alert either Steve or Naomi by sending email to bugs@lavamind.com telling them that an error has occurred in frm_Box2.   Thanks!!!!", "BackColor": 12632256, "Left": 120, "Top": 150, "Width": 7365, "Height": 4620, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 2, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "b_Exit", {"BackColor": 12632256, "Left": 3540, "Top": 6000, "Width": 1620, "Height": 615, "TabIndex": 1, "FontName": "Arial", "FontSize": 15, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 1, "BevelOuter": 1, "BevelOuterWidth": 5, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 10}]
    ]]
  ]],
function (me) {
    const { FillElastic, VSElastic1, b_Message, b_Exit } = me.controls;
    const HOURGLASS = 11;
    const WHITE = 16777215;
    const LIGHT_GRAY = 12632256;
    const ARROW_CURSOR = 1;

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        await Unload(me);
    }

    function b_Exit_MouseDown(Button, Shift, X, Y) {
        b_Exit.BackColor = WHITE;
    }

    function b_Exit_MouseUp(Button, Shift, X, Y) {
        b_Exit.BackColor = LIGHT_GRAY;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 32 || KeyAscii == 27) {
            await b_Exit_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        if (me.WindowState == 0) {
            me.Move((Screen.Width - me.Width) / 2, (Screen.Height - me.Height) / 2);
        }
    }

    return {
        b_Exit_Click, b_Exit_MouseDown, b_Exit_MouseUp, Form_Activate,
        Form_KeyPress, Form_Load,
    };
});
