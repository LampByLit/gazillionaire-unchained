// Originally translated from src/BOXINPUT.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_InputBox",
  ["Form", "frm_InputBox", {"BorderStyle": 1, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "BackColor": 16777215, "Left": 1200, "Top": 585, "Width": 5280, "Height": 5715, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 1200, "ClientTop": 585, "ClientWidth": 5280, "ClientHeight": 5715}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 4194304, "ForeColor": 12632256, "Left": 0, "Top": 0, "Width": 5280, "Height": 5715, "TabIndex": 1, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 15, "BevelOuter": 6, "BevelInnerWidth": 5, "BevelOuterWidth": 10, "Caption": "Please alert either Steve or Naomi by sending email to bugs@lavamind.com telling them that an error has occurred in frm_InputBox.   Thanks!!!!", "CaptionPos": 3, "IntBkg": 4194304, "PicturePos": 10}, [
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 12632256, "Left": 690, "Top": 2850, "Width": 3870, "Height": 345, "TabIndex": 5, "AutoSizeChildren": 7, "BorderWidth": 2, "ChildSpacing": 1, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0}, [
        ["VideoSoftElastic", "b_UpperLimit", {"BackColor": 12632256, "ForeColor": 0, "Left": 2580, "Top": 15, "Width": 1260, "Height": 315, "TabIndex": 8, "FontName": "Arial", "FontSize": 9, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 3, "Caption": "Upper", "CaptionPos": 4}],
        ["VideoSoftElastic", "b_MidRange", {"BackColor": 12632256, "ForeColor": 0, "Left": 1320, "Top": 15, "Width": 1245, "Height": 315, "TabIndex": 7, "FontName": "Arial", "FontSize": 9, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 3, "Caption": "Middle", "CaptionPos": 4}],
        ["VideoSoftElastic", "b_LowerLimit", {"BackColor": 12632256, "ForeColor": 0, "Left": 30, "Top": 15, "Width": 1275, "Height": 315, "TabIndex": 6, "FontName": "Arial", "FontSize": 9, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 3, "Caption": "Lower", "CaptionPos": 4}]
      ]],
      ["SpinButton", "b_Spin", {"Left": 690, "Top": 3600, "Width": 270, "Height": 465, "BackColor": 16777215, "LightColor": 255, "Delay": 100, "SpinBackColor": 16777215}],
      ["TextBox", "b_Text", {"HideSelection": 0, "BackColor": 16777215, "Left": 1185, "Top": 3600, "Width": 3375, "Height": 480, "Text": "Text1", "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 4, "MaxLength": 8}],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 12632256, "Left": 690, "Top": 4500, "Width": 3870, "Height": 720, "TabIndex": 2, "AutoSizeChildren": 7, "BorderWidth": 0, "ChildSpacing": 2, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
        ["VideoSoftElastic", "b_Cancel", {"BackColor": 12632256, "ForeColor": 0, "Left": 1950, "Top": 30, "Width": 1890, "Height": 660, "TabIndex": 3, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 9, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Cancel", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 16384}],
        ["VideoSoftElastic", "b_OK", {"BackColor": 12632256, "ForeColor": 0, "Left": 30, "Top": 30, "Width": 1890, "Height": 660, "TabIndex": 0, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 9, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "FloodColor": 12632256, "Caption": "OK", "CaptionPos": 4, "AccessKey": -1}]
      ]]
    ]]
  ]],
