// Originally translated from src/BANKRPT2.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Bankrupt2",
  ["Form", "frm_Bankrupt2", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "All Players Have Gone Bankrupt", "BackColor": 0, "Left": 120, "Top": 1185, "Width": 7830, "Height": 5235, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 120, "ClientTop": 1185, "ClientWidth": 7830, "ClientHeight": 5235}, [
    ["VideoSoftElastic", "VSElastic1", {"BackColor": 255, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 255}, [
      ["MMControl", "b_Sound", {"Left": 4290, "Top": 30, "Width": 3540, "Height": 330, "TabIndex": 7, "Visible": 0}],
      ["VideoSoftElastic", "b_ImageContainer", {"BackColor": 0, "ForeColor": 16777215, "Left": 180, "Top": 1800, "Width": 5400, "Height": 4200, "TabIndex": 4, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 25, "ChildSpacing": 2, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 20, "CaptionPos": 5, "IntBkg": 0}, [
        ["VideoSoftElastic", "b_ImageLable", {"BackColor": 0, "ForeColor": 16777215, "Left": 345, "Top": 3555, "Width": 4710, "Height": 210, "TabIndex": 5, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777215, "CaptionPos": 4, "IntBkg": 0}],
        ["Image", "Image1", {"Left": 345, "Top": 435, "Width": 4710, "Height": 3090, "Stretch": -1}]
      ]],
      ["VideoSoftElastic", "b_QuitGame", {"BackColor": 0, "ForeColor": 255, "Left": 5820, "Top": 4215, "Width": 3615, "Height": 1785, "TabIndex": 3, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelInnerWidth": 2, "Caption": "Quit and Exit Program", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}],
      ["VideoSoftElastic", "b_Message", {"BackColor": 192, "Left": 240, "Top": 180, "Width": 9270, "Height": 1185, "TabIndex": 2, "FontName": "Arial", "FontSize": 24, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 9, "BevelOuter": 3, "BevelInnerWidth": 9, "BevelOuterWidth": 9, "Caption": "Naomi Inc. Bankrupts!!!", "CaptionPos": 4, "IntBkg": 192}],
      ["VideoSoftElastic", "b_NewGame", {"BackColor": 0, "ForeColor": 255, "Left": 5820, "Top": 1800, "Width": 3615, "Height": 1860, "TabIndex": 1, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelInnerWidth": 2, "Caption": "Begin a New Game", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}],
      ["Label", "Label1", {"Caption": "Due to your financial follies, you can no longer continue this game.", "ForeColor": 0, "Left": 30, "Top": 6300, "Width": 9555, "Height": 540, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 6, "Alignment": 2, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { VSElastic1, b_Sound, b_ImageContainer, b_ImageLable, Image1, b_QuitGame, b_Message, b_NewGame } = me.controls;
    const { Label1 } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    let blankColor = 0;

    async function b_NewGame_Click() {
        me.MousePointer = HOURGLASS;
        me.VSElastic1.BackColor = blankColor;
        me.BackColor = blankColor;
        me.VSElastic1.Visible = 0;
        await frm_BeginGame.Show();
        await Unload(me);
    }

    function b_NewGame_MouseDown(Button, Shift, X, Y) {
        me.b_NewGame.BackColor = 0x404040;
    }

    function b_NewGame_MouseUp(Button, Shift, X, Y) {
        me.b_NewGame.BackColor = 0x0;
    }

    async function b_QuitGame_Click() {
        me.MousePointer = HOURGLASS;
        me.VSElastic1.BackColor = blankColor;
        me.BackColor = blankColor;
        me.VSElastic1.Visible = 0;
        await Unload(me);
    }

    function b_QuitGame_MouseDown(Button, Shift, X, Y) {
        me.b_QuitGame.BackColor = 0x404040;
    }

    function b_QuitGame_MouseUp(Button, Shift, X, Y) {
        me.b_QuitGame.BackColor = 0x0;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer])) + ".bmp");
        b_ImageLable.Caption = Trim(game.companyNames[game.currentPlayer]);
        b_Message.Caption = Trim(game.companyNames[game.currentPlayer]) + " Bankrupts!!!";
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            if (game.shipType[game.currentPlayer] <= 6) {
                b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer])) + ".wav";
            } else {
                b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer] - 6)) + ".wav";
            }
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_NewGame_Click();
        }
    }

    return {
        b_NewGame_Click, b_NewGame_MouseDown, b_NewGame_MouseUp, b_QuitGame_Click,
        b_QuitGame_MouseDown, b_QuitGame_MouseUp, Form_Activate, Form_KeyPress,
    };
});
