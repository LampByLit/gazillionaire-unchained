// Originally translated from src/STOCK.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Stock",
  ["Form", "frm_Stock", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Stock Market", "BackColor": 0, "Left": -315, "Top": 1575, "Width": 7365, "Height": 4005, "WindowState": 2, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "FillStyle": 0, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": -315, "ClientTop": 1575, "ClientWidth": 7365, "ClientHeight": 4005}, [
    ["MMControl", "b_Sound", {"Left": 4710, "Top": 60, "Width": 3540, "Height": 330, "TabIndex": 3, "Visible": 0}],
    ["VideoSoftElastic", "FillElastic", {"BackColor": 0, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "FontName": "Times New Roman", "FontSize": 33.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "ChildSpacing": 2, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 0, "CaptionPos": 3, "IntBkg": 0, "PicturePos": 10, "CaptionStyle": 2}, [
      ["GRAPH", "b_Chart", {"Left": 0, "Top": 0, "Width": 7515, "Height": 6405, "TabIndex": 8, "BorderStyle": 0, "NumSets": 7, "NumPoints": 15, "GraphData": [0, 0, 0, 0, 0, 0, 0], "ColorData": [6, 7, 15, 13, 11, 10, 9], "LabelText": [], "LegendText": ["vexx", "vexx", "vexx", "vexx", "vexx", "vexx", "vexx"], "PatternData": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], "ExtraData": [0], "GraphType": 6, "SymbolData": [], "Background": 0, "LegendStyle": 1, "Foreground": 7, "XPosData": [0, 0, 0, 0, 0, 0, 0], "FontFamily": [0], "FontStyle": [2, 2, 2, 2], "FontSize": [100, 100, 100, 100], "AsciiData": [], "AsciiColor": [], "AsciiLabel": [], "AsciiLegend": [], "AsciiPattern": [], "AsciiXPos": [], "AsciiExtra": [], "AsciiSymbol": [], "AsciiFFamily": [], "AsciiFStyle": [], "AsciiFSize": []}],
      ["VideoSoftElastic", "b_Message", {"BackColor": 0, "ForeColor": 12632256, "Left": 7530, "Top": 0, "Width": 2085, "Height": 6405, "TabIndex": 2, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "text", "CaptionPos": 4, "IntBkg": 0, "PicturePos": 3}],
      ["VideoSoftElastic", "VSElastic1", {"BackColor": 0, "Left": 30, "Top": 6450, "Width": 9540, "Height": 405, "TabIndex": 1, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 1, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "1", "IntBkg": 0}, [
        ["VideoSoftElastic", "b_All", {"BackColor": 12632256, "Left": 5460, "Top": 0, "Width": 1350, "Height": 405, "TabIndex": 11, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Show All", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Next", {"BackColor": 12632256, "Left": 4095, "Top": 0, "Width": 1350, "Height": 405, "TabIndex": 10, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Show Next", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Shares", {"BackColor": 12632256, "Left": 6825, "Top": 0, "Width": 1350, "Height": 405, "TabIndex": 9, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Show Shares", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Help", {"BackColor": 12632256, "Left": 8190, "Top": 0, "Width": 1350, "Height": 405, "TabIndex": 7, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Sell", {"BackColor": 12632256, "Left": 2730, "Top": 0, "Width": 1350, "Height": 405, "TabIndex": 6, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Sell", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Buy", {"BackColor": 12632256, "Left": 1365, "Top": 0, "Width": 1350, "Height": 405, "TabIndex": 5, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Buy", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Exit", {"BackColor": 12632256, "Left": 0, "Top": 0, "Width": 1350, "Height": 405, "TabIndex": 4, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "FloodColor": 12632256, "FloodPercent": 100, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "PicturePos": 9}]
      ]]
    ]]
  ]],
function (me) {
    const { b_Sound, FillElastic, b_Chart, b_Message, VSElastic1, b_All, b_Next, b_Shares } = me.controls;
    const { b_Help, b_Sell, b_Buy, b_Exit } = me.controls;
    const WHITE = 16777215;
    const LIGHT_GRAY = 12632256;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    const GREEN = 65280;
    const CYAN = 16776960;
    const RED = 255;
    const MAGENTA = 16711935;
    const YELLOW = 65535;
    let noteText = "";
    let newsShown = 0;
    let shownExchange = 0;
    const EXCHANGE_COLORS = [10, 11, 12, 13, 14, 7, 15, 9, 2, 3, 5, 6, 4, 8];

    function b_All_Click() {
        shownExchange = LAST_PLANET + 1;
        drawChart(shownExchange);
        showExchangeInfo(shownExchange);
    }

    function b_All_MouseDown(Button, Shift, X, Y) {
        b_All.BackColor = WHITE;
    }

    function b_All_MouseUp(Button, Shift, X, Y) {
        b_All.BackColor = LIGHT_GRAY;
    }

    async function b_Buy_Click() {
        let shares = 0;
        let sharePrice = 0;
        let maxShares = 0;
        const HOURGLASS = 11;
        me.MousePointer = HOURGLASS;
        if (shownExchange != game.planet[game.currentPlayer] && shownExchange != LAST_PLANET + 1) {
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "neutral.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            frm_Box0.FillElastic.Caption = Trim(game.planetNames[shownExchange]) + " Exchange";
            frm_Box0.b_Message.Caption = "\n" + "Sorry, but you cannot buy or sell shares on the " + Trim(game.planetNames[shownExchange]) + " Exchange unless you are visiting the planet " + Trim(game.planetNames[shownExchange]) + ".";
            await frm_Box0.Show(1);
        } else if (game.canBuyStock == 0) {
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "neutral.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            frm_Box0.FillElastic.Caption = "You Cannot Buy Stock";
            frm_Box0.b_Message.Caption = "\n" + "You already purchased shares this week. If you want to buy more shares, you must come back another week.";
            await frm_Box0.Show(1);
        } else if (game.stockCrashed[game.planet[game.currentPlayer]] == -1) {
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            frm_Box1.FillElastic.Caption = "Stock Market Crash!!!";
            frm_Box1.b_Message.Caption = "The Stock Market on planet " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " crashed today !!! Everyone who owned stock in the " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " Exchange lost their entire investment. Emperor Dred Nicolson has intervened and shut down the " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " Exchange for one week. The Stock Exchange Board is working around the clock on restoring the " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " Exchange to 1000 points by next week. This, however, will come at a high price. No investors are expected to have their losses refunded.";
            await frm_Box1.Show(1);
        } else {
            if (game.turn < 15) {
                sharePrice = game.stockPrices[game.planet[game.currentPlayer]][game.turn];
            } else {
                sharePrice = game.stockPrices[game.planet[game.currentPlayer]][15];
            }
            maxShares = CLng(0.5 * ((player.cash + player.bankBalance) / sharePrice));
            shares = await askNumber(0, Format(maxShares, "##0"), 0.25 * maxShares, maxShares, game.planetNames[game.planet[game.currentPlayer]] + " Stock Exchange" + "\n" + "\n" + "Enter the number of shares you wish to purchase.", " ");
            if (shares == -3333) {
                noteText = "";
            } else if (shares < 0) {
                noteText = "";
            } else if (shares == 0) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "neutral.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                noteText = "\n" + "\n" + "NOTE:" + "\n" + "You didn't buy any shares.";
            } else if (shares > maxShares) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "neutral.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                frm_Box2.FillElastic.Caption = "Purchase Denied";
                frm_Box2.b_Message.Caption = "The " + game.planetNames[game.planet[game.currentPlayer]] + " Stock Exchange has refused to allow you to purchase " + Format(shares, "#,#0") + " shares of stock. The Stock Exchange has a strict set of regulations, which permit no one company to invest more than 50% of its money in one week." + "\n" + "\n" + "This trade regulation is designed to prevent rampant speculation, which has the potential to destabilize the market." + "\n" + "\n" + "The maximum number of shares you can purchase this week is " + Format(maxShares, "#,#0") + ". If you still want to purchase stock, please enter your trade again.";
                await frm_Box2.Show(1);
                noteText = "\n" + "\n" + "NOTE:" + "\n" + "You didn't buy any shares.";
            } else {
                game.canBuyStock = 0;
                if (shares == 1) {
                    noteText = "\n" + "\n" + "NOTE:" + "\n" + "You bought " + Format(shares, "#,#0") + " share";
                } else {
                    noteText = "\n" + "\n" + "NOTE:" + "\n" + "You bought " + Format(shares, "#,#0") + " shares";
                }
                await spend(shares * sharePrice, 0);
                player.shareAvgCost[game.planet[game.currentPlayer]] = CLng(((player.shareAvgCost[game.planet[game.currentPlayer]] * player.shares[game.planet[game.currentPlayer]]) + (sharePrice * shares)) / (player.shares[game.planet[game.currentPlayer]] + shares));
                player.shares[game.planet[game.currentPlayer]] = player.shares[game.planet[game.currentPlayer]] + shares;
                frm_Box0.FillElastic.Caption = "Brokerage Fee";
                frm_Box0.b_Message.Caption = "\n" + "Every time you buy or sell stock, you must pay your broker a 1% commission. This comes out to be a total of " + Format(0.01 * shares * sharePrice, "#,#0") + " kubars. Sorry, but brokers do not work for free.";
                await frm_Box0.Show(1);
                await spend(0.01 * shares * sharePrice, 0);
            }
        }
        showExchangeInfo(shownExchange);
    }

    function b_Buy_MouseDown(Button, Shift, X, Y) {
        b_Buy.BackColor = WHITE;
    }

    function b_Buy_MouseUp(Button, Shift, X, Y) {
        b_Buy.BackColor = LIGHT_GRAY;
    }

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_Exit_MouseDown(Button, Shift, X, Y) {
        b_Exit.BackColor = WHITE;
    }

    function b_Exit_MouseUp(Button, Shift, X, Y) {
        b_Exit.BackColor = LIGHT_GRAY;
    }

    async function b_Help_Click() {
        let helpText = "";
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box3.FillElastic.Caption = "Help (Stock Market)";
        frm_Box3.b_Message.Caption = "Each planet has its own stock exchange. These stock exchanges are similar to index funds. They are an average of selected stocks on each planet." + "\n" + "\n" + "While visiting " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + ", you may either buy or sell shares on the " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " Exchange. If you wish to buy or sell shares on the other exchanges, you must travel to the planet where the exchange is located." + "\n" + "\n" + "Emperor Dred has enacted a strict set of regulations. First of all, each company gets only one chance per week to purchase stock. Secondly, no one company may invest more than 50% of its money in one week." + "\n" + "\n" + "These regulations are designed to prevent rampant speculation, which has the potential to destabilize the market.";
        await frm_Box3.Show(1);
        frm_Box3.FillElastic.Caption = "Help (Stock Market)";
        helpText = "The stock market operates according to trends. When you invest, you should be watching for bull markets and bear markets." + "\n" + "\n" + "If an upward trend starts, it naturally gains momentum every time the market rises. However, if the market takes a dip, that could trigger the start of a downward trend. As an investor, you want to spot an upward trend and invest heavily, then just as a downward trend kicks in, you should sell your shares." + "\n" + "\n" + "Also, be sure to take note when the stock market falls too low. If the market hits zero, this signals a crash, and you will lose your entire investment.";
        frm_Box3.b_Message.Caption = helpText + "\n" + "\n" + "Last but not least, every time you buy or sell stock, you must pay your broker a 1% commission. Sorry, but brokers don't work for free.";
        await frm_Box3.Show(1);
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = WHITE;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = LIGHT_GRAY;
    }

    function b_Next_Click() {
        if (shownExchange == LAST_PLANET + 1) {
            shownExchange = game.planet[game.currentPlayer];
        } else {
            shownExchange = shownExchange + 1;
            if (shownExchange > LAST_PLANET) {
                shownExchange = 0;
            }
        }
        drawChart(shownExchange);
        showExchangeInfo(shownExchange);
    }

    function b_Next_MouseDown(Button, Shift, X, Y) {
        b_Next.BackColor = WHITE;
    }

    function b_Next_MouseUp(Button, Shift, X, Y) {
        b_Next.BackColor = LIGHT_GRAY;
    }

    async function b_Sell_Click() {
        let shares = 0;
        let sharePrice = 0;
        let profit = 0;
        me.MousePointer = HOURGLASS;
        if (shownExchange != game.planet[game.currentPlayer] && shownExchange != LAST_PLANET + 1) {
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "neutral.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            frm_Box0.FillElastic.Caption = Trim(game.planetNames[shownExchange]) + " Exchange";
            frm_Box0.b_Message.Caption = "\n" + "Sorry, but you cannot buy or sell shares on the " + Trim(game.planetNames[shownExchange]) + " Exchange unless you are visiting the planet " + Trim(game.planetNames[shownExchange]) + ".";
            await frm_Box0.Show(1);
        } else if (game.stockCrashed[game.planet[game.currentPlayer]] == -1) {
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            frm_Box1.FillElastic.Caption = "Stock Market Crash!!!";
            frm_Box1.b_Message.Caption = "The Stock Market on planet " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " crashed today !!! Everyone who owned stock in the " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " Exchange lost their entire investment. Emperor Dred Nicolson has intervened and shut down the " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " Exchange for one week. The Stock Exchange Board is working around the clock on restoring the " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " Exchange to 1000 points by next week. This, however, will come at a high price. No investors are expected to have their losses refunded.";
            await frm_Box1.Show(1);
        } else {
            if (game.turn < 15) {
                sharePrice = game.stockPrices[game.planet[game.currentPlayer]][game.turn];
            } else {
                sharePrice = game.stockPrices[game.planet[game.currentPlayer]][15];
            }
            if ((sharePrice - player.shareAvgCost[game.planet[game.currentPlayer]]) >= 0) {
                shares = await askNumber(0, Format(player.shares[game.planet[game.currentPlayer]], "##0"), 0.25 * player.shares[game.planet[game.currentPlayer]], player.shares[game.planet[game.currentPlayer]], "Enter the number of shares you wish to sell on the " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " Exchange. If you sell all of your shares right now, you stand to make a profit of " + Format((sharePrice - player.shareAvgCost[game.planet[game.currentPlayer]]) * player.shares[game.planet[game.currentPlayer]], "#,#0") + " kubars less the brokerage fees.", Trim(game.planetNames[game.planet[game.currentPlayer]]) + " Exchange");
            } else {
                shares = await askNumber(0, Format(player.shares[game.planet[game.currentPlayer]], "##0"), 0.25 * player.shares[game.planet[game.currentPlayer]], player.shares[game.planet[game.currentPlayer]], "Enter the number of shares you wish to sell on the " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " Exchange. If you sell all of your shares right now, you stand to take a loss of " + Format(-(sharePrice - player.shareAvgCost[game.planet[game.currentPlayer]]) * player.shares[game.planet[game.currentPlayer]], "#,#0") + " kubars less the brokerage fees.", Trim(game.planetNames[game.planet[game.currentPlayer]]) + " Exchange");
            }
            if (shares == -3333) {
                noteText = "";
            } else if (shares < 0) {
                noteText = "";
            } else if (shares == 0) {
                noteText = "\n" + "\n" + "NOTE:" + "\n" + "You didn't sell any shares.";
            } else if (shares > player.shares[game.planet[game.currentPlayer]]) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "neutral.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                noteText = "\n" + "\n" + "NOTE:" + "\n" + "You didn't sell any shares.";
                showExchangeInfo(shownExchange);
                if (player.shares[game.planet[game.currentPlayer]] == 1) {
                    frm_MsgBox.FillElastic.Caption = "\n" + "You don't own that much. You can only sell " + Format(player.shares[game.planet[game.currentPlayer]], "#,#0") + " share.";
                } else {
                    frm_MsgBox.FillElastic.Caption = "\n" + "You don't own that much. You can only sell " + Format(player.shares[game.planet[game.currentPlayer]], "#,#0") + " shares.";
                }
                await frm_MsgBox.Show(1);
            } else {
                profit = (sharePrice - player.shareAvgCost[game.planet[game.currentPlayer]]) * shares;
                player.shares[game.planet[game.currentPlayer]] = player.shares[game.planet[game.currentPlayer]] - shares;
                if (player.shares[game.planet[game.currentPlayer]] == 0) {
                    player.shareAvgCost[game.planet[game.currentPlayer]] = 0;
                }
                if (profit > 0) {
                    frm_Box1.FillElastic.Caption = "You Made Money!";
                    frm_Box1.b_Message.Caption = "Congratulations, you made a profit of " + Format(profit, "#,#0") + " kubars!" + "\n" + "\n" + "Despite the fact that you made a profit, you must still pay a brokerage fee. Every time you buy or sell stock, you must pay your broker a 1% commission on the total transaction amount (" + Format(shares * sharePrice, "#,#0") + " kubars). Hence, the commission comes out to be " + Format(0.01 * shares * sharePrice, "#,#0") + " kubars. Sorry, but brokers do not work for free.";
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "gamble.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    noteText = "\n" + "\n" + "NOTE:" + "\n" + "You made " + Format(profit, "#,#0") + " kubars profit";
                } else if (profit == 0) {
                    frm_Box1.FillElastic.Caption = "You Broke Even";
                    frm_Box1.b_Message.Caption = "You broke even with a profit of exactly " + Format(profit, "#,#0") + " kubars!" + "\n" + "\n" + "Despite the fact that you didn't make any money, you must still pay a brokerage fee. Every time you buy or sell stock, you must pay your broker a 1% commission on the total transaction amount (" + Format(shares * sharePrice, "#,#0") + " kubars). Hence, the commission comes out to be " + Format(0.01 * shares * sharePrice, "#,#0") + " kubars. Sorry, but brokers do not work for free.";
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "neutral.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    noteText = "\n" + "\n" + "NOTE:" + "\n" + "You made " + Format(profit, "#,#0") + " kubars profit";
                } else {
                    frm_Box1.FillElastic.Caption = "You Lost Money!";
                    frm_Box1.b_Message.Caption = "I'm sorry to say you suffered a loss of " + Format(-1 * profit, "#,#0") + " kubars!" + "\n" + "\n" + "Despite the fact that you lost money, you must still pay a brokerage fee. Every time you buy or sell stock, you must pay your broker a 1% commission on the total transaction amount (" + Format(shares * sharePrice, "#,#0") + " kubars). Hence, the commission comes out to be " + Format(0.01 * shares * sharePrice, "#,#0") + " kubars. Sorry, but brokers do not work for free.";
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "bad7.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    noteText = "\n" + "\n" + "NOTE:" + "\n" + "You lost " + Format(-profit, "#,#0") + " kubars";
                }
                await frm_Box1.Show(1);
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "stock.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                player.cash = player.cash + (shares * sharePrice);
                await spend(0.01 * shares * sharePrice, 0);
            }
        }
        showExchangeInfo(shownExchange);
    }

    function b_Sell_MouseDown(Button, Shift, X, Y) {
        b_Sell.BackColor = WHITE;
    }

    function b_Sell_MouseUp(Button, Shift, X, Y) {
        b_Sell.BackColor = LIGHT_GRAY;
    }

    async function b_Shares_Click() {
        let planet = 0;
        me.MousePointer = HOURGLASS;
        frm_BoxCol1.FillElastic.Caption = "Your Shares" + "\n" + "On Each Planet";
        frm_BoxCol1.b_Col1.Caption = "";
        frm_BoxCol1.b_Col2.Caption = "";
        for (planet = 0; planet <= LAST_PLANET; planet++) {
            frm_BoxCol1.b_Col1.Caption = frm_BoxCol1.b_Col1.Caption + game.planetNames[planet] + "\n";
            frm_BoxCol1.b_Col2.Caption = frm_BoxCol1.b_Col2.Caption + Format(player.shares[planet], "#,#0") + "  shares" + "\n";
        }
        await frm_BoxCol1.Show(1);
    }

    function b_Shares_MouseDown(Button, Shift, X, Y) {
        b_Shares.BackColor = WHITE;
    }

    function b_Shares_MouseUp(Button, Shift, X, Y) {
        b_Shares.BackColor = LIGHT_GRAY;
    }

    function drawChart(exchange) {
        let i = 0;
        let week = 0;
        exchange = CInt(exchange);
        const ARROW_CURSOR = 1;
        me.MousePointer = HOURGLASS;
        if (exchange == LAST_PLANET + 1) {
            b_Chart.DataReset = 9;
            b_Chart.DrawMode = 1;
            b_Chart.NumSets = LAST_PLANET + 1;
            for (i = 0; i <= LAST_PLANET; i++) {
                b_Chart.ColorData = EXCHANGE_COLORS[i];
            }
            for (i = 0; i <= LAST_PLANET; i++) {
                b_Chart.LegendText = game.planetNames[i];
            }
            if (game.turn < 15) {
                b_Chart.NumPoints = game.turn + 1;
            } else {
                b_Chart.NumPoints = 15;
            }
            if (game.turn < 15) {
                for (i = 0; i <= game.turn; i++) {
                    b_Chart.LabelText = Format(i, "#,#0");
                }
            } else {
                for (i = 1; i <= 15; i++) {
                    b_Chart.LabelText = Format(Add(i, (game.turn - 15)), "#,#0");
                }
            }
            for (i = 0; i <= LAST_PLANET; i++) {
                if (game.turn < 15) {
                    for (week = 0; week <= game.turn; week++) {
                        if (week == 0) {
                            b_Chart.GraphData = 1000;
                        } else {
                            b_Chart.GraphData = game.stockPrices[i][week];
                        }
                    }
                } else {
                    for (week = 1; week <= 15; week++) {
                        b_Chart.GraphData = game.stockPrices[i][week];
                    }
                }
            }
            b_Chart.DrawMode = 2;
            me.MousePointer = ARROW_CURSOR;
        } else {
            b_Chart.DataReset = 9;
            b_Chart.DrawMode = 1;
            b_Chart.NumSets = 1;
            b_Chart.ColorData = EXCHANGE_COLORS[exchange];
            b_Chart.LegendText = "";
            if (game.turn < 15) {
                b_Chart.NumPoints = game.turn + 1;
            } else {
                b_Chart.NumPoints = 15;
            }
            if (game.turn < 15) {
                for (i = 0; i <= game.turn; i++) {
                    b_Chart.LabelText = Format(i, "#,#0");
                }
            } else {
                for (i = 1; i <= 15; i++) {
                    b_Chart.LabelText = Format(Add(i, (game.turn - 15)), "#,#0");
                }
            }
            if (game.turn < 15) {
                for (week = 0; week <= game.turn; week++) {
                    if (week == 0) {
                        b_Chart.GraphData = 1000;
                    } else {
                        b_Chart.GraphData = game.stockPrices[exchange][week];
                    }
                }
            } else {
                for (week = 1; week <= 15; week++) {
                    b_Chart.GraphData = game.stockPrices[exchange][week];
                }
            }
            b_Chart.DrawMode = 2;
            me.MousePointer = ARROW_CURSOR;
        }
    }

    function showExchangeInfo(exchange) {
        let note = "";
        exchange = CInt(exchange);
        const GREEN = 65280;
        const CYAN = 16776960;
        const RED = 255;
        const MAGENTA = 16711935;
        const YELLOW = 65535;
        if (exchange == LAST_PLANET + 1) {
            exchange = game.planet[game.currentPlayer];
        }
        if (exchange == 0) {
            b_Message.ForeColor = GREEN;
        } else if (exchange == 1) {
            b_Message.ForeColor = CYAN;
        } else if (exchange == 2) {
            b_Message.ForeColor = RED;
        } else if (exchange == 3) {
            b_Message.ForeColor = MAGENTA;
        } else if (exchange == 4) {
            b_Message.ForeColor = YELLOW;
        } else if (exchange == 5) {
            b_Message.ForeColor = LIGHT_GRAY;
        } else if (exchange == 6) {
            b_Message.ForeColor = WHITE;
        }
        if (exchange == game.planet[game.currentPlayer]) {
            note = noteText;
        }
        if (game.turn <= 15) {
            b_Message.Caption = "The " + Trim(game.planetNames[exchange]) + " Exchange" + "\n" + "\n" + "Planetary" + "\n" + "Stock Market" + "\n" + "\n" + "Current Price:" + "\n" + Format(game.stockPrices[exchange][game.turn], "#,#0") + "\n" + "\n" + "Price You Paid:" + "\n" + Format(player.shareAvgCost[exchange], "#,#0") + "\n" + "\n" + "Your Stock:" + "\n" + Format(player.shares[exchange], "#,#0") + " shares" + "\n" + "\n" + "Cash:  " + "\n" + Format(player.cash, "#,#0") + " kubars" + "\n" + "\n" + "Bank:  " + "\n" + Format(player.bankBalance, "#,#0") + " kubars" + "\n" + "\n" + "Loan:  " + "\n" + Format(player.loan, "#,#0") + " kubars" + note;
        } else {
            b_Message.Caption = "The " + Trim(game.planetNames[exchange]) + " Exchange" + "\n" + "\n" + "Planetary" + "\n" + "Stock Market" + "\n" + "\n" + "Current Price:" + "\n" + Format(game.stockPrices[exchange][15], "#,#0") + "\n" + "\n" + "Price You Paid:" + "\n" + Format(player.shareAvgCost[exchange], "#,#0") + "\n" + "\n" + "Your Stock:" + "\n" + Format(player.shares[exchange], "#,#0") + " shares" + "\n" + "\n" + "Cash:  " + "\n" + Format(player.cash, "#,#0") + " kubars" + "\n" + "\n" + "Bank:  " + "\n" + Format(player.bankBalance, "#,#0") + " kubars" + "\n" + "\n" + "Loan:  " + "\n" + Format(player.loan, "#,#0") + " kubars" + note;
        }
    }

    async function Form_Activate() {
        let planet = 0;
        let pointChange = 0;
        if (newsShown == 0) {
            newsShown = -1;
            for (planet = 0; planet <= LAST_PLANET; planet++) {
                if (game.stockCrashed[planet] == -1) {
                    frm_Box1.FillElastic.Caption = "Stock Market Crash!!!";
                    frm_Box1.b_Message.Caption = "The Stock Market on planet " + game.planetNames[planet] + " crashed today!!! Everyone who owned stock in the " + game.planetNames[planet] + " Exchange lost their entire investment. Emperor Dred Nicolson has intervened and shut down the " + game.planetNames[planet] + " Exchange for one week. The Stock Exchange Board is working around the clock on restoring the " + game.planetNames[planet] + " Exchange to 1000 points by next week. This, however, will come at a high price. No investors are expected to have their losses refunded.";
                    await frm_Box1.Show(1);
                    noteText = "\n" + "\n" + "NOTE:" + "\n" + "The " + game.planetNames[planet] + " Exchange Crashed!";
                }
            }
            if (game.newsEvent == 1000) {
                if (game.turn <= 15) {
                    pointChange = game.stockPrices[game.newsPlanet][game.turn] - game.stockPrices[game.newsPlanet][game.turn - 1];
                } else {
                    pointChange = game.stockPrices[game.newsPlanet][15] - game.stockPrices[game.newsPlanet][14];
                }
                frm_Box1.FillElastic.Caption = Trim(game.planetNames[game.newsPlanet]) + " Exchange Soars!";
                frm_Box1.b_Message.Caption = "The " + Trim(game.planetNames[game.newsPlanet]) + " Exchange shot up this week!!! The average share price gained an amazing " + Format(pointChange, "#,#0") + " points on heavy trading. We have reports from the " + Trim(game.planetNames[game.newsPlanet]) + " Exchange that a number of big investors made a tidy profit on this unexpected market shift.";
                await frm_Box1.Show(1);
                noteText = "\n" + "\n" + "NOTE:" + "\n" + "The " + game.planetNames[game.newsPlanet] + " Exchange Takes Off!";
            } else if (game.newsEvent == 1001) {
                if (game.turn <= 15) {
                    pointChange = game.stockPrices[game.newsPlanet][game.turn - 1] - game.stockPrices[game.newsPlanet][game.turn];
                } else {
                    pointChange = game.stockPrices[game.newsPlanet][14] - game.stockPrices[game.newsPlanet][15];
                }
                frm_Box1.FillElastic.Caption = Trim(game.planetNames[game.newsPlanet]) + " Exchange Plummets!";
                frm_Box1.b_Message.Caption = "The " + Trim(game.planetNames[game.newsPlanet]) + " Exchange plummeted this week, as the average share price fell " + Format(pointChange, "#,#0") + " points. We have reports from the " + Trim(game.planetNames[game.newsPlanet]) + " Exchange that a number of big investors lost a fortune in this unexpected down-turn.";
                await frm_Box1.Show(1);
                noteText = "\n" + "\n" + "NOTE:" + "\n" + "The " + game.planetNames[game.newsPlanet] + " Exchange Nose Dives!";
            }
        }
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_Exit_Click();
        }
    }

    function Form_Load() {
        let planet = 0;
        let anyCrashed = 0;
        me.MousePointer = HOURGLASS;
        noteText = "";
        newsShown = 0;
        anyCrashed = 0;
        for (planet = 0; planet <= LAST_PLANET; planet++) {
            if (game.stockCrashed[planet] == -1) {
                anyCrashed = -1;
            }
        }
        shownExchange = LAST_PLANET + 1;
        drawChart(shownExchange);
        showExchangeInfo(shownExchange);
        if (settings.soundOn == -1) {
            if (anyCrashed == -1) {
                b_Sound.FileName = Trim(paths.soundDir) + "stokcrsh.wav";
            } else {
                b_Sound.FileName = Trim(paths.soundDir) + "stock.wav";
            }
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
    }

    function Form_Unload(Cancel) {
        b_Sound.Command = "Close";
    }

    return {
        b_All_Click, b_All_MouseDown, b_All_MouseUp, b_Buy_Click,
        b_Buy_MouseDown, b_Buy_MouseUp, b_Exit_Click, b_Exit_MouseDown,
        b_Exit_MouseUp, b_Help_Click, b_Help_MouseDown, b_Help_MouseUp,
        b_Next_Click, b_Next_MouseDown, b_Next_MouseUp, b_Sell_Click,
        b_Sell_MouseDown, b_Sell_MouseUp, b_Shares_Click, b_Shares_MouseDown,
        b_Shares_MouseUp, drawChart, showExchangeInfo, Form_Activate,
        Form_KeyPress, Form_Load, Form_Unload,
    };
});
