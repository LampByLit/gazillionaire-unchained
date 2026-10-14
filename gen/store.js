// Originally translated from src/STORE.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Store",
  ["Form", "frm_Store", {"BorderStyle": 1, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "Caption": "Store Goods In/Take Goods Out of  Warehouse", "BackColor": 0, "Left": 270, "Top": 1635, "Width": 8985, "Height": 1230, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 270, "ClientTop": 1635, "ClientWidth": 8985, "ClientHeight": 1230}, [
    ["VideoSoftElastic", "VSElastic1", {"BackColor": 12632256, "Left": 0, "Top": 0, "Width": 8985, "Height": 1245, "TabIndex": 0, "AutoSizeChildren": 1, "BevelInner": 1, "BevelInnerWidth": 5}, [
      ["VideoSoftElastic", "b_Take", {"BackColor": 16777088, "Left": 90, "Top": 90, "Width": 1695, "Height": 1065, "TabIndex": 5, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Caption": "Take", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 16777088}],
      ["VideoSoftElastic", "b_TakeMax", {"BackColor": 16776960, "Left": 1875, "Top": 90, "Width": 1695, "Height": 1065, "TabIndex": 4, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Caption": "Take Max", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 16776960}],
      ["VideoSoftElastic", "b_Store", {"BackColor": 12632064, "Left": 3660, "Top": 90, "Width": 1695, "Height": 1065, "TabIndex": 3, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Caption": "Store", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 12632064}],
      ["VideoSoftElastic", "b_StoreMax", {"BackColor": 8421376, "Left": 5445, "Top": 90, "Width": 1680, "Height": 1065, "TabIndex": 2, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Caption": "Store Max", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 8421376}],
      ["VideoSoftElastic", "b_Cancel", {"BackColor": 4210688, "Left": 7215, "Top": 90, "Width": 1680, "Height": 1065, "TabIndex": 1, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Caption": "Cancel", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4210688}]
    ]]
  ]],
function (me) {
    const { VSElastic1, b_Take, b_TakeMax, b_Store, b_StoreMax, b_Cancel } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;

    function b_Cancel_Click() {
        me.Tag = "CANCEL";
        me.MousePointer = HOURGLASS;
        me.Hide();
    }

    function b_Cancel_MouseDown(Button, Shift, X, Y) {
        b_Cancel.BackColor = 0x808000;
    }

    function b_Cancel_MouseUp(Button, Shift, X, Y) {
        b_Cancel.BackColor = 0x404000;
    }

    function b_Store_Click() {
        me.Tag = "STORE";
        me.MousePointer = HOURGLASS;
        me.Hide();
    }

    function b_Store_MouseDown(Button, Shift, X, Y) {
        b_Store.BackColor = 0xFFFF00;
    }

    function b_Store_MouseUp(Button, Shift, X, Y) {
        b_Store.BackColor = 0xC0C000;
    }

    function b_StoreMax_Click() {
        me.Tag = "STOREMAX";
        me.MousePointer = HOURGLASS;
        me.Hide();
    }

    function b_StoreMax_MouseDown(Button, Shift, X, Y) {
        b_StoreMax.BackColor = 0xC0C000;
    }

    function b_StoreMax_MouseUp(Button, Shift, X, Y) {
        b_StoreMax.BackColor = 0x808000;
    }

    function b_Take_Click() {
        me.Tag = "TAKE";
        me.MousePointer = HOURGLASS;
        me.Hide();
    }

    function b_Take_MouseDown(Button, Shift, X, Y) {
        b_Take.BackColor = 0xFFFFC0;
    }

    function b_Take_MouseUp(Button, Shift, X, Y) {
        b_Take.BackColor = 0xFFFF80;
    }

    function b_TakeMax_Click() {
        me.Tag = "TAKEMAX";
        me.MousePointer = HOURGLASS;
        me.Hide();
    }

    function b_TakeMax_MouseDown(Button, Shift, X, Y) {
        b_TakeMax.BackColor = 0xFFFF80;
    }

    function b_TakeMax_MouseUp(Button, Shift, X, Y) {
        b_TakeMax.BackColor = 0xFFFF00;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            b_Cancel_Click();
        }
    }

    return {
        b_Cancel_Click, b_Cancel_MouseDown, b_Cancel_MouseUp, b_Store_Click,
        b_Store_MouseDown, b_Store_MouseUp, b_StoreMax_Click, b_StoreMax_MouseDown,
        b_StoreMax_MouseUp, b_Take_Click, b_Take_MouseDown, b_Take_MouseUp,
        b_TakeMax_Click, b_TakeMax_MouseDown, b_TakeMax_MouseUp, Form_Activate,
        Form_KeyPress,
    };
});
