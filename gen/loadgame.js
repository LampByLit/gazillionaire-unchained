// Originally translated from src/LOADGAME.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_LoadGame",
  ["Form", "frm_LoadGame", {"BorderStyle": 0, "ControlBox": 0, "Caption": "Load Game", "BackColor": 0, "Left": 1290, "Top": 1800, "Width": 5595, "Height": 4710, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 1290, "ClientTop": 1800, "ClientWidth": 5595, "ClientHeight": 4710}, [
    ["MMControl", "b_Sound", {"Left": 5790, "Top": 60, "Width": 3540, "Height": 330, "TabIndex": 9, "Visible": 0}],
    ["VideoSoftElastic", "FillElastic", {"BackColor": 0, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "FontName": "Arial", "FontSize": 18, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "CaptionPos": 3, "IntBkg": 0, "PicturePos": 9, "CaptionStyle": 2}, [
      ["VideoSoftElastic", "b_Exit", {"BackColor": 0, "ForeColor": 16777215, "Left": 2460, "Top": 4995, "Width": 2295, "Height": 1005, "TabIndex": 8, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Exit Without Loading", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0, "PicturePos": 9}],
      ["VideoSoftElastic", "b_Help", {"BackColor": 0, "ForeColor": 16777215, "Left": 4860, "Top": 4995, "Width": 2295, "Height": 1005, "TabIndex": 7, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0, "PicturePos": 9}],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 0, "Left": 2460, "Top": 1065, "Width": 4695, "Height": 3495, "TabIndex": 1, "FontName": "MS Sans Serif", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 3, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0}, [
        ["VideoSoftElastic", "b_Game1", {"BackColor": 16711680, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 4695, "Height": 630, "TabIndex": 6, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "ChildSpacing": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Load Game 1", "CaptionPos": 4, "IntBkg": 16711680, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Game2", {"BackColor": 12582912, "ForeColor": 16777215, "Left": 0, "Top": 720, "Width": 4695, "Height": 630, "TabIndex": 5, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "ChildSpacing": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Load Game 2", "CaptionPos": 4, "IntBkg": 12582912, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Game3", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 0, "Top": 1440, "Width": 4695, "Height": 630, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "ChildSpacing": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Load Game 3", "CaptionPos": 4, "IntBkg": 8388608, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Game4", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 0, "Top": 2160, "Width": 4695, "Height": 630, "TabIndex": 3, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "ChildSpacing": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Load Game 4", "CaptionPos": 4, "IntBkg": 8388608, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Game5", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 2880, "Width": 4695, "Height": 615, "TabIndex": 2, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "ChildSpacing": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Load Game 5", "CaptionPos": 4, "IntBkg": 4194304, "PicturePos": 9}]
      ]],
      ["Label", "Label2", {"ForeColor": 65535, "Left": 60, "Top": 4680, "Width": 2235, "Height": 1395, "TabIndex": 11, "Alignment": 2, "BackStyle": 0}],
      ["Label", "Label1", {"Caption": "Load Game", "BackColor": 0, "ForeColor": 16777215, "Left": 2490, "Top": 180, "Width": 4665, "Height": 585, "FontName": "Arial", "FontSize": 24, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 10, "Alignment": 2, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { b_Sound, FillElastic, b_Exit, b_Help, VSElastic3, b_Game1, b_Game2, b_Game3 } = me.controls;
    const { b_Game4, b_Game5, Label2, Label1 } = me.controls;
    const HOURGLASS = 11;
    const LIGHT_GRAY = 12632256;
    const BLUE = 16711680;
    const MEDIUM_BLUE = 12582912;
    const DARK_BLUE = 8388608;
    const DARKER_BLUE = 4194304;
    const ARROW_CURSOR = 1;
    let fileHeader = Space(23);
    let slotNames = DimArray([5], () => Space(20));
    let previousSlot = 0;
    let buttonUpColor = 0;

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        game.saveSlot = previousSlot;
        if (me.Tag == "BeginGame") {
            me.Tag = "";
            FillElastic.Visible = 0;
            await frm_BeginGame.Show();
            await Unload(me);
        } else {
            FillElastic.Visible = 0;
            await frm_File.Show();
            await Unload(me);
        }
    }

    function b_Exit_MouseDown(Button, Shift, X, Y) {
        b_Exit.BackColor = LIGHT_GRAY;
    }

    function b_Exit_MouseUp(Button, Shift, X, Y) {
        b_Exit.BackColor = buttonUpColor;
    }

    async function b_Game1_Click() {
        me.MousePointer = HOURGLASS;
        game.saveSlot = 1;
        await loadSlot();
    }

    function b_Game1_MouseDown(Button, Shift, X, Y) {
        b_Game1.BackColor = LIGHT_GRAY;
    }

    function b_Game1_MouseUp(Button, Shift, X, Y) {
        b_Game1.BackColor = BLUE;
    }

    async function b_Game2_Click() {
        me.MousePointer = HOURGLASS;
        game.saveSlot = 2;
        await loadSlot();
    }

    function b_Game2_MouseDown(Button, Shift, X, Y) {
        b_Game2.BackColor = LIGHT_GRAY;
    }

    function b_Game2_MouseUp(Button, Shift, X, Y) {
        b_Game2.BackColor = MEDIUM_BLUE;
    }

    async function b_Game3_Click() {
        me.MousePointer = HOURGLASS;
        game.saveSlot = 3;
        await loadSlot();
    }

    function b_Game3_MouseDown(Button, Shift, X, Y) {
        b_Game3.BackColor = LIGHT_GRAY;
    }

    function b_Game3_MouseUp(Button, Shift, X, Y) {
        b_Game3.BackColor = DARK_BLUE;
    }

    async function b_Game4_Click() {
        me.MousePointer = HOURGLASS;
        game.saveSlot = 4;
        await loadSlot();
    }

    function b_Game4_MouseDown(Button, Shift, X, Y) {
        b_Game4.BackColor = LIGHT_GRAY;
    }

    function b_Game4_MouseUp(Button, Shift, X, Y) {
        b_Game4.BackColor = DARK_BLUE;
    }

    async function b_Game5_Click() {
        me.MousePointer = HOURGLASS;
        game.saveSlot = 5;
        await loadSlot();
    }

    function b_Game5_MouseDown(Button, Shift, X, Y) {
        b_Game5.BackColor = LIGHT_GRAY;
    }

    function b_Game5_MouseUp(Button, Shift, X, Y) {
        b_Game5.BackColor = DARKER_BLUE;
    }

    async function b_Help_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box1.FillElastic.Caption = "Help (Load Game)";
        frm_Box1.b_Message.Caption = "To load a game just click on the position where you last saved your game. If you haven't saved a game yet, it is impossible to load a game.";
        await frm_Box1.Show(1);
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = LIGHT_GRAY;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = buttonUpColor;
    }

    async function loadSlot() {
        if (Trim(slotNames[game.saveSlot]) == ".......") {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_MsgBox.FillElastic.Caption = "\n" + "You cannot load an empty file. Before you can load a game, you must first save the game.";
            await frm_MsgBox.Show(1);
            game.saveSlot = previousSlot;
            me.MousePointer = ARROW_CURSOR;
        } else {
            me.MousePointer = HOURGLASS;
            await readSaveFile();
            if (fileHeader != "GAZ DELUXE NORMAL GAME ") {
                me.MousePointer = ARROW_CURSOR;
                return;
            }
            FillElastic.Visible = 0;
            await frm_MainMenu.Show();
            await Unload(me);
        }
    }

    function showSlotNames() {
        b_Exit.Caption = "Exit Without Loading";
        b_Game1.Caption = Trim(slotNames[1]);
        b_Game2.Caption = Trim(slotNames[2]);
        b_Game3.Caption = Trim(slotNames[3]);
        b_Game4.Caption = Trim(slotNames[4]);
        b_Game5.Caption = Trim(slotNames[5]);
    }

    function readSlotNames() {
        let slot = 0;
        for (slot = 1; slot <= 5; slot++) {
            FileOpen(6, Trim(paths.saveDir) + "GAME" + Trim(Format(slot, "#,#0")));
            slotNames[slot] = FileGet(6, 1, slotNames[slot]);
            FileClose(6);
        }
    }

    async function readSaveFile() {
        let playerIndex = 0;
        try {
            FileOpen(2, Trim(paths.saveDir) + "GAME" + Trim(Format(game.saveSlot, "#0")) + ".DAT");
            fileHeader = FileGet(2, 1, fileHeader);
            if (fileHeader != "GAZ DELUXE NORMAL GAME ") {
                throw new VBError(0);
            }
            game = FileGet(2, null, game);
            rivals = FileGet(2, null, rivals);
            for (playerIndex = 1; playerIndex <= game.numPlayers; playerIndex++) {
                player = FileGet(2, null, player);
                storePlayer(playerIndex);
            }
            FileClose(2);
            loadPlayer(game.currentPlayer);
            return;
        } catch (e) {
            Err.Catch(e);
            await reportFileError(Err.Number);
            return;
        }
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        previousSlot = game.saveSlot;
        fileHeader = FixStr("", 23);
        FillElastic.Picture = LoadPicture(Trim(paths.imageDir) + "STARS5.BMP");
        readSlotNames();
        showSlotNames();
    }

    function Label2_Click() {
        Label2.Caption = "You're still at it? Click, click, click... Seriously, what do you hope to find?";
    }

    return {
        b_Exit_Click, b_Exit_MouseDown, b_Exit_MouseUp, b_Game1_Click,
        b_Game1_MouseDown, b_Game1_MouseUp, b_Game2_Click, b_Game2_MouseDown,
        b_Game2_MouseUp, b_Game3_Click, b_Game3_MouseDown, b_Game3_MouseUp,
        b_Game4_Click, b_Game4_MouseDown, b_Game4_MouseUp, b_Game5_Click,
        b_Game5_MouseDown, b_Game5_MouseUp, b_Help_Click, b_Help_MouseDown,
        b_Help_MouseUp, loadSlot, showSlotNames, readSlotNames,
        readSaveFile, Form_Activate, Form_Load, Label2_Click,
    };
});
