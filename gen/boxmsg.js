// Originally translated from src/BOXMSG.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_MsgBox",
  ["Form", "frm_MsgBox", {"BorderStyle": 1, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "BackColor": 0, "Left": 2985, "Top": 2160, "Width": 4650, "Height": 3525, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form3", "KeyPreview": -1, "ClientLeft": 2985, "ClientTop": 2160, "ClientWidth": 4650, "ClientHeight": 3525}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 4194304, "ForeColor": 12632256, "Left": 0, "Top": 0, "Width": 4650, "Height": 3525, "TabIndex": 0, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 15, "BevelOuter": 6, "BevelInnerWidth": 5, "BevelOuterWidth": 10, "Caption": "Please alert either Steve or Naomi by sending email to bugs@lavamind.com telling them that an error has occurred in frm_MsgBox.   Thanks!!!!", "CaptionPos": 3, "IntBkg": 4194304, "PicturePos": 9}, [
      ["VideoSoftElastic", "b_OK", {"BackColor": 12632256, "Left": 1650, "Top": 2490, "Width": 1410, "Height": 705, "TabIndex": 1, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 9, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "OK", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 10}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_OK } = me.controls;
    const HOURGLASS = 11;
    const WHITE = 16777215;
    const LIGHT_GRAY = 12632256;
    const ARROW_CURSOR = 1;

    async function b_OK_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
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
        if (KeyAscii == 13 || KeyAscii == 32 || KeyAscii == 27) {
            await b_OK_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        if (me.WindowState == 0) {
            me.Move((Screen.Width - me.Width) / 2, (Screen.Height - me.Height) / 2);
        }
    }

    return {
        b_OK_Click, b_OK_MouseDown, b_OK_MouseUp, Form_Activate,
        Form_KeyPress, Form_Load,
    };
});
