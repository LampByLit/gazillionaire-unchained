// Originally translated from src/EMAILNFO.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_EmailInfo",
  ["Form", "frm_EmailInfo", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Email Info Box", "BackColor": 0, "Left": 195, "Top": 1575, "Width": 7860, "Height": 4860, "WindowState": 2, "FontName": "MS Sans Serif", "FontSize": 12, "FontBold": -1, "FontItalic": -1, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 195, "ClientTop": 1575, "ClientWidth": 7860, "ClientHeight": 4860}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 0, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 2, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0, "PicturePos": 9, "ForeColorDisabled": 0}, [
      ["VideoSoftElastic", "b_OK", {"BackColor": 12632256, "Left": 6690, "Top": 6210, "Width": 1575, "Height": 540, "TabIndex": 10, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 5, "Caption": "OK", "CaptionPos": 4, "PicturePos": 9, "ForeColorDisabled": 0}],
      ["VideoSoftElastic", "b_Box3", {"BackColor": 0, "Left": 5310, "Top": 4740, "Width": 4245, "Height": 585, "TabIndex": 9, "AutoSizeChildren": 2, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "IntBkg": 0}, [
        ["TextBox", "b_TextBox3", {"BackColor": 16777215, "Left": 90, "Top": 60, "Width": 4095, "Height": 480, "Visible": 0, "FontName": "MS Sans Serif", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 1, "MaxLength": 50}]
      ]],
      ["VideoSoftElastic", "b_Message3", {"BackColor": 0, "ForeColor": 12632256, "Left": 5310, "Top": 3930, "Width": 4245, "Height": 735, "TabIndex": 8, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0, "PicturePos": 10}],
      ["VideoSoftElastic", "b_Box2", {"BackColor": 0, "Left": 5310, "Top": 3270, "Width": 4245, "Height": 585, "TabIndex": 7, "AutoSizeChildren": 2, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "IntBkg": 0}, [
        ["TextBox", "b_TextBox2", {"BackColor": 16777215, "Left": 75, "Top": 75, "Width": 4095, "Height": 480, "Visible": 0, "FontName": "MS Sans Serif", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 0, "MaxLength": 20}]
      ]],
      ["VideoSoftElastic", "b_Message2", {"BackColor": 0, "ForeColor": 12632256, "Left": 5310, "Top": 2490, "Width": 4245, "Height": 705, "TabIndex": 6, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0, "PicturePos": 10}],
      ["VideoSoftElastic", "b_TextBox1", {"BackColor": 0, "ForeColor": 12632256, "Left": 5310, "Top": 1230, "Width": 4245, "Height": 1185, "TabIndex": 5, "FontName": "Arial", "FontSize": 18, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 2, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "CaptionPos": 4, "IntBkg": 0}],
      ["VideoSoftElastic", "b_Image", {"BackColor": 0, "Left": 15, "Top": 15, "Width": 5250, "Height": 6885, "TabIndex": 4, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0}],
      ["VideoSoftElastic", "b_Title", {"BackColor": 0, "ForeColor": 12632256, "Left": 5310, "Top": 270, "Width": 4245, "Height": 945, "TabIndex": 3, "FontName": "Arial", "FontSize": 30, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "Error in frm_EmailInfo", "CaptionPos": 4, "IntBkg": 0, "PicturePos": 10}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_OK, b_Box3, b_TextBox3, b_Message3, b_Box2, b_TextBox2, b_Message2 } = me.controls;
    const { b_TextBox1, b_Image, b_Title } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;

    async function b_OK_Click() {
        me.MousePointer = HOURGLASS;
        if (Trim(me.b_TextBox1.Caption) == "") {
            frm_Box0.FillElastic.Caption = "Company Name?";
            frm_Box0.b_Message.Caption = "\n" + "You must enter the COMPANY NAME before you can continue.";
            await frm_Box0.Show(1);
            me.MousePointer = ARROW_CURSOR;
        } else if (Trim(me.b_TextBox2.Text) == "") {
            frm_Box0.FillElastic.Caption = "Player's Name?";
            frm_Box0.b_Message.Caption = "\n" + "You must enter the PLAYER'S NAME before you can continue.";
            await frm_Box0.Show(1);
            me.MousePointer = ARROW_CURSOR;
        } else if (Trim(me.b_TextBox3.Text) == "") {
            frm_Box0.FillElastic.Caption = "Email Address?";
            frm_Box0.b_Message.Caption = "\n" + "You must enter the PLAYER'S EMAIL ADDRESS before you can continue.";
            await frm_Box0.Show(1);
            me.MousePointer = ARROW_CURSOR;
        } else {
            FillElastic.Visible = 0;
            me.Hide();
        }
    }

    function b_OK_MouseDown(Button, Shift, X, Y) {
        me.b_OK.CaptionStyle = 2;
    }

    function b_OK_MouseUp(Button, Shift, X, Y) {
        me.b_OK.CaptionStyle = 1;
    }

    function b_TextBox1_KeyPress(KeyAscii) {
        if (KeyAscii == 13) {
            KeyAscii = 0;
            b_TextBox2.SetFocus();
        }
        return KeyAscii;
    }

    function b_TextBox2_KeyPress(KeyAscii) {
        if (KeyAscii == 13) {
            KeyAscii = 0;
            b_TextBox3.SetFocus();
        }
        return KeyAscii;
    }

    async function b_TextBox3_KeyPress(KeyAscii) {
        if (KeyAscii == 13) {
            KeyAscii = 0;
            await b_OK_Click();
        }
        return KeyAscii;
    }

    function Form_Activate() {
        b_TextBox1.Visible = -1;
        b_TextBox2.Visible = -1;
        b_TextBox3.Visible = -1;
        me.MousePointer = ARROW_CURSOR;
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
    }

    function Form_QueryUnload(Cancel, UnloadMode) {
        me.MousePointer = HOURGLASS;
    }

    return {
        b_OK_Click, b_OK_MouseDown, b_OK_MouseUp, b_TextBox1_KeyPress,
        b_TextBox2_KeyPress, b_TextBox3_KeyPress, Form_Activate, Form_Load,
        Form_QueryUnload,
    };
});
