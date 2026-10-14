// Originally translated from src/BOXYESNO.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_BoxYesNo",
  ["Form", "frm_BoxYesNo", {"BorderStyle": 1, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "BackColor": 0, "Left": 1755, "Top": 1590, "Width": 4650, "Height": 3945, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form3", "KeyPreview": -1, "ClientLeft": 1755, "ClientTop": 1590, "ClientWidth": 4650, "ClientHeight": 3945}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 4194304, "ForeColor": 12632256, "Left": 0, "Top": 0, "Width": 4650, "Height": 3945, "TabIndex": 0, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 15, "BevelOuter": 6, "BevelInnerWidth": 5, "BevelOuterWidth": 10, "FloodColor": 12632256, "Caption": "Please alert either Steve or Naomi by sending email to bugs@lavamind.com telling them that an error has occurred in frm_BoxYesNo.   Thanks!!!!", "CaptionPos": 3, "IntBkg": 4194304, "PicturePos": 9}, [
      ["VideoSoftElastic", "b_Yes", {"BackColor": 12632256, "Left": 660, "Top": 2730, "Width": 1410, "Height": 705, "TabIndex": 2, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 9, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Yes", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 10}],
      ["VideoSoftElastic", "b_No", {"BackColor": 12632256, "Left": 2550, "Top": 2730, "Width": 1410, "Height": 705, "TabIndex": 1, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 9, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "No", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 10}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Yes, b_No } = me.controls;
    const HOURGLASS = 11;
    const WHITE = 16777215;
    const LIGHT_GRAY = 12632256;
    const ARROW_CURSOR = 1;

    function b_No_Click() {
        me.MousePointer = HOURGLASS;
        me.Tag = "NO";
        me.Hide();
    }

    function b_No_MouseDown(Button, Shift, X, Y) {
        b_No.BackColor = WHITE;
    }

    function b_No_MouseUp(Button, Shift, X, Y) {
        b_No.BackColor = LIGHT_GRAY;
    }

    function b_Yes_Click() {
        me.MousePointer = HOURGLASS;
        me.Tag = "YES";
        me.Hide();
    }

    function b_Yes_MouseDown(Button, Shift, X, Y) {
        b_Yes.BackColor = WHITE;
    }

    function b_Yes_MouseUp(Button, Shift, X, Y) {
        b_Yes.BackColor = LIGHT_GRAY;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        if (me.WindowState == 0) {
            me.Move((Screen.Width - me.Width) / 2, (Screen.Height - me.Height) / 2);
        }
    }

    return {
        b_No_Click, b_No_MouseDown, b_No_MouseUp, b_Yes_Click,
        b_Yes_MouseDown, b_Yes_MouseUp, Form_Activate, Form_Load,
    };
});
