// Originally translated from src/BANKRPT3.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Bankrupt3",
  ["Form", "frm_Bankrupt3", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Some of the Players Have Gone Bankrupt", "BackColor": 0, "Left": 660, "Top": 1545, "Width": 7365, "Height": 4020, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 660, "ClientTop": 1545, "ClientWidth": 7365, "ClientHeight": 4020}, [
    ["VideoSoftElastic", "VSElastic1", {"BackColor": 255, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 255}, [
      ["MMControl", "b_Sound", {"Left": 4590, "Top": 30, "Width": 3540, "Height": 330, "TabIndex": 8, "Visible": 0}],
      ["VideoSoftElastic", "b_ImageContainer", {"BackColor": 0, "ForeColor": 16777215, "Left": 300, "Top": 1800, "Width": 5115, "Height": 3900, "TabIndex": 5, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 25, "ChildSpacing": 2, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 20, "CaptionPos": 5, "IntBkg": 0}, [
        ["VideoSoftElastic", "b_ImageLable", {"BackColor": 0, "ForeColor": 16777215, "Left": 330, "Top": 3300, "Width": 4455, "Height": 180, "TabIndex": 6, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777215, "CaptionPos": 4, "IntBkg": 0}],
        ["Image", "Image1", {"Left": 330, "Top": 420, "Width": 4455, "Height": 2865, "Stretch": -1}]
      ]],
      ["VideoSoftElastic", "b_ContinueGame", {"BackColor": 0, "ForeColor": 255, "Left": 5715, "Top": 1800, "Width": 3585, "Height": 1200, "TabIndex": 4, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelInnerWidth": 2, "Caption": "Allow Other Players to Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}],
      ["VideoSoftElastic", "b_NewGame", {"BackColor": 0, "ForeColor": 255, "Left": 5730, "Top": 3255, "Width": 3615, "Height": 1110, "TabIndex": 3, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelInnerWidth": 2, "Caption": "Quit and Begin a New Game", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}],
      ["VideoSoftElastic", "b_Message", {"BackColor": 192, "Left": 300, "Top": 255, "Width": 9000, "Height": 1215, "TabIndex": 2, "FontName": "Arial", "FontSize": 24, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 9, "BevelOuter": 3, "BevelInnerWidth": 9, "BevelOuterWidth": 9, "Caption": "Bankruptcy", "CaptionPos": 4, "IntBkg": 192}],
      ["VideoSoftElastic", "b_QuitGame", {"BackColor": 0, "ForeColor": 255, "Left": 5715, "Top": 4650, "Width": 3585, "Height": 1050, "TabIndex": 1, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelInnerWidth": 2, "Caption": "Quit and Exit Program", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}],
      ["Label", "Label1", {"Caption": "Due to your financial follies, your company has been removed from this game.  However, there are still other players left in the game.", "ForeColor": 0, "Left": 0, "Top": 6015, "Width": 9615, "Height": 900, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 7, "Alignment": 2, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { VSElastic1, b_Sound, b_ImageContainer, b_ImageLable, Image1, b_ContinueGame, b_NewGame, b_Message } = me.controls;
    const { b_QuitGame, Label1 } = me.controls;
    const HOURGLASS = 11;
    const BLACK = 0;
    const ARROW_CURSOR = 1;

    async function b_ContinueGame_Click() {
        let nextCompany = 0;
        const HOURGLASS = 11;
        me.MousePointer = HOURGLASS;
        me.VSElastic1.BackColor = BLACK;
        me.BackColor = BLACK;
        me.VSElastic1.Visible = 0;
        game.turnDone[game.currentPlayer] = -1;
        storePlayer(game.currentPlayer);
        nextCompany = game.turnOrder[game.turnOrderPos];
        do {
            if (game.turnOrderPos < game.numPlayers) {
                nextCompany = game.turnOrder[game.turnOrderPos + 1];
                if (game.graphShowCompany[nextCompany] == -1) {
                    game.turnOrderPos = game.turnOrderPos + 1;
                }
            }
        } while (game.graphShowCompany[nextCompany] == -1 && game.turnOrderPos < game.numPlayers);
        await Load(frm_Travel3);
        await frm_Travel3.Show();
        await Unload(me);
    }

    function b_ContinueGame_MouseDown(Button, Shift, X, Y) {
        me.b_ContinueGame.BackColor = 0x404040;
    }

    function b_ContinueGame_MouseUp(Button, Shift, X, Y) {
        me.b_ContinueGame.BackColor = 0x0;
    }

    async function b_NewGame_Click() {
        const BLACK = 0;
        me.MousePointer = HOURGLASS;
        me.VSElastic1.BackColor = BLACK;
        me.BackColor = BLACK;
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
        me.VSElastic1.BackColor = BLACK;
        me.BackColor = BLACK;
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
            await b_ContinueGame_Click();
        }
    }

    return {
        b_ContinueGame_Click, b_ContinueGame_MouseDown, b_ContinueGame_MouseUp, b_NewGame_Click,
        b_NewGame_MouseDown, b_NewGame_MouseUp, b_QuitGame_Click, b_QuitGame_MouseDown,
        b_QuitGame_MouseUp, Form_Activate, Form_KeyPress,
    };
});
