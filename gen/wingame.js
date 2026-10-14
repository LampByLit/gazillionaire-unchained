// Originally translated from src/WINGAME.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_WinGame",
  ["Form", "frm_WinGame", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Win Game Image", "BackColor": 0, "Left": 2025, "Top": 2355, "Width": 7365, "Height": 4020, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 2025, "ClientTop": 2355, "ClientWidth": 7365, "ClientHeight": 4020}, [
    ["VideoSoftElastic", "VSElastic1", {"BackColor": 4194304, "ForeColor": 4194304, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "FontName": "Arial", "FontSize": 24, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 4194304, "IntBkg": 4194304}, [
      ["MMControl", "b_Sound", {"Left": 5760, "Top": 60, "Width": 3540, "Height": 330, "TabIndex": 5, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 255, "Left": 600, "Top": 690, "Width": 8415, "Height": 5370, "TabIndex": 1, "AutoSizeChildren": 1, "BorderWidth": 20, "BevelInnerWidth": 10, "BevelOuterWidth": 20, "IntBkg": 255}, [
        ["VideoSoftElastic", "VSElastic2", {"BackColor": 0, "Left": 300, "Top": 300, "Width": 7815, "Height": 4770, "TabIndex": 3, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0}, [
          ["Image", "Image1", {"Left": 0, "Top": 0, "Width": 7815, "Height": 4770, "Stretch": -1}]
        ]]
      ]],
      ["VideoSoftElastic", "b_Continue", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 600, "Top": 6270, "Width": 8415, "Height": 495, "TabIndex": 4, "FontName": "MS Sans Serif", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelOuter": 1, "BevelOuterWidth": 6, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 8388608}],
      ["Label", "b_Company", {"Caption": "12345678901234567890 Wins!!!", "ForeColor": 16777215, "Left": 0, "Top": 45, "Width": 9615, "Height": 630, "FontName": "Arial", "FontSize": 24, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 2, "Alignment": 2, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { VSElastic1, b_Sound, VSElastic3, VSElastic2, Image1, b_Continue, b_Company } = me.controls;
    const HOURGLASS = 11;
    const DARK_RED = 192;
    const RED = 255;
    const ARROW_CURSOR = 1;

    async function b_Continue_Click() {
        let winnerName = "";
        let emperorPromise = "";
        const DARK_RED = 192;
        const RED = 255;
        me.MousePointer = HOURGLASS;
        if (game.winner <= 6) {
            winnerName = UCase(Trim(game.companyNames[game.winner]));
        } else {
            winnerName = UCase(Trim(rivals.companyNames[game.winner - 6]));
        }
        VSElastic1.Visible = 0;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        frm_Box1Port.b_Yes.Visible = 0;
        frm_Box1Port.b_No.Visible = 0;
        frm_Box1Port.b_OK.Visible = -1;
        frm_Box1Port.b_Container.BackColor = 0x400000;
        frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "NEWS.BMP");
        frm_Box1Port.b_ImageLable.Caption = "Headline News";
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "news.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box1Port.b_Message.Caption = "Big news on the financial front. " + winnerName + " is the first company in the entire system to attain a net worth above " + Format(game.goalNetWorth, "#,#0") + " kubars!" + "\n" + "\n" + "Today, the governors of all seven planets publicly thanked " + winnerName + " for helping to grow Kukubia's fledgling economy." + "\n" + "\n" + "This achievement will go down in history as a milestone in Kukubia's steady march towards becoming one of the wealthiest colonies in the Galaxy of Gogg.";
        await frm_Box1Port.Show(1);
        frm_Box1Port.b_Yes.Visible = 0;
        frm_Box1Port.b_No.Visible = 0;
        frm_Box1Port.b_OK.Visible = -1;
        frm_Box1Port.b_Container.BackColor = 0x400000;
        frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "DRED.BMP");
        frm_Box1Port.b_ImageLable.Caption = "Emperor Dred Nicolson";
        if (game.goalNetWorth == 100000000) {
            emperorPromise = "The Emperor has even promised to inscribe " + winnerName + "'s company logo into the Royal Tub the next time he takes a bath.";
        } else if (game.goalNetWorth == 200000000) {
            emperorPromise = "The Emperor has even promised to print " + winnerName + "'s company logo on all the napkins in the Royal Palace.";
        } else if (game.goalNetWorth == 300000000) {
            emperorPromise = "The Emperor has even promised to send the president of " + winnerName + " a signed postcard with a picture of the Royal Palace on the front.";
        } else if (game.goalNetWorth == 400000000) {
            emperorPromise = "The Emperor has even promised to dedicate his next opera to the president of " + winnerName + ".";
        } else if (game.goalNetWorth == 500000000) {
            emperorPromise = "The Emperor has even promised to inscribe " + winnerName + "'s company name on his new pair of sneakers using indelible ink.";
        } else if (game.goalNetWorth == 600000000) {
            emperorPromise = "The Emperor has even promised to mention " + winnerName + " in front of the Royal Senate the next time he makes a speech on the economy.";
        } else if (game.goalNetWorth == 700000000) {
            emperorPromise = "The Emperor has even promised to make his chief of security,  Mr. Ignip Burr, change his name to Mr. " + winnerName + ".";
        } else if (game.goalNetWorth == 800000000) {
            emperorPromise = "The Emperor has even promised to have his Royal Hairdresser name a new hairdo after " + winnerName + ".";
        } else if (game.goalNetWorth == 900000000) {
            emperorPromise = "The Emperor has even promised to have the name " + winnerName + " sown into all 794 pair of his royal underwear, so that he never forgets what " + winnerName + " has done for the Empire.";
        } else if (game.goalNetWorth == 1000000000) {
            emperorPromise = "The Emperor has even promised to name his first born after the president of " + winnerName + ".";
        }
        frm_Box1Port.b_Message.Caption = "The latest word from the capital is that Supreme Commander Dred Nicolson has openly praised the president of " + winnerName + " for contributing more than any other company to Kukubia's growth and prosperity." + "\n" + "\n" + emperorPromise + "  This is an honor few ever receive.";
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "good3.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        await frm_Box1Port.Show(1);
        frm_LineGraph.b_Help.Visible = 0;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "tilo.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        await frm_LineGraph.Show(1);
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        if (game.winner == game.currentPlayer && game.goalNetWorth < 1000000000) {
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                if (game.shipType[game.winner] <= 6) {
                    b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[game.winner])) + ".wav";
                } else {
                    b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[game.winner] - 6)) + ".wav";
                }
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            frm_WinGame2.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[game.winner])) + ".bmp");
            frm_WinGame2.b_ImageLable.Caption = winnerName + " wins the game!";
            frm_WinGame2.b_Message.Caption = "Winner's Choice";
            await frm_WinGame2.Show(1);
        } else if (game.goalNetWorth < 1000000000) {
            frm_WinGame2.VSElastic1.BackColor = DARK_RED;
            frm_WinGame2.b_Message.BackColor = RED;
            frm_WinGame2.b_ContinueGame.ForeColor = RED;
            frm_WinGame2.b_NewGame.ForeColor = RED;
            frm_WinGame2.b_QuitGame.ForeColor = RED;
            if (game.winner <= 6) {
                frm_WinGame2.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[game.winner])) + ".bmp");
                frm_WinGame2.b_ImageLable.Caption = winnerName + " wins the game!";
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    if (game.shipType[game.winner] <= 6) {
                        b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[game.winner])) + ".wav";
                    } else {
                        b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[game.winner] - 6)) + ".wav";
                    }
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
            } else {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "op" + Trim(Str(game.winner - 6)) + ".wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                frm_WinGame2.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "op" + Trim(Str((game.winner - 6))) + ".bmp");
                frm_WinGame2.b_ImageLable.Caption = winnerName + " wins the game!";
            }
            frm_WinGame2.b_Message.Caption = "Loser's Choice";
            await frm_WinGame2.Show(1);
        } else {
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "PHOTO.BMP");
            frm_Box1Port.b_ImageLable.Caption = "Steve and Naomi";
            frm_Box1Port.b_Message.Caption = "We congratulate you for playing Gazillionaire longer than we ever expected anyone to play. At this point, we have to say the game is officially over. Whether or not you have won or lost is no longer relevant. You are as close to becoming a true Gazillionaire as you will ever be. It's time to take a break and start a new game." + "\n" + "\n" + "As a reward for your hard work and dedication, you may now consider yourself an honorary member of the Secret Society of Dred -- secret email address dred@lavamind.com";
            await frm_Box1Port.Show(1);
            frm_Box0.FillElastic.Caption = "Good-bye, so long, see yah!";
            frm_Box0.b_Message.Caption = "\n" + "Thanks for playing with us. We will now exit the program before your poor computer suffers a meltdown.";
            await frm_Box0.Show(1);
            End();
        }
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        if (frm_WinGame2.Tag == "CONTINUE") {
            await Unload(frm_WinGame2);
            await Load(frm_Travel4);
            await frm_Travel4.Show();
        } else {
            await Unload(frm_WinGame2);
            await frm_BeginGame.Show();
        }
        await Unload(me);
    }

    function b_Continue_MouseDown(Button, Shift, X, Y) {
        b_Continue.BackColor = 0xC00000;
    }

    function b_Continue_MouseUp(Button, Shift, X, Y) {
        b_Continue.BackColor = 0x800000;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_Continue_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        if (game.winner <= 6) {
            b_Company.Caption = Trim(game.companyNames[game.winner]) + " Wins!!!";
        } else {
            b_Company.Caption = Trim(rivals.companyNames[game.winner - 6]) + " Wins!!!";
        }
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "WIN.BMP");
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "loro.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
    }

    return {
        b_Continue_Click, b_Continue_MouseDown, b_Continue_MouseUp, Form_Activate,
        Form_KeyPress, Form_Load,
    };
});
