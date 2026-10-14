// Originally translated from src/TRAVEL3.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Travel3",
  ["Form", "frm_Travel3", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Travel3", "BackColor": 0, "Left": 1575, "Top": 2310, "Width": 7365, "Height": 4020, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "ClientLeft": 1575, "ClientTop": 2310, "ClientWidth": 7365, "ClientHeight": 4020}, [
    ["MMControl", "b_Sound", {"Left": 5010, "Top": 630, "Width": 3540, "Height": 330, "TabIndex": 0, "Visible": 0}]
  ]],
function (me) {
    const { b_Sound } = me.controls;
    const HOURGLASS = 11;
    const ICON_CURSOR = 4;
    let rivalPreviousPlanet = DimArray([6], 0);

    function runAuctions() {
        let roll = 0;
        if (game.auctionType == 0) {
            game.lastAuctionType = 0;
        } else if (game.auctionType == 1) {
            runShipAuction();
        } else if (game.auctionType == 2) {
            runFacilityAuction();
        }
        game.lastAuctionWinner = game.auctionWinner;
        game.lastAuctionRunnerUp = game.auctionRunnerUp;
        game.lastAuctionTopBid = game.auctionTopBid;
        game.lastAuctionSecondBid = game.auctionSecondBid;
        game.lastAuctionFacility = game.auctionFacility;
        game.lastAuctionPlanet = game.auctionPlanet;
        game.lastAuctionFacilityRevenue = game.auctionFacilityRevenue;
        game.auctionType = 0;
        game.auctionWinner = 0;
        game.auctionRunnerUp = 0;
        game.auctionTopBid = 0;
        game.auctionSecondBid = 0;
        game.auctionFacility = 0;
        game.auctionPlanet = 0;
        game.auctionFacilityRevenue = 0;
        if (game.tutorialMode == 0 || game.complexity > game.unlockExplore) {
            if (game.numPlayers == 1) {
                roll = randomBetween(1, 12);
            } else if (game.numPlayers == 2) {
                roll = randomBetween(1, 10);
            } else {
                roll = randomBetween(1, 8);
            }
            if (game.lastAuctionType == -1 || roll == 1 && game.lastAuctionType != -2) {
                game.auctionType = 1;
                game.auctionTopBid = 0;
                game.auctionWinner = 1;
                game.auctionSecondBid = 0;
                game.auctionRunnerUp = 1;
            }
        }
        if (game.auctionType != 1 && game.tutorialMode == 0 || game.complexity > game.unlockFacilities) {
            if (game.numPlayers == 1) {
                roll = randomBetween(1, 4);
            } else if (game.numPlayers == 2) {
                roll = randomBetween(1, 3);
            } else {
                roll = randomBetween(1, 2);
            }
            if (roll == 1 || game.lastAuctionType == -2) {
                game.auctionType = 2;
                game.auctionTopBid = 0;
                game.auctionWinner = 1;
                game.auctionSecondBid = 0;
                game.auctionRunnerUp = 1;
                if (game.lastAuctionType == -2) {
                    game.auctionFacility = game.lastAuctionFacility;
                    game.auctionPlanet = game.lastAuctionPlanet;
                    game.auctionFacilityRevenue = game.lastAuctionFacilityRevenue;
                } else {
                    game.auctionFacility = randomBetween(1, 100);
                    game.auctionPlanet = randomBetween(0, LAST_PLANET);
                    game.auctionFacilityRevenue = randomBetween(500, 5000);
                }
            }
        }
    }

    function runFacilityAuction() {
        let topBidder = 0;
        let secondBidder = 0;
        let rival = 0;
        let bid = 0;
        let topBid = 0;
        let secondBid = 0;
        updateRivalNetWorth();
        do {
            topBidder = 1 + 6;
            secondBidder = 1 + 6;
            topBid = 0;
            secondBid = 0;
            for (rival = 1; rival <= game.numRivals; rival++) {
                if (rivals.netWorth[rival] <= -100000) {
                    bid = randomBetween(game.auctionFacilityRevenue * 2.5, game.auctionFacilityRevenue * 5);
                } else if (-100000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= -50000) {
                    bid = randomBetween(game.auctionFacilityRevenue * 5, game.auctionFacilityRevenue * 10);
                } else if (-50000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 0) {
                    bid = randomBetween(game.auctionFacilityRevenue * 7.5, game.auctionFacilityRevenue * 15);
                } else if (0 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 100000) {
                    bid = randomBetween(game.auctionFacilityRevenue * 10, game.auctionFacilityRevenue * 20);
                } else if (100000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 200000) {
                    bid = randomBetween(game.auctionFacilityRevenue * 11, game.auctionFacilityRevenue * 22);
                } else if (200000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 300000) {
                    bid = randomBetween(game.auctionFacilityRevenue * 12, game.auctionFacilityRevenue * 24);
                } else if (300000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 400000) {
                    bid = randomBetween(game.auctionFacilityRevenue * 13, game.auctionFacilityRevenue * 26);
                } else if (400000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 500000) {
                    bid = randomBetween(game.auctionFacilityRevenue * 14, game.auctionFacilityRevenue * 28);
                } else if (500000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 600000) {
                    bid = randomBetween(game.auctionFacilityRevenue * 15, game.auctionFacilityRevenue * 30);
                } else if (600000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 700000) {
                    bid = randomBetween(game.auctionFacilityRevenue * 16, game.auctionFacilityRevenue * 32);
                } else if (700000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 800000) {
                    bid = randomBetween(game.auctionFacilityRevenue * 17, game.auctionFacilityRevenue * 34);
                } else if (800000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 900000) {
                    bid = randomBetween(game.auctionFacilityRevenue * 18, game.auctionFacilityRevenue * 36);
                } else if (900000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 1000000) {
                    bid = randomBetween(game.auctionFacilityRevenue * 19, game.auctionFacilityRevenue * 38);
                } else if (1000000 < rivals.netWorth[rival]) {
                    bid = randomBetween(game.auctionFacilityRevenue * 20, game.auctionFacilityRevenue * 40);
                }
                if (randomBetween(1, 6) == 1) {
                    bid = bid * 2;
                }
                if (bid >= topBid) {
                    secondBid = topBid;
                    secondBidder = topBidder;
                    topBid = bid;
                    topBidder = CInt(Add(rival, 6));
                } else if (bid > secondBid) {
                    secondBid = bid;
                    secondBidder = CInt(Add(rival, 6));
                }
            }
        } while (secondBid == topBid);
        if (topBid > game.auctionTopBid) {
            game.auctionSecondBid = game.auctionTopBid;
            game.auctionRunnerUp = game.auctionWinner;
            game.auctionTopBid = topBid;
            game.auctionWinner = topBidder;
            if (secondBid > game.auctionSecondBid) {
                game.auctionSecondBid = secondBid;
                game.auctionRunnerUp = secondBidder;
            }
        } else if (topBid > game.auctionSecondBid) {
            game.auctionSecondBid = topBid;
            game.auctionRunnerUp = topBidder;
        }
        if (game.auctionWinner == game.auctionRunnerUp) {
            do {
                game.auctionRunnerUp = randomInt(7, 12);
            } while (game.auctionWinner == game.auctionRunnerUp);
        }
        if (game.auctionSecondBid == game.auctionTopBid && game.auctionTopBid != 0) {
            game.lastAuctionType = -2;
        } else {
            game.lastAuctionType = 2;
            if (game.auctionTopBid > 0) {
                if (game.auctionWinner > 6) {
                    rivals.cash[game.auctionWinner - 6] = rivals.cash[game.auctionWinner - 6] - game.auctionTopBid;
                    rivals.facilitiesOwned[game.auctionWinner - 6][game.auctionPlanet] = rivals.facilitiesOwned[game.auctionWinner - 6][game.auctionPlanet] + 1;
                    rivals.facilityFees[game.auctionWinner - 6][game.auctionPlanet] = rivals.facilityFees[game.auctionWinner - 6][game.auctionPlanet] + game.auctionFacilityRevenue;
                } else {
                    loadPlayer(game.auctionWinner);
                    game.facilitiesOwned[game.auctionWinner][game.auctionPlanet] = game.facilitiesOwned[game.auctionWinner][game.auctionPlanet] + 1;
                    game.facilityFees[game.auctionWinner][game.auctionPlanet] = game.facilityFees[game.auctionWinner][game.auctionPlanet] + game.auctionFacilityRevenue;
                    storePlayer(game.auctionWinner);
                }
            }
        }
    }

    function runShipAuction() {
        let topBidder = 0;
        let secondBidder = 0;
        let rival = 0;
        let i = 0;
        let bid = 0;
        let topBid = 0;
        let secondBid = 0;
        let biggestShipPlayer = 0;
        updateRivalNetWorth();
        for (i = 1; i <= game.numPlayers; i++) {
            if (game.graphShowCompany[i] == 0) {
                biggestShipPlayer = CInt(i);
                i = game.numPlayers;
            }
        }
        for (i = 1; i <= game.numPlayers; i++) {
            if (game.shipSize[i] > game.shipSize[biggestShipPlayer] && game.graphShowCompany[i] == 0) {
                biggestShipPlayer = CInt(i);
            }
        }
        do {
            topBidder = 1 + 6;
            secondBidder = 1 + 6;
            topBid = 0;
            secondBid = 0;
            for (rival = 1; rival <= game.numRivals; rival++) {
                if (rivals.netWorth[rival] <= -100000) {
                    bid = randomBetween(5000, 10000);
                } else if (-100000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= -50000) {
                    bid = randomBetween(7500, 15000);
                } else if (-50000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 0) {
                    bid = randomBetween(10000, 20000);
                } else if (0 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 100000) {
                    bid = randomBetween(12500, 50000);
                } else if (100000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 200000) {
                    bid = randomBetween(15000, 55000);
                } else if (200000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 300000) {
                    bid = randomBetween(17500, 60000);
                } else if (300000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 400000) {
                    bid = randomBetween(20000, 65000);
                } else if (400000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 500000) {
                    bid = randomBetween(22500, 70000);
                } else if (500000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 600000) {
                    bid = randomBetween(25000, 75000);
                } else if (600000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 700000) {
                    bid = randomBetween(27500, 80000);
                } else if (700000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 800000) {
                    bid = randomBetween(30000, 85000);
                } else if (800000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 900000) {
                    bid = randomBetween(32500, 90000);
                } else if (900000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 1000000) {
                    bid = randomBetween(35000, 95000);
                } else if (1000000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 2000000) {
                    bid = randomBetween(37500, 100000);
                } else if (2000000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 3000000) {
                    bid = randomBetween(40000, 110000);
                } else if (3000000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 4000000) {
                    bid = randomBetween(50000, 120000);
                } else if (4000000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 5000000) {
                    bid = randomBetween(60000, 130000);
                } else if (5000000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 6000000) {
                    bid = randomBetween(70000, 140000);
                } else if (6000000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 7000000) {
                    bid = randomBetween(80000, 150000);
                } else if (7000000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 8000000) {
                    bid = randomBetween(90000, 160000);
                } else if (8000000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 9000000) {
                    bid = randomBetween(100000, 170000);
                } else if (9000000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 10000000) {
                    bid = randomBetween(110000, 180000);
                } else if (10000000 < rivals.netWorth[rival] && rivals.netWorth[rival] <= 100000000) {
                    bid = randomBetween(120000, 190000);
                } else if (100000000 < rivals.netWorth[rival]) {
                    bid = randomBetween(130000, 200000);
                }
                if (randomBetween(1, 6) == 1) {
                    bid = bid * 2;
                }
                if (randomBetween(1, 6) == 1 && rivals.shipSize[rival] < game.shipSize[biggestShipPlayer] && bid < game.auctionTopBid) {
                    bid = game.auctionTopBid + randomBetween(1, 20000);
                    if (bid > 250000) {
                        bid = 250000 + randomBetween(1, 25000);
                    }
                    if (bid > rivals.netWorth[rival]) {
                        bid = rivals.netWorth[rival];
                    }
                    if (bid < 0) {
                        bid = 0;
                    }
                }
                if (bid >= topBid) {
                    secondBid = topBid;
                    secondBidder = topBidder;
                    topBid = bid;
                    topBidder = CInt(Add(rival, 6));
                } else if (bid > secondBid) {
                    secondBid = bid;
                    secondBidder = CInt(Add(rival, 6));
                }
            }
        } while (secondBid == topBid);
        if (topBid > game.auctionTopBid) {
            game.auctionSecondBid = game.auctionTopBid;
            game.auctionRunnerUp = game.auctionWinner;
            game.auctionTopBid = topBid;
            game.auctionWinner = topBidder;
            if (secondBid > game.auctionSecondBid) {
                game.auctionSecondBid = secondBid;
                game.auctionRunnerUp = secondBidder;
            }
        } else if (topBid > game.auctionSecondBid) {
            game.auctionSecondBid = topBid;
            game.auctionRunnerUp = topBidder;
        }
        if (game.auctionWinner == game.auctionRunnerUp) {
            do {
                game.auctionRunnerUp = randomInt(7, 12);
            } while (game.auctionWinner == game.auctionRunnerUp);
        }
        if (game.auctionSecondBid == game.auctionTopBid && game.auctionTopBid != 0) {
            game.lastAuctionType = -1;
        } else {
            game.lastAuctionType = 1;
            if (game.auctionTopBid > 0) {
                if (game.auctionWinner > 6) {
                    rivals.cash[game.auctionWinner - 6] = rivals.cash[game.auctionWinner - 6] - game.auctionTopBid;
                    rivals.shipSize[game.auctionWinner - 6] = rivals.shipSize[game.auctionWinner - 6] + 200;
                } else {
                    loadPlayer(game.auctionWinner);
                    if (player.commodityAdChoice == 0) {
                        player.commodityAdChoice = 0;
                    } else if (player.commodityAdChoice == 1000 * (game.shipSize[game.auctionWinner] / 400)) {
                        player.commodityAdChoice = CLng(1000 * ((game.shipSize[game.auctionWinner] + 200) / 400));
                    } else if (player.commodityAdChoice == 2000 * (game.shipSize[game.auctionWinner] / 400)) {
                        player.commodityAdChoice = CLng(2000 * ((game.shipSize[game.auctionWinner] + 200) / 400));
                    } else if (player.commodityAdChoice == 3000 * (game.shipSize[game.auctionWinner] / 400)) {
                        player.commodityAdChoice = CLng(3000 * ((game.shipSize[game.auctionWinner] + 200) / 400));
                    } else if (player.commodityAdChoice == 4000 * (game.shipSize[game.auctionWinner] / 400)) {
                        player.commodityAdChoice = CLng(4000 * ((game.shipSize[game.auctionWinner] + 200) / 400));
                    } else if (player.commodityAdChoice == 5000 * (game.shipSize[game.auctionWinner] / 400)) {
                        player.commodityAdChoice = CLng(5000 * ((game.shipSize[game.auctionWinner] + 200) / 400));
                    } else if (player.commodityAdChoice == 10000 * (game.shipSize[game.auctionWinner] / 400)) {
                        player.commodityAdChoice = CLng(10000 * ((game.shipSize[game.auctionWinner] + 200) / 400));
                    }
                    if (player.passengerAdChoice == 0) {
                        player.passengerAdChoice = 0;
                    } else if (player.passengerAdChoice == 1000 * (game.shipSize[game.auctionWinner] / 400)) {
                        player.passengerAdChoice = CLng(1000 * ((game.shipSize[game.auctionWinner] + 200) / 400));
                    } else if (player.passengerAdChoice == 2000 * (game.shipSize[game.auctionWinner] / 400)) {
                        player.passengerAdChoice = CLng(2000 * ((game.shipSize[game.auctionWinner] + 200) / 400));
                    } else if (player.passengerAdChoice == 3000 * (game.shipSize[game.auctionWinner] / 400)) {
                        player.passengerAdChoice = CLng(3000 * ((game.shipSize[game.auctionWinner] + 200) / 400));
                    } else if (player.passengerAdChoice == 4000 * (game.shipSize[game.auctionWinner] / 400)) {
                        player.passengerAdChoice = CLng(4000 * ((game.shipSize[game.auctionWinner] + 200) / 400));
                    } else if (player.passengerAdChoice == 5000 * (game.shipSize[game.auctionWinner] / 400)) {
                        player.passengerAdChoice = CLng(5000 * ((game.shipSize[game.auctionWinner] + 200) / 400));
                    } else if (player.passengerAdChoice == 10000 * (game.shipSize[game.auctionWinner] / 400)) {
                        player.passengerAdChoice = CLng(10000 * ((game.shipSize[game.auctionWinner] + 200) / 400));
                    }
                    game.shipSize[game.auctionWinner] = game.shipSize[game.auctionWinner] + 200;
                    if (game.shipType[game.auctionWinner] == 1) {
                        game.engineSpeed[game.auctionWinner] = game.engineSpeed[game.auctionWinner] + 1;
                        player.fuelCapacity = player.fuelCapacity + 5;
                        player.cargoCapacity = player.cargoCapacity + 50;
                        player.passengerCapacity = player.passengerCapacity + 4;
                        player.crewSize = player.crewSize + 2;
                        player.insuranceRate = player.insuranceRate + 6;
                    } else if (game.shipType[game.auctionWinner] == 2) {
                        game.engineSpeed[game.auctionWinner] = game.engineSpeed[game.auctionWinner] + 0;
                        player.fuelCapacity = player.fuelCapacity + 10;
                        player.cargoCapacity = player.cargoCapacity + 60;
                        player.passengerCapacity = player.passengerCapacity + 3;
                        player.crewSize = player.crewSize + 2;
                        player.insuranceRate = player.insuranceRate + 8;
                    } else if (game.shipType[game.auctionWinner] == 3) {
                        game.engineSpeed[game.auctionWinner] = game.engineSpeed[game.auctionWinner] + 0;
                        player.fuelCapacity = player.fuelCapacity + 30;
                        player.cargoCapacity = player.cargoCapacity + 40;
                        player.passengerCapacity = player.passengerCapacity + 3;
                        player.crewSize = player.crewSize + 1;
                        player.insuranceRate = player.insuranceRate + 2;
                    } else if (game.shipType[game.auctionWinner] == 4) {
                        game.engineSpeed[game.auctionWinner] = game.engineSpeed[game.auctionWinner] + 0;
                        player.fuelCapacity = player.fuelCapacity + 10;
                        player.cargoCapacity = player.cargoCapacity + 65;
                        player.passengerCapacity = player.passengerCapacity + 5;
                        player.crewSize = player.crewSize + 3;
                        player.insuranceRate = player.insuranceRate + 8;
                    } else if (game.shipType[game.auctionWinner] == 5) {
                        game.engineSpeed[game.auctionWinner] = game.engineSpeed[game.auctionWinner] + 0;
                        player.fuelCapacity = player.fuelCapacity + 15;
                        player.cargoCapacity = player.cargoCapacity + 50;
                        player.passengerCapacity = player.passengerCapacity + 2;
                        player.crewSize = player.crewSize + 1;
                        player.insuranceRate = player.insuranceRate + 6;
                    } else if (game.shipType[game.auctionWinner] == 6) {
                        game.engineSpeed[game.auctionWinner] = game.engineSpeed[game.auctionWinner] + 0;
                        player.fuelCapacity = player.fuelCapacity + 15;
                        player.cargoCapacity = player.cargoCapacity + 50;
                        player.passengerCapacity = player.passengerCapacity + 4;
                        player.crewSize = player.crewSize + 2;
                        player.insuranceRate = player.insuranceRate + 6;
                    } else if (game.shipType[game.auctionWinner] == 7) {
                        game.engineSpeed[game.auctionWinner] = game.engineSpeed[game.auctionWinner] + 1;
                        player.fuelCapacity = player.fuelCapacity + 10;
                        player.cargoCapacity = player.cargoCapacity + 40;
                        player.passengerCapacity = player.passengerCapacity + 3;
                        player.crewSize = player.crewSize + 2;
                        player.insuranceRate = player.insuranceRate + 6;
                    } else if (game.shipType[game.auctionWinner] == 8) {
                        game.engineSpeed[game.auctionWinner] = game.engineSpeed[game.auctionWinner] + 0;
                        player.fuelCapacity = player.fuelCapacity + 15;
                        player.cargoCapacity = player.cargoCapacity + 55;
                        player.passengerCapacity = player.passengerCapacity + 3;
                        player.crewSize = player.crewSize + 2;
                        player.insuranceRate = player.insuranceRate + 6;
                    } else if (game.shipType[game.auctionWinner] == 9) {
                        game.engineSpeed[game.auctionWinner] = game.engineSpeed[game.auctionWinner] + 0;
                        player.fuelCapacity = player.fuelCapacity + 15;
                        player.cargoCapacity = player.cargoCapacity + 45;
                        player.passengerCapacity = player.passengerCapacity + 5;
                        player.crewSize = player.crewSize + 2;
                        player.insuranceRate = player.insuranceRate + 4;
                    } else if (game.shipType[game.auctionWinner] == 10) {
                        game.engineSpeed[game.auctionWinner] = game.engineSpeed[game.auctionWinner] + 0;
                        player.fuelCapacity = player.fuelCapacity + 10;
                        player.cargoCapacity = player.cargoCapacity + 75;
                        player.passengerCapacity = player.passengerCapacity + 1;
                        player.crewSize = player.crewSize + 1;
                        player.insuranceRate = player.insuranceRate + 10;
                    } else if (game.shipType[game.auctionWinner] == 11) {
                        game.engineSpeed[game.auctionWinner] = game.engineSpeed[game.auctionWinner] + 0;
                        player.fuelCapacity = player.fuelCapacity + 10;
                        player.cargoCapacity = player.cargoCapacity + 40;
                        player.passengerCapacity = player.passengerCapacity + 8;
                        player.crewSize = player.crewSize + 6;
                        player.insuranceRate = player.insuranceRate + 2;
                    } else if (game.shipType[game.auctionWinner] == 12) {
                        game.engineSpeed[game.auctionWinner] = game.engineSpeed[game.auctionWinner] + 0;
                        player.fuelCapacity = player.fuelCapacity + 15;
                        player.cargoCapacity = player.cargoCapacity + 55;
                        player.passengerCapacity = player.passengerCapacity + 4;
                        player.crewSize = player.crewSize + 3;
                        player.insuranceRate = player.insuranceRate + 6;
                    }
                    generatePassengers();
                    storePlayer(game.auctionWinner);
                }
            }
        }
    }

    function driftSupplyLevels() {
        let planet = 0;
        let category = 0;
        let item = 0;
        let change = 0;
        for (planet = 0; planet <= LAST_PLANET; planet++) {
            for (category = 0; category <= 2; category++) {
                for (item = 0; item <= 5; item++) {
                    {
                        const sel = randomBetween(1, 2);
                        if (sel == 1) {
                            change = randomBetween(0, 20);
                        } else if (sel == 2) {
                            change = -1 * randomBetween(0, 20);
                        }
                    }
                    game.supplyPercent[planet][category][item] = game.supplyPercent[planet][category][item] + change;
                    if (game.supplyPercent[planet][category][item] > 100) {
                        game.supplyPercent[planet][category][item] = 100;
                    }
                    if (game.supplyPercent[planet][category][item] < 0) {
                        game.supplyPercent[planet][category][item] = 0;
                    }
                }
            }
        }
    }

    function applyWeeklyMarketEvent() {
        let i = 0;
        let item = 0;
        let activePlayers = 0;
        let basePrice = 0;
        let lowPrice = 0;
        let highPrice = 0;
        let eventPlanet = 0;
        let avgShipSize = 0;
        eventPlanet = (Mod(game.turn, LAST_PLANET + 1));
        game.weeklyEventRoll = randomBetween(1, 20);
        activePlayers = 0;
        avgShipSize = 0;
        for (i = 1; i <= game.numPlayers; i++) {
            if (game.graphShowCompany[i] == 0) {
                avgShipSize = avgShipSize + game.shipSize[i];
                activePlayers = activePlayers + 1;
            }
        }
        avgShipSize = CLng(avgShipSize / activePlayers);
        if (game.weeklyEventRoll == 1) {
            basePrice = 0;
            for (i = 0; i <= 5; i++) {
                basePrice = basePrice + 5;
                lowPrice = (game.marketDifficulty + 1) * basePrice;
                game.prices[eventPlanet][0][i] = lowPrice + randomBetween(0, 3);
                game.available[eventPlanet][0][i] = game.available[eventPlanet][0][i] + avgShipSize + randomBetween(10, 1000);
            }
        } else if (game.weeklyEventRoll == 2) {
            basePrice = 30;
            for (i = 0; i <= 5; i++) {
                basePrice = basePrice + 5;
                lowPrice = (game.marketDifficulty + 1) * basePrice;
                game.prices[eventPlanet][1][i] = lowPrice + randomBetween(0, 3);
                game.available[eventPlanet][1][i] = game.available[eventPlanet][1][i] + randomBetween(10, 1000) + avgShipSize;
            }
        } else if (game.weeklyEventRoll == 3) {
            basePrice = 60;
            for (i = 0; i <= 5; i++) {
                basePrice = basePrice + 5;
                lowPrice = (game.marketDifficulty + 1) * basePrice;
                game.prices[eventPlanet][2][i] = lowPrice + randomBetween(0, 3);
                game.available[eventPlanet][2][i] = game.available[eventPlanet][2][i] + randomBetween(10, 1000) + avgShipSize;
            }
        } else if (game.weeklyEventRoll == 4) {
            highPrice = 0;
            for (i = 0; i <= 5; i++) {
                highPrice = highPrice + 40;
                game.prices[eventPlanet][0][i] = highPrice - randomBetween(0, 3);
                game.available[eventPlanet][0][i] = randomBetween(1, 4);
            }
        } else if (game.weeklyEventRoll == 5) {
            highPrice = 240;
            for (i = 0; i <= 5; i++) {
                highPrice = highPrice + 40;
                game.prices[eventPlanet][1][i] = highPrice - randomBetween(0, 3);
                game.available[eventPlanet][1][i] = randomBetween(1, 4);
            }
        } else if (game.weeklyEventRoll == 6) {
            highPrice = 480;
            for (i = 0; i <= 5; i++) {
                highPrice = highPrice + 40;
                game.prices[eventPlanet][2][i] = highPrice - randomBetween(0, 3);
                game.available[eventPlanet][2][i] = randomBetween(1, 4);
            }
        } else if (game.weeklyEventRoll == 7) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockFuel) {
                game.fuelBasePrice = CLng(game.fuelBasePrice * 1.2);
                for (i = 0; i <= LAST_PLANET; i++) {
                    game.fuelPrice[i] = (game.fuelBasePrice * 10) - randomBetween(0, 20);
                }
            }
        } else if (game.weeklyEventRoll == 8) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockFuel && game.fuelBasePrice >= 15) {
                game.fuelBasePrice = CLng(game.fuelBasePrice * 0.8);
                for (i = 0; i <= LAST_PLANET; i++) {
                    game.fuelPrice[i] = game.fuelBasePrice + randomBetween(0, 20);
                }
            }
        } else if (game.weeklyEventRoll == 9) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes && game.complexity >= game.unlockPassengers) {
                if (game.passengerTaxRate < 0.5) {
                    game.passengerTaxRate = game.passengerTaxRate + 0.01;
                }
            }
        } else if (game.weeklyEventRoll == 10) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes) {
                if (game.exportTariff < 0.15) {
                    game.exportTariff = game.exportTariff + 0.01;
                }
            }
        } else if (game.weeklyEventRoll == 11) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes) {
                if (game.importTariff < 0.15) {
                    game.importTariff = game.importTariff + 0.01;
                }
            }
        } else if (game.weeklyEventRoll == 12) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes && game.complexity >= game.unlockPassengers) {
                if (game.passengerTaxRate > 0) {
                    game.passengerTaxRate = game.passengerTaxRate - 0.01;
                }
            }
        } else if (game.weeklyEventRoll == 13) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes) {
                if (game.exportTariff >= 0.02) {
                    game.exportTariff = game.exportTariff - 0.01;
                }
            }
        } else if (game.weeklyEventRoll == 14) {
            if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes) {
                if (game.importTariff >= 0.02) {
                    game.importTariff = game.importTariff - 0.01;
                }
            }
        } else if (game.weeklyEventRoll == 15) {
            basePrice = 0;
            for (i = 0; i <= 2; i++) {
                for (item = 0; item <= 5; item++) {
                    basePrice = basePrice + 5;
                    lowPrice = (game.marketDifficulty + 1) * basePrice;
                    game.prices[eventPlanet][i][item] = lowPrice + randomBetween(0, 3);
                    game.available[eventPlanet][i][item] = game.available[eventPlanet][i][item] + avgShipSize + randomBetween(1, 1000);
                }
            }
        } else if (game.weeklyEventRoll == 16) {
            highPrice = 0;
            for (i = 0; i <= 2; i++) {
                for (item = 0; item <= 5; item++) {
                    highPrice = highPrice + 40;
                    game.prices[eventPlanet][i][item] = highPrice - randomBetween(0, 3);
                    game.available[eventPlanet][i][item] = randomBetween(1, 4);
                }
            }
        }
    }

    function recordNetWorthHistory() {
        let i = 0;
        let company = 0;
        updateRivalNetWorth();
        if (game.turn <= 20) {
            for (i = 1; i <= game.numPlayers; i++) {
                game.netWorthHistory[i][game.turn] = game.netWorth[i];
            }
            for (i = 1; i <= game.numRivals; i++) {
                rivals.netWorthHistory[i][game.turn] = rivals.netWorth[i];
            }
        } else if (game.turn >= 21) {
            for (i = 0; i <= 19; i++) {
                for (company = 1; company <= game.numPlayers; company++) {
                    game.netWorthHistory[company][i] = game.netWorthHistory[company][Add(i, 1)];
                }
                for (company = 1; company <= game.numRivals; company++) {
                    rivals.netWorthHistory[company][i] = rivals.netWorthHistory[company][Add(i, 1)];
                }
            }
            for (company = 1; company <= game.numPlayers; company++) {
                game.netWorthHistory[company][20] = game.netWorth[company];
            }
            for (company = 1; company <= game.numRivals; company++) {
                rivals.netWorthHistory[company][20] = rivals.netWorth[company];
            }
        }
    }

    async function processEndOfWeek() {
        let i = 0;
        let planet = 0;
        let total = 0;
        try {
            const HOURGLASS = 11;
            const ICON_CURSOR = 4;
            me.MousePointer = HOURGLASS;
            if (game.turnOrderPos >= game.numPlayers) {
                game.turnOrderPos = 0;
                game.turn = game.turn + 1;
                for (i = 1; i <= game.numPlayers; i++) {
                    game.turnDone[i] = 0;
                }
                for (i = 1; i <= game.numRivals; i++) {
                    if (rivals.cash[i] > 0) {
                        if (game.skillLevel == 0) {
                            if (game.turn < 50) {
                            } else if (game.turn < 100) {
                                rivals.cash[i] = CLng(rivals.cash[i] * 1.01);
                            } else {
                                rivals.cash[i] = CLng(rivals.cash[i] * 1.02);
                            }
                        } else if (game.skillLevel == 1) {
                            if (game.turn < 50) {
                                rivals.cash[i] = CLng(rivals.cash[i] * 1.01);
                            } else {
                                rivals.cash[i] = CLng(rivals.cash[i] * 1.02);
                            }
                        } else {
                            rivals.cash[i] = CLng(rivals.cash[i] * 1.02);
                        }
                    }
                }
                for (i = 1; i <= game.numRivals; i++) {
                    if (rivals.turnDone[i] == 0) {
                        tradeRivalCargo(i);
                        rivals.turnDone[i] = -1;
                    }
                }
                updateRivalNetWorth();
                for (i = 1; i <= game.numRivals; i++) {
                    tradeRivalStocks(i);
                }
                for (i = 1; i <= game.numRivals; i++) {
                    if (game.turn > 4 && game.tutorialMode == 0 || game.complexity > game.unlockExplore) {
                        await maybeBuyRivalShip(i);
                    }
                }
                for (i = 1; i <= game.numRivals; i++) {
                    if (game.turn >= 3) {
                        chargeRivalExpenses(i);
                    }
                }
                updateRivalNetWorth();
                for (i = 1; i <= game.numRivals; i++) {
                    rivals.turnDone[i] = 0;
                }
                me.MousePointer = HOURGLASS;
                updateStockMarket();
                if (game.tutorialMode == 0 || game.complexity >= game.unlockExplore) {
                    rollStockNews();
                }
                if (game.tutorialMode == 0 || game.complexity >= game.unlockExplore) {
                    game.weatherEvent = randomBetween(1, 70);
                    game.weatherPlanet = randomBetween(0, LAST_PLANET);
                }
                for (i = 1; i <= game.numRivals; i++) {
                    moveRival(i);
                }
                computeTurnOrder();
                me.MousePointer = HOURGLASS;
                driftSupplyLevels();
                restockPlanets();
                updatePrices();
                for (i = 0; i <= LAST_PLANET; i++) {
                    game.fuelPrice[i] = randomBetween(game.fuelBasePrice, game.fuelBasePrice * 10);
                }
                me.MousePointer = HOURGLASS;
                if (game.turn > 2) {
                    runAuctions();
                }
                payFacilityFees();
                if (game.turn > 4) {
                    applyWeeklyMarketEvent();
                }
                if (game.turn > 4 && game.tutorialMode == 0 || game.complexity >= game.unlockStocks) {
                    await showRivalNews();
                }
                if (game.tutorialMode == 0 || game.complexity >= game.unlockExplore) {
                    await upgradeRivalEngines();
                }
                for (i = 1; i <= game.numPlayers; i++) {
                    loadPlayer(i);
                    if (game.graphShowCompany[i] == 0) {
                        total = 0;
                        for (planet = 0; planet <= LAST_PLANET; planet++) {
                            if (game.turn <= 15) {
                                total = total + player.shares[planet] * game.stockPrices[planet][game.turn];
                            } else {
                                total = total + player.shares[planet] * game.stockPrices[planet][15];
                            }
                        }
                        game.netWorth[i] = total + player.cash + player.bankBalance - player.loan - player.zinnLoan;
                    } else {
                        game.netWorth[i] = 0;
                    }
                    storePlayer(i);
                }
                recordNetWorthHistory();
                checkForWinner();
                me.MousePointer = HOURGLASS;
            }
            me.MousePointer = HOURGLASS;
            game.turnOrderPos = game.turnOrderPos + 1;
            if (game.turnOrderPos == 1) {
                total = game.turnOrder[game.turnOrderPos];
                do {
                    if (game.turnOrderPos <= game.numPlayers) {
                        total = game.turnOrder[game.turnOrderPos];
                        if (game.graphShowCompany[total] == -1) {
                            game.turnOrderPos = game.turnOrderPos + 1;
                        }
                    }
                } while (game.graphShowCompany[total] == -1 && game.turnOrderPos < game.numPlayers);
            }
            game.currentPlayer = game.turnOrder[game.turnOrderPos];
            loadPlayer(game.currentPlayer);
            me.MousePointer = ICON_CURSOR;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
            }
            await Load(frm_PlayerTurn);
            frm_PlayerTurn.Tag = "END TURN";
            await Load(frm_PlayerTurn);
            await frm_PlayerTurn.Show();
            return;
        } catch (e) {
            Err.Catch(e);
            await reportFileError(Err.Number);
            return;
        }
    }

    function rollStockNews() {
        game.weeklyRoll = randomBetween(1, 100);
        game.newsPlanet = randomBetween(0, LAST_PLANET);
        if (randomBetween(1, 100) <= 15 && game.turn >= 4 && game.stockCrashed[game.newsPlanet] == 0) {
            game.newsEvent = randomBetween(1000, 1003);
            if (game.newsEvent == 1000) {
                if (game.turn <= 15) {
                    if (game.stockPrices[game.newsPlanet][game.turn] > 250) {
                        game.stockPrices[game.newsPlanet][game.turn] = CLng(game.stockPrices[game.newsPlanet][game.turn] * (1 + (((game.weeklyRoll / 4) + 25) / 100)));
                        game.stockStrength[game.newsPlanet] = 50;
                    } else {
                        rollRandomNews();
                    }
                } else {
                    if (game.stockPrices[game.newsPlanet][15] > 250) {
                        game.stockPrices[game.newsPlanet][15] = CLng(game.stockPrices[game.newsPlanet][15] * (1 + (((game.weeklyRoll / 4) + 25) / 100)));
                        game.stockStrength[game.newsPlanet] = 50;
                    } else {
                        rollRandomNews();
                    }
                }
            }
            if (game.newsEvent == 1001) {
                if (game.turn <= 15) {
                    if (game.stockPrices[game.newsPlanet][game.turn] > 250) {
                        game.stockPrices[game.newsPlanet][game.turn] = CLng(game.stockPrices[game.newsPlanet][game.turn] * (1 - (((game.weeklyRoll / 4) + 25) / 100)));
                        game.stockStrength[game.newsPlanet] = 50;
                    } else {
                        rollRandomNews();
                    }
                } else {
                    if (game.stockPrices[game.newsPlanet][15] > 250) {
                        game.stockPrices[game.newsPlanet][15] = CLng(game.stockPrices[game.newsPlanet][15] * (1 - (((game.weeklyRoll / 4) + 25) / 100)));
                        game.stockStrength[game.newsPlanet] = 50;
                    } else {
                        rollRandomNews();
                    }
                }
            }
            if (game.newsEvent == 1002) {
                if (game.stockStrength[game.newsPlanet] <= 50) {
                    game.stockStrength[game.newsPlanet] = 0;
                } else {
                    game.stockStrength[game.newsPlanet] = 100;
                }
            }
            if (game.newsEvent == 1003) {
                if (game.stockStrength[game.newsPlanet] > 50) {
                    game.stockStrength[game.newsPlanet] = 100;
                } else {
                    game.stockStrength[game.newsPlanet] = 0;
                }
            }
        } else {
            rollRandomNews();
        }
    }

    function tradeRivalCargo(rival) {
        let category = 0;
        let item = 0;
        let targetPrice = 0;
        let bestMargin = 0;
        rival = CInt(rival);
        rivals.cash[rival] = rivals.cash[rival] + (game.prices[rivals.planet[rival]][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] * rivals.cargo[rival]);
        rivals.cargo[rival] = 0;
        targetPrice = 0;
        bestMargin = 0;
        for (category = 0; category <= 2; category++) {
            for (item = 0; item <= 5; item++) {
                targetPrice = targetPrice + 40;
                if ((targetPrice - game.prices[rivals.planet[rival]][category][item]) > bestMargin && game.available[rivals.planet[rival]][category][item] > (rivals.shipSize[rival] / 16)) {
                    bestMargin = (targetPrice - game.prices[rivals.planet[rival]][category][item]);
                    rivals.cargoCategory[rival] = CInt(category);
                    rivals.cargoItem[rival] = CInt(item);
                    rivals.cargo[rival] = CLng((rivals.shipSize[rival] / 4) * (CLng(rivals.intelligence[rival]) / 100));
                }
            }
        }
        rivals.cash[rival] = rivals.cash[rival] - (game.prices[rivals.planet[rival]][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] * rivals.cargo[rival]);
        game.available[rivals.planet[rival]][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] = game.available[rivals.planet[rival]][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] - rivals.cargo[rival];
        if (game.available[rivals.planet[rival]][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] < 0) {
            game.available[rivals.planet[rival]][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] = 0;
        }
    }

    async function upgradeRivalEngines() {
        let rival = 0;
        let cost = 0;
        for (rival = 1; rival <= game.numRivals; rival++) {
            cost = randomBetween(5000, 25000);
            if (randomBetween(1, 4) != 1 && game.planetNames[rivals.planet[rival]] == "Pyke") {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "op" + Trim(Str(rival)) + ".wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                frm_Box1Rect.b_Yes.Visible = 0;
                frm_Box1Rect.b_No.Visible = 0;
                frm_Box1Rect.b_OK.Visible = -1;
                frm_Box1Rect.b_Container.BackColor = 0x4000;
                frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "op" + Trim(Str((rival))) + ".bmp");
                frm_Box1Rect.b_ImageLable.Caption = Trim(rivals.companyNames[rival]);
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " travels to Pyke to purchase a new faster " + Format(rivals.engineSpeed[rival] + 1, "#,#0") + " kuarp engine.";
                await frm_Box1Rect.Show(1);
                rivals.engineSpeed[rival] = rivals.engineSpeed[rival] + 1;
                rivals.cash[rival] = CLng(rivals.cash[rival] - cost);
            } else if (randomBetween(1, 4) == 1 && game.planetNames[rivals.planet[rival]] == "Xeen") {
                if (randomBetween(1, 3) == 1) {
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "op" + Trim(Str(rival)) + ".wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    frm_Box1Rect.b_Yes.Visible = 0;
                    frm_Box1Rect.b_No.Visible = 0;
                    frm_Box1Rect.b_OK.Visible = -1;
                    frm_Box1Rect.b_Container.BackColor = 0x4000;
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "op" + Trim(Str((rival))) + ".bmp");
                    frm_Box1Rect.b_ImageLable.Caption = Trim(rivals.companyNames[rival]);
                    frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " travels to Xeen and hires a mechanic to turbocharge its ship's engine.";
                    await frm_Box1Rect.Show(1);
                    rivals.engineSpeed[rival] = rivals.engineSpeed[rival] + 1;
                    rivals.cash[rival] = CLng(rivals.cash[rival] - cost);
                }
            }
        }
    }

    async function maybeBuyRivalShip(rival) {
        let cost = 0;
        let odds = 0;
        let i = 0;
        let avgShipSize = 0;
        rival = CInt(rival);
        avgShipSize = 0;
        for (i = 1; i <= game.numPlayers; i++) {
            avgShipSize = avgShipSize + game.shipSize[i];
        }
        avgShipSize = CInt(avgShipSize / game.numPlayers);
        if (rivals.shipSize[rival] >= avgShipSize) {
            odds = 10000;
        } else if ((rivals.shipSize[rival] + 600) <= avgShipSize) {
            if (rival == 1) {
                odds = 13;
            } else if (rival == 2) {
                odds = 12;
            } else if (rival == 3) {
                odds = 14;
            } else if (rival == 4) {
                odds = 15;
            } else if (rival == 5) {
                odds = 11;
            } else if (rival == 6) {
                odds = 10;
            }
        } else {
            if (rival == 1) {
                odds = 20;
            } else if (rival == 2) {
                odds = 19;
            } else if (rival == 3) {
                odds = 21;
            } else if (rival == 4) {
                odds = 22;
            } else if (rival == 5) {
                odds = 18;
            } else if (rival == 6) {
                odds = 17;
            }
        }
        if (randomBetween(1, odds) == 1) {
            cost = randomBetween(25000, 75000);
            rivals.cash[rival] = rivals.cash[rival] - cost;
            rivals.shipSize[rival] = rivals.shipSize[rival] + 200;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "op" + Trim(Str(rival)) + ".wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            frm_Box1Rect.b_Yes.Visible = 0;
            frm_Box1Rect.b_No.Visible = 0;
            frm_Box1Rect.b_OK.Visible = -1;
            frm_Box1Rect.b_Container.BackColor = 0x4000;
            frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "op" + Trim(Str((rival))) + ".bmp");
            frm_Box1Rect.b_ImageLable.Caption = Trim(rivals.companyNames[rival]);
            frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " purchases a new " + Format(rivals.shipSize[rival], "#,#0") + "-ton ship for " + Format(cost, "#,#0") + " kubars from the Trader's Union.";
            await frm_Box1Rect.Show(1);
        }
    }

    async function showRivalNews() {
        let rival = 0;
        let outcome = "";
        updateRivalNetWorth();
        rival = randomBetween(1, 6);
        outcome = "neutral";
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "op" + Trim(Str(rival)) + ".wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box1Rect.b_Yes.Visible = 0;
        frm_Box1Rect.b_No.Visible = 0;
        frm_Box1Rect.b_OK.Visible = -1;
        frm_Box1Rect.b_Container.BackColor = 0x4000;
        frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "op" + Trim(Str((rival))) + ".bmp");
        frm_Box1Rect.b_ImageLable.Caption = Trim(rivals.companyNames[rival]);
        {
            const sel = randomBetween(1, 108);
            if (sel == 1) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " moves to expand its market share.";
                outcome = "good";
            } else if (sel == 2) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " suffers as profits fall due to a serious miscalculation in the commodities market.";
                outcome = "bad";
            } else if (sel == 3) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " reaps record profits as it transforms into a lean, mean, fighting machine!";
                outcome = "good";
            } else if (sel == 4) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " scrambles to recoup from unexpected losses.";
                outcome = "bad";
            } else if (sel == 5) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " cuts a deal with a foreign merchant.";
                outcome = "good";
            } else if (sel == 6) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " cuts staff and prepares for hard times.";
                outcome = "neutral";
            } else if (sel == 7) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " fuels its expansion into new markets.";
                outcome = "neutral";
            } else if (sel == 8) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " suffers from bad management decisions.";
                outcome = "bad";
            } else if (sel == 9) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " ups its stake by investing heavily in warehouses.";
                outcome = "neutral";
            } else if (sel == 10) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " hires Teeter to turbocharge it's engine.";
                rivals.engineSpeed[rival] = rivals.engineSpeed[rival] + 1;
            } else if (sel == 11) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " forgets to pay its taxes.";
                outcome = "bad";
            } else if (sel == 12) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " has labor trouble and is forced to raise crew wages.";
                outcome = "bad";
            } else if (sel == 13) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " is squeezed by poor stock investments.";
                outcome = "bad";
            } else if (sel == 14) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " manages to make a tidy sum on its stock investments.";
                outcome = "good";
            } else if (sel == 15) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " invests heavily in the stock market.";
                outcome = "good";
            } else if (sel == 16) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " pumps money into the stock market.";
                outcome = "good";
            } else if (sel == 17) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " cuts a secret deal with Mr. Zinn.";
                outcome = "good";
            } else if (sel == 18) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " receives a new engine free of charge from L-Tech Co. as part of its latest promotional give-away!";
                rivals.engineSpeed[rival] = rivals.engineSpeed[rival] + 1;
            } else if (sel == 19) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " gets caught trading in contraband and must pay a hefty fine.";
                outcome = "bad";
            } else if (sel == 20) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " wins local support and praise by donating much-needed goods to the Children's Fund.";
                outcome = "neutral";
            } else if (sel == 21) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " meets with Emperor Dred Nicolson.";
                outcome = "good";
            } else if (sel == 22) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + ", in a grand ceremony, receives the Kuku Award of Excellence for donating large sums to charity.";
                outcome = "neutral";
            } else if (sel == 23) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " is bashed by the press for being greedy and self-serving.";
                outcome = "neutral";
            } else if (sel == 24) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " is praised for its support of free trade.";
                outcome = "neutral";
            } else if (sel == 25) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " is accused by die hard royalists of selling arms to the Chichi Bobo rebels.";
                outcome = "neutral";
            } else if (sel == 26) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " is accused by rival companies of engaging in smuggling and other illegal activities.";
                outcome = "neutral";
            } else if (sel == 27) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " is accused of selling stolen goods.";
                outcome = "neutral";
            } else if (sel == 28) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " is accused of illegally trading stock in opposition to Imperial Regulations.";
                outcome = "neutral";
            } else if (sel == 29) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " is lauded in the press as the company with the most growth potential and strongest management.";
                outcome = "good";
            } else if (sel == 30) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + ", in an effort to cut costs and boost profitability, decides to embark on a new buying strategy.";
                outcome = "good";
            } else if (sel == 31) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " changes its trading strategy to become more competitive.";
                outcome = "good";
            } else if (sel == 32) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " prepares to dominate the market by becoming more aggressive.";
                outcome = "good";
            } else if (sel == 33) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " takes a risk and plans out a new cut-throat strategy.";
                outcome = "good";
            } else if (sel == 34) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " attempts to boost its trade volume.";
                outcome = "good";
            } else if (sel == 35) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " alters its approach to buying and selling stocks.";
                outcome = "neutral";
            } else if (sel == 36) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " attempts a more cautious, conservative approach to business.";
                outcome = "neutral";
            } else if (sel == 37) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " embarks on a new series of expansions.";
                outcome = "good";
            } else if (sel == 38) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " closes a secret deal with a travelling merchant.";
                outcome = "good";
            } else if (sel == 39) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " makes heavy investments in new equipment.";
                outcome = "neutral";
            } else if (sel == 40) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " is moving to expand its trade routes.";
                outcome = "good";
            } else if (sel == 41) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " seeks more stable ground with a conservative business plan.";
                outcome = "neutral";
            } else if (sel == 42) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " allocates greater resources towards increasing its passenger capacity.";
                outcome = "neutral";
            } else if (sel == 43) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " hires a mechanic to work on its ship.";
                outcome = "neutral";
            } else if (sel == 44) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " cuts a secret deal with foreign merchants.";
                outcome = "good";
            } else if (sel == 45) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " strikes a secret deal with the Trader's Union.";
                outcome = "good";
            } else if (sel == 46) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " makes a sizable donation to Emperor Dred's Royal Treasury.";
                outcome = "bad";
            } else if (sel == 47) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " suffers as one of its warehouses burns down.";
                outcome = "bad";
            } else if (sel == 48) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " is forced to pay higher insurance premiums.";
                outcome = "bad";
            } else if (sel == 49) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " meets with Mr. Zinn to discuss financial matters.";
                outcome = "good";
            } else if (sel == 50) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " meets with the Trader's Union to discuss financial matters.";
                outcome = "good";
            } else if (sel == 51) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " has labor problems and is forced to raise its employee wages.";
                outcome = "bad";
            } else if (sel == 52) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " is unlucky enough to bump into the Chichi Bobo Rebels.";
                outcome = "bad";
            } else if (sel == 53) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " falls into a trap set by the Darleen Smugglers.";
                outcome = "bad";
            } else if (sel == 54) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " has its cargo stolen by the Baid-Rowel Bandits.";
                outcome = "bad";
            } else if (sel == 55) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " runs smack into a band of rowdy Mooglers.";
                outcome = "bad";
            } else if (sel == 56) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " is forced to hand over its cargo to the Hungo Warriors.";
                outcome = "bad";
            } else if (sel == 57) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " falls prey to the Cylet Mind Buggers.";
                outcome = "bad";
            } else if (sel == 58) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " suffers major damage when a giant Lippo Jungie slams into its ship.";
                outcome = "bad";
            } else if (sel == 59) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " falls victim to the evil Wicky Wicks.";
                outcome = "bad";
            } else if (sel == 60) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " is robbed by a band of Space Pirates.";
                outcome = "bad";
            } else if (sel == 61) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " gets caught in a Meteor Storm.";
                outcome = "bad";
            } else if (sel == 62) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " stumbles into a deadly Solar Storm.";
                outcome = "bad";
            } else if (sel == 63) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " gets pummeled in a Space Hurricane.";
                outcome = "bad";
            } else if (sel == 64) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " suffers major damage in a Stellar Typhoon.";
                outcome = "bad";
            } else if (sel == 65) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " runs smack into a cloud of Dexxy Gas.";
                outcome = "bad";
            } else if (sel == 66) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " finds itself bogged down in a patch of Mippi Weeds.";
                outcome = "bad";
            } else if (sel == 67) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " gets sucked into a Stellar Whirl Pool.";
                outcome = "bad";
            } else if (sel == 68) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " gets slammed by a Bobble Warp.";
                outcome = "bad";
            } else if (sel == 69) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " purchases defective goods.";
                outcome = "bad";
            } else if (sel == 70) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " gets stuck with rotten goods.";
                outcome = "bad";
            } else if (sel == 71) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " buys a ship load of poor quality goods.";
                outcome = "bad";
            } else if (sel == 72) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " suffers a ship breakdown.";
                outcome = "bad";
            } else if (sel == 73) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " discovers a major fuel leak.";
                outcome = "bad";
            } else if (sel == 74) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " is unfortunate enough to get hit by an asteroid.";
                outcome = "bad";
            } else if (sel == 75) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " has its cargo hold overheat.";
                outcome = "bad";
            } else if (sel == 76) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + "'s navigator makes a serious error.";
                outcome = "neutral";
            } else if (sel == 77) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + "'s crew offers to lower its salary.";
                outcome = "good";
            } else if (sel == 78) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " gets an emergency tax break.";
                outcome = "good";
            } else if (sel == 79) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + "'s insurance costs fall.";
                outcome = "good";
            } else if (sel == 80) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " meets with the bank manager to discuss financial matters.";
                outcome = "good";
            } else if (sel == 81) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " inherits quite a bit of money.";
                outcome = "good";
            } else if (sel == 82) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " wins the lottery!";
                outcome = "good";
            } else if (sel == 83) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " bumps into Scooter Jay.";
            } else if (sel == 84) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " happens across Hands.";
            } else if (sel == 85) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " loans money to Curtonian Plus.";
            } else if (sel == 86) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " runs into Quist.";
            } else if (sel == 87) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " supports the Wobbler's latest artistic masterpiece.";
                outcome = "good";
            } else if (sel == 88) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " encounters Yoyo.";
            } else if (sel == 89) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " makes a nice donation to Limpus.";
            } else if (sel == 90) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " encounters Iso.";
                outcome = "good";
            } else if (sel == 91) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " happens across R.J. Raffety and strikes up a deal.";
                outcome = "good";
            } else if (sel == 92) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " cuts a deal with Nebbit.";
                outcome = "good";
            } else if (sel == 93) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " picks up some passengers from Tatilus.";
                outcome = "good";
            } else if (sel == 94) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " runs into Gurttle.";
                outcome = "good";
            } else if (sel == 95) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " meets up with Lord 104.";
                outcome = "good";
            } else if (sel == 96) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " stops to chat with Nectum.";
                outcome = "good";
            } else if (sel == 97) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " makes a swap with Squowk.";
                outcome = "good";
            } else if (sel == 98) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " strikes a deal with Captain Leahy.";
                outcome = "good";
            } else if (sel == 99) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " takes some good advice from Mulls.";
            } else if (sel == 100) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " hires Teeter to upgrade its ship.";
                outcome = "neutral";
            } else if (sel == 101) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " utilizes Meeg's professional services.";
                outcome = "good";
            } else if (sel == 102) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " happens across Spike.";
                outcome = "bad";
            } else if (sel == 103) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " engages Nibble to pressure its employees into lowering their salary.";
                outcome = "good";
            } else if (sel == 104) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " helps out good old Speevak.";
                outcome = "good";
            } else if (sel == 105) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " gives Snoz Lombardo a lift.";
                outcome = "good";
            } else if (sel == 106) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " gives Lady Shimmer a free ride.";
            } else if (sel == 107) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " helps out poor old Teal.";
                outcome = "good";
            } else if (sel == 108) {
                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[rival]) + " gives some water to Stubbs.";
                outcome = "good";
            }
        }
        await frm_Box1Rect.Show(1);
        if (outcome == "good") {
            rivals.cash[rival] = rivals.cash[rival] + (2 * randomBetween(25, 75) * rivals.shipSize[rival]);
        } else if (outcome == "bad") {
            rivals.cash[rival] = rivals.cash[rival] - (randomBetween(25, 75) * rivals.shipSize[rival]);
        }
    }

    function payFacilityFees() {
        let owner = 0;
        let rival = 0;
        let feesDue = 0;
        if (game.tutorialMode == 0 || game.complexity >= game.unlockFacilities) {
            for (rival = 1; rival <= game.numRivals; rival++) {
                feesDue = 0;
                for (owner = 1; owner <= game.numRivals; owner++) {
                    if (owner != rival) {
                        feesDue = feesDue + rivals.facilityFees[owner][rivals.planet[rival]];
                        rivals.facilityRevenue[owner][rivals.planet[rival]] = rivals.facilityRevenue[owner][rivals.planet[rival]] + rivals.facilityFees[owner][rivals.planet[rival]];
                    }
                }
                for (owner = 1; owner <= game.numPlayers; owner++) {
                    feesDue = feesDue + game.facilityFees[owner][rivals.planet[rival]];
                    game.facilityRevenue[owner][rivals.planet[rival]] = game.facilityRevenue[owner][rivals.planet[rival]] + game.facilityFees[owner][rivals.planet[rival]];
                }
                rivals.cash[rival] = rivals.cash[rival] - feesDue;
                rivals.cash[rival] = rivals.cash[rival] + rivals.facilityRevenue[rival][rivals.planet[rival]];
                rivals.facilityRevenue[rival][rivals.planet[rival]] = 0;
            }
        }
    }

    function chargeRivalExpenses(rival) {
        let costFactor = 0;
        rival = CInt(rival);
        if (game.skillLevel == 0) {
            costFactor = 15;
        } else {
            costFactor = 12 - (2 * game.skillLevel);
        }
        if (rival == 1) {
            rivals.cash[rival] = CLng(rivals.cash[rival] - (12 * (rivals.shipSize[rival] / 4) * costFactor));
        } else if (rival == 2) {
            rivals.cash[rival] = CLng(rivals.cash[rival] - (13 * (rivals.shipSize[rival] / 4) * costFactor));
        } else if (rival == 3) {
            rivals.cash[rival] = CLng(rivals.cash[rival] - (14 * (rivals.shipSize[rival] / 4) * costFactor));
        } else if (rival == 4) {
            rivals.cash[rival] = CLng(rivals.cash[rival] - (15 * (rivals.shipSize[rival] / 4) * costFactor));
        } else if (rival == 5) {
            rivals.cash[rival] = CLng(rivals.cash[rival] - (11 * (rivals.shipSize[rival] / 4) * costFactor));
        } else if (rival == 6) {
            rivals.cash[rival] = CLng(rivals.cash[rival] - (10 * (rivals.shipSize[rival] / 4) * costFactor));
        }
    }

    function tradeRivalStocks(rival) {
        let sharesBought = 0;
        let i = 0;
        let investFraction = 0;
        let leader = 0;
        rival = CInt(rival);
        if (game.turn >= 15 && game.tutorialMode == 0 || game.complexity >= game.unlockStocks) {
            for (i = 1; i <= game.numPlayers; i++) {
                if (game.graphShowCompany[i] == 0) {
                    leader = CInt(i);
                    i = game.numPlayers;
                }
            }
            for (i = 1; i <= game.numPlayers; i++) {
                if (game.netWorth[i] > game.netWorth[leader] && game.graphShowCompany[i] == 0) {
                    leader = CInt(i);
                }
            }
            if (rivals.netWorth[rival] < game.netWorth[leader]) {
                investFraction = (rivals.intelligence[rival] / 100);
                if (investFraction > 1) {
                    investFraction = 1;
                }
            } else {
                investFraction = 0.5;
                investFraction = investFraction * (rivals.intelligence[rival] / 100);
                if (investFraction > 1) {
                    investFraction = 1;
                }
            }
            if (rival == 1) {
                if (game.stockStrength[rivals.planet[rival]] >= 65) {
                    if (rivals.cash[rival] > game.stockPrices[rivals.planet[rival]][15]) {
                        sharesBought = CLng(investFraction * (0.75) * rivals.cash[rival] / game.stockPrices[rivals.planet[rival]][15]);
                        rivals.cash[rival] = rivals.cash[rival] - (sharesBought * game.stockPrices[rivals.planet[rival]][15]);
                        rivals.shares[rival][rivals.planet[rival]] = rivals.shares[rival][rivals.planet[rival]] + sharesBought;
                    }
                } else {
                    rivals.cash[rival] = rivals.cash[rival] + (rivals.shares[rival][rivals.planet[rival]] * game.stockPrices[rivals.planet[rival]][15]);
                    rivals.shares[rival][rivals.planet[rival]] = 0;
                }
            } else if (rival == 2) {
                if (game.stockStrength[rivals.planet[rival]] >= 60) {
                    if (rivals.cash[rival] > game.stockPrices[rivals.planet[rival]][15]) {
                        sharesBought = CLng(investFraction * rivals.cash[rival] / game.stockPrices[rivals.planet[rival]][15]);
                        rivals.cash[rival] = rivals.cash[rival] - (sharesBought * game.stockPrices[rivals.planet[rival]][15]);
                        rivals.shares[rival][rivals.planet[rival]] = rivals.shares[rival][rivals.planet[rival]] + sharesBought;
                    }
                } else {
                    rivals.cash[rival] = rivals.cash[rival] + (rivals.shares[rival][rivals.planet[rival]] * game.stockPrices[rivals.planet[rival]][15]);
                    rivals.shares[rival][rivals.planet[rival]] = 0;
                }
            } else if (rival == 3) {
                if (game.stockStrength[rivals.planet[rival]] >= 75) {
                    if (rivals.cash[rival] > game.stockPrices[rivals.planet[rival]][15]) {
                        sharesBought = CLng(investFraction * rivals.cash[rival] / game.stockPrices[rivals.planet[rival]][15]);
                        rivals.cash[rival] = rivals.cash[rival] - (sharesBought * game.stockPrices[rivals.planet[rival]][15]);
                        rivals.shares[rival][rivals.planet[rival]] = rivals.shares[rival][rivals.planet[rival]] + sharesBought;
                    }
                } else {
                    rivals.cash[rival] = rivals.cash[rival] + (rivals.shares[rival][rivals.planet[rival]] * game.stockPrices[rivals.planet[rival]][15]);
                    rivals.shares[rival][rivals.planet[rival]] = 0;
                }
            } else if (rival == 4) {
                if (game.stockStrength[rivals.planet[rival]] >= 60) {
                    if (rivals.cash[rival] > game.stockPrices[rivals.planet[rival]][15]) {
                        sharesBought = CLng(investFraction * (0.5) * rivals.cash[rival] / game.stockPrices[rivals.planet[rival]][15]);
                        rivals.cash[rival] = rivals.cash[rival] - (sharesBought * game.stockPrices[rivals.planet[rival]][15]);
                        rivals.shares[rival][rivals.planet[rival]] = rivals.shares[rival][rivals.planet[rival]] + sharesBought;
                    }
                } else {
                    rivals.cash[rival] = rivals.cash[rival] + (rivals.shares[rival][rivals.planet[rival]] * game.stockPrices[rivals.planet[rival]][15]);
                    rivals.shares[rival][rivals.planet[rival]] = 0;
                }
            } else if (rival == 5) {
                if (game.stockStrength[rivals.planet[rival]] >= 65) {
                    if (rivals.cash[rival] > game.stockPrices[rivals.planet[rival]][15]) {
                        sharesBought = CLng(investFraction * rivals.cash[rival] / game.stockPrices[rivals.planet[rival]][15]);
                        rivals.cash[rival] = rivals.cash[rival] - (sharesBought * game.stockPrices[rivals.planet[rival]][15]);
                        rivals.shares[rival][rivals.planet[rival]] = rivals.shares[rival][rivals.planet[rival]] + sharesBought;
                    }
                } else {
                    rivals.cash[rival] = rivals.cash[rival] + (rivals.shares[rival][rivals.planet[rival]] * game.stockPrices[rivals.planet[rival]][15]);
                    rivals.shares[rival][rivals.planet[rival]] = 0;
                }
            } else if (rival == 6) {
                if (game.stockStrength[rivals.planet[rival]] >= 70) {
                    if (rivals.cash[rival] > game.stockPrices[rivals.planet[rival]][15]) {
                        sharesBought = CLng(investFraction * rivals.cash[rival] / game.stockPrices[rivals.planet[rival]][15]);
                        rivals.cash[rival] = rivals.cash[rival] - (sharesBought * game.stockPrices[rivals.planet[rival]][15]);
                        rivals.shares[rival][rivals.planet[rival]] = rivals.shares[rival][rivals.planet[rival]] + sharesBought;
                    }
                } else {
                    rivals.cash[rival] = rivals.cash[rival] + (rivals.shares[rival][rivals.planet[rival]] * game.stockPrices[rivals.planet[rival]][15]);
                    rivals.shares[rival][rivals.planet[rival]] = 0;
                }
            }
        }
    }

    function moveRival(rival) {
        let planet = 0;
        let destination = 0;
        let distance = 0;
        rival = CInt(rival);
        rivalPreviousPlanet[rival] = rivals.planet[rival];
        destination = randomBetween(0, LAST_PLANET);
        for (planet = 0; planet <= LAST_PLANET; planet++) {
            if (game.supplyPercent[planet][rivals.cargoCategory[rival]][rivals.cargoItem[rival]] <= game.supplyPercent[destination][rivals.cargoCategory[rival]][rivals.cargoItem[rival]]) {
                destination = CLng(planet);
            }
        }
        rivals.planet[rival] = destination;
        distance = CLng(Sqr(((game.planetX[rivals.planet[rival]] - game.planetX[rivalPreviousPlanet[rival]])) ** (2) + ((game.planetY[rivals.planet[rival]] - game.planetY[rivalPreviousPlanet[rival]])) ** (2)));
        rivals.travelTime[rival] = CInt((distance * 5) / rivals.engineSpeed[rival]);
    }

    function computeTurnOrder() {
        let i = 0;
        let j = 0;
        let temp = 0;
        let distance = 0;
        for (i = 1; i <= game.numPlayers; i++) {
            distance = CLng(Sqr(((game.planetX[game.planet[i]] - game.planetX[game.previousPlanet[i]])) ** (2) + ((game.planetY[game.planet[i]] - game.planetY[game.previousPlanet[i]])) ** (2)));
            game.travelTime[i] = CLng((distance * 5) / game.engineSpeed[i]);
            game.travelTime[i] = CLng(game.travelTime[i] * game.travelDelay[i]);
            game.travelDelay[i] = 1;
            game.turnOrder[i] = CLng(i);
        }
        for (i = 1; i <= game.numPlayers - 1; i++) {
            for (j = Add(i, 1); j <= game.numPlayers; j++) {
                if (game.travelTime[game.turnOrder[i]] > game.travelTime[game.turnOrder[j]]) {
                    temp = game.turnOrder[i];
                    game.turnOrder[i] = game.turnOrder[j];
                    game.turnOrder[j] = temp;
                }
                if (game.travelTime[game.turnOrder[i]] == game.travelTime[game.turnOrder[j]]) {
                    temp = randomBetween(0, 1);
                    if (temp == 0) {
                        temp = game.turnOrder[i];
                        game.turnOrder[i] = game.turnOrder[j];
                        game.turnOrder[j] = temp;
                    }
                }
            }
        }
    }

    function rollRandomNews() {
        game.newsEvent = randomBetween(1, 124);
    }

    function updateStockMarket() {
        let planet = 0;
        let week = 0;
        let priceChange = 0;
        for (planet = 0; planet <= LAST_PLANET; planet++) {
            if (game.stockCrashed[planet] == -1) {
                game.stockCrashed[planet] = 0;
                game.stockStrength[planet] = 50;
                if (game.turn <= 15) {
                    game.stockPrices[planet][game.turn] = 1000;
                    game.stockStrength[planet] = 50;
                } else {
                    for (week = 1; week <= 14; week++) {
                        game.stockPrices[planet][week] = game.stockPrices[planet][Add(week, 1)];
                    }
                    game.stockPrices[planet][15] = 1000;
                    game.stockStrength[planet] = 50;
                }
            } else {
                if (game.turn > 1 && game.turn <= 15) {
                    if (game.stockPrices[planet][game.turn - 1] < 250) {
                        priceChange = randomBetween(50, 75);
                        game.stockStrength[planet] = 1;
                    } else {
                        priceChange = CLng(game.stockPrices[planet][game.turn - 1] * 0.01);
                        priceChange = randomBetween(priceChange, (priceChange * 10));
                    }
                } else {
                    if (game.stockPrices[planet][15] < 250) {
                        priceChange = randomBetween(50, 75);
                        game.stockStrength[planet] = 1;
                    } else {
                        priceChange = CLng(game.stockPrices[planet][15] * 0.01);
                        priceChange = randomBetween(priceChange, (priceChange * 10));
                    }
                }
                if (randomBetween(1, 95) <= game.stockStrength[planet]) {
                    if (game.stockStrength[planet] > 50) {
                        game.stockStrength[planet] = game.stockStrength[planet] + 5;
                        if (game.stockStrength[planet] > 85) {
                            game.stockStrength[planet] = 85;
                        }
                    } else {
                        game.stockStrength[planet] = 51;
                    }
                    if (game.turn > 1 && game.turn <= 15) {
                        game.stockPrices[planet][game.turn] = game.stockPrices[planet][game.turn - 1] + priceChange;
                    } else {
                        for (week = 1; week <= 14; week++) {
                            game.stockPrices[planet][week] = game.stockPrices[planet][Add(week, 1)];
                        }
                        game.stockPrices[planet][15] = game.stockPrices[planet][15] + priceChange;
                    }
                } else {
                    if (game.stockStrength[planet] <= 50) {
                        game.stockStrength[planet] = game.stockStrength[planet] - 5;
                        if (game.stockStrength[planet] < 15) {
                            game.stockStrength[planet] = 15;
                        }
                    } else {
                        game.stockStrength[planet] = 50;
                    }
                    if (game.turn > 1 && game.turn <= 15) {
                        game.stockPrices[planet][game.turn] = game.stockPrices[planet][game.turn - 1] - priceChange;
                        if (game.stockPrices[planet][game.turn] < 0) {
                            game.stockPrices[planet][game.turn] = 0;
                        }
                    } else {
                        for (week = 1; week <= 14; week++) {
                            game.stockPrices[planet][week] = game.stockPrices[planet][Add(week, 1)];
                        }
                        game.stockPrices[planet][15] = game.stockPrices[planet][15] - priceChange;
                        if (game.stockPrices[planet][15] < 0) {
                            game.stockPrices[planet][15] = 0;
                        }
                    }
                }
            }
            if (game.turn <= 15) {
                if (game.stockPrices[planet][game.turn] <= 0) {
                    game.stockCrashed[planet] = -1;
                    game.stockPrices[planet][game.turn] = 0;
                }
            } else if (game.stockPrices[planet][15] <= 0) {
                game.stockCrashed[planet] = -1;
                game.stockPrices[planet][15] = 0;
            }
        }
    }

    function checkForWinner() {
        let i = 0;
        let topPlayer = 0;
        let topRival = 0;
        updateRivalNetWorth();
        me.MousePointer = ICON_CURSOR;
        if (game.winner != 0) {
            game.winner = 0;
            if (game.goalNetWorth == 1000000) {
                game.goalNetWorth = 2000000;
            } else if (game.goalNetWorth == 2000000) {
                game.goalNetWorth = 5000000;
            } else if (game.goalNetWorth == 5000000) {
                game.goalNetWorth = 10000000;
            } else if (game.goalNetWorth >= 10000000 && game.goalNetWorth < 100000000) {
                game.goalNetWorth = game.goalNetWorth + 10000000;
            } else if (game.goalNetWorth >= 100000000) {
                game.goalNetWorth = game.goalNetWorth + 100000000;
            }
        }
        topRival = 1;
        for (i = 1; i <= game.numRivals; i++) {
            if (rivals.netWorth[i] > rivals.netWorth[topRival]) {
                topRival = CInt(i);
            }
        }
        for (i = 1; i <= game.numPlayers; i++) {
            if (game.graphShowCompany[i] == 0) {
                topPlayer = CInt(i);
                i = game.numPlayers;
            }
        }
        for (i = 1; i <= game.numPlayers; i++) {
            if (game.netWorth[i] > game.netWorth[topPlayer] && game.graphShowCompany[i] == 0) {
                topPlayer = CInt(i);
            }
        }
        if (game.netWorth[topPlayer] >= rivals.netWorth[topRival]) {
            if (game.netWorth[topPlayer] > game.goalNetWorth) {
                game.winner = topPlayer;
            }
        } else {
            if (rivals.netWorth[topRival] > game.goalNetWorth) {
                game.winner = topRival + 6;
            }
        }
    }

    async function Form_Activate() {
        me.MousePointer = HOURGLASS;
        await Unload(me);
    }

    async function Form_Load() {
        me.MousePointer = HOURGLASS;
        await processEndOfWeek();
    }

    function Form_QueryUnload(Cancel, UnloadMode) {
        me.MousePointer = HOURGLASS;
    }

    return {
        runAuctions, runFacilityAuction, runShipAuction, driftSupplyLevels,
        applyWeeklyMarketEvent, recordNetWorthHistory, processEndOfWeek, rollStockNews,
        tradeRivalCargo, upgradeRivalEngines, maybeBuyRivalShip, showRivalNews,
        payFacilityFees, chargeRivalExpenses, tradeRivalStocks, moveRival,
        computeTurnOrder, rollRandomNews, updateStockMarket, checkForWinner,
        Form_Activate, Form_Load, Form_QueryUnload,
    };
});
