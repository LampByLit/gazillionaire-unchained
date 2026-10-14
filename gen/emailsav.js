// Originally translated from src/EMAILSAV.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_SaveEmail",
  ["Form", "frm_SaveEmail", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Save Email Game", "BackColor": 0, "Left": 1290, "Top": 1350, "Width": 7860, "Height": 4875, "WindowState": 2, "FontName": "MS Sans Serif", "FontSize": 12, "FontBold": -1, "FontItalic": -1, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 1290, "ClientTop": 1350, "ClientWidth": 7860, "ClientHeight": 4875}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 12632256, "ForeColor": 8388608, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 1, "FontName": "Times New Roman", "FontSize": 24, "FontBold": -1, "FontItalic": -1, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "Save Email Game", "CaptionPos": 3, "PicturePos": 9, "CaptionStyle": 2, "ForeColorDisabled": 0}, [
      ["MMControl", "b_Sound", {"Left": 5010, "Top": 720, "Width": 3540, "Height": 330, "TabIndex": 13, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic1", {"BackColor": 12632256, "Left": 30, "Top": 6360, "Width": 9555, "Height": 525, "TabIndex": 9, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 3, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "1"}, [
        ["VideoSoftElastic", "b_SaveEmailGame", {"BackColor": 12632256, "Left": 3210, "Top": 0, "Width": 3150, "Height": 525, "TabIndex": 12, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 4, "Caption": "Save Game", "CaptionPos": 4, "PicturePos": 9, "ForeColorDisabled": 0}],
        ["VideoSoftElastic", "b_Cancel", {"BackColor": 12632256, "Left": 0, "Top": 0, "Width": 3165, "Height": 525, "TabIndex": 11, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 4, "Caption": "Cancel", "CaptionPos": 4, "PicturePos": 9, "ForeColorDisabled": 0}],
        ["VideoSoftElastic", "b_Help", {"BackColor": 12632256, "Left": 6405, "Top": 0, "Width": 3150, "Height": 525, "TabIndex": 10, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 4, "Caption": "Help", "CaptionPos": 4, "PicturePos": 9, "ForeColorDisabled": 0}]
      ]],
      ["VideoSoftElastic", "b_Box1", {"BackColor": 4194304, "Left": 795, "Top": 1620, "Width": 4200, "Height": 615, "TabIndex": 8, "AutoSizeChildren": 2, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "IntBkg": 4194304}, [
        ["TextBox", "textbox1", {"BackColor": 16777215, "ForeColor": 12582912, "Left": 75, "Top": 75, "Width": 4050, "Height": 480, "FontName": "MS Sans Serif", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 0, "MaxLength": 12}]
      ]],
      ["VideoSoftElastic", "b_Message4", {"BackColor": 12632256, "ForeColor": 8388608, "Left": 795, "Top": 2430, "Width": 4260, "Height": 3735, "TabIndex": 4, "FontName": "Times New Roman", "FontSize": 12, "FontBold": -1, "FontItalic": -1, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 5, "BevelOuter": 0, "BevelInnerWidth": 6, "BevelOuterWidth": 0, "Caption": "  Files:", "CaptionPos": 0, "PicturePos": 10, "CaptionStyle": 2}, [
        ["FileListBox", "file1", {"BackColor": 16777215, "ForeColor": 12582912, "Left": 105, "Top": 420, "Width": 4050, "Height": 2760, "TabIndex": 5, "ReadOnly": 0}]
      ]],
      ["VideoSoftElastic", "b_Message2", {"BackColor": 12632256, "ForeColor": 8388608, "Left": 5640, "Top": 1305, "Width": 3330, "Height": 4860, "TabIndex": 3, "FontName": "Times New Roman", "FontSize": 12, "FontBold": -1, "FontItalic": -1, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 5, "BevelOuter": 0, "BevelInnerWidth": 6, "BevelOuterWidth": 0, "Caption": "  Current Directory:", "CaptionPos": 0, "PicturePos": 10, "CaptionStyle": 2}, [
        ["DriveListBox", "drive1", {"BackColor": 16777215, "ForeColor": 12582912, "Left": 105, "Top": 3825, "Width": 3000, "Height": 315, "TabIndex": 7}],
        ["DirListBox", "dir1", {"BackColor": 16777215, "ForeColor": 12582912, "Left": 105, "Top": 420, "Width": 3000, "Height": 2505, "TabIndex": 6}]
      ]],
      ["VideoSoftElastic", "b_Message1", {"BackColor": 12632256, "ForeColor": 8388608, "Left": 795, "Top": 1305, "Width": 4200, "Height": 315, "TabIndex": 2, "FontName": "Times New Roman", "FontSize": 12, "FontBold": -1, "FontItalic": -1, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "  File Name:", "CaptionPos": 0, "PicturePos": 10, "CaptionStyle": 2}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, VSElastic1, b_SaveEmailGame, b_Cancel, b_Help, b_Box1, textbox1 } = me.controls;
    const { b_Message4, file1, b_Message2, drive1, dir1, b_Message1 } = me.controls;
    const HOURGLASS = 11;
    const WHITE = 16777215;
    const LIGHT_GRAY = 12632256;
    const ARROW_CURSOR = 1;

    async function b_Cancel_Click() {
        me.MousePointer = HOURGLASS;
        FileClose();
        if (me.Tag == "MAIN MENU") {
            await frm_File.Show();
            await Unload(me);
        } else {
            await Unload(me);
        }
    }

    function b_Cancel_MouseDown(Button, Shift, X, Y) {
        b_Cancel.BackColor = WHITE;
    }

    function b_Cancel_MouseUp(Button, Shift, X, Y) {
        b_Cancel.BackColor = LIGHT_GRAY;
    }

    async function b_Help_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box2.FillElastic.Caption = "Help (Save Email Game)";
        frm_Box2.b_Message.Caption = "Email games are played by emailing a game file back and forth between players. This game file is created when a player saves the game using the SAVE EMAIL GAME menu." + "\n" + "\n" + "When you receive a game file from another player, you should start Gazillionaire, then click on CONTINUE EMAIL GAME. From the LOAD EMAIL GAME menu, you can pick-up the game where the other player left-off." + "\n" + "\n" + "After you are finished with your turn, you will be prompted to save the game and email the saved file to the next player in line. In a nut shell, this is how to play-by-email.";
        await frm_Box2.Show(1);
        frm_Box1.FillElastic.Caption = "Help (Save Email Game)";
        frm_Box1.b_Message.Caption = "NOTE:  Everyone participating must have email software with an ATTACH FILE function. The saved game is a binary file and can only be sent by using some sort of ATTACH FILE function. This function is present in most shareware and commercial email software. If you aren't sure about your email, contact your email software manufacturer and ask them if it's possible.";
        await frm_Box1.Show(1);
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = WHITE;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = LIGHT_GRAY;
    }

    async function b_SaveEmailGame_Click() {
        let trapErrors = 0;
        try {
            const ARROW_CURSOR = 1;
            trapErrors = -1;
            me.MousePointer = HOURGLASS;
            if (Trim(textbox1.Text) == "") {
                if (settings.soundOn == -1) {
                    Beep();
                }
                await MsgBox("Invalid File Name. Please enter a new File Name a try again.", 16, "Invalid File Name");
                me.MousePointer = ARROW_CURSOR;
            } else {
                game.emailFileName = FixStr(Trim(textbox1.Text), 12);
                settings.emailDir = FixStr(Trim(dir1.Path), 128);
                saveConfig();
                if (me.Tag == "MAIN MENU") {
                    await saveEmailGame("MAIN MENU");
                } else if (me.Tag == "STARTTURN") {
                    await saveEmailGame("STARTTURN");
                }
                if (me.Tag == "STARTTURN") {
                    await Load(frm_PlayerTurn);
                    frm_PlayerTurn.Tag = "GAME SAVED";
                    await Unload(me);
                } else if (me.Tag == "MAIN MENU") {
                    await frm_MainMenu.Show();
                    await Unload(me);
                }
            }
            return;
        } catch (e) {
            Err.Catch(e);
            if (trapErrors == -1) {
                await reportFileError(Err.Number);
                trapErrors = 0;
                return;
            } else {
                FileClose();
                return;
            }
        }
    }

    function b_SaveEmailGame_MouseDown(Button, Shift, X, Y) {
        b_SaveEmailGame.BackColor = WHITE;
    }

    function b_SaveEmailGame_MouseUp(Button, Shift, X, Y) {
        b_SaveEmailGame.BackColor = LIGHT_GRAY;
    }

    async function dir1_Change() {
        let trapErrors = 0;
        try {
            trapErrors = -1;
            file1.Path = dir1.Path;
            drive1.Drive = dir1.Path;
            return;
        } catch (e) {
            Err.Catch(e);
            if (trapErrors == -1) {
                await reportFileError(Err.Number);
                trapErrors = 0;
                return;
            } else {
                FileClose();
                return;
            }
        }
    }

    async function drive1_Change() {
        let trapErrors = 0;
        try {
            trapErrors = -1;
            dir1.Path = drive1.Drive;
            file1.Path = dir1.Path;
            return;
        } catch (e) {
            Err.Catch(e);
            if (trapErrors == -1) {
                await reportFileError(Err.Number);
                trapErrors = 0;
                return;
            } else {
                FileClose();
                return;
            }
        }
    }

    function saveConfig() {
        FileOpen(7, Trim(paths.configDir) + "CONFIG.DAT");
        FilePut(7, 1, settings);
        FileClose(7);
    }

    async function file1_Click() {
        let trapErrors = 0;
        try {
            trapErrors = -1;
            textbox1.Text = Trim(file1.FileName);
            return;
        } catch (e) {
            Err.Catch(e);
            if (trapErrors == -1) {
                await reportFileError(Err.Number);
                trapErrors = 0;
                return;
            } else {
                FileClose();
                return;
            }
        }
    }

    function Form_Activate() {
        textbox1.SelStart = 0;
        textbox1.SelLength = Len(textbox1.Text);
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if ((KeyAscii >= Asc("0") && KeyAscii <= Asc("9"))) {
        } else if ((KeyAscii >= Asc("A") && KeyAscii <= Asc("Z"))) {
        } else if ((KeyAscii >= Asc("a") && KeyAscii <= Asc("z"))) {
        } else if (KeyAscii == Asc(".")) {
        } else if (KeyAscii == 8) {
        } else if (KeyAscii == 13) {
            KeyAscii = 0;
            await b_SaveEmailGame_Click();
        } else {
            KeyAscii = 0;
            if (settings.soundOn == -1) {
                Beep();
            }
        }
        return KeyAscii;
    }

    function Form_Load() {
        let trapErrors = 0;
        let dotPos = 0;
        try {
            trapErrors = -1;
            me.MousePointer = HOURGLASS;
            dotPos = InStr(1, Trim(game.emailFileName), ".");
            if (dotPos > 0 && dotPos >= 8) {
                game.emailFileName = FixStr(Mid(Trim(game.emailFileName), 1, 8) + Mid(Trim(game.emailFileName), dotPos, 4), 12);
            } else if (dotPos > 0 && dotPos < 8) {
                game.emailFileName = FixStr(Mid(Trim(game.emailFileName), 1, dotPos - 1) + Mid(Trim(game.emailFileName), dotPos, 4), 12);
            } else {
                game.emailFileName = FixStr(Mid(Trim(game.emailFileName), 1, 8), 12);
            }
            game.emailFileName = FixStr(LCase(Trim(game.emailFileName)), 12);
            textbox1.Text = Trim(game.emailFileName);
            dir1.Path = Trim(settings.emailDir);
            file1.Path = Trim(settings.emailDir);
            drive1.Drive = dir1.Path;
            FillElastic.Caption = "\n" + "Save Email Game  (turn " + Format(game.turn, "#,#0") + ")";
            return;
        } catch (e) {
            Err.Catch(e);
            if (trapErrors == -1) {
                trapErrors = 0;
                return;
            } else {
                FileClose();
                return;
            }
        }
    }

    function Form_QueryUnload(Cancel, UnloadMode) {
        me.MousePointer = HOURGLASS;
    }

    function textbox1_KeyPress(KeyAscii) {
        if (KeyAscii == 8 || KeyAscii == Asc(".") || KeyAscii >= Asc("A") && KeyAscii <= Asc("Z") || KeyAscii >= Asc("a") && KeyAscii <= Asc("z") || KeyAscii >= Asc("0") && KeyAscii <= Asc("9")) {
        } else {
            KeyAscii = 0;
            if (settings.soundOn == -1) {
                Beep();
            }
        }
        return KeyAscii;
    }

    return {
        b_Cancel_Click, b_Cancel_MouseDown, b_Cancel_MouseUp, b_Help_Click,
        b_Help_MouseDown, b_Help_MouseUp, b_SaveEmailGame_Click, b_SaveEmailGame_MouseDown,
        b_SaveEmailGame_MouseUp, dir1_Change, drive1_Change, saveConfig,
        file1_Click, Form_Activate, Form_KeyPress, Form_Load,
        Form_QueryUnload, textbox1_KeyPress,
    };
});
