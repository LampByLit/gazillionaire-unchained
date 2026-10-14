// Originally translated from src/NEWS.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_News",
  ["Form", "frm_News", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "News & Information Center", "BackColor": 0, "Left": 525, "Top": 1785, "Width": 6450, "Height": 4545, "WindowState": 2, "ScaleMode": 1, "FillColor": 8454016, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 525, "ClientTop": 1785, "ClientWidth": 6450, "ClientHeight": 4545}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 1, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 15, "IntBkg": 16744576}, [
      ["Timer", "b_Timer", {"Interval": 50, "Left": 30, "Top": 570}],
      ["MMControl", "b_Sound", {"Left": 6060, "Top": 180, "Width": 3540, "Height": 330, "TabIndex": 0, "Visible": 0}],
      ["VideoSoftElastic", "b_Exit", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 120, "Top": 6240, "Width": 2205, "Height": 585, "TabIndex": 9, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 90, "Top": 90, "Width": 9405, "Height": 735, "TabIndex": 8, "FontName": "Arial", "FontSize": 18, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 8, "Caption": "News and Information Center", "CaptionPos": 4, "IntBkg": 4194304}],
      ["VideoSoftElastic", "b_Help", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 7290, "Top": 6240, "Width": 2205, "Height": 585, "TabIndex": 7, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
      ["VideoSoftElastic", "b_Container", {"BackColor": 4194304, "ForeColor": 65535, "Left": 4830, "Top": 930, "Width": 4665, "Height": 5205, "TabIndex": 5, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 1, "BorderWidth": 24, "BevelInner": 0, "BevelOuter": 6, "BevelInnerWidth": 0, "BevelOuterWidth": 8, "CaptionPos": 0, "IntBkg": 4194304}, [
        ["Label", "b_Message", {"Caption": "Welcome to News and Information Center!", "ForeColor": 16777215, "Left": 360, "Top": 360, "Width": 3945, "Height": 4485, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 6, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "VSElastic4", {"BackColor": 4194304, "Left": 90, "Top": 930, "Width": 4650, "Height": 5205, "TabIndex": 3, "AutoSizeChildren": 1, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 5, "BevelOuterWidth": 10, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "VSElastic3", {"BackColor": 16744576, "Left": 225, "Top": 225, "Width": 4200, "Height": 4755, "TabIndex": 4, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16744576}, [
          ["Image", "Image1", {"Left": 0, "Top": 0, "Width": 4200, "Height": 4755, "Stretch": -1}]
        ]]
      ]],
      ["VideoSoftElastic", "b_Button", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 2400, "Top": 6240, "Width": 4830, "Height": 585, "TabIndex": 2, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Return to Main Menu", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Timer, b_Sound, b_Exit, VSElastic2, b_Help, b_Container, b_Message } = me.controls;
    const { VSElastic4, VSElastic3, Image1, b_Button } = me.controls;
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
        frm_Explore.b_News.Tag = "RETURN TO MAIN MENU";
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
        frm_Box1.FillElastic.Caption = "Help (News Center)";
        frm_Box1.b_Message.Caption = "The News Center provides you with the latest reports on revolutions, popular trends, pirate attacks and other headline stories. If you watch the news carefully, it can provide useful information and help you to make better business decisions.";
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
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "news2.bmp");
        } else if (animFrame == 2) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "NEWS.BMP");
        }
        animFrame = animFrame + 1;
        if (animFrame == 3) {
            animFrame = 1;
        }
    }

    function showNewsStory() {
        let category = 0;
        let item = 0;
        let topCategory = 0;
        let topItem = 0;
        if (game.newsEvent == 1) {
            b_Message.Caption = "We have reports that the Chichi Bobo Rebels have moved into the area around " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". Our sources indicate Supreme Commander Dred Nicolson is planning a counter attack this week and fighting will intensify.";
        } else if (game.newsEvent == 2) {
            b_Message.Caption = "Our sources indicate that the Darleen Smugglers have increased their activity on and around " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". They appear to be attacking cargo ships importing goods to the planet.";
        } else if (game.newsEvent == 3) {
            b_Message.Caption = UCase(Trim(game.planetNames[game.newsPlanet])) + " has seen an upsurge in crime with the Baid-Rowel Bandits playing a major role. They appear to be targeting merchant ships and passenger liners.";
        } else if (game.newsEvent == 4) {
            b_Message.Caption = "Last night, " + UCase(Trim(game.planetNames[game.newsPlanet])) + " was plunged into chaos as the Mooglers, a rowdy group of anarchists, took to the streets to protest Supreme Commander Dred Nicolson's colonial rule. We have reports of them attacking anything that gets in their way.";
        } else if (game.newsEvent == 5) {
            b_Message.Caption = "Our sources inform us that a group of wild Fez Fa Fa broke away from their sanctuary yesterday and are headed towards " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". They are known to eat anything in their path, including Kukubian citizens.";
        } else if (game.newsEvent == 6) {
            b_Message.Caption = "Sources indicate that the Hungo Warriors have taken to the war path near planet " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". These legendary fighters are pillaging local colonies, merchant ships and government outposts.";
        } else if (game.newsEvent == 7) {
            b_Message.Caption = "The Cylet Mind Buggers are reported to be operating out of the " + UCase(Trim(game.planetNames[game.newsPlanet])) + " region. They appear to be using their mental powers to attack vessels approaching or leaving the planet.";
        } else if (game.newsEvent == 8) {
            b_Message.Caption = "Herds of mindless Lippo Jungies were spotted migrating towards " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". These enormous roaming space-whales seem to be crushing anything that gets in their path.";
        } else if (game.newsEvent == 9) {
            b_Message.Caption = "A group of Wicky Wicks have been spotted moving towards " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". These parasitic creatures have been preying on any merchant ships they encounter. If you are headed for the region, you are advised to change your travel plans.";
        } else if (game.newsEvent == 10) {
            b_Message.Caption = "Space Pirates, descendants of the infamous Bro Nap Goodshark, have been spotted operating around " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". We have numerous reports of their abducting spacecraft and terrorizing any ships unfortunate enough to cross their path.";
        } else if (game.newsEvent == 11) {
            b_Message.Caption = "Supreme Commander Dred Nicolson paid a visit to " + UCase(Trim(game.planetNames[game.newsPlanet])) + " this week. Thousands crowded the Colonial Senate to hear his latest proclamations concerning the planet.";
        } else if (game.newsEvent == 12) {
            b_Message.Caption = "In a speech this morning, the Governor of " + UCase(Trim(game.planetNames[game.newsPlanet])) + " promised to stimulate the economy and boost trade by easing regulations and making it more profitable for merchants to buy and sell commodities.";
        } else if (game.newsEvent == 13) {
            b_Message.Caption = "Last night, the residents of " + UCase(Trim(game.planetNames[game.newsPlanet])) + " celebrated the birth of their Nation with breath taking fireworks and a speech by the Colonial Elders.";
        } else if (game.newsEvent == 14) {
            b_Message.Caption = "Last night, riots rocked " + UCase(Trim(game.planetNames[game.newsPlanet])) + " as citizens demanded greater autonomy from the Imperial Rule of Dred Nicolson. Police responded by arresting hundreds of protesters.";
        } else if (game.newsEvent == 15) {
            b_Message.Caption = "The economy of " + UCase(Trim(game.planetNames[game.newsPlanet])) + " has fallen into a slump. Local officials blame the problem on unscrupulous traders and price gouging by local merchants.";
        } else if (game.newsEvent == 16) {
            b_Message.Caption = "The economy of " + UCase(Trim(game.planetNames[game.newsPlanet])) + " has taken off. Trade is booming and locals are enjoying the benefits of their new found wealth.";
        } else if (game.newsEvent == 17) {
            b_Message.Caption = "The indigenous creatures of " + UCase(Trim(game.planetNames[game.newsPlanet])) + " staged a rally this morning to show solidarity and press for more rights over their native lands.";
        } else if (game.newsEvent == 18) {
            b_Message.Caption = "Top government officials on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " have been indicted on corruption charges. The Imperial Council says it will conduct a full investigation.";
        } else if (game.newsEvent == 19) {
            b_Message.Caption = "The Environmental Coalition has targeted " + UCase(Trim(game.planetNames[game.newsPlanet])) + " in its war against pollution. The Coalition is pressuring the governor for better regulations on the disposal of toxic chemicals and industrial waste.";
        } else if (game.newsEvent == 20) {
            b_Message.Caption = UCase(Trim(game.planetNames[game.newsPlanet])) + " is ranked as the most productive planet in the colonies by the Imperial Bureau of Statistics.";
        } else if (game.newsEvent == 21) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " supports the current policies of Supreme Commander Dred Nicolson.";
        } else if (game.newsEvent == 22) {
            b_Message.Caption = "A recent survey shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " eats raw Biki Hoppers for breakfast.";
        } else if (game.newsEvent == 23) {
            b_Message.Caption = "A recent survey shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " buys imported Pupi Daga baby food.";
        } else if (game.newsEvent == 24) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " bothers to vote in local elections.";
        } else if (game.newsEvent == 25) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " feels crime is the planet's most serious problem.";
        } else if (game.newsEvent == 26) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " would rather their planet break from the New Realm.";
        } else if (game.newsEvent == 27) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " feels the economy will get worse over the next kuku year.";
        } else if (game.newsEvent == 28) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " thinks the government should do more about the environmental degradation of the solar system.";
        } else if (game.newsEvent == 29) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " believes Supreme Commander Dred Nicolson is the Divine Incarnation of the Great Bass.";
        } else if (game.newsEvent == 30) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " is on a high Lissyreen health diet at the present time.";
        } else if (game.newsEvent == 31) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " thinks that " + Trim(game.companyNames[1]) + " is the best run trading company in Kukubia.";
        } else if (game.newsEvent == 32) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " thinks that " + Trim(game.companyNames[game.numPlayers]) + " is the worst run trading company in Kukubia.";
        } else if (game.newsEvent == 33) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " thinks that " + Trim(rivals.companyNames[5]) + " is the best run trading company in Kukubia.";
        } else if (game.newsEvent == 34) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " thinks that " + Trim(rivals.companyNames[4]) + " is the worst run trading company in Kukubia.";
        } else if (game.newsEvent == 35) {
            b_Message.Caption = "The Supreme Commander Dred Nicolson promises to expand democracy to the colonies just as soon as the situation stabilizes.";
        } else if (game.newsEvent == 36) {
            topCategory = 2;
            topItem = 5;
            for (category = 2; category >= 0; category--) {
                for (item = 5; item >= 0; item--) {
                    if (game.supplyPercent[game.newsPlanet][category][item] > game.supplyPercent[game.newsPlanet][topCategory][topItem]) {
                        topCategory = CLng(category);
                        topItem = CLng(item);
                    }
                }
            }
            b_Message.Caption = "Now for our economic update. It looks like there is an oversupply of " + Trim(game.commodityNames[topCategory][topItem]) + " on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " these days. That means low prices for consumers and a good bargain for exporters.";
        } else if (game.newsEvent == 37) {
            topCategory = 2;
            topItem = 5;
            for (category = 2; category >= 0; category--) {
                for (item = 5; item >= 0; item--) {
                    if (game.supplyPercent[game.newsPlanet][category][item] < game.supplyPercent[game.newsPlanet][topCategory][topItem]) {
                        topCategory = CLng(category);
                        topItem = CLng(item);
                    }
                }
            }
            b_Message.Caption = "Now for our economic update. It looks like the supply of " + Trim(game.commodityNames[topCategory][topItem]) + " is running short on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " these days. That means high prices for consumers and a healthy profit margin for importers.";
        } else if (game.newsEvent == 38) {
            if (game.stockStrength[game.newsPlanet] > 60) {
                b_Message.Caption = "The leading financial analysts at the " + game.planetNames[game.newsPlanet] + " Exchange report that earnings are higher than expected, and the market looks bullish. They predict the market will grow at a steady pace. However, keep in mind, market analysts are not correct 100% of the time.";
            } else if (game.stockStrength[game.newsPlanet] < 40) {
                b_Message.Caption = "Market analysts reported today that the " + game.planetNames[game.newsPlanet] + " Exchange looks bearish. Earnings are down, and they expect the stock market to decline. However, keep in mind, market analysts are not correct 100% of the time.";
            } else {
                b_Message.Caption = "Market analysts at the " + game.planetNames[game.newsPlanet] + " Exchange are thoroughly confused by the market. There is a major debate going on as to what direction the market will take in the next few weeks.";
            }
        } else if (game.newsEvent == 39) {
            b_Message.Caption = "There are reports that the Chichi Bobo Rebels are having a picnic on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " this weekend. If you're planning on travelling to that area, you might want to bring along a little extra something in your basket because things could get nasty.";
        } else if (game.newsEvent == 40) {
            b_Message.Caption = "Our sources indicate that the Darleen Smugglers are targeting the area around " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". Apparently, they have cut a deal with Lady Cornucopia, who is willing to purchase everything they can plunder.";
        } else if (game.newsEvent == 41) {
            b_Message.Caption = "It appears that " + UCase(Trim(game.planetNames[game.newsPlanet])) + " is the new stalking grounds for the Baid-Rowel Bandits. We have reports of these remorseless thugs attacking ships while dressed only in designer underpants. Apparently, they think this enhances the overall feeling of bedlam.";
        } else if (game.newsEvent == 42) {
            b_Message.Caption = UCase(Trim(game.planetNames[game.newsPlanet])) + " has erupted in flames as hoards of Mooglers riot in the streets. These fanatical anarchists are protesting the prevalence of traffic signs, which they insist infringe upon their personal liberties. They have also been attacking any vehicles, including cargo ships, which happen to obey the traffic laws.";
        } else if (game.newsEvent == 43) {
            b_Message.Caption = "A heard of Fez Fa Fa escaped from their sanctuary last night and are heading towards " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". These ravenous eating machines have already consumed a woman, her two pet Poffers, and a lawn mower.";
        } else if (game.newsEvent == 44) {
            b_Message.Caption = "We have reports that the legendary Hungo Warriors have attacked a freighter orbiting " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". These extraordinary fighters are known to disguise their ships as asteroids and literally ram into their victims.";
        } else if (game.newsEvent == 45) {
            b_Message.Caption = "The Cylet Mind Buggers have been using their incredible mental powers to harass ships around " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". If you're headed in that direction be prepared for a mental assault.";
        } else if (game.newsEvent == 46) {
            b_Message.Caption = "Herds of mindless Lippo Jungies are known to be performing their seasonal mating rituals off planet " + UCase(Trim(game.planetNames[game.newsPlanet])) + " this week. These clumsy space-whales are not outright hostile. However, they have been known to accidentally crush anything that happens to be in their way.";
        } else if (game.newsEvent == 47) {
            b_Message.Caption = "We have reports that a pack of parasitic Wicky Wicks have been sucking the life blood out of ships near " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". If you are headed for the region next week, you are advised to reconsider your travel plans.";
        } else if (game.newsEvent == 48) {
            b_Message.Caption = "A band of space pirates are reported to be looting, pillaging and spray painting silly slogans on ships in the area around " + UCase(Trim(game.planetNames[game.newsPlanet])) + ".";
        } else if (game.newsEvent == 49) {
            b_Message.Caption = "This morning, Supreme Commander Dred Nicolson gave a speech about soap to an audience on " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". Emperor Dred's great fear is that one day the galaxy will simply run out of soap.";
        } else if (game.newsEvent == 50) {
            b_Message.Caption = "The Governor of " + UCase(Trim(game.planetNames[game.newsPlanet])) + " was arraigned today on charges of taking bribes and kickbacks from local industrialists.";
        } else if (game.newsEvent == 51) {
            b_Message.Caption = "The indigenous population of " + UCase(Trim(game.planetNames[game.newsPlanet])) + " held a candlelight vigil in honor of Chichi Bobo, who they believe is a martyr to the cause of planetary independence.";
        } else if (game.newsEvent == 52) {
            b_Message.Caption = "The streets of " + UCase(Trim(game.planetNames[game.newsPlanet])) + " turned into a battle ground last night as thousands of laborers rioted. They were protesting the harsh working conditions and low pay.";
        } else if (game.newsEvent == 53) {
            b_Message.Caption = "The economy of " + UCase(Trim(game.planetNames[game.newsPlanet])) + " has taken a turn for the worse. Statistical data shows that the gross domestic product is down by " + Format((game.weeklyRoll / 2) + 2, "#,#0") + "%.";
        } else if (game.newsEvent == 54) {
            b_Message.Caption = "The economic conditions on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " have shown a marked improvement over the last quarter. Exports are up " + Format((game.weeklyRoll / 2) + 2, "#,#0") + "% and inflation appears to be on the down swing.";
        } else if (game.newsEvent == 55) {
            b_Message.Caption = "The indigenous creatures of " + UCase(Trim(game.planetNames[game.newsPlanet])) + " performed their annual Moxy Milk bath rituals, which they believe will drive off the evil spirits and restore harmony to their souls.";
        } else if (game.newsEvent == 56) {
            b_Message.Caption = "Five top cabinet members on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " have resigned after their party refused to raise the minimum wage for workers on the planet.";
        } else if (game.newsEvent == 57) {
            b_Message.Caption = "The Environmental Coalition on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " has come out strongly against the policy of dumping toxic fuel into the planet's oceans. They say millions of fish die every year due to this type of reckless behavior.";
        } else if (game.newsEvent == 58) {
            b_Message.Caption = "A new report released by the Bureau of Statistics ranks the population of " + UCase(Trim(game.planetNames[game.newsPlanet])) + " as the laziest in Kukubia. They spend " + Format(game.weeklyRoll, "#,#0") + "% more time doing nothing than the average Kukubian.";
        } else if (game.newsEvent == 59) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " consumes two or more post nasal drip pills before going to sleep at night.";
        } else if (game.newsEvent == 60) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " would rather have two Malakite sandwiches for lunch for 6 months straight than inform a co-worker that he/she has a body odor problem.";
        } else if (game.newsEvent == 61) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " prefers to drink their Horpi Lactate directly from the nipples of a pregnant Horpi Cow rather than out of a bottle.";
        } else if (game.newsEvent == 62) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " have had some form of toe surgery in the past 12 months.";
        } else if (game.newsEvent == 63) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " feel criminals should be given an education in prison rather than being forced to spend 12 hours a day watching TV.";
        } else if (game.newsEvent == 64) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " have at least one Lava Lamp in their homes.";
        } else if (game.newsEvent == 65) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " have at least 1,000 kubars invested in the " + Trim(game.planetNames[game.newsPlanet]) + " Stock Exchange.";
        } else if (game.newsEvent == 66) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " supports a recycling program for all paper and plastic products produced on the planet.";
        } else if (game.newsEvent == 67) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " have considered naming at least one of their children Dred.";
        } else if (game.newsEvent == 68) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " believes that the government should do more to curb the power of large interplanetary corporations.";
        } else if (game.newsEvent == 69) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " feel that " + Trim(game.companyNames[1]) + " is charging too much for passenger fares.";
        } else if (game.newsEvent == 70) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " believe that " + Trim(game.companyNames[game.numPlayers]) + " is partially responsible for the high price of products on the planet.";
        } else if (game.newsEvent == 71) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " believe that " + Trim(rivals.companyNames[5]) + " is charging too much for passenger fares.";
        } else if (game.newsEvent == 72) {
            b_Message.Caption = "A recent poll shows that " + Format(game.weeklyRoll, "#,#0") + "% of the population on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " thinks that " + Trim(rivals.companyNames[4]) + " is partially responsible for the high price of products on the planet.";
        } else if (game.newsEvent == 73) {
            b_Message.Caption = "The Supreme Commander Dred Nicolson said he fully supports the concept of democracy in theory. However, in practice, he simply cannot trust the people to make the right choices.";
        } else if (game.newsEvent == 74) {
            topCategory = 2;
            topItem = 5;
            for (category = 2; category >= 0; category--) {
                for (item = 5; item >= 0; item--) {
                    if (game.supplyPercent[game.newsPlanet][category][item] > game.supplyPercent[game.newsPlanet][topCategory][topItem]) {
                        topCategory = CLng(category);
                        topItem = CLng(item);
                    }
                }
            }
            b_Message.Caption = "A recently released government report indicates that there is now an abundance of " + Trim(game.commodityNames[topCategory][topItem]) + " on " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". This glut of product should have some impact upon prices in the region.";
        } else if (game.newsEvent == 75) {
            topCategory = 2;
            topItem = 5;
            for (category = 2; category >= 0; category--) {
                for (item = 5; item >= 0; item--) {
                    if (game.supplyPercent[game.newsPlanet][category][item] < game.supplyPercent[game.newsPlanet][topCategory][topItem]) {
                        topCategory = CLng(category);
                        topItem = CLng(item);
                    }
                }
            }
            b_Message.Caption = "A recently released government report indicates that their is now a scarcity of " + Trim(game.commodityNames[topCategory][topItem]) + " on " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". This shortage should help to drive up prices in the region.";
        } else if (game.newsEvent == 76) {
            if (game.stockStrength[game.newsPlanet] > 60) {
                b_Message.Caption = "Traders on the " + game.planetNames[game.newsPlanet] + " Exchange feel a bull market is bound to drive up stock prices in the near future. However, their optimistic outlook is based more on the current market trends than any underlying economic factors.";
            } else if (game.stockStrength[game.newsPlanet] < 40) {
                b_Message.Caption = "Traders on the " + game.planetNames[game.newsPlanet] + " Exchange feel a bear market is bound to drive down stock prices in the near term. However, their pessimistic outlook is based more on the current market trends than any underlying economic factors.";
            } else {
                b_Message.Caption = "Traders on the " + game.planetNames[game.newsPlanet] + " Exchange have mixed feelings about the condition of the market these days. Some traders are bullish, while others are bearish. Overall, it appears that no one knows what is going to happen in the next few months.";
            }
        } else if (game.newsEvent == 77) {
            b_Message.Caption = "The Baid-Rowel Bandits have released a public statement saying that in a good faith effort, they will reduce their looting and pillaging by 33% over the next 24 months.";
        } else if (game.newsEvent == 78) {
            b_Message.Caption = "Despite their growing popularity, the Mooglers, a rowdy bunch of anarchists, have been unsuccessful at forming any sort of leadership because it goes against all their principles.";
        } else if (game.newsEvent == 79) {
            b_Message.Caption = "Animal rights activists have taken to the streets across Kukubia this week to protest the slaughter of nearly forty Fez Fa Fa. Apparently, nearly forty Fez Fa Fa, wild creatures with an appetite for raw flesh, escaped from their sanctuary last month and attacked an orbiting hamburger factory, devouring 70,000 patties along with the entire staff.";
        } else if (game.newsEvent == 80) {
            b_Message.Caption = "The Hungo Warriors met today with the Imperial Magistrate and demanded that Dred Nicolson surrender or they would continue to their war against the Nicolson Dynasty. Needless to say, the Imperial Magistrate did not surrender the entire empire to a few hundred renegades.";
        } else if (game.newsEvent == 81) {
            b_Message.Caption = "A gathering of pirates turned into a blood bath last night. Word is that during the Ceremonial Buccaneer Barbecue, one of the pirate clans showed up with less than enough BBQ ribs for everyone. This led to a dispute, which quickly escalated into a full fledged fight. By the time it ended, dozens of pirates lay slain.";
        } else if (game.newsEvent == 82) {
            b_Message.Caption = "Scientists at the Imperial University have been researching the extraordinary mental powers of the Cylet Mind Buggers. Using a brain extracted from one of these creatures, they managed to toast a slice of sourdough bread. Further experiments on other food products are anticipated.";
        } else if (game.newsEvent == 83) {
            b_Message.Caption = "The Lippo Jungie Task Force has been on high alert. These mindless space-whales are expected to be passing through Kukubia sometime in the next few weeks, and the task force doesn't want any unpleasant accidents to take place.";
        } else if (game.newsEvent == 84) {
            b_Message.Caption = "A council has been convened to discuss ways of dealing with the Wicky Wicks, a group of notorious parasitic creatures who prey on unsuspecting merchant ships.";
        } else if (game.newsEvent == 85) {
            b_Message.Caption = "A family on " + UCase(Trim(game.planetNames[game.newsPlanet])) + ", who built their home over an old pirate graveyard, claims to have seen the spirit of Bro Nap Goodshark walking around singing dirty songs and cracking eggs on his head.";
        } else if (game.newsEvent == 86) {
            b_Message.Caption = "L-Tech Engines claims it has been experiencing production delays this past month due to a new automated production line it just completed. The Worker's Union refused to comment, except to say \"I told you so.\"";
        } else if (game.newsEvent == 87) {
            b_Message.Caption = "Scooter Jay, a notorious smuggler, was caught last night with 200 tons of illegally imported Lava Lamps from the galaxy of Pata Pata Pita. Emperor Dred Nicolson decreed that Scooter Jay will have to pay a one million kubar fine for this transgression.";
        } else if (game.newsEvent == 88) {
            b_Message.Caption = "Mr. Hands showed up in court today and pleaded guilty to misdemeanor charges of unknowingly selling stolen goods. The Imperial Prosecution arranged this plea bargain because they lack the necessary funding and staff to take Hands to trial and win the case.";
        } else if (game.newsEvent == 89) {
            b_Message.Caption = "Quist, a high flying financier, was arraigned in court today on charges of fraud. Apparently, he is being accused of swindling nearly 2 million kubars out of one of his clients. The trial will begin next month. In the meantime, Quist is already out of jail on bail of only 50,000 kubars.";
        } else if (game.newsEvent == 90) {
            b_Message.Caption = "Emperor Dred Nicolson met with the governor of " + UCase(Trim(game.planetNames[game.newsPlanet])) + " today to discuss the possibility of injecting liquid soap into the planet's water supply. The Emperor feels this would save time and soap. The Governor, however, wouldn't commit, fearing the water may not taste right.";
        } else if (game.newsEvent == 91) {
            b_Message.Caption = "There has been a warehouse shortage on " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". Merchants report paying higher prices and struggling to find adequate space for their products.";
        } else if (game.newsEvent == 92) {
            b_Message.Caption = "Emperor Dred Nicolson attended the annual Eat With Your Feet festival on " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". During this one day festival, everyone is required to both prepare and eat a meal entirely with their feet. The Emperor wound up preparing an elegant dish of Humpato stew, which he only spilled twice.";
        } else if (game.newsEvent == 93) {
            b_Message.Caption = "We have a report that Mr. Zinn, the wealthiest merchant on Zile, has hit hard times. He claims his fortunes have been depleted after a series of bad loans. This, however, cannot be confirmed, and some suspect it may be a clever ploy to avoid paying taxes.";
        } else if (game.newsEvent == 94) {
            b_Message.Caption = "Lady Cornucopia reportedly increased her defense spending by 200% over the past year. This is seen as a move towards further independence from the New Realm.";
        } else if (game.newsEvent == 95) {
            b_Message.Caption = "Emperor Dred Nicolson attacked the Trader's Union, saying it controls a monopoly on banking inside Kukubia and is holding back growth.";
        } else if (game.newsEvent == 96) {
            b_Message.Caption = "Emperor Dred Nicolson mentioned today that he is now constructing a summer home on Asteroid B153-89065, the largest and slowest moving asteroid in the Galaxy of Gogg.";
        } else if (game.newsEvent == 97) {
            b_Message.Caption = "Scientists at the Imperial University are working on developing a new type of ship with double the cargo capacity. They expect to have a test model ready by early next year.";
        } else if (game.newsEvent == 98) {
            b_Message.Caption = "The Ship Worker's Union held a rally today on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " to protest the installation of new robots in the main shipyard. They insist that replacing intelligent beings with computers can only lead to disaster.";
        } else if (game.newsEvent == 99) {
            b_Message.Caption = "The Imperial Council has offered the Chichi Bobo Freedom Fighters general amnesty if they agree to put down their weapons and give up their struggle against the government. The Freedom Fighters said they will agree to those terms just as soon as Emperor Dred Nicolson grants the Kukubian Colonies their independence.";
        } else if (game.newsEvent == 100) {
            b_Message.Caption = "The Darleen Smugglers were reported to be having a vacation on " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". In fact, several witnesses claim to have spotted them sunbathing on the local beaches.";
        } else if (game.newsEvent == 101) {
            b_Message.Caption = "The Wobbler has announced a new experimental play will be opening on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " this week. The Wobbler claims this play will shock the pants off most Kukubians. However, that remains to be seen.";
        } else if (game.newsEvent == 102) {
            b_Message.Caption = "Brow, a notorious industrial spy, started advertising in the newspapers on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " this week. Brow hopes that his new publicity campaign will boost his image and bring in clients.";
        } else if (game.newsEvent == 103) {
            b_Message.Caption = "Yoyo, the well-known gambler, was arrested yesterday after trying to cheat an undercover police officer out of 5,000 kubars. Yoyo is expected to be released on bail by tomorrow morning.";
        } else if (game.newsEvent == 104) {
            b_Message.Caption = "Limpus, a renowned humanitarian and philanthropist, said he is establishing a children's hospital on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " this week. He plans on naming it the Limpus Loves Children Center.";
        } else if (game.newsEvent == 105) {
            b_Message.Caption = "Kukubia's casinos reported record profits last quarter. The manager of one of the casinos said, \"People should be happy to lose money to us. Otherwise, they would end up gambling in some dirty basement, instead of these luxury resorts.\"";
        } else if (game.newsEvent == 106) {
            b_Message.Caption = "The Minster of Trash reported that the amount of garbage being taken to Kukubia's dumps has fallen by 44% in the past year, due primarily to improved recycling facilities in all the major cities.";
        } else if (game.newsEvent == 107) {
            b_Message.Caption = "The Soothsayer's Union lodged a complaint today with the Minister of Predictions, claiming that unregistered Soothsayers were handing out erroneous readings.";
        } else if (game.newsEvent == 108) {
            b_Message.Caption = "Horkywood is pumping out movies these days, and many of them seem to be about the royal Nicolson Family. Two new feature films will depict the heroic life of the Great Bass Nicolson, while a third film will chronicle the childhood of Emperor Dred Nicolson.";
        } else if (game.newsEvent == 109) {
            b_Message.Caption = UCase(Trim(game.planetNames[game.newsPlanet])) + " is hosting the 134th Annual Stock Broker's Convention this week. Brokers from all across the galaxy are expected to show up and exchange hot tips and insider information.";
        } else if (game.newsEvent == 110) {
            b_Message.Caption = "A large explosion shook " + UCase(Trim(game.planetNames[game.newsPlanet])) + "  today when a giant oil tanker went up in flames. This is the third such incident this year, and local authorities are investigating the cause. The owners of the tanker insist that it is nothing to worry about... just a small fuel leak.";
        } else if (game.newsEvent == 111) {
            b_Message.Caption = "The Imperial Council met on " + UCase(Trim(game.planetNames[game.newsPlanet])) + " today to debate whether or not to triple the import and export tariffs throughout Kukubia. Outside, merchants protested claiming this could bankrupt their companies.";
        } else if (game.newsEvent == 112) {
            b_Message.Caption = "L-Tech, the largest manufacturer of engines in Kukubia, announced it will be laying off 30% of its work force in hopes of increasing corporate profits and boosting shareholder value.";
        } else if (game.newsEvent == 113) {
            b_Message.Caption = "The Governor of " + UCase(Trim(game.planetNames[game.newsPlanet])) + " has drafted a new initiative to save the planet's historic business district. Over the past decade, pollution combined with poor maintenance, have led to the disintegration of many of the planet's most prized landmarks.";
        } else if (game.newsEvent == 114) {
            b_Message.Caption = "Voyager's Insurance Company came under attack today for charging excessively high premiums. The Cosmic Consumer Caucus released figures showing that Voyager's is making record profits at the expense of business owners and the general public.";
        } else if (game.newsEvent == 115) {
            b_Message.Caption = "We have reports that the Chichi Bobo Rebels have moved into the area around " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". Our sources indicate Supreme Commander Dred Nicolson is planning a counter attack this week and fighting will intensify.";
        } else if (game.newsEvent == 116) {
            b_Message.Caption = "Our sources indicate that the Darleen Smugglers have increased their activity on and around " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". They appear to be attacking cargo ships importing goods to the planet.";
        } else if (game.newsEvent == 117) {
            b_Message.Caption = UCase(Trim(game.planetNames[game.newsPlanet])) + " has seen an upsurge in crime with the Baid-Rowel Bandits playing a major role. They appear to be targeting merchant ships and passenger liners.";
        } else if (game.newsEvent == 118) {
            b_Message.Caption = "Last night, " + UCase(Trim(game.planetNames[game.newsPlanet])) + " was plunged into chaos as the Mooglers, a rowdy group of anarchists, took to the streets to protest Supreme Commander Dred Nicolson's colonial rule. We have reports of them attacking anything that gets in their way.";
        } else if (game.newsEvent == 119) {
            b_Message.Caption = "Our sources inform us that a group of wild Fez Fa Fa broke away from their sanctuary yesterday and are headed towards " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". They are known to eat anything in their path, including Kukubian citizens.";
        } else if (game.newsEvent == 120) {
            b_Message.Caption = "Sources indicate that the Hungo Warriors have taken to the war path near planet " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". These legendary fighters are pillaging local colonies, merchant ships and government outposts.";
        } else if (game.newsEvent == 121) {
            b_Message.Caption = "The Cylet Mind Buggers are reported to be operating out of the " + UCase(Trim(game.planetNames[game.newsPlanet])) + " region. They appear to be using their mental powers to attack vessels approaching or leaving the planet.";
        } else if (game.newsEvent == 122) {
            b_Message.Caption = "Herds of mindless Lippo Jungies were spotted migrating towards " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". These enormous roaming space-whales seem to be crushing anything that gets in their path.";
        } else if (game.newsEvent == 123) {
            b_Message.Caption = "A group of Wicky Wicks have been spotted moving towards " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". These parasitic creatures have been preying on any merchant ships they encounter. If you are headed for the region, you are advised to change your travel plans.";
        } else if (game.newsEvent == 124) {
            b_Message.Caption = "Space Pirates, descendants of the infamous Bro Nap Goodshark, have been spotted operating around " + UCase(Trim(game.planetNames[game.newsPlanet])) + ". We have numerous reports of their abducting spacecraft and terrorizing any ships unfortunate enough to cross their path.";
        } else if (game.newsEvent == 1000) {
            if (game.turn <= 15) {
                topCategory = game.stockPrices[game.newsPlanet][game.turn] - game.stockPrices[game.newsPlanet][game.turn - 1];
            } else {
                topCategory = game.stockPrices[game.newsPlanet][15] - game.stockPrices[game.newsPlanet][14];
            }
            b_Message.Caption = "The " + Trim(game.planetNames[game.newsPlanet]) + " Exchange shot up this week!!! The average share price gained an amazing " + Format(topCategory, "#,#0") + " points on heavy trading. We have reports from the " + Trim(game.planetNames[game.newsPlanet]) + " Exchange that a number of big investors, including Mr. Zinn, made a tidy profit on this unexpected market shift.";
        } else if (game.newsEvent == 1001) {
            if (game.turn <= 15) {
                topCategory = game.stockPrices[game.newsPlanet][game.turn - 1] - game.stockPrices[game.newsPlanet][game.turn];
            } else {
                topCategory = game.stockPrices[game.newsPlanet][14] - game.stockPrices[game.newsPlanet][15];
            }
            b_Message.Caption = "The " + Trim(game.planetNames[game.newsPlanet]) + " Exchange plummeted this week, as the average share price fell " + Format(topCategory, "#,#0") + " points. We have reports from the " + Trim(game.planetNames[game.newsPlanet]) + " Exchange that a number of big investors lost a fortune in this unexpected down-turn.";
        } else if (game.newsEvent == 1002 || game.newsEvent == 1003) {
            if (game.stockStrength[game.newsPlanet] <= 50) {
                b_Message.Caption = "Traders at the " + Trim(game.planetNames[game.newsPlanet]) + " Exchange are expecting the worst. Market analysts predict a downward trend in the stock market on planet " + Trim(game.planetNames[game.newsPlanet]) + ". This bear market is likely to affect the share prices of the " + Trim(game.planetNames[game.newsPlanet]) + " Exchange.";
            } else {
                b_Message.Caption = "Traders on the floor of the " + Trim(game.planetNames[game.newsPlanet]) + " Exchange are expecting to see some profits in the long term. Analysts are predicting the " + Trim(game.planetNames[game.newsPlanet]) + " Exchange is about to take off on a gradual upward trend.";
            }
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
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "NEWS.BMP");
        showNewsStory();
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "news.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
    }

    return {
        b_Button_Click, b_Exit_Click, b_Exit_MouseDown, b_Exit_MouseUp,
        b_Help_Click, b_Help_MouseDown, b_Help_MouseUp, b_Timer_Timer,
        showNewsStory, Form_Activate, Form_KeyPress, Form_Load,
    };
});
