// Originally translated from src/SHIPINFO.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_ShipInfo",
  ["Form", "frm_ShipInfo", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Ship Info", "BackColor": 0, "Left": 255, "Top": 810, "Width": 7365, "Height": 5595, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 255, "ClientTop": 810, "ClientWidth": 7365, "ClientHeight": 5595}, [
    ["MMControl", "b_Sound", {"Left": 4230, "Top": 30, "Width": 3540, "Height": 330, "TabIndex": 28, "Visible": 0}],
    ["VideoSoftElastic", "FillElastic", {"BackColor": 12632256, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 1, "BevelOuter": 0, "BevelOuterWidth": 0}, [
      ["VideoSoftElastic", "VSElastic5", {"BackColor": 16448, "Left": 8100, "Top": 150, "Width": 1440, "Height": 6660, "TabIndex": 17, "AutoSizeChildren": 3, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16448}, [
        ["VideoSoftElastic", "b_ShipSpeedButton", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 1440, "Height": 1335, "TabIndex": 27, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Engine", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
        ["VideoSoftElastic", "b_CargoCapacityButton", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 2670, "Width": 1440, "Height": 1335, "TabIndex": 23, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Cargo Capacity", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
        ["VideoSoftElastic", "b_PassengerButton", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 1335, "Width": 1440, "Height": 1335, "TabIndex": 22, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Passenger Capacity", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
        ["VideoSoftElastic", "b_FuelUsageButton", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 4005, "Width": 1440, "Height": 1335, "TabIndex": 21, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Fuel Usage", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
        ["VideoSoftElastic", "b_Help", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 5340, "Width": 1440, "Height": 1320, "TabIndex": 19, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Help", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}]
      ]],
      ["VideoSoftElastic", "VSElastic4", {"BackColor": 16448, "Left": 60, "Top": 150, "Width": 1440, "Height": 6660, "TabIndex": 16, "AutoSizeChildren": 3, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16448}, [
        ["VideoSoftElastic", "b_FuelTankButton", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 2670, "Width": 1440, "Height": 1335, "TabIndex": 26, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Fuel Tank Size", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
        ["VideoSoftElastic", "b_CrewButton", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 4005, "Width": 1440, "Height": 1335, "TabIndex": 25, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Crew", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
        ["VideoSoftElastic", "b_ShipSizeButton", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 1440, "Height": 1335, "TabIndex": 24, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Ship Size", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
        ["VideoSoftElastic", "b_PurchaseButton", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 1335, "Width": 1440, "Height": 1335, "TabIndex": 20, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Purchase Larger Ship", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}],
        ["VideoSoftElastic", "b_Exit", {"BackColor": 4194304, "ForeColor": 16777215, "Left": 0, "Top": 5340, "Width": 1440, "Height": 1320, "TabIndex": 18, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 4194304}]
      ]],
      ["VideoSoftElastic", "VSElastic14", {"BackColor": 16744576, "Left": 1620, "Top": 150, "Width": 6360, "Height": 3810, "TabIndex": 10, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "IntBkg": 16744576}, [
        ["VideoSoftElastic", "b_Speed", {"BackColor": 16777088, "Left": 3870, "Top": 885, "Width": 2250, "Height": 600, "TabIndex": 15, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 3, "Caption": "   Speed (Engine):  5", "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_ShipName", {"BackColor": 16777088, "Left": 240, "Top": 3000, "Width": 5880, "Height": 600, "TabIndex": 14, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 3, "Caption": "Ship Name", "CaptionPos": 4, "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_Passengers", {"BackColor": 16777088, "Left": 3870, "Top": 1590, "Width": 2250, "Height": 585, "TabIndex": 13, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 3, "Caption": "   Passenger Capacity:", "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_CargoCapacity", {"BackColor": 16777088, "Left": 3840, "Top": 2280, "Width": 2280, "Height": 600, "TabIndex": 12, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 3, "Caption": "   Cargo Capacity:  100 tons", "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_ShipTons", {"BackColor": 16777088, "Left": 3870, "Top": 180, "Width": 2250, "Height": 600, "TabIndex": 11, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 3, "Caption": "   Ship Size:", "IntBkg": 16777088}],
        ["Image", "Image1", {"Left": 240, "Top": 180, "Width": 3495, "Height": 2700, "Stretch": -1}]
      ]],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 16744576, "Left": 1620, "Top": 5685, "Width": 6360, "Height": 1095, "TabIndex": 7, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Fuel", "CaptionPos": 3, "IntBkg": 16744576, "CaptionStyle": 2}, [
        ["VideoSoftElastic", "b_TankSize", {"BackColor": 16777088, "Left": 300, "Top": 375, "Width": 1815, "Height": 420, "TabIndex": 9, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 3, "Caption": "Tank Size:  50 tons", "CaptionPos": 4, "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_Consumption", {"BackColor": 16777088, "Left": 2190, "Top": 375, "Width": 3870, "Height": 420, "TabIndex": 8, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 3, "Caption": "Consumption Rate:  2 to 10 tons ", "CaptionPos": 4, "IntBkg": 16777088}]
      ]],
      ["VideoSoftElastic", "b_Employee", {"BackColor": 16744576, "Left": 1620, "Top": 4080, "Width": 6360, "Height": 1515, "TabIndex": 1, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "Caption": "Employee:  Total of 4", "CaptionPos": 3, "IntBkg": 16744576, "CaptionStyle": 2}, [
        ["VideoSoftElastic", "b_Pilot", {"BackColor": 16777088, "Left": 255, "Top": 375, "Width": 1395, "Height": 420, "TabIndex": 6, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 3, "Caption": "Pilot:  1", "CaptionPos": 4, "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_Navigator", {"BackColor": 16777088, "Left": 1740, "Top": 375, "Width": 1365, "Height": 420, "TabIndex": 5, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 3, "Caption": "Navigator:  1", "CaptionPos": 4, "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_Engineer", {"BackColor": 16777088, "Left": 3255, "Top": 375, "Width": 1365, "Height": 420, "TabIndex": 4, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 3, "Caption": "Engineer:  1", "CaptionPos": 4, "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_Crew", {"BackColor": 16777088, "Left": 4710, "Top": 375, "Width": 1395, "Height": 420, "TabIndex": 3, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 3, "Caption": "Staff:  1", "CaptionPos": 4, "IntBkg": 16777088}],
        ["VideoSoftElastic", "b_EmployeeSalary", {"BackColor": 16777088, "Left": 255, "Top": 900, "Width": 5850, "Height": 405, "TabIndex": 2, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 3, "BevelInner": 0, "BevelOuter": 5, "BevelInnerWidth": 0, "BevelOuterWidth": 3, "Caption": "Employee Salary..... 1,500 kubars", "CaptionPos": 4, "IntBkg": 16777088}]
      ]]
    ]]
  ]],
function (me) {
    const { b_Sound, FillElastic, VSElastic5, b_ShipSpeedButton, b_CargoCapacityButton, b_PassengerButton, b_FuelUsageButton, b_Help } = me.controls;
    const { VSElastic4, b_FuelTankButton, b_CrewButton, b_ShipSizeButton, b_PurchaseButton, b_Exit, VSElastic14, b_Speed } = me.controls;
    const { b_ShipName, b_Passengers, b_CargoCapacity, b_ShipTons, Image1, VSElastic3, b_TankSize, b_Consumption } = me.controls;
    const { b_Employee, b_Pilot, b_Navigator, b_Engineer, b_Crew, b_EmployeeSalary } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;

    async function b_CargoCapacityButton_Click() {
        me.MousePointer = HOURGLASS;
        await Load(frm_ShipInfoBox);
        frm_ShipInfoBox.Caption = "Cargo Capacity";
        frm_ShipInfoBox.b_Message.Caption = "The amount of cargo your ship can carry depends on the size and type of your ship. The ship you own now can hold up to " + Format(player.cargoCapacity, "#,#0") + " tons of cargo. That means you can buy up to " + Format(player.cargoCapacity, "#,#0") + " tons of commodities and transport them to another planet. Generally, the larger your ship, the more tons of cargo you can carry.";
        await frm_ShipInfoBox.Show(1);
        me.MousePointer = ARROW_CURSOR;
    }

    function b_CargoCapacityButton_MouseDown(Button, Shift, X, Y) {
        b_CargoCapacityButton.BackColor = 0x800000;
    }

    function b_CargoCapacityButton_MouseUp(Button, Shift, X, Y) {
        b_CargoCapacityButton.BackColor = 0x400000;
    }

    async function b_CrewButton_Click() {
        me.MousePointer = HOURGLASS;
        await Load(frm_ShipInfoBox);
        frm_ShipInfoBox.Caption = "Crew";
        frm_ShipInfoBox.b_Message.Caption = "The number of employees you have depends on the size and type of your ship. Your company currently employs " + Format(player.crewSize, "#,#0") + " crew members. You must pay each employee a weekly salary of " + Format(player.crewSalary, "#,#0") + " kubars. You will not be required to hire any additional employees until you purchase a larger ship.";
        await frm_ShipInfoBox.Show(1);
        me.MousePointer = ARROW_CURSOR;
    }

    function b_CrewButton_MouseDown(Button, Shift, X, Y) {
        b_CrewButton.BackColor = 0x800000;
    }

    function b_CrewButton_MouseUp(Button, Shift, X, Y) {
        b_CrewButton.BackColor = 0x400000;
    }

    async function b_Exit_Click() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = 0;
        await Unload(me);
    }

    function b_Exit_MouseDown(Button, Shift, X, Y) {
        b_Exit.BackColor = 0x800000;
    }

    function b_Exit_MouseUp(Button, Shift, X, Y) {
        b_Exit.BackColor = 0x400000;
    }

    async function b_FuelTankButton_Click() {
        me.MousePointer = HOURGLASS;
        await Load(frm_ShipInfoBox);
        frm_ShipInfoBox.Caption = "Fuel Tank Size";
        frm_ShipInfoBox.b_Message.Caption = "The fuel tank size (fuel capacity) for your ship is " + Format(player.fuelCapacity, "#,#0") + " tons. This is the maximum amount of fuel your ship can carry. The advantage of a larger fuel tank is that if fuel prices are high on one planet, you can usually afford to wait until you reach another planet before filling up your tank.";
        await frm_ShipInfoBox.Show(1);
        me.MousePointer = ARROW_CURSOR;
    }

    function b_FuelTankButton_MouseDown(Button, Shift, X, Y) {
        b_FuelTankButton.BackColor = 0x800000;
    }

    function b_FuelTankButton_MouseUp(Button, Shift, X, Y) {
        b_FuelTankButton.BackColor = 0x400000;
    }

    async function b_FuelUsageButton_Click() {
        me.MousePointer = HOURGLASS;
        await Load(frm_ShipInfoBox);
        frm_ShipInfoBox.Caption = "Fuel Usage";
        frm_ShipInfoBox.b_Message.Caption = "Every time you travel to a planet, your ship consumes between 2 and " + Format((game.shipSize[game.currentPlayer] / 100) + 11, "#,#0") + " tons of fuel. On average, the longer the distance travelled and the larger the ship, the more fuel is used. If you want to save fuel, a good idea is to travel to a nearby planet, rather than one on the other side of Kukubia.";
        await frm_ShipInfoBox.Show(1);
        me.MousePointer = ARROW_CURSOR;
    }

    function b_FuelUsageButton_MouseDown(Button, Shift, X, Y) {
        b_FuelUsageButton.BackColor = 0x800000;
    }

    function b_FuelUsageButton_MouseUp(Button, Shift, X, Y) {
        b_FuelUsageButton.BackColor = 0x400000;
    }

    async function b_Help_Click() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            frm_Money.b_Sound.Command = "Close";
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box1.FillElastic.Caption = "Help (Ship Info)";
        frm_Box1.b_Message.Caption = "The SHIP INFO menu provides you with details about your ship. Just click on the buttons on either side of the menu to find out more about your ship's size, fuel tank, crew, engine, passenger capacity, cargo bay and fuel usage.";
        await frm_Box1.Show(1);
    }

    function b_Help_MouseDown(Button, Shift, X, Y) {
        b_Help.BackColor = 0x800000;
    }

    function b_Help_MouseUp(Button, Shift, X, Y) {
        b_Help.BackColor = 0x400000;
    }

    async function b_PassengerButton_Click() {
        let onBoard = 0;
        let waiting = 0;
        me.MousePointer = HOURGLASS;
        await Load(frm_ShipInfoBox);
        frm_ShipInfoBox.Caption = "Passenger Capacity";
        if (player.passengersBoarded == -1) {
            onBoard = player.passengersAboard;
            waiting = player.passengersWaiting - player.passengersAboard;
        } else {
            onBoard = 0;
            waiting = player.passengersWaiting;
        }
        frm_ShipInfoBox.b_Message.Caption = "The number of passengers a ship can carry depends on its size and type. The ship you own now can accommodate up to " + Format(player.passengerCapacity, "#,#0") + " passengers. The more you spend on passenger advertising, the more people will want to travel on your ship. On the other hand, the more you charge for tickets, the fewer passengers you'll get. At this time you have " + Format(onBoard, "#,#0") + " passenger(s) on your ship and " + Format(waiting, "#,#0") + " passenger(s) waiting to buy tickets.";
        await frm_ShipInfoBox.Show(1);
        me.MousePointer = ARROW_CURSOR;
    }

    function b_PassengerButton_MouseDown(Button, Shift, X, Y) {
        b_PassengerButton.BackColor = 0x800000;
    }

    function b_PassengerButton_MouseUp(Button, Shift, X, Y) {
        b_PassengerButton.BackColor = 0x400000;
    }

    async function b_PurchaseButton_Click() {
        me.MousePointer = HOURGLASS;
        await Load(frm_ShipInfoBox);
        frm_ShipInfoBox.Caption = "Purchase Larger Ship";
        frm_ShipInfoBox.b_Message.Caption = "You cannot buy or sell your ship whenever you feel like it. The Trader's Union strictly regulates the sale of all commercial ships. This helps to maintain a trade balance between the planets and prevents the larger companies from monopolizing the market. By virtue of being a member of the Trader's Union, your name is automatically entered in a lottery. If your name comes up, you will be given the chance to trade in your old ship and purchase a new, larger ship.";
        await frm_ShipInfoBox.Show(1);
        me.MousePointer = ARROW_CURSOR;
    }

    function b_PurchaseButton_MouseDown(Button, Shift, X, Y) {
        b_PurchaseButton.BackColor = 0x800000;
    }

    function b_PurchaseButton_MouseUp(Button, Shift, X, Y) {
        b_PurchaseButton.BackColor = 0x400000;
    }

    async function b_ShipSizeButton_Click() {
        me.MousePointer = HOURGLASS;
        frm_ShipInfoBox.Caption = "Ship Size";
        frm_ShipInfoBox.b_Message.Caption = "You currently own a " + Format(game.shipSize[game.currentPlayer], "#,#0") + "-ton ship. This does not mean you can carry " + Format(game.shipSize[game.currentPlayer], "#,#0") + " tons of cargo. The ship's engine room, bridge, passenger seating area, crew living quarters, life support systems, and fuel tanks take up approximately " + Format(game.shipSize[game.currentPlayer] - player.cargoCapacity, "#,#0") + " tons. The remaining " + Format(player.cargoCapacity, "#,#0") + " tons can be used to haul cargo.";
        await frm_ShipInfoBox.Show(1);
        me.MousePointer = ARROW_CURSOR;
    }

    function b_ShipSizeButton_MouseDown(Button, Shift, X, Y) {
        b_ShipSizeButton.BackColor = 0x800000;
    }

    function b_ShipSizeButton_MouseUp(Button, Shift, X, Y) {
        b_ShipSizeButton.BackColor = 0x400000;
    }

    async function b_ShipSpeedButton_Click() {
        me.MousePointer = HOURGLASS;
        await Load(frm_ShipInfoBox);
        frm_ShipInfoBox.Caption = "Engine";
        frm_ShipInfoBox.b_Message.Caption = "Your ship has a " + Format(game.engineSpeed[game.currentPlayer], "#,#0") + " kuarp engine. The higher the kuarp value, the faster your ship can travel. This is an advantage if you are trying to beat another player to a planet in order to buy up all the best commodities. You can roughly compute the time it will take you to travel to a planet by dividing the total DISTANCE by the ENGINE SPEED. You can purchase a faster engine by going to Pyke and clicking on EXPLORE PLANET, then PLANET SPECIAL.";
        await frm_ShipInfoBox.Show(1);
        me.MousePointer = ARROW_CURSOR;
    }

    function b_ShipSpeedButton_MouseDown(Button, Shift, X, Y) {
        b_ShipSpeedButton.BackColor = 0x800000;
    }

    function b_ShipSpeedButton_MouseUp(Button, Shift, X, Y) {
        b_ShipSpeedButton.BackColor = 0x400000;
    }

    function showShipInfo() {
        let shipName = "";
        b_Passengers.Caption = " Passenger Capacity:  " + Format(player.passengerCapacity, "#,#0");
        b_Speed.Caption = " Engine Speed:  " + Format(game.engineSpeed[game.currentPlayer], "#,#0") + " kuarps";
        if (game.shipType[game.currentPlayer] == 1) {
            shipName = "Stinger XII";
        } else if (game.shipType[game.currentPlayer] == 2) {
            shipName = "Fly Catcher";
        } else if (game.shipType[game.currentPlayer] == 3) {
            shipName = "Le Rock";
        } else if (game.shipType[game.currentPlayer] == 4) {
            shipName = "Whaler 2000";
        } else if (game.shipType[game.currentPlayer] == 5) {
            shipName = "Retina";
        } else if (game.shipType[game.currentPlayer] == 6) {
            shipName = "Cerebralis";
        } else if (game.shipType[game.currentPlayer] == 7) {
            shipName = "The Globulizer";
        } else if (game.shipType[game.currentPlayer] == 8) {
            shipName = "Locomotis";
        } else if (game.shipType[game.currentPlayer] == 9) {
            shipName = "Mantagon";
        } else if (game.shipType[game.currentPlayer] == 10) {
            shipName = "Kegger";
        } else if (game.shipType[game.currentPlayer] == 11) {
            shipName = "Worm Shuttle";
        } else if (game.shipType[game.currentPlayer] == 12) {
            shipName = "Squidocity";
        }
        b_ShipName.Caption = "Ship Name:  " + shipName;
        b_CargoCapacity.Caption = " Cargo Capacity:  " + Format(player.cargoCapacity, "#,#0");
        b_ShipTons.Caption = " Ship Size: " + Format(game.shipSize[game.currentPlayer], "#,#0") + " tons";
        b_EmployeeSalary.Caption = "Salary Per Person..... " + Format(player.crewSalary, "#,#0") + " kubars";
        b_TankSize.Caption = "Tank Size:  " + Format(player.fuelCapacity, "#,#0") + " tons";
        b_Consumption.Caption = "Max Possible Usage:  2 to " + Format((game.shipSize[game.currentPlayer] / 100) + 11, "#,#0") + " tons per week";
        b_Employee.Caption = "Crew:  Total of " + Format(player.crewSize, "#,#0");
        if (player.crewSize == 1) {
            b_Pilot.Caption = "Pilot:  " + Format(1, "#,#0");
            b_Navigator.Caption = "Navigator:  " + Format(0, "#,#0");
            b_Engineer.Caption = "Engineer:  " + Format(0, "#,#0");
            b_Crew.Caption = "Staff:  " + Format(0, "#,#0");
        } else if (player.crewSize == 2) {
            b_Pilot.Caption = "Pilot:  " + Format(1, "#,#0");
            b_Navigator.Caption = "Navigator:  " + Format(1, "#,#0");
            b_Engineer.Caption = "Engineer:  " + Format(0, "#,#0");
            b_Crew.Caption = "Staff:  " + Format(0, "#,#0");
        } else {
            b_Pilot.Caption = "Pilot:  " + Format(1, "#,#0");
            b_Navigator.Caption = "Navigator:  " + Format(1, "#,#0");
            b_Engineer.Caption = "Engineer:  " + Format(1, "#,#0");
            b_Crew.Caption = "Staff:  " + Format(player.crewSize - 3, "#,#0");
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

    async function Form_Load() {
        me.MousePointer = HOURGLASS;
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer])) + ".bmp");
        if (game.tutorialMode == -1) {
            frm_Box1.FillElastic.Caption = "Tutorial";
            frm_Box1.b_Message.Caption = "Because you are playing the TUTORIAL game, you will notice that many of the ship's features are not yet included. As you play, these features will gradually be added to the game." + "\n" + "\n" + "For example, you cannot buy a larger engine until the PLANET SPECIAL feature is introduced to the game, and this happens near the end of the TUTORIAL.";
            await frm_Box1.Show(1);
        }
        showShipInfo();
    }

    return {
        b_CargoCapacityButton_Click, b_CargoCapacityButton_MouseDown, b_CargoCapacityButton_MouseUp, b_CrewButton_Click,
        b_CrewButton_MouseDown, b_CrewButton_MouseUp, b_Exit_Click, b_Exit_MouseDown,
        b_Exit_MouseUp, b_FuelTankButton_Click, b_FuelTankButton_MouseDown, b_FuelTankButton_MouseUp,
        b_FuelUsageButton_Click, b_FuelUsageButton_MouseDown, b_FuelUsageButton_MouseUp, b_Help_Click,
        b_Help_MouseDown, b_Help_MouseUp, b_PassengerButton_Click, b_PassengerButton_MouseDown,
        b_PassengerButton_MouseUp, b_PurchaseButton_Click, b_PurchaseButton_MouseDown, b_PurchaseButton_MouseUp,
        b_ShipSizeButton_Click, b_ShipSizeButton_MouseDown, b_ShipSizeButton_MouseUp, b_ShipSpeedButton_Click,
        b_ShipSpeedButton_MouseDown, b_ShipSpeedButton_MouseUp, showShipInfo, Form_Activate,
        Form_KeyPress, Form_Load,
    };
});
