// Originally translated from src/GLOBAL.BAS by tools/vb2js.py; this JavaScript is now the source.

const LAST_PLANET = 13;

const PLANET_NAMES = ["Vexx", "Pyke", "Mira", "Stye", "Loro", "Zile", "Frac", "Tilo", "Queg", "Xeen", "Ooom", "Hork", "Bass", "Nosh"];

// Star map: planet positions are grid units (one unit = 240 x 225 twips); travel distance is the straight line in these units
const MAP_UNIT_X = 240;
const MAP_UNIT_Y = 225;
const MAP_PLANET_WIDTH = 600;
const MAP_PLANET_HEIGHT = 540;
const MAP_MAX_X = 37;
const MAP_MAX_Y = 25;
const MAP_MIN_GAP = 6;

function scatterPlanets() {
    let placed = 0;
    let tries = 0;
    while (placed <= LAST_PLANET) {
        if (++tries > 500) { placed = 0; tries = 0; }
        const x = randomBetween(0, MAP_MAX_X), y = randomBetween(0, MAP_MAX_Y);
        let clear = true;
        for (let j = 0; j < placed; j++) {
            if (Math.hypot(x - game.planetX[j], y - game.planetY[j]) < MAP_MIN_GAP) clear = false;
        }
        if (clear) {
            game.planetX[placed] = x;
            game.planetY[placed] = y;
            placed++;
            tries = 0;
        }
    }
}

// b_Planet control array: on the star map (moved to the game's positions at load) or in an evenly sized strip
function planetButtons(props, onMap) {
    return PLANET_NAMES.map((name, i) => ["VideoSoftElastic", "b_Planet", Object.assign({}, props, { Index: i, Caption: name },
        onMap ? { Left: 0, Top: 0, Width: MAP_PLANET_WIDTH, Height: MAP_PLANET_HEIGHT } : { Left: i * 685, Top: 60, Width: 685, Height: 915 })]);
}

function Paths() {
    return {
        configDir: Space(128),
        imageDir: Space(128),
        saveDir: Space(128),
        soundDir: Space(128),
    };
}

function Settings() {
    return {
        cdDrive: Space(2),
        emailDir: Space(128),
        soundOn: 0,
    };
}

function Player() {
    return {
        passengerAdSpend: 0,
        commodityAdSpend: 0,
        adSpendTotal: 0,
        passengerAdChoice: 0,
        commodityAdChoice: 0,
        adExtraPassengers: 0,
        age: 0,
        cargo: DimArray([2, 5], 0),
        cargoAvgCost: DimArray([2, 5], 0),
        cargoTotal: 0,
        cargoCapacity: 0,
        cash: 0,
        crewSize: 0,
        crewSalary: 0,
        wagesOwed: 0,
        emailAddress: Space(64),
        luck: 0,
        luckIsTemporary: 0,
        fuel: 0,
        fuelCapacity: 0,
        insured: 0,
        insuranceRate: 0,
        insuranceCost: 0,
        loan: 0,
        loanRate: 0,
        loanInterest: 0,
        creditLimit: 0,
        quickWarehouse: 0,
        quickMarket: 0,
        quickDeposit: 0,
        quickBank: 0,
        quickLoan: 0,
        quickAdvertise: 0,
        quickCrew: 0,
        quickFuel: 0,
        quickTravel: 0,
        quickPassengers: 0,
        quickTaxes: 0,
        quickInsurance: 0,
        arrivalRoll: 0,
        playerName: Space(20),
        bankBalance: 0,
        bankRate: 0,
        bankInterest: 0,
        shareAvgCost: DimArray([LAST_PLANET], 0),
        shares: DimArray([LAST_PLANET], 0),
        supplyChartPlanet: 0,
        passengersAboard: 0,
        passengerCapacity: 0,
        passengersWaiting: 0,
        nextTicketPrice: 0,
        ticketPrice: 0,
        passengersBoarded: 0,
        specialDone: 0,
        tariffsOwed: 0,
        passengerTaxOwed: 0,
        warehouseCapacity: 0,
        warehouseStock: DimArray([LAST_PLANET, 2, 5], 0),
        warehouseAvgCost: DimArray([LAST_PLANET, 2, 5], 0),
        warehouseUsed: DimArray([LAST_PLANET], 0),
        zinnLoan: 0,
        zinnCreditLimit: 0,
        zinnRate: 0,
        zinnInterest: 0,
    };
}