function (me) {
    const { FillElastic, VSElastic2, b_UpperLimit, b_MidRange, b_LowerLimit, b_Spin, b_Text, VSElastic3 } = me.controls;
    const { b_Cancel, b_OK } = me.controls;
    const HOURGLASS = 11;
    const WHITE = 16777215;
    const ARROW_CURSOR = 1;
    const LIGHT_GRAY = 12632256;
    const IBEAM_CURSOR = 3;

    function b_Cancel_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        me.Hide();
        me.b_Text.Text = "-3333";
    }

    function b_Cancel_MouseDown(Button, Shift, X, Y) {
        b_Cancel.BackColor = WHITE;
    }

    function b_Cancel_MouseMove(Button, Shift, X, Y) {
        me.MousePointer = ARROW_CURSOR;
    }

    function b_Cancel_MouseUp(Button, Shift, X, Y) {
        b_Cancel.BackColor = LIGHT_GRAY;
    }

    function b_LowerLimit_Click() {
        b_Text.Text = b_LowerLimit.Tag;
        b_Text.SelStart = 0;
        b_Text.SelLength = Len(b_Text.Text);
    }

    function b_LowerLimit_MouseDown(Button, Shift, X, Y) {
        b_LowerLimit.BackColor = WHITE;
    }

    function b_LowerLimit_MouseMove(Button, Shift, X, Y) {
        me.MousePointer = ARROW_CURSOR;
    }

    function b_LowerLimit_MouseUp(Button, Shift, X, Y) {
        b_LowerLimit.BackColor = LIGHT_GRAY;
    }

    function b_MidRange_Click() {
        b_Text.Text = b_MidRange.Tag;
        b_Text.SelStart = 0;
        b_Text.SelLength = Len(b_Text.Text);
    }

    function b_MidRange_MouseDown(Button, Shift, X, Y) {
        b_MidRange.BackColor = WHITE;
    }

    function b_MidRange_MouseMove(Button, Shift, X, Y) {
        me.MousePointer = ARROW_CURSOR;
    }

    function b_MidRange_MouseUp(Button, Shift, X, Y) {
        b_MidRange.BackColor = LIGHT_GRAY;
    }

    function b_OK_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        me.Hide();
    }

    function b_OK_MouseDown(Button, Shift, X, Y) {
        b_OK.BackColor = WHITE;
    }

    function b_OK_MouseMove(Button, Shift, X, Y) {
        me.MousePointer = ARROW_CURSOR;
    }

    function b_OK_MouseUp(Button, Shift, X, Y) {
        b_OK.BackColor = LIGHT_GRAY;
    }

    function b_Spin_SpinDown() {
        let number = 0;
        me.MousePointer = ARROW_CURSOR;
        number = CLng(Val(b_Text.Text));
        number = number - 1;
        b_Text.Text = Str(number);
    }

    function b_Spin_SpinUp() {
        let number = 0;
        me.MousePointer = ARROW_CURSOR;
        number = CLng(Val(b_Text.Text));
        number = number + 1;
        b_Text.Text = Str(number);
    }

    function b_Text_MouseMove(Button, Shift, X, Y) {
        me.MousePointer = IBEAM_CURSOR;
    }

    function b_UpperLimit_Click() {
        b_Text.Text = b_UpperLimit.Tag;
        b_Text.SelStart = 0;
        b_Text.SelLength = Len(b_Text.Text);
    }

    function b_UpperLimit_MouseDown(Button, Shift, X, Y) {
        b_UpperLimit.BackColor = WHITE;
    }

    function b_UpperLimit_MouseMove(Button, Shift, X, Y) {
        me.MousePointer = ARROW_CURSOR;
    }

    function b_UpperLimit_MouseUp(Button, Shift, X, Y) {
        b_UpperLimit.BackColor = LIGHT_GRAY;
    }

    function FillElastic_MouseMove(Button, Shift, X, Y) {
        me.MousePointer = ARROW_CURSOR;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    function Form_KeyPress(KeyAscii) {
        if ((KeyAscii >= Asc("0") && KeyAscii <= Asc("9"))) {
        } else if (KeyAscii == 8) {
        } else if (KeyAscii == 13) {
            KeyAscii = 0;
            me.Hide();
        } else if (KeyAscii == 27) {
            KeyAscii = 0;
            me.Hide();
            me.b_Text.Text = "0";
        } else {
            KeyAscii = 0;
            if (settings.soundOn == -1) {
                Beep();
            }
        }
        return KeyAscii;
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
    }

    function VSElastic2_MouseMove(Button, Shift, X, Y) {
        me.MousePointer = ARROW_CURSOR;
    }

    function VSElastic3_MouseMove(Button, Shift, X, Y) {
        me.MousePointer = ARROW_CURSOR;
    }

    return {
        b_Cancel_Click, b_Cancel_MouseDown, b_Cancel_MouseMove, b_Cancel_MouseUp,
        b_LowerLimit_Click, b_LowerLimit_MouseDown, b_LowerLimit_MouseMove, b_LowerLimit_MouseUp,
        b_MidRange_Click, b_MidRange_MouseDown, b_MidRange_MouseMove, b_MidRange_MouseUp,
        b_OK_Click, b_OK_MouseDown, b_OK_MouseMove, b_OK_MouseUp,
        b_Spin_SpinDown, b_Spin_SpinUp, b_Text_MouseMove, b_UpperLimit_Click,
        b_UpperLimit_MouseDown, b_UpperLimit_MouseMove, b_UpperLimit_MouseUp, FillElastic_MouseMove,
        Form_Activate, Form_KeyPress, Form_Load, VSElastic2_MouseMove,
        VSElastic3_MouseMove,
    };
});
