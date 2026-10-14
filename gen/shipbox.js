// Originally translated from src/SHIPBOX.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_ShipInfoBox",
  ["Form", "frm_ShipInfoBox", {"BorderStyle": 1, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Ship Info Box", "BackColor": 0, "Left": 900, "Top": 2175, "Width": 6990, "Height": 4425, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 900, "ClientTop": 2175, "ClientWidth": 6990, "ClientHeight": 4425}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 6990, "Height": 4425, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 5, "BevelOuter": 6, "BevelInnerWidth": 2, "BevelOuterWidth": 5, "IntBkg": 16744576}, [
      ["VideoSoftElastic", "b_Container", {"BackColor": 16777088, "Left": 690, "Top": 420, "Width": 5535, "Height": 2850, "TabIndex": 2, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 1, "BorderWidth": 12, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "CaptionPos": 0, "IntBkg": 16777088}, [
        ["Label", "b_Message", {"Caption": "Ship Info Box", "Left": 180, "Top": 180, "Width": 5175, "Height": 2490, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 3, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "b_OK", {"BackColor": 12632256, "ForeColor": 0, "Left": 2415, "Top": 3555, "Width": 2085, "Height": 555, "TabIndex": 1, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "OK", "CaptionPos": 4, "AccessKey": -1}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Container, b_Message, b_OK } = me.controls;
    const HOURGLASS = 11;
    const WHITE = 16777215;
    const LIGHT_GRAY = 12632256;
    const ARROW_CURSOR = 1;

    async function b_OK_Click() {
        me.MousePointer = HOURGLASS;
        await Unload(me);
    }

    function b_OK_MouseDown(Button, Shift, X, Y) {
        b_OK.BackColor = WHITE;
    }

    function b_OK_MouseUp(Button, Shift, X, Y) {
        b_OK.BackColor = LIGHT_GRAY;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_OK_Click();
        }
    }

    function Form_Load() {
        if (me.WindowState == 0) {
            me.Move((Screen.Width - me.Width) / 2, (Screen.Height - me.Height) / 2);
        }
    }

    return {
        b_OK_Click, b_OK_MouseDown, b_OK_MouseUp, Form_Activate,
        Form_KeyPress, Form_Load,
    };
});
