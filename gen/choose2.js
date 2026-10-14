// Originally translated from src/CHOOSE2.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_ChooseShip2",
  ["Form", "frm_ChooseShip2", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "BackColor": 0, "Left": 585, "Top": 870, "Width": 7860, "Height": 5670, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 585, "ClientTop": 870, "ClientWidth": 7860, "ClientHeight": 5670}, [
    ["VideoSoftElastic", "b_Container", {"BackColor": 4194304, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
      ["Timer", "b_Timer", {"Interval": 1, "Left": 0, "Top": 0}],
      ["MMControl", "b_Sound", {"Left": 4800, "Top": 0, "Width": 3540, "Height": 330, "TabIndex": 8, "Visible": 0}],
      ["VideoSoftElastic", "b_ImageContainer", {"BackColor": 0, "ForeColor": 16777215, "Left": 420, "Top": 555, "Width": 3945, "Height": 5805, "TabIndex": 7, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 25, "ChildSpacing": 2, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 20, "CaptionPos": 5, "IntBkg": 0}, [
        ["VideoSoftElastic", "b_ImageLable", {"BackColor": 0, "ForeColor": 16777215, "Left": 405, "Top": 5070, "Width": 3135, "Height": 375, "TabIndex": 6, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777215, "CaptionPos": 4, "IntBkg": 0}],
        ["Image", "Image1", {"Left": 405, "Top": 360, "Width": 3135, "Height": 4665, "Stretch": -1}]
      ]],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 5100, "Top": 5490, "Width": 4035, "Height": 870, "TabIndex": 2, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "CaptionPos": 4, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "b_No", {"BackColor": 4210752, "ForeColor": 16777215, "Left": 2700, "Top": 0, "Width": 1335, "Height": 870, "TabIndex": 5, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "NO", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4210752}],
        ["VideoSoftElastic", "b_Yes", {"BackColor": 4210752, "ForeColor": 16777215, "Left": 1350, "Top": 0, "Width": 1350, "Height": 870, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "YES", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4210752}],
        ["VideoSoftElastic", "b_OK", {"BackColor": 4210752, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 1350, "Height": 870, "TabIndex": 3, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "OK", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4210752}]
      ]],
      ["Label", "b_Message", {"Caption": "This is the Event Box", "ForeColor": 16777215, "Left": 5100, "Top": 600, "Width": 3990, "Height": 4710, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 1, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { b_Container, b_Timer, b_Sound, b_ImageContainer, b_ImageLable, Image1, VSElastic3, b_No } = me.controls;
    const { b_Yes, b_OK, b_Message } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    let zinnFrame = 0;
    let frameCount = 0;

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
        b_Timer.Enabled = 0;
        b_Container.Visible = 0;
        await Unload(me);
    }

    function b_OK_MouseDown(Button, Shift, X, Y) {
        me.b_OK.BackColor = 0xC0C0C0;
    }

    function b_OK_MouseUp(Button, Shift, X, Y) {
        me.b_OK.BackColor = 0x404040;
    }

    function b_Timer_Timer() {
        if (zinnFrame == 1) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zinn2.bmp");
        } else if (zinnFrame == 2) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zinn3.bmp");
        } else if (zinnFrame == 3) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zinn3.bmp");
        } else if (zinnFrame == 4) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zinn2.bmp");
        } else if (zinnFrame == 5) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ZINN.BMP");
        }
        zinnFrame = zinnFrame + 1;
        if (zinnFrame == 6) {
            zinnFrame = 1;
        }
        frameCount = frameCount + 1;
        if (zinnFrame == 3) {
            b_Timer.Interval = 200;
        } else {
            b_Timer.Interval = 1;
        }
        if (frameCount == 6) {
            b_Timer.Enabled = 0;
            frameCount = 1;
            zinnFrame = 1;
        }
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

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
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
        zinnFrame = 1;
        frameCount = 1;
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ZINN.BMP");
        me.Tag = "NO";
    }

    return {
        b_No_Click, b_No_MouseDown, b_No_MouseUp, b_OK_Click,
        b_OK_MouseDown, b_OK_MouseUp, b_Timer_Timer, b_Yes_Click,
        b_Yes_MouseDown, b_Yes_MouseUp, Form_Activate, Form_KeyPress,
        Form_Load,
    };
});
