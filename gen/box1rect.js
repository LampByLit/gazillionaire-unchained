// Originally translated from src/BOX1RECT.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Box1Rect",
  ["Form", "frm_Box1Rect", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "BackColor": 0, "Left": 390, "Top": 3000, "Width": 7860, "Height": 5280, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 390, "ClientTop": 3000, "ClientWidth": 7860, "ClientHeight": 5280}, [
    ["VideoSoftElastic", "b_Container", {"BackColor": 4194304, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
      ["MMControl", "b_Sound", {"Left": 5520, "Top": 30, "Width": 3540, "Height": 330, "TabIndex": 8, "Visible": 0}],
      ["VideoSoftElastic", "b_ImageContainer", {"BackColor": 0, "ForeColor": 16777215, "Left": 2100, "Top": 210, "Width": 5415, "Height": 3645, "TabIndex": 6, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 25, "ChildSpacing": 2, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 20, "CaptionPos": 5, "IntBkg": 0}, [
        ["VideoSoftElastic", "b_ImageLable", {"BackColor": 0, "ForeColor": 16777215, "Left": 360, "Top": 3075, "Width": 4695, "Height": 195, "TabIndex": 7, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777215, "CaptionPos": 4, "IntBkg": 0}],
        ["Image", "Image1", {"Left": 360, "Top": 375, "Width": 4695, "Height": 2685, "Stretch": -1}]
      ]],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 600, "Top": 6195, "Width": 8415, "Height": 510, "TabIndex": 3, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "CaptionPos": 4, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "b_No", {"BackColor": 4210752, "ForeColor": 16777215, "Left": 5610, "Top": 0, "Width": 2805, "Height": 510, "TabIndex": 1, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "NO", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4210752}],
        ["VideoSoftElastic", "b_Yes", {"BackColor": 4210752, "ForeColor": 16777215, "Left": 2805, "Top": 0, "Width": 2805, "Height": 510, "TabIndex": 5, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "YES", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4210752}],
        ["VideoSoftElastic", "b_OK", {"BackColor": 4210752, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 2805, "Height": 510, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "OK", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4210752}]
      ]],
      ["Label", "b_Message", {"Caption": "This is the Event Box", "ForeColor": 16777215, "Left": 660, "Top": 4155, "Width": 8355, "Height": 1785, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 2, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { b_Container, b_Sound, b_ImageContainer, b_ImageLable, Image1, VSElastic3, b_No, b_Yes } = me.controls;
    const { b_OK, b_Message } = me.controls;
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
