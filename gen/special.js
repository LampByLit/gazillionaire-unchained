// Originally translated from src/SPECIAL.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Special",
  ["Form", "frm_Special", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Planet Special", "BackColor": 0, "Left": 1785, "Top": 1455, "Width": 6900, "Height": 4695, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "frm_PlanetSpecial", "KeyPreview": -1, "ClientLeft": 1785, "ClientTop": 1455, "ClientWidth": 6900, "ClientHeight": 4695}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 2, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 15, "IntBkg": 16744576}, [
      ["Timer", "b_Timer", {"Enabled": 0, "Interval": 1, "Left": 450, "Top": 1020}],
      ["MMControl", "b_Sound", {"Left": 5430, "Top": 0, "Width": 3540, "Height": 330, "TabIndex": 0, "Visible": 0}],
      ["VideoSoftElastic", "b_Exit", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 120, "Top": 6240, "Width": 2205, "Height": 585, "TabIndex": 10, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 90, "Top": 120, "Width": 9405, "Height": 735, "TabIndex": 9, "FontName": "Arial", "FontSize": 18, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 8, "Caption": "Planet Special", "CaptionPos": 4, "IntBkg": 4194304}],
      ["VideoSoftElastic", "b_Help", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 7290, "Top": 6240, "Width": 2205, "Height": 585, "TabIndex": 8, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
      ["VideoSoftElastic", "b_Container", {"BackColor": 4194304, "ForeColor": 65535, "Left": 3840, "Top": 930, "Width": 5655, "Height": 5205, "TabIndex": 6, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 1, "BorderWidth": 24, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 8, "CaptionPos": 0, "IntBkg": 4194304}, [
        ["Label", "b_Message", {"Caption": "Planet Special", "ForeColor": 16777215, "Left": 360, "Top": 360, "Width": 4935, "Height": 4485, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 7, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "VSElastic4", {"BackColor": 4194304, "Left": 90, "Top": 930, "Width": 3645, "Height": 5205, "TabIndex": 4, "AutoSizeChildren": 7, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 5, "BevelOuterWidth": 10, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "VSElastic3", {"BackColor": 16744576, "Left": 195, "Top": 225, "Width": 3255, "Height": 4350, "TabIndex": 5, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16744576}, [
          ["Image", "Image1", {"Left": 0, "Top": 0, "Width": 3255, "Height": 4350, "Stretch": -1}]
        ]],
        ["Label", "Label1", {"Caption": "Label1", "ForeColor": 16777215, "Left": 195, "Top": 4665, "Width": 3255, "Height": 315, "FontName": "Arial", "FontSize": 9, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 1, "Alignment": 2, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "b_Button", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 2400, "Top": 6240, "Width": 4830, "Height": 585, "TabIndex": 3, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Next Page", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Timer, b_Sound, b_Exit, VSElastic2, b_Help, b_Container, b_Message } = me.controls;
    const { VSElastic4, VSElastic3, Image1, Label1, b_Button } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    const RED = 255;
    const BLUE = 16711680;
    let animFrame = 0;
    let frameCount = 0;

    async function b_Button_Click() {
        me.MousePointer = HOURGLASS;
        if (b_Button.Caption == "Return to Main Menu") {
            frm_Explore.Tag = "RETURN TO MAIN MENU";
            await b_Exit_Click();
        } else {
            await doPlanetSpecial();
            me.MousePointer = ARROW_CURSOR;
        }
    }

    function b_Button_MouseDown(Button, Shift, X, Y) {
        b_Button.BackColor = 0x800000;
    }

    function b_Button_MouseUp(Button, Shift, X, Y) {
        b_Button.BackColor = 0x400000;
    }

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        b_Timer.Enabled = 0;
        FillElastic.Visible = 0;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        await Unload(me);
    }

    function b_Exit_MouseDown(Button, Shift, X, Y) {
        b_Exit.BackColor = 0x800000;
    }

    function b_Exit_MouseUp(Button, Shift, X, Y) {
        b_Exit.BackColor = 0x400000;
    }

    async function b_Help_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            frm_Explore.b_Sound.Command = "Close";
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box1.FillElastic.Caption = "Help (Planet Special)";
        frm_Box1.b_Message.Caption = "Each planet has a SPECIAL feature, which can benefit your business. A good way to familiarize yourself with the PLANET SPECIAL is to travel to all of the planets and check out the results. Occasionally, you may run into a little bad luck. However, as a rule, it is well worth your while to take advantage of the PLANET SPECIALS.";
        await frm_Box1.Show(1);
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = 0x800000;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = 0x400000;
    }

    function b_Timer_Timer() {
        if (game.planetNames[game.planet[game.currentPlayer]] == "Vexx") {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "asian2.bmp");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "asian.bmp");
            }
            animFrame = animFrame + 1;
            if (animFrame == 3) {
                animFrame = 1;
            }
            frameCount = frameCount + 1;
            if (frameCount == 5) {
                b_Timer.Enabled = 0;
            }
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Pyke") {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "mech2.bmp");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "MECH.BMP");
            }
            animFrame = animFrame + 1;
            if (animFrame == 3) {
                animFrame = 1;
            }
            frameCount = frameCount + 1;
            if (frameCount == 5) {
                b_Timer.Enabled = 0;
            }
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Mira") {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "MONK1.BMP");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "MONK.BMP");
            }
            animFrame = animFrame + 1;
            if (animFrame == 3) {
                animFrame = 1;
            }
            frameCount = frameCount + 1;
            if (frameCount == 5) {
                b_Timer.Enabled = 0;
            }
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Stye") {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan2.bmp");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan2.bmp");
            } else if (animFrame == 3) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan2.bmp");
            } else if (animFrame == 4) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan1.bmp");
            }
            animFrame = animFrame + 1;
            if (animFrame == 5) {
                animFrame = 1;
            }
            frameCount = frameCount + 1;
            if (frameCount == 5) {
                b_Timer.Enabled = 0;
            }
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Loro") {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "peelia2.bmp");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "PEELIA.BMP");
            }
            animFrame = animFrame + 1;
            if (animFrame == 3) {
                animFrame = 1;
            }
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Zile") {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zinn2.bmp");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zinn3.bmp");
            } else if (animFrame == 3) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zinn3.bmp");
            } else if (animFrame == 4) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zinn2.bmp");
            } else if (animFrame == 5) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zinn.bmp");
            }
            animFrame = animFrame + 1;
            if (animFrame == 6) {
                animFrame = 1;
            }
            frameCount = frameCount + 1;
            if (frameCount == 6) {
                b_Timer.Enabled = 0;
            }
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Frac") {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure3.bmp");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
            } else if (animFrame == 3) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure3.bmp");
            } else if (animFrame == 4) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure2.bmp");
            } else if (animFrame == 5) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
            }
            animFrame = animFrame + 1;
            if (animFrame == 6) {
                animFrame = 1;
            }
            frameCount = frameCount + 1;
            if (frameCount == 6) {
                b_Timer.Enabled = 0;
            }
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Ooom") {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "sooth2.bmp");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "sooth1.bmp");
            } else if (animFrame == 3) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "sooth1.bmp");
            } else if (animFrame == 4) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "sooth1.bmp");
            } else if (animFrame == 5) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "sooth2.bmp");
            } else if (animFrame == 6) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "sooth3.bmp");
            }
            animFrame = animFrame + 1;
            if (animFrame == 7) {
                animFrame = 1;
            }
            frameCount = frameCount + 1;
            if (frameCount == 7) {
                b_Timer.Enabled = 0;
            }
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Tilo") {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "dealer2.bmp");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "dealer1.bmp");
            } else if (animFrame == 3) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "dealer3.bmp");
            } else if (animFrame == 4) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "dealer1.bmp");
            }
            animFrame = animFrame + 1;
            if (animFrame == 5) {
                animFrame = 1;
            }
            frameCount = frameCount + 1;
            if (frameCount == 5) {
                b_Timer.Enabled = 0;
            }
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Xeen") {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "mechan1.bmp");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "mechan2.bmp");
            } else if (animFrame == 3) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "mechan1.bmp");
            } else if (animFrame == 4) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "mechan3.bmp");
            }
            animFrame = animFrame + 1;
            if (animFrame == 5) {
                animFrame = 1;
            }
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Queg") {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "cornu2.bmp");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "cornu2.bmp");
            } else if (animFrame == 3) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "cornu1.bmp");
            }
            animFrame = animFrame + 1;
            if (animFrame == 4) {
                animFrame = 1;
            }
            frameCount = frameCount + 1;
            if (frameCount == 4) {
                b_Timer.Enabled = 0;
            }
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Bass") {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "broker2.bmp");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "broker2.bmp");
            } else if (animFrame == 3) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "broker1.bmp");
            }
            animFrame = animFrame + 1;
            if (animFrame == 4) {
                animFrame = 1;
            }
            frameCount = frameCount + 1;
            if (frameCount == 4) {
                b_Timer.Enabled = 0;
            }
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Nosh") {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zobrok2.bmp");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zobrok3.bmp");
            } else if (animFrame == 3) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zobrok4.bmp");
            }
            animFrame = animFrame + 1;
            if (animFrame == 4) {
                animFrame = 1;
            }
            frameCount = frameCount + 1;
            if (frameCount == 4) {
                b_Timer.Enabled = 0;
            }
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Hork") {
            if (animFrame == 1) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "agent2.bmp");
            } else if (animFrame == 2) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "agent2.bmp");
            } else if (animFrame == 3) {
                Image1.Picture = LoadPicture(Trim(paths.imageDir) + "agent1.bmp");
            }
            animFrame = animFrame + 1;
            if (animFrame == 4) {
                animFrame = 1;
            }
        }
    }

    function visitStockBroker() {
        let planet = 0;
        let advice = "";
        b_Timer.Enabled = -1;
        if (((Mod(game.turn, 6)) + 1) == 1) {
            if (settings.soundOn == -1) {
                frm_Explore.b_Sound.Command = "Close";
            }
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "neutral.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            {
                const sel = ((Mod(game.weeklyRoll, 10)) + 1);
                if (sel == 1) {
                    b_Message.Caption = "Unfortunately, when you show up at your stock broker's office, you discover that she is away at a bond convention on Loro.";
                } else if (sel == 2) {
                    b_Message.Caption = "Your broker agrees to meet with you, but she is in a rush. Her only advice is to invest for the long term.";
                } else if (sel == 3) {
                    b_Message.Caption = "When you enter your broker's office, she is in tears. Apparently, her husband just left her for the " + Format(randomBetween(4, 8), "#,#0") + "th time this month, and she can't handle it. You spend the next two hours trying to console her.";
                } else if (sel == 4) {
                    b_Message.Caption = "When you sit down with your broker, she goes into a tirade about the high taxes she is forced to pay! She is so obsessed over this tax issue that she can't talk about anything else.";
                } else if (sel == 5) {
                    b_Message.Caption = "When you show up at your broker's office, she is not there. The secretary informs you that your broker is on the stock exchange floor for the rest of the week.";
                } else if (sel == 6) {
                    b_Message.Caption = "When you show up at your broker's office, she shows you her pet Cameo. You wind up spending the whole afternoon discussing the usefulness of Cameo fur as a household disinfectant.";
                } else if (sel == 7) {
                    b_Message.Caption = "Your stock broker sits you down and gives you a long lecture about avoiding risky investments.";
                } else if (sel == 8) {
                    b_Message.Caption = "When you show up at your stock broker's office, the secretary tells you that your broker is on the phone giving investment advice to Emperor Dred Nicolson himself. You'll have to come back another week.";
                } else if (sel == 9) {
                    b_Message.Caption = "Your stock broker refuses to give you advice on the market. She says that with the current economic situation she has no idea what will happen in the next few weeks.";
                } else if (sel == 10) {
                    b_Message.Caption = "When you show up at your stock broker's office, you are informed that she is meeting with the Imperial Magistrate and cannot take any more meetings this week.";
                }
            }
        } else {
            advice = "";
            for (planet = 0; planet <= LAST_PLANET; planet++) {
                advice = advice + Trim(game.planetNames[planet]) + " Exchange = ";
                if (game.stockStrength[planet] <= 20) {
                    advice = advice + "very strong sell";
                } else if (game.stockStrength[planet] <= 30) {
                    advice = advice + "strong sell";
                } else if (game.stockStrength[planet] <= 40) {
                    advice = advice + "sell";
                } else if (game.stockStrength[planet] <= 60) {
                    advice = advice + "hold";
                } else if (game.stockStrength[planet] <= 70) {
                    advice = advice + "buy";
                } else if (game.stockStrength[planet] <= 80) {
                    advice = advice + "strong buy";
                } else {
                    advice = advice + "very strong buy";
                }
                advice = advice + "\n";
            }
            if (settings.soundOn == -1) {
                frm_Explore.b_Sound.Command = "Close";
            }
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "stock2.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            b_Message.Caption = "Your stock broker gives you the following recommendations:" + "\n" + "\n" + advice;
            player.specialDone = 0;
        }
        b_Button.Caption = "Return to Main Menu";
    }

    async function askLowerPremiums() {
        let adjustment = 0;
        b_Timer.Enabled = -1;
        adjustment = CLng(player.arrivalRoll) * player.cargoCapacity * 4;
        {
            const sel = randomBetween(1, 30);
            if (sel == 1) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The insurance company says they are working on offering lower rates to everyone.";
            } else if (sel == 2) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The insurance company informs you that their rates are absolutely the lowest in all the galaxy.";
            } else if (sel == 3) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The insurance company says they'll take your request into consideration the next time they adjust the rates.";
            } else if (sel == 4) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The insurance company keeps you waiting two hours, and then tells you the person you need to talk to is not in this week.";
            } else if (sel == 5) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The insurance company tells you to come back next week when things are not so busy.";
            } else if (sel == 6) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The insurance company shows you your statistical data and says they cannot lower your rates any further.";
            } else if (sel == 7) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The insurance company says they'll do their best to meet your needs and keep you satisfied. After all, the customer comes first.";
            } else if (sel == 8 || sel == 9 || sel == 10 || sel == 11) {
                if (player.insuranceRate >= 6) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The insurance company reviews your records and offers to lower your rates an average of " + Format((1 - ((player.insuranceRate - 5) / player.insuranceRate)) * 100, "#,#0") + "%.";
                    player.insuranceRate = player.insuranceRate - 5;
                    player.insuranceCost = CLng(player.insuranceCost / 2);
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The insurance company informs you that they are short on capital and must raise your rates an average of " + Format((((player.insuranceRate + 5) / player.insuranceRate) - 1) * 100, "#,#0") + "%.";
                    player.insuranceRate = player.insuranceRate + 5;
                    player.insuranceCost = (player.insuranceRate * 1000) - randomBetween(1, 1000);
                }
            } else if (sel == 12) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The insurance company reviews your records and informs you that your rates are in fact too low and must be raised an average of " + Format((((player.insuranceRate + 5) / player.insuranceRate) - 1) * 100, "#,#0") + "%.";
                player.insuranceRate = player.insuranceRate + 5;
                player.insuranceCost = (player.insuranceRate * 1000) - randomBetween(1, 1000);
            } else if (sel == 13 || sel == 14 || sel == 15) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The insurance company informs you that their premiums are based on statistical data and cannot be altered unless your accident records show a change.";
            } else if (sel == 16) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The insurance company says they are pulling out of several markets because of new government regulations, and this prevents them from lowering any of their existing premiums.";
            } else if (sel == 17) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Your Insurance Agent informs you that they are currently in the red and do not expect to make a profit in the foreseeable future. Therefore, they cannot lower anybody's premiums for some time.";
            } else if (sel == 18) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The insurance company says they are already giving you a rate reduction, considering your poor accident record. Any further reductions would be impossible.";
            } else if (sel == 19) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The insurance company politely informs you that they have a monopoly on insurance sales in the Kukubian system, so complaining about your high rates will get you nowhere.";
            } else if (sel == 20) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Your Insurance Agent explains to you that he has found a grave mistake. For the past few months, Voyager's Insurance has been under-charging you. In fact, you owe them " + Format(adjustment, "#,#0") + " kubars.";
                await spend(adjustment, 0);
            } else if (sel == 21) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Your insurance company representative rants and raves about possible pending government interference. He won't stop talking about how the government is trying to breakup Voyager's Insurance Company's monopoly on the Kukubian market.";
            } else if (sel == 22) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The insurance company explains how Voyager's Insurance Company is dedicated to quality service. They always pay their claims, and you should be thankful to have an opportunity to be a member of the Voyager family.";
            } else if (sel == 23 || sel == 24 || sel == 25 || sel == 26) {
                if (player.insuranceRate >= 6) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Your Insurance Agent says he will reduce your rates by an average of " + Format((1 - ((player.insuranceRate - 5) / player.insuranceRate)) * 100, "#,#0") + "%. He explains how this will severely cut into his commissions and lifestyle, but he values you as a customer and is willing to sacrifice on your behalf.";
                    player.insuranceRate = player.insuranceRate - 5;
                    player.insuranceCost = CLng(player.insuranceCost / 2);
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Your Insurance Agent is not in a good mood. In fact, he says that after reviewing your records, he has no choice but to raise your rates by an average of " + Format((((player.insuranceRate + 5) / player.insuranceRate) - 1) * 100, "#,#0") + "%. He's sorry, but there is nothing he can do about this.";
                    player.insuranceRate = player.insuranceRate + 5;
                    player.insuranceCost = (player.insuranceRate * 1000) - randomBetween(1, 1000);
                }
            } else if (sel == 27) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Your meeting with your Insurance Agent goes well. He promises to lower you rates. That is why you are surprised to receive a note in the mail the next day indicating that your premiums have been raised an average of " + Format((((player.insuranceRate + 5) / player.insuranceRate) - 1) * 100, "#,#0") + "%. Sorry, but there is nothing you can do about this.";
                player.insuranceRate = player.insuranceRate + 5;
                player.insuranceCost = (player.insuranceRate * 1000) - randomBetween(1, 1000);
            } else if (sel == 28 || sel == 29 || sel == 30) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Your insurance agent reviews your records and informs you that there has been a grave mistake. The Voyager's Insurance Company has been overcharging you for the past several months. To your surprise, you are due a refund in the amount of " + Format(adjustment, "#,#0") + " kubars!";
                player.cash = player.cash + adjustment;
            }
        }
        b_Button.Caption = "Return to Main Menu";
    }

    async function doMediaEvent() {
        let payment = 0;
        let soundFile = "";
        b_Timer.Enabled = 0;
        payment = randomBetween(25, 75) * game.shipSize[game.currentPlayer];
        {
            const sel = randomBetween(1, 3);
            if (sel == 1) {
                {
                    const sel2 = ((Mod(player.arrivalRoll, 10)) + 1);
                    if (sel2 == 1) {
                        b_Message.Caption = "You appear on Evy Ev's Planet Chat, the hottest daytime TV talk show. Evy's topic of the day is self-made entrepreneurs, and you are the star of the show. This helps to boost your company's reputation and nets you " + Format(payment, "#,#0") + " kubars.";
                        player.cash = player.cash + payment;
                        soundFile = "agent.wav";
                    } else if (sel2 == 2) {
                        b_Message.Caption = "Thanks to your agent, you end up on prime time TV selling jelly beans. Selling candy to kids on interplanetary TV isn't your idea of the perfect job, but it winds up paying you " + Format(payment, "#,#0") + " kubars.";
                        player.cash = player.cash + payment;
                        soundFile = "agent.wav";
                    } else if (sel2 == 3) {
                        b_Message.Caption = "You spend the afternoon at an orphanage bouncing Borly Balls with Kukubia's most famous sports star. The kids at the orphanage love it, but you wind up with a sore back the next morning.";
                        soundFile = "agent2.wav";
                    } else if (sel2 == 4) {
                        b_Message.Caption = "The Ministry of Travel says it has planned a new promotion to get Kukubians moving, and they wind up using your company as an example of what can be achieved. This free advertising significantly boosts your company's reputation.";
                        soundFile = "agent.wav";
                    } else if (sel2 == 5) {
                        b_Message.Caption = "You meet with a journalist from the Astral Reporter, Kukubia's largest newspaper. To your surprise, the reporter writes a glowing article, making you out to be some sort of financial genius.";
                        soundFile = "agent.wav";
                    } else if (sel2 == 6) {
                        b_Message.Caption = "You get booked on the Geeg Matiss Extravaganza, Kukubia's most popular late night TV show. You wind up talking all about the silly products you import and export. Not only is the show a hit, but you are paid " + Format(payment, "#,#0") + " kubars.";
                        player.cash = player.cash + payment;
                        soundFile = "agent.wav";
                    } else if (sel2 == 7) {
                        b_Message.Caption = "To your horror, you get stuck in a debate with the Cosmic Consumer Caucus, a notorious consumer watchdog. However, instead of bashing you for charging outrageously high passenger fares, they laud you for your efforts to keep costs down and serve the public.";
                        soundFile = "agent.wav";
                    } else if (sel2 == 8) {
                        b_Message.Caption = "Apparently, your agent thinks a story with the Interplanetary Inquirer, Kukubia's most ridiculous gossip rag, won't do you much harm. The paper winds up printing an erroneous story all about how you are a robot in disguise. The good part is that they pay you " + Format(payment, "#,#0") + " kubars, and the story is so silly no one actually believes it.";
                        player.cash = player.cash + payment;
                        soundFile = "agent.wav";
                    } else if (sel2 == 9) {
                        b_Message.Caption = "You appear on the well respected Planet Line News, Kukubia's premier news series. The topic for the evening is Trade Regulations, and you have a lot to say. This goes over well with the audience, and you gain some good publicity.";
                        soundFile = "agent.wav";
                    } else if (sel2 == 10) {
                        b_Message.Caption = "You are invited to attend the Ceremony of the Stars. Everyone is there from Mr. Zinn to the Imperial Magistrate. You spend the evening mingling with the rich and famous.";
                        soundFile = "agent.wav";
                    }
                }
            } else if (sel == 2) {
                {
                    const sel2 = ((Mod(player.arrivalRoll, 10)) + 1);
                    if (sel2 == 1) {
                        b_Message.Caption = "You are excited to appear on the hottest daytime TV talk show in Kukubia. The only problem is that the topic is ruthless merchants, and you turn out to be the villain.";
                        soundFile = "bad7.wav";
                    } else if (sel2 == 2) {
                        b_Message.Caption = "Your agent lands you a job promoting underwear on prime time TV. You are forced to walk around virtually naked, making silly poses. The only positive thing is that you get paid " + Format(payment, "#,#0") + " kubars.";
                        player.cash = player.cash + payment;
                        soundFile = "agent.wav";
                    } else if (sel2 == 3) {
                        b_Message.Caption = "You end up at a charity sports benefit batting around Borly Balls with Kukubia's most famous sports star. After fifteen minutes, you get slammed in the head with a Borly Ball and have to be rushed to the hospital. You aren't seriously injured, but the ambulance bill comes to " + Format(payment, "#,#0") + " kubars.";
                        await spend(payment, 0);
                        soundFile = "bad7.wav";
                    } else if (sel2 == 4) {
                        b_Message.Caption = "Your agent books you on an interplanetary TV show with the Ministry of Travel. The only problem is that the topic of discussion is smuggling illegal aliens. The Ministry accuses you of engaging in smuggling operations, and the show winds up doing more harm than good to your public image.";
                        soundFile = "bad7.wav";
                    } else if (sel2 == 5) {
                        b_Message.Caption = "Your agent schedules a meeting for you with a journalist from the Astral Reporter. The problem is that the reporter believes you are responsible for inflating the price of passenger fares between the planets. The next day, an article appears, which makes you out to be a robber baron.";
                        soundFile = "bad7.wav";
                    } else if (sel2 == 6) {
                        b_Message.Caption = "You get booked on the Geeg Matiss Extravaganza, Kukubia's most popular late night talk show. The only problem is that you make a complete fool of yourself. The more you talk, the worse off you appear.";
                        soundFile = "bad7.wav";
                    } else if (sel2 == 7) {
                        b_Message.Caption = "You have no idea what your agent was thinking when she scheduled an interview with the Cosmic Consumer Caucus. Apparently, they are waging a war on passenger fair price fixing, and you are put in the awkward position of defending your prices.";
                        soundFile = "bad7.wav";
                    } else if (sel2 == 8) {
                        b_Message.Caption = "You should have known better than to do an interview with the Interplanetary Inquirer, Kukubia's most notorious gossip rag. The magazine winds up painting you as an obsessive money miser, who has billions of kubars stashed away in illegal bank accounts.";
                        soundFile = "bad7.wav";
                    } else if (sel2 == 9) {
                        b_Message.Caption = "It just so happens that Planet Line News is doing a feature on underpaid employees. They trot out all your workers, including the Union Boss, and have them talk for an hour about how little they are getting paid.";
                        soundFile = "bad7.wav";
                    } else if (sel2 == 10) {
                        b_Message.Caption = "You are thrilled to be invited to the Ceremony of the Stars, until you actually show up and discover that nobody wants to talk to you.";
                        soundFile = "agent2.wav";
                    }
                }
            } else if (sel == 3) {
                {
                    const sel2 = ((Mod(player.arrivalRoll, 10)) + 1);
                    if (sel2 == 1) {
                        b_Message.Caption = "You are lucky enough to get booked on the hottest daytime TV talk show. You spend the entire time explaining how your company provides the best service at the lowest cost.";
                        soundFile = "agent.wav";
                    } else if (sel2 == 2) {
                        b_Message.Caption = "To your surprise, you wind up doing a commercial for the computer game Zapitalism on prime time TV. Not only do you get to tell everyone how much you love playing Zapitalism, but LavaMind ends up paying you " + Format(payment, "#,#0") + " kubars.";
                        player.cash = player.cash + payment;
                        soundFile = "agent.wav";
                    } else if (sel2 == 3) {
                        b_Message.Caption = "Your agent books a lunch meeting for you with Kukubia's most famous sports star. You have such a pleasant time that the sports star volunteers to help promote your company at his next big game.";
                        soundFile = "agent.wav";
                    } else if (sel2 == 4) {
                        b_Message.Caption = "You don't know how your agent does it, but she manages to tie your company in with a new government travel program being sponsored by the Ministry of Travel. The Ministry promises to recommend your company to its civil servants, who commute regularly between the planets.";
                        soundFile = "agent.wav";
                    } else if (sel2 == 5) {
                        b_Message.Caption = "You meet with a journalist from the Astral Reporter, Kukubia's largest newspaper. You are prepared to tell your entire life story, but the journalist merely asks you a few questions about your ship size and cargo capacity, then leaves.";
                        soundFile = "agent2.wav";
                    } else if (sel2 == 6) {
                        b_Message.Caption = "You get all dressed up and are ready to appear on late night TV. However, when you show up at the studio, you are informed that you have been replaced by Peelia Veelia. Sorry, but that's show biz!";
                        soundFile = "agent2.wav";
                    } else if (sel2 == 7) {
                        b_Message.Caption = "You show up at a meeting with the Cosmic Consumer Caucus, a consumer watchdog group. You expect them to focus on your excellent safety record, but instead they merely talk about ways to improve service.";
                        soundFile = "agent2.wav";
                    } else if (sel2 == 8) {
                        b_Message.Caption = "Your agent has signed you up to do an interview with the Interplanetary Inquirer, Kukubia's most notorious gossip rag. However, when you show up, they are not interested in you at all.";
                        soundFile = "agent2.wav";
                    } else if (sel2 == 9) {
                        b_Message.Caption = "When you arrive at Planet Line News, Kukubia's premier TV news show, you are expecting an in-depth interview. However, it turns out to be only a sound bite.";
                        soundFile = "agent2.wav";
                    } else if (sel2 == 10) {
                        b_Message.Caption = "You show up at the Ceremony of the Stars expecting to be treated like a king. However, you wind up spending an uneventful evening trapped in a crowd of people trying to catch a glimpse of the Emperor.";
                        soundFile = "agent2.wav";
                    }
                }
            }
        }
        if (settings.soundOn == -1) {
            frm_Explore.b_Sound.Command = "Close";
        }
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + soundFile;
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        b_Button.Caption = "Return to Main Menu";
    }

    async function grantShipLeave() {
        let damages = 0;
        {
            const sel = randomBetween(1, 30);
            if (sel == 1) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "crew.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Your crew has a wonderful time surfing the Vorpal Pools, stuffing themselves with a Lorinian grapes and WaWa pies, and dancing the night away.";
            } else if (sel == 2) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "crew.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "When your crew returns to the ship, they are so exhausted after a night of partying that they can barely see straight.";
            } else if (sel == 3) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "crew.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Your crew thanks you for the much-needed vacation and promises to work harder than ever.";
            } else if (sel == 4) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "crew.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Your crew brings you a giant Bigaloo Pie as a gift to show their gratitude for letting them have a few days off.";
            } else if (sel == 5) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                damages = randomBetween(500, 2000) * player.crewSize;
                b_Message.Caption = "Your crew gets into a fight with a rowdy bunch of Lepro Ulps and winds up in jail. It costs you " + Format(damages, "#,#0") + " kubars to bail them out. What a vacation!";
                await spend(damages, 0);
            } else if (sel == 6 || sel == 7) {
                if (player.crewSalary > 1000) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Your crew has such a good time on the planet that when they return to the ship, they offer to reduce their salary from " + Format(player.crewSalary, "#,#0") + " to " + Format(player.crewSalary - 100, "#,#0") + " kubars per person.";
                    player.crewSalary = player.crewSalary - 100;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "crew.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Your crew brings you an inflatable baby carriage as a gift to show their gratitude for letting them have a few days off.";
                }
            } else if (sel == 8 || sel == 9) {
                if (player.wagesOwed > 0) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Your crew is so happy with their vacation that they offer to forget about any money you owe them. That means you no longer have to pay " + Format(player.wagesOwed, "#,#0") + " kubars in back wages.";
                    player.wagesOwed = 0;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "crew.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Your crew has a marvelous time seeing the famous Loro Opera, going to all the museums, and visiting the tomb of the great Bass Nicolson.";
                }
            } else if (sel == 10 || sel == 11 || sel == 12 || sel == 13 || sel == 14 || sel == 15) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "crew.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Your crew enjoys their short vacation and returns to the ship refreshed and ready to work.";
            } else if (sel == 16) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "crew.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Loro is bliss. Your pilot falls in love with one of the local girls, your navigator goes deep sea phonging, and the rest of your crew spend all their time paying court to Peelia Veelia.";
            } else if (sel == 17) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "crew.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "When your crew returns to the ship, they can barely keep their eyes open. They stayed up for three nights in a row talking about the metaphysics of astral projection with a tent full of Mamo Wuzzies, and now they are too pooped to pop.";
            } else if (sel == 18) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "crew.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "After a few days on Loro, your crew seems 10 years younger. They become happier, healthier and more alert. The clean air and stimulating conversations appear to have energized them like nothing else could have.";
            } else if (sel == 19) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "crew.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Your crew has such a marvelous time on Loro that they can't stop thanking you. They even try to make you promise to come back within a few weeks, but you manage to avoid this tricky situation.";
            } else if (sel == 20) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                damages = randomBetween(500, 2000) * player.crewSize;
                b_Message.Caption = "Two of your crew members get carried away while having fun at a beach side resort and manage to sink a 30 foot sun bathing raft. You can't imagine how they did this, but it ends up costing you " + Format(damages, "#,#0") + " kubars.";
                await spend(damages, 0);
            } else if (sel == 21 || sel == 22) {
                if (player.crewSalary > 1000) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "After a few days on Loro, your crew feels so relaxed that you manage to talk them into reducing their salary from " + Format(player.crewSalary, "#,#0") + " to " + Format(player.crewSalary - 100, "#,#0") + " kubars per person. Of course, as part of the bargain, you promise to return to Loro as often as possible.";
                    player.crewSalary = player.crewSalary - 100;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "fuel.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Your crew is so grateful at having this unexpected vacation that they all chip-in to fill up the ship's fuel tank.";
                    player.fuel = player.fuelCapacity;
                }
            } else if ((sel >= 23 && sel <= 24)) {
                if (player.wagesOwed > 0) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Peelia Veelia and the Mamo Wuzzies treat your crew like royalty. In fact, your crew ends up having so much fun that they don't want to leave. When you come to bring them back to the ship, they volunteer to forget all about the " + Format(player.wagesOwed, "#,#0") + " kubars you owe them if you allow them to stay just one more day. How can you refuse?";
                    player.wagesOwed = 0;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "crew.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Your crew has a splendid time on Loro painting their skin yellow, sipping the sacred nectar of the Halua Blossoms, and grooming the wild Mantapillars.";
                }
            } else if (sel == 25 || sel == 26 || sel == 27 || sel == 28 || sel == 29 || sel == 30) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "crew.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Your crew can't get enough of Loro and the Mamo Wuzzies, and you literally have to call the local police and have them dragged back to the ship.";
            }
        }
        b_Button.Caption = "Return to Main Menu";
    }

    function visitGrandSages() {
        b_Timer.Enabled = -1;
        {
            const sel = randomBetween(1, 30);
            if (sel == 1) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "monk.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages tell you to give to others before asking for yourself.";
            } else if (sel == 2) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "monk.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages tell you to examine your own actions before asking others to act.";
            } else if (sel == 3) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "monk.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages tell you that the pursuit of money drains the soul and obscures the path to true fulfillment.";
            } else if (sel == 4) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "monk.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages tell you to look to your neighbor's needs before thinking of your own.";
            } else if (sel == 5) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "monk.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages tell you that the way to solve your problems is to first understand yourself before asking for help from others.";
            } else if (sel == 6) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages say that hardship makes the soul grow faster. They cast an EVIL CURSE on you in the hopes that overcoming this obstacle will help you to become a stronger person.";
                player.luck = 15;
                player.luckIsTemporary = 0;
            } else if (sel == 7) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "blessing.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages BLESS you and your crew and urge you to give as much to others as you expect for yourself.";
                if (player.luck < 70) {
                    player.luck = 70;
                } else {
                    player.luck = player.luck + 5;
                    if (player.luck > 85) {
                        player.luck = 85;
                    }
                }
                player.luckIsTemporary = -1;
            } else if (sel == 8) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "blessing.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages BLESS your business and predict that your luck will soon take a turn for the better.";
                if (player.luck < 80) {
                    player.luck = 80;
                } else {
                    player.luck = player.luck + 5;
                    if (player.luck > 85) {
                        player.luck = 85;
                    }
                }
                player.luckIsTemporary = -1;
            } else if (sel == 9 || sel == 10) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "blessing.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages grant you a SMALL BLESSING and urge you to take care of those who depend upon you.";
                if (player.luck < 60) {
                    player.luck = 60;
                } else {
                    player.luck = player.luck + 5;
                    if (player.luck > 85) {
                        player.luck = 85;
                    }
                }
                player.luckIsTemporary = -1;
            } else if (sel == 11) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "blessing.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages grant you their HIGHEST BLESSING and urge you to make good use of your fortunes.";
                player.luck = 85;
                player.luckIsTemporary = -1;
            } else if (sel == 12) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "blessing.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages say a special prayer for you and your crew and urge you to look at life as a process, not a goal.";
                if (player.luck < 75) {
                    player.luck = 75;
                } else {
                    player.luck = player.luck + 5;
                    if (player.luck > 85) {
                        player.luck = 85;
                    }
                }
                player.luckIsTemporary = -1;
            } else if (sel == 13 || sel == 14 || sel == 15) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "monk.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "One of the apprentice monks informs you that the Grand Sages are in meditation right now. He asks you to come back next week.";
            } else if (sel == 16) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "monk.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages advise you not to depend upon others for your happiness.";
            } else if (sel == 17) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "monk.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages remind you that the pursuit of material wealth will only lead to discontentment.";
            } else if (sel == 18) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "monk.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages remind you that the path to enlightenment leads inward.";
            } else if (sel == 19) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "monk.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages instruct you to avoid becoming overly emotional and embrace the transitory nature of existence.";
            } else if (sel == 20) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "monk.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages instruct you to submit to reality instead of struggling to alter it.";
            } else if (sel == 21) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages harshly criticize you for failing to give back to the world what you have taken, and they CURSE the ground you walk on.";
                player.luck = 15;
                player.luckIsTemporary = 0;
            } else if (sel == 22) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "blessing.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages reluctantly grant you their BLESSING, asking you to work as hard to improve your spirit as you do to improve your business.";
                if (player.luck < 70) {
                    player.luck = 70;
                } else {
                    player.luck = player.luck + 5;
                    if (player.luck > 85) {
                        player.luck = 85;
                    }
                }
                player.luckIsTemporary = -1;
            } else if (sel == 23) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "blessing.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages congratulate you on your devotion and effort towards improving your spiritual side. You still have a long way to go, but they have given you their HIGHEST BLESSING.";
                if (player.luck < 80) {
                    player.luck = 80;
                } else {
                    player.luck = player.luck + 5;
                    if (player.luck > 85) {
                        player.luck = 85;
                    }
                }
                player.luckIsTemporary = -1;
            } else if (sel == 24 || sel == 25) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "blessing.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages grant you a SMALL BLESSING, but warn you to keep to the path you know in your heart to be true.";
                if (player.luck < 60) {
                    player.luck = 60;
                } else {
                    player.luck = player.luck + 5;
                    if (player.luck > 85) {
                        player.luck = 85;
                    }
                }
                player.luckIsTemporary = -1;
            } else if (sel == 26) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "blessing.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages praise you for your efforts to make your actions conform to your conscience. Then they sprinkle Mutta juice on your arms and grant you the HIGHEST BLESSING possible.";
                player.luck = 85;
                player.luckIsTemporary = -1;
            } else if (sel == 27) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "blessing.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Grand Sages say a short prayer for you, then forgive you for your transgressions and pettiness.";
                if (player.luck < 75) {
                    player.luck = 75;
                } else {
                    player.luck = player.luck + 5;
                    if (player.luck > 85) {
                        player.luck = 85;
                    }
                }
                player.luckIsTemporary = -1;
            } else if (sel == 28 || sel == 29 || sel == 30) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "monk.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "You quickly learn from the villagers that the Grand Sages are busy bathing the Quaso Mutta and refuse to see anyone this week.";
            }
        }
        b_Button.Caption = "Return to Main Menu";
    }

    async function buyDiscountFuel() {
        let discountPrice = 0;
        b_Timer.Enabled = -1;
        discountPrice = CLng(game.fuelPrice[game.planet[game.currentPlayer]] * (1 - ((10 + (player.arrivalRoll / 2)) / 100)));
        if ((player.fuelCapacity - player.fuel) == 0) {
            if (settings.soundOn == -1) {
                frm_Explore.b_Sound.Command = "Close";
            }
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "neutral.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            b_Message.Caption = "You go to fill up your tank but discover it is already full. You can't fill up a full tank, now can you?";
        } else if (((Mod(game.weeklyRoll, 5)) + 1) == 1) {
            if (settings.soundOn == -1) {
                frm_Explore.b_Sound.Command = "Close";
            }
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "neutral.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            {
                const sel = ((Mod(game.turn, 7)) + 1);
                if (sel == 1) {
                    b_Message.Caption = "When you dock your ship at Zobrok's refueling station, Zobrok informs you that he is terribly sorry, but the previous customer just purchased the last of his fuel.";
                } else if (sel == 2) {
                    b_Message.Caption = "When you arrive at Zobrok's refueling station with your ship, Zobrok says he changed his mind. You'll have to come back another week.";
                } else if (sel == 3) {
                    b_Message.Caption = "Before you can pull your ship up to Zobrok's refueling station, he informs you that he can't sell you anything after all. The prices have changed, and he is in no position to give you a discount.";
                } else if (sel == 4) {
                    b_Message.Caption = "As you pull your ship up to Zobrok's refueling station, he apologizes for making you go to all the trouble, but he just found a leak in his main tank.";
                } else if (sel == 5) {
                    b_Message.Caption = "Before you can pull your ship up to Zobrok's refueling station, he says he has changed his mind. No fuel for you this week.";
                } else if (sel == 6) {
                    b_Message.Caption = "When you arrive at Zobrok's refueling station with your ship, Zobrok is nowhere to be found. You wait around for a few hours, then become frustrated and leave.";
                } else if (sel == 7) {
                    b_Message.Caption = "As you pull up to Zobrok's refueling station, he rushes out and begs you to come back another time. He says he has an emergency to take care of and cannot help you this week!";
                }
            }
        } else {
            if (settings.soundOn == -1) {
                frm_Explore.b_Sound.Command = "Close";
            }
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "fuel.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            b_Message.Caption = "Zobrok fills up your tank, saving you a total of " + Format((player.fuelCapacity - player.fuel) * (game.fuelPrice[game.planet[game.currentPlayer]] - discountPrice), "#,#0") + " kubars.";
            await spend((discountPrice * (player.fuelCapacity - player.fuel)), 0);
            player.fuel = player.fuelCapacity;
        }
        b_Button.Caption = "Return to Main Menu";
    }

    async function readFortune() {
        let fortuneFee = 0;
        b_Timer.Enabled = -1;
        fortuneFee = CLng(CLng(player.arrivalRoll) * (game.shipSize[game.currentPlayer] / 10));
        if (((Mod(game.turn, 5)) + 1) == 1) {
            if (settings.soundOn == -1) {
                frm_Explore.b_Sound.Command = "Close";
            }
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "neutral3.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            {
                const sel = ((Mod(game.weeklyRoll, 10)) + 1);
                if (sel == 1) {
                    b_Message.Caption = "As it turns out, all the Soothsayers are having a party. They invite you to join in the festivities. After several hours of dancing and singing, you leave the Soothsayers with no idea what will become of you.";
                } else if (sel == 2) {
                    b_Message.Caption = "As luck would have it, the Soothsayers are having a religious festival this week and refuse to perform any aura readings.";
                } else if (sel == 3) {
                    b_Message.Caption = "An assistant Soothsayer informs you that the Soothsayers are restoring their aura this week and cannot be disturbed.";
                } else if (sel == 4) {
                    b_Message.Caption = "You are ushered into a waiting room and told that if a Soothsayer is available, you will be helped. After three hours of waiting, you become frustrated and leave.";
                } else if (sel == 5) {
                    b_Message.Caption = "The Soothsayer assigned to read your energy levels keeps hopping up and down with her eyes closed and refuses to talk to you.";
                } else if (sel == 6) {
                    b_Message.Caption = "The Soothsayers inform you that an energy shift around Ooom has distorted their aura readings, and they cannot help anyone this week.";
                } else if (sel == 7) {
                    b_Message.Caption = "The Soothsayers inform you that this is a religious holiday, and you will have to come back another week.";
                } else if (sel == 8) {
                    b_Message.Caption = "The Soothsayer assigned to you takes your reading, mumbles something to himself, then leaves the room.";
                } else if (sel == 9) {
                    b_Message.Caption = "A Soothsayer enters the room, feels your forehead, then informs you that you are too hot to read. Your aura is on fire, and you must meditate for a week before your energy levels can be accurately assessed.";
                } else if (sel == 10) {
                    b_Message.Caption = "The Soothsayer takes your hand and squeezes it twice, then falls fast asleep. You try to wake her, but it is impossible.";
                }
            }
        } else {
            if (settings.soundOn == -1) {
                frm_Explore.b_Sound.Command = "Close";
            }
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "sooth.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            await spend(fortuneFee, 0);
            if (player.luck <= 20) {
                b_Message.Caption = "The Soothsayer lays his sticky yellow fingers against your forehead and starts screaming wildly! Breaking away, the Soothsayer falls to the ground, then shouts out that you are cursed. You are headed for death and destruction. If you value your life, you must seek out a blessing right away before something terrible happens.";
            } else if (player.luck <= 25) {
                b_Message.Caption = "The Soothsayer reports that you have an extremely negative aura and will probably suffer some great calamity.";
            } else if (player.luck <= 30) {
                b_Message.Caption = "After the Soothsayer licks your fingers and examines your ear cavities, her eyes turn white and she begins shaking. She informs you that you are radiating an extremely negative energy. That can only mean one thing, you are headed for trouble and should be cautious in the near future.";
            } else if (player.luck <= 35) {
                b_Message.Caption = "The Soothsayer slides her slimy yellow fingers between your toes and lets out a gasp. Your aura is not good, not good at all. The Soothsayer warns you to be careful to avoid any precarious situations in the next few weeks.";
            } else if (player.luck <= 40) {
                b_Message.Caption = "The Soothsayer informs you that your aura is rather negative, and you should be careful for the next few weeks.";
            } else if (player.luck <= 45) {
                b_Message.Caption = "The Soothsayer performs a series of readings and comes to the conclusion that your aura is slightly on the negative side, but this is nothing to worry about.";
            } else if (player.luck <= 50) {
                b_Message.Caption = "After the reading has been completed, the Soothsayer informs you that your aura is average. Your luck could go either way in the near future.";
            } else if (player.luck <= 55) {
                b_Message.Caption = "The Soothsayer wraps his thick legs around your neck and begins wailing incomprehensibly. After 20 minutes of this, the Soothsayer sits up and politely explains that your aura is not perfect, but it's not terrible either. As far as he can see, it's a slightly light shade of gray, which isn't great but isn't anything to worry about.";
            } else if (player.luck <= 60) {
                b_Message.Caption = "The Soothsayer rubs her elbows in your face while singing to herself. It seems like she's having fun, but you definitely are not. Finally, after what feels like an eternity, she says she couldn't detect much of anything. Your energy level is slightly positive, which is good, but it's nothing to write home about.";
            } else if (player.luck <= 65) {
                if (randomBetween(1, 2) == 1) {
                    b_Message.Caption = "The Soothsayer performs the standard reading and comes back with good news. Your aura is positive. In fact, it's well above average. You can rest assured the odds are in your favor.";
                } else {
                    b_Message.Caption = "The Soothsayer explains that your aura is positive and may lead to some good fortune. As luck would have it, on your way home from the Soothsayer, you find a wallet stuffed with " + Format(fortuneFee * 5, "#,#0") + " kubars and no ID. When you take this to the local police, they tell you that no one has reported a lost wallet, so you can keep the money.";
                    player.cash = player.cash + (fortuneFee * 5);
                }
            } else if (player.luck <= 70) {
                if (randomBetween(1, 2) == 1) {
                    b_Message.Caption = "The Soothsayer sits on your back and begins pulling out small hairs with a tweezers. This doesn't hurt, but you find it rather strange. After examining these hairs for several hours, the Soothsayer says things are looking up. Your energy levels are on the rise. You aren't the most blessed person ever, but you don't have anything to worry about.";
                } else {
                    b_Message.Caption = "The Soothsayer explains that your aura is above average and good fortune is bound to come your way. That night, when you return to your ship, you find out that one of your passengers was a wealthy foreign monarch, and he was so impressed with your company that he has given you a gift of " + Format(fortuneFee * 10, "#,#0") + " kubars.";
                    player.cash = player.cash + (fortuneFee * 10);
                }
            } else if (player.luck <= 75) {
                if (randomBetween(1, 2) == 1) {
                    b_Message.Caption = "The Soothsayer reads your aura, then congratulates you on a fine showing. Your aura is very positive, and you should expect good fortune in the next few weeks. At least, the odds are stacked in your favor.";
                } else {
                    b_Message.Caption = "The Soothsayer explains that your aura is very positive, and the chance of bad luck occurring is rather remote. This is why you aren't surprised when a reckless driver slams into your taxi on the way home, then offers to pay you " + Format(fortuneFee * 15, "#,#0") + " kubars if you promise not to sue him. To make matters better, you aren't even injured in the accident.";
                    player.cash = player.cash + (fortuneFee * 15);
                }
            } else if (player.luck <= 80) {
                if (randomBetween(1, 2) == 1) {
                    b_Message.Caption = "The Soothsayer wraps your entire body up in wet rags, which smell like vinegar. After several hours, he returns with a big grin on his face. Your energy levels are fantastic. In fact, you are radiating such positive energy that you can expect good things to come in the near future.";
                } else {
                    b_Message.Caption = "The Soothsayer explains that you have an extremely positive aura and should encounter a string of good luck. It just so happens that only minutes later you receive a phone call from the Governor of Ooom, pledging to give your company " + Format(fortuneFee * 20, "#,#0") + " kubars in financial aid with no strings attached!";
                    player.cash = player.cash + (fortuneFee * 20);
                }
            } else {
                if (randomBetween(1, 2) == 1) {
                    b_Message.Caption = "The Soothsayer asks you to stand in a bucket of mouth wash. This lasts only two minutes, then the Soothsayer jumps up and hysterically hugs you. Your energy levels are off the charts! Falling to his knees the Soothsayer begins kissing your toes, which now smell like peppermint. You have the most positive energy levels the Soothsayer has seen in the past 10 months!!! You are truly blessed.";
                } else {
                    b_Message.Caption = "The Soothsayer explains that you have an extraordinarily positive aura and are truly blessed. The next day, you are fortunate enough to receive a " + Format(fortuneFee * 25, "#,#0") + " kubar refund from the Imperial Tax Office. They explain that they made a mistake in your taxes and have refunded you the difference plus compensation.";
                    player.cash = player.cash + (fortuneFee * 25);
                }
            }
            b_Message.Caption = b_Message.Caption + "\n" + "\n" + "Your luck score: " + Format(player.luck, "#0") + "%";
        }
        b_Button.Caption = "Return to Main Menu";
    }

    async function buyFasterEngine() {
        let slogan = "";
        b_Timer.Enabled = -1;
        if (((Mod(game.weeklyRoll, 4)) + 1) == 1) {
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "neutral.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            {
                const sel = ((Mod(game.turn, 10)) + 1);
                if (sel == 1) {
                    b_Message.Caption = "Unfortunately, L-Tech informs you that they are sold out of " + Format(game.engineSpeed[game.currentPlayer] + 1, "#,#0") + " kuarp engines. If you want a " + Format(game.engineSpeed[game.currentPlayer] + 1, "#,#0") + " kuarp engine, you will have to come back next week.";
                } else if (sel == 2) {
                    b_Message.Caption = "When you show up at the L-Tech engine plant, they inform you that their mechanic is ill, and they cannot install a new engine. They ask you to come back next week.";
                } else if (sel == 3) {
                    b_Message.Caption = "For no apparent reason, when you show up at the L-Tech engine plant, it is closed. You wait for a couple of hours, then end up leaving empty handed.";
                } else if (sel == 4) {
                    b_Message.Caption = "Your L-Tech representative informs you that Emperor Dred Nicolson has requested 500 L-Tech engines for the Imperial Fleet this week. Things are a madhouse right now, and you will have to come back another time when they are less busy.";
                } else if (sel == 5) {
                    b_Message.Caption = "An L-Tech manager apologizes for the situation. There is simply no way L-Tech can sell you an engine this week. The factory has been shut down due to a strike, and no engines are being sold or serviced.";
                } else if (sel == 6) {
                    b_Message.Caption = "When you show up at the L-Tech factory, a worker runs out shouting fire, fire, fire! A second later the L-Tech plant explodes in a ball of flames. So much for buying an engine this week.";
                } else if (sel == 7) {
                    b_Message.Caption = "A representative from the L-Tech plant informs you that they have just found a serious defect in their latest batch of " + Format(game.engineSpeed[game.currentPlayer] + 1, "#,#0") + " kuarp engines, and they have stopped selling them until the problem is fixed.";
                } else if (sel == 8) {
                    b_Message.Caption = "When you show up at the L-Tech factory, you are informed that Mr. Zinn has just ordered a shipment of fifty " + Format(game.engineSpeed[game.currentPlayer] + 1, "#,#0") + " kuarp engines for his latest business venture. This means there is nothing left to sell you this week.";
                } else if (sel == 9) {
                    b_Message.Caption = "Just as you are about to install a brand new " + Format(game.engineSpeed[game.currentPlayer] + 1, "#,#0") + " kuarp L-Tech engine on your ship, one of the dock workers informs you that a disgruntled L-Tech employee has planted bombs in the last three engines they installed. Hearing this, you decide to cancel your order.";
                } else if (sel == 10) {
                    b_Message.Caption = "When you show up at L-Tech Engines, the plant is shut down due to a week long national holiday. Too bad, you'll have to wait until next time to buy your engine upgrade.";
                }
            }
        } else {
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                {
                    const sel = randomBetween(1, 2);
                    if (sel == 1) {
                        b_Sound.FileName = Trim(paths.soundDir) + "engine.wav";
                    } else if (sel == 2) {
                        b_Sound.FileName = Trim(paths.soundDir) + "mech.wav";
                    }
                }
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            {
                const sel = randomBetween(1, 15);
                if (sel == 1) {
                    slogan = "This should help speed things up!";
                } else if (sel == 2) {
                    slogan = "Faster is better!";
                } else if (sel == 3) {
                    slogan = "It pays to be first!";
                } else if (sel == 4) {
                    slogan = "L-Tech is the best!";
                } else if (sel == 5) {
                    slogan = "It's worth every kubar!";
                } else if (sel == 6) {
                    slogan = "The early bird gets the worm!";
                } else if (sel == 7) {
                    slogan = "There's a need for speed!";
                } else if (sel == 8) {
                    slogan = "Got to keep up with the Jones!";
                } else if (sel == 9) {
                    slogan = "Time is money!";
                } else if (sel == 10) {
                    slogan = "You can never be too fast!";
                } else if (sel == 11) {
                    slogan = "The race is on!";
                } else if (sel == 12) {
                    slogan = "Okay, now you're moving!";
                } else if (sel == 13) {
                    slogan = "A kuarp a day keeps the competition at bay!";
                } else if (sel == 14) {
                    slogan = "Now you're cooking!";
                } else if (sel == 15) {
                    slogan = "Full speed ahead!";
                }
            }
            b_Message.Caption = "You just purchased L-Tech's super " + Format(game.engineSpeed[game.currentPlayer] + 1, "#,#0") + " kuarp engine for " + Format(((CLng(player.arrivalRoll) * CLng(game.weeklyRoll)) * 6), "#,#0") + " kubars. " + slogan;
            await spend(((CLng(player.arrivalRoll) * CLng(game.weeklyRoll)) * 6), 0);
            game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 1;
        }
        b_Button.Caption = "Return to Main Menu";
    }

    async function buyFromCornucopia() {
        let category = 0;
        let item = 0;
        let tons = 0;
        let pricePerTon = 0;
        let c = 0;
        let i = 0;
        let step = 0;
        let minPrice = 0;
        let maxPrice = 0;
        b_Timer.Enabled = -1;
        category = Mod(game.turn, 3);
        item = Mod(player.arrivalRoll, 6);
        step = 0;
        minPrice = 0;
        maxPrice = 0;
        for (c = 0; c <= 2; c++) {
            for (i = 0; i <= 5; i++) {
                step = step + 5;
                minPrice = (game.marketDifficulty + 1) * step;
                maxPrice = maxPrice + 40;
                if (c == category && i == item) {
                    c = 2;
                    i = 5;
                }
            }
        }
        tons = CLng((player.cargoCapacity * CLng(player.arrivalRoll)) / 100);
        if (tons < (player.cargoCapacity / 2)) {
            tons = CLng((player.cargoCapacity / 2));
        }
        pricePerTon = CLng(minPrice + ((maxPrice - minPrice) * (game.weeklyRoll / 100)));
        if (pricePerTon > game.prices[game.planet[game.currentPlayer]][category][item]) {
            pricePerTon = game.prices[game.planet[game.currentPlayer]][category][item];
        }
        if (tons > (player.cargoCapacity - player.cargoTotal)) {
            if (settings.soundOn == -1) {
                frm_Explore.b_Sound.Command = "Close";
            }
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "neutral.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            b_Message.Caption = "You cannot purchase " + Format(tons, "#,#0") + " tons of cargo because your ship only has room for " + Format(player.cargoCapacity - player.cargoTotal, "#,#0") + " tons. Before you purchase any goods from Lady Cornucopia, you must first make room by unloading some of the cargo from your ship. Lady Cornucopia insists upon selling all or nothing.";
            player.specialDone = 0;
        } else if (((Mod(game.weeklyRoll, 5)) + 1) == 1) {
            if (settings.soundOn == -1) {
                frm_Explore.b_Sound.Command = "Close";
            }
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "neutral.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            {
                const sel = ((Mod(game.turn, 10)) + 1);
                if (sel == 1) {
                    b_Message.Caption = "When you show up at Lady Cornucopia's Palace, she refuses to sell you anything. No reason is given, and two armed guards quickly escort you off the palace grounds.";
                } else if (sel == 2) {
                    b_Message.Caption = "When you dock your ship at Lady Cornucopia's warehouse, the security guard says he does not have authorization to sell you anything. You try to talk to the head administrator, but this does little good. They refuse to sell you any cargo.";
                } else if (sel == 3) {
                    b_Message.Caption = "When you arrive at Lady Cornucopia's Palace, you are promptly told that you must leave or your ship will be blown-up. This is enough to convince you that it is not a good time to bother the Lady.";
                } else if (sel == 4) {
                    b_Message.Caption = "One of Lady Cornucopia's servants informs you that the Lady has a severe headache and has canceled all business transactions this week. You are told to come back when the Lady is feeling better.";
                } else if (sel == 5) {
                    b_Message.Caption = "Lady Cornucopia takes one look at your face, then says she feels sick to her stomach. That's it. You are told to leave and not come back.";
                } else if (sel == 6) {
                    b_Message.Caption = "When you arrive at the palace, Lady Cornucopia is in a meeting with Emperor Dred Nicolson and refuses to sell you anything.";
                } else if (sel == 7) {
                    b_Message.Caption = "When you pull your ship up to the palace, several buildings are on fire. You quickly discover there has been a skirmish between Lady Cornucopia's security forces and a band of Hapa Jillos. Armed guards are running around everywhere, and you are told to leave the area immediately.";
                } else if (sel == 8) {
                    b_Message.Caption = "Lady Cornucopia comes out of her palace and personally apologizes for the situation. Apparently she has run out of goods to sell, and you must come back next week.";
                } else if (sel == 9) {
                    b_Message.Caption = "One of Lady Cornucopia's servants informs you that the entire warehouse full of goods is defective and must be destroyed. There will be no sales to anyone this week.";
                } else if (sel == 10) {
                    b_Message.Caption = "Lady Cornucopia invites you for tea and explains how business has not been so good lately. She would love to sell you some products, but since you are one of her smaller clients, she must hold onto the goods for her bigger customers. She hopes you understand.";
                }
            }
        } else {
            if (settings.soundOn == -1) {
                frm_Explore.b_Sound.Command = "Close";
            }
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "cornu.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            b_Message.Caption = "You just purchased " + Format(tons, "#,#0") + " tons of " + Trim(game.commodityNames[category][item]) + " at " + Format(pricePerTon, "#,#0") + " kubars/ton." + "\n" + "\n" + "You spent a total of " + Format(tons * pricePerTon, "#,#0") + " kubars." + "\n" + "\n" + "Have fun with the " + Trim(game.commodityNames[category][item]) + ".";
            player.cargoAvgCost[category][item] = CLng((player.cargoAvgCost[category][item] * player.cargo[category][item] + (pricePerTon * tons)) / (player.cargo[category][item] + tons));
            await spend(tons * pricePerTon, 0);
            player.cargoTotal = player.cargoTotal + tons;
            player.cargo[category][item] = player.cargo[category][item] + tons;
        }
        b_Button.Caption = "Return to Main Menu";
    }

    async function doPlanetSpecial() {
        if (player.specialDone == -1) {
            frm_Box0.FillElastic.Caption = "Planet Special";
            frm_Box0.b_Message.Caption = "\n" + "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            await frm_Box0.Show(1);
        } else {
            player.specialDone = -1;
            if (game.planetNames[game.planet[game.currentPlayer]] == "Vexx") {
                if (settings.soundOn == -1) {
                    frm_Explore.b_Sound.Command = "Close";
                }
                petitionMagistrate();
            } else if (game.planetNames[game.planet[game.currentPlayer]] == "Pyke") {
                if (settings.soundOn == -1) {
                    frm_Explore.b_Sound.Command = "Close";
                }
                await buyFasterEngine();
            } else if (game.planetNames[game.planet[game.currentPlayer]] == "Mira") {
                if (settings.soundOn == -1) {
                    frm_Explore.b_Sound.Command = "Close";
                }
                visitGrandSages();
            } else if (game.planetNames[game.planet[game.currentPlayer]] == "Stye") {
                if (settings.soundOn == -1) {
                    frm_Explore.b_Sound.Command = "Close";
                }
                askTradersUnion();
            } else if (game.planetNames[game.planet[game.currentPlayer]] == "Loro") {
                if (settings.soundOn == -1) {
                    frm_Explore.b_Sound.Command = "Close";
                }
                await grantShipLeave();
            } else if (game.planetNames[game.planet[game.currentPlayer]] == "Zile") {
                if (settings.soundOn == -1) {
                    frm_Explore.b_Sound.Command = "Close";
                }
                askZinnFavor();
            } else if (game.planetNames[game.planet[game.currentPlayer]] == "Frac") {
                if (settings.soundOn == -1) {
                    frm_Explore.b_Sound.Command = "Close";
                }
                await askLowerPremiums();
            } else if (game.planetNames[game.planet[game.currentPlayer]] == "Tilo") {
                await gamble();
            } else if (game.planetNames[game.planet[game.currentPlayer]] == "Queg") {
                await buyFromCornucopia();
            } else if (game.planetNames[game.planet[game.currentPlayer]] == "Xeen") {
                await upgradeShip();
            } else if (game.planetNames[game.planet[game.currentPlayer]] == "Ooom") {
                await readFortune();
            } else if (game.planetNames[game.planet[game.currentPlayer]] == "Hork") {
                await doMediaEvent();
            } else if (game.planetNames[game.planet[game.currentPlayer]] == "Bass") {
                visitStockBroker();
            } else if (game.planetNames[game.planet[game.currentPlayer]] == "Nosh") {
                await buyDiscountFuel();
            }
        }
    }

    function askTradersUnion() {
        b_Timer.Enabled = -1;
        {
            const sel = randomBetween(1, 31);
            if (sel == 1) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Trader's Union urges you to improve your business practices rather than relying on them to bail you out.";
            } else if (sel == 2) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                if (player.loan > 0) {
                    b_Message.Caption = "The Trader's Union says they will work on reducing your loan interest rates, but they can't promise anything.";
                } else {
                    b_Message.Caption = "The Trader's Union says they will work on raising the interest rate on your savings account, but they can't promise anything.";
                }
            } else if (sel == 3) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Trader's Union asks you to be patient and keep up the hard work.";
            } else if (sel == 4) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Trader's Union informs you that their budget is tight and they cannot do anything at the present time.";
            } else if (sel == 5) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Trader's Union says it would be unfair to change your rates while not doing the same for their other members.";
            } else if (sel == 6) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                if (player.loan > 0) {
                    b_Message.Caption = "The Trader's Union says that first you must prove your company is sound before they can address any of your concerns.";
                } else {
                    b_Message.Caption = "The Trader's Union says they will work on raising the interest rate on your savings account.";
                }
            } else if (sel == 7) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Trader's Union generously offers to increase your credit limit by 50,000 kubars.";
                player.creditLimit = player.creditLimit + 50000;
            } else if (sel == 8) {
                if (player.loanRate >= 0.04) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Trader's Union offers to lower the interest rate on your loan from " + Format(player.loanRate * 100, "#,#") + "% to " + Format((player.loanRate - 0.01) * 100, "#,#") + "%.";
                    player.loanRate = player.loanRate - 0.01;
                } else if (player.loanRate >= 0.02 && (player.cash + player.bankBalance - player.loan - player.zinnLoan) > 5000000) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Trader's Union offers to lower the interest rate on your loan from " + Format(player.loanRate * 100, "#,#") + "% to " + Format((player.loanRate - 0.01) * 100, "#,#") + "%.";
                    player.loanRate = player.loanRate - 0.01;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Trader's Union regrets to inform you that they must raise the interest rate on your loan from " + Format(player.loanRate * 100, "#,#") + "% to " + Format((player.loanRate + 0.01) * 100, "#,#") + "%.";
                    player.loanRate = player.loanRate + 0.01;
                }
            } else if (sel == 9) {
                if (player.bankRate == 0.01) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Trader's Union offers to increase the interest rate on your savings account from " + Format(player.bankRate * 100, "#,#") + "% to " + Format((player.bankRate + 0.01) * 100, "#,#") + "%.";
                    player.bankRate = player.bankRate + 0.01;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Trader's Union regrets to inform you that they must lower the interest rate on your savings account from " + Format(player.bankRate * 100, "#,#") + "% to " + Format((player.bankRate - 0.01) * 100, "#,#") + "%.";
                    player.bankRate = player.bankRate - 0.01;
                }
            } else if (sel == 10) {
                if (player.loan > 20) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Trader's Union generously offers to forgive one third of your debt. That means you now owe the Trader's Union only " + Format((player.loan - (player.loan / 3)), "#,#0") + " kubars instead of " + Format(player.loan, "#,#0") + " kubars.";
                    player.loan = CLng(player.loan - (player.loan / 3));
                } else {
                    if (player.bankRate == 0.01) {
                        if (settings.soundOn == -1) {
                            b_Sound.Command = "Close";
                            b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                            b_Sound.Command = "Open";
                            b_Sound.Command = "Play";
                        }
                        b_Message.Caption = "Due to inflationary pressures, the Trader's Union is willing to increase the interest rate on your savings account from " + Format(player.bankRate * 100, "#,#") + "% to " + Format((player.bankRate + 0.01) * 100, "#,#") + "%.";
                        player.bankRate = player.bankRate + 0.01;
                    } else {
                        if (settings.soundOn == -1) {
                            b_Sound.Command = "Close";
                            b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                            b_Sound.Command = "Open";
                            b_Sound.Command = "Play";
                        }
                        b_Message.Caption = "Due to a cut in interest rates at the Imperial Treasury, the Trader's Union regrets to inform you that they must lower the interest rate on your savings account from " + Format(player.bankRate * 100, "#,#") + "% to " + Format((player.bankRate - 0.01) * 100, "#,#") + "%.";
                        player.bankRate = player.bankRate - 0.01;
                    }
                }
            } else if (sel == 11) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                if (player.bankRate == 0.02) {
                    b_Message.Caption = "Your plea for assistance backfires! Instead of raising the interest rate on your savings account, the Trader's Union lowers it from " + Format(player.bankRate * 100, "#,#") + "% to " + Format((player.bankRate - 0.01) * 100, "#,#") + "%.";
                    player.bankRate = player.bankRate - 0.01;
                } else {
                    b_Message.Caption = "Your plea for assistance backfires! Instead of lowering your rates, the Trader's Union raises the interest on your loan from " + Format(player.loanRate * 100, "#,#") + "% to " + Format((player.loanRate + 0.01) * 100, "#,#") + "%.";
                    player.loanRate = player.loanRate + 0.01;
                }
            } else if ((sel >= 12 && sel <= 15)) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Trader's Union regrets to inform you that they are unable to provide financial assistance at this time.";
            } else if (sel == 16) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Trader's Union urges you to increase your profit margins and avoid borrowing money unless you absolutely have to.";
            } else if (sel == 17) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                if (player.loan > 0) {
                    b_Message.Caption = "The Trader's Union Official says he cannot possibly lower your loan interest rate right now because of government regulations.";
                } else {
                    b_Message.Caption = "The Trader's Union Official says he cannot possibly raise the interest rate on your savings account at this time because of an agreement with the Imperial Council.";
                }
            } else if (sel == 18) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Trader's Union Official explains how the last time someone asked him for a favor, he got into big trouble. This time he is being very careful before making any promises.";
            } else if (sel == 19) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Trader's Union Official complains how last week his salary was cut. He doesn't even know if the Trader's Union will be in business much longer if they keep losing money at the current rate.";
            } else if (sel == 20) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Trader's Union Official doesn't bother to return your phone calls, and his assistant refuses to arrange any meeting while you are on Stye.";
            } else if (sel == 21) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                if (player.loan > 0) {
                    b_Message.Caption = "The Trader's Union Official says he has doubts about your company, and honestly doesn't feel it is a good idea to loan you any more money at this time.";
                } else {
                    b_Message.Caption = "The Trader's Union Official invites you into his office, then begins complaining for an hour about how you already have a higher interest rate on your savings account than he does. He feels this is unfair and refuses to help you become even richer than you already are.";
                }
            } else if (sel == 22) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Trader's Union Official increases your credit limit by 75,000 kubars. However, he reminds you that he went out of his way and expects a favor in return.";
                player.creditLimit = player.creditLimit + 75000;
            } else if (sel == 23 || sel == 24) {
                if (player.loanRate >= 0.04) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Trader's Union Official says he has done extensive research on your company, and from the data, it appears you are a good credit risk. Under the Union's current policy, your loan interest rate will be reduced from " + Format(player.loanRate * 100, "#,#") + "% to " + Format((player.loanRate - 0.01) * 100, "#,#") + "%.";
                    player.loanRate = player.loanRate - 0.01;
                } else if (player.loanRate >= 0.02 && (player.cash + player.bankBalance - player.loan - player.zinnLoan) > 5000000) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Trader's Union Official says he has done extensive research on your company, and from the data, it appears you are a good credit risk. Under the Union's current policy, your loan interest rate will be reduced from " + Format(player.loanRate * 100, "#,#") + "% to " + Format((player.loanRate - 0.01) * 100, "#,#") + "%.";
                    player.loanRate = player.loanRate - 0.01;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Trader's Union Official informs you that after reviewing your company's financial standing, it turns out you are a higher credit risk than they previously thought. He regrets to inform you that the Union must raise the interest rate on your loan from " + Format(player.loanRate * 100, "#,#") + "% to " + Format((player.loanRate + 0.01) * 100, "#,#") + "%.";
                    player.loanRate = player.loanRate + 0.01;
                }
            } else if (sel == 25) {
                if (player.bankRate == 0.01) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Trader's Union Official implies that the Trader's Union is short on money and would rather you put your money in the bank than in other investments, like the stock market. Therefore, he is increasing the interest rate on your savings account from " + Format(player.bankRate * 100, "#,#") + "% to " + Format((player.bankRate + 0.01) * 100, "#,#") + "%.";
                    player.bankRate = player.bankRate + 0.01;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Trader's Union Official regrets to inform you that due to low inflation and other economic pressures, the bank is lowering interest rates on certain accounts. As a result, the interest rate on your savings account will decline from " + Format(player.bankRate * 100, "#,#") + "% to " + Format((player.bankRate - 0.01) * 100, "#,#") + "%.";
                    player.bankRate = player.bankRate - 0.01;
                }
            } else if (sel == 26) {
                if (player.loan > 20) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Trader's Union Official informs you that due to a new government subsidy program meant to stimulate the Kukubian economy, he is authorized to forgive one quarter of your debt. That means you now owe the Trader's Union only " + Format((player.loan - (player.loan / 4)), "#,#0") + " kubars instead of " + Format(player.loan, "#,#0") + " kubars.";
                    player.loan = CLng(player.loan - (player.loan / 4));
                } else {
                    if (player.bankRate == 0.01) {
                        if (settings.soundOn == -1) {
                            b_Sound.Command = "Close";
                            b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                            b_Sound.Command = "Open";
                            b_Sound.Command = "Play";
                        }
                        b_Message.Caption = "In an effort to boost the bank's working capital, the Trader's Union Official informs you that he is increasing the interest rate on your savings account from " + Format(player.bankRate * 100, "#,#") + "% to " + Format((player.bankRate + 0.01) * 100, "#,#") + "%. He hopes this will encourage you to deposit more money in the bank, rather than shifting it to other investments.";
                        player.bankRate = player.bankRate + 0.01;
                    } else {
                        if (settings.soundOn == -1) {
                            b_Sound.Command = "Close";
                            b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                            b_Sound.Command = "Open";
                            b_Sound.Command = "Play";
                        }
                        b_Message.Caption = "Due a severe setback in the economy and declining inflationary pressures, the Trader's Union Official informs you that the bank must lower the interest rate on your savings account from " + Format(player.bankRate * 100, "#,#") + "% to " + Format((player.bankRate - 0.01) * 100, "#,#") + "%.";
                        player.bankRate = player.bankRate - 0.01;
                    }
                }
            } else if (sel == 27) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                if (player.bankRate == 0.02) {
                    b_Message.Caption = "Your plea for assistance annoys the Trader's Union Official, and he becomes upset. Feeling that you are greedy and unappreciative, he single handedly authorizes the bank to lower the interest rate on your savings account from " + Format(player.bankRate * 100, "#,#") + "% to " + Format((player.bankRate - 0.01) * 100, "#,#") + "%.";
                    player.bankRate = player.bankRate - 0.01;
                } else {
                    b_Message.Caption = "Your plea for assistance prompts the Trader's Union Official to audit your company. What he finds is that you are not as good an investment as previously thought. Therefore, instead of lowering your loan rate, the Trader's Union raises the interest on your loan from " + Format(player.loanRate * 100, "#,#") + "% to " + Format((player.loanRate + 0.01) * 100, "#,#") + "%.";
                    player.loanRate = player.loanRate + 0.01;
                }
            } else if (sel == 28 || sel == 29 || sel == 30 || sel == 31) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "When you show up at the Trader's Union Headquarters, there is a huge line. In fact, it seems like everyone is asking them for something. After waiting six hours with no results, you become frustrated and give up.";
            }
        }
        b_Button.Caption = "Return to Main Menu";
    }

    async function gamble() {
        let wager = 0;
        let initialWager = 0;
        const RED = 255;
        const BLUE = 16711680;
        if (((Mod(game.weeklyRoll, 6)) + 1) == 1) {
            frameCount = 0;
            b_Timer.Enabled = -1;
            if (settings.soundOn == -1) {
                frm_Explore.b_Sound.Command = "Close";
            }
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "neutral.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            {
                const sel = ((Mod(game.turn, 7)) + 1);
                if (sel == 1) {
                    b_Message.Caption = "Unfortunately, all the casinos are closed this week in compliance with Emperor Dred Nicolson's \"Just Say No to Gambling\" campaign.";
                } else if (sel == 2) {
                    b_Message.Caption = "It is just your luck that the casinos on Tilo are closed for a local religious holiday.";
                } else if (sel == 3) {
                    b_Message.Caption = "The Imperial Magistrate happens to be visiting Tilo this week, and he has ordered all the casinos closed for a complete audit.";
                } else if (sel == 4) {
                    b_Message.Caption = "A major earthquake shook the planet yesterday, and all the casinos have closed for the remainder of the week.";
                } else if (sel == 5) {
                    b_Message.Caption = "The night you arrived on Tilo, a band of pirates sacked and pillaged several of the largest casinos. The Governor of the planet has called for a state of emergency and shut down all operations for the next few days.";
                } else if (sel == 6) {
                    b_Message.Caption = "The owner of one of the major casinos on Tilo died last night, and all the casinos have shut down for a week to pay their respects.";
                } else if (sel == 7) {
                    b_Message.Caption = "The Governor of Tilo has ordered the casinos shut down for a week due to a series of fights which have erupted. Apparently, the casinos attract a lot of low life pirates, petty thieves and mercenaries.";
                }
            }
        } else {
            frameCount = 0;
            b_Timer.Enabled = -1;
            wager = await askNumber(0, Format((0.05 * player.cash), "##0"), 0, player.cash, "The Casino" + "\n" + "\n" + "Enter the amount you'd like to wager.", " ");
            initialWager = wager;
            if (wager <= 0) {
                if (settings.soundOn == -1) {
                    frm_Explore.b_Sound.Command = "Close";
                }
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "neutral2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "You did not make a wager. The Casino Dealer politely asks you to leave and come back when you are ready to gamble.";
                player.specialDone = 0;
            } else if (wager > player.cash) {
                if (settings.soundOn == -1) {
                    frm_Explore.b_Sound.Command = "Close";
                }
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "neutral2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "You cannot bet more than you have. The Casino Dealer politely asks you to leave and come back when you have enough money.";
                player.specialDone = 0;
            } else {
                if (randomBetween(1, 2) == 1) {
                    if (settings.soundOn == -1) {
                        frm_Explore.b_Sound.Command = "Close";
                    }
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "thankyou.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Container.BackColor = RED;
                    b_Message.Caption = "Sorry, but you lose. The Casino Dealer takes your " + Format(wager, "#,#0") + " kubars and informs you that if you want to continue gambling, you'll have to come back another time.";
                    await spend(wager, 0);
                } else {
                    L182D4: while (true) {
                        if (settings.soundOn == -1) {
                            frm_Explore.b_Sound.Command = "Close";
                        }
                        if (settings.soundOn == -1) {
                            b_Sound.Command = "Close";
                            b_Sound.FileName = Trim(paths.soundDir) + "gamble.wav";
                            b_Sound.Command = "Open";
                            b_Sound.Command = "Play";
                        }
                        frm_Box1Port.b_Yes.Visible = -1;
                        frm_Box1Port.b_No.Visible = -1;
                        frm_Box1Port.b_OK.Visible = 0;
                        frm_Box1Port.b_Container.BackColor = BLUE;
                        frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "dealer1.bmp");
                        frm_Box1Port.b_ImageLable.Caption = "Casino Dealer";
                        frm_Box1Port.b_Message.Caption = "You win!!! The Casino Dealer informs you that you've just won " + Format(wager, "#,#0") + " kubars! Under the house rules, you now have the option of going for double or nothing." + "\n" + "\n" + "Do you want to continue gambling?";
                        await frm_Box1Port.Show(1);
                        if (frm_Box1Port.Tag == "YES") {
                            await Unload(frm_Box1Port);
                            wager = wager * 2;
                            if (randomInt(1, 2) == 1) {
                                continue L182D4;
                            } else {
                                frameCount = 0;
                                b_Timer.Enabled = -1;
                                if (settings.soundOn == -1) {
                                    b_Sound.Command = "Close";
                                    b_Sound.FileName = Trim(paths.soundDir) + "thankyou.wav";
                                    b_Sound.Command = "Open";
                                    b_Sound.Command = "Play";
                                }
                                b_Container.BackColor = RED;
                                b_Message.Caption = "Sorry, but you lose it all. The Casino Dealer politely takes your money and informs you that if you want to continue gambling, you'll have to come back next week.";
                                await spend(initialWager, 0);
                            }
                        } else {
                            await Unload(frm_Box1Port);
                            frameCount = 0;
                            b_Timer.Enabled = -1;
                            if (settings.soundOn == -1) {
                                b_Sound.Command = "Close";
                                b_Sound.FileName = Trim(paths.soundDir) + "tilo.wav";
                                b_Sound.Command = "Open";
                                b_Sound.Command = "Play";
                            }
                            b_Message.Caption = "Congratulations, you just won " + Format(wager, "#,#0") + " kubars!" + "\n" + "\n" + "You know what they say... It's better to be lucky than smart.";
                            player.cash = player.cash + wager;
                        }
                        break;
                    }
                }
            }
        }
        b_Button.Caption = "Return to Main Menu";
    }

    function petitionMagistrate() {
        b_Timer.Enabled = -1;
        {
            const sel = randomBetween(1, 30);
            if (sel == 1) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Imperial Magistrate apologizes for not being able to help, but says his hands are tied. He has no latitude to raise or lower taxes at the present time.";
            } else if (sel == 2) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Imperial Magistrate does not even bother to respond to your petition.";
            } else if (sel == 3) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Imperial Magistrate promises to do his best to convince the Supreme Commander to lower taxes the next time the Supreme Commander visits Kukubia.";
            } else if (sel == 4) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Imperial Magistrate says he is working on this problem and hopes to make headway in the near future.";
            } else if (sel == 5) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Imperial Magistrate says he is too busy to cater to the needs of every special interest group in the system. He warns you to think seriously before asking him for any more favors.";
            } else if (sel == 6) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The assistant to the Magistrate informs you that the Imperial Magistrate is out on vacation.";
            } else if (sel == 7) {
                if (game.passengerTaxRate >= 0.02) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "imperial.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Imperial Magistrate lowers the passenger tax from " + Format(game.passengerTaxRate * 100, "#,#0") + "% to " + Format((game.passengerTaxRate * 100) - 1, "#,#0") + "%.";
                    game.passengerTaxRate = game.passengerTaxRate - 0.01;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "asian.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Annoyed by continually being pestered to lower taxes, the Imperial Magistrate instead raises passenger taxes from " + Format(game.passengerTaxRate * 100, "#,#0") + "% to " + Format((game.passengerTaxRate * 100) + 1, "#,#0") + "%.";
                    game.passengerTaxRate = game.passengerTaxRate + 0.01;
                }
            } else if (sel == 8) {
                if (game.importTariff >= 0.02) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "imperial.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Imperial Magistrate lowers the import tariffs from " + Format(game.importTariff * 100, "#,#0") + "% to " + Format((game.importTariff * 100) - 1, "#,#0") + "%.";
                    game.importTariff = game.importTariff - 0.01;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "asian.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Annoyed by continually being pestered to lower taxes, the Imperial Magistrate instead raises the import tariffs from " + Format(game.importTariff * 100, "#,#0") + "% to " + Format((game.importTariff * 100) + 1, "#,#0") + "%.";
                    game.importTariff = game.importTariff + 0.01;
                }
            } else if (sel == 9) {
                if (game.exportTariff >= 0.02) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "imperial.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Imperial Magistrate lowers the export tariffs from " + Format(game.exportTariff * 100, "#,#0") + "% to " + Format((game.exportTariff * 100) - 1, "#,#0") + "%.";
                    game.exportTariff = game.exportTariff - 0.01;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "asian.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Annoyed by continually being pestered to lower taxes, the Imperial Magistrate instead raises the export tariffs from " + Format(game.exportTariff * 100, "#,#0") + "% to " + Format((game.exportTariff * 100) + 1, "#,#0") + "%.";
                    game.exportTariff = game.exportTariff + 0.01;
                }
            } else if (sel == 10) {
                if (player.passengerTaxOwed + player.tariffsOwed >= 2) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "imperial.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Imperial Magistrate generously grants your company an emergency tax break. That means you don't have to pay " + Format((player.passengerTaxOwed + player.tariffsOwed), "#,#0") + " kubars in taxes! You now owe 0 kubars in taxes and tariffs.";
                    player.passengerTaxOwed = 0;
                    player.tariffsOwed = 0;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Imperial Magistrate's secretary tells you he is in a meeting right now but next time you visit the planet he will be more than happy to talk with you.";
                }
            } else if ((sel >= 11 && sel <= 15)) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Imperial Magistrate's secretary tells you he is in a meeting right now, but the next time you visit the planet, he will be more than happy to talk with you.";
            } else if (sel == 16) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Imperial Magistrate criticizes you for even daring to ask about lowering taxes. Where is your community spirit? Don't you have any loyalty to the government?";
            } else if (sel == 17) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Imperial Magistrate says he is simply too busy to heed every individual's petty request. If you have an issue worth discussing, such as a donation to the Imperial Treasury, then he will talk to you.";
            } else if (sel == 18) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Imperial Magistrate says he will be meeting with Supreme Commander Dred Nicolson next week, and if the Emperor seems in a good mood, he might dare to bring up the issue of taxes.";
            } else if (sel == 19) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Imperial Magistrate sits you down in his office, and for the next two hours, he complains about how underpaid government bureaucrats are. He can't even afford to take his family on a vacation, and all you think about is paying less taxes!";
            } else if (sel == 20) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Imperial Magistrate instructs you to put down your request in writing, and he will forward it to the Department of Petitions for review.";
            } else if (sel == 21) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Imperial Magistrate has an ulcer and refuses to talk to you.";
            } else if (sel == 22) {
                if (game.passengerTaxRate >= 0.02) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "imperial.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Imperial Magistrate says he understands the trouble your industry is having and is willing to lower the passenger tax across the board from " + Format(game.passengerTaxRate * 100, "#,#0") + "% to " + Format((game.passengerTaxRate * 100) - 1, "#,#0") + "%.";
                    game.passengerTaxRate = game.passengerTaxRate - 0.01;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "asian.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "After examining your industry's tax rates, The Imperial Magistrate comes to the conclusion that your sector is not paying its fair share in taxes. Consequently, he raises passenger taxes for all trading companies from " + Format(game.passengerTaxRate * 100, "#,#0") + "% to " + Format((game.passengerTaxRate * 100) + 1, "#,#0") + "%.";
                    game.passengerTaxRate = game.passengerTaxRate + 0.01;
                }
            } else if (sel == 23) {
                if (game.importTariff >= 0.02) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "imperial.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Imperial Magistrate says he understands the need to support trade and commerce between the planets of Kukubia, and he offers to lower the import tariffs from " + Format(game.importTariff * 100, "#,#0") + "% to " + Format((game.importTariff * 100) - 1, "#,#0") + "%.";
                    game.importTariff = game.importTariff - 0.01;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "asian.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Imperial Magistrate says he will not participate in corporate welfare while there are starving children around the galaxy. Hence, instead of lowering your taxes, he raises the import tariffs for all the trading companies from " + Format(game.importTariff * 100, "#,#0") + "% to " + Format((game.importTariff * 100) + 1, "#,#0") + "%.";
                    game.importTariff = game.importTariff + 0.01;
                }
            } else if (sel == 24) {
                if (game.exportTariff >= 0.02) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "imperial.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Imperial Magistrate says the government's new policy is to stimulate growth and lower taxes. Consequently, he cuts the export tariffs for all trading companies from " + Format(game.exportTariff * 100, "#,#0") + "% to " + Format((game.exportTariff * 100) - 1, "#,#0") + "%.";
                    game.exportTariff = game.exportTariff - 0.01;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "asian.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "The Imperial Magistrate asks you how you expect Kukubia to grow and prosper without paying your fair share. You use the government's navigation system, docking ports, and currency exchange, but you don't want to pay taxes. Well, here's something for you. He is raising the export tariffs for all companies from " + Format(game.exportTariff * 100, "#,#0") + "% to " + Format((game.exportTariff * 100) + 1, "#,#0") + "%.";
                    game.exportTariff = game.exportTariff + 0.01;
                }
            } else if (sel == 25) {
                if (player.passengerTaxOwed + player.tariffsOwed >= 2) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "imperial.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "After you eloquently explain your company's financial situation, the Imperial Magistrate is so moved that he grants your company an emergency tax break. That means you don't have to pay " + Format((player.passengerTaxOwed + player.tariffsOwed), "#,#0") + " kubars in taxes! You now owe 0 kubars in taxes and tariffs.";
                    player.passengerTaxOwed = 0;
                    player.tariffsOwed = 0;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "When you show up at the government office, the Imperial Magistrate's assistant informs you that he is booked for the entire week. If you want to see the Magistrate, you will have to try another time.";
                }
            } else if (sel == 26 || sel == 27 || sel == 28 || sel == 29 || sel == 30) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "asian2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The Imperial Magistrate is away on official business. Please try again another week.";
            }
        }
        b_Button.Caption = "Return to Main Menu";
    }

    async function upgradeShip() {
        let upgrade = "";
        let cost = 0;
        cost = (CLng(player.arrivalRoll) * CLng(game.weeklyRoll)) * 6;
        {
            const sel = ((Mod(player.arrivalRoll, 4)) + 1);
            if (sel == 1) {
                upgrade = "turbocharge your ship's engine";
            } else if (sel == 2) {
                upgrade = "expand your ship's cargo bay by 10 tons";
            } else if (sel == 3) {
                upgrade = "expand your ship's passenger capacity by 1 seat";
            } else if (sel == 4) {
                upgrade = "expand your ship's fuel tank capacity by 5 tons";
            }
        }
        if (randomBetween(1, 3) == 1) {
            if (settings.soundOn == -1) {
                frm_Explore.b_Sound.Command = "Close";
            }
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "neutral.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            {
                const sel = randomBetween(1, 15);
                if (sel == 1) {
                    b_Message.Caption = "As luck would have it, your brilliant mechanic isn't quite as smart as he thought he was. After taking apart your ship and making a big mess, he discovers it's impossible to " + upgrade + ".";
                } else if (sel == 2) {
                    b_Message.Caption = "You show up at your mechanic's garage, and the place is a disaster. To make matters worse, your mechanic is passed out on the floor. It seems like your favorite mechanic has been having some trouble lately.";
                } else if (sel == 3) {
                    b_Message.Caption = "When you show up at your mechanic's workshop, he is not there. You wait around for three hours, then get fed up and leave.";
                } else if (sel == 4) {
                    b_Message.Caption = "It turns out that the day you are scheduled to bring in your ship for an upgrade, your favorite mechanic has agreed to host the Mechanics Union Dance at his garage. Instead of fixing your ship, you spend the afternoon dancing with a bunch of greasy mechanics.";
                } else if (sel == 5) {
                    b_Message.Caption = "As it turns out, your mechanic is unable to get the proper parts to make the upgrade to your ship.";
                } else if (sel == 6) {
                    b_Message.Caption = "Your mechanic works for 48 hours straight trying to upgrade your ship, but he can't seem to get it right. In the end, he finally gives up and collapses on the ground exhausted.";
                } else if (sel == 7) {
                    b_Message.Caption = "Your mechanic spends the entire afternoon telling jokes and having a jolly good time. The only problem is that he never actually gets around to making the changes on your ship.";
                } else if (sel == 8) {
                    b_Message.Caption = "Your mechanic and three of his assistants go to work on your ship. They've nearly completed the job when they run into a critical problem with the ship's power system and are forced to scrap the whole idea.";
                } else if (sel == 9) {
                    b_Message.Caption = "Your mechanic struggles to make the necessary changes, but in the end it proves too difficult for him.";
                } else if (sel == 10) {
                    b_Message.Caption = "Your mechanic makes the upgrade. However, by the time he's finished, there is no room for the crew. You are furious and force him to return the ship to the way it was.";
                } else if (sel == 11) {
                    b_Message.Caption = "Your mechanic confides in you that this change he is about to make may permanently damage your ship's drive system. You wisely decide not to go ahead with the upgrade.";
                } else if (sel == 12) {
                    b_Message.Caption = "Your mechanic is simply too busy to get around to upgrading your ship. Sorry, but you'll have to come back another week.";
                } else if (sel == 13) {
                    b_Message.Caption = "Your cautious mechanic examines your ship, then concludes that it might not be such a good idea to upgrade it after all.";
                } else if (sel == 14) {
                    b_Message.Caption = "Your mechanic examines your ship, then concludes it's a piece of junk. He refuses to waste his time and your money working on it.";
                } else if (sel == 15) {
                    b_Message.Caption = "Your mechanic can't seem to find the right tools to make the necessary upgrades to your ship. After searching for several hours, he finally gives up and tells you to come back another week.";
                }
            }
        } else {
            if (settings.soundOn == -1) {
                frm_Explore.b_Sound.Command = "Close";
            }
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "teeter2.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            await spend(cost, 0);
            {
                const sel = ((Mod(player.arrivalRoll, 4)) + 1);
                if (sel == 1) {
                    game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 1;
                } else if (sel == 2) {
                    player.cargoCapacity = player.cargoCapacity + 10;
                } else if (sel == 3) {
                    player.passengerCapacity = player.passengerCapacity + 1;
                    if (player.passengersBoarded == -1) {
                        if ((player.passengersWaiting - player.passengersAboard) > 0) {
                            player.passengersAboard = player.passengersAboard + 1;
                            player.cash = player.cash + player.ticketPrice;
                            player.passengerTaxOwed = CLng(player.passengerTaxOwed + (player.ticketPrice * game.passengerTaxRate));
                        }
                    } else {
                        if (player.passengersAboard < player.passengersWaiting) {
                            player.passengersAboard = player.passengersAboard + 1;
                        }
                    }
                } else if (sel == 4) {
                    player.fuelCapacity = player.fuelCapacity + 5;
                }
            }
            {
                const sel = randomBetween(1, 3);
                if (sel == 1) {
                    b_Message.Caption = "With a few spare parts and some hard work, your mechanic manages to " + upgrade + ".";
                } else if (sel == 2) {
                    b_Message.Caption = "Your mechanic is successful! In no time, he manages to " + upgrade + ".";
                } else if (sel == 3) {
                    b_Message.Caption = "Your mechanic labors day and night to " + upgrade + ". It's difficult work, but he does a fantastic job!";
                }
            }
        }
        b_Button.Caption = "Return to Main Menu";
    }

    function askZinnFavor() {
        b_Timer.Enabled = -1;
        {
            const sel = randomBetween(1, 31);
            if (sel == 1) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mr. Zinn apologizes for being unable to lower his rates or extend you any more credit at this time.";
            } else if (sel == 2) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mr. Zinn tells you that he is all out of money. His business is barely surviving, and he cannot lower his rates.";
            } else if (sel == 3) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mr. Zinn says that times are tough for everyone, and you have to do your best with the current rates.";
            } else if (sel == 4) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mr. Zinn says he's afraid his own company is about to go bankrupt, so please don't ask him for any more favors.";
            } else if (sel == 5) {
                if (settings.soundOn == -1) {
                    b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    b_Sound.Command = "Close";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mr. Zinn says he can't lower his rates right now, but maybe in a few weeks he can help you. Please come back again later.";
            } else if (sel == 6) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mr. Zinn says the situation is out of his control. His shareholders have set the rate, and he can do nothing about it.";
            } else if (sel == 7) {
                if (player.zinnRate >= 0.02) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Mr. Zinn lowers your interest rate from " + Format((player.zinnRate * 100), "#,#0") + " % to " + Format((player.zinnRate * 100) - 1, "#,#0") + " %.";
                    player.zinnRate = player.zinnRate - 0.01;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Mr. Zinn becomes angry. He says your rate is already 1%, the lowest in the system, and you still pester him for more. He decides to raise your rate to 2%.";
                    player.zinnRate = 0.02;
                }
            } else if (sel == 8) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mr. Zinn generously extends your credit limit by 50,000 kubars.";
                player.zinnCreditLimit = player.zinnCreditLimit + 50000;
            } else if (sel == 9) {
                if (player.zinnLoan > 20) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Mr. Zinn feels sorry for you and offers to forgive 1/3 of your debt. That means your debt shrinks from " + Format(player.zinnLoan, "#,#0") + " kubars to " + Format(player.zinnLoan - (player.zinnLoan / 3), "#,#0") + " kubars.";
                    player.zinnLoan = CLng(player.zinnLoan - (player.zinnLoan / 3));
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Mr. Zinn invites you to share dinner with him.";
                }
            } else if (sel == 10) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "As a true friend, Mr. Zinn loans you 50,000 more kubars and extends your credit limit by 75,000 kubars. If you don't need the money, just pay him back before you leave Zile, and you won't be charged any interest.";
                player.zinnLoan = player.zinnLoan + 50000;
                player.zinnCreditLimit = player.zinnCreditLimit + 75000;
                player.cash = player.cash + 50000;
            } else if (sel == 11 || sel == 12 || sel == 13 || sel == 14 || sel == 15) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "The butler informs you that Mr. Zinn is away on business and should return sometime soon.";
            } else if (sel == 16) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mr. Zinn has come down with a recurring case of Nefratic Fever and cancels his meeting with you.";
            } else if (sel == 17) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mr. Zinn invites you into his home and asks you what you think of him getting a nose transplant operation. How would he look? Do you think it's beautiful? Is it worth 100,000 kubars?";
            } else if (sel == 18) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mr. Zinn knows how difficult it must be for you, but he cannot help at this time. After all, he must maintain his luxurious lifestyle, and how can he possibly do that if his clients are charity cases.";
            } else if (sel == 19) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mr. Zinn encourages you to borrow more from the Trader's Union and stop pestering him for help.";
            } else if (sel == 20) {
                if (settings.soundOn == -1) {
                    b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    b_Sound.Command = "Close";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mr. Zinn explains how he's involved in several major business deals right now and cannot loan you any cash. He may even need to borrow money from the Trader's Union to cover his debts.";
            } else if (sel == 21) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mr. Zinn sits you down and ask you to give him half a million kubars. Then begins to laugh! He's just teasing you. But seriously, he cannot afford to help you at this time. Although, if you come back in a few weeks, things may be different.";
            } else if (sel == 22 || sel == 23) {
                if (player.zinnRate >= 0.02) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Mr. Zinn says you've been a long time family friend and a good customer. Because of this, he is willing to lower your interest rate from " + Format((player.zinnRate * 100), "#,#0") + " % to " + Format((player.zinnRate * 100) - 1, "#,#0") + " %.";
                    player.zinnRate = player.zinnRate - 0.01;
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Mr. Zinn opens the door a crack but won't let you inside. In a nervous voice, he mutters that your rate is already too low, and he has no choice but to raise it. From now on you will pay 2% interest per week. Then he shuts the door and double locks it.";
                    player.zinnRate = 0.02;
                }
            } else if (sel == 24) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mr. Zinn is in a jolly mood. One of his daughters just gave birth. Today, he will raise your credit limit by 75,000 kubars.";
                player.zinnCreditLimit = player.zinnCreditLimit + 75000;
            } else if (sel == 25) {
                if (player.zinnLoan > 20) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Mr. Zinn sits you down. He says he is worried about your company and fears you may fall far behind the competition unless you take action right away. To help you out, he is willing to forgive one quarter of your debt. That means your debt will shrink from " + Format(player.zinnLoan, "#,#0") + " kubars to " + Format(player.zinnLoan - (player.zinnLoan / 4), "#,#0") + " kubars.";
                    player.zinnLoan = CLng(player.zinnLoan - (player.zinnLoan / 4));
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    b_Message.Caption = "Mr. Zinn introduces you to his family. There is Mrs. Zinn and his 12 daughters. He is a proud father, and he encourages you not to let your business get in the way of having a family. He believes it's the best part of his life.";
                }
            } else if (sel == 26) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "good.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mr. Zinn realizes how tough the competition is and wants to help. This one time he is willing to loan you 40,000 more kubars and extend your credit limit by 60,000 kubars. If you don't need the money, just pay him back before you leave Zile, and you won't be charged any interest.";
                player.zinnLoan = player.zinnLoan + 40000;
                player.zinnCreditLimit = player.zinnCreditLimit + 60000;
                player.cash = player.cash + 40000;
            } else if (sel == 27 || sel == 28 || sel == 29 || sel == 30 || sel == 31) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                b_Message.Caption = "Mrs. Zinn comes to the door and apologizes. She explains that her husband is tied up in meetings all this week and cannot talk with you. However, please drop by the next time you visit Zile.";
            }
        }
        b_Button.Caption = "Return to Main Menu";
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_Exit_Click();
        }
    }

    function Form_Load() {
        let category = 0;
        let item = 0;
        let amount = 0;
        let pricePerTon = 0;
        let description = "";
        let c = 0;
        let i = 0;
        let step = 0;
        let minPrice = 0;
        let maxPrice = 0;
        frameCount = 1;
        animFrame = 1;
        if (game.planetNames[game.planet[game.currentPlayer]] == "Vexx") {
            if (player.specialDone == -1) {
                b_Message.Caption = "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            } else {
                b_Message.Caption = "Vexx is the seat of the Imperial Magistrate for the entire system of Kukubia." + "\n" + "\n" + "While on Vexx you can petition the government for lower import tariffs, export tariffs and passenger taxes.";
            }
            b_Button.Caption = "Petition for Lower Taxes";
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "asian.bmp");
            Label1.Caption = "Imperial Magistrate";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Pyke") {
            if (player.specialDone == -1) {
                b_Message.Caption = "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            } else {
                b_Message.Caption = "Pyke is home to L-Tech, the largest engine manufacturer in Kukubia." + "\n" + "\n" + "While on Pyke you can obtain the best deals on new faster " + Format((game.engineSpeed[game.currentPlayer] + 1), "#,#0") + " kuarp engines. The cost varies depending on demand. This week you can purchase a " + Format((game.engineSpeed[game.currentPlayer] + 1), "#,#0") + " kuarp engine for " + Format(((CLng(player.arrivalRoll) * CLng(game.weeklyRoll)) * 6), "#,#0") + " kubars.";
            }
            b_Button.Caption = "Purchase a New Faster Engine";
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "MECH.BMP");
            Label1.Caption = "L-Tech Sales Rep.";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Mira") {
            if (player.specialDone == -1) {
                b_Message.Caption = "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            } else {
                b_Message.Caption = "Mira is the oldest and most mystical of all the planets in Kukubia. The majority of Kukubia's religions have their origin on Mira." + "\n" + "\n" + "While on Mira, you may pay a visit to the renowned Grand Sages and ask them for a blessing, which can help to turn a bad luck streak into good fortune.";
            }
            b_Button.Caption = "Ask To See Grand Sages";
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "MONK.BMP");
            Label1.Caption = "Grand Sage";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Stye") {
            if (player.specialDone == -1) {
                b_Message.Caption = "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            } else {
                b_Message.Caption = "Stye is the financial capital of Kukubia and where the Trader's Union Headquarters is located." + "\n" + "\n" + "While on Stye, you can ask the Trader's Union for financial assistance. If you are lucky, they may lower the interest rate on your loan, increase your credit limit, or raise the interest rate on your savings account.";
            }
            b_Button.Caption = "Ask for Financial Assistance";
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan1.bmp");
            Label1.Caption = "Trader's Union Official";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Loro") {
            b_Timer.Enabled = -1;
            if (player.specialDone == -1) {
                b_Message.Caption = "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            } else {
                b_Message.Caption = "Loro is known throughout Kukubia as the Pleasure Planet. It is the most popular resort/vacation spot in the entire system." + "\n" + "\n" + "While on Loro, you can grant your crew ship leave. This will boost their morale and make for a better working relationship.";
            }
            b_Button.Caption = "Grant Crew Ship Leave";
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "PEELIA.BMP");
            Label1.Caption = "Peelia Veelia, Queen of Loro";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Zile") {
            if (player.specialDone == -1) {
                b_Message.Caption = "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            } else {
                b_Message.Caption = "Zile is Mr. Zinn's home planet." + "\n" + "\n" + "While on Zile, you may pay Mr. Zinn a visit and ask him for a favor. If you are lucky, he will lower the interest rate on your loan or increase your credit limit.";
            }
            b_Button.Caption = "Ask Zinn for a Favor";
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ZINN.BMP");
            Label1.Caption = "Mr. Zinn";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Frac") {
            if (player.specialDone == -1) {
                b_Message.Caption = "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            } else {
                b_Message.Caption = "Frac is a bustling business center." + "\n" + "\n" + "While on Frac you can pay a visit to the Voyager's Insurance Company headquarters and ask for a reduction in your weekly premiums.";
            }
            b_Button.Caption = "Ask for Lower Premiums";
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
            Label1.Caption = "Your Insurance Agent";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Tilo") {
            b_Timer.Enabled = -1;
            if (player.specialDone == -1) {
                b_Message.Caption = "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            } else {
                b_Message.Caption = "Tilo is the only planet in Kukubia with legalized gambling. If you're feeling lucky, you can try your hand at Tilo's most popular game: ALL OR NOTHING. If you win, you'll double whatever you bet. If you lose, the fun is over." + "\n" + "\n" + "NOTE: The house will take a bet as big as all the cash you have.";
            }
            b_Button.Caption = "Try Your Luck at Gambling";
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "dealer1.bmp");
            Label1.Caption = "Casino Dealer";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Queg") {
            category = Mod(game.turn, 3);
            item = Mod(player.arrivalRoll, 6);
            step = 0;
            minPrice = 0;
            maxPrice = 0;
            for (c = 0; c <= 2; c++) {
                for (i = 0; i <= 5; i++) {
                    step = step + 5;
                    minPrice = (game.marketDifficulty + 1) * step;
                    maxPrice = maxPrice + 40;
                    if (c == category && i == item) {
                        c = 2;
                        i = 5;
                    }
                }
            }
            amount = CLng((player.cargoCapacity * CLng(player.arrivalRoll)) / 100);
            if (amount < (player.cargoCapacity / 2)) {
                amount = CLng((player.cargoCapacity / 2));
            }
            pricePerTon = CLng(minPrice + ((maxPrice - minPrice) * (game.weeklyRoll / 100)));
            if (pricePerTon > game.prices[game.planet[game.currentPlayer]][category][item]) {
                pricePerTon = game.prices[game.planet[game.currentPlayer]][category][item];
            }
            if (player.specialDone == -1) {
                b_Message.Caption = "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            } else {
                b_Message.Caption = "Queg is the infamous renegade planet. It is here that the galaxy's most notorious gangsters come to unload their wares." + "\n" + "\n" + "This week Lady Cornucopia, the ruler of Queg, offers to sell you " + Format(amount, "#,#0") + " tons of " + Trim(game.commodityNames[category][item]) + " for only " + Format(pricePerTon, "#,#0") + " kubars per ton." + "\n" + "\n" + "The current market price of " + Trim(game.commodityNames[category][item]) + " on Queg is " + Format(game.prices[game.planet[game.currentPlayer]][category][item], "#,#0") + " kubars per ton.";
            }
            b_Button.Caption = "Purchase from Lady Cornucopia";
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "cornu1.bmp");
            Label1.Caption = "Lady Cornucopia";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Xeen") {
            b_Timer.Enabled = -1;
            {
                const sel = ((Mod(player.arrivalRoll, 4)) + 1);
                if (sel == 1) {
                    description = "turbocharge your ship's engine";
                } else if (sel == 2) {
                    description = "expand your ship's cargo bay by 10 tons";
                } else if (sel == 3) {
                    description = "expand your ship's passenger capacity by 1 seat";
                } else if (sel == 4) {
                    description = "expand your ship's fuel tank capacity by 5 tons";
                }
            }
            amount = (CLng(player.arrivalRoll) * CLng(game.weeklyRoll)) * 6;
            if (player.specialDone == -1) {
                b_Message.Caption = "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            } else {
                b_Message.Caption = "Xeen is one giant junkyard filled with spare parts and brilliant mechanics." + "\n" + "\n" + "Your favorite mechanic claims he has found the necessary parts and can " + description + ", but it will cost you " + Format(amount, "#,#0") + " kubars.";
            }
            b_Button.Caption = "Upgrade Your Ship";
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "mechan1.bmp");
            Label1.Caption = "Your Mechanic";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Ooom") {
            amount = CLng(CLng(player.arrivalRoll) * (game.shipSize[game.currentPlayer] / 10));
            if (player.specialDone == -1) {
                b_Message.Caption = "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            } else {
                b_Message.Caption = "Ooom is known throughout the galaxy as the Fortune Teller's Planet. This is because the Soothsayers of Ooom have the uncanny ability to predict the future by scanning one's aura for positive or negative energy." + "\n" + "\n" + "This week the Soothsayers are charging " + Format(amount, "#,#0") + " kubars for their service.";
            }
            b_Button.Caption = "Have Your Fortune Read";
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "sooth3.bmp");
            Label1.Caption = "Soothsayer";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Hork") {
            b_Timer.Enabled = -1;
            {
                const sel = ((Mod(player.arrivalRoll, 10)) + 1);
                if (sel == 1) {
                    description = "on hottest daytime TV talk show";
                } else if (sel == 2) {
                    description = "on prime time TV";
                } else if (sel == 3) {
                    description = "with Kukubia's most famous sports star";
                } else if (sel == 4) {
                    description = "with the Ministry of Travel";
                } else if (sel == 5) {
                    description = "with a journalist from the Astral Reporter";
                } else if (sel == 6) {
                    description = "on late night TV";
                } else if (sel == 7) {
                    description = "with the Cosmic Consumer Caucus";
                } else if (sel == 8) {
                    description = "with the Interplanetary Inquirer";
                } else if (sel == 9) {
                    description = "on Planet Line News";
                } else if (sel == 10) {
                    description = "at the Ceremony of the Stars";
                }
            }
            if (player.specialDone == -1) {
                b_Message.Caption = "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            } else {
                b_Message.Caption = "Hork is the media capital of Kukubia, affectionately known as Horkywood. You have an agent, whose job is to get your company free publicity." + "\n" + "\n" + "This week your agent claims to have a mega media event scheduled for you " + description + ". Do you want to do it?";
            }
            b_Button.Caption = "Do it!";
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "agent1.bmp");
            Label1.Caption = "Your Agent";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Bass") {
            if (player.specialDone == -1) {
                b_Message.Caption = "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            } else {
                b_Message.Caption = "Bass is where all the stock brokers, market analysts and traders congregate to exchange information." + "\n" + "\n" + "If your stock broker is not too busy, she can provide you with detailed information on market conditions across Kukubia. Do you want to pay her a visit?";
            }
            b_Button.Caption = "Visit Your Stock Broker";
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "broker1.bmp");
            Label1.Caption = "Your Stock Broker";
        } else if (game.planetNames[game.planet[game.currentPlayer]] == "Nosh") {
            if (player.specialDone == -1) {
                b_Message.Caption = "You have already completed your PLANET SPECIAL for this turn. Try again next turn.";
            } else {
                b_Message.Caption = "Welcome to Nosh, the fuel depot of Kukubia. You hear that Zobrok, a big time wholesaler, is selling fuel at " + Format(10 + (player.arrivalRoll / 2), "#,#0") + "% off the retail price." + "\n" + "\n" + "In other words, Zobrok is selling fuel at " + Format(game.fuelPrice[game.planet[game.currentPlayer]] * (1 - ((10 + (player.arrivalRoll / 2)) / 100)), "#,#0") + " kubars/ton, while most other distributors are selling it at " + Format(game.fuelPrice[game.planet[game.currentPlayer]], "#,#0") + " kubars/ton.";
            }
            b_Button.Caption = "Pay a Visit to Zobrok";
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "zobrok1.bmp");
            Label1.Caption = "Zobrok the Fuel Wholesaler";
        }
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + game.planetNames[game.planet[game.currentPlayer]] + ".wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
    }

    return {
        b_Button_Click, b_Button_MouseDown, b_Button_MouseUp, b_Exit_Click,
        b_Exit_MouseDown, b_Exit_MouseUp, b_Help_Click, b_Help_MouseDown,
        b_Help_MouseUp, b_Timer_Timer, visitStockBroker, askLowerPremiums,
        doMediaEvent, grantShipLeave, visitGrandSages, buyDiscountFuel,
        readFortune, buyFasterEngine, buyFromCornucopia, doPlanetSpecial,
        askTradersUnion, gamble, petitionMagistrate, upgradeShip,
        askZinnFavor, Form_Activate, Form_KeyPress, Form_Load,
    };
});
