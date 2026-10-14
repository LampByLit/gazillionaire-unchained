// Originally translated from src/WINGAME2.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_WinGame2",
  ["Form", "frm_WinGame2", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Win Game Menu", "BackColor": 4194304, "Left": 765, "Top": 3150, "Width": 7365, "Height": 4620, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 765, "ClientTop": 3150, "ClientWidth": 7365, "ClientHeight": 4620}, [
    ["VideoSoftElastic", "VSElastic1", {"BackColor": 4194304, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 4194304}, [
      ["MMControl", "b_Sound", {"Left": 5280, "Top": 60, "Width": 3540, "Height": 330, "TabIndex": 7, "Visible": 0}],
      ["VideoSoftElastic", "b_ImageContainer", {"BackColor": 0, "ForeColor": 16777215, "Left": 210, "Top": 2400, "Width": 5415, "Height": 3915, "TabIndex": 5, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 25, "ChildSpacing": 2, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 20, "CaptionPos": 5, "IntBkg": 0}, [
        ["VideoSoftElastic", "b_ImageLable", {"BackColor": 0, "ForeColor": 16777215, "Left": 345, "Top": 3315, "Width": 4725, "Height": 195, "TabIndex": 6, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777215, "CaptionPos": 4, "IntBkg": 0}],
        ["Image", "Image1", {"Left": 345, "Top": 405, "Width": 4725, "Height": 2880, "Stretch": -1}]
      ]],
      ["VideoSoftElastic", "b_ContinueGame", {"BackColor": 0, "ForeColor": 16744576, "Left": 6000, "Top": 2400, "Width": 3300, "Height": 930, "TabIndex": 4, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelInnerWidth": 2, "Caption": "Continue Playing", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}],
      ["VideoSoftElastic", "b_NewGame", {"BackColor": 0, "ForeColor": 16744576, "Left": 6000, "Top": 3900, "Width": 3300, "Height": 945, "TabIndex": 3, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelInnerWidth": 2, "Caption": "Begin a New Game", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}],
      ["VideoSoftElastic", "b_Message", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 300, "Top": 465, "Width": 9000, "Height": 1200, "TabIndex": 2, "FontName": "Arial", "FontSize": 24, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 9, "BevelOuter": 3, "BevelInnerWidth": 9, "BevelOuterWidth": 9, "Caption": "Naomi Inc. Wins!!!", "CaptionPos": 4, "IntBkg": 8388608}],
      ["VideoSoftElastic", "b_QuitGame", {"BackColor": 0, "ForeColor": 16744576, "Left": 6000, "Top": 5415, "Width": 3300, "Height": 900, "TabIndex": 1, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelInnerWidth": 2, "Caption": "Quit and Exit Program", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}]
    ]]
  ]],
function (me) {
    const { VSElastic1, b_Sound, b_ImageContainer, b_ImageLable, Image1, b_ContinueGame, b_NewGame, b_Message } = me.controls;
    const { b_QuitGame } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;

    async function b_ContinueGame_Click() {
        me.MousePointer = HOURGLASS;
        if (game.goalNetWorth == 900000000) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box1.FillElastic.Caption = "Game Nearly Over";
            frm_Box1.b_Message.Caption = "\n" + "You have almost completed Gazillionaire! As soon as one of the players reaches one billion kubars, Gazillionaire will come to an end. This is your final chance to prove yourself. The first company to reach one billion kubars will be the ultimate victor! After that it's time to go outside and get some exercise.";
            await frm_Box1.Show(1);
        }
        VSElastic1.Visible = 0;
        me.Tag = "CONTINUE";
        me.Hide();
    }

    function b_ContinueGame_MouseDown(Button, Shift, X, Y) {
        me.b_ContinueGame.BackColor = 0x404040;
    }

    function b_ContinueGame_MouseUp(Button, Shift, X, Y) {
        me.b_ContinueGame.BackColor = 0x0;
    }

    function b_NewGame_Click() {
        me.MousePointer = HOURGLASS;
        VSElastic1.Visible = 0;
        me.Tag = "NEW";
        me.Hide();
    }

    function b_NewGame_MouseDown(Button, Shift, X, Y) {
        me.b_NewGame.BackColor = 0x404040;
    }

    function b_NewGame_MouseUp(Button, Shift, X, Y) {
        me.b_NewGame.BackColor = 0x0;
    }

    function b_QuitGame_Click() {
        me.MousePointer = HOURGLASS;
        VSElastic1.Visible = 0;
        End();
    }

    function b_QuitGame_MouseDown(Button, Shift, X, Y) {
        me.b_QuitGame.BackColor = 0x404040;
    }

    function b_QuitGame_MouseUp(Button, Shift, X, Y) {
        me.b_QuitGame.BackColor = 0x0;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_ContinueGame_Click();
        }
    }

    return {
        b_ContinueGame_Click, b_ContinueGame_MouseDown, b_ContinueGame_MouseUp, b_NewGame_Click,
        b_NewGame_MouseDown, b_NewGame_MouseUp, b_QuitGame_Click, b_QuitGame_MouseDown,
        b_QuitGame_MouseUp, Form_Activate, Form_KeyPress,
    };
});
