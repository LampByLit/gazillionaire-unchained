// Originally translated from src/TRAVEL0.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Travel0",
  ["Form", "frm_Travel0", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Travel 0", "BackColor": 0, "ForeColor": 0, "Left": 2010, "Top": 1725, "Width": 7350, "Height": 4020, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 2010, "ClientTop": 1725, "ClientWidth": 7350, "ClientHeight": 4020}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 0, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 1, "Align": 5, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0, "PicturePos": 9}, [
      ["Timer", "Timer1", {"Interval": 2000, "Left": 30, "Top": 0}],
      ["VideoSoftElastic", "Image1", {"BackColor": 0, "Left": 480, "Top": 3030, "Width": 1965, "Height": 705, "TabIndex": 2, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0, "PicturePos": 7}]
    ]],
    ["MMControl", "b_Sound", {"Left": 0, "Top": 0, "Width": 3540, "Height": 525, "TabIndex": 0, "Visible": 0}]
  ]],
function (me) {
    const { FillElastic, Timer1, Image1, b_Sound } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    let blackColor = 0;

    async function goToTravel1() {
        me.BackColor = blackColor;
        me.MousePointer = HOURGLASS;
        Image1.Left = Add(Screen.Width, 1000);
        Timer1.Enabled = 0;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        await Load(frm_Travel1);
        await frm_Travel1.Show();
        await Unload(me);
    }

    async function FillElastic_Click() {
        await goToTravel1();
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        await goToTravel1();
    }

    function Form_Load() {
        FillElastic.Picture = LoadPicture(Trim(paths.imageDir) + "STARS5.BMP");
        me.MousePointer = HOURGLASS;
        Image1.Left = -2000;
        Image1.Top = Screen.Height / 3;
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer])) + "a.bmp");
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            if (game.shipType[game.currentPlayer] == 1 || game.shipType[game.currentPlayer] == 9) {
                b_Sound.FileName = Trim(paths.soundDir) + "rocket1.wav";
            } else if (game.shipType[game.currentPlayer] == 2 || game.shipType[game.currentPlayer] == 7) {
                b_Sound.FileName = Trim(paths.soundDir) + "rocket2.wav";
            } else if (game.shipType[game.currentPlayer] == 3 || game.shipType[game.currentPlayer] == 8) {
                b_Sound.FileName = Trim(paths.soundDir) + "rocket3.wav";
            } else if (game.shipType[game.currentPlayer] == 4 || game.shipType[game.currentPlayer] == 10) {
                b_Sound.FileName = Trim(paths.soundDir) + "rocket4.wav";
            } else if (game.shipType[game.currentPlayer] == 5 || game.shipType[game.currentPlayer] == 11) {
                b_Sound.FileName = Trim(paths.soundDir) + "rocket5.wav";
            } else if (game.shipType[game.currentPlayer] == 6 || game.shipType[game.currentPlayer] == 12) {
                b_Sound.FileName = Trim(paths.soundDir) + "rocket6.wav";
            }
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
    }

    async function Form_MouseDown(Button, Shift, X, Y) {
        await goToTravel1();
    }

    async function Image1_Click() {
        await goToTravel1();
    }

    async function Timer1_Timer() {
        Timer1.Interval = 1;
        Image1.Left = Add(Add(Image1.Left, (game.engineSpeed[game.currentPlayer] * 50)), 150);
        if (Image1.Left >= (Add(Screen.Width, 8000))) {
            me.MousePointer = HOURGLASS;
            Image1.Visible = 0;
            Timer1.Enabled = 0;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
            }
            FillElastic.Visible = 0;
            await Load(frm_Travel1);
            await frm_Travel1.Show();
            await Unload(me);
        }
    }

    return {
        goToTravel1, FillElastic_Click, Form_Activate, Form_KeyPress,
        Form_Load, Form_MouseDown, Image1_Click, Timer1_Timer,
    };
});
