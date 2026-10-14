// Originally translated from src/TUTORIAL.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Tutorial",
  ["Form", "frm_Tutorial", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Tutorial", "BackColor": 0, "Left": 360, "Top": 2580, "Width": 7365, "Height": 4020, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 360, "ClientTop": 2580, "ClientWidth": 7365, "ClientHeight": 4020}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "IntBkg": 16744576, "PicturePos": 10}, [
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 945, "Top": 270, "Width": 7695, "Height": 810, "TabIndex": 5, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 2, "BevelOuterWidth": 10, "FloodColor": 16777088, "FloodPercent": 100, "Caption": "TUTORIAL", "CaptionPos": 4, "ShadowColor": 4194368, "IntBkg": 4194304}],
      ["VideoSoftElastic", "b_Container", {"BackColor": 4210752, "ForeColor": 16776960, "Left": 1440, "Top": 1410, "Width": 6615, "Height": 4245, "TabIndex": 2, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 1, "BevelOuter": 0, "BevelInnerWidth": 6, "BevelOuterWidth": 0, "FloodColor": 8421504, "CaptionPos": 0, "IntBkg": 4210752}, [
        ["VideoSoftElastic", "VSElastic3", {"BackColor": 16777088, "Left": 90, "Top": 90, "Width": 6435, "Height": 4065, "TabIndex": 4, "AutoSizeChildren": 1, "BorderWidth": 12, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16777088}, [
          ["Label", "b_Message", {"Caption": "Welcome to Star Trader Tutorial!", "ForeColor": 0, "Left": 180, "Top": 180, "Width": 6075, "Height": 3705, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 3, "BackStyle": 0}]
        ]]
      ]],
      ["VideoSoftElastic", "b_Continue", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 945, "Top": 5985, "Width": 7695, "Height": 585, "TabIndex": 1, "FontName": "Arial", "FontSize": 15, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}]
    ]]
  ]],
