// Originally translated from src/BOXCOL1.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_BoxCol1",
  ["Form", "frm_BoxCol1", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "BackColor": 0, "Left": 1470, "Top": 1485, "Width": 5955, "Height": 5940, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form3", "KeyPreview": -1, "ClientLeft": 1470, "ClientTop": 1485, "ClientWidth": 5955, "ClientHeight": 5940}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 5955, "Height": 5940, "TabIndex": 0, "FontName": "Arial", "FontSize": 24, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 5, "BevelOuter": 1, "BevelInnerWidth": 5, "BevelOuterWidth": 4, "Caption": "Warehouse on Each Planet", "CaptionPos": 3, "IntBkg": 16744576, "PicturePos": 10, "CaptionStyle": 2}, [
      ["VideoSoftElastic", "VSElastic1", {"BackColor": 16777088, "Left": 945, "Top": 1200, "Width": 4185, "Height": 3780, "TabIndex": 3, "AutoSizeChildren": 7, "BorderWidth": 20, "ChildSpacing": 12, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 20, "BevelOuterWidth": 0, "IntBkg": 16777088}, [
        ["Label", "b_Col1", {"Caption": "Please alert either Steve or Naomi by sending email to bugs@lavamind.com telling them that an error has occurred in frm_BoxCol1.   Thanks!!!!", "BackColor": 12632256, "Left": 450, "Top": 165, "Width": 915, "Height": 3450, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 4, "BackStyle": 0}],
        ["Label", "b_Col2", {"Caption": "Please alert either Steve or Naomi by sending email to bugs@lavamind.com telling them that an error has occurred in frm_BoxCol1.   Thanks!!!!", "BackColor": 12632256, "Left": 1500, "Top": 165, "Width": 2520, "Height": 3450, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 2, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "b_Exit", {"BackColor": 12632256, "Left": 2085, "Top": 5100, "Width": 1845, "Height": 645, "TabIndex": 1, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 1, "BevelOuter": 1, "BevelOuterWidth": 5, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 10}]
    ]]
  ]],
function (me) {
    const { FillElastic, VSElastic1, b_Col1, b_Col2, b_Exit } = me.controls;
    const HOURGLASS = 11;
    const WHITE = 16777215;
    const LIGHT_GRAY = 12632256;
    const ARROW_CURSOR = 1;

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        await Unload(me);
    }

    function b_Exit_MouseDown(Button, Shift, X, Y) {
        b_Exit.BackColor = WHITE;
    }

    function b_Exit_MouseUp(Button, Shift, X, Y) {
        b_Exit.BackColor = LIGHT_GRAY;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 32 || KeyAscii == 27) {
            await b_Exit_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        if (me.WindowState == 0) {
            me.Move((Screen.Width - me.Width) / 2, (Screen.Height - me.Height) / 2);
        }
    }

    return {
        b_Exit_Click, b_Exit_MouseDown, b_Exit_MouseUp, Form_Activate,
        Form_KeyPress, Form_Load,
    };
});
