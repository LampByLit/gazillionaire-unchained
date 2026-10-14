// Originally translated from src/WEATHER.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Weather",
  ["Form", "frm_Weather", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Weather Bureau", "BackColor": 0, "Left": 450, "Top": 1845, "Width": 7350, "Height": 4995, "WindowState": 2, "ScaleMode": 1, "FillColor": 8454016, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 450, "ClientTop": 1845, "ClientWidth": 7350, "ClientHeight": 4995}, [
    ["Timer", "b_Timer", {"Interval": 50, "Left": 930, "Top": 1650}],
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 15, "IntBkg": 16744576}, [
      ["VideoSoftElastic", "b_Button", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 2400, "Top": 6240, "Width": 4830, "Height": 585, "TabIndex": 9, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Return to Main Menu", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
      ["MMControl", "b_Sound", {"Left": 6120, "Top": 240, "Width": 3540, "Height": 330, "TabIndex": 8, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic4", {"BackColor": 4194304, "Left": 90, "Top": 930, "Width": 4650, "Height": 5205, "TabIndex": 6, "AutoSizeChildren": 1, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 5, "BevelOuterWidth": 10, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "VSElastic3", {"BackColor": 16744576, "Left": 225, "Top": 225, "Width": 4200, "Height": 4755, "TabIndex": 7, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16744576}, [
          ["Image", "Image1", {"Left": 0, "Top": 0, "Width": 4200, "Height": 4755, "Stretch": -1}]
        ]]
      ]],
      ["VideoSoftElastic", "b_Container", {"BackColor": 4194304, "ForeColor": 65535, "Left": 4830, "Top": 930, "Width": 4665, "Height": 5205, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 1, "BorderWidth": 24, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 8, "CaptionPos": 0, "IntBkg": 4194304}, [
        ["Label", "b_Message", {"Caption": "Welcome to Weather Bureau.", "ForeColor": 16777215, "Left": 360, "Top": 360, "Width": 3945, "Height": 4485, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 5, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "b_Help", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 7290, "Top": 6240, "Width": 2205, "Height": 585, "TabIndex": 3, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 90, "Top": 90, "Width": 9405, "Height": 735, "TabIndex": 2, "FontName": "Arial", "FontSize": 18, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 8, "Caption": "Weather Bureau", "CaptionPos": 4, "IntBkg": 4194304}],
      ["VideoSoftElastic", "b_Exit", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 120, "Top": 6240, "Width": 2205, "Height": 585, "TabIndex": 1, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}]
    ]]
  ]],