function (me) {
    const { FillElastic, VSElastic2, b_Container, VSElastic3, b_Message, b_Continue } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;

    async function b_Continue_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await Unload(me);
    }

    function b_Continue_MouseDown(Button, Shift, X, Y) {
        b_Continue.BackColor = 0x800000;
    }

    function b_Continue_MouseUp(Button, Shift, X, Y) {
        b_Continue.BackColor = 0x400000;
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
        if (game.turn == 1) {
            b_Message.Caption = "Welcome to the Tutorial! The game will start off simple and gradually become more sophisticated. Once you learn the basic rules, we will allow you to increase the complexity at your own pace." + "\n" + "\n" + "You begin the game with " + Format(player.cash, "#,#0") + " in cash and a debt of " + Format(player.zinnLoan, "#,#0") + " kubars to Mr. Zinn. The best way to familiarize yourself with the game is to click on the GETTING STARTED button in the next section.";
        } else if (game.complexity == game.unlockLoan) {
            b_Message.Caption = "This turn we are introducing a new game function called LOAN. This allows you to borrow money from the Trader's Union. Be sure to click on the LOAN HELP button for more information!";
        } else if (game.complexity == game.unlockZinnLoan) {
            b_Message.Caption = "This turn we are introducing a new game function called ZINN'S LOAN. In order to start your company, you had to borrow " + Format(player.zinnLoan, "#,#0") + " kubars from Mr. Zinn. You used this money to purchase your spaceship. Now you must begin to pay Mr. Zinn back." + "\n" + "\n" + "Mr. Zinn is charging you 4% interest per week. It takes one week to travel to a new planet and conduct business. In other words, one week equals one game turn.";
        } else if (game.complexity == game.unlockSupply) {
            b_Message.Caption = "This turn we are introducing a new game function called SUPPLY. The SUPPLY chart shows you the supply of goods on each planet." + "\n" + "\n" + "If the supply is 100%, the commodities are plentiful on the planet and the price tends to be low. If the supply is 0%, the goods are rare, and the price tends to be high. This should help you determine which planet is worth travelling to.";
        } else if (game.complexity == game.unlockViewCity) {
            b_Message.Caption = "This turn we are introducing a new game function called VIEW CITY." + "\n" + "\n" + "This function allows you to look at the city you are visiting and read about the planet's history.";
        } else if (game.complexity == game.unlockBank) {
            b_Message.Caption = "Because you chose to increase the complexity, we are introducing a new game function called BANK. This allows you to deposit money in a Savings Account." + "\n" + "\n" + "Be sure to click on the BANK HELP button for more information!";
        } else if (game.complexity == game.unlockPassengers) {
            b_Message.Caption = "Because you chose to increase the complexity, we are introducing a new game function called PICK-UP PASSENGERS. This allows you to make money transporting passengers from one planet to another.";
        } else if (game.turn == 10) {
            b_Message.Caption = "From this point on, you must decide when to add more complexity to the game. Immediately following the GRAPH menu, a COMPLEXITY menu will appear." + "\n" + "\n" + "From this menu, you can either make the game more complex by adding another function to the game or keep the game as it is.";
        } else if (game.complexity == game.unlockFuel) {
            b_Message.Caption = "This turn we are introducing a new game function called FUEL." + "\n" + "\n" + "From this point on you MUST buy fuel for your spaceship. Be sure to click on the FUEL HELP button for more information!";
        } else if (game.complexity == game.unlockCrew) {
            b_Message.Caption = "Because you chose to increase the complexity, we are introducing a new game function called CREW." + "\n" + "\n" + "From this point on you MUST pay your ship's crew a salary.";
        } else if (game.complexity == game.unlockAdvertising) {
            b_Message.Caption = "Because you chose to increase the complexity, we are introducing a new game function called ADVERTISING." + "\n" + "\n" + "Now you can advertise for passengers and cargo. Be sure to click on the ADVERTISING HELP button for more information!";
        } else if (game.complexity == game.unlockTaxes) {
            b_Message.Caption = "Because you chose to increase the complexity, we are introducing a new game function called TAXES." + "\n" + "\n" + "Unfortunately, you must pay taxes from now on. Sorry, but that's life.";
        } else if (game.complexity == game.unlockInsurance) {
            b_Message.Caption = "This turn we are introducing a new game function called VOYAGER'S INSURANCE." + "\n" + "\n" + "Now you can buy insurance to protect your company from unforeseen disasters.";
        } else if (game.complexity == game.unlockWarehouse) {
            b_Message.Caption = "Because you chose to increase the complexity, we are introducing a new game function called WAREHOUSE." + "\n" + "\n" + "Now you can store commodities in warehouses on all seven planets. Be sure to click on the WAREHOUSE HELP button for more information!";
        } else if (game.complexity == game.unlockExplore) {
            b_Message.Caption = "Because you chose to increase the complexity, we are introducing a new game function called EXPLORE." + "\n" + "\n" + "This will allow you to explore the planets, get weather updates, and catch the latest in Kukubian news.";
        } else if (game.complexity == game.unlockDistanceChart) {
            b_Message.Caption = "Because you chose to increase the complexity, we are introducing a new game function called DISTANCE CHART. The button will appear when you JOURNEY to a new planet at the bottom of the screen." + "\n" + "\n" + "The DISTANCE CHART will show the exact distance between each of the planets and the location of all the other players' ships.";
        } else if (game.complexity == game.unlockFacilities) {
            b_Message.Caption = "Because you chose to increase the complexity, we are introducing a new game function called FACILITIES. The button will appear when you JOURNEY to a new planet, right next to the DISTANCE CHART button." + "\n" + "\n" + "Once every few weeks, Emperor Dred Nicolson will auction off government facilities to the highest bidder. The company that buys a facility can charge other trading companies a FEE every time they visit the planet where the facility is located.";
        } else if (game.complexity == game.unlockStocks) {
            b_Message.Caption = "Because you chose to increase the complexity, we are introducing a new game function called STOCK MARKETS. Each planet has its own stock exchange. These stock exchanges are similar to index funds. They are an average of selected stocks on the planet. A word of caution, before making any big investments, be sure to look at the market trend lines. If a market is on a downward trend, it is not a good idea to invest too much money.";
            game.tutorialMode = 0;
        }
    }

    return {
        b_Continue_Click, b_Continue_MouseDown, b_Continue_MouseUp, Form_Activate,
        Form_KeyPress, Form_Load,
    };
});
