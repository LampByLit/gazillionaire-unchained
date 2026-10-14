// Originally translated from src/YESNOBOX.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_YesNoBox",
  ["Form", "frm_YesNoBox", {"BorderStyle": 1, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Utilities Message Box", "BackColor": 0, "Left": 930, "Top": 1575, "Width": 4575, "Height": 3585, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form3", "KeyPreview": -1, "ClientLeft": 930, "ClientTop": 1575, "ClientWidth": 4575, "ClientHeight": 3585}, [
    ["VideoSoftElastic", "VSElastic1", {"BackColor": 65535, "Left": 0, "Top": 0, "Width": 4575, "Height": 3585, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 10, "AccessKey": -1, "IntBkg": 65535}, [
      ["VideoSoftElastic", "b_No", {"BackColor": 8388608, "ForeColor": 65535, "Left": 2430, "Top": 2520, "Width": 1425, "Height": 735, "TabIndex": 3, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "NO", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 8388608}],
      ["VideoSoftElastic", "b_Yes", {"BackColor": 8388608, "ForeColor": 65535, "Left": 720, "Top": 2520, "Width": 1395, "Height": 735, "TabIndex": 2, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "YES", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 8388608}],
      ["VideoSoftElastic", "b_Message", {"BackColor": 65535, "ForeColor": 8388608, "Left": 555, "Top": 360, "Width": 3480, "Height": 1935, "TabIndex": 1, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "Are you sure you want to QUIT the game?", "CaptionPos": 0, "IntBkg": 65535}]
    ]]
  ]],
function (me) {
    const { VSElastic1, b_No, b_Yes, b_Message } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;

    function b_No_Click() {
        me.MousePointer = HOURGLASS;
        me.Tag = "NO";
        me.Hide();
    }

    function b_No_MouseDown(Button, Shift, X, Y) {
        b_No.BackColor = 0xFF0000;
    }

    function b_No_MouseUp(Button, Shift, X, Y) {
        b_No.BackColor = 0x800000;
    }

    function b_Yes_Click() {
        me.MousePointer = HOURGLASS;
        me.Tag = "YES";
        me.Hide();
    }

    function b_Yes_MouseDown(Button, Shift, X, Y) {
        b_Yes.BackColor = 0xFF0000;
    }

    function b_Yes_MouseUp(Button, Shift, X, Y) {
        b_Yes.BackColor = 0x800000;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    function Form_Load() {
        me.Tag = "NO";
        if (me.WindowState == 0) {
            me.Move((Screen.Width - me.Width) / 2, (Screen.Height - me.Height) / 2);
        }
    }

    return {
        b_No_Click, b_No_MouseDown, b_No_MouseUp, b_Yes_Click,
        b_Yes_MouseDown, b_Yes_MouseUp, Form_Activate, Form_Load,
    };
});
