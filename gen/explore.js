// Originally translated from src/EXPLORE.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Explore",
  ["Form", "frm_Explore", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Explore", "BackColor": 0, "Left": 615, "Top": 1665, "Width": 7470, "Height": 3975, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 615, "ClientTop": 1665, "ClientWidth": 7470, "ClientHeight": 3975}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16744576}, [
      ["MMControl", "b_Sound", {"Left": 5610, "Top": 60, "Width": 3540, "Height": 330, "TabIndex": 10, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 12632256, "Left": 0, "Top": 5820, "Width": 9585, "Height": 1065, "TabIndex": 2, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
        ["VideoSoftElastic", "b_Exit", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 1380, "Height": 1065, "TabIndex": 9, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 8388608}],
        ["VideoSoftElastic", "b_Time", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 6855, "Top": 0, "Width": 1365, "Height": 1065, "TabIndex": 8, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Ministry of Time", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
        ["VideoSoftElastic", "b_Help", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 8220, "Top": 0, "Width": 1365, "Height": 1065, "TabIndex": 7, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 8388608}],
        ["VideoSoftElastic", "b_History", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 5490, "Top": 0, "Width": 1365, "Height": 1065, "TabIndex": 6, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "History of", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
        ["VideoSoftElastic", "b_News", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 2760, "Top": 0, "Width": 1365, "Height": 1065, "TabIndex": 5, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "News Center", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
        ["VideoSoftElastic", "b_PlanetSpecial", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 1380, "Top": 0, "Width": 1380, "Height": 1065, "TabIndex": 4, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Planet Special", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
        ["VideoSoftElastic", "b_Weather", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 4125, "Top": 0, "Width": 1365, "Height": 1065, "TabIndex": 3, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Weather Bureau", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}]
      ]],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 0, "Left": 810, "Top": 210, "Width": 7890, "Height": 5445, "TabIndex": 1, "AutoSizeChildren": 7, "BorderWidth": 15, "BevelInner": 5, "BevelOuter": 5, "BevelInnerWidth": 7, "BevelOuterWidth": 7, "IntBkg": 0}, [
        ["Image", "Image1", {"Left": 240, "Top": 240, "Width": 7410, "Height": 4965, "Stretch": -1}]
      ]]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, VSElastic3, b_Exit, b_Time, b_Help, b_History, b_News } = me.controls;
    const { b_PlanetSpecial, b_Weather, VSElastic2, Image1 } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_Exit_MouseDown(Button, Shift, X, Y) {
        b_Exit.BackColor = 0xC00000;
    }

    function b_Exit_MouseUp(Button, Shift, X, Y) {
        b_Exit.BackColor = 0x800000;
    }

    async function b_Help_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        if (game.complexity >= game.unlockExplore || game.tutorialMode == 0) {
            frm_Box2.FillElastic.Caption = "Help (Explore Planet)";
            frm_Box2.b_Message.Caption = "While on a planet you may visit any of the local institutions." + "\n" + "\n" + "The PLANET SPECIAL allows you to access each planet's special resources such as banking, insurance, taxes, religion, engine construction and so on." + "\n" + "\n" + "The WEATHER BUREAU can alert you to dangerous storms in the area." + "\n" + "\n" + "The NEWS CENTER can provide you with updates on pirate attacks, revolutions and other events which will affect your business." + "\n" + "\n" + "The MINISTRY OF TIME and the HISTORY OF " + UCase(Trim(game.planetNames[game.planet[game.currentPlayer]])) + " are good sources of Kukubian trivia and background information.";
            await frm_Box2.Show(1);
        } else {
            frm_Box1.FillElastic.Caption = "Help (View City)";
            frm_Box1.b_Message.Caption = "From the View City Menu you may access the MINISTRY OF TIME or the HISTORY OF " + UCase(Trim(game.planetNames[game.planet[game.currentPlayer]])) + ". These are good sources of Kukubian trivia and background information.";
            await frm_Box1.Show(1);
        }
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = 0xC00000;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = 0x800000;
    }

    async function b_History_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        await frm_History.Show(1);
        FillElastic.Visible = -1;
    }

    function b_History_MouseDown(Button, Shift, X, Y) {
        b_History.BackColor = 0x800000;
    }

    function b_History_MouseUp(Button, Shift, X, Y) {
        b_History.BackColor = 0x400000;
    }

    async function b_News_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        await frm_News.Show(1);
        if (b_News.Tag == "RETURN TO MAIN MENU") {
            await b_Exit_Click();
        } else {
            FillElastic.Visible = -1;
        }
    }

    function b_News_MouseDown(Button, Shift, X, Y) {
        b_News.BackColor = 0x800000;
    }

    function b_News_MouseUp(Button, Shift, X, Y) {
        b_News.BackColor = 0x400000;
    }

    async function b_PlanetSpecial_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        if (player.specialDone == -1) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Planet Special";
            frm_Box0.b_Message.Caption = "\n" + "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            await frm_Box0.Show(1);
        } else {
            await frm_Special.Show(1);
        }
        if (me.Tag == "RETURN TO MAIN MENU") {
            await b_Exit_Click();
        } else {
            FillElastic.Visible = -1;
        }
    }

    function b_PlanetSpecial_MouseDown(Button, Shift, X, Y) {
        b_PlanetSpecial.BackColor = 0x800000;
    }

    function b_PlanetSpecial_MouseUp(Button, Shift, X, Y) {
        b_PlanetSpecial.BackColor = 0x400000;
    }

    async function b_Time_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        await frm_Time.Show(1);
        FillElastic.Visible = -1;
    }

    function b_Time_MouseDown(Button, Shift, X, Y) {
        b_Time.BackColor = 0x800000;
    }

    function b_Time_MouseUp(Button, Shift, X, Y) {
        b_Time.BackColor = 0x400000;
    }

    async function b_Weather_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        await frm_Weather.Show(1);
        if (b_Weather.Tag == "RETURN TO MAIN MENU") {
            await b_Exit_Click();
        } else {
            FillElastic.Visible = -1;
        }
    }

    function b_Weather_MouseDown(Button, Shift, X, Y) {
        b_Weather.BackColor = 0x800000;
    }

    function b_Weather_MouseUp(Button, Shift, X, Y) {
        b_Weather.BackColor = 0x400000;
    }

    function Form_Activate() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = -1;
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_Exit_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        b_News.Tag = "";
        b_Weather.Tag = "";
        me.Tag = "";
        b_History.Caption = "History of " + Trim(game.planetNames[game.planet[game.currentPlayer]]);
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + game.planetNames[game.planet[game.currentPlayer]] + ".bmp");
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + game.planetNames[game.planet[game.currentPlayer]] + ".wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
    }

    return {
        b_Exit_Click, b_Exit_MouseDown, b_Exit_MouseUp, b_Help_Click,
        b_Help_MouseDown, b_Help_MouseUp, b_History_Click, b_History_MouseDown,
        b_History_MouseUp, b_News_Click, b_News_MouseDown, b_News_MouseUp,
        b_PlanetSpecial_Click, b_PlanetSpecial_MouseDown, b_PlanetSpecial_MouseUp, b_Time_Click,
        b_Time_MouseDown, b_Time_MouseUp, b_Weather_Click, b_Weather_MouseDown,
        b_Weather_MouseUp, Form_Activate, Form_KeyPress, Form_Load,
    };
});
