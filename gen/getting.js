// Originally translated from src/GETTING.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_GettingStarted",
  ["Form", "frm_GettingStarted", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Getting Started", "BackColor": 0, "Left": 285, "Top": 1335, "Width": 8205, "Height": 5430, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 285, "ClientTop": 1335, "ClientWidth": 8205, "ClientHeight": 5430}, [
    ["VideoSoftElastic", "VSElastic1", {"BackColor": 16744576, "ForeColor": 16776960, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "CaptionPos": 3, "IntBkg": 16744576}, [
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 4194304, "ForeColor": 16776960, "Left": 345, "Top": 135, "Width": 8955, "Height": 1200, "TabIndex": 3, "FontName": "Arial", "FontSize": 18, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "To get started, just follow these 4 easy steps:", "CaptionPos": 4, "IntBkg": 4194304}],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 16777088, "Left": 345, "Top": 1440, "Width": 8955, "Height": 4620, "TabIndex": 2, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 3, "BorderWidth": 25, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 8, "BevelOuterWidth": 5, "CaptionPos": 3, "ShadowColor": 8421376, "IntBkg": 16777088}, [
        ["Label", "Label3", {"ForeColor": 0, "Left": 375, "Top": 375, "Width": 8205, "Height": 900, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 4, "BackStyle": 0}],
        ["Label", "Label5", {"ForeColor": 0, "Left": 375, "Top": 3345, "Width": 8205, "Height": 900, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 5, "BackStyle": 0}],
        ["Label", "Label4", {"ForeColor": 0, "Left": 375, "Top": 2355, "Width": 8205, "Height": 900, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 6, "BackStyle": 0}],
        ["Label", "Label2", {"ForeColor": 0, "Left": 375, "Top": 1365, "Width": 8205, "Height": 900, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 7, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "b_Exit", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 345, "Top": 6225, "Width": 8955, "Height": 555, "TabIndex": 1, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}]
    ]]
  ]],
function (me) {
    const { VSElastic1, VSElastic2, VSElastic3, Label3, Label5, Label4, Label2, b_Exit } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_Exit_MouseDown(Button, Shift, X, Y) {
        b_Exit.BackColor = 0x800000;
    }

    function b_Exit_MouseUp(Button, Shift, X, Y) {
        b_Exit.BackColor = 0x400000;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_Exit_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        Label3.Caption = "1)  Your goal is to build a successful business trading commodities between the 7 planets of Kukubia.";
        Label2.Caption = "2)  To begin with, you must go to the MARKETPLACE and buy the commodities which are at a low price.";
        Label4.Caption = "3)  Once your ship is filled with cargo, you are ready to leave.  Go to JOURNEY and click on the planet you wish to travel to.";
        Label5.Caption = "4)  When you arrive on the new planet, go to MARKETPLACE.  If the MARKET PRICE is higher than the PRICE YOU PAID, you can sell your goods for a profit.";
    }

    return {
        b_Exit_Click, b_Exit_MouseDown, b_Exit_MouseUp, Form_Activate,
        Form_KeyPress, Form_Load,
    };
});
