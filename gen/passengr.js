// Originally translated from src/PASSENGR.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Passengers",
  ["Form", "frm_Passengers", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Passenger", "BackColor": 0, "Left": 3405, "Top": 2040, "Width": 5040, "Height": 4875, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 3405, "ClientTop": 2040, "ClientWidth": 5040, "ClientHeight": 4875}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "ForeColor": 16711680, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodDirection": 1, "FloodColor": 8421376, "IntBkg": 16744576}, [
      ["MMControl", "b_Sound", {"Left": 1740, "Top": -60, "Width": 3540, "Height": 330, "TabIndex": 15, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic4", {"BackColor": 12632256, "Left": 255, "Top": 1680, "Width": 4395, "Height": 3285, "TabIndex": 13, "AutoSizeChildren": 1, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 15}, [
        ["VideoSoftElastic", "b_PictureBox", {"BackColor": 0, "Left": 225, "Top": 225, "Width": 3945, "Height": 2835, "TabIndex": 14, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "CaptionPos": 6, "IntBkg": 0}, [
          ["Image", "shipImage", {"Left": 60, "Top": 75, "Width": 3825, "Height": 2685, "Stretch": -1}]
        ]]
      ]],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 16744576, "Left": 4860, "Top": 1680, "Width": 4620, "Height": 3465, "TabIndex": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 7, "BevelOuter": 0, "BevelInnerWidth": 10, "BevelOuterWidth": 0, "ShadowColor": 8388608, "IntBkg": 16744576}, [
        ["VideoSoftElastic", "b_PassengersWaiting", {"BackColor": 16776960, "Left": 0, "Top": 2385, "Width": 4275, "Height": 735, "TabIndex": 8, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "      Passengers Waiting:  123", "IntBkg": 16776960}, [
          ["Image", "image1", {"Left": 3570, "Top": 90, "Width": 540, "Height": 585, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_PassengerProfit", {"BackColor": 16777088, "Left": 0, "Top": 1185, "Width": 4275, "Height": 765, "TabIndex": 7, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "     Profit this Week:  10,000", "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_profitPerPassenger", {"BackColor": 16777088, "Left": 0, "Top": 0, "Width": 4275, "Height": 780, "TabIndex": 6, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "     Ticket Price this Week:  10,000", "ShadowColor": 4194368, "IntBkg": 16777088}]
      ]],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 16744576, "Left": 120, "Top": 5325, "Width": 9360, "Height": 1500, "TabIndex": 4, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16744576}, [
        ["VideoSoftElastic", "b_Help1", {"BackColor": 12632256, "ForeColor": 128, "Left": 7020, "Top": 0, "Width": 2340, "Height": 1500, "TabIndex": 12, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 8, "FloodColor": 0, "FloodPercent": 100, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 8388608}, [
          ["Image", "b_Help2", {"Picture": {"frx": "frx/PASSENGR/b_Help2.Picture.ico"}, "Left": 450, "Top": 360, "Width": 405, "Height": 780, "Stretch": -1}],
          ["Image", "b_Help3", {"Picture": {"frx": "frx/PASSENGR/b_Help3.Picture.ico"}, "Left": 1485, "Top": 360, "Width": 405, "Height": 780, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_SetTicketPrice", {"BackColor": 12632256, "Left": 4680, "Top": 0, "Width": 2340, "Height": 1500, "TabIndex": 11, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 8, "FloodDirection": 1, "FloodColor": 12632256, "Caption": "Set TICKET PRICE for next planet at 1,000 kubars.", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 4210752}],
        ["VideoSoftElastic", "b_PickUpPassengers", {"BackColor": 12632256, "Left": 2340, "Top": 0, "Width": 2340, "Height": 1500, "TabIndex": 10, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 8, "FloodDirection": 1, "FloodColor": 12632256, "Caption": "Pick Up Passengers", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 4210752}],
        ["VideoSoftElastic", "b_ExitPassengers", {"BackColor": 12632256, "ForeColor": 8388608, "Left": 0, "Top": 0, "Width": 2340, "Height": 1500, "TabIndex": 9, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 8, "FloodDirection": 4, "FloodColor": 65535, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 4210752}]
      ]],
      ["VideoSoftElastic", "VSElastic6", {"BackColor": 4210752, "ForeColor": 16777215, "Left": 225, "Top": 240, "Width": 9225, "Height": 1065, "TabIndex": 2, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "CaptionPos": 0, "IntBkg": 4210752}, [
        ["VideoSoftElastic", "b_PassengerGauge", {"BackColor": 12632256, "ForeColor": 16777215, "Left": 1365, "Top": 210, "Width": 7695, "Height": 690, "TabIndex": 1, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "FloodDirection": 1, "FloodColor": 16711680, "FloodPercent": 80, "Caption": "Passengers on Ship:  123", "CaptionPos": 4, "ShadowColor": 255}, [
          ["Image", "image2", {"Left": 7155, "Top": 90, "Width": 480, "Height": 525, "Stretch": -1}]
        ]],
        ["Label", "b_PassengerCapacity", {"Caption": "Passenger Capacity:  1,000", "BackColor": 16777215, "ForeColor": 16777215, "Left": 150, "Top": 150, "Width": 1170, "Height": 750, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 3, "Alignment": 2, "BackStyle": 0}]
      ]]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, VSElastic4, b_PictureBox, shipImage, VSElastic2, b_PassengersWaiting, image1 } = me.controls;
    const { b_PassengerProfit, b_profitPerPassenger, VSElastic3, b_Help1, b_Help2, b_Help3, b_SetTicketPrice, b_PickUpPassengers } = me.controls;
    const { b_ExitPassengers, VSElastic6, b_PassengerGauge, image2, b_PassengerCapacity } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;

    async function b_ExitPassengers_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_ExitPassengers_MouseDown(Button, Shift, X, Y) {
        me.KeyPreview = 0;
        b_ExitPassengers.BackColor = 0xFFFFFF;
    }

    function b_ExitPassengers_MouseUp(Button, Shift, X, Y) {
        b_ExitPassengers.BackColor = 0xC0C0C0;
        me.KeyPreview = -1;
    }

    async function b_Help1_Click() {
        await showHelp();
    }

    function b_Help1_MouseDown(Button, Shift, X, Y) {
        me.KeyPreview = 0;
        b_Help1.BackColor = 0xFFFFFF;
    }

    function b_Help1_MouseUp(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xC0C0C0;
        me.KeyPreview = -1;
    }

    async function b_Help2_Click() {
        await showHelp();
    }

    function b_Help2_MouseDown(Button, Shift, X, Y) {
        me.KeyPreview = 0;
        b_Help1.BackColor = 0xFFFFFF;
    }

    function b_Help2_MouseUp(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xC0C0C0;
        me.KeyPreview = -1;
    }

    async function b_Help3_Click() {
        await showHelp();
    }

    function b_Help3_MouseDown(Button, Shift, X, Y) {
        me.KeyPreview = 0;
        b_Help1.BackColor = 0xFFFFFF;
    }

    function b_Help3_MouseUp(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xC0C0C0;
        me.KeyPreview = -1;
    }

    async function b_PickUpPassengers_Click() {
        if (player.passengersWaiting > 0) {
            await pickUpPassengers();
        } else {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Passengers";
            frm_Box0.b_Message.Caption = "\n" + "There are no passengers waiting to be picked up.";
            await frm_Box0.Show(1);
        }
    }

    function b_PickUpPassengers_MouseDown(Button, Shift, X, Y) {
        me.KeyPreview = 0;
        b_PickUpPassengers.BackColor = 0xFFFFFF;
    }

    function b_PickUpPassengers_MouseUp(Button, Shift, X, Y) {
        b_PickUpPassengers.BackColor = 0xC0C0C0;
        me.KeyPreview = -1;
    }

    async function b_SetTicketPrice_Click() {
        await setTicketPrice();
    }

    function b_SetTicketPrice_MouseDown(Button, Shift, X, Y) {
        me.KeyPreview = 0;
        b_SetTicketPrice.BackColor = 0xFFFFFF;
    }

    function b_SetTicketPrice_MouseUp(Button, Shift, X, Y) {
        b_SetTicketPrice.BackColor = 0xC0C0C0;
        me.KeyPreview = -1;
    }

    function rerollPassengers() {
        if (player.passengersBoarded == 0) {
            {
                const sel = (Mod(player.arrivalRoll, 2)) + 1;
                if (sel == 1) {
                    player.passengersWaiting = CLng((player.passengerCapacity / 2) * (1 + (player.arrivalRoll / 100)));
                } else if (sel == 2) {
                    player.passengersWaiting = CLng((player.passengerCapacity / 2) * (player.arrivalRoll / 100));
                }
            }
            if (player.passengersWaiting < 1) {
                player.passengersWaiting = 1;
            }
            if (player.ticketPrice > 5000) {
                player.passengersWaiting = 0;
            }
            player.passengersAboard = player.passengersWaiting;
            if (player.passengersAboard > player.passengerCapacity) {
                player.passengersAboard = player.passengerCapacity;
            }
            updateDisplay();
        }
    }

    async function showHelp() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box1.FillElastic.Caption = "Help (Carry Passengers)";
        frm_Box1.b_Message.Caption = "Your ship can accommodate up to " + Format(player.passengerCapacity, "#,#0") + " passengers. You can charge as much or as little as you like for tickets. If your ticket price is too high, nobody will want to travel on your ship. On the other hand, if your ticket price is too low, it will be difficult to make a profit. In the future, you may be given the opportunity to buy a larger ship. The general rule is the larger your ship, the more passengers you can carry.";
        await frm_Box1.Show(1);
    }

    function updateDisplay() {
        me.MousePointer = HOURGLASS;
        if (player.passengersBoarded == -1) {
            b_PassengerGauge.FloodPercent = 100 * (player.passengersAboard / player.passengerCapacity);
            b_PassengerGauge.Caption = "Passengers on Ship:  " + Format(player.passengersAboard, "#,#0");
            b_PassengerProfit.Caption = "        Profit this Week:  " + Format(player.ticketPrice * player.passengersAboard, "#,#0");
            b_PassengersWaiting.Caption = "        Passengers Waiting:  " + Format(player.passengersWaiting - player.passengersAboard, "#,#0");
            if ((player.passengersWaiting - player.passengersAboard) > 0) {
                image1.Picture = LoadPicture(Trim(paths.imageDir) + "HANDUP1.ICO");
            } else {
                image1.Picture = LoadPicture(Trim(paths.imageDir) + "MAN.ICO");
            }
            image2.Picture = LoadPicture(Trim(paths.imageDir) + "WOMAN.ICO");
        } else {
            b_PassengerGauge.FloodPercent = 0;
            b_PassengerGauge.Caption = "Passengers on Ship:  0";
            b_PassengerProfit.Caption = "        Profit this Week:  0";
            b_PassengersWaiting.Caption = "        Passengers Waiting:  " + Format(player.passengersWaiting, "#,#0");
            if (player.passengersWaiting == 0) {
                image1.Picture = LoadPicture(Trim(paths.imageDir) + "MAN.ICO");
                image2.Picture = LoadPicture(Trim(paths.imageDir) + "WOMAN.ICO");
            } else {
                image1.Picture = LoadPicture(Trim(paths.imageDir) + "HANDUP1.ICO");
                image2.Picture = LoadPicture(Trim(paths.imageDir) + "HANDUP2.ICO");
            }
        }
        b_profitPerPassenger.Caption = "        Ticket Price this Week:  " + Format(player.ticketPrice, "#,#0");
        b_PassengerCapacity.Caption = "Passenger Capacity:    " + Format(player.passengerCapacity, "#,#0");
        b_SetTicketPrice.Caption = "Set TICKET PRICE for next planet at " + Format(player.nextTicketPrice, "#,#0") + " kubars";
        me.MousePointer = ARROW_CURSOR;
    }

    async function pickUpPassengers() {
        me.MousePointer = HOURGLASS;
        if (player.passengersBoarded == 0) {
            if (player.passengersAboard > 0) {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "pickup.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
            }
            player.passengersBoarded = -1;
            player.cash = player.cash + player.ticketPrice * player.passengersAboard;
            if (game.tutorialMode == 0 || game.complexity >= game.unlockTaxes) {
                player.passengerTaxOwed = CLng(player.passengerTaxOwed + (player.ticketPrice * player.passengersAboard * game.passengerTaxRate));
            }
        } else {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Passengers";
            frm_Box0.b_Message.Caption = "\n" + "You have already picked up your passengers.";
            await frm_Box0.Show(1);
        }
        updateDisplay();
        await me.Show();
        me.MousePointer = ARROW_CURSOR;
    }

    async function setTicketPrice() {
        let newPrice = 0;
        me.MousePointer = HOURGLASS;
        newPrice = await askNumber(0, Str(player.nextTicketPrice), 1000, 5000, "Enter new ticket price:", "Ticket Price");
        if (newPrice == -3333) {
        } else if (newPrice < 100) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Passengers";
            frm_Box0.b_Message.Caption = "\n" + "You cannot charge less than 100 kubars per ticket.";
            await frm_Box0.Show(1);
        } else {
            player.nextTicketPrice = CLng(newPrice);
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "ticket.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
        }
        updateDisplay();
        me.MousePointer = ARROW_CURSOR;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 16) {
            rerollPassengers();
        } else if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_ExitPassengers_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        shipImage.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer])) + ".bmp");
        updateDisplay();
    }

    return {
        b_ExitPassengers_Click, b_ExitPassengers_MouseDown, b_ExitPassengers_MouseUp, b_Help1_Click,
        b_Help1_MouseDown, b_Help1_MouseUp, b_Help2_Click, b_Help2_MouseDown,
        b_Help2_MouseUp, b_Help3_Click, b_Help3_MouseDown, b_Help3_MouseUp,
        b_PickUpPassengers_Click, b_PickUpPassengers_MouseDown, b_PickUpPassengers_MouseUp, b_SetTicketPrice_Click,
        b_SetTicketPrice_MouseDown, b_SetTicketPrice_MouseUp, rerollPassengers, showHelp,
        updateDisplay, pickUpPassengers, setTicketPrice, Form_Activate,
        Form_KeyPress, Form_Load,
    };
});
