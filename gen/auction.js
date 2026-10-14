// Originally translated from src/AUCTION.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Auction",
  ["Form", "frm_Auction", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Auction", "BackColor": 0, "Left": 1395, "Top": 1485, "Width": 7860, "Height": 4845, "WindowState": 2, "FontName": "Arial", "FontSize": 13.5, "FontBold": 0, "FontItalic": -1, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "FillStyle": 0, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 1395, "ClientTop": 1485, "ClientWidth": 7860, "ClientHeight": 4845}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 8454016, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 1, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 8454016}, [
      ["MMControl", "b_Sound", {"Left": 5700, "Top": 0, "Width": 3540, "Height": 330, "TabIndex": 0, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 5100, "Top": 5490, "Width": 4035, "Height": 870, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "CaptionPos": 4, "IntBkg": 4194304}, [
        ["VideoSoftElastic", "b_OK", {"BackColor": 4210752, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 4035, "Height": 870, "TabIndex": 5, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 5, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "OK", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4210752}]
      ]],
      ["VideoSoftElastic", "b_ImageContainer", {"BackColor": 0, "ForeColor": 16777215, "Left": 420, "Top": 555, "Width": 3945, "Height": 5805, "TabIndex": 2, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 25, "ChildSpacing": 2, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 20, "CaptionPos": 5, "IntBkg": 0}, [
        ["VideoSoftElastic", "b_ImageLable", {"BackColor": 0, "ForeColor": 16777215, "Left": 405, "Top": 5070, "Width": 3135, "Height": 375, "TabIndex": 3, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 16777215, "CaptionPos": 4, "IntBkg": 0}],
        ["Image", "Image1", {"Left": 405, "Top": 360, "Width": 3135, "Height": 4665, "Stretch": -1}]
      ]],
      ["Label", "b_Message", {"Caption": "This is the Event Box", "BackColor": 0, "ForeColor": 0, "Left": 5100, "Top": 600, "Width": 3990, "Height": 4710, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 6, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, VSElastic3, b_OK, b_ImageContainer, b_ImageLable, Image1, b_Message } = me.controls;
    const HOURGLASS = 11;
    const LIGHT_GRAY = 12632256;
    const DARK_GRAY = 4210752;
    const ARROW_CURSOR = 1;

    async function b_OK_Click() {
        let bid = 0;
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        if (game.auctionType == 1) {
            LB342E: while (true) {
                bid = await askNumber(0, "0", 10000, 50000, UCase(Trim(game.companyNames[game.currentPlayer])) + "\n" + "Current Ship Size: " + Format(game.shipSize[game.currentPlayer], "#,#0") + " tons" + "\n" + "Your Cash: " + Format(player.cash, "#,#0") + " kubars" + "\n" + "Your Savings: " + Format(player.bankBalance, "#,#0") + " kubars" + "\n" + "Your Loan: " + Format(player.loan, "#,#0") + " kubars" + "\n" + "Loan Credit Limit: " + Format(player.creditLimit, "#,#0") + " kubars", "Ship Auction");
                if (bid == -3333 || bid == 0) {
                    bid = 0;
                } else if (bid > (player.cash + player.bankBalance + player.creditLimit - player.loan) || bid > 200000) {
                    frm_BoxYesNo.FillElastic.Caption = "\n" + "Are you sure you want to bid " + Format(bid, "#,#0") + " kubars?";
                    await frm_BoxYesNo.Show(1);
                    if (frm_BoxYesNo.Tag == "YES") {
                        await Unload(frm_BoxYesNo);
                    } else {
                        await Unload(frm_BoxYesNo);
                        continue LB342E;
                    }
                }
                if (bid >= game.auctionTopBid) {
                    game.auctionSecondBid = game.auctionTopBid;
                    game.auctionRunnerUp = game.auctionWinner;
                } else if (bid > game.auctionSecondBid) {
                    game.auctionSecondBid = bid;
                    game.auctionRunnerUp = game.currentPlayer;
                }
                if (bid >= game.auctionTopBid) {
                    game.auctionTopBid = bid;
                    game.auctionWinner = game.currentPlayer;
                }
                break;
            }
        } else if (game.auctionType == 2) {
            LB384C: while (true) {
                bid = await askNumber(0, "0", 5 * game.auctionFacilityRevenue, 30 * game.auctionFacilityRevenue, facilityName(game.auctionFacility) + " on " + Trim(game.planetNames[game.auctionPlanet]) + "\n" + "Facility Revenue: " + Format(game.auctionFacilityRevenue, "#,#0") + " kubars/ship" + "\n" + "Your Cash: " + Format(player.cash, "#,#0") + " kubars" + "\n" + "Your Savings: " + Format(player.bankBalance, "#,#0") + " kubars" + "\n" + "Your Loan: " + Format(player.loan, "#,#0") + " kubars" + "\n" + "Loan Credit Limit: " + Format(player.creditLimit, "#,#0") + " kubars", Trim(game.companyNames[game.currentPlayer]) + " enter your secret bid!");
                if (bid == -3333 || bid == 0) {
                    bid = 0;
                } else if (bid > (player.cash + player.bankBalance + player.creditLimit - player.loan) || bid > 200000) {
                    frm_BoxYesNo.FillElastic.Caption = "\n" + "Are you sure you want to bid " + Format(bid, "#,#0") + " kubars?";
                    await frm_BoxYesNo.Show(1);
                    if (frm_BoxYesNo.Tag == "YES") {
                        await Unload(frm_BoxYesNo);
                    } else {
                        await Unload(frm_BoxYesNo);
                        continue LB384C;
                    }
                }
                if (bid >= game.auctionTopBid) {
                    game.auctionSecondBid = game.auctionTopBid;
                    game.auctionRunnerUp = game.auctionWinner;
                } else if (bid > game.auctionSecondBid) {
                    game.auctionSecondBid = bid;
                    game.auctionRunnerUp = game.currentPlayer;
                }
                if (bid >= game.auctionTopBid) {
                    game.auctionTopBid = bid;
                    game.auctionWinner = game.currentPlayer;
                }
                break;
            }
        }
        b_Sound.Command = "Close";
        await Load(frm_Travel1);
        if (me.Tag == "TRAVEL0") {
            await frm_Travel0.Show();
        } else {
            await Load(frm_Travel1);
            await frm_Travel1.Show();
        }
        await Unload(me);
    }

    function b_OK_MouseDown(Button, Shift, X, Y) {
        b_OK.BackColor = LIGHT_GRAY;
    }

    function b_OK_MouseUp(Button, Shift, X, Y) {
        b_OK.BackColor = DARK_GRAY;
    }

    function facilityName(facility) {
        let ret = "";
        facility = CInt(facility);
        if (facility == 1) {
            ret = "Conference Center";
        } else if (facility == 2) {
            ret = "Reception Platform";
        } else if (facility == 3) {
            ret = "PassengerTicket Office";
        } else if (facility == 4) {
            ret = "Landing Dock";
        } else if (facility == 5) {
            ret = "Loading Yard";
        } else if (facility == 6) {
            ret = "Stock Yards";
        } else if (facility == 7) {
            ret = "Fuel Storage Tanks";
        } else if (facility == 8) {
            ret = "Grain Silos";
        } else if (facility == 9) {
            ret = "Livestock Pens";
        } else if (facility == 10) {
            ret = "Chemical Tanks";
        } else if (facility == 11) {
            ret = "Armory";
        } else if (facility == 12) {
            ret = "Fuel Pumps";
        } else if (facility == 13) {
            ret = "Radar Tower";
        } else if (facility == 14) {
            ret = "Control Tower";
        } else if (facility == 15) {
            ret = "Microwave Transmitter";
        } else if (facility == 16) {
            ret = "Transmission Lines";
        } else if (facility == 17) {
            ret = "Broadcasting Center";
        } else if (facility == 18) {
            ret = "Communications Center";
        } else if (facility == 19) {
            ret = "Emergency Clinic";
        } else if (facility == 20) {
            ret = "Sick Bay";
        } else if (facility == 21) {
            ret = "Business Bureau";
        } else if (facility == 22) {
            ret = "Customs Office";
        } else if (facility == 23) {
            ret = "Toxic Waste Disposal Units";
        } else if (facility == 24) {
            ret = "Nuclear Holding Tanks";
        } else if (facility == 25) {
            ret = "Packaging Plant";
        } else if (facility == 26) {
            ret = "Supply House";
        } else if (facility == 27) {
            ret = "Assembly Plant";
        } else if (facility == 28) {
            ret = "Warehouse Maintenance Service";
        } else if (facility == 29) {
            ret = "Freight Terminal";
        } else if (facility == 30) {
            ret = "Merchant's Club";
        } else if (facility == 31) {
            ret = "Refrigeration Bay";
        } else if (facility == 32) {
            ret = "Cooling Station";
        } else if (facility == 33) {
            ret = "Conveyor System";
        } else if (facility == 34) {
            ret = "Transit System";
        } else if (facility == 35) {
            ret = "Defensive Shields";
        } else if (facility == 36) {
            ret = "Sewage System";
        } else if (facility == 37) {
            ret = "Food Center";
        } else if (facility == 38) {
            ret = "Distribution Center";
        } else if (facility == 39) {
            ret = "Processing Plant";
        } else if (facility == 40) {
            ret = "Water Works";
        } else if (facility == 41) {
            ret = "Oxygen Tanks";
        } else if (facility == 42) {
            ret = "Life Support System";
        } else if (facility == 43) {
            ret = "Cargo Depot";
        } else if (facility == 44) {
            ret = "Accommodations Bureau";
        } else if (facility == 45) {
            ret = "Gas Lines";
        } else if (facility == 46) {
            ret = "Main Electrical Generator";
        } else if (facility == 47) {
            ret = "Power Plant";
        } else if (facility == 48) {
            ret = "Refueling Depot";
        } else if (facility == 49) {
            ret = "Docking Station";
        } else if (facility == 50) {
            ret = "Transportation Bureau";
        } else if (facility == 51) {
            ret = "Granary";
        } else if (facility == 52) {
            ret = "Arsenal";
        } else if (facility == 53) {
            ret = "Licensing Department";
        } else if (facility == 54) {
            ret = "Security Administration Center";
        } else if (facility == 55) {
            ret = "Planetary Defense System";
        } else if (facility == 56) {
            ret = "Product Inspection Office";
        } else if (facility == 57) {
            ret = "Labor Relations Office";
        } else if (facility == 58) {
            ret = "Information Center";
        } else if (facility == 59) {
            ret = "Launch Pads";
        } else if (facility == 60) {
            ret = "Weather Satellite";
        } else if (facility == 61) {
            ret = "News Satellite";
        } else if (facility == 62) {
            ret = "Transfer Ports";
        } else if (facility == 63) {
            ret = "Landing Strip";
        } else if (facility == 64) {
            ret = "Engine Maintenance Center";
        } else if (facility == 65) {
            ret = "Orbital Control Module";
        } else if (facility == 66) {
            ret = "Technical Support Service";
        } else if (facility == 67) {
            ret = "Interplanetary Registration Center";
        } else if (facility == 68) {
            ret = "Ship Hangars";
        } else if (facility == 69) {
            ret = "Research Labs";
        } else if (facility == 70) {
            ret = "Medical Center";
        } else if (facility == 71) {
            ret = "Commodity Capsules";
        } else if (facility == 72) {
            ret = "Trade Center";
        } else if (facility == 73) {
            ret = "Currency Exchange Department";
        } else if (facility == 74) {
            ret = "Carrier Hub";
        } else if (facility == 75) {
            ret = "Patrol Fleet";
        } else if (facility == 76) {
            ret = "Ammunition Dump";
        } else if (facility == 77) {
            ret = "Garbage Dump";
        } else if (facility == 78) {
            ret = "Freight Elevators";
        } else if (facility == 79) {
            ret = "Stellar Guidance System";
        } else if (facility == 80) {
            ret = "Landing Installations";
        } else if (facility == 81) {
            ret = "Commodities Repository";
        } else if (facility == 82) {
            ret = "Launch Gates";
        } else if (facility == 83) {
            ret = "Passenger Waiting Area";
        } else if (facility == 84) {
            ret = "Navigation Control Building";
        } else if (facility == 85) {
            ret = "Unloading Cranes";
        } else if (facility == 86) {
            ret = "Landing Base";
        } else if (facility == 87) {
            ret = "Fire Department";
        } else if (facility == 88) {
            ret = "Asteriod Destruction Unit";
        } else if (facility == 89) {
            ret = "Asteriod Detection Site";
        } else if (facility == 90) {
            ret = "Solar Dust Collection Center";
        } else if (facility == 91) {
            ret = "Pirate Warning System";
        } else if (facility == 92) {
            ret = "Water Purification Center";
        } else if (facility == 93) {
            ret = "Atmospheric Filtering System";
        } else if (facility == 94) {
            ret = "Temperature Equalizing System";
        } else if (facility == 95) {
            ret = "Transportation Control Center";
        } else if (facility == 96) {
            ret = "Shipping Dry Docks";
        } else if (facility == 97) {
            ret = "Orbiting Repair Center";
        } else if (facility == 98) {
            ret = "Satellite Refueling Station";
        } else if (facility == 99) {
            ret = "Automated Unloading Unit";
        } else if (facility == 100) {
            ret = "Automated Repair Droid";
        }
        return ret;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (b_OK.Visible == -1) {
            me.b_OK.CaptionStyle = 2;
            await b_OK_Click();
            return;
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        if (game.auctionType == 1) {
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "auction2.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan1.bmp");
            b_ImageLable.Caption = "Trader's Union Official";
            b_Message.Caption = "SHIP AUCTION:" + "\n" + "\n" + "The Trader's Union is auctioning off a 200-ton ship upgrade to the highest bidder. The company that purchases this upgrade will be able to trade in their old ship for a new, larger ship." + "\n" + "\n" + "You must now input your SECRET bid (players not making a bid should close their eyes). You will be notified of the auction results at the beginning of your next turn.";
        } else if (game.auctionType == 2) {
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "auction.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "DRED.BMP");
            b_ImageLable.Caption = "Emperor Dred Nicolson";
            b_Message.Caption = "In an attempt to promote free trade in the Kukubian Colonies, The Emperor is privatizing government-owned facilities. This week, Dred is auctioning off the " + UCase(facilityName(game.auctionFacility)) + " on " + UCase(Trim(game.planetNames[game.auctionPlanet])) + " to the highest bidder. The company that buys the facility can charge other companies " + Format(game.auctionFacilityRevenue, "#,#0") + " kubars every time they visit " + Trim(game.planetNames[game.auctionPlanet]) + "." + "\n" + "\n" + "You must now input your SECRET bid (players not making a bid should close their eyes). You will be notified of the auction results at the beginning of your next turn.";
        }
    }

    function Form_QueryUnload(Cancel, UnloadMode) {
        me.MousePointer = HOURGLASS;
    }

    function Form_Unload(Cancel) {
        b_Sound.Command = "Close";
    }

    return {
        b_OK_Click, b_OK_MouseDown, b_OK_MouseUp, facilityName,
        Form_Activate, Form_KeyPress, Form_Load, Form_QueryUnload,
        Form_Unload,
    };
});
