// Originally translated from src/BEGIN.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_BeginGame",
  ["Form", "frm_BeginGame", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Begin Game", "BackColor": 0, "ForeColor": 0, "Left": 1920, "Top": 1485, "Width": 7365, "Height": 4005, "WindowState": 2, "FontName": "MS Sans Serif", "FontSize": 8.25, "FontBold": -1, "FontItalic": -1, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "DrawMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 1920, "ClientTop": 1485, "ClientWidth": 7365, "ClientHeight": 4005}, [
    ["MMControl", "b_Sound", {"Left": 4710, "Top": 30, "Width": 3540, "Height": 330, "TabIndex": 8, "Visible": 0}],
    ["VideoSoftElastic", "FillElastic", {"BackColor": 0, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0, "PicturePos": 9}, [
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 0, "Left": 2460, "Top": 2370, "Width": 4695, "Height": 1410, "TabIndex": 1, "AutoSizeChildren": 3, "BorderWidth": 0, "ChildSpacing": 8, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0}, [
        ["VideoSoftElastic", "b_NewGame", {"BackColor": 16711680, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 4695, "Height": 645, "TabIndex": 3, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "FloodDirection": 4, "FloodColor": 16776960, "Caption": "Start  New Game", "CaptionPos": 4, "BevelChildren": 1, "AccessKey": -1, "ShadowColor": 65280, "IntBkg": 16711680, "PicturePos": 9}],
        ["VideoSoftElastic", "b_Quit", {"BackColor": 0, "ForeColor": 16777215, "Left": 0, "Top": 765, "Width": 4695, "Height": 630, "TabIndex": 2, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 12, "BevelInner": 1, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 6, "FloodDirection": 4, "FloodColor": 16776960, "Caption": "Quit Game", "CaptionPos": 4, "BevelChildren": 1, "AccessKey": -1, "ShadowColor": 65280, "IntBkg": 0, "PicturePos": 9}]
      ]],
      ["Label", "Label1", {"ForeColor": 65535, "Left": 7260, "Top": 2520, "Width": 2145, "Height": 900, "TabIndex": 9, "Alignment": 2, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { b_Sound, FillElastic, VSElastic3, b_NewGame, b_Quit, Label1 } = me.controls;
    const HOURGLASS = 11;
    const LIGHT_GRAY = 12632256;
    const BLUE = 16711680;
    const ARROW_CURSOR = 1;
    let blackBackColor = 0;

    async function b_NewGame_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        applyBeginnerSetup();
        await frm_HowManyPlayers.Show();
        await Unload(me);
    }

    function applyBeginnerSetup() {
        const rivalIntelligence = [0, 25, 60, 95, 130, 165, 200];
        let rival = 0;
        game.skillLevel = 3;
        game.marketDifficulty = 1;
        game.tutorialMode = 0;
        player.cash = 0;
        player.zinnLoan = 150000;
        player.luck = 50;
        player.luckIsTemporary = -1;
        for (rival = 1; rival <= 6; rival++) {
            rivals.intelligence[rival] = rivalIntelligence[rival];
        }
    }

    function b_NewGame_MouseDown(Button, Shift, X, Y) {
        b_NewGame.BackColor = LIGHT_GRAY;
    }

    function b_NewGame_MouseUp(Button, Shift, X, Y) {
        b_NewGame.BackColor = BLUE;
    }

    function b_Quit_Click() {
        FillElastic.Visible = 0;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        End();
    }

    function b_Quit_MouseDown(Button, Shift, X, Y) {
        b_Quit.BackColor = LIGHT_GRAY;
    }

    function b_Quit_MouseUp(Button, Shift, X, Y) {
        b_Quit.BackColor = blackBackColor;
    }

    function initNewGame() {
        let i = 0;
        let j = 0;
        let k = 0;
        let maxInsuranceCost = 0;
        player.passengerAdSpend = 0;
        player.commodityAdSpend = 0;
        player.adSpendTotal = 0;
        player.passengerAdChoice = 0;
        player.commodityAdChoice = 0;
        player.adExtraPassengers = 0;
        player.age = randomBetween(17, 50);
        for (i = 0; i <= 2; i++) {
            for (j = 0; j <= 5; j++) {
                player.cargo[i][j] = 0;
                player.cargoAvgCost[i][j] = 0;
            }
        }
        player.cargoTotal = 0;
        player.cargoCapacity = 100;
        player.cash = 0;
        player.crewSize = 4;
        player.crewSalary = 1500;
        player.wagesOwed = 0;
        player.emailAddress = FixStr("", 64);
        player.luck = 50;
        player.luckIsTemporary = -1;
        player.fuel = 50;
        player.fuelCapacity = 50;
        player.insured = 0;
        player.insuranceRate = 15;
        maxInsuranceCost = player.insuranceRate * 1000;
        player.insuranceCost = randomBetween(player.insuranceRate, maxInsuranceCost);
        player.loan = 0;
        player.loanRate = 0.05;
        player.loanInterest = 0;
        player.creditLimit = 100000;
        player.passengersAboard = 0;
        player.passengerCapacity = 8;
        player.passengersWaiting = 0;
        player.nextTicketPrice = 1000;
        player.ticketPrice = 1000;
        player.passengersBoarded = 0;
        player.specialDone = 0;
        player.quickWarehouse = 0;
        player.quickMarket = 0;
        player.quickDeposit = 0;
        player.quickBank = 0;
        player.quickLoan = 0;
        player.quickAdvertise = 0;
        player.quickCrew = 0;
        player.quickFuel = 0;
        player.quickTravel = 0;
        player.quickPassengers = 0;
        player.quickTaxes = 0;
        player.quickInsurance = 0;
        player.arrivalRoll = randomBetween(1, 100);
        player.playerName = FixStr("", 20);
        player.bankBalance = 0;
        player.bankRate = 0.01;
        player.bankInterest = 0;
        for (i = 0; i <= LAST_PLANET; i++) {
            player.shareAvgCost[i] = 0;
            player.shares[i] = 0;
        }
        player.supplyChartPlanet = -1;
        player.tariffsOwed = 0;
        player.passengerTaxOwed = 0;
        player.warehouseCapacity = 50;
        for (i = 0; i <= LAST_PLANET; i++) {
            for (j = 0; j <= 2; j++) {
                for (k = 0; k <= 5; k++) {
                    player.warehouseStock[i][j][k] = 0;
                    player.warehouseAvgCost[i][j][k] = 0;
                }
            }
            player.warehouseUsed[i] = 0;
        }
        player.zinnLoan = 0;
        player.zinnCreditLimit = 200000;
        player.zinnRate = 0.04;
        player.zinnInterest = 0;
        game.complexity = 1;
        game.unlockZinnLoan = 2;
        game.unlockSupply = 3;
        game.unlockLoan = 4;
        game.unlockInsurance = 5;
        game.unlockViewCity = 6;
        game.unlockFuel = 7;
        game.unlockPassengers = 8;
        game.unlockCrew = 9;
        game.unlockAdvertising = 10;
        game.unlockTaxes = 11;
        game.unlockBank = 12;
        game.unlockWarehouse = 13;
        game.unlockExplore = 14;
        game.unlockDistanceChart = 15;
        game.unlockFacilities = 16;
        game.unlockStocks = 17;
        for (i = 0; i <= LAST_PLANET; i++) {
            game.planetSupplyBoost[i] = 0;
        }
        for (i = 1; i <= 6; i++) {
            game.graphShowCompany[i] = 0;
            game.companyNames[i] = FixStr(" ", 20);
        }
        game.auctionType = 0;
        game.lastAuctionType = 0;
        game.auctionWinner = 0;
        game.auctionRunnerUp = 0;
        game.lastAuctionWinner = 0;
        game.lastAuctionRunnerUp = 0;
        game.auctionTopBid = 0;
        game.auctionSecondBid = 0;
        game.lastAuctionTopBid = 0;
        game.lastAuctionSecondBid = 0;
        game.auctionFacility = 0;
        game.auctionPlanet = 0;
        game.auctionFacilityRevenue = 0;
        game.lastAuctionFacility = 0;
        game.lastAuctionPlanet = 0;
        game.lastAuctionFacilityRevenue = 0;
        game.commodityNames[0][0] = FixStr("Cantaloupe", 11);
        game.commodityNames[0][1] = FixStr("Jelly Beans", 11);
        game.commodityNames[0][2] = FixStr("Moon Ferns", 11);
        game.commodityNames[0][3] = FixStr("Frog Legs", 11);
        game.commodityNames[0][4] = FixStr("Whip Cream", 11);
        game.commodityNames[0][5] = FixStr("Babel Seeds", 11);
        game.commodityNames[1][0] = FixStr("Diapers", 11);
        game.commodityNames[1][1] = FixStr("Umbrellas", 11);
        game.commodityNames[1][2] = FixStr("Toasters", 11);
        game.commodityNames[1][3] = FixStr("Polyester", 11);
        game.commodityNames[1][4] = FixStr("Hair Tonic", 11);
        game.commodityNames[1][5] = FixStr("Lava Lamps", 11);
        game.commodityNames[2][0] = FixStr("Oxygen", 11);
        game.commodityNames[2][1] = FixStr("Oggle Sand", 11);
        game.commodityNames[2][2] = FixStr("Kryptoons", 11);
        game.commodityNames[2][3] = FixStr("X Fuels", 11);
        game.commodityNames[2][4] = FixStr("Gems", 11);
        game.commodityNames[2][5] = FixStr("Exotic", 11);
        for (i = 0; i <= LAST_PLANET; i++) {
            for (j = 0; j <= 2; j++) {
                for (k = 0; k <= 5; k++) {
                    game.supplyPercent[i][j][k] = randomBetween(0, 100);
                    game.prices[i][j][k] = 0;
                    game.available[i][j][k] = 0;
                }
            }
        }
        game.marketDifficulty = 0;
        game.year = 139;
        game.isEmailGame = 0;
        game.emailFileName = FixStr("", 12);
        game.exportTariff = 0.02;
        for (i = 1; i <= 6; i++) {
            game.engineSpeed[i] = 5;
        }
        game.fuelBasePrice = 200;
        for (i = 0; i <= LAST_PLANET; i++) {
            game.fuelPrice[i] = randomBetween(game.fuelBasePrice, game.fuelBasePrice * 10);
        }
        game.saveSlot = 0;
        game.weeklyEventRoll = 0;
        game.importTariff = 0.03;
        game.skillLevel = 1;
        game.newsEvent = randomBetween(1, 124);
        game.weeklyRoll = randomBetween(1, 100);
        game.newsPlanet = randomBetween(0, LAST_PLANET);
        for (i = 1; i <= 6; i++) {
            game.netWorth[i] = 0;
        }
        game.numRivals = 6;
        game.currentPlayer = 1;
        game.numPlayers = 1;
        game.turnOrderPos = 1;
        for (i = 1; i <= 6; i++) {
            game.planet[i] = CInt(i - 1);
            game.previousPlanet[i] = CInt(i);
            game.turnOrder[i] = CLng(i);
            game.shipType[i] = CInt(i);
        }
        for (i = 1; i <= 6; i++) {
            for (j = 0; j <= LAST_PLANET; j++) {
                game.facilitiesOwned[i][j] = 0;
                game.facilityFees[i][j] = 0;
                game.facilityRevenue[i][j] = 0;
            }
        }
        for (i = 0; i <= LAST_PLANET; i++) {
            game.planetNames[i] = FixStr(PLANET_NAMES[i], 4);
        }
        scatterPlanets();
        game.passengerTaxRate = 0.15;
        game.weeklySales = 0;
        game.weeklyProfit = 0;
        game.canBuyStock = -1;
        for (i = 0; i <= LAST_PLANET; i++) {
            game.stockCrashed[i] = 0;
            game.stockStrength[i] = 50;
            for (j = 1; j <= 15; j++) {
                game.stockPrices[i][j] = CLng(1600 - (100 * i));
            }
        }
        for (i = 1; i <= 6; i++) {
            game.shipSize[i] = 400;
            game.travelTime[i] = 0;
            game.travelDelay[i] = 1;
            game.turnDone[i] = 0;
        }
        game.turn = 1;
        game.tutorialMode = 0;
        game.weatherEvent = randomBetween(1, 70);
        game.weatherPlanet = randomBetween(0, LAST_PLANET);
        game.winner = 0;
        game.goalNetWorth = 1000000;
        for (i = 1; i <= 6; i++) {
            rivals.netWorth[i] = 0;
            if (i == 1) {
                rivals.engineSpeed[i] = 5;
            } else if (i == 2) {
                rivals.engineSpeed[i] = 5;
            } else if (i == 3) {
                rivals.engineSpeed[i] = 5;
            } else if (i == 4) {
                rivals.engineSpeed[i] = 4;
            } else if (i == 5) {
                rivals.engineSpeed[i] = 5;
            } else if (i == 6) {
                rivals.engineSpeed[i] = 6;
            }
            rivals.planet[i] = CInt(i);
            rivals.travelTime[i] = 0;
            rivals.turnDone[i] = 0;
            rivals.cargoCategory[i] = 0;
            rivals.cargoItem[i] = 0;
            rivals.cargo[i] = 0;
            rivals.shipSize[i] = 400;
            rivals.cash[i] = 0;
            rivals.intelligence[i] = 100;
        }
        for (i = 1; i <= 6; i++) {
            for (j = 0; j <= LAST_PLANET; j++) {
                rivals.facilitiesOwned[i][j] = 0;
                rivals.facilityFees[i][j] = 0;
                rivals.facilityRevenue[i][j] = 0;
                rivals.shares[i][j] = 0;
            }
        }
        rivals.companyNames[1] = FixStr("Trading Corp. IV", 16);
        rivals.companyNames[2] = FixStr("Gizzy Shipping", 16);
        rivals.companyNames[3] = FixStr("Vandergriff Ltd.", 16);
        rivals.companyNames[4] = FixStr("Puffer Inc.", 16);
        rivals.companyNames[5] = FixStr("Roke Transport", 16);
        rivals.companyNames[6] = FixStr("Hoff Miester", 16);
    }

    async function Form_Activate() {
        await b_NewGame_Click();
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        Randomize();
        initNewGame();
        b_NewGame.Caption = "Start New Game";
    }

    function Label1_Click() {
        Label1.Caption = "Long live Emperor Dred!";
    }

    return {
        b_NewGame_Click, b_NewGame_MouseDown, b_NewGame_MouseUp, b_Quit_Click, b_Quit_MouseDown,
        b_Quit_MouseUp, applyBeginnerSetup, initNewGame, Form_Activate,
        Form_Load, Label1_Click,
    };
});
