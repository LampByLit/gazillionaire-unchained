// Originally translated from src/TRAVEL2.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Travel2",
  ["Form", "frm_Travel2", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Travel 2", "BackColor": 0, "Left": 1095, "Top": 1845, "Width": 7365, "Height": 4020, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "ClientLeft": 1095, "ClientTop": 1845, "ClientWidth": 7365, "ClientHeight": 4020}, [
    ["MMControl", "b_Sound", {"Left": 5460, "Top": 600, "Width": 3540, "Height": 330, "TabIndex": 0, "Visible": 0}]
  ]],
function (me) {
    const { b_Sound } = me.controls;
    const ODDS_BAD_EVENT = 35;
    const ODDS_INSURANCE_HIKE = 8;
    const ODDS_GOOD_EVENT = 40;
    const ODDS_WINDFALL_EVENT = 10;
    const ODDS_ENCOUNTER_EVENT = 40;
    const ICON_CURSOR = 4;
    const HOURGLASS = 11;

    async function rollBadTravelEvents() {
        let i = 0;
        let j = 0;
        let k = 0;
        let amount = 0;
        let outcome = 0;
        let tonsLost = 0;
        let encounterKind = 0;
        let weatherKind = 0;
        let delayCount = 0;
        let eventHappened = 0;
        delayCount = 0;
        eventHappened = 0;
        if (randomBetween(1, ODDS_BAD_EVENT) == 1 && game.tutorialMode == 0 || game.complexity >= game.unlockTaxes) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0xC0;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "DRED.BMP");
            frm_Box1Port.b_ImageLable.Caption = "Emperor Dred Nicolson";
            amount = randomBetween(15, 50) * game.shipSize[game.currentPlayer];
            frm_Box1Port.b_Message.Caption = "Supreme Commander Dred Nicolson, Emperor of the New Realm, pays a visit to your company. He praises your hard work and loyal support of the New Realm. At the end of his speech, he asks you to make a small donation of " + Format(amount, "#,#0") + " kubars to the Imperial Trust Fund. Do you donate the money?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "dred.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                await spend(amount, -1);
            } else {
                await Unload(frm_Box1Port);
                frm_Box1Rect.b_Yes.Visible = 0;
                frm_Box1Rect.b_No.Visible = 0;
                frm_Box1Rect.b_OK.Visible = -1;
                frm_Box1Rect.b_Container.BackColor = 0xC0;
                frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "TAX.BMP");
                frm_Box1Rect.b_ImageLable.Caption = "Tax Authority";
                frm_Box1Rect.b_Message.Caption = "Without any explanation, the Government informs you that they are adding a special one-time fee of " + Format(amount, "#,#0") + " kubars to your taxes.";
                if (settings.soundOn == -1) {
                    frm_Box1Rect.b_Sound.Command = "Close";
                    frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "tax.wav";
                    frm_Box1Rect.b_Sound.Command = "Open";
                    frm_Box1Rect.b_Sound.Command = "Play";
                }
                await frm_Box1Rect.Show(1);
                player.passengerTaxOwed = player.passengerTaxOwed + amount;
            }
        }
        if (game.tutorialMode == 0 || game.complexity >= game.unlockWarehouse) {
            if (randomBetween(1, ODDS_BAD_EVENT) == 1) {
                eventHappened = -1;
                amount = randomBetween(0, LAST_PLANET);
                await Load(frm_Box1Rect);
                frm_Box1Rect.b_Yes.Visible = 0;
                frm_Box1Rect.b_No.Visible = 0;
                frm_Box1Rect.b_OK.Visible = -1;
                frm_Box1Rect.b_Container.BackColor = 0xC0;
                frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "FIRE.BMP");
                frm_Box1Rect.b_ImageLable.Caption = "Warehouse Fire";
                if (player.warehouseUsed[amount] == 0) {
                    frm_Box1Rect.b_Message.Caption = "A fire breaks out in your warehouse on planet " + UCase(game.planetNames[amount]) + ". Luckily you don't have any goods in that warehouse!";
                } else if (player.warehouseUsed[amount] == 1) {
                    frm_Box1Rect.b_Message.Caption = "A fire breaks out in your warehouse on planet " + UCase(game.planetNames[amount]) + ". You lose " + Format(player.warehouseUsed[amount], "#,#0") + " ton of goods in the fire.";
                } else {
                    frm_Box1Rect.b_Message.Caption = "A fire breaks out in your warehouse on planet " + UCase(game.planetNames[amount]) + ". You lose " + Format(player.warehouseUsed[amount], "#,#0") + " tons of goods in the fire.";
                }
                if (settings.soundOn == -1) {
                    frm_Box1Rect.b_Sound.Command = "Close";
                    frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "fire.wav";
                    frm_Box1Rect.b_Sound.Command = "Open";
                    frm_Box1Rect.b_Sound.Command = "Play";
                }
                await frm_Box1Rect.Show(1);
                if (player.insured == -1 && player.warehouseUsed[amount] != 0) {
                    await Load(frm_Box1Port);
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0x4000;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                    frm_Box1Port.b_Message.Caption = "Luckily you have Voyager's Insurance! The insurance company replaces all of the goods destroyed in the fire.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                } else {
                    player.warehouseUsed[amount] = 0;
                    for (j = 0; j <= 2; j++) {
                        for (k = 0; k <= 5; k++) {
                            player.warehouseStock[amount][j][k] = 0;
                            player.warehouseAvgCost[amount][j][k] = 0;
                        }
                    }
                }
            }
        }
        if (game.tutorialMode == 0 || game.complexity >= game.unlockInsurance) {
            if (randomBetween(1, ODDS_INSURANCE_HIKE) == 1) {
                eventHappened = -1;
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0xC0;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                frm_Box1Port.b_Message.Caption = "Due to a reassessment of your company's accident records, your Voyager's Insurance premiums have been raised an average of " + Format((((player.insuranceRate + 5) / player.insuranceRate) - 1) * 100, "#,#0") + "%.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "bad5.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                player.insuranceRate = player.insuranceRate + 5;
                player.insuranceCost = player.insuranceRate * 1000 - randomBetween(0, 1000);
            }
        }
        if (randomBetween(1, ODDS_BAD_EVENT) == 1 && player.zinnLoan > 0 && game.tutorialMode == 0 || game.complexity >= game.unlockZinnLoan) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0xC0;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ZINN.BMP");
            frm_Box1Port.b_ImageLable.Caption = "Mr. Zinn";
            frm_Box1Port.b_Message.Caption = "Out of pure greed, Mr. Zinn raises your interest rate from " + Format((player.zinnRate * 100), "#,#0") + " % to " + Format((player.zinnRate * 100) + 1, "#,#0") + " %.";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            player.zinnRate = player.zinnRate + 0.01;
            if (player.insured == -1) {
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x4000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                frm_Box1Port.b_Message.Caption = "Sorry, but insurance does not cover this.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
            }
        }
        if (randomBetween(1, ODDS_BAD_EVENT) == 1 && player.loan > 0) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0xC0;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan1.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Trader's Union Official";
            frm_Box1Port.b_Message.Caption = "Because your company has been labeled as a high credit risk, the Trader's Union raises your loan rate from " + Format((player.loanRate * 100), "#,#0") + " % to " + Format((player.loanRate + 0.01) * 100, "#,#0") + " %.";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "bad5.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            player.loanRate = player.loanRate + 0.01;
            if (player.insured == -1) {
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x4000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                frm_Box1Port.b_Message.Caption = "Sorry, but insurance does not cover this.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
            }
        }
        if (game.tutorialMode == 0 || game.complexity >= game.unlockCrew) {
            if (randomBetween(1, ODDS_BAD_EVENT) == 1) {
                eventHappened = -1;
                amount = randomBetween(25, 75) * game.shipSize[game.currentPlayer];
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0xC0;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "crew.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Union Boss";
                frm_Box1Port.b_Message.Caption = "A crew member gets into an accident while at work, and the United Space Worker's Union sues your company. Your company loses, and the court awards the crew member " + Format(amount, "#,#0") + " kubars.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "bad6.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                if (player.insured == -1) {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0x4000;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                    frm_Box1Port.b_Message.Caption = "Luckily you have Voyager's Insurance! The insurance company reimburses you in full for the losses.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                } else {
                    await spend(amount, -1);
                }
            }
        }
        if (game.tutorialMode == 0 || game.complexity >= game.unlockCrew) {
            if (randomBetween(1, ODDS_BAD_EVENT) == 1) {
                eventHappened = -1;
                frm_Box1Port.b_Yes.Visible = -1;
                frm_Box1Port.b_No.Visible = -1;
                frm_Box1Port.b_OK.Visible = 0;
                frm_Box1Port.b_Container.BackColor = 0xC0;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "crew.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Union Boss";
                frm_Box1Port.b_Message.Caption = "Due to an increase in the cost of living, the United Space Worker's Union demands that you raise your employees' weekly salary by 100 kubars per person. Do you agree to raise their salary? If you answer no, there is a chance the crew will go on strike.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "bad6.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                outcome = randomBetween(1, 5);
                if (frm_Box1Port.Tag == "YES") {
                    await Unload(frm_Box1Port);
                    player.crewSalary = player.crewSalary + 100;
                    if (player.insured == -1) {
                        await Load(frm_Box1Port);
                        frm_Box1Port.b_Yes.Visible = 0;
                        frm_Box1Port.b_No.Visible = 0;
                        frm_Box1Port.b_OK.Visible = -1;
                        frm_Box1Port.b_Container.BackColor = 0x4000;
                        frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                        frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                        frm_Box1Port.b_Message.Caption = "Sorry, but Voyager's Insurance does not cover this.";
                        if (settings.soundOn == -1) {
                            frm_Box1Port.b_Sound.Command = "Close";
                            frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                            frm_Box1Port.b_Sound.Command = "Open";
                            frm_Box1Port.b_Sound.Command = "Play";
                        }
                        await frm_Box1Port.Show(1);
                    }
                } else if (outcome == 1) {
                    await Unload(frm_Box1Port);
                    await crewGoesOnStrike();
                }
                await Unload(frm_Box1Port);
            }
        }
        if (game.tutorialMode == 0 || game.complexity >= game.unlockZinnLoan && (player.zinnLoan / 2) < (player.creditLimit - player.loan) && player.zinnLoan > 10000) {
            if (randomBetween(1, ODDS_BAD_EVENT) == 1) {
                eventHappened = -1;
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0xC0;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ZINN.BMP");
                frm_Box1Port.b_ImageLable.Caption = "Mr. Zinn";
                frm_Box1Port.b_Message.Caption = "Mr. Zinn has run into financial difficulties and asks you to pay back half the money you owe him. That means you must pay Mr. Zinn " + Format(player.zinnLoan / 2, "#,#0") + " kubars right away!";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                await spend(player.zinnLoan / 2, -1);
                player.zinnLoan = CLng(player.zinnLoan / 2);
                if (player.insured == -1) {
                    await Load(frm_Box1Port);
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0x4000;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                    frm_Box1Port.b_Message.Caption = "Sorry, but Voyager's Insurance does not cover this.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                }
            }
        }
        if (randomBetween(1, 10) == 1 || game.newsEvent <= 10 || game.newsEvent >= 39 && game.newsEvent <= 48 && game.newsPlanet == game.planet[game.currentPlayer] || game.newsPlanet == game.previousPlanet[game.currentPlayer]) {
            if (game.newsEvent >= 39 && game.newsEvent <= 48) {
                encounterKind = game.newsEvent - 38;
            } else if (game.newsEvent <= 10) {
                encounterKind = game.newsEvent;
            } else if (game.newsEvent >= 115 && game.newsEvent <= 124) {
                encounterKind = game.newsEvent - 114;
            } else {
                encounterKind = randomBetween(1, 10);
            }
            if (game.tutorialMode == 0 || game.complexity >= game.unlockExplore) {
                eventHappened = -1;
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0xC0;
                amount = randomBetween(game.shipSize[game.currentPlayer] * 10, game.shipSize[game.currentPlayer] * 50);
                if (encounterKind == 1) {
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "rebels.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Chichi Bobo Rebels!";
                    frm_Box1Port.b_Message.Caption = "The Chichi Bobo Rebels intercept your vessel. They demand you pay a revolutionary tax of " + Format(amount, "#,#0") + " kubars in support of the struggle to overthrow Supreme Commander Dred Nicolson. You end up giving the rebels valuable parts of your ship, which you must now pay to replace.";
                    outcome = 1;
                } else if (encounterKind == 2) {
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "darleen.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Darleen Smugglers!";
                    if (player.cargoTotal == 0) {
                        frm_Box1Port.b_Message.Caption = "The Darleen Smugglers stop your ship and become furious when they discover that you don't have any cargo they can steal. They harass you and your crew for a few hours, then grow bored an leave.";
                        outcome = 4;
                    } else {
                        frm_Box1Port.b_Message.Caption = "The Darleen Smugglers stop your ship and help themselves to all your cargo.";
                        outcome = 2;
                    }
                } else if (encounterKind == 3) {
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "bandits.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Baid-Rowel Bandits!";
                    if (player.cargoTotal == 0) {
                        frm_Box1Port.b_Message.Caption = "You are unlucky enough to get jumped by the Baid-Rowel Bandits. They become so angry when the find out that you don't have any cargo to steal that they inflict " + Format(amount, "#,#0") + " kubars worth of damage to your ship.";
                    } else {
                        frm_Box1Port.b_Message.Caption = "You are unlucky enough to get jumped by the Baid-Rowel Bandits. They not only steal all your cargo but also inflict " + Format(amount, "#,#0") + " kubars worth of damage to your ship.";
                    }
                    outcome = 3;
                } else if (encounterKind == 4) {
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "mooglers.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Mooglers!";
                    frm_Box1Port.b_Message.Caption = "You stumble into a crowd of mad Mooglers, a rowdy group of anarchists. To prove their point, they trash your ship, causing " + Format(amount, "#,#0") + " kubars worth of damage.";
                    outcome = 1;
                } else if (encounterKind == 5) {
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "FEZFAFA.BMP");
                    frm_Box1Port.b_ImageLable.Caption = "Fez Fa Fa!";
                    frm_Box1Port.b_Message.Caption = "You happen to run into a herd of ever hungry Fez Fa Fa. With unyielding appetites, these wild beasts break into your ship and begin gobbling up everything in sight, including a few of your crew members. Their corrosive saliva winds up causing " + Format(amount, "#,#0") + " kubars worth of damage to your ship. You are lucky they get full by the time they come around to you.";
                    outcome = 1;
                } else if (encounterKind == 6) {
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "hungo.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Hungo Warriors!";
                    if (player.cargoTotal == 0) {
                        frm_Box1Port.b_Message.Caption = "You run smack into a tribe of Hungo Warriors on the war path. These legendary fighters do your ship no harm but carry off one of your more attractive crew members for initiation into their clan.";
                        outcome = 4;
                    } else {
                        frm_Box1Port.b_Message.Caption = "You run smack into a tribe of Hungo Warriors on the war path. These legendary fighters take all your cargo and even carry off one of your more attractive crew members for initiation into their clan.";
                        outcome = 2;
                    }
                } else if (encounterKind == 7) {
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "CYLET.BMP");
                    frm_Box1Port.b_ImageLable.Caption = "Cylet Mind Buggers!";
                    if (player.cargoTotal == 0) {
                        frm_Box1Port.b_Message.Caption = "You stumble into the mental channel of the Cylet Mind Buggers. Without even boarding your ship, they steal the brains of two of your crew members and meltdown your primary navigation-circuits in the process, causing " + Format(amount, "#,#0") + " kubars worth of damage.";
                    } else {
                        frm_Box1Port.b_Message.Caption = "You stumble into the mental channel of the Cylet Mind Buggers. Without even boarding your ship, they steal the brains of two of your crew members, remove all your cargo, and meltdown your primary navigation-circuits in the process, causing " + Format(amount, "#,#0") + " kubars worth of damage.";
                    }
                    outcome = 3;
                } else if (encounterKind == 8) {
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "lippo.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Lippo Jungies!";
                    frm_Box1Port.b_Message.Caption = "You are unlucky enough to run smack into a herd of mindless Lippo Jungies. These huge space-whales smack right into your ship, inflicting " + Format(amount, "#,#0") + " kubars worth of damage.";
                    outcome = 1;
                } else if (encounterKind == 9) {
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "wicky.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Wicky Wicks!";
                    if (player.cargoTotal == 0) {
                        frm_Box1Port.b_Message.Caption = "A group of nasty little Wicky Wicks attach themselves to your ship's engine and won't let go. Unable to move, you are at their mercy. When they find out you have no cargo to steal, they let you go unharmed.";
                        outcome = 4;
                    } else {
                        frm_Box1Port.b_Message.Caption = "A group of nasty little Wicky Wicks attach themselves to your ship's engine and won't let go. Unable to move, you are at their mercy. The only way to convince these slime balls to free your ship is to surrender all your cargo.";
                        outcome = 2;
                    }
                } else if (encounterKind == 10) {
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "bronap.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Space Pirates!";
                    if (player.cargoTotal == 0) {
                        frm_Box1Port.b_Message.Caption = "A band of space pirates, who happen to be descendants of the infamous Bro Nap Goodshark, overtake your ship. Unable to find any cargo to steal, they wind up playing around with your navigation controls, drinking all your beverages, and generally making a mess.";
                        outcome = 4;
                    } else {
                        frm_Box1Port.b_Message.Caption = "A band of space pirates, who happen to be descendants of the infamous Bro Nap Goodshark, overtake your ship. After a few hours of playing around with your navigation controls, drinking all your beverages, and generally making a mess, they steal your cargo and take off.";
                        outcome = 2;
                    }
                }
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    if (encounterKind == 1) {
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "rebels.wav";
                    } else if (encounterKind == 2) {
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "darleen.wav";
                    } else if (encounterKind == 3) {
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "bandits.wav";
                    } else if (encounterKind == 4) {
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "moogler.wav";
                    } else if (encounterKind == 5) {
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "fezfafa.wav";
                    } else if (encounterKind == 6) {
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "hungo.wav";
                    } else if (encounterKind == 7) {
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "cylet.wav";
                    } else if (encounterKind == 8) {
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "lippo.wav";
                    } else if (encounterKind == 9) {
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "wicky.wav";
                    } else if (encounterKind == 10) {
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "pirates.wav";
                    }
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                if (player.insured == -1 && outcome != 4) {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0x4000;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                    frm_Box1Port.b_Message.Caption = "Luckily you have Voyager's Insurance! The insurance company reimburses you in full for all losses and replaces any damaged or stolen items.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                } else {
                    if (outcome == 1) {
                        await spend(amount, -1);
                    } else if (outcome == 2) {
                        player.cargoTotal = 0;
                        for (i = 0; i <= 2; i++) {
                            for (j = 0; j <= 5; j++) {
                                player.cargo[i][j] = 0;
                                player.cargoAvgCost[i][j] = 0;
                            }
                        }
                    } else if (outcome == 3) {
                        player.cargoTotal = 0;
                        for (i = 0; i <= 2; i++) {
                            for (j = 0; j <= 5; j++) {
                                player.cargo[i][j] = 0;
                                player.cargoAvgCost[i][j] = 0;
                            }
                        }
                        await spend(amount, -1);
                    }
                }
                game.travelDelay[game.currentPlayer] = game.travelDelay[game.currentPlayer] + 1;
                delayCount = delayCount + 1;
            }
        }
        if (game.weatherEvent <= 10 || game.weatherEvent >= 61 && game.weatherEvent <= 70 && game.weatherPlanet == game.planet[game.currentPlayer] || game.weatherPlanet == game.previousPlanet[game.currentPlayer]) {
            if (game.weatherEvent <= 10) {
                weatherKind = game.weatherEvent;
            } else {
                weatherKind = game.weatherEvent - 60;
            }
            if (game.tutorialMode == 0 || game.complexity >= game.unlockExplore) {
                eventHappened = -1;
                frm_Box1Rect.b_Yes.Visible = 0;
                frm_Box1Rect.b_No.Visible = 0;
                frm_Box1Rect.b_OK.Visible = -1;
                frm_Box1Rect.b_Container.BackColor = 0xC0;
                amount = randomBetween(game.shipSize[game.currentPlayer] * 10, game.shipSize[game.currentPlayer] * 50);
                if (weatherKind == 1) {
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "METEOR.BMP");
                    frm_Box1Rect.b_ImageLable.Caption = "Meteor Storm!";
                    frm_Box1Rect.b_Message.Caption = "A meteor storm pummels your ship! Your ship's hull is badly damaged, and you must pay " + Format(amount, "#,#0") + " kubars to have it repaired.";
                } else if (weatherKind == 2) {
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "STORM.BMP");
                    frm_Box1Rect.b_ImageLable.Caption = "Solar Storm!";
                    frm_Box1Rect.b_Message.Caption = "You are unable to avoid the solar storm, and it thrashes your ship. Your expensive L-Tech engine is nearly shredded, and you must pay " + Format(amount, "#,#0") + " kubars to have it repaired.";
                } else if (weatherKind == 3) {
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "STORM.BMP");
                    frm_Box1Rect.b_ImageLable.Caption = "Space Hurricane!";
                    frm_Box1Rect.b_Message.Caption = "You encounter a space hurricane, and it batters your ship! Your ship's guidance system suffers serious damaged, and you must pay " + Format(amount, "#,#0") + " kubars to have it repaired.";
                } else if (weatherKind == 4) {
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "STORM.BMP");
                    frm_Box1Rect.b_ImageLable.Caption = "Stellar Typhoon!";
                    frm_Box1Rect.b_Message.Caption = "You stumble into a stellar typhoon, and it pounds your ship. Your rear thrusters are nearly torn apart, and you must pay " + Format(amount, "#,#0") + " kubars to have them repaired.";
                } else if (weatherKind == 5) {
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "dexxygas.bmp");
                    frm_Box1Rect.b_ImageLable.Caption = "Dexxy Gas!";
                    frm_Box1Rect.b_Message.Caption = "You get caught in a corrosive cloud of Dexxy Gas. Your ship's exterior is badly burned, and you must pay " + Format(amount, "#,#0") + " kubars to have it repaired.";
                } else if (weatherKind == 6) {
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "MIPPI.BMP");
                    frm_Box1Rect.b_ImageLable.Caption = "Mippi Weeds!";
                    frm_Box1Rect.b_Message.Caption = "You run smack into a cluster of Mippi Weeds. Your ship is covered in these sticky organisms, and you must pay " + Format(amount, "#,#0") + " kubars to have them removed.";
                } else if (weatherKind == 7) {
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "bollup.bmp");
                    frm_Box1Rect.b_ImageLable.Caption = "Bollup Juice!";
                    frm_Box1Rect.b_Message.Caption = "You are hit by a stream of acidic Bollup Juice. This deadly liquid takes a bite out of your ship, and you must pay " + Format(amount, "#,#0") + " kubars to have it repaired.";
                } else if (weatherKind == 8) {
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "VAPOR.BMP");
                    frm_Box1Rect.b_ImageLable.Caption = "Wess Vapor!";
                    frm_Box1Rect.b_Message.Caption = "Your ship is engulfed in a sea of Wess Vapor. This radioactive debris contaminates your vessel, and you must pay " + Format(amount, "#,#0") + " kubars to have it cleaned.";
                } else if (weatherKind == 9) {
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "WHIRL.BMP");
                    frm_Box1Rect.b_ImageLable.Caption = "Stellar Whirl Pool!";
                    frm_Box1Rect.b_Message.Caption = "You get sucked into a giant Stellar Whirl Pool. Your ship is squeezed and crunched, and you must pay " + Format(amount, "#,#0") + " kubars to have it rebuilt.";
                } else if (weatherKind == 10) {
                    frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "bobble.bmp");
                    frm_Box1Rect.b_ImageLable.Caption = "Bobble Warp!";
                    frm_Box1Rect.b_Message.Caption = "You get slammed by a Bobble Warp, a dangerous break in the time/space continuum. By the time you come back out the other end, your ship is all bent out of shape, and you must pay " + Format(amount, "#,#0") + " kubars to have it re-shaped.";
                }
                if (settings.soundOn == -1) {
                    frm_Box1Rect.b_Sound.Command = "Close";
                    if (weatherKind == 1) {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "meteor.wav";
                    } else if (weatherKind == 2) {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "storm.wav";
                    } else if (weatherKind == 3) {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "storm.wav";
                    } else if (weatherKind == 4) {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "storm.wav";
                    } else if (weatherKind == 5) {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "dexxygas.wav";
                    } else if (weatherKind == 6) {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "mippi.wav";
                    } else if (weatherKind == 7) {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "bollup.wav";
                    } else if (weatherKind == 8) {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "vapor.wav";
                    } else if (weatherKind == 9) {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "whirl.wav";
                    } else if (weatherKind == 10) {
                        frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "bobble.wav";
                    }
                    frm_Box1Rect.b_Sound.Command = "Open";
                    frm_Box1Rect.b_Sound.Command = "Play";
                }
                await frm_Box1Rect.Show(1);
                if (player.insured == -1) {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0x4000;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                    frm_Box1Port.b_Message.Caption = "Luckily you have Voyager's Insurance! The insurance company reimburses you in full for the cost of the repairs and replaces any damaged items.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                } else {
                    await spend(amount, -1);
                }
                delayCount = delayCount + 1;
                game.travelDelay[game.currentPlayer] = game.travelDelay[game.currentPlayer] + 1;
            }
        }
        if (randomBetween(1, ODDS_BAD_EVENT) == 1 && player.cargoTotal > 0) {
            eventHappened = -1;
            frm_Box1Rect.b_Yes.Visible = 0;
            frm_Box1Rect.b_No.Visible = 0;
            frm_Box1Rect.b_OK.Visible = -1;
            frm_Box1Rect.b_Container.BackColor = 0xC0;
            frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer])) + ".bmp");
            for (i = 0; i <= 2; i++) {
                for (j = 0; j <= 5; j++) {
                    if (player.cargo[i][j] > 0) {
                        amount = CLng(i);
                        outcome = CLng(j);
                    }
                }
            }
            tonsLost = CLng((player.cargo[amount][outcome] / 2) + 0.5);
            if (amount == 0) {
                frm_Box1Rect.b_ImageLable.Caption = "Rotten Goods!";
                frm_Box1Rect.b_Message.Caption = "One of your crew members discovers that you purchased rotten " + Trim(game.commodityNames[amount][outcome]) + ". You have no choice but to throw out " + Format(tonsLost, "#,#0") + " ton(s) of the rotten " + Trim(game.commodityNames[amount][outcome]) + ".";
            } else if (amount == 1) {
                frm_Box1Rect.b_ImageLable.Caption = "Defective Goods!";
                frm_Box1Rect.b_Message.Caption = "One of your crew members discovers that you purchased defective " + Trim(game.commodityNames[amount][outcome]) + ". You have no choice but to throw out " + Format(tonsLost, "#,#0") + " ton(s) of the defective " + Trim(game.commodityNames[amount][outcome]) + ".";
            } else if (amount == 2) {
                frm_Box1Rect.b_ImageLable.Caption = "Poor Quality Goods!";
                frm_Box1Rect.b_Message.Caption = "One of your crew members discovers that you purchased poor quality " + Trim(game.commodityNames[amount][outcome]) + ". You have no choice but to throw out " + Format(tonsLost, "#,#0") + " ton(s) of the substandard quality " + Trim(game.commodityNames[amount][outcome]) + ".";
            }
            if (settings.soundOn == -1) {
                frm_Box1Rect.b_Sound.Command = "Close";
                frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "bad3.wav";
                frm_Box1Rect.b_Sound.Command = "Open";
                frm_Box1Rect.b_Sound.Command = "Play";
            }
            await frm_Box1Rect.Show(1);
            if (player.insured == -1) {
                await Load(frm_Box1Port);
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x4000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                frm_Box1Port.b_Message.Caption = "Luckily you have Voyager's Insurance! The insurance company replaces all the " + Trim(game.commodityNames[amount][outcome]) + " you had to throw out.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
            } else {
                player.cargo[amount][outcome] = CLng((player.cargo[amount][outcome] / 2) - 0.5);
                player.cargoTotal = player.cargoTotal - tonsLost;
            }
        } else if (randomBetween(1, ODDS_BAD_EVENT) == 1) {
            eventHappened = -1;
            amount = randomBetween(25, 75) * game.shipSize[game.currentPlayer];
            await Load(frm_Box1Rect);
            frm_Box1Rect.b_Yes.Visible = 0;
            frm_Box1Rect.b_No.Visible = 0;
            frm_Box1Rect.b_OK.Visible = -1;
            frm_Box1Rect.b_Container.BackColor = 0xC0;
            frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "repair.bmp");
            frm_Box1Rect.b_ImageLable.Caption = "Your ship breaks down!";
            frm_Box1Rect.b_Message.Caption = "Your ship breaks down! You must pay " + Format(amount, "#,#0") + " kubars for a repair-droid to come out and fix your ship.";
            if (settings.soundOn == -1) {
                frm_Box1Rect.b_Sound.Command = "Close";
                frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "repair.wav";
                frm_Box1Rect.b_Sound.Command = "Open";
                frm_Box1Rect.b_Sound.Command = "Play";
            }
            await frm_Box1Rect.Show(1);
            if (player.insured == -1) {
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x4000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                frm_Box1Port.b_Message.Caption = "Luckily you have Voyager's Insurance! The insurance company reimburses you in full for the cost of the repairs.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
            } else {
                await spend(amount, -1);
            }
            game.travelDelay[game.currentPlayer] = game.travelDelay[game.currentPlayer] + 1;
            delayCount = delayCount + 1;
        } else if (player.fuel > 1 && randomBetween(1, ODDS_BAD_EVENT) == 1 && game.tutorialMode == 0 || game.complexity >= game.unlockFuel) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0xC0;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "lumbor.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Lumbor";
            frm_Box1Port.b_Message.Caption = "Lumbor, your ship's trusty engineer, discovers a leak in your main fuel tank. Lumbor manages to quickly stop the leak. However, by this time, half your fuel has already drained away.";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "leak.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (player.insured == -1) {
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x4000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                frm_Box1Port.b_Message.Caption = "Luckily you have Voyager's Insurance! The insurance company sends out a tanker to replace the lost fuel.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "fuel.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
            } else {
                player.fuel = CLng(player.fuel / 2);
            }
            game.travelDelay[game.currentPlayer] = game.travelDelay[game.currentPlayer] + 1;
            delayCount = delayCount + 1;
        } else if (randomBetween(1, ODDS_BAD_EVENT) == 1) {
            eventHappened = -1;
            amount = randomBetween(25, 75) * game.shipSize[game.currentPlayer];
            frm_Box1Rect.b_Yes.Visible = 0;
            frm_Box1Rect.b_No.Visible = 0;
            frm_Box1Rect.b_OK.Visible = -1;
            frm_Box1Rect.b_Container.BackColor = 0xC0;
            frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "METEOR.BMP");
            frm_Box1Rect.b_ImageLable.Caption = "Asteroid Hits Your Ship!";
            frm_Box1Rect.b_Message.Caption = "An asteroid hits your ship! You must pay " + Format(amount, "#,#0") + " kubars to have it repaired.";
            if (settings.soundOn == -1) {
                frm_Box1Rect.b_Sound.Command = "Close";
                frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "meteor.wav";
                frm_Box1Rect.b_Sound.Command = "Open";
                frm_Box1Rect.b_Sound.Command = "Play";
            }
            await frm_Box1Rect.Show(1);
            if (player.insured == -1) {
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x4000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                frm_Box1Port.b_Message.Caption = "Luckily you have Voyager's Insurance! The insurance company reimburses you in full for the cost of the repairs.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
            } else {
                await spend(amount, -1);
            }
            game.travelDelay[game.currentPlayer] = game.travelDelay[game.currentPlayer] + 1;
            delayCount = delayCount + 1;
        } else if (randomBetween(1, ODDS_BAD_EVENT) == 1 && player.cargoTotal > 0) {
            eventHappened = -1;
            frm_Box1Rect.b_Yes.Visible = 0;
            frm_Box1Rect.b_No.Visible = 0;
            frm_Box1Rect.b_OK.Visible = -1;
            frm_Box1Rect.b_Container.BackColor = 0xC0;
            frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer])) + ".bmp");
            frm_Box1Rect.b_ImageLable.Caption = "Ship's Cargo Hold Overheats!";
            frm_Box1Rect.b_Message.Caption = "Due to faulty wiring, your ship's cargo hold overheats, and all your cargo is destroyed.";
            if (settings.soundOn == -1) {
                frm_Box1Rect.b_Sound.Command = "Close";
                frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "bad5.wav";
                frm_Box1Rect.b_Sound.Command = "Open";
                frm_Box1Rect.b_Sound.Command = "Play";
            }
            await frm_Box1Rect.Show(1);
            if (player.insured == -1) {
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x4000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                frm_Box1Port.b_Message.Caption = "Luckily you have Voyager's Insurance! The insurance company replaces the destroyed goods.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
            } else {
                player.cargoTotal = 0;
                for (i = 0; i <= 2; i++) {
                    for (j = 0; j <= 5; j++) {
                        player.cargo[i][j] = 0;
                        player.cargoAvgCost[i][j] = 0;
                    }
                }
            }
        } else if (randomBetween(1, ODDS_BAD_EVENT) == 1) {
            eventHappened = -1;
            do {
                outcome = randomBetween(0, LAST_PLANET);
            } while (outcome == game.planet[game.currentPlayer] || outcome == game.previousPlanet[game.currentPlayer]);
            game.planet[game.currentPlayer] = outcome;
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0xC0;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "PILOT.BMP");
            frm_Box1Port.b_ImageLable.Caption = "Ship's Pilot";
            frm_Box1Port.b_Message.Caption = "Due to a navigation error on the part of your pilot, you end up on planet " + UCase(game.planetNames[outcome]) + ".";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "pilot.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (player.insured == -1) {
                await Load(frm_Box1Port);
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x4000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                frm_Box1Port.b_Message.Caption = "Sorry, but Voyager's Insurance does not cover pilot error.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
            }
            player.adExtraPassengers = 0;
            generatePassengers();
        } else if (randomBetween(1, ODDS_BAD_EVENT) == 1) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0xC0;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "PILOT.BMP");
            frm_Box1Port.b_ImageLable.Caption = "Ship's Pilot";
            frm_Box1Port.b_Message.Caption = "Because of a serious miscalculation on the part of your pilot, you get lost and lose several hours of valuable time.";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "pilot.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            game.travelDelay[game.currentPlayer] = game.travelDelay[game.currentPlayer] * 2;
        }
        if (delayCount != 0) {
            frm_Box1Rect.b_Yes.Visible = 0;
            frm_Box1Rect.b_No.Visible = 0;
            frm_Box1Rect.b_OK.Visible = -1;
            frm_Box1Rect.b_Container.BackColor = 0xC0;
            frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer])) + ".bmp");
            frm_Box1Rect.b_ImageLable.Caption = "Your ship is delayed!";
            if (delayCount == 1) {
                frm_Box1Rect.b_Message.Caption = "Because of the mishap you had, it will take you considerably longer than expected to reach your destination planet.";
            } else {
                frm_Box1Rect.b_Message.Caption = "Because of all the trouble you had, it will take you much, much longer than expected to reach your destination planet.";
            }
            if (settings.soundOn == -1) {
                frm_Box1Rect.b_Sound.Command = "Close";
                frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "bad4.wav";
                frm_Box1Rect.b_Sound.Command = "Open";
                frm_Box1Rect.b_Sound.Command = "Play";
            }
            await frm_Box1Rect.Show(1);
        }
        if (eventHappened == -1) {
            player.luck = player.luck - 5;
            if (player.luck < 15) {
                player.luck = 15;
            }
            if (player.luckIsTemporary == -1) {
                player.luck = 50;
            }
            player.luckIsTemporary = 0;
        }
    }

    async function crewGoesOnStrike() {
        frm_Box1Port.b_Yes.Visible = 0;
        frm_Box1Port.b_No.Visible = 0;
        frm_Box1Port.b_OK.Visible = -1;
        frm_Box1Port.b_Container.BackColor = 0xC0;
        frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "crew2.bmp");
        frm_Box1Port.b_ImageLable.Caption = "Union Boss";
        frm_Box1Port.b_Message.Caption = "Unwilling to be treated as slave labor, your crew goes on strike! They demand that you raise their weekly salary or they won't come back." + "\n" + "\n" + "To settle this strike, you are forced to pay " + Format(player.wagesOwed, "#,#0") + " kubars in back wages and raise your crew's weekly salary by 500 kubars per person.";
        if (settings.soundOn == -1) {
            frm_Box1Port.b_Sound.Command = "Close";
            frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "bad3.wav";
            frm_Box1Port.b_Sound.Command = "Open";
            frm_Box1Port.b_Sound.Command = "Play";
        }
        await frm_Box1Port.Show(1);
        await spend(player.wagesOwed, -1);
        player.wagesOwed = 0;
        player.crewSalary = player.crewSalary + 500;
        if (player.insured == -1) {
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0x4000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
            frm_Box1Port.b_Message.Caption = "Sorry, but insurance does not cover this. It is your responsibility to pay your crew.";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
        }
        player.luck = player.luck - 5;
        if (player.luck < 15) {
            player.luck = 15;
        }
        if (player.luckIsTemporary == -1) {
            player.luck = 50;
        }
        player.luckIsTemporary = 0;
    }

    async function runOutOfFuel() {
        let refuelCost = 0;
        refuelCost = (CLng(player.fuelCapacity) * game.fuelBasePrice * 10) + 10000;
        await Load(frm_Box1Rect);
        frm_Box1Rect.b_Yes.Visible = 0;
        frm_Box1Rect.b_No.Visible = 0;
        frm_Box1Rect.b_OK.Visible = -1;
        frm_Box1Rect.b_Container.BackColor = 0xC0;
        frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer])) + ".bmp");
        frm_Box1Rect.b_ImageLable.Caption = "Out of fuel!";
        frm_Box1Rect.b_Message.Caption = "Your ship has run out of fuel. You must pay " + Format(refuelCost, "#,#0") + " kubars to have a tanker come out and refuel your ship. To make matters worse, it will take you considerably longer than expected to reach your destination planet.";
        if (settings.soundOn == -1) {
            frm_Box1Rect.b_Sound.Command = "Close";
            frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "bad3.wav";
            frm_Box1Rect.b_Sound.Command = "Open";
            frm_Box1Rect.b_Sound.Command = "Play";
        }
        await frm_Box1Rect.Show(1);
        player.fuel = player.fuelCapacity;
        if (player.insured == -1) {
            await Load(frm_Box1Port);
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0x4000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
            frm_Box1Port.b_Message.Caption = "Sorry, but insurance does not cover this. It is your responsibility to fill up your fuel tank.";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
        }
        await spend(refuelCost, -1);
        game.travelDelay[game.currentPlayer] = game.travelDelay[game.currentPlayer] + 1;
        player.luck = player.luck - 5;
        if (player.luck < 15) {
            player.luck = 15;
        }
        if (player.luckIsTemporary == -1) {
            player.luck = 50;
        }
        player.luckIsTemporary = 0;
    }

    async function rollGoodTravelEvents() {
        let i = 0;
        let j = 0;
        let amount = 0;
        let price = 0;
        let savedPlayer = 0;
        let eventHappened = 0;
        eventHappened = 0;
        if (game.tutorialMode == 0 || game.complexity >= game.unlockPassengers) {
            if (randomBetween(1, ODDS_WINDFALL_EVENT) == 1) {
                eventHappened = -1;
                frm_Box1Rect.b_Yes.Visible = -1;
                frm_Box1Rect.b_No.Visible = -1;
                frm_Box1Rect.b_OK.Visible = 0;
                frm_Box1Rect.b_Container.BackColor = 0x400000;
                frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer])) + ".bmp");
                price = randomBetween(25000, 100000);
                frm_Box1Rect.b_ImageLable.Caption = "New Ship For Sale";
                frm_Box1Rect.b_Message.Caption = "You receive a one-time offer from the Trader's Union to trade in your " + Format(game.shipSize[game.currentPlayer], "#,#0") + "-ton ship for a " + Format(game.shipSize[game.currentPlayer] + 200, "#,#0") + "-ton ship. This will only cost you " + Format(price, "#,#0") + " kubars, and the Trader's Union is even willing to raise your credit limit by 25,000 kubars in case you run into financial trouble. Do you want to do it?";
                if (settings.soundOn == -1) {
                    frm_Box1Rect.b_Sound.Command = "Close";
                    frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "good3.wav";
                    frm_Box1Rect.b_Sound.Command = "Open";
                    frm_Box1Rect.b_Sound.Command = "Play";
                }
                await frm_Box1Rect.Show(1);
                if (frm_Box1Rect.Tag == "YES") {
                    await Unload(frm_Box1Rect);
                    await spend(price, -1);
                    if (player.commodityAdChoice == 0) {
                        player.commodityAdChoice = 0;
                    } else if (player.commodityAdChoice == 1000 * (game.shipSize[game.currentPlayer] / 400)) {
                        player.commodityAdChoice = CLng(1000 * ((game.shipSize[game.currentPlayer] + 200) / 400));
                    } else if (player.commodityAdChoice == 2000 * (game.shipSize[game.currentPlayer] / 400)) {
                        player.commodityAdChoice = CLng(2000 * ((game.shipSize[game.currentPlayer] + 200) / 400));
                    } else if (player.commodityAdChoice == 3000 * (game.shipSize[game.currentPlayer] / 400)) {
                        player.commodityAdChoice = CLng(3000 * ((game.shipSize[game.currentPlayer] + 200) / 400));
                    } else if (player.commodityAdChoice == 4000 * (game.shipSize[game.currentPlayer] / 400)) {
                        player.commodityAdChoice = CLng(4000 * ((game.shipSize[game.currentPlayer] + 200) / 400));
                    } else if (player.commodityAdChoice == 5000 * (game.shipSize[game.currentPlayer] / 400)) {
                        player.commodityAdChoice = CLng(5000 * ((game.shipSize[game.currentPlayer] + 200) / 400));
                    } else if (player.commodityAdChoice == 10000 * (game.shipSize[game.currentPlayer] / 400)) {
                        player.commodityAdChoice = CLng(10000 * ((game.shipSize[game.currentPlayer] + 200) / 400));
                    }
                    if (player.passengerAdChoice == 0) {
                        player.passengerAdChoice = 0;
                    } else if (player.passengerAdChoice == 1000 * (game.shipSize[game.currentPlayer] / 400)) {
                        player.passengerAdChoice = CLng(1000 * ((game.shipSize[game.currentPlayer] + 200) / 400));
                    } else if (player.passengerAdChoice == 2000 * (game.shipSize[game.currentPlayer] / 400)) {
                        player.passengerAdChoice = CLng(2000 * ((game.shipSize[game.currentPlayer] + 200) / 400));
                    } else if (player.passengerAdChoice == 3000 * (game.shipSize[game.currentPlayer] / 400)) {
                        player.passengerAdChoice = CLng(3000 * ((game.shipSize[game.currentPlayer] + 200) / 400));
                    } else if (player.passengerAdChoice == 4000 * (game.shipSize[game.currentPlayer] / 400)) {
                        player.passengerAdChoice = CLng(4000 * ((game.shipSize[game.currentPlayer] + 200) / 400));
                    } else if (player.passengerAdChoice == 5000 * (game.shipSize[game.currentPlayer] / 400)) {
                        player.passengerAdChoice = CLng(5000 * ((game.shipSize[game.currentPlayer] + 200) / 400));
                    } else if (player.passengerAdChoice == 10000 * (game.shipSize[game.currentPlayer] / 400)) {
                        player.passengerAdChoice = CLng(10000 * ((game.shipSize[game.currentPlayer] + 200) / 400));
                    }
                    game.shipSize[game.currentPlayer] = game.shipSize[game.currentPlayer] + 200;
                    player.creditLimit = player.creditLimit + 25000;
                    if (game.shipType[game.currentPlayer] == 1) {
                        game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 1;
                        player.fuelCapacity = player.fuelCapacity + 5;
                        player.cargoCapacity = player.cargoCapacity + 50;
                        player.passengerCapacity = player.passengerCapacity + 4;
                        player.crewSize = player.crewSize + 2;
                        player.insuranceRate = player.insuranceRate + 6;
                    } else if (game.shipType[game.currentPlayer] == 2) {
                        game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 0;
                        player.fuelCapacity = player.fuelCapacity + 10;
                        player.cargoCapacity = player.cargoCapacity + 60;
                        player.passengerCapacity = player.passengerCapacity + 3;
                        player.crewSize = player.crewSize + 2;
                        player.insuranceRate = player.insuranceRate + 8;
                    } else if (game.shipType[game.currentPlayer] == 3) {
                        game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 0;
                        player.fuelCapacity = player.fuelCapacity + 30;
                        player.cargoCapacity = player.cargoCapacity + 40;
                        player.passengerCapacity = player.passengerCapacity + 3;
                        player.crewSize = player.crewSize + 1;
                        player.insuranceRate = player.insuranceRate + 2;
                    } else if (game.shipType[game.currentPlayer] == 4) {
                        game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 0;
                        player.fuelCapacity = player.fuelCapacity + 10;
                        player.cargoCapacity = player.cargoCapacity + 65;
                        player.passengerCapacity = player.passengerCapacity + 5;
                        player.crewSize = player.crewSize + 3;
                        player.insuranceRate = player.insuranceRate + 8;
                    } else if (game.shipType[game.currentPlayer] == 5) {
                        game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 0;
                        player.fuelCapacity = player.fuelCapacity + 15;
                        player.cargoCapacity = player.cargoCapacity + 50;
                        player.passengerCapacity = player.passengerCapacity + 2;
                        player.crewSize = player.crewSize + 1;
                        player.insuranceRate = player.insuranceRate + 6;
                    } else if (game.shipType[game.currentPlayer] == 6) {
                        game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 0;
                        player.fuelCapacity = player.fuelCapacity + 15;
                        player.cargoCapacity = player.cargoCapacity + 50;
                        player.passengerCapacity = player.passengerCapacity + 4;
                        player.crewSize = player.crewSize + 2;
                        player.insuranceRate = player.insuranceRate + 6;
                    } else if (game.shipType[game.currentPlayer] == 7) {
                        game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 1;
                        player.fuelCapacity = player.fuelCapacity + 10;
                        player.cargoCapacity = player.cargoCapacity + 40;
                        player.passengerCapacity = player.passengerCapacity + 3;
                        player.crewSize = player.crewSize + 2;
                        player.insuranceRate = player.insuranceRate + 6;
                    } else if (game.shipType[game.currentPlayer] == 8) {
                        game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 0;
                        player.fuelCapacity = player.fuelCapacity + 15;
                        player.cargoCapacity = player.cargoCapacity + 55;
                        player.passengerCapacity = player.passengerCapacity + 3;
                        player.crewSize = player.crewSize + 2;
                        player.insuranceRate = player.insuranceRate + 6;
                    } else if (game.shipType[game.currentPlayer] == 9) {
                        game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 0;
                        player.fuelCapacity = player.fuelCapacity + 15;
                        player.cargoCapacity = player.cargoCapacity + 45;
                        player.passengerCapacity = player.passengerCapacity + 5;
                        player.crewSize = player.crewSize + 2;
                        player.insuranceRate = player.insuranceRate + 4;
                    } else if (game.shipType[game.currentPlayer] == 10) {
                        game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 0;
                        player.fuelCapacity = player.fuelCapacity + 10;
                        player.cargoCapacity = player.cargoCapacity + 75;
                        player.passengerCapacity = player.passengerCapacity + 1;
                        player.crewSize = player.crewSize + 1;
                        player.insuranceRate = player.insuranceRate + 10;
                    } else if (game.shipType[game.currentPlayer] == 11) {
                        game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 0;
                        player.fuelCapacity = player.fuelCapacity + 10;
                        player.cargoCapacity = player.cargoCapacity + 40;
                        player.passengerCapacity = player.passengerCapacity + 8;
                        player.crewSize = player.crewSize + 6;
                        player.insuranceRate = player.insuranceRate + 2;
                    } else if (game.shipType[game.currentPlayer] == 12) {
                        game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 0;
                        player.fuelCapacity = player.fuelCapacity + 15;
                        player.cargoCapacity = player.cargoCapacity + 55;
                        player.passengerCapacity = player.passengerCapacity + 4;
                        player.crewSize = player.crewSize + 3;
                        player.insuranceRate = player.insuranceRate + 6;
                    }
                    generatePassengers();
                }
                await Unload(frm_Box1Rect);
            }
        }
        if (game.tutorialMode == 0 || game.complexity >= game.unlockWarehouse) {
            if (randomBetween(1, ODDS_WINDFALL_EVENT) == 1) {
                eventHappened = -1;
                price = randomBetween(15000, 50000);
                frm_Box1Rect.b_Yes.Visible = -1;
                frm_Box1Rect.b_No.Visible = -1;
                frm_Box1Rect.b_OK.Visible = 0;
                frm_Box1Rect.b_Container.BackColor = 0x400000;
                frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "warehous.bmp");
                frm_Box1Rect.b_ImageLable.Caption = "Warehouse Space For Sale";
                frm_Box1Rect.b_Message.Caption = "For only " + Format(price, "#,#0") + " kubars, you have the opportunity to increase your warehouse space from " + Format(player.warehouseCapacity, "#,#0") + " tons to " + Format(player.warehouseCapacity + 50, "#,#0") + " tons on every planet. Do you want to do it?";
                if (settings.soundOn == -1) {
                    frm_Box1Rect.b_Sound.Command = "Close";
                    frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "good3.wav";
                    frm_Box1Rect.b_Sound.Command = "Open";
                    frm_Box1Rect.b_Sound.Command = "Play";
                }
                await frm_Box1Rect.Show(1);
                if (frm_Box1Rect.Tag == "YES") {
                    await Unload(frm_Box1Rect);
                    await spend(price, -1);
                    player.warehouseCapacity = player.warehouseCapacity + 50;
                    player.insuranceRate = player.insuranceRate + 5;
                }
                await Unload(frm_Box1Rect);
            }
        }
        if (game.tutorialMode == 0 || game.complexity >= game.unlockCrew && player.wagesOwed > 0) {
            if (randomBetween(1, ODDS_WINDFALL_EVENT) == 1) {
                eventHappened = -1;
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x400000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "crew.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Union Boss Isn't Happy";
                amount = randomBetween(1, 3);
                if (amount == 1) {
                    frm_Box1Port.b_Message.Caption = "Because you have been complaining so much about how difficult it is to run a business and how the competition is driving you under, your crew reluctantly agrees to forget about any money you owe them. That means you don't have to pay " + Format(player.wagesOwed, "#,#0") + " kubars in employee wages! You now owe your crew 0 kubars.";
                } else if (amount == 2) {
                    frm_Box1Port.b_Message.Caption = "Because your company is struggling to make a profit and your crew is afraid of losing their jobs, they reluctantly agree to forget about any money you owe them. That means you don't have to pay " + Format(player.wagesOwed, "#,#0") + " kubars in employee wages! You now owe your crew 0 kubars.";
                } else {
                    frm_Box1Port.b_Message.Caption = "Because of a special deal you cut with the Union Boss, your crew reluctantly agrees to forget about any money you owe them. That means you don't have to pay " + Format(player.wagesOwed, "#,#0") + " kubars in employee wages! You now owe your crew 0 kubars.";
                }
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "good2.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                player.wagesOwed = 0;
            }
        }
        if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes && (player.passengerTaxOwed + player.tariffsOwed) > 0) {
            if (randomBetween(1, ODDS_WINDFALL_EVENT) == 1) {
                eventHappened = -1;
                await Load(frm_Box1Port);
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x400000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "DRED.BMP");
                frm_Box1Port.b_ImageLable.Caption = "Emperor Dred Nicolson";
                frm_Box1Port.b_Message.Caption = "Supreme Commander Dred Nicolson grants your business an emergency tax break. That means you don't have to pay " + Format((player.passengerTaxOwed + player.tariffsOwed), "#,#0") + " kubars in taxes! You now owe 0 kubars in taxes and tariffs.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "dred.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                player.passengerTaxOwed = 0;
                player.tariffsOwed = 0;
            }
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "MECH.BMP");
            frm_Box1Port.b_ImageLable.Caption = "L-Tech Sales Rep.";
            frm_Box1Port.b_Message.Caption = "As part of a promotional package, L-Tech Engine Co. offers you a FREE upgrade from your " + Format(game.engineSpeed[game.currentPlayer], "#,#0") + " kuarp engine to a super-charged " + Format(game.engineSpeed[game.currentPlayer] + 1, "#,#0") + " kuarp engine. They hope this will boost sales by inspiring your competitors to purchase new engines.";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "mech.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 1;
        }
        if (game.tutorialMode == 0 || game.complexity >= game.unlockInsurance && player.insuranceRate >= 6) {
            if (randomBetween(1, ODDS_GOOD_EVENT) == 1) {
                eventHappened = -1;
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x400000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                frm_Box1Port.b_Message.Caption = "Due to a reassessment of your company's accident records, your Voyager's Insurance premiums have been lowered an average of " + Format((1 - ((player.insuranceRate - 5) / player.insuranceRate)) * 100, "#,#0") + "%.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "good5.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                player.insuranceRate = player.insuranceRate - 5;
                player.insuranceCost = player.insuranceRate + randomBetween(0, 1000);
            }
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1 && player.zinnRate >= 0.02 && game.tutorialMode == 0 || game.complexity >= game.unlockZinnLoan) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ZINN.BMP");
            frm_Box1Port.b_ImageLable.Caption = "Mr. Zinn";
            frm_Box1Port.b_Message.Caption = "In an effort to encourage you to borrow more money, Mr. Zinn lowers your interest rate from " + Format((player.zinnRate * 100), "#,#0") + "% to " + Format((player.zinnRate * 100 - 1), "#,#0") + "%.";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            player.zinnRate = player.zinnRate - 0.01;
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1 && player.loanRate >= 0.04 || player.loanRate >= 0.02 && (player.cash + player.bankBalance - player.loan - player.zinnLoan) > 5000000) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan1.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Trader's Union Official";
            frm_Box1Port.b_Message.Caption = "Due to your good credit record and sound business practices, the Trader's Union lowers your loan rate from " + Format((player.loanRate * 100), "#,#0") + "% to " + Format((player.loanRate - 0.01) * 100, "#,#0") + "%.";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "good5.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            player.loanRate = player.loanRate - 0.01;
        }
        if (game.tutorialMode == 0 || game.complexity >= game.unlockBank) {
            if (randomBetween(1, ODDS_GOOD_EVENT) == 1 && player.bankRate == 0.01) {
                eventHappened = -1;
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x400000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "BANK.BMP");
                frm_Box1Port.b_ImageLable.Caption = "Bank Manager";
                frm_Box1Port.b_Message.Caption = "To encourage you to deposit more money, the Trader's Union raises the interest rate on your bank account from " + Format((player.bankRate * 100), "#,#0") + "% to " + Format((player.bankRate + 0.01) * 100, "#,#0") + "%.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "good5.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                player.bankRate = player.bankRate + 0.01;
            }
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1 && game.tutorialMode == 0 || game.complexity >= game.unlockZinnLoan) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ZINN.BMP");
            frm_Box1Port.b_ImageLable.Caption = "Mr. Zinn";
            frm_Box1Port.b_Message.Caption = "Because he feels your company is a good investment, Mr. Zinn offers to increase the amount of your loan by 50,000 kubars. If you accept his offer, your loan amount will become " + Format((player.zinnLoan + 50000), "#,#0") + " kubars. The interest rate on this loan will remain at " + Format((player.zinnRate * 100), "#,#0") + "%, and he will increase your credit limit to " + Format((player.zinnCreditLimit + 100000), "#,#0") + " kubars. Do you want to accept his offer and increase this loan amount?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                player.zinnLoan = player.zinnLoan + 50000;
                player.zinnCreditLimit = player.zinnCreditLimit + 100000;
                player.cash = player.cash + 50000;
            }
            await Unload(frm_Box1Port);
        }
        if (game.tutorialMode == 0 || game.complexity >= game.unlockZinnLoan && player.zinnLoan > 0) {
            if (randomBetween(1, ODDS_GOOD_EVENT) == 1) {
                eventHappened = -1;
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x400000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ZINN.BMP");
                frm_Box1Port.b_ImageLable.Caption = "Mr. Zinn";
                frm_Box1Port.b_Message.Caption = "In order to keep you from defaulting on your loan, Mr. Zinn increases your credit limit from " + Format(player.zinnCreditLimit, "#,#0") + " kubars to " + Format((player.zinnCreditLimit + 50000), "#,#0") + " kubars.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "zinn.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                player.zinnCreditLimit = player.zinnCreditLimit + 50000;
            }
        }
        if (game.tutorialMode == 0 || game.complexity >= game.unlockLoan && player.loan > 0) {
            if (randomBetween(1, ODDS_GOOD_EVENT) == 1) {
                eventHappened = -1;
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x400000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "loan1.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Trader's Union Official";
                frm_Box1Port.b_Message.Caption = "In order to stimulate your company's growth, the Trader's Union increases your credit limit from " + Format(player.creditLimit, "#,#0") + " kubars to " + Format((player.creditLimit + 50000), "#,#0") + " kubars.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "good3.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                player.creditLimit = player.creditLimit + 50000;
            }
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1) {
            eventHappened = -1;
            amount = randomBetween(25, 75) * (game.shipSize[game.currentPlayer]);
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "MONEY.WMF");
            frm_Box1Port.b_ImageLable.Caption = "Money, Money, Money!";
            frm_Box1Port.b_Message.Caption = "You inherit money! A rich relative has died and left you " + Format(amount, "#,#0") + " kubars.";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "good2.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            player.cash = player.cash + amount;
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1) {
            eventHappened = -1;
            amount = randomBetween(25, 75) * game.shipSize[game.currentPlayer];
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "MONEY.WMF");
            frm_Box1Port.b_ImageLable.Caption = "You're in the money!";
            frm_Box1Port.b_Message.Caption = "It's your lucky day!!! You win the lottery and receive " + Format(amount, "#,#0") + " kubars.";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "good2.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            player.cash = player.cash + amount;
        }
        if (game.tutorialMode == 0 || game.complexity >= game.unlockWarehouse) {
            if (randomBetween(1, ODDS_GOOD_EVENT) == 1) {
                eventHappened = -1;
                frm_Box1Rect.b_Yes.Visible = 0;
                frm_Box1Rect.b_No.Visible = 0;
                frm_Box1Rect.b_OK.Visible = -1;
                frm_Box1Rect.b_Container.BackColor = 0x400000;
                frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "warehous.bmp");
                frm_Box1Rect.b_ImageLable.Caption = "Free Warehouse Space";
                frm_Box1Rect.b_Message.Caption = "In order to encourage you to use the warehouse more often, the Trader's Union increases your warehouse space from " + Format(player.warehouseCapacity, "#,#0") + " tons to " + Format((player.warehouseCapacity + 25), "#,#0") + " tons free of charge.";
                if (settings.soundOn == -1) {
                    frm_Box1Rect.b_Sound.Command = "Close";
                    frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "good3.wav";
                    frm_Box1Rect.b_Sound.Command = "Open";
                    frm_Box1Rect.b_Sound.Command = "Play";
                }
                await frm_Box1Rect.Show(1);
                player.warehouseCapacity = player.warehouseCapacity + 25;
                player.insuranceRate = player.insuranceRate + 5;
            }
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1 && player.cargoTotal > 0) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "scooter.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Scooter Jay";
            amount = 0;
            for (i = 0; i <= 2; i++) {
                for (j = 0; j <= 5; j++) {
                    amount = amount + (player.cargo[i][j] * player.cargoAvgCost[i][j]);
                }
            }
            if (amount == 0) {
                amount = player.cargoTotal * 300;
            }
            frm_Box1Port.b_Message.Caption = "Your ship runs across Scooter Jay, a smuggler from the galaxy of Pata Pata Pita. Scooter offers to buy all of your cargo for " + Format(4 * amount, "#,#0") + " kubars. Under Imperial law, you are forbidden to trade with anyone from Pata Pata Pita. Do you want to break the law and accept Scooter's offer?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "scooter.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                player.cash = player.cash + (amount * 4);
                player.cargoTotal = 0;
                for (i = 0; i <= 2; i++) {
                    for (j = 0; j <= 5; j++) {
                        player.cargo[i][j] = 0;
                        player.cargoAvgCost[i][j] = 0;
                    }
                }
                price = randomBetween(1, 5);
                if (price == 1) {
                    await Load(frm_Box1Port);
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0xC0;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "POLICE.BMP");
                    frm_Box1Port.b_ImageLable.Caption = "Imperial Police";
                    frm_Box1Port.b_Message.Caption = "Little did you know, the Imperial Police had you under surveillance the entire time. For your crime against the New Realm, you are fined " + Format(amount * 7, "#,#0") + " kubars and warned that if you break the law again you could wind up in jail.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "police.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                    await spend(7 * amount, -1);
                    player.luck = 45;
                }
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1 && player.cargoTotal > 0) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "hands.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Hands";
            frm_Box1Port.b_Message.Caption = "Your ship encounters Hands, a well-known crook and racketeer. Hands offers to exchange the cargo you have on your ship for " + Format(player.cargoCapacity, "#,#0") + " tons of Exotic. Under Imperial law, you are forbidden to buy, sell or trade any goods you know are stolen. Do you break the law and accept his offer?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "hands.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                for (i = 0; i <= 2; i++) {
                    for (j = 0; j <= 5; j++) {
                        player.cargo[i][j] = 0;
                        player.cargoAvgCost[i][j] = 0;
                    }
                }
                player.cargoTotal = player.cargoCapacity;
                player.cargo[2][5] = player.cargoCapacity;
                price = randomBetween(1, 5);
                if (price == 1) {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0xC0;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "POLICE.BMP");
                    frm_Box1Port.b_ImageLable.Caption = "Imperial Police";
                    frm_Box1Port.b_Message.Caption = "Little did you know, the Imperial Police had you under surveillance the entire time. For your crime against the New Realm, you are fined 50,000 kubars and all your cargo is confiscated. The police warn you that if you break the law again you could wind up in jail.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "police.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                    await spend(50000, -1);
                    player.cargoTotal = 0;
                    for (i = 0; i <= 2; i++) {
                        for (j = 0; j <= 5; j++) {
                            player.cargo[i][j] = 0;
                            player.cargoAvgCost[i][j] = 0;
                        }
                    }
                    player.luck = 45;
                }
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "CURTIS.BMP");
            frm_Box1Port.b_ImageLable.Caption = "Curtonian Plus";
            amount = randomBetween(15, 35) * game.shipSize[game.currentPlayer];
            frm_Box1Port.b_Message.Caption = "You are stopped by a broken-down spaceship flashing a distress signal. The captain, Curtonian Plus, asks if you will loan him " + Format(amount, "#,#0") + " kubars to repair his ship so he can return to " + game.planetNames[5] + ". He promises to pay you back just as soon as he arrives home. Do you want to loan him the money?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "curtis.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                await spend(amount, -1);
                price = randomBetween(1, 4);
                if (price == 1) {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0x400000;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "CURTIS.BMP");
                    frm_Box1Port.b_ImageLable.Caption = "Curtonian Plus";
                    frm_Box1Port.b_Message.Caption = "As it turns out, Curtonian Plus is from one of Kukubia's wealthiest merchant families. His father winds up paying you " + Format(amount * 6, "#,#0") + " kubars for your kindness.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "curtis.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                    player.cash = player.cash + (amount * 6);
                }
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "quist.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Quist";
            amount = randomBetween(25, 75) * game.shipSize[game.currentPlayer];
            frm_Box1Port.b_Message.Caption = "Quist, a high flying financier, says he has cooked up a sure fire scheme for making millions. If you invest " + Format(amount, "#,#0") + " kubars with him, he guarantees you'll see a tenfold profit within a month or two. Do you want to invest your money?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "quist.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                await spend(amount, -1);
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "wobbler.bmp");
            frm_Box1Port.b_ImageLable.Caption = "The Wobbler";
            amount = randomBetween(15, 35) * game.shipSize[game.currentPlayer];
            frm_Box1Port.b_Message.Caption = "Your company is approached by The Wobbler, a starving artist. The Wobbler asks you to sponsor his next avant-garde theatrical production. It will cost " + Format(amount, "#,#0") + " kubars and probably won't make any money. However, it will be an artistic masterpiece that will go down in history. Do you give him the money?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "wobbler.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                await spend(amount, -1);
                price = randomBetween(1, 3);
                if (price == 1) {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0xC0;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "DRED.BMP");
                    frm_Box1Port.b_ImageLable.Caption = "Emperor Dred Nicolson";
                    frm_Box1Port.b_Message.Caption = "The Wobbler's experimental play turns out to be a complete flop! Supreme Commander Dred Nicolson calls it a national disgrace and bans it from ever being shown again in public.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "bad5.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                    player.luck = 45;
                } else {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0x400000;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "DRED.BMP");
                    frm_Box1Port.b_ImageLable.Caption = "Emperor Dred Nicolson";
                    frm_Box1Port.b_Message.Caption = "The Wobbler's experimental play turns out to be a surprise hit! The public flocks to see it. Supreme Commander Dred Nicolson calls it a national treasure. The Wobbler generously repays you " + Format(amount * 3, "#,#0") + " kubars, three times your original investment.";
                    player.cash = player.cash + (amount * 3);
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "good2.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                }
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "sabotage.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Brow";
            price = randomBetween(10, 50) * game.shipSize[game.currentPlayer];
            frm_Box1Port.b_Message.Caption = "Brow, an industrial spy, offers to do a little dirty work on your behalf. If you pay him " + Format(price, "#,#0") + " kubars, he will sabotage your competitors' companies. Brow assures you that he is an expert at nasty tricks. Do you want to accept this offer?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "sabotage.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                await spend(price, -1);
                if (randomBetween(1, 5) == 1) {
                    amount = price * 4;
                    await Load(frm_Box1Port);
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0xC0;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "POLICE.BMP");
                    frm_Box1Port.b_ImageLable.Caption = "Imperial Police";
                    frm_Box1Port.b_Message.Caption = "Little did you know, the Imperial Police had you under surveillance the entire time. For attempting to conduct industrial sabotage, you are fined " + Format(amount, "#,#0") + " kubars and warned that if you break the law again you could wind up in jail.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "police.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                    await spend(amount, -1);
                    player.luck = 45;
                } else {
                    for (i = 1; i <= game.numRivals; i++) {
                        amount = randomBetween(price, 4 * price);
                        rivals.cash[i] = rivals.cash[i] - amount;
                        frm_Box1Rect.b_Yes.Visible = 0;
                        frm_Box1Rect.b_No.Visible = 0;
                        frm_Box1Rect.b_OK.Visible = -1;
                        frm_Box1Rect.b_Container.BackColor = 0x400000;
                        frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "op" + Trim(Str((i))) + ".bmp");
                        frm_Box1Rect.b_ImageLable.Caption = Trim(rivals.companyNames[i]);
                        {
                            const sel = randomBetween(1, 6);
                            if (sel == 1) {
                                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[i]) + " suffers a major financial loss as important trade secrets are leaked to the press. The company's net worth falls " + Format(amount, "#,#0") + " kubars overnight.";
                            } else if (sel == 2) {
                                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[i]) + " gets into an accident. It costs the company " + Format(amount, "#,#0") + " kubars to repair the damage.";
                            } else if (sel == 3) {
                                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[i]) + " loses a critical law suit. The company must pay " + Format(amount, "#,#0") + " kubars in damages and legal fees.";
                            } else if (sel == 4) {
                                frm_Box1Rect.b_Message.Caption = "After receiving an anonymous tip, local officials on " + game.planetNames[randomBetween(0, LAST_PLANET)] + " find contraband stored in " + Trim(rivals.companyNames[i]) + "'s warehouse. As a result, " + Trim(rivals.companyNames[i]) + " must pay a fine of " + Format(amount, "#,#0") + " kubars.";
                            } else if (sel == 5) {
                                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[i]) + "'s warehouse on " + game.planetNames[randomBetween(0, LAST_PLANET)] + " catches on fire and burns to the ground. The fire destroys " + Format(amount, "#,#0") + " kubars worth of commodities.";
                            } else if (sel == 6) {
                                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[i]) + "'s cargo hold overheats, and " + Format(amount, "#,#0") + " kubars worth of goods are destroyed. The cause of the accident is still undetermined.";
                            }
                        }
                        if (settings.soundOn == -1) {
                            b_Sound.Command = "Close";
                            frm_Box1Rect.b_Sound.Command = "Close";
                            frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "op" + Trim(Str(i)) + ".wav";
                            frm_Box1Rect.b_Sound.Command = "Open";
                            frm_Box1Rect.b_Sound.Command = "Play";
                        }
                        await frm_Box1Rect.Show(1);
                    }
                    storePlayer(game.currentPlayer);
                    savedPlayer = game.currentPlayer;
                    for (i = 1; i <= game.numPlayers; i++) {
                        if (i != savedPlayer && game.graphShowCompany[i] == 0) {
                            amount = randomBetween(price, 4 * price);
                            frm_Box1Rect.b_Yes.Visible = 0;
                            frm_Box1Rect.b_No.Visible = 0;
                            frm_Box1Rect.b_OK.Visible = -1;
                            frm_Box1Rect.b_Container.BackColor = 0x400000;
                            frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[i])) + ".bmp");
                            frm_Box1Rect.b_ImageLable.Caption = Trim(game.companyNames[i]);
                            {
                                const sel = randomBetween(1, 6);
                                if (sel == 1) {
                                    frm_Box1Rect.b_Message.Caption = Trim(game.companyNames[i]) + " suffers mysterious engine troubles. As a result, " + Trim(game.companyNames[i]) + " is forced to borrow " + Format(amount, "#,#0") + " kubars from the Trader's Union to pay for the repairs.";
                                } else if (sel == 2) {
                                    frm_Box1Rect.b_Message.Caption = Trim(game.companyNames[i]) + " discovers that a crew member has illegally borrowed money from the Trader's Union under the company name and absconded to Pata Pata Pita with the money. As a result, " + Trim(game.companyNames[i]) + "'s loan has increased by " + Format(amount, "#,#0") + " kubars.";
                                } else if (sel == 3) {
                                    frm_Box1Rect.b_Message.Caption = Trim(game.companyNames[i]) + " is sued by a crew member who claims to have contracted a mysterious disease while on the job. The court awards the claimant " + Format(amount, "#,#0") + " kubars. Luckily, the Trader's Union loans " + Trim(game.companyNames[i]) + " the money.";
                                } else if (sel == 4) {
                                    frm_Box1Rect.b_Message.Caption = Trim(game.companyNames[i]) + "'s ship is damaged when a small bomb explodes in the engine room. As a result, " + Trim(game.companyNames[i]) + " is forced to borrow " + Format(amount, "#,#0") + " kubars from the Trader's Union to pay for the repairs.";
                                } else if (sel == 5) {
                                    frm_Box1Rect.b_Message.Caption = Trim(game.companyNames[i]) + "'s ship is vandalized by a gang of thugs. As a result, " + Trim(game.companyNames[i]) + " is forced to borrow " + Format(amount, "#,#0") + " kubars from the Trader's Union to pay for the repairs.";
                                } else if (sel == 6) {
                                    frm_Box1Rect.b_Message.Caption = Trim(game.companyNames[i]) + " is sued by the public for shipping commodities laced with poison. The Imperial Court orders " + Trim(game.companyNames[i]) + " to pay " + Format(amount, "#,#0") + " kubars in fines. Luckily, the Trader's Union loans " + Trim(game.companyNames[i]) + " the money.";
                                }
                            }
                            if (settings.soundOn == -1) {
                                b_Sound.Command = "Close";
                                frm_Box1Rect.b_Sound.Command = "Close";
                                if (game.shipType[i] <= 6) {
                                    frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[i])) + ".wav";
                                } else {
                                    frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[i] - 6)) + ".wav";
                                }
                                frm_Box1Rect.b_Sound.Command = "Open";
                                frm_Box1Rect.b_Sound.Command = "Play";
                            }
                            await frm_Box1Rect.Show(1);
                            loadPlayer(i);
                            await spend(amount, 0);
                            storePlayer(i);
                        }
                    }
                    loadPlayer(savedPlayer);
                }
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "yoyo.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Yoyo";
            amount = randomBetween(1, 35) * game.shipSize[game.currentPlayer];
            frm_Box1Port.b_Message.Caption = "Your ship is stopped by Yoyo, a notorious gambler. Yoyo offers to make you a wager. He will flip a coin. If it comes up tails, he will pay you " + Format(amount, "#,#0") + " kubars. If it comes up heads, you will pay him " + Format(amount / 2, "#,#0") + " kubars. Do you accept Yoyo's offer?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "yoyo.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0xC0;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "DIME.WMF");
                frm_Box1Port.b_ImageLable.Caption = "Heads!!!";
                for (i = 1; i <= 10; i++) {
                    if (settings.soundOn == -1) {
                        Beep();
                    }
                }
                frm_Box1Port.b_Message.Caption = "Sorry, you lose. You should know by now that it never pays to gamble with a pro!";
                await frm_Box1Port.Show(1);
                await spend(amount / 2, -1);
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1 && player.cargoTotal > 0) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "limpus.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Limpus";
            frm_Box1Port.b_Message.Caption = "Limpus, a renowned humanitarian and philanthropist, asks if you would like to donate the cargo you have in your ship to the Kukubian Children's Fund. Do you give your valuable cargo to the needy children?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "limpus.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                player.cargoTotal = 0;
                for (i = 0; i <= 2; i++) {
                    for (j = 0; j <= 5; j++) {
                        player.cargo[i][j] = 0;
                        player.cargoAvgCost[i][j] = 0;
                    }
                }
                await Load(frm_Box1Port);
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x400000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "MONK.BMP");
                frm_Box1Port.b_ImageLable.Caption = "Grand Sages";
                frm_Box1Port.b_Message.Caption = "When the Grand Sages, Kukubia's most venerated religious figures, hear of how your struggling company offered to give up its precious cargo for needy children, they grant your company the highest blessing.";
                player.luck = 85;
                player.luckIsTemporary = -1;
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "blessing.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1 && game.engineSpeed[game.currentPlayer] >= 5) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "sleg.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Sleg";
            amount = 3 * 50000;
            frm_Box1Port.b_Message.Caption = "Sleg, an inter-galactic commodities broker, asks if you will trade your " + Format(game.engineSpeed[game.currentPlayer], "#,#0") + " kuarp engine for his " + Format((game.engineSpeed[game.currentPlayer] - 3), "#,#0") + " kuarp engine. He has a valuable shipment of Uliss Leaves that he must transport to Outer Glosser right away. He is willing to pay you " + Format(amount, "#,#0") + " kubars if you'll make the trade. Will you do it?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                player.cash = player.cash + amount;
                game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] - 3;
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_GOOD_EVENT) == 1) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "DRED.BMP");
            frm_Box1Port.b_ImageLable.Caption = "Emperor Dred Nicolson";
            frm_Box1Port.b_Message.Caption = "Supreme Commander Dred Nicolson, Emperor of the New Realm, pays a visit to your company. He says your company is critical to the success of Kukubia, and he will do his best to support free trade and open up new markets.";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "dred.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
        }
        await rollTravelEncounters(eventHappened);
    }

    async function rollTravelEncounters(eventHappened) {
        let i = 0;
        let j = 0;
        let phrase = "";
        let amount = 0;
        let value = 0;
        let category = 0;
        let item = 0;
        eventHappened = CInt(eventHappened);
        if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1) {
            eventHappened = -1;
            amount = randomBetween(25, 75) * game.shipSize[game.currentPlayer];
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "iso.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Iso";
            frm_Box1Port.b_Message.Caption = "You come across Iso, a painfully shy monk who disdains material possessions. Pilgrims often seek out Iso for blessings and give her extraordinary sums of money, but Iso has no use for these pieces of paper. Thus, Iso gives them away to anyone who will take them. Are you interested in relieving Iso of " + Format(amount, "#,#0") + " kubars?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "iso.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                player.cash = player.cash + amount;
            }
            await Unload(frm_Box1Port);
        }
        amount = -555;
        for (i = 0; i <= LAST_PLANET; i++) {
            if (player.shares[i] > 0) {
                amount = CLng(i);
            }
        }
        if (amount != -555 && randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1 && game.tutorialMode == 0 || game.complexity >= game.unlockStocks) {
            eventHappened = -1;
            if (game.turn < 15) {
                value = game.stockPrices[amount][game.turn];
            } else {
                value = game.stockPrices[amount][15];
            }
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "rj.bmp");
            frm_Box1Port.b_ImageLable.Caption = "R.J. Raffety";
            frm_Box1Port.b_Message.Caption = "You bump into R.J. Raffety, a big time speculator. R.J. is always scheming to buy more stock than the rules permit. One of R.J.'s legal loop holes is to buy stock between the planets, where Imperial Law is fuzzy. R.J. makes you an offer to buy all your shares on the " + UCase(game.planetNames[amount]) + " EXCHANGE for the current market price plus an extra 15%. You currently own " + Format(player.shares[amount], "#,#0") + " shares on the " + UCase(game.planetNames[amount]) + " EXCHANGE. The price you paid is " + Format(player.shareAvgCost[amount], "#,#0") + " and the current market price is " + Format(value, "#,#0") + ". This means you stand to make a profit of " + Format((player.shares[amount] * value * 1.15) - (player.shareAvgCost[amount] * player.shares[amount]), "#,#0") + " kubars if you sell now. Are you interested in selling?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "rj.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                player.cash = CLng(player.cash + (player.shares[amount] * value * 1.15));
                player.shares[amount] = 0;
                player.shareAvgCost[amount] = 0;
            }
            await Unload(frm_Box1Port);
        }
        if (game.turn < 15) {
            amount = CLng(0.8 * game.stockPrices[game.previousPlanet[game.currentPlayer]][game.turn]);
        } else {
            amount = CLng(0.8 * game.stockPrices[game.previousPlanet[game.currentPlayer]][15]);
        }
        if ((player.cash + player.bankBalance) > (2 * amount) && randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1 && game.tutorialMode == 0 || game.complexity >= game.unlockStocks) {
            eventHappened = -1;
            if ((0.25 * (player.cash + player.bankBalance)) > 2000000) {
                value = CLng(2000000 / amount);
            } else {
                value = CLng((0.25 * (player.cash + player.bankBalance)) / amount);
            }
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "nebbit.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Nebbit";
            frm_Box1Port.b_Message.Caption = "Nebbit, a big time stock broker, offers you a special deal. If you're interested, he's willing to arrange for you to purchase " + Format(value, "#,#0") + " shares of stock on the " + UCase(game.planetNames[game.previousPlanet[game.currentPlayer]]) + " EXCHANGE for 20% less than the current market price. This will cost you a total of " + Format(value * amount, "#,#0") + " kubars. Nebbit wouldn't do this except that one of his clients is caught in a bind and cannot make it to " + UCase(game.planetNames[game.previousPlanet[game.currentPlayer]]) + " to sell the shares. Are you interested?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "nebbit.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                await spend((amount * value), -1);
                player.shareAvgCost[game.previousPlanet[game.currentPlayer]] = CLng(((player.shareAvgCost[game.previousPlanet[game.currentPlayer]] * player.shares[game.previousPlanet[game.currentPlayer]]) + (amount * value)) / (player.shares[game.previousPlanet[game.currentPlayer]] + value));
                player.shares[game.previousPlanet[game.currentPlayer]] = player.shares[game.previousPlanet[game.currentPlayer]] + value;
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1 && player.passengerCapacity > player.passengersAboard && game.tutorialMode == 0 || game.complexity >= game.unlockPassengers) {
            eventHappened = -1;
            amount = (player.passengerCapacity - player.passengersAboard) * 5000;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "tatilus.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Tatilus";
            frm_Box1Port.b_Message.Caption = "Tatilus, an emergency passenger broker, says that he has " + Format((player.passengerCapacity - player.passengersAboard), "#,#0") + " passengers desperate to get to " + UCase(game.planetNames[game.planet[game.currentPlayer]]) + " this week. If you'll take them onboard your ship, he'll pay you 5,000 kubars per passenger. Are you interested?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "tatilus.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                player.cash = player.cash + amount;
                player.passengersAboard = player.passengerCapacity;
            }
            await Unload(frm_Box1Port);
        }
        if (player.fuel > 1 && randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1 && game.tutorialMode == 0 || game.complexity >= game.unlockFuel) {
            eventHappened = -1;
            amount = CLng((player.fuel / 2) * 3500);
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "gurttle.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Gurttle";
            frm_Box1Port.b_Message.Caption = "Gurttle, a notorious fuel fiend, grabs onto your fuel tank and demands that you give him something to drink. Like all fuel fiends, Gurttle must consume copious amounts of oil in order to perform his bi-weekly mating rituals. Gurttle offers to pay you " + Format(amount, "#,#0") + " kubars if you'll allow him to gulp down half of the fuel presently in your tank. Your tank is currently " + Format(100 * player.fuel / player.fuelCapacity, "#,#0") + "% full. Do you accommodate Gurttle's biological needs?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "gurttle.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                player.cash = player.cash + amount;
                player.fuel = CLng(player.fuel / 2);
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1 && player.cargoTotal > 0) {
            eventHappened = -1;
            amount = 0;
            for (i = 0; i <= 2; i++) {
                for (j = 0; j <= 5; j++) {
                    amount = amount + (player.cargo[i][j] * player.cargoAvgCost[i][j]);
                }
            }
            if (amount == 0) {
                amount = player.cargoTotal * 300;
            }
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "lord.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Lord 104";
            frm_Box1Port.b_Message.Caption = "Lord 104, the 104th Prince of the Leaper Colony, is a wealthy and wild speculator. He gets a kick out of hopping from one galaxy to the next buying and selling anything he can get. Lord 104 offers to buy up all of your cargo for  " + Format(3 * amount, "#,#0") + " kubars, which is three times as much as you paid for it! Do you accept Lord 104's offer?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "lord.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                player.cash = player.cash + (amount * 3);
                player.cargoTotal = 0;
                for (i = 0; i <= 2; i++) {
                    for (j = 0; j <= 5; j++) {
                        player.cargo[i][j] = 0;
                        player.cargoAvgCost[i][j] = 0;
                    }
                }
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1 && player.cargoTotal < player.cargoCapacity && player.cargo[2][5] == 0) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "nectum.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Nectum";
            frm_Box1Port.b_Message.Caption = "Nectum, a foreign commodities wholesaler, offers to sell you " + Format(player.cargoCapacity - player.cargoTotal, "#,#0") + " tons of Exotic for only 100 kubars per ton. Nectum explains that his trip has been delayed 3 months, and if he doesn't sell the Exotic now, it will go bad before he returns home. Are you interested?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "nectum.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                await spend(100 * (player.cargoCapacity - player.cargoTotal), -1);
                player.cargo[2][5] = (player.cargoCapacity - player.cargoTotal);
                player.cargoAvgCost[2][5] = 100;
                player.cargoTotal = player.cargoCapacity;
            }
            await Unload(frm_Box1Port);
        }
        category = randomBetween(0, 2);
        item = randomBetween(0, 5);
        if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1 && player.cargoTotal > 0 && player.cargo[category][item] == 0) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "squowk.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Squowk";
            frm_Box1Port.b_Message.Caption = "Squowk, a migrating commodities merchant, offers to exchange all the cargo on your ship for " + Format(player.cargoCapacity, "#,#0") + " tons of " + Trim(game.commodityNames[category][item]) + ". Squowk says he has a surplus of " + Trim(game.commodityNames[category][item]) + " under his wings and can't wait to unload it. Are you interested in making a trade?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "squowk.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                for (i = 0; i <= 2; i++) {
                    for (j = 0; j <= 5; j++) {
                        player.cargo[i][j] = 0;
                        player.cargoAvgCost[i][j] = 0;
                    }
                }
                player.cargoTotal = player.cargoCapacity;
                player.cargo[category][item] = player.cargoCapacity;
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1 && player.cargoTotal > 0) {
            eventHappened = -1;
            amount = 0;
            for (i = 0; i <= 2; i++) {
                for (j = 0; j <= 5; j++) {
                    amount = amount + (player.cargo[i][j] * player.cargoAvgCost[i][j]);
                }
            }
            if (amount == 0) {
                amount = player.cargoTotal * 300;
            }
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "leahy.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Captain Leahy";
            frm_Box1Port.b_Message.Caption = "Captain Leahy, an ex-pirate turned respectable businessman, offers to buy all of your cargo for  " + Format(2 * amount, "#,#0") + " kubars, which is twice as much as you paid for it. He assures you this is entirely legal, and you will make a guaranteed profit. Do you accept Leahy's offer?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "leahy.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                player.cash = player.cash + (amount * 2);
                player.cargoTotal = 0;
                for (i = 0; i <= 2; i++) {
                    for (j = 0; j <= 5; j++) {
                        player.cargo[i][j] = 0;
                        player.cargoAvgCost[i][j] = 0;
                    }
                }
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "mulls.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Mulls";
            {
                const sel = randomBetween(1, 20);
                if (sel == 1) {
                    phrase = "Never invest in the stock market until you've paid off all your debts.";
                } else if (sel == 2) {
                    phrase = "Always try to fill up your ship's cargo bay. It's better to make a small profit than no profit at all.";
                } else if (sel == 3) {
                    phrase = "Always look for the commodities with the highest potential profit margin. Cheap goods usually don't pay enough to cover your expenses.";
                } else if (sel == 4) {
                    phrase = "Don't pay your crew until you absolutely have to. That same money could be in the bank earning interest.";
                } else if (sel == 5) {
                    phrase = "Don't pay your taxes until you absolutely have to. That same money could be in the bank earning interest.";
                } else if (sel == 6) {
                    phrase = "Only invest in stocks which are on an upward trend.";
                } else if (sel == 7) {
                    phrase = "Don't purchase a larger ship until you've paid off all of your debts.";
                } else if (sel == 8) {
                    phrase = "Don't buy facilities until you've paid off all of your debts.";
                } else if (sel == 9) {
                    phrase = "If Mr. Zinn or the Trader's Union offers to extend your credit limit, always say YES!";
                } else if (sel == 10) {
                    phrase = "Always obey the law.";
                } else if (sel == 11) {
                    phrase = "Make sure you have a faster engine than your competitors. Speed makes a difference.";
                } else if (sel == 12) {
                    phrase = "Don't use the warehouse until you've paid off all of your debts. Remember that goods sitting in the warehouse cost money, and you're paying interest on that money every turn.";
                } else if (sel == 13) {
                    phrase = "Always read the daily news and weather reports. If they predict trouble, buy insurance before travelling.";
                } else if (sel == 14) {
                    phrase = "Always try the planet specials. They tend to do more good than harm.";
                } else if (sel == 15) {
                    phrase = "Luck runs in streaks. If you're on a bad luck streak, make sure to buy insurance before travelling.";
                } else if (sel == 16) {
                    phrase = "Always fill up on fuel when the price is cheap.";
                } else if (sel == 17) {
                    phrase = "Make sure to raise your passenger ticket prices and advertise. The combination of high ticket prices and advertising can bring in more money.";
                } else if (sel == 18) {
                    phrase = "Never allow your crew to go on strike. When they demand to be paid, you'd better pay them.";
                } else if (sel == 19) {
                    phrase = "Mr. Zinn typically offers a better rate than the Trader's Union. If possible, don't pay off Mr. Zinn's loan until you've completely paid off your Trader's Union debt.";
                } else if (sel == 20) {
                    phrase = "Look to buy the commodities in the highest price range with the greatest room for profit. Remember, you have a limited cargo space, so you must maximize your profit potential.";
                }
            }
            frm_Box1Port.b_Message.Caption = "Mulls, a reclusive, retired business consultant, comes out of his shell to offer you a piece of free advice:" + "\n" + "\n" + "\"" + phrase + "\"";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "mulls.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
        }
        if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1) {
            eventHappened = -1;
            amount = (CLng(player.arrivalRoll) * CLng(game.weeklyRoll)) * 6;
            {
                const sel = ((Mod(player.arrivalRoll, 4)) + 1);
                if (sel == 1) {
                    phrase = "turbocharge your ship's engine";
                } else if (sel == 2) {
                    phrase = "expand your ship's cargo bay by 10 tons";
                } else if (sel == 3) {
                    phrase = "expand your ship's passenger capacity by 1 seat";
                } else if (sel == 4) {
                    phrase = "expand your ship's fuel tank capacity by 5 tons";
                }
            }
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "teeter.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Teeter";
            frm_Box1Port.b_Message.Caption = "You come across Teeter, a travelling repairman. Teeter says that he has the necessary parts to " + phrase + ". This will only cost you " + Format(amount, "#,#0") + " kubars. Are you interested?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "teeter.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                await spend(amount, -1);
                {
                    const sel = ((Mod(player.arrivalRoll, 4)) + 1);
                    if (sel == 1) {
                        game.engineSpeed[game.currentPlayer] = game.engineSpeed[game.currentPlayer] + 1;
                    } else if (sel == 2) {
                        player.cargoCapacity = player.cargoCapacity + 10;
                    } else if (sel == 3) {
                        player.passengerCapacity = player.passengerCapacity + 1;
                    } else if (sel == 4) {
                        player.fuelCapacity = player.fuelCapacity + 5;
                    }
                }
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x400000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "teeter.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Teeter";
                {
                    const sel = randomBetween(1, 3);
                    if (sel == 1) {
                        frm_Box1Port.b_Message.Caption = "Teeter may not look like a genius, but he manages to " + phrase + " in record time.";
                    } else if (sel == 2) {
                        frm_Box1Port.b_Message.Caption = "Teeter is brilliant! In no time, he manages to " + phrase + ".";
                    } else if (sel == 3) {
                        frm_Box1Port.b_Message.Caption = "Teeter is a genius! He manages to " + phrase + " without any trouble!";
                    }
                }
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "teeter2.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1 && player.crewSize > 2) {
            eventHappened = -1;
            amount = randomBetween(5, 25) * 1000;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "meeg.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Meeg";
            frm_Box1Port.b_Message.Caption = "You happen across Meeg, a true adolescent technoid who claims to know just about everything. Meeg offers to entirely re-program your ship's computers, which will allow you to replace one of your crew members with a fully automated system. The entire job will cost you " + Format(amount, "#,#0") + " kubars and may upset the labor union, but it could save you money in the long run. Are you interested?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "meeg.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                if (randomBetween(1, 2) == 1) {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0xC0;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "meeg.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Meeg";
                    frm_Box1Port.b_Message.Caption = "You should have known better than to let Meeg near your computers. He winds up crashing your entire system. Not only does this delay your trip, but the only way to get the system back up and running is to purchase an entirely new motherboard. Obviously, Meeg doesn't charge you for his time, but the parts alone wind up costing you a total of " + Format(2 * amount, "#,#0") + " kubars!";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "bad2.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                    game.travelDelay[game.currentPlayer] = game.travelDelay[game.currentPlayer] + 1;
                    player.luck = 45;
                    await spend(2 * amount, -1);
                    if (player.insured == -1) {
                        frm_Box1Port.b_Yes.Visible = 0;
                        frm_Box1Port.b_No.Visible = 0;
                        frm_Box1Port.b_OK.Visible = -1;
                        frm_Box1Port.b_Container.BackColor = 0x4000;
                        frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                        frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                        frm_Box1Port.b_Message.Caption = "Sorry, but your insurance does not cover self-inflicted computer crashes.";
                        if (settings.soundOn == -1) {
                            frm_Box1Port.b_Sound.Command = "Close";
                            frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                            frm_Box1Port.b_Sound.Command = "Open";
                            frm_Box1Port.b_Sound.Command = "Play";
                        }
                        await frm_Box1Port.Show(1);
                    }
                } else {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0x400000;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "meeg.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Meeg";
                    frm_Box1Port.b_Message.Caption = "Meeg is successful! He manages to re-program your system so that you can now eliminate one of your crew members from your payroll. To say the least, the Labor Union is not happy with this development.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "good5.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                    player.crewSize = player.crewSize - 1;
                    await spend(amount, -1);
                }
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1) {
            eventHappened = -1;
            amount = randomBetween(15, 50) * (game.shipSize[game.currentPlayer]);
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "spike.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Spike";
            frm_Box1Port.b_Message.Caption = "You happen across Spike the Space Mutt. Spike hops on board your ship and makes himself at home. You have a choice. Either you can adopt this stray dog, or you can leave him on his asteroid. Do you adopt Spike?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "spike.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0xC0;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "spike.bmp");
                frm_Box1Port.b_ImageLable.Caption = "Spike";
                frm_Box1Port.b_Message.Caption = "Spike the Space Mutt turns out to be a real pain in the neck. He runs wild on your ship, harassing your passengers, chewing holes in your new seats, tearing apart your wiring, and relieving himself on your bed. You finally end up dumping Spike on a passing asteroid, but not before he inflicts " + Format(amount, "#,#0") + " kubars worth of damage on your ship.";
                await spend(amount, -1);
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "spike2.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                if (player.insured == -1) {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0x4000;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                    frm_Box1Port.b_Message.Caption = "Sorry, but your insurance does not cover household pets.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                }
                game.travelDelay[game.currentPlayer] = game.travelDelay[game.currentPlayer] + 1;
                player.luck = 45;
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1 && player.crewSalary >= 1500 && game.tutorialMode == 0 || game.complexity >= game.unlockCrew) {
            eventHappened = -1;
            amount = randomBetween(15, 50) * (game.shipSize[game.currentPlayer]);
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "nibble.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Nibble";
            frm_Box1Port.b_Message.Caption = "Nibble, a professional bully, offers to intimidate your crew into lowering their salary. He assures you this union busting tactic works every time. Nibble promises to do the job for only " + Format(amount, "#,#0") + " kubars. How about it?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "nibble.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                await spend(amount, -1);
                if (randomBetween(1, 5) == 1) {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0xC0;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "nibble.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Nibble";
                    if (player.wagesOwed > 0) {
                        frm_Box1Port.b_Message.Caption = "Nibble's harassment and bullying backfires, and your crew becomes so infuriated with these underhanded tactics that they go on strike! They demand that you raise their weekly salary or they won't come back." + "\n" + "\n" + "To settle this strike, you are forced to get rid of Nibble, pay your crew " + Format(player.wagesOwed, "#,#0") + " kubars in back wages, and raise your crew's weekly salary by 100 kubars per person.";
                    } else {
                        frm_Box1Port.b_Message.Caption = "Nibble's harassment and bullying backfires, and your crew becomes so infuriated with these underhanded tactics that they go on strike! They demand that you raise their weekly salary or they won't come back." + "\n" + "\n" + "To settle this strike, you are forced to get rid of Nibble and raise your crew's weekly salary by 100 kubars per person.";
                    }
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "bad.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                    await spend(player.wagesOwed, -1);
                    player.wagesOwed = 0;
                    player.crewSalary = player.crewSalary + 100;
                    player.luck = 45;
                } else {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0x400000;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "nibble.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Nibble";
                    frm_Box1Port.b_Message.Caption = "Nibble's intimidation tactics pay off. He manages to break up the union and scare your crew into lowering their salary by 100 kubars per person each week. This, however, does not leave your crew feeling too good about their working environment.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "nibble2.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                    player.crewSalary = player.crewSalary - 100;
                }
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1) {
            eventHappened = -1;
            amount = randomBetween(25, 125) * (game.shipSize[game.currentPlayer]);
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "speevak.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Speevak";
            frm_Box1Port.b_Message.Caption = "Speevak, a distraught pregnant space fly, offers to pay you " + Format(amount, "#,#0") + " kubars if you will empty your ship's septic tanks onto her asteroid. The waste is perfect for breeding baby flies, and she promises to clean up afterwards. Do you agree?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "speevak.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                player.cash = player.cash + amount;
                if (randomBetween(1, 4) == 1) {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0xC0;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "police.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Sanitation Police";
                    frm_Box1Port.b_Message.Caption = "When the sanitation police learn what you have done, they immediately fine you " + Format(2 * amount, "#,#0") + " kubars for illegal waste disposal. They warn you that if they catch you doing this again, they may have to remove all the toilets from your ship.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "police.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                    await spend(amount * 2, -1);
                    if (player.insured == -1) {
                        frm_Box1Port.b_Yes.Visible = 0;
                        frm_Box1Port.b_No.Visible = 0;
                        frm_Box1Port.b_OK.Visible = -1;
                        frm_Box1Port.b_Container.BackColor = 0x4000;
                        frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
                        frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
                        frm_Box1Port.b_Message.Caption = "Sorry, but your insurance does not cover illegal waste disposal.";
                        if (settings.soundOn == -1) {
                            frm_Box1Port.b_Sound.Command = "Close";
                            frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                            frm_Box1Port.b_Sound.Command = "Open";
                            frm_Box1Port.b_Sound.Command = "Play";
                        }
                        await frm_Box1Port.Show(1);
                    }
                    game.travelDelay[game.currentPlayer] = game.travelDelay[game.currentPlayer] + 1;
                    player.luck = 45;
                }
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "hapa.bmp");
            frm_Box1Port.b_ImageLable.Caption = "A Hapa Jillo Mafioso";
            value = randomBetween(20, 70) * game.shipSize[game.currentPlayer];
            frm_Box1Port.b_Message.Caption = "The Hapa Jillo Crime Syndicate approaches you with a devious proposal. They are willing to make life extremely difficult for your competitors if you pay them " + Format(value, "#,#0") + " kubars. Do you want to accept this evil offer?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "hapa.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                await spend(value, -1);
                if (randomBetween(1, 5) == 1) {
                    amount = value * 4;
                    await Load(frm_Box1Port);
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0xC0;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "POLICE.BMP");
                    frm_Box1Port.b_ImageLable.Caption = "Imperial Police";
                    frm_Box1Port.b_Message.Caption = "Little did you know, the Imperial Police discover this evil scheme before it can be hatched. You are indicted on charges of conspiring to ruin your competitors, fined " + Format(amount, "#,#0") + " kubars, and warned that if you break the law again you could wind up in jail.";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "police.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                    await spend(amount, -1);
                    game.travelDelay[game.currentPlayer] = game.travelDelay[game.currentPlayer] + 1;
                    player.luck = 45;
                } else {
                    for (i = 1; i <= game.numRivals; i++) {
                        amount = randomBetween(value, 4 * value);
                        rivals.cash[i] = rivals.cash[i] - amount;
                        frm_Box1Rect.b_Yes.Visible = 0;
                        frm_Box1Rect.b_No.Visible = 0;
                        frm_Box1Rect.b_OK.Visible = -1;
                        frm_Box1Rect.b_Container.BackColor = 0x400000;
                        frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "op" + Trim(Str((i))) + ".bmp");
                        frm_Box1Rect.b_ImageLable.Caption = Trim(rivals.companyNames[i]);
                        {
                            const sel = randomBetween(1, 6);
                            if (sel == 1) {
                                frm_Box1Rect.b_Message.Caption = "A gang of Hapa Jillo street thugs vandalize " + Trim(rivals.companyNames[i]) + ", causing " + Format(amount, "#,#0") + " kubars worth of damage.";
                            } else if (sel == 2) {
                                frm_Box1Rect.b_Message.Caption = "A Hapa Jillo banker tricks " + Trim(rivals.companyNames[i]) + " into investing in a dubious stock fund. This winds up costing the company " + Format(amount, "#,#0") + " kubars.";
                            } else if (sel == 3) {
                                frm_Box1Rect.b_Message.Caption = "A Hapa Jillo cruiser attacks " + Trim(rivals.companyNames[i]) + " and steals a ship load of cargo, worth " + Format(amount, "#,#0") + " kubars.";
                            } else if (sel == 4) {
                                frm_Box1Rect.b_Message.Caption = "A remote control droid sent from the Hapa Jillo empire intercepts " + Trim(rivals.companyNames[i]) + " and explodes, causing " + Format(amount, "#,#0") + " kubars worth of damage.";
                            } else if (sel == 5) {
                                frm_Box1Rect.b_Message.Caption = "A group of Hapa Jillos attack " + Trim(rivals.companyNames[i]) + "'s warehouse on " + game.planetNames[randomBetween(0, LAST_PLANET)] + ", causing " + Format(amount, "#,#0") + " kubars worth of damage.";
                            } else if (sel == 6) {
                                frm_Box1Rect.b_Message.Caption = Trim(rivals.companyNames[i]) + " loses " + Format(amount, "#,#0") + " kubars when a corrupt Hapa Jillo merchant sells the company defective goods.";
                            }
                        }
                        if (settings.soundOn == -1) {
                            b_Sound.Command = "Close";
                            frm_Box1Rect.b_Sound.Command = "Close";
                            frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "op" + Trim(Str(i)) + ".wav";
                            frm_Box1Rect.b_Sound.Command = "Open";
                            frm_Box1Rect.b_Sound.Command = "Play";
                        }
                        await frm_Box1Rect.Show(1);
                    }
                    storePlayer(game.currentPlayer);
                    category = game.currentPlayer;
                    for (i = 1; i <= game.numPlayers; i++) {
                        if (i != category && game.graphShowCompany[i] == 0) {
                            amount = randomBetween(value, 4 * value);
                            frm_Box1Rect.b_Yes.Visible = 0;
                            frm_Box1Rect.b_No.Visible = 0;
                            frm_Box1Rect.b_OK.Visible = -1;
                            frm_Box1Rect.b_Container.BackColor = 0x400000;
                            frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[i])) + ".bmp");
                            frm_Box1Rect.b_ImageLable.Caption = Trim(game.companyNames[i]);
                            {
                                const sel = randomBetween(1, 6);
                                if (sel == 1) {
                                    frm_Box1Rect.b_Message.Caption = "A mob of Hapa Jillos attacks " + Trim(game.companyNames[i]) + ". Several of the crew members wind up in the hospital, and this costs the company " + Format(amount, "#,#0") + " kubars.";
                                } else if (sel == 2) {
                                    frm_Box1Rect.b_Message.Caption = Trim(game.companyNames[i]) + " discovers that its fuel has been tampered with. This ends up ruining the engine and costs the company " + Format(amount, "#,#0") + " kubars to repair.";
                                } else if (sel == 3) {
                                    frm_Box1Rect.b_Message.Caption = "A scandal breaks out when " + Trim(game.companyNames[i]) + " is accused of hiring illegal Hapa Jillo employees. The company winds up paying " + Format(amount, "#,#0") + " kubars in legal fees to clear up this messy situation.";
                                } else if (sel == 4) {
                                    frm_Box1Rect.b_Message.Caption = "A passenger flying with " + Trim(game.companyNames[i]) + " becomes ill and is rushed to the hospital. The company ends up paying " + Format(amount, "#,#0") + " kubars to the passenger to avoid a costly law suit.";
                                } else if (sel == 5) {
                                    frm_Box1Rect.b_Message.Caption = "A Hapa Jillo battle ship attacks " + Trim(game.companyNames[i]) + ". Fortunately, " + Trim(game.companyNames[i]) + " escapes, but not without sustaining " + Format(amount, "#,#0") + " kubars in damage.";
                                } else if (sel == 6) {
                                    frm_Box1Rect.b_Message.Caption = Trim(game.companyNames[i]) + " is sued by the Hapa Jillo Merchant's Association for unfair trade practices. Although a court finds " + Trim(game.companyNames[i]) + " innocent, the company still winds up paying " + Format(amount, "#,#0") + " kubars in legal fees.";
                                }
                            }
                            if (settings.soundOn == -1) {
                                b_Sound.Command = "Close";
                                frm_Box1Rect.b_Sound.Command = "Close";
                                if (game.shipType[i] <= 6) {
                                    frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[i])) + ".wav";
                                } else {
                                    frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[i] - 6)) + ".wav";
                                }
                                frm_Box1Rect.b_Sound.Command = "Open";
                                frm_Box1Rect.b_Sound.Command = "Play";
                            }
                            await frm_Box1Rect.Show(1);
                            loadPlayer(i);
                            await spend(amount, 0);
                            storePlayer(i);
                        }
                    }
                    loadPlayer(category);
                }
            }
            await Unload(frm_Box1Port);
        }
        if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1) {
            eventHappened = -1;
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "PILOT.BMP");
            frm_Box1Port.b_ImageLable.Caption = "Ship's Pilot";
            frm_Box1Port.b_Message.Caption = "Because of some skillful maneuvering on the part of your pilot, it will take you considerably less time than expected to reach your destination planet.";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "pilot.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            game.travelDelay[game.currentPlayer] = game.travelDelay[game.currentPlayer] / 2;
        } else if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1) {
            eventHappened = -1;
            amount = randomBetween(25, 125) * (game.shipSize[game.currentPlayer]);
            do {
                value = randomBetween(0, LAST_PLANET);
            } while (value == game.planet[game.currentPlayer] || value == game.previousPlanet[game.currentPlayer]);
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "snoz.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Snoz Lombardo";
            frm_Box1Port.b_Message.Caption = "Snoz Lombardo, a less than acclaimed lounge singer, stops your ship. He says that he has just landed a contract at a hot lounge on " + UCase(game.planetNames[value]) + ". He's willing to pay you " + Format(amount, "#,#0") + " kubars if you take him there right away. How about it?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "snoz.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                player.cash = player.cash + amount;
                game.planet[game.currentPlayer] = value;
            }
            await Unload(frm_Box1Port);
        } else if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1) {
            eventHappened = -1;
            amount = randomBetween(100, 150) * (game.shipSize[game.currentPlayer]);
            do {
                value = randomBetween(0, LAST_PLANET);
            } while (value == game.planet[game.currentPlayer] || value == game.previousPlanet[game.currentPlayer]);
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "shimmer.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Lady Shimmer";
            frm_Box1Port.b_Message.Caption = "Lady Shimmer, an ex-politician turned night club dancer, waves down your ship. She explains that her vessel ran out of gas, and she desperately needs a lift to " + UCase(game.planetNames[value]) + ", where she's supposed to give a performance for the Emperor himself. If you take her there right away, she promises to make it well worth your while. Do you give Shimmer a lift to " + UCase(game.planetNames[value]) + "?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "shimmer.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                game.planet[game.currentPlayer] = value;
                if (randomBetween(1, 4) != 1) {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0x400000;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "shimmer.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Lady Shimmer";
                    frm_Box1Port.b_Message.Caption = "You are well on your way to " + UCase(game.planetNames[value]) + " when another ship comes out to greet Lady Shimmer. Delighted, Lady Shimmer gives you a juicy kiss on the cheek, hands you two free passes to her night club act, then hops on the ship. You watch speechless, as Lady Shimmer waves good-bye from the departing spacecraft. Was it really worth it?";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "shimmer2.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                } else {
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0x400000;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "dred.bmp");
                    frm_Box1Port.b_ImageLable.Caption = "Emperor Dred";
                    frm_Box1Port.b_Message.Caption = "You are well on your way to " + UCase(game.planetNames[value]) + " when another ship comes out to greet Lady Shimmer. It is none other than Emperor Dred Nicolson himself. The Emperor greets you and thanks you for going to all the trouble. As compensation, he hands you a gold medallion worth " + Format(amount, "#,#0") + " kubars!";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "dred.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                    player.cash = player.cash + amount;
                }
            }
            await Unload(frm_Box1Port);
        } else if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1) {
            eventHappened = -1;
            do {
                value = randomBetween(0, LAST_PLANET);
            } while (value == game.planet[game.currentPlayer] || value == game.previousPlanet[game.currentPlayer]);
            amount = randomBetween(25, 125) * (game.shipSize[game.currentPlayer]);
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "teal.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Teal";
            frm_Box1Port.b_Message.Caption = "You discover Teal, a lonely space oak, growing on an asteroid. Teal begs you to take her to planet " + UCase(game.planetNames[value]) + ", so she can be reunited with her grove. It's been years since she was uprooted, and she is desperate to get back to her native soil. Do you take Teal to " + UCase(game.planetNames[value]) + "?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "teal.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                game.planet[game.currentPlayer] = value;
                frm_Box1Port.b_Yes.Visible = 0;
                frm_Box1Port.b_No.Visible = 0;
                frm_Box1Port.b_OK.Visible = -1;
                frm_Box1Port.b_Container.BackColor = 0x400000;
                frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "money.wmf");
                frm_Box1Port.b_ImageLable.Caption = "Teal's Gift";
                frm_Box1Port.b_Message.Caption = "Teal is so thankful that you are taking her to " + UCase(game.planetNames[value]) + " to be reunited with her grove that she offers to pay you " + Format(amount, "#,#0") + " kubars for your trouble. She insists that you are the kindest person in the galaxy. She knows the money isn't enough, but it's all she has, and she hopes it will do.";
                if (settings.soundOn == -1) {
                    frm_Box1Port.b_Sound.Command = "Close";
                    frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "good4.wav";
                    frm_Box1Port.b_Sound.Command = "Open";
                    frm_Box1Port.b_Sound.Command = "Play";
                }
                await frm_Box1Port.Show(1);
                player.cash = player.cash + amount;
            }
            await Unload(frm_Box1Port);
        } else if (randomBetween(1, ODDS_ENCOUNTER_EVENT) == 1) {
            eventHappened = -1;
            amount = randomBetween(25, 75) * (game.shipSize[game.currentPlayer]);
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x400000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "stubbs.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Stubbs";
            frm_Box1Port.b_Message.Caption = "Stubbs, a crazed water junkie, offers to pay you " + Format(amount, "#,#0") + " kubars for all of the water on your ship. You should realize that this will mean your passengers and crew cannot have a drink nor take a bath until they reach the next planet. If you're lucky, this shouldn't cause any serious problems, but you can't be sure about that. Do you want to take this chance?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "stubbs.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                player.cash = player.cash + amount;
                if (randomBetween(1, 4) == 1) {
                    do {
                        value = randomBetween(0, LAST_PLANET);
                    } while (value == game.planet[game.currentPlayer] || value == game.previousPlanet[game.currentPlayer]);
                    frm_Box1Port.b_Yes.Visible = 0;
                    frm_Box1Port.b_No.Visible = 0;
                    frm_Box1Port.b_OK.Visible = -1;
                    frm_Box1Port.b_Container.BackColor = 0xC0;
                    frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "PILOT.BMP");
                    frm_Box1Port.b_ImageLable.Caption = "Ship's Pilot";
                    frm_Box1Port.b_Message.Caption = "Due to a lack of water, several passengers start raising a fuss, your crew nearly mutinies, and everyone stinks. To make matters worse, your pilot becomes so dehydrated that he performs a serious navigation error. Fortunately, nobody dies. However, your ship somehow winds up travelling to " + UCase(game.planetNames[value]) + " instead of " + UCase(game.planetNames[game.planet[game.currentPlayer]]) + ".";
                    if (settings.soundOn == -1) {
                        frm_Box1Port.b_Sound.Command = "Close";
                        frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "pilot.wav";
                        frm_Box1Port.b_Sound.Command = "Open";
                        frm_Box1Port.b_Sound.Command = "Play";
                    }
                    await frm_Box1Port.Show(1);
                    game.planet[game.currentPlayer] = value;
                    game.travelDelay[game.currentPlayer] = game.travelDelay[game.currentPlayer] + 1;
                    player.luck = 45;
                }
            }
            await Unload(frm_Box1Port);
        }
        if (eventHappened == -1) {
            player.luck = player.luck + 5;
            if (player.luck > 85) {
                player.luck = 85;
            }
            if (player.luckIsTemporary == 0) {
                player.luck = 50;
            }
            player.luckIsTemporary = -1;
        }
    }

    async function processTravelTurn() {
        let i = 0;
        let j = 0;
        let temp = 0;
        let sizeFuelBurn = 0;
        const stayed = game.planet[game.currentPlayer] == game.previousPlanet[game.currentPlayer];
        try {
            player.arrivalRoll = randomBetween(1, 100);
            game.planetSupplyBoost[game.planet[game.currentPlayer]] = CLng(game.planetSupplyBoost[game.planet[game.currentPlayer]] + (player.commodityAdSpend / 50));
            if ((player.cargoCapacity - 100) > 0) {
                game.planetSupplyBoost[game.planet[game.currentPlayer]] = game.planetSupplyBoost[game.planet[game.currentPlayer]] + (player.cargoCapacity - 100);
            }
            game.year = CInt(game.year + (game.turn / 50));
            game.weeklySales = 0;
            game.weeklyProfit = 0;
            player.specialDone = 0;
            if (game.tutorialMode == 0 || game.complexity >= game.unlockLoan) {
                player.loanInterest = CLng(player.loan * player.loanRate);
                player.loan = player.loan + player.loanInterest;
            }
            if (game.tutorialMode == 0 || game.complexity >= game.unlockBank) {
                player.bankInterest = CLng(player.bankBalance * player.bankRate);
                player.bankBalance = player.bankBalance + player.bankInterest;
            }
            if (game.tutorialMode == 0 || game.complexity >= game.unlockZinnLoan) {
                player.zinnInterest = CLng(player.zinnLoan * player.zinnRate);
                player.zinnLoan = player.zinnLoan + player.zinnInterest;
            }
            if (game.tutorialMode == 0 || game.complexity >= game.unlockCrew) {
                player.wagesOwed = player.wagesOwed + (player.crewSalary * CLng(player.crewSize));
            }
            if (!stayed && (game.turn > 3 && game.tutorialMode == 0 || game.complexity >= game.unlockLoan)) {
                await rollTravelEvents();
            }
            if (!stayed && (game.tutorialMode == 0 || game.complexity >= game.unlockFuel)) {
                temp = CLng(Sqr(((game.planetX[game.planet[game.currentPlayer]] - game.planetX[game.previousPlanet[game.currentPlayer]])) ** (2) + ((game.planetY[game.planet[game.currentPlayer]] - game.planetY[game.previousPlanet[game.currentPlayer]])) ** (2)));
                temp = CLng(temp / 2);
                sizeFuelBurn = CLng(game.shipSize[game.currentPlayer] / 100);
                player.fuel = player.fuel - randomBetween(1, temp) - randomBetween(1, sizeFuelBurn);
            }
            if (game.tutorialMode == 0 || game.complexity >= game.unlockCrew) {
                if (player.wagesOwed >= CLng(player.crewSize) * player.crewSalary * 5) {
                    temp = randomBetween(1, 3);
                    if (temp == 1) {
                        await crewGoesOnStrike();
                    }
                }
            }
            if (game.tutorialMode == 0 || game.complexity >= game.unlockFuel) {
                if (player.fuel < 0) {
                    await runOutOfFuel();
                }
            }
            if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes) {
                if ((player.tariffsOwed + player.passengerTaxOwed) >= (35 * game.shipSize[game.currentPlayer])) {
                    temp = randomBetween(1, 3);
                    if (temp == 1) {
                        await auditTaxes();
                    }
                }
                for (i = 0; i <= 2; i++) {
                    for (j = 0; j <= 5; j++) {
                        player.tariffsOwed = CLng(player.tariffsOwed + (player.cargo[i][j] * game.prices[game.previousPlanet[game.currentPlayer]][i][j] * game.exportTariff));
                    }
                }
            }
            if (game.tutorialMode == 0 || game.complexity >= game.unlockInsurance) {
                temp = player.insuranceRate * 1000;
                player.insuranceCost = randomBetween(player.insuranceRate, temp);
            }
            if (stayed) {
                player.passengersBoarded = 0;
                player.passengersWaiting = 0;
                player.passengersAboard = 0;
            } else if (game.tutorialMode == 0 || game.complexity >= game.unlockPassengers) {
                generatePassengers();
            }
            if (game.tutorialMode == 0 || game.complexity >= game.unlockInsurance) {
                player.insured = 0;
            }
            if (game.tutorialMode == 0 || game.complexity >= game.unlockAdvertising) {
                player.adSpendTotal = 0;
                player.passengerAdSpend = 0;
                player.commodityAdSpend = 0;
                player.adExtraPassengers = 0;
            }
            temp = 0;
            for (i = 0; i <= LAST_PLANET; i++) {
                if (game.turn <= 15) {
                    temp = temp + player.shares[i] * game.stockPrices[i][game.turn];
                } else {
                    temp = temp + player.shares[i] * game.stockPrices[i][15];
                }
            }
            if (game.graphShowCompany[game.currentPlayer] == 0) {
                game.netWorth[game.currentPlayer] = temp + player.cash + player.bankBalance - player.loan - player.zinnLoan;
            } else {
                game.netWorth[game.currentPlayer] = 0;
            }
            game.turnDone[game.currentPlayer] = -1;
            storePlayer(game.currentPlayer);
            temp = game.turnOrder[game.turnOrderPos];
            do {
                if (game.turnOrderPos < game.numPlayers) {
                    temp = game.turnOrder[game.turnOrderPos + 1];
                    if (game.graphShowCompany[temp] == -1) {
                        game.turnOrderPos = game.turnOrderPos + 1;
                    }
                }
            } while (game.graphShowCompany[temp] == -1 && game.turnOrderPos < game.numPlayers);
            return;
        } catch (e) {
            Err.Catch(e);
            await reportFileError(Err.Number);
            return;
        }
    }

    async function rollTravelEvents() {
        let spiritPlanet = 0;
        spiritPlanet = randomBetween(0, LAST_PLANET);
        if (randomBetween(1, 40) == 1 && game.planet[game.currentPlayer] != spiritPlanet) {
            frm_Box1Port.b_Yes.Visible = -1;
            frm_Box1Port.b_No.Visible = -1;
            frm_Box1Port.b_OK.Visible = 0;
            frm_Box1Port.b_Container.BackColor = 0x4000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "QUASO.BMP");
            frm_Box1Port.b_ImageLable.Caption = "Quaso Mutta";
            frm_Box1Port.b_Message.Caption = "The ghost like spirit of the venerated Quaso Mutta appears before you. The spirit warns you not to travel to " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + " or your luck will change for the worse. Instead, you should travel to " + game.planetNames[spiritPlanet] + " immediately. Do you take this advice and travel to " + game.planetNames[spiritPlanet] + "?";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "blessing.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
            if (frm_Box1Port.Tag == "YES") {
                await Unload(frm_Box1Port);
                player.luck = 85;
                player.luckIsTemporary = -1;
                game.planet[game.currentPlayer] = spiritPlanet;
                player.adExtraPassengers = 0;
                generatePassengers();
                await rollGoodTravelEvents();
            } else {
                await Unload(frm_Box1Port);
                player.luck = 15;
                player.luckIsTemporary = 0;
                await rollBadTravelEvents();
            }
        } else {
            if (randomBetween(1, 100) <= player.luck) {
                await rollGoodTravelEvents();
            } else {
                await rollBadTravelEvents();
            }
            if (game.skillLevel == 1 && player.luck < 45) {
                player.luck = 45;
            }
            if (game.skillLevel == 2 && player.luck < 35) {
                player.luck = 35;
            }
        }
    }

    async function auditTaxes() {
        await Load(frm_Box1Rect);
        frm_Box1Rect.b_Yes.Visible = 0;
        frm_Box1Rect.b_No.Visible = 0;
        frm_Box1Rect.b_OK.Visible = -1;
        frm_Box1Rect.b_Container.BackColor = 0xC0;
        frm_Box1Rect.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "TAX.BMP");
        frm_Box1Rect.b_ImageLable.Caption = "Your Friendly Tax Auditor";
        frm_Box1Rect.b_Message.Caption = "The Imperial Government audits your company. You must pay " + Format(player.passengerTaxOwed + player.tariffsOwed, "#,#0") + " kubars in back taxes plus a fine of " + Format((player.passengerTaxOwed + player.tariffsOwed) * 2, "#,#0") + " kubars for not paying your taxes on time.";
        if (settings.soundOn == -1) {
            frm_Box1Rect.b_Sound.Command = "Close";
            frm_Box1Rect.b_Sound.FileName = Trim(paths.soundDir) + "tax.wav";
            frm_Box1Rect.b_Sound.Command = "Open";
            frm_Box1Rect.b_Sound.Command = "Play";
        }
        await frm_Box1Rect.Show(1);
        await spend((player.passengerTaxOwed + player.tariffsOwed) * 3, -1);
        player.passengerTaxOwed = 0;
        player.tariffsOwed = 0;
        if (player.insured == -1) {
            await Load(frm_Box1Port);
            frm_Box1Port.b_Yes.Visible = 0;
            frm_Box1Port.b_No.Visible = 0;
            frm_Box1Port.b_OK.Visible = -1;
            frm_Box1Port.b_Container.BackColor = 0x4000;
            frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "insure.bmp");
            frm_Box1Port.b_ImageLable.Caption = "Your Insurance Agent";
            frm_Box1Port.b_Message.Caption = "Sorry, but Voyager's Insurance does not cover this. It is your responsibility to pay your taxes.";
            if (settings.soundOn == -1) {
                frm_Box1Port.b_Sound.Command = "Close";
                frm_Box1Port.b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                frm_Box1Port.b_Sound.Command = "Open";
                frm_Box1Port.b_Sound.Command = "Play";
            }
            await frm_Box1Port.Show(1);
        }
        player.luck = player.luck - 5;
        if (player.luck < 15) {
            player.luck = 15;
        }
        if (player.luckIsTemporary == -1) {
            player.luck = 50;
        }
        player.luckIsTemporary = 0;
    }

    async function Form_Activate() {
        me.MousePointer = ICON_CURSOR;
        await Unload(me);
    }

    async function Form_Load() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        await processTravelTurn();
        me.MousePointer = ICON_CURSOR;
        await Load(frm_Travel3);
        await frm_Travel3.Show();
    }

    return {
        rollBadTravelEvents, crewGoesOnStrike, runOutOfFuel, rollGoodTravelEvents,
        rollTravelEncounters, processTravelTurn, rollTravelEvents, auditTaxes,
        Form_Activate, Form_Load,
    };
});
