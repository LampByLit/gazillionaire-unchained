// Originally translated from src/BUYSELL.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_BuySell",
  ["Form", "frm_BuySell", {"BorderStyle": 1, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "Caption": "Buy/Sell Commodities", "BackColor": 0, "Left": 345, "Top": 3795, "Width": 8985, "Height": 1200, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 345, "ClientTop": 3795, "ClientWidth": 8985, "ClientHeight": 1200}, [
    ["VideoSoftElastic", "VSElastic1", {"BackColor": 12632256, "Left": 0, "Top": 0, "Width": 8985, "Height": 1245, "TabIndex": 0, "AutoSizeChildren": 1, "BevelInner": 1, "BevelInnerWidth": 5}, [
      ["VideoSoftElastic", "b_Buy", {"BackColor": 16777088, "Left": 90, "Top": 90, "Width": 1695, "Height": 1065, "TabIndex": 5, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Caption": "Buy", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 16777088}],
      ["VideoSoftElastic", "b_BuyMax", {"BackColor": 16776960, "Left": 1875, "Top": 90, "Width": 1695, "Height": 1065, "TabIndex": 4, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Caption": "Buy Max", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 16776960}],
      ["VideoSoftElastic", "b_Sell", {"BackColor": 12632064, "Left": 3660, "Top": 90, "Width": 1695, "Height": 1065, "TabIndex": 3, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Caption": "Sell", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 12632064}],
      ["VideoSoftElastic", "b_SellMax", {"BackColor": 8421376, "Left": 5445, "Top": 90, "Width": 1680, "Height": 1065, "TabIndex": 2, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Caption": "Sell Max", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 8421376}],
      ["VideoSoftElastic", "b_Cancel", {"BackColor": 4210688, "Left": 7215, "Top": 90, "Width": 1680, "Height": 1065, "TabIndex": 1, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Caption": "Cancel", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4210688}]
    ]]
  ]],
function (me) {
    const { VSElastic1, b_Buy, b_BuyMax, b_Sell, b_SellMax, b_Cancel } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;

    function b_Buy_Click() {
        me.Tag = "BUY";
        me.MousePointer = HOURGLASS;
        me.Hide();
    }

    function b_Buy_MouseDown(Button, Shift, X, Y) {
        me.b_Buy.BackColor = 0xFFFFC0;
    }

    function b_Buy_MouseUp(Button, Shift, X, Y) {
        me.b_Buy.BackColor = 0xFFFF80;
    }

    function b_BuyMax_Click() {
        me.Tag = "BUYMAX";
        me.MousePointer = HOURGLASS;
        me.Hide();
    }

    function b_BuyMax_MouseDown(Button, Shift, X, Y) {
        me.b_BuyMax.BackColor = 0xFFFF80;
    }

    function b_BuyMax_MouseUp(Button, Shift, X, Y) {
        me.b_BuyMax.BackColor = 0xFFFF00;
    }

    function b_Cancel_Click() {
        me.Tag = "CANCEL";
        me.MousePointer = HOURGLASS;
        me.Hide();
    }

    function b_Cancel_MouseDown(Button, Shift, X, Y) {
        me.b_Cancel.BackColor = 0x808000;
    }

    function b_Cancel_MouseUp(Button, Shift, X, Y) {
        me.b_Cancel.BackColor = 0x404000;
    }

    function b_Sell_Click() {
        me.Tag = "SELL";
        me.MousePointer = HOURGLASS;
        me.Hide();
    }

    function b_Sell_MouseDown(Button, Shift, X, Y) {
        me.b_Sell.BackColor = 0xFFFF00;
    }

    function b_Sell_MouseUp(Button, Shift, X, Y) {
        me.b_Sell.BackColor = 0xC0C000;
    }

    function b_SellMax_Click() {
        me.Tag = "SELLMAX";
        me.MousePointer = HOURGLASS;
        me.Hide();
    }

    function b_SellMax_MouseDown(Button, Shift, X, Y) {
        me.b_SellMax.BackColor = 0xC0C000;
    }

    function b_SellMax_MouseUp(Button, Shift, X, Y) {
        me.b_SellMax.BackColor = 0x808000;
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
        b_Buy_Click, b_Buy_MouseDown, b_Buy_MouseUp, b_BuyMax_Click,
        b_BuyMax_MouseDown, b_BuyMax_MouseUp, b_Cancel_Click, b_Cancel_MouseDown,
        b_Cancel_MouseUp, b_Sell_Click, b_Sell_MouseDown, b_Sell_MouseUp,
        b_SellMax_Click, b_SellMax_MouseDown, b_SellMax_MouseUp, Form_Activate,
        Form_KeyPress,
    };
});