function Game() {
    return {
        complexity: 0,
        unlockZinnLoan: 0,
        unlockSupply: 0,
        unlockLoan: 0,
        unlockInsurance: 0,
        unlockViewCity: 0,
        unlockFuel: 0,
        unlockPassengers: 0,
        unlockCrew: 0,
        unlockAdvertising: 0,
        unlockTaxes: 0,
        unlockBank: 0,
        unlockWarehouse: 0,
        unlockExplore: 0,
        unlockDistanceChart: 0,
        unlockFacilities: 0,
        unlockStocks: 0,
        planetSupplyBoost: DimArray([LAST_PLANET], 0),
        auctionType: 0,
        lastAuctionType: 0,
        auctionWinner: 0,
        auctionRunnerUp: 0,
        lastAuctionWinner: 0,
        lastAuctionRunnerUp: 0,
        auctionTopBid: 0,
        auctionSecondBid: 0,
        lastAuctionTopBid: 0,
        lastAuctionSecondBid: 0,
        auctionFacility: 0,
        auctionPlanet: 0,
        auctionFacilityRevenue: 0,
        lastAuctionFacility: 0,
        lastAuctionPlanet: 0,
        lastAuctionFacilityRevenue: 0,
        graphShowCompany: DimArray([6], 0),
        commodityNames: DimArray([2, 5], () => Space(11)),
        supplyPercent: DimArray([LAST_PLANET, 2, 5], 0),
        prices: DimArray([LAST_PLANET, 2, 5], 0),
        available: DimArray([LAST_PLANET, 2, 5], 0),
        marketDifficulty: 0,
        year: 0,
        exportTariff: 0,
        isEmailGame: 0,
        emailFileName: Space(12),
        engineSpeed: DimArray([6], 0),
        fuelBasePrice: 0,
        fuelPrice: DimArray([LAST_PLANET], 0),
        saveSlot: 0,
        weeklyEventRoll: 0,
        importTariff: 0,
        skillLevel: 0,
        newsEvent: 0,
        weeklyRoll: 0,
        newsPlanet: 0,
        netWorth: DimArray([6], 0),
        numRivals: 0,
        passengerTaxRate: 0,
        planet: DimArray([6], 0),
        previousPlanet: DimArray([6], 0),
        planetNames: DimArray([LAST_PLANET], () => Space(4)),
        planetX: DimArray([LAST_PLANET], 0),
        planetY: DimArray([LAST_PLANET], 0),
        currentPlayer: 0,
        numPlayers: 0,
        companyNames: DimArray([6], () => Space(20)),
        turnOrder: DimArray([6], 0),
        shipType: DimArray([6], 0),
        turnOrderPos: 0,
        netWorthHistory: DimArray([6, 20], 0),
        facilitiesOwned: DimArray([6, LAST_PLANET], 0),
        facilityFees: DimArray([6, LAST_PLANET], 0),
        facilityRevenue: DimArray([6, LAST_PLANET], 0),
        weeklySales: 0,
        weeklyProfit: 0,
        shipSize: DimArray([6], 0),
        stockCrashed: DimArray([LAST_PLANET], 0),
        canBuyStock: 0,
        stockPrices: DimArray([LAST_PLANET, 15], 0),
        stockStrength: DimArray([LAST_PLANET], 0),
        travelTime: DimArray([6], 0),
        travelDelay: DimArray([6], 0),
        turnDone: DimArray([6], 0),
        turn: 0,
        tutorialMode: 0,
        weatherEvent: 0,
        weatherPlanet: 0,
        winner: 0,
        goalNetWorth: 0,
    };
}

function Rivals() {
    return {
        companyNames: DimArray([6], () => Space(16)),
        netWorth: DimArray([6], 0),
        engineSpeed: DimArray([6], 0),
        planet: DimArray([6], 0),
        travelTime: DimArray([6], 0),
        turnDone: DimArray([6], 0),
        cargoCategory: DimArray([6], 0),
        cargoItem: DimArray([6], 0),
        cargo: DimArray([6], 0),
        shipSize: DimArray([6], 0),
        cash: DimArray([6], 0),
        intelligence: DimArray([6], 0),
        netWorthHistory: DimArray([6, 20], 0),
        facilitiesOwned: DimArray([6, LAST_PLANET], 0),
        facilityFees: DimArray([6, LAST_PLANET], 0),
        facilityRevenue: DimArray([6, LAST_PLANET], 0),
        shares: DimArray([6, LAST_PLANET], 0),
    };
}

var settings = Settings();
var paths = Paths();
var player = Player();
var game = Game();
var rivals = Rivals();