function (me) {
    const { b_Timer, FillElastic, b_Button, b_Sound, VSElastic4, VSElastic3, Image1, b_Container } = me.controls;
    const { b_Message, b_Help, VSElastic2, b_Exit } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    let animFrame = 0;

    async function b_Button_Click() {
        me.MousePointer = HOURGLASS;
        b_Timer.Enabled = 0;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        frm_Explore.b_Weather.Tag = "RETURN TO MAIN MENU";
        await Unload(me);
    }

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        b_Timer.Enabled = 0;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
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
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box1.FillElastic.Caption = "Help (Weather Bureau)";
        frm_Box1.b_Message.Caption = "The Weather Bureau provides you with the latest reports on solar storms, typhoons, asteroid belts, and other natural perils which may affect your company.";
        await frm_Box1.Show(1);
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = 0x800000;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = 0x400000;
    }

    function b_Timer_Timer() {
        if (animFrame == 1) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "weather2.bmp");
        } else if (animFrame == 2) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "WEATHER.BMP");
        }
        animFrame = animFrame + 1;
        if (animFrame == 3) {
            animFrame = 1;
        }
    }

    function showWeatherReport() {
        if (game.weatherEvent == 1) {
            b_Message.Caption = "Our satellites indicate you should be careful when travelling near " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". A meteor storm is expected to move into the area this week.";
        } else if (game.weatherEvent == 2) {
            b_Message.Caption = "We expect a solar storm to hit " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " this week. If you plan on travelling in that area, be sure to prepare for some rough weather.";
        } else if (game.weatherEvent == 3) {
            b_Message.Caption = "This week's forecast shows a Space Hurricane forming around " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". If you plan on visiting " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ", you might invest in a little Voyager's Insurance.";
        } else if (game.weatherEvent == 4) {
            b_Message.Caption = "The skies are looking quite turbulent on planet " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " these days. The locals inform us that a Stellar Typhoon will hit the planet any day now.";
        } else if (game.weatherEvent == 5) {
            b_Message.Caption = "It looks like a corrosive cloud of Dexxy Gas is moving towards " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". If you plan on being in the area, you should beware.";
        } else if (game.weatherEvent == 6) {
            b_Message.Caption = "If you're planning a trip to " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " any time soon, I'd be on the look out for Mippi Weeds. A sticky drift of weeds is headed in that direction.";
        } else if (game.weatherEvent == 7) {
            b_Message.Caption = "We predict a stream of acidic Bollup Juice will be flowing past " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " in the near future. This deadly liquid is known to cause severe damage to engine pods and hull liners.";
        } else if (game.weatherEvent == 8) {
            b_Message.Caption = "It seems like a pool of Wess Vapor is accumulating around " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". It should reach harmful levels within a few days.";
        } else if (game.weatherEvent == 9) {
            b_Message.Caption = "Beware, a Stellar Whirl Pool is forming off planet " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". It should reach critical strength in the next few days.";
        } else if (game.weatherEvent == 10) {
            b_Message.Caption = "We have reports of a Bobble Warp, a dangerous break in the time/space continuum, flaring up in the region around " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ".";
        } else if ((game.weatherEvent >= 11 && game.weatherEvent <= 15)) {
            b_Message.Caption = "Welcome to the Weather Bureau. All is looking clear this week. No reports of meteor storms or space hurricanes yet. You know what they say, \"No news is good news.\"";
        } else if (game.weatherEvent == 16) {
            b_Message.Caption = UCase(Trim(game.planetNames[game.weatherPlanet])) + " has been experiencing some mighty dry weather lately. Local Officials expressed fears that this may turn into a drought.";
        } else if (game.weatherEvent == 17) {
            b_Message.Caption = "It's cloudy over " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " these days. Looks like occasional showers, clearing up later in the week.";
        } else if (game.weatherEvent == 18) {
            b_Message.Caption = "Don't forget your raincoat if you're headed to " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". We expect a healthy dose of wet weather.";
        } else if (game.weatherEvent == 19) {
            b_Message.Caption = "It looks like the skies around " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " have cleared up. Good news for anyone heading that way.";
        } else if (game.weatherEvent == 20) {
            b_Message.Caption = "It's the perfect time of year to travel to " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". The skies are looking beautiful and the Imo Blossoms are in full bloom.";
        } else if (game.weatherEvent == 21) {
            b_Message.Caption = "The weather around planet " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " has taken a turn for the better these days. No Bobble Warps or Dexxy Gas has been spotted for quite some time.";
        } else if (game.weatherEvent == 22) {
            b_Message.Caption = "It appears that the seasonal Meteor Storms around " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " aren't coming this year. That's good news for merchants operating in the region.";
        } else if (game.weatherEvent == 23) {
            b_Message.Caption = "We have reports that the Wess Vapor problem around " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " has completely diminished. You shouldn't experience any trouble if you are headed in that direction.";
        } else if (game.weatherEvent == 24) {
            b_Message.Caption = "The space around " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " is black and beautiful this week. It looks like clear sailing for those of you passing through the area.";
        } else if (game.weatherEvent == 25) {
            b_Message.Caption = "It's the perfect time of year to visit " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " and join in the local Ipnu Festivals. The weather is expected to be gorgeous for at least the next week.";
        } else if (game.weatherEvent == 26) {
            b_Message.Caption = "If you enjoy drinking Gapa Milk under milky green skies, now is a great time to head to " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". The unusually humid weather this past year has inspired the Gapa Cattle to produced record quantities of this delicious beverage.";
        } else if (game.weatherEvent == 27) {
            b_Message.Caption = "It looks like the unseasonably hot weather on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " has produced an explosion of Kele Jumpers. These hungry insects are causing the local farmers a real headache but shouldn't be much of a problem to visitors.";
        } else if (game.weatherEvent == 28) {
            b_Message.Caption = "The temperature on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " has dropped lately. This climate change may cause some trouble for the local farmers but shouldn't inconvenience any visitors to the planet.";
        } else if (game.weatherEvent == 29) {
            b_Message.Caption = "Don't expect perfect weather when you visit " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". It looks like they are in for some heavy rains. But no need to worry, only minor flooding is expected this year.";
        } else if (game.weatherEvent == 30) {
            b_Message.Caption = "The region around " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " looks like it is finally clearing up. We don't expect any new problems in the area for quite some time.";
        } else if (game.weatherEvent == 31) {
            b_Message.Caption = "A recent heat wave on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " has caused 2,000 tons of whipped cream to go rancid. This is a major loss for the whipped cream industry.";
        } else if (game.weatherEvent == 32) {
            b_Message.Caption = "The freezing temperatures on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " over the past few months have caused a number of outdoor lava lamps to stop functioning.";
        } else if (game.weatherEvent == 33) {
            b_Message.Caption = "The unseasonably warm temperatures on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " have caused the Yiffit Fly population to explode. If you're headed in that direction, be sure to bring some Yiffit repellent.";
        } else if (game.weatherEvent == 34) {
            b_Message.Caption = "The extremely hot weather on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " this past week has caused literally thousands of tons of jelly beans to melt into giant jelly gobs. The manufacturers have no choice but to destroy these gobs and write off the losses.";
        } else if (game.weatherEvent == 35) {
            b_Message.Caption = "The cold weather on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " this past week has kept people indoors, and as a consequence, local shop owners are suffering.";
        } else if (game.weatherEvent == 36) {
            b_Message.Caption = "An unexpected tidal wave on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " wiped out an entire village. Fortunately, this happened during the Hagel Pilgrimage, and the village was almost entirely empty.";
        } else if (game.weatherEvent == 37) {
            b_Message.Caption = "As a result of the heat wave on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ", locals have taken to painting their skin silver. They claim this reflects the sun and prevents skin cancer. If you're headed to the planet, be sure to bring sun glasses because at times it can be quite blinding.";
        } else if (game.weatherEvent == 38) {
            b_Message.Caption = "Locals on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " are now engaged in their annual snow eating contest. The individual who manages to eat the most snow can claim the Snow Stuffer of the Year Award.";
        } else if (game.weatherEvent == 39) {
            b_Message.Caption = "Mothers on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " claim that the unseasonably hot weather this past summer prevented numerous pregnancies. Statistical data shows that the birth rate has fallen 14% compared to the same time last year.";
        } else if (game.weatherEvent == 40) {
            b_Message.Caption = "Because of the heavy rains this past winter on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ", umbrella sales were well above average, and store owners report that their inventories are substantially lower than in previous years.";
        } else if (game.weatherEvent == 41) {
            b_Message.Caption = "Due to the above average snow fall this winter on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ", a startup company announced plans to package the fresh snow, keep it frozen, and sell it to ski resorts around Kukubia. It remains to be seen whether or not there is a market for this type of product.";
        } else if (game.weatherEvent == 42) {
            b_Message.Caption = "Gusty winds and non-stop rain fell on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " this past week. Unfortunately, Emperor Dred Nicolson was visiting the planet at the time and became extremely upset. Taking the terrible weather as a personal insult, the Emperor vowed never to come back to " + Trim(game.planetNames[game.weatherPlanet]) + ".";
        } else if (game.weatherEvent == 43) {
            b_Message.Caption = "Due to the extended drought on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ", the entire year's grain harvest has been ruined.";
        } else if (game.weatherEvent == 44) {
            b_Message.Caption = "A major earthquake shook " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " late last night. As of today, " + Format(game.weeklyRoll * 3, "#,#0") + " are reported dead and thousands are homeless. Crews are still working around the clock to rescue those trapped in the rubble.";
        } else if (game.weatherEvent == 45) {
            b_Message.Caption = "A series of devastating floods has wiped out " + Format((game.weeklyRoll / 2) + 40, "#,#0") + "% of the farms on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". Emperor Dred Nicolson has declared this a planetary emergency and is sending one billion kubars in aid to the planet.";
        } else if (game.weatherEvent == 46) {
            b_Message.Caption = "The warm weather has triggered an explosion in the Catox Bug population, and farmers on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " are battling to save their crops from these ravenous insects. The Governor has asked for help from the Imperial Magistrate, but as of yet, there has been no official response.";
        } else if (game.weatherEvent == 47) {
            b_Message.Caption = "The weather on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " has been warm and beautiful. That is why the Governor just enacted a new law outlawing nude bathing. This is in response to a flood of tourists, who have come to the planet to enjoy the beaches and shed their clothing.";
        } else if (game.weatherEvent == 48) {
            b_Message.Caption = "The Kukubian Association of Meteorologists is planning a picnic on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " this weekend. Unfortunately, it is supposed to rain both days.";
        } else if (game.weatherEvent == 49) {
            b_Message.Caption = "A new study shows that our weather predictions are correct " + Format((game.weeklyRoll / 2) + 40, "#,#0") + "% of the time. You'll be happy to know this is up from " + Format((game.weeklyRoll / 2) + 35, "#,#0") + "% last year and is well above the " + Format((game.weeklyRoll / 2) + 13, "#,#0") + "% national average.";
        } else if (game.weatherEvent == 50) {
            b_Message.Caption = "The Kukubian Broadcasters Association is thinking of launching a fruits and vegetables channel. This will feature fruit and vegetable related stories 24 hours a day.";
        } else if (game.weatherEvent == 51) {
            b_Message.Caption = "Clouds of space dust were spotted forming around " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". Experts in the area inform us that the dust may appear ominous, but it should not impede travel at all.";
        } else if (game.weatherEvent == 52) {
            b_Message.Caption = "Clouds of green gas are reported to be rising from the surface of " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". Scientists on the planet say these clouds may look dangerous, but they are nothing to worry about.";
        } else if (game.weatherEvent == 53) {
            b_Message.Caption = "Last night, a meteor slammed into a merchant ship trying to land on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". The ship was heavily damaged but managed to land safely.";
        } else if (game.weatherEvent == 54) {
            b_Message.Caption = "Clouds of radioactive particles were spotted in the region of " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". Experts in the area claim these particles are essentially harmless and should disperse within a few days.";
        } else if (game.weatherEvent == 55) {
            b_Message.Caption = "A small commuter craft slammed into a 5,000 ton freighter as it was approaching " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". It exploded upon impact, and all onboard the ship are reported dead.";
        } else if (game.weatherEvent == 56) {
            b_Message.Caption = "A corrosive cloud of Dexxy Gas severely damaged a cargo ship headed for " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". Fortunately, no one was injured and the Dexxy Gas seems to have naturally dispersed.";
        } else if (game.weatherEvent == 57) {
            b_Message.Caption = "A stream of Bollup Juice took a bite out of a passing merchant ship near " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " last night. Fortunately, the Bollup Juice has since been neutralized by an anti-Bollup stream.";
        } else if (game.weatherEvent == 58) {
            b_Message.Caption = "A meteor shower rained down on " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " yesterday evening. It appears that 17 buildings were damaged and two individuals were injured. The shower lasted for approximately 24 minutes.";
        } else if (game.weatherEvent == 59) {
            b_Message.Caption = "Clouds of dense gas around " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " have created a traffic jam. Ships entering and leaving the planet must now travel at a snail's pace to avoid bumping into each other. The government is currently trying to figure out a way of dispersing the troublesome gas.";
        } else if (game.weatherEvent == 60) {
            b_Message.Caption = "A recent survey indicates that weather related accidents across Kukubia are down " + Format((game.weeklyRoll / 2) + 10, "#,#0") + "% over the same period last year. Perhaps this is an indication that more travellers are tuning into our weather reports and planning safer trips.";
        } else if (game.weatherEvent == 61) {
            b_Message.Caption = "Our satellites indicate you should be careful when travelling near " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". A meteor storm is expected to move into the area this week.";
        } else if (game.weatherEvent == 62) {
            b_Message.Caption = "We expect a solar storm to hit " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " this week. If you plan on travelling in that area, be sure to prepare for some rough weather.";
        } else if (game.weatherEvent == 63) {
            b_Message.Caption = "This week's forecast shows a Space Hurricane forming around " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". If you plan on visiting " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ", you might invest in a little Voyager's Insurance.";
        } else if (game.weatherEvent == 64) {
            b_Message.Caption = "The skies are looking quite turbulent on planet " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " these days. The locals inform us that a Stellar Typhoon will hit the planet any day now.";
        } else if (game.weatherEvent == 65) {
            b_Message.Caption = "It looks like a corrosive cloud of Dexxy Gas is moving towards " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". If you plan on being in the area, you should beware.";
        } else if (game.weatherEvent == 66) {
            b_Message.Caption = "If you're planning a trip to " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " any time soon, I'd be on the look out for Mippi Weeds. A sticky drift of weeds is headed in that direction.";
        } else if (game.weatherEvent == 67) {
            b_Message.Caption = "We predict a stream of acidic Bollup Juice will be flowing past " + UCase(Trim(game.planetNames[game.weatherPlanet])) + " in the near future. This deadly liquid is known to cause severe damage to engine pods and hull liners.";
        } else if (game.weatherEvent == 68) {
            b_Message.Caption = "It seems like a pool of Wess Vapor is accumulating around " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". It should reach harmful levels within a few days.";
        } else if (game.weatherEvent == 69) {
            b_Message.Caption = "Beware, a Stellar Whirl Pool is forming off planet " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ". It should reach critical strength in the next few days.";
        } else if (game.weatherEvent == 70) {
            b_Message.Caption = "We have reports of a Bobble Warp, a dangerous break in the time/space continuum, flaring up in the region around " + UCase(Trim(game.planetNames[game.weatherPlanet])) + ".";
        }
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
        me.MousePointer = HOURGLASS;
        animFrame = 1;
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "WEATHER.BMP");
        showWeatherReport();
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "weather.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
    }

    return {
        b_Button_Click, b_Exit_Click, b_Exit_MouseDown, b_Exit_MouseUp,
        b_Help_Click, b_Help_MouseDown, b_Help_MouseUp, b_Timer_Timer,
        showWeatherReport, Form_Activate, Form_KeyPress, Form_Load,
    };
});
