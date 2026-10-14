// Originally translated from src/SAVEBOX.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_SaveBox",
  ["Form", "frm_SaveBox", {"BorderStyle": 0, "ControlBox": 0, "Caption": "Save Game", "BackColor": 0, "Left": 1395, "Top": 1740, "Width": 7905, "Height": 3930, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 1395, "ClientTop": 1740, "ClientWidth": 7905, "ClientHeight": 3930}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 0, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "CaptionPos": 3, "IntBkg": 0, "PicturePos": 9, "CaptionStyle": 2}, [
      ["VideoSoftElastic", "b_Cancel", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 5220, "Top": 4470, "Width": 2400, "Height": 705, "TabIndex": 2, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Cancel", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304, "PicturePos": 9}],
      ["VideoSoftElastic", "b_SaveGame", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 2100, "Top": 4470, "Width": 2415, "Height": 705, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "Caption": "Save Game", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304, "PicturePos": 9}],
      ["VideoSoftElastic", "b_Rect", {"BackColor": 8388608, "ForeColor": 14737632, "Left": 2100, "Top": 1500, "Width": 5535, "Height": 2295, "Tag": "Note: Press ENTER to save or ESC to cancel.", "TabIndex": 1, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 12, "BevelInner": 6, "BevelOuter": 1, "BevelInnerWidth": 7, "BevelOuterWidth": 6, "Caption": "Enter the name under which you would like to save your game:", "CaptionPos": 3, "TagPosition": 3, "IntBkg": 8388608, "PicturePos": 9, "ForeColorDisabled": 0}, [
        ["TextBox", "Text1", {"BorderStyle": 0, "Alignment": 2, "BackColor": 16777215, "ForeColor": 0, "Left": 1200, "Top": 1320, "Width": 3135, "Height": 360, "Text": "Text1", "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 3}]
      ]],
      ["Label", "Label3", {"ForeColor": 65535, "Left": 120, "Top": 5340, "Width": 4245, "Height": 1155, "TabIndex": 5, "Alignment": 2, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Cancel, b_SaveGame, b_Rect, Text1, Label3 } = me.controls;
    const HOURGLASS = 11;
    const LIGHT_GRAY = 12632256;
    const IBEAM_CURSOR = 3;
    const ARROW_CURSOR = 1;
    let slotNames = DimArray([5], () => Space(20));

    async function b_Cancel_Click() {
        me.MousePointer = HOURGLASS;
        game.saveSlot = CInt(Val(frm_SaveGame.Tag));
        await Unload(me);
    }

    function b_Cancel_MouseDown(Button, Shift, X, Y) {
        b_Cancel.BackColor = LIGHT_GRAY;
    }

    function b_Cancel_MouseUp(Button, Shift, X, Y) {
        b_Cancel.BackColor = 0x400000;
    }

    function b_Rect_MouseMove(Button, Shift, X, Y) {
        me.MousePointer = IBEAM_CURSOR;
    }

    async function b_SaveGame_Click() {
        me.MousePointer = HOURGLASS;
        await Unload(frm_SaveGame);
        slotNames[game.saveSlot] = FixStr(Text1.Text, 20);
        writeSlotNames();
        await saveGame();
        FillElastic.Visible = 0;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_SaveGame_MouseDown(Button, Shift, X, Y) {
        b_SaveGame.BackColor = LIGHT_GRAY;
    }

    function b_SaveGame_MouseUp(Button, Shift, X, Y) {
        b_SaveGame.BackColor = 0x400000;
    }

    function readSlotNames() {
        let slot = 0;
        for (slot = 1; slot <= 5; slot++) {
            FileOpen(6, Trim(paths.saveDir) + "GAME" + Trim(Format(slot, "#,#0")));
            slotNames[slot] = FileGet(6, 1, slotNames[slot]);
            FileClose(6);
        }
    }

    function writeSlotNames() {
        let slot = 0;
        for (slot = 1; slot <= 5; slot++) {
            FileOpen(5, Trim(paths.saveDir) + "GAME" + Trim(Format(slot, "#,#0")));
            FilePut(5, 1, slotNames[slot]);
            FileClose(5);
        }
    }

    function FillElastic_MouseMove(Button, Shift, X, Y) {
        me.MousePointer = ARROW_CURSOR;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 27) {
            await b_Cancel_Click();
        } else if (KeyAscii == 13) {
            await b_SaveGame_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        FillElastic.Picture = LoadPicture(Trim(paths.imageDir) + "stars1.bmp");
        readSlotNames();
        if (Trim(slotNames[game.saveSlot]) == ".......") {
            Text1.Text = Trim(game.companyNames[game.currentPlayer]);
        } else {
            Text1.Text = slotNames[game.saveSlot];
        }
        Text1.SelStart = 0;
        Text1.SelLength = Len(Trim(Text1.Text));
    }

    function Label3_Click() {
        Label3.Caption = "This galaxy is about to self-destruct.";
    }

    function Text1_MouseMove(Button, Shift, X, Y) {
        me.MousePointer = IBEAM_CURSOR;
    }

    return {
        b_Cancel_Click, b_Cancel_MouseDown, b_Cancel_MouseUp, b_Rect_MouseMove,
        b_SaveGame_Click, b_SaveGame_MouseDown, b_SaveGame_MouseUp, readSlotNames,
        writeSlotNames, FillElastic_MouseMove, Form_Activate, Form_KeyPress,
        Form_Load, Label3_Click, Text1_MouseMove,
    };
});
