// Originally translated from src/BOXPORT.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_BoxPort",
  ["Form", "frm_BoxPort", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "BackColor": 0, "Left": 705, "Top": 1785, "Width": 7860, "Height": 4860, "WindowState": 2, "FontName": "Arial", "FontSize": 13.5, "FontBold": 0, "FontItalic": -1, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "FillStyle": 0, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 705, "ClientTop": 1785, "ClientWidth": 7860, "ClientHeight": 4860}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 0, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0, "PicturePos": 9}, [
      ["MMControl", "b_Sound", {"Left": 600, "Top": 90, "Width": 3540, "Height": 330, "TabIndex": 7, "Visible": 0}],
      ["VideoSoftElastic", "b_OK", {"BackColor": 12632256, "Left": 6870, "Top": 6270, "Width": 1575, "Height": 510, "TabIndex": 6, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 5, "Caption": "OK", "CaptionPos": 4, "PicturePos": 9, "ForeColorDisabled": 0}],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 0, "Left": 5730, "Top": 6270, "Width": 3840, "Height": 510, "TabIndex": 3, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 1, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0}, [
        ["VideoSoftElastic", "b_No", {"BackColor": 12632256, "Left": 1935, "Top": 0, "Width": 1905, "Height": 510, "TabIndex": 5, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 5, "Caption": "NO", "CaptionPos": 4, "PicturePos": 9, "ForeColorDisabled": 0}],
        ["VideoSoftElastic", "b_Yes", {"BackColor": 12632256, "Left": 0, "Top": 0, "Width": 1920, "Height": 510, "TabIndex": 4, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 5, "Caption": "YES", "CaptionPos": 4, "PicturePos": 9, "ForeColorDisabled": 0}]
      ]],
      ["VideoSoftElastic", "b_Title", {"BackColor": 0, "ForeColor": 12632256, "Left": 5700, "Top": 15, "Width": 3885, "Height": 900, "TabIndex": 1, "FontName": "Arial", "FontSize": 18, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "Error in frm_BoxPort", "CaptionPos": 4, "IntBkg": 0, "PicturePos": 10}],
      ["VideoSoftElastic", "b_Image", {"BackColor": 0, "Left": 0, "Top": 15, "Width": 5685, "Height": 6885, "TabIndex": 2, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0, "PicturePos": 9}],
      ["Label", "b_Message", {"Caption": "error in frm_boxPort", "BackColor": 0, "ForeColor": 12632256, "Left": 5730, "Top": 1020, "Width": 3855, "Height": 5235, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 8}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, b_OK, VSElastic2, b_No, b_Yes, b_Title, b_Image } = me.controls;
    const { b_Message } = me.controls;
    const HOURGLASS = 11;
    const WHITE = 16777215;
    const LIGHT_GRAY = 12632256;
    const ARROW_CURSOR = 1;

    function b_No_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        me.Tag = "NO";
        me.Hide();
    }

    function b_No_MouseDown(Button, Shift, X, Y) {
        b_No.BackColor = WHITE;
    }

    function b_No_MouseUp(Button, Shift, X, Y) {
        b_No.BackColor = LIGHT_GRAY;
    }

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

    function b_Yes_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
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

    async function Form_KeyPress(KeyAscii) {
        if (b_OK.Visible == -1) {
            if (KeyAscii == 32 || KeyAscii == 27 || KeyAscii == 13) {
                await b_OK_Click();
                return;
            }
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        me.Tag = "NO";
    }

    function Form_QueryUnload(Cancel, UnloadMode) {
        me.MousePointer = HOURGLASS;
    }

    function Form_Unload(Cancel) {
        b_Sound.Command = "Close";
    }

    return {
        b_No_Click, b_No_MouseDown, b_No_MouseUp, b_OK_Click,
        b_OK_MouseDown, b_OK_MouseUp, b_Yes_Click, b_Yes_MouseDown,
        b_Yes_MouseUp, Form_Activate, Form_KeyPress, Form_Load,
        Form_QueryUnload, Form_Unload,
    };
});
