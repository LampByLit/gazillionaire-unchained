// Originally translated from src/BOX1SQR.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Box1Sqr",
  ["Form", "frm_Box1Sqr", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "BackColor": 0, "Left": 240, "Top": 960, "Width": 8490, "Height": 5325, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 240, "ClientTop": 960, "ClientWidth": 8490, "ClientHeight": 5325}, [
    ["VideoSoftElastic", "b_Container", {"BackColor": 4194304, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
      ["MMControl", "b_Sound", {"Left": 4620, "Top": 0, "Width": 3540, "Height": 330, "TabIndex": 7, "Visible": 0}],
      ["VideoSoftElastic", "b_ImageContainer", {"BackColor": 0, "ForeColor": 16777215, "Left": 2760, "Top": 240, "Width": 3975, "Height": 3675, "TabIndex": 6, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 1, "BorderWidth": 20, "ChildSpacing": 2, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 20, "CaptionPos": 5, "IntBkg": 0}, [
        ["Image", "Image1", {"Left": 300, "Top": 300, "Width": 3375, "Height": 3075, "Stretch": -1}]
      ]],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 900, "Top": 6240, "Width": 7815, "Height": 495, "TabIndex": 3, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "CaptionPos": 4, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "b_OK", {"BackColor": 4210752, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 2610, "Height": 495, "TabIndex": 1, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "OK", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4210752}],
        ["VideoSoftElastic", "b_Yes", {"BackColor": 4210752, "ForeColor": 16777215, "Left": 2610, "Top": 0, "Width": 2610, "Height": 495, "TabIndex": 5, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "YES", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4210752}],
        ["VideoSoftElastic", "b_No", {"BackColor": 4210752, "ForeColor": 16777215, "Left": 5220, "Top": 0, "Width": 2595, "Height": 495, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "NO", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4210752}]
      ]],
      ["Label", "b_Message", {"Caption": "This is the Event Box", "ForeColor": 16777215, "Left": 900, "Top": 4155, "Width": 7815, "Height": 1890, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 2, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { b_Container, b_Sound, b_ImageContainer, Image1, VSElastic3, b_OK, b_Yes, b_No } = me.controls;
    const { b_Message } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;

    function b_No_Click() {
        me.MousePointer = HOURGLASS;
        me.Tag = "NO";
        b_Container.Visible = 0;
        me.Hide();
    }

    function b_No_MouseDown(Button, Shift, X, Y) {
        me.b_No.BackColor = 0xC0C0C0;
    }

    function b_No_MouseUp(Button, Shift, X, Y) {
        me.b_No.BackColor = 0x404040;
    }

    async function b_OK_Click() {
        me.MousePointer = HOURGLASS;
        b_Container.Visible = 0;
        await Unload(me);
    }

    function b_OK_MouseDown(Button, Shift, X, Y) {
        me.b_OK.BackColor = 0xC0C0C0;
    }

    function b_OK_MouseUp(Button, Shift, X, Y) {
        me.b_OK.BackColor = 0x404040;
    }

    function b_Yes_Click() {
        me.MousePointer = HOURGLASS;
        me.Tag = "YES";
        b_Container.Visible = 0;
        me.Hide();
    }

    function b_Yes_MouseDown(Button, Shift, X, Y) {
        me.b_Yes.BackColor = 0xC0C0C0;
    }

    function b_Yes_MouseUp(Button, Shift, X, Y) {
        me.b_Yes.BackColor = 0x404040;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            if (b_OK.Visible == -1) {
                await b_OK_Click();
            }
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        me.Tag = "NO";
        me.MousePointer = ARROW_CURSOR;
    }

    function Form_QueryUnload(Cancel, UnloadMode) {
        me.MousePointer = HOURGLASS;
    }

    return {
        b_No_Click, b_No_MouseDown, b_No_MouseUp, b_OK_Click,
        b_OK_MouseDown, b_OK_MouseUp, b_Yes_Click, b_Yes_MouseDown,
        b_Yes_MouseUp, Form_KeyPress, Form_Load, Form_QueryUnload,
    };
});
