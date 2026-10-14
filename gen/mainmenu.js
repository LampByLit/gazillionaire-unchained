// Originally translated from src/MAINMENU.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_MainMenu",
  ["Form", "frm_MainMenu", {"BorderStyle": 0, "MaxButton": 0, "MinButton": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Main Menu", "BackColor": 0, "ForeColor": 0, "Left": 720, "Top": 1740, "Width": 7815, "Height": 5580, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 720, "ClientTop": 1740, "ClientWidth": 7815, "ClientHeight": 5580}, [
    ["VideoSoftElastic", "FillElastic", {"BackColor": 12632256, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 1, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "FloodColor": 64}, [
      ["MMControl", "b_Sound", {"Left": 5430, "Top": 120, "Width": 3540, "Height": 330, "TabIndex": 28, "Visible": 0}],
      ["VideoSoftElastic", "b_Help1", {"BackColor": 12632256, "Left": 8460, "Top": 5880, "Width": 1080, "Height": 1005, "TabIndex": 0, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 8, "FloodColor": 0, "FloodPercent": 100, "Caption": "Help", "CaptionPos": 5, "AccessKey": -1, "ShadowColor": 8388608}, [
        ["Image", "b_Help2", {"Picture": {"frx": "frx/MAINMENU/b_Help2.Picture.ico"}, "Left": 195, "Top": 150, "Width": 705, "Height": 420, "Stretch": -1}]
      ]],
      ["VideoSoftElastic", "b_FuelContainer", {"BackColor": 12632256, "Left": 8460, "Top": 30, "Width": 1080, "Height": 5835, "TabIndex": 20, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelOuterWidth": 5}, [
        ["VideoSoftElastic", "b_FuelCost", {"BackColor": 12632256, "Left": 165, "Top": 135, "Width": 810, "Height": 690, "TabIndex": 22, "FontName": "MS Serif", "FontSize": 6.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 2, "Caption": "Fuel Cost 1000", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 8388608}],
        ["VideoSoftElastic", "b_FuelTank", {"BackColor": 12632256, "ForeColor": 16777215, "Left": 180, "Top": 1605, "Width": 720, "Height": 4050, "TabIndex": 21, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 10, "BevelInner": 7, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 10, "FloodDirection": 3, "FloodColor": 255, "FloodPercent": 80, "Caption": "Fuel Tank", "CaptionPos": 4, "AccessKey": -1, "ShadowColor": 255}],
        ["Image", "b_Fuel_Image", {"Picture": {"frx": "frx/MAINMENU/b_Fuel_Image.Picture.ico"}, "Left": 180, "Top": 870, "Width": 750, "Height": 660, "Stretch": -1}]
      ]],
      ["VideoSoftElastic", "VSElastic1", {"BackColor": 12632256, "Left": 3840, "Top": 1815, "Width": 4575, "Height": 5070, "TabIndex": 12, "AutoSizeChildren": 3, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "ShadowColor": 0}, [
        ["VideoSoftElastic", "b_ViewCity", {"BackColor": 32768, "ForeColor": 16777215, "Left": 0, "Top": 3405, "Width": 4575, "Height": 555, "TabIndex": 25, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "                  View City", "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 32768}, [
          ["Image", "b_ViewCity_Image", {"Picture": {"frx": "frx/MAINMENU/b_ViewCity_Image.Picture.ico"}, "Left": 150, "Top": 105, "Width": 450, "Height": 375, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Explore", {"BackColor": 32768, "ForeColor": 16777215, "Left": 0, "Top": 3960, "Width": 4575, "Height": 555, "TabIndex": 23, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "                  Explore Planet", "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 32768}, [
          ["Image", "b_Explore_Image", {"Picture": {"frx": "frx/MAINMENU/b_Explore_Image.Picture.ico"}, "Left": 150, "Top": 105, "Width": 450, "Height": 345, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Employee", {"BackColor": 32768, "ForeColor": 16777215, "Left": 0, "Top": 1710, "Width": 4575, "Height": 570, "TabIndex": 19, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "                  Crew Wages Owed", "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 32768}, [
          ["Image", "b_Employee_Image", {"Picture": {"frx": "frx/MAINMENU/b_Employee_Image.Picture.ico"}, "Left": 135, "Top": 150, "Width": 525, "Height": 270, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Tax", {"BackColor": 32768, "ForeColor": 16777215, "Left": 0, "Top": 2280, "Width": 4575, "Height": 570, "TabIndex": 18, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "                  Taxes and Tariffs Owed", "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 32768}, [
          ["Image", "b_Tax_Image", {"Picture": {"frx": "frx/MAINMENU/b_Tax_Image.Picture.ico"}, "Left": 150, "Top": 150, "Width": 405, "Height": 270, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_GettingStarted", {"BackColor": 32768, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 4575, "Height": 570, "TabIndex": 17, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "                  Getting Started", "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 32768}, [
          ["Image", "b_GettingStarted_Image", {"Picture": {"frx": "frx/MAINMENU/b_GettingStarted_Image.Picture.ico"}, "Left": 150, "Top": 180, "Width": 450, "Height": 210, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Passengers", {"BackColor": 32768, "ForeColor": 16777215, "Left": 0, "Top": 570, "Width": 4575, "Height": 570, "TabIndex": 16, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "                  Pickup Passengers", "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 32768}, [
          ["Image", "b_Passengers_Image", {"Left": 90, "Top": 135, "Width": 450, "Height": 300, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Advertising", {"BackColor": 32768, "ForeColor": 16777215, "Left": 0, "Top": 1140, "Width": 4575, "Height": 570, "TabIndex": 15, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "                  Advertise for Next Planet", "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 32768}, [
          ["Image", "b_Advertising_Image", {"Left": 90, "Top": 135, "Width": 450, "Height": 300, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Insurance", {"BackColor": 32768, "ForeColor": 16777215, "Left": 0, "Top": 2850, "Width": 4575, "Height": 555, "TabIndex": 14, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "                  Voyager's Insurance/Cost", "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 32768}, [
          ["Image", "b_Insurance_Image", {"Picture": {"frx": "frx/MAINMENU/b_Insurance_Image.Picture.ico"}, "Left": 150, "Top": 105, "Width": 450, "Height": 345, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Utilities", {"BackColor": 32768, "ForeColor": 16777215, "Left": 0, "Top": 4515, "Width": 4575, "Height": 555, "TabIndex": 13, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "                  File Options", "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 32768}, [
          ["Image", "b_Utilities_Image", {"Picture": {"frx": "frx/MAINMENU/b_Utilities_Image.Picture.ico"}, "Left": 150, "Top": 105, "Width": 480, "Height": 345, "Stretch": -1}]
        ]]
      ]],
      ["VideoSoftElastic", "VSElastic6", {"BackColor": 12632256, "Left": 3810, "Top": 615, "Width": 4605, "Height": 1170, "TabIndex": 10, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
        ["VideoSoftElastic", "b_Warehouse", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 3075, "Top": 0, "Width": 1530, "Height": 1170, "TabIndex": 26, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 8, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "Warehouse", "CaptionPos": 5, "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 8388608}, [
          ["Image", "b_Warehouse_Image", {"Left": 375, "Top": 180, "Width": 780, "Height": 510, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Market", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 1545, "Height": 1170, "TabIndex": 24, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 8, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "FloodDirection": 4, "FloodColor": 128, "Caption": "Marketplace", "CaptionPos": 5, "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 8388608}, [
          ["Image", "b_Market_Image", {"Picture": {"frx": "frx/MAINMENU/b_Market_Image.Picture.ico"}, "Left": 420, "Top": 210, "Width": 855, "Height": 480, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Supply", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 1545, "Top": 0, "Width": 1530, "Height": 1170, "TabIndex": 11, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 8, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "Supply", "CaptionPos": 5, "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 8388608}, [
          ["Label", "b_Supply_Image", {"Caption": "%", "ForeColor": 16776960, "Left": 375, "Top": 135, "Width": 825, "Height": 555, "FontName": "Arial", "FontSize": 24, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 27, "Alignment": 2, "BackStyle": 0}]
        ]]
      ]],
      ["VideoSoftElastic", "VSElastic5", {"BackColor": 12632256, "Left": 60, "Top": 3660, "Width": 3720, "Height": 3225, "TabIndex": 5, "AutoSizeChildren": 3, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0}, [
        ["VideoSoftElastic", "b_Stock", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 0, "Top": 0, "Width": 3720, "Height": 645, "TabIndex": 29, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "                    Stock Markets", "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 8388608}, [
          ["Image", "b_Stock_Image", {"Picture": {"frx": "frx/MAINMENU/b_Stock_Image.Picture.ico"}, "Left": 150, "Top": 120, "Width": 555, "Height": 390, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Bank", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 0, "Top": 1290, "Width": 3720, "Height": 645, "TabIndex": 9, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "                    Bank", "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 8388608}, [
          ["Image", "b_Bank_Image", {"Picture": {"frx": "frx/MAINMENU/b_Bank_Image.Picture.ico"}, "Left": 150, "Top": 105, "Width": 495, "Height": 435, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_ZinnLoan", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 0, "Top": 2580, "Width": 3720, "Height": 645, "TabIndex": 8, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "                    Zinn's Loan", "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 8388608}, [
          ["Image", "b_ZinnLoan_Image", {"Picture": {"frx": "frx/MAINMENU/b_ZinnLoan_Image.Picture.ico"}, "Left": 150, "Top": 150, "Width": 555, "Height": 390, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Loan", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 0, "Top": 1935, "Width": 3720, "Height": 645, "TabIndex": 7, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "                    Loan", "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 8388608}, [
          ["Image", "b_Loan_Image", {"Picture": {"frx": "frx/MAINMENU/b_Loan_Image.Picture.ico"}, "Left": 90, "Top": 90, "Width": 495, "Height": 345, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Money", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 0, "Top": 645, "Width": 3720, "Height": 645, "TabIndex": 6, "FontName": "Arial", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 6, "Caption": "              Money(Cash: 1,000,000)", "AccessKey": -1, "ShadowColor": 8388608, "IntBkg": 8388608}, [
          ["Image", "b_Money_Image", {"Picture": {"frx": "frx/MAINMENU/b_Money_Image.Picture.ico"}, "Left": 150, "Top": 105, "Width": 465, "Height": 435, "Stretch": -1}]
        ]]
      ]],
      ["VideoSoftElastic", "VSElastic7", {"BackColor": 0, "Left": 60, "Top": 30, "Width": 3720, "Height": 3630, "TabIndex": 3, "AutoSizeChildren": 7, "BorderWidth": 10, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 7, "IntBkg": 0}, [
        ["VideoSoftElastic", "b_LeavePlanet1", {"BackColor": 0, "ForeColor": 16777215, "Left": 150, "Top": 3180, "Width": 3435, "Height": 315, "TabIndex": 4, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 2, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 1, "Caption": "Travel (Leave Planet)", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 0}],
        ["Image", "b_LeavePlanet2", {"Left": 135, "Top": 135, "Width": 3450, "Height": 3240, "Stretch": -1}]
      ]],
      ["VideoSoftElastic", "b_CompanyName", {"BackColor": 8421504, "ForeColor": 16777215, "Left": 3810, "Top": 30, "Width": 4605, "Height": 585, "TabIndex": 2, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BevelInner": 4, "BevelOuter": 1, "BevelInnerWidth": 2, "BevelOuterWidth": 3, "Caption": "Company Name", "CaptionPos": 4, "ShadowColor": 8388608, "IntBkg": 8421504}]
    ]]
  ]],
function (me) {
    const { FillElastic, b_Sound, b_Help1, b_Help2, b_FuelContainer, b_FuelCost, b_FuelTank, b_Fuel_Image } = me.controls;
    const { VSElastic1, b_ViewCity, b_ViewCity_Image, b_Explore, b_Explore_Image, b_Employee, b_Employee_Image, b_Tax } = me.controls;
    const { b_Tax_Image, b_GettingStarted, b_GettingStarted_Image, b_Passengers, b_Passengers_Image, b_Advertising, b_Advertising_Image, b_Insurance } = me.controls;
    const { b_Insurance_Image, b_Utilities, b_Utilities_Image, VSElastic6, b_Warehouse, b_Warehouse_Image, b_Market, b_Market_Image } = me.controls;
    const { b_Supply, b_Supply_Image, VSElastic5, b_Stock, b_Stock_Image, b_Bank, b_Bank_Image, b_ZinnLoan } = me.controls;
    const { b_ZinnLoan_Image, b_Loan, b_Loan_Image, b_Money, b_Money_Image, VSElastic7, b_LeavePlanet1, b_LeavePlanet2 } = me.controls;
    const { b_CompanyName } = me.controls;
    const BLACK = 0;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    const RED = 255;
    const WHITE = 16777215;

    function b_Advertising_Image_MouseDown(Button, Shift, X, Y) {
        b_Advertising.BackColor = 0xFF00;
    }

    async function b_Advertising_Image_MouseUp(Button, Shift, X, Y) {
        await openAdvertising(Button);
    }

    function b_Advertising_MouseDown(Button, Shift, X, Y) {
        b_Advertising.BackColor = 0xFF00;
    }

    async function b_Advertising_MouseUp(Button, Shift, X, Y) {
        await openAdvertising(Button);
    }

    function b_Bank_Image_MouseDown(Button, Shift, X, Y) {
        b_Bank.BackColor = 0xFF0000;
    }

    async function b_Bank_Image_MouseUp(Button, Shift, X, Y) {
        await openBank(Button);
    }

    function b_Bank_MouseDown(Button, Shift, X, Y) {
        b_Bank.BackColor = 0xFF0000;
    }

    async function b_Bank_MouseUp(Button, Shift, X, Y) {
        await openBank(Button);
    }

    function b_Employee_Image_MouseDown(Button, Shift, X, Y) {
        b_Employee.BackColor = 0xFF00;
    }

    async function b_Employee_Image_MouseUp(Button, Shift, X, Y) {
        await openCrew(Button);
    }

    function b_Employee_MouseDown(Button, Shift, X, Y) {
        b_Employee.BackColor = 0xFF00;
    }

    async function b_Employee_MouseUp(Button, Shift, X, Y) {
        await openCrew(Button);
    }

    function b_Explore_Image_MouseDown(Button, Shift, X, Y) {
        b_Explore.BackColor = 0xFF00;
    }

    async function b_Explore_Image_MouseUp(Button, Shift, X, Y) {
        b_Explore.BackColor = 0x8000;
        await openExplore();
    }

    function b_Explore_MouseDown(Button, Shift, X, Y) {
        b_Explore.BackColor = 0xFF00;
    }

    async function b_Explore_MouseUp(Button, Shift, X, Y) {
        b_Explore.BackColor = 0x8000;
        await openExplore();
    }

    function b_Fuel_Image_MouseDown(Button, Shift, X, Y) {
        b_FuelTank.FloodColor = 0x8080FF;
        b_FuelTank.BackColor = 0xE0E0E0;
    }

    async function b_Fuel_Image_MouseUp(Button, Shift, X, Y) {
        await openFuel(Button);
    }

    function b_FuelContainer_MouseDown(Button, Shift, X, Y) {
        b_FuelTank.FloodColor = 0x8080FF;
        b_FuelTank.BackColor = 0xE0E0E0;
    }

    async function b_FuelContainer_MouseUp(Button, Shift, X, Y) {
        await openFuel(Button);
    }

    function b_FuelCost_MouseDown(Button, Shift, X, Y) {
        b_FuelTank.FloodColor = 0x8080FF;
        b_FuelTank.BackColor = 0xE0E0E0;
    }

    async function b_FuelCost_MouseUp(Button, Shift, X, Y) {
        await openFuel(Button);
    }

    function b_FuelTank_MouseDown(Button, Shift, X, Y) {
        b_FuelTank.FloodColor = 0x8080FF;
        b_FuelTank.BackColor = 0xE0E0E0;
    }

    async function b_FuelTank_MouseUp(Button, Shift, X, Y) {
        await openFuel(Button);
    }

    async function b_GettingStarted_Click() {
        await openGettingStarted();
    }

    async function b_GettingStarted_Image_Click() {
        await openGettingStarted();
    }

    function b_GettingStarted_Image_MouseDown(Button, Shift, X, Y) {
        b_GettingStarted.BackColor = 0xFF00;
    }

    function b_GettingStarted_Image_MouseUp(Button, Shift, X, Y) {
        b_GettingStarted.BackColor = 0x8000;
    }

    function b_GettingStarted_MouseDown(Button, Shift, X, Y) {
        b_GettingStarted.BackColor = 0xFF00;
    }

    function b_GettingStarted_MouseUp(Button, Shift, X, Y) {
        b_GettingStarted.BackColor = 0x8000;
    }

    async function b_Help1_Click() {
        await showMainMenuHelp();
    }

    function b_Help1_MouseDown(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xFFFFFF;
    }

    function b_Help1_MouseUp(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xC0C0C0;
    }

    async function b_Help2_Click() {
        await showMainMenuHelp();
    }

    function b_Help2_MouseDown(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xFFFFFF;
    }

    function b_Help2_MouseUp(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xC0C0C0;
    }

    function b_Insurance_Image_MouseDown(Button, Shift, X, Y) {
        b_Insurance.BackColor = 0xFF00;
    }

    async function b_Insurance_Image_MouseUp(Button, Shift, X, Y) {
        await openInsurance(Button);
    }

    function b_Insurance_MouseDown(Button, Shift, X, Y) {
        b_Insurance.BackColor = 0xFF00;
    }

    async function b_Insurance_MouseUp(Button, Shift, X, Y) {
        await openInsurance(Button);
    }

    async function b_LeavePlanet1_Click() {
        await openLeavePlanet();
    }

    function b_LeavePlanet1_MouseDown(Button, Shift, X, Y) {
        b_LeavePlanet1.BackColor = 0x404040;
    }

    function b_LeavePlanet1_MouseUp(Button, Shift, X, Y) {
        const BLACK = 0;
        b_LeavePlanet1.BackColor = BLACK;
    }

    async function b_LeavePlanet2_Click() {
        await openLeavePlanet();
    }

    function b_LeavePlanet2_MouseDown(Button, Shift, X, Y) {
        b_LeavePlanet1.BackColor = 0x404040;
    }

    function b_LeavePlanet2_MouseUp(Button, Shift, X, Y) {
        b_LeavePlanet1.BackColor = BLACK;
    }

    function b_Loan_Image_MouseDown(Button, Shift, X, Y) {
        b_Loan.BackColor = 0xFF0000;
    }

    async function b_Loan_Image_MouseUp(Button, Shift, X, Y) {
        await openLoan(Button);
    }

    function b_Loan_MouseDown(Button, Shift, X, Y) {
        b_Loan.BackColor = 0xFF0000;
    }

    async function b_Loan_MouseUp(Button, Shift, X, Y) {
        await openLoan(Button);
    }

    async function b_Market_Click() {
        await openMarket();
    }

    async function b_Market_Image_Click() {
        await openMarket();
    }

    function b_Market_Image_MouseDown(Button, Shift, X, Y) {
        b_Market.BackColor = 0xFF0000;
    }

    function b_Market_Image_MouseUp(Button, Shift, X, Y) {
        b_Market.BackColor = 0x800000;
    }

    function b_Market_MouseDown(Button, Shift, X, Y) {
        b_Market.BackColor = 0xFF0000;
    }

    function b_Market_MouseUp(Button, Shift, X, Y) {
        b_Market.BackColor = 0x800000;
    }

    async function b_Money_Click() {
        await openMoney();
    }

    async function b_Money_Image_Click() {
        await openMoney();
    }

    function b_Money_Image_MouseDown(Button, Shift, X, Y) {
        b_Money.BackColor = 0xFF0000;
    }

    function b_Money_Image_MouseUp(Button, Shift, X, Y) {
        b_Money.BackColor = 0x800000;
    }

    function b_Money_MouseDown(Button, Shift, X, Y) {
        b_Money.BackColor = 0xFF0000;
    }

    function b_Money_MouseUp(Button, Shift, X, Y) {
        b_Money.BackColor = 0x800000;
    }

    function b_Passengers_Image_MouseDown(Button, Shift, X, Y) {
        b_Passengers.BackColor = 0xFF00;
    }

    async function b_Passengers_Image_MouseUp(Button, Shift, X, Y) {
        await openPassengers(Button);
    }

    function b_Passengers_MouseDown(Button, Shift, X, Y) {
        b_Passengers.BackColor = 0xFF00;
    }

    async function b_Passengers_MouseUp(Button, Shift, X, Y) {
        await openPassengers(Button);
    }

    async function b_Stock_Click() {
        await openStockMarket();
    }

    async function b_Stock_Image_Click() {
        await openStockMarket();
    }

    function b_Stock_Image_MouseDown(Button, Shift, X, Y) {
        b_Stock.BackColor = 0xFF0000;
    }

    function b_Stock_Image_MouseUp(Button, Shift, X, Y) {
        b_Stock.BackColor = 0x800000;
    }

    function b_Stock_MouseDown(Button, Shift, X, Y) {
        b_Stock.BackColor = 0xFF0000;
    }

    function b_Stock_MouseUp(Button, Shift, X, Y) {
        b_Stock.BackColor = 0x800000;
    }

    async function b_Supply_Click() {
        await openSupply();
    }

    async function b_Supply_Image_Click() {
        await openSupply();
    }

    function b_Supply_Image_MouseDown(Button, Shift, X, Y) {
        b_Supply.BackColor = 0xFF0000;
    }

    function b_Supply_Image_MouseUp(Button, Shift, X, Y) {
        b_Supply.BackColor = 0x800000;
    }

    function b_Supply_MouseDown(Button, Shift, X, Y) {
        b_Supply.BackColor = 0xFF0000;
    }

    function b_Supply_MouseUp(Button, Shift, X, Y) {
        b_Supply.BackColor = 0x800000;
    }

    function b_Tax_Image_MouseDown(Button, Shift, X, Y) {
        b_Tax.BackColor = 0xFF00;
    }

    async function b_Tax_Image_MouseUp(Button, Shift, X, Y) {
        await openTaxes(Button);
    }

    function b_Tax_MouseDown(Button, Shift, X, Y) {
        b_Tax.BackColor = 0xFF00;
    }

    async function b_Tax_MouseUp(Button, Shift, X, Y) {
        await openTaxes(Button);
    }

    async function b_Utilities_Click() {
        await openFileOptions();
    }

    async function b_Utilities_Image_Click() {
        await openFileOptions();
    }

    function b_Utilities_Image_MouseDown(Button, Shift, X, Y) {
        b_Utilities.BackColor = 0xFF00;
    }

    function b_Utilities_Image_MouseUp(Button, Shift, X, Y) {
        b_Utilities.BackColor = 0x8000;
    }

    function b_Utilities_MouseDown(Button, Shift, X, Y) {
        b_Utilities.BackColor = 0xFF00;
    }

    function b_Utilities_MouseUp(Button, Shift, X, Y) {
        b_Utilities.BackColor = 0x8000;
    }

    async function b_ViewCity_Click() {
        await openViewCity();
    }

    async function b_ViewCity_Image_Click() {
        await openViewCity();
    }

    function b_ViewCity_Image_MouseDown(Button, Shift, X, Y) {
        b_ViewCity.BackColor = 0xFF00;
    }

    function b_ViewCity_Image_MouseUp(Button, Shift, X, Y) {
        b_ViewCity.BackColor = 0x8000;
    }

    function b_ViewCity_MouseDown(Button, Shift, X, Y) {
        b_ViewCity.BackColor = 0xFF00;
    }

    function b_ViewCity_MouseUp(Button, Shift, X, Y) {
        b_ViewCity.BackColor = 0x8000;
    }

    async function b_Warehouse_Click() {
        await openWarehouse();
    }

    async function b_Warehouse_Image_Click() {
        await openWarehouse();
    }

    function b_Warehouse_Image_MouseDown(Button, Shift, X, Y) {
        b_Warehouse.BackColor = 0xFF0000;
    }

    function b_Warehouse_Image_MouseUp(Button, Shift, X, Y) {
        b_Warehouse.BackColor = 0x800000;
    }

    function b_Warehouse_MouseDown(Button, Shift, X, Y) {
        b_Warehouse.BackColor = 0xFF0000;
    }

    function b_Warehouse_MouseUp(Button, Shift, X, Y) {
        b_Warehouse.BackColor = 0x800000;
    }

    async function b_ZinnLoan_Click() {
        await openZinnLoan();
    }

    async function b_ZinnLoan_Image_Click() {
        await openZinnLoan();
    }

    function b_ZinnLoan_Image_MouseDown(Button, Shift, X, Y) {
        b_ZinnLoan.BackColor = 0xFF0000;
    }

    function b_ZinnLoan_Image_MouseUp(Button, Shift, X, Y) {
        b_ZinnLoan.BackColor = 0x800000;
    }

    function b_ZinnLoan_MouseDown(Button, Shift, X, Y) {
        b_ZinnLoan.BackColor = 0xFF0000;
    }

    function b_ZinnLoan_MouseUp(Button, Shift, X, Y) {
        b_ZinnLoan.BackColor = 0x800000;
    }

    async function openAdvertising(mouseButton) {
        mouseButton = CInt(mouseButton);
        const HOURGLASS = 11;
        const ARROW_CURSOR = 1;
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        b_Advertising.BackColor = 0x8000;
        if (player.quickAdvertise == 0 || mouseButton == 2) {
            FillElastic.Visible = 0;
            await frm_Advertising.Show();
        } else {
            if ((player.cash + player.adSpendTotal) == 0) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Advertising";
                frm_Box0.b_Message.Caption = "\n" + "You don't have any money. Check your cash.";
                await frm_Box0.Show(1);
            } else if ((player.passengerAdChoice + player.commodityAdChoice) > (player.cash + player.adSpendTotal)) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Advertising";
                frm_Box0.b_Message.Caption = "\n" + "You don't have enough money to advertise. Check your cash.";
                await frm_Box0.Show(1);
            } else if (player.passengerAdChoice == 0 && player.commodityAdChoice == 0) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Advertising";
                frm_Box0.b_Message.Caption = "\n" + "You haven't set your advertising yet. Before you can place an ad, you must first set your advertising.";
                await frm_Box0.Show(1);
            } else {
                if (settings.soundOn == -1 && player.passengerAdChoice != 0 || player.commodityAdChoice != 0) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "advert.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                player.cash = player.cash + player.adSpendTotal;
                player.passengerAdSpend = player.passengerAdChoice;
                player.adExtraPassengers = CLng(player.passengerAdSpend / 125);
                player.commodityAdSpend = player.commodityAdChoice;
                player.adSpendTotal = player.commodityAdSpend + player.passengerAdSpend;
                player.cash = player.cash - player.adSpendTotal;
            }
            refreshMenu();
            me.MousePointer = ARROW_CURSOR;
        }
    }

    async function openBank(mouseButton) {
        mouseButton = CInt(mouseButton);
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        b_Bank.BackColor = 0x800000;
        if (player.quickBank == 0 || mouseButton == 2) {
            FillElastic.Visible = 0;
            await frm_Bank.Show();
        } else {
            if (player.cash >= player.bankBalance) {
                if (player.cash == 0) {
                    if (settings.soundOn == -1) {
                        Beep();
                    }
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "bank.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    player.bankBalance = player.bankBalance + player.cash;
                    player.cash = 0;
                }
            } else {
                if (player.bankBalance == 0) {
                    if (settings.soundOn == -1) {
                        Beep();
                    }
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "bank2.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    player.cash = player.cash + player.bankBalance;
                    player.bankBalance = 0;
                }
            }
            refreshMenu();
            me.MousePointer = ARROW_CURSOR;
        }
    }

    function cheatRerollFuelPrice() {
        {
            const sel = (Mod(game.weeklyRoll, 2)) + 1;
            if (sel == 1) {
                game.fuelPrice[game.planet[game.currentPlayer]] = CLng(((game.fuelBasePrice * 10) / 2) * (game.weeklyRoll / 100));
            } else if (sel == 2) {
                game.fuelPrice[game.planet[game.currentPlayer]] = CLng(((game.fuelBasePrice * 10) / 2) * (1 + (game.weeklyRoll / 100)));
            }
        }
        if (game.fuelPrice[game.planet[game.currentPlayer]] < game.fuelBasePrice) {
            game.fuelPrice[game.planet[game.currentPlayer]] = game.fuelBasePrice;
        }
        if (game.fuelPrice[game.planet[game.currentPlayer]] > (10 * game.fuelBasePrice)) {
            game.fuelPrice[game.planet[game.currentPlayer]] = (10 * game.fuelBasePrice);
        }
        refreshMenu();
    }

    function cheatRerollPassengers() {
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
            refreshMenu();
        }
    }

    function cheatRerollInsuranceCost() {
        {
            const sel = (Mod(game.weeklyRoll, 2)) + 1;
            if (sel == 1) {
                player.insuranceCost = CLng(((player.insuranceRate * 1000) / 2) * (1 + (game.weeklyRoll / 100)));
            } else if (sel == 2) {
                player.insuranceCost = CLng(((player.insuranceRate * 1000) / 2) * (game.weeklyRoll / 100));
            }
        }
        if (player.insuranceCost < player.insuranceRate) {
            player.insuranceCost = player.insuranceRate;
        }
        if (player.insuranceCost > (1000 * player.insuranceRate)) {
            player.insuranceCost = 1000 * player.insuranceRate;
        }
        refreshMenu();
    }

    async function openCrew(mouseButton) {
        mouseButton = CInt(mouseButton);
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        b_Employee.BackColor = 0x8000;
        if (player.quickCrew == 0 || mouseButton == 2) {
            FillElastic.Visible = 0;
            await frm_Employee.Show();
        } else {
            if (player.wagesOwed == 0) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Employees";
                frm_Box0.b_Message.Caption = "\n" + "You don't owe your employees any money. Check total wages owed.";
                await frm_Box0.Show(1);
            } else if (player.wagesOwed > player.cash) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Employees";
                frm_Box0.b_Message.Caption = "\n" + "You don't have enough money to pay your employees. Check your cash.";
                await frm_Box0.Show(1);
            } else {
                player.cash = player.cash - player.wagesOwed;
                player.wagesOwed = 0;
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "crew.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
            }
            refreshMenu();
            me.MousePointer = ARROW_CURSOR;
        }
    }

    async function openExplore() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        await frm_Explore.Show();
    }

    async function openFuel(mouseButton) {
        let fuelNeeded = 0;
        mouseButton = CInt(mouseButton);
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        b_FuelTank.FloodColor = 0xFF;
        b_FuelTank.BackColor = 0xC0C0C0;
        if (player.quickFuel == 0 || mouseButton == 2) {
            FillElastic.Visible = 0;
            await frm_Fuel.Show();
        } else {
            fuelNeeded = player.fuelCapacity - player.fuel;
            if ((fuelNeeded * game.fuelPrice[game.planet[game.currentPlayer]]) > player.cash) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Fuel";
                frm_Box0.b_Message.Caption = "\n" + "You don't have enough money to buy fuel. Check your cash.";
                await frm_Box0.Show(1);
            } else if (fuelNeeded == 0) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Fuel";
                frm_Box0.b_Message.Caption = "\n" + "Your tank is already full.";
                await frm_Box0.Show(1);
            } else {
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "fuel.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                player.fuel = player.fuel + fuelNeeded;
                player.cash = player.cash - (fuelNeeded * game.fuelPrice[game.planet[game.currentPlayer]]);
            }
            refreshMenu();
            me.MousePointer = ARROW_CURSOR;
        }
    }

    async function openGettingStarted() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        await frm_GettingStarted.Show();
    }

    async function showMainMenuHelp() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        if (game.complexity < game.unlockCrew && game.tutorialMode == -1) {
            frm_Box2.FillElastic.Caption = "Help (Main Menu)";
            frm_Box2.b_Message.Caption = "The MAIN MENU is the heart of the game. From this menu you can access every major sub-menu." + "\n" + "\n" + "If you are a first time player and want help learning the game, try clicking on the GETTING STARTED button." + "\n" + "\n" + "If you want to save your game, quit or start a new game, click on the FILE OPTIONS button." + "\n" + "\n" + "In addition to this, most sub-menus contain a context sensitive HELP button. If you have any questions, just click on the HELP buttons, and they should explain each menu in more detail.";
            await frm_Box2.Show(1);
        } else {
            frm_Box1.FillElastic.Caption = "Help (Main Menu)";
            frm_Box1.b_Message.Caption = "The MAIN MENU is the heart of the game. From this menu you can access every major sub-menu. If you want to save your game, quit or start a new game, click on the FILE OPTIONS button. In addition to this, most sub-menus contain a context sensitive HELP button. If you have any questions, just click on the HELP buttons, and they should explain each menu in more detail.";
            await frm_Box1.Show(1);
        }
    }

    async function openInsurance(mouseButton) {
        mouseButton = CInt(mouseButton);
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        b_Insurance.BackColor = 0x8000;
        if (player.quickInsurance == 0 || mouseButton == 2) {
            FillElastic.Visible = 0;
            await frm_Insurance.Show();
        } else {
            if (player.insured == -1) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Insurance";
                frm_Box0.b_Message.Caption = "\n" + "You already purchased Voyager's Insurance.";
                await frm_Box0.Show(1);
            } else if (player.cash == 0) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Insurance";
                frm_Box0.b_Message.Caption = "\n" + "You don't have any money. Check your cash.";
                await frm_Box0.Show(1);
            } else if (player.insuranceCost > player.cash) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Insurance";
                frm_Box0.b_Message.Caption = "\n" + "You don't have enough money to buy insurance. Check your cash.";
                await frm_Box0.Show(1);
            } else {
                player.insured = -1;
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "insure.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                player.cash = player.cash - player.insuranceCost;
            }
            refreshMenu();
            me.MousePointer = ARROW_CURSOR;
        }
    }

    async function openLeavePlanet() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        await frm_LeavePlanet.Show();
        await Unload(me);
    }

    async function openLoan(mouseButton) {
        let borrowAmount = 0;
        mouseButton = CInt(mouseButton);
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        b_Loan.BackColor = 0x800000;
        if (player.quickLoan == 0 || mouseButton == 2) {
            FillElastic.Visible = 0;
            await frm_Loan.Show();
        } else {
            if (player.cash > 0 && player.loan > 0) {
                if (player.cash == 0) {
                    if (settings.soundOn == -1) {
                        Beep();
                    }
                } else if (player.loan == 0) {
                    if (settings.soundOn == -1) {
                        Beep();
                    }
                } else if (player.cash >= player.loan) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    player.cash = player.cash - player.loan;
                    player.loan = 0;
                } else if (player.loan > player.cash) {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    player.loan = player.loan - player.cash;
                    player.cash = 0;
                }
            } else {
                if (player.loan >= player.creditLimit) {
                    if (settings.soundOn == -1) {
                        Beep();
                    }
                } else {
                    borrowAmount = player.creditLimit - player.loan;
                }
                if (borrowAmount == 0) {
                    if (settings.soundOn == -1) {
                        Beep();
                    }
                } else {
                    if (settings.soundOn == -1) {
                        b_Sound.Command = "Close";
                        b_Sound.FileName = Trim(paths.soundDir) + "loan.wav";
                        b_Sound.Command = "Open";
                        b_Sound.Command = "Play";
                    }
                    player.loan = player.loan + borrowAmount;
                    player.cash = player.cash + borrowAmount;
                }
            }
            refreshMenu();
            me.MousePointer = ARROW_CURSOR;
        }
    }

    function refreshMenu() {
        let iconChoice = 0;
        const RED = 255;
        const WHITE = 16777215;
        if (player.loan > player.creditLimit) {
            b_Loan.ForeColor = RED;
        } else {
            b_Loan.ForeColor = WHITE;
        }
        if (player.zinnLoan > player.zinnCreditLimit) {
            b_ZinnLoan.ForeColor = RED;
        } else {
            b_ZinnLoan.ForeColor = WHITE;
        }
        if (player.wagesOwed >= player.crewSize * player.crewSalary * 4) {
            b_Employee.ForeColor = 0xC0;
        } else {
            b_Employee.ForeColor = WHITE;
        }
        if ((player.tariffsOwed + player.passengerTaxOwed) >= (35 * game.shipSize[game.currentPlayer])) {
            b_Tax.ForeColor = 0xC0;
        } else {
            b_Tax.ForeColor = WHITE;
        }
        b_CompanyName.Caption = Trim(game.companyNames[game.currentPlayer]);
        if (game.tutorialMode == -1 && game.complexity < game.unlockSupply) {
            b_Supply.Caption = " ";
            b_Supply_Image.Visible = 0;
            b_Supply.Enabled = 0;
        }
        if (player.cash > 999999999) {
            b_Money.Caption = "                  Money:   " + Format(player.cash, "#,#0");
        } else {
            b_Money.Caption = "                  Money:   " + Format(player.cash, "#,#0") + " cash";
        }
        b_LeavePlanet1.Caption = "Journey (Leave " + Trim(game.planetNames[game.planet[game.currentPlayer]]) + ")";
        if (game.tutorialMode == -1 && game.complexity < game.unlockExplore && game.complexity >= game.unlockViewCity) {
            b_ViewCity.Visible = -1;
        } else {
            b_ViewCity.Visible = 0;
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockExplore) {
            b_Explore.Visible = 0;
        } else {
            b_Explore.Caption = "                  Explore Planet";
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockLoan) {
            b_Loan.Caption = " ";
            b_Loan_Image.Visible = 0;
            b_Loan.Enabled = 0;
        } else {
            b_Loan.Caption = "                  Loan:   " + Format(player.loan, "#,#0");
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockZinnLoan) {
            b_ZinnLoan.Caption = " ";
            b_ZinnLoan_Image.Visible = 0;
            b_ZinnLoan.Enabled = 0;
        } else {
            b_ZinnLoan.Caption = "                  Zinn's Loan:   " + Format(player.zinnLoan, "#,#0");
        }
        b_Stock.Caption = "                  Stock Market";
        if (game.tutorialMode == -1 && game.complexity < game.unlockBank) {
            b_Bank.Caption = " ";
            b_Bank_Image.Visible = 0;
            b_Bank.Enabled = 0;
        } else {
            b_Bank.Caption = "                  Bank:   " + Format(player.bankBalance, "#,#0");
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockPassengers) {
            b_Passengers.Caption = " ";
            b_Passengers_Image.Visible = 0;
            b_Passengers.Enabled = 0;
        } else {
            if (player.passengersBoarded == -1) {
                b_Passengers.Caption = "                  Pickup Passengers:  " + Format(player.passengersWaiting - player.passengersAboard, "#,#0");
            } else {
                b_Passengers.Caption = "                  Pickup Passengers:  " + Format(player.passengersWaiting, "#,#0");
            }
            iconChoice = randomBetween(1, 2);
            if (player.passengersBoarded == -1 || player.passengersWaiting == 0) {
                if (iconChoice == 1) {
                    b_Passengers_Image.Picture = LoadPicture(Trim(paths.imageDir) + "MAN.ICO");
                } else {
                    b_Passengers_Image.Picture = LoadPicture(Trim(paths.imageDir) + "WOMAN.ICO");
                }
            } else {
                if (iconChoice == 1) {
                    b_Passengers_Image.Picture = LoadPicture(Trim(paths.imageDir) + "HANDUP1.ICO");
                } else {
                    b_Passengers_Image.Picture = LoadPicture(Trim(paths.imageDir) + "HANDUP2.ICO");
                }
            }
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockFuel) {
            b_FuelCost.Visible = 0;
            b_Fuel_Image.Visible = 0;
            b_FuelTank.Visible = 0;
            b_FuelContainer.Enabled = 0;
        } else {
            b_FuelCost.Caption = "Fuel Cost: " + Format(game.fuelPrice[game.planet[game.currentPlayer]], "#,#0");
            b_FuelTank.FloodPercent = 100 * (player.fuel / player.fuelCapacity);
            if (player.fuel < ((game.shipSize[game.currentPlayer] / 100) + 11)) {
                b_FuelTank.Caption = " LOW on Fuel";
            } else {
                b_FuelTank.Caption = "Fuel Tank";
            }
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockCrew) {
            b_Employee.Visible = 0;
        } else {
            b_Employee.Caption = "                  Crew Wages Owed:   " + Format(player.wagesOwed, "#,#0");
        }
        if (game.tutorialMode == 0 || game.complexity >= game.unlockCrew) {
            b_GettingStarted.Visible = 0;
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockAdvertising) {
            b_Advertising.Caption = " ";
            b_Advertising_Image.Visible = 0;
            b_Advertising.Enabled = 0;
        } else {
            b_Advertising.Caption = "                  Advertise for Next Planet";
            if (player.passengerAdSpend > 0 || player.commodityAdSpend > 0) {
                b_Advertising_Image.Picture = LoadPicture(Trim(paths.imageDir) + "LIGHT1.ICO");
            } else {
                b_Advertising_Image.Picture = LoadPicture(Trim(paths.imageDir) + "LIGHT2.ICO");
            }
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockTaxes) {
            b_Tax.Caption = " ";
            b_Tax_Image.Visible = 0;
            b_Tax.Enabled = 0;
        } else {
            b_Tax.Caption = "                  Taxes Owed:   " + Format(player.passengerTaxOwed + player.tariffsOwed, "#,#0");
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockInsurance) {
            b_Insurance.Caption = " ";
            b_Insurance_Image.Visible = 0;
            b_Insurance.Enabled = 0;
        } else {
            if (player.insured == -1) {
                b_Insurance.Caption = "                  Insurance/Cost:   Yes/" + Format(player.insuranceCost, "#,#0");
            } else {
                b_Insurance.Caption = "                  Insurance/Cost:   None/" + Format(player.insuranceCost, "#,#0");
            }
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockWarehouse) {
            b_Warehouse.Caption = " ";
            b_Warehouse_Image.Visible = 0;
            b_Warehouse.Enabled = 0;
        } else {
            if (player.warehouseUsed[game.planet[game.currentPlayer]] > 0) {
                b_Warehouse_Image.Picture = LoadPicture(Trim(paths.imageDir) + "KEY.ICO");
            } else {
                b_Warehouse_Image.Picture = LoadPicture(Trim(paths.imageDir) + "LOCK.ICO");
            }
        }
        if (game.tutorialMode == -1 && game.complexity < game.unlockStocks) {
            b_Stock.Caption = " ";
            b_Stock_Image.Visible = 0;
            b_Stock.Enabled = 0;
        }
    }

    async function openMarket() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        await frm_Market.Show();
    }

    async function openMoney() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        await frm_Money.Show();
    }

    async function openPassengers(mouseButton) {
        mouseButton = CInt(mouseButton);
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        b_Passengers.BackColor = 0x8000;
        if (player.quickPassengers == 0 || mouseButton == 2) {
            FillElastic.Visible = 0;
            await frm_Passengers.Show();
        } else {
            if (player.passengersWaiting > 0) {
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
                refreshMenu();
            } else {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Passengers";
                frm_Box0.b_Message.Caption = "\n" + "There are no passengers waiting to be picked up.";
                await frm_Box0.Show(1);
            }
            me.MousePointer = ARROW_CURSOR;
        }
    }

    async function openStockMarket() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        await frm_Stock.Show();
    }

    async function openSupply() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        await frm_Supply.Show();
    }

    async function openTaxes(mouseButton) {
        mouseButton = CInt(mouseButton);
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        b_Tax.BackColor = 0x8000;
        if (player.quickTaxes == 0 || mouseButton == 2) {
            FillElastic.Visible = 0;
            await frm_Tax.Show();
        } else {
            if ((player.passengerTaxOwed + player.tariffsOwed) == 0) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Taxes";
                frm_Box0.b_Message.Caption = "\n" + "You don't owe the government any money.";
                await frm_Box0.Show(1);
            } else if (player.cash == 0) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Taxes";
                frm_Box0.b_Message.Caption = "\n" + "You don't have any money. Check your cash.";
                await frm_Box0.Show(1);
            } else if (player.cash < (player.passengerTaxOwed + player.tariffsOwed)) {
                if (settings.soundOn == -1) {
                    Beep();
                }
                frm_Box0.FillElastic.Caption = "Taxes";
                frm_Box0.b_Message.Caption = "\n" + "You don't have enough money to pay your taxes. Check your cash.";
                await frm_Box0.Show(1);
            } else {
                player.cash = player.cash - (player.passengerTaxOwed + player.tariffsOwed);
                if (settings.soundOn == -1) {
                    b_Sound.Command = "Close";
                    b_Sound.FileName = Trim(paths.soundDir) + "tax2.wav";
                    b_Sound.Command = "Open";
                    b_Sound.Command = "Play";
                }
                player.passengerTaxOwed = 0;
                player.tariffsOwed = 0;
            }
            refreshMenu();
            me.MousePointer = ARROW_CURSOR;
        }
    }

    async function openFileOptions() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        await frm_File.Show();
        await Unload(me);
    }

    async function openViewCity() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        await Load(frm_Explore);
        frm_Explore.b_PlanetSpecial.Visible = 0;
        frm_Explore.b_News.Visible = 0;
        frm_Explore.b_Weather.Visible = 0;
        await frm_Explore.Show();
    }

    async function openWarehouse() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        await frm_Warehouse.Show();
    }

    async function openZinnLoan() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        FillElastic.Visible = 0;
        await frm_ZinnLoan.Show();
    }

    function Form_Activate() {
        me.MousePointer = HOURGLASS;
        FillElastic.Visible = -1;
        refreshMenu();
        me.MousePointer = ARROW_CURSOR;
    }

    function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 6) {
            cheatRerollFuelPrice();
        } else if (KeyAscii == 16) {
            cheatRerollPassengers();
        } else if (KeyAscii == 22) {
            cheatRerollInsuranceCost();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        b_LeavePlanet2.Picture = LoadPicture(Trim(paths.imageDir) + game.planetNames[game.planet[game.currentPlayer]] + "2.bmp");
    }

    return {
        b_Advertising_Image_MouseDown, b_Advertising_Image_MouseUp, b_Advertising_MouseDown, b_Advertising_MouseUp,
        b_Bank_Image_MouseDown, b_Bank_Image_MouseUp, b_Bank_MouseDown, b_Bank_MouseUp,
        b_Employee_Image_MouseDown, b_Employee_Image_MouseUp, b_Employee_MouseDown, b_Employee_MouseUp,
        b_Explore_Image_MouseDown, b_Explore_Image_MouseUp, b_Explore_MouseDown, b_Explore_MouseUp,
        b_Fuel_Image_MouseDown, b_Fuel_Image_MouseUp, b_FuelContainer_MouseDown, b_FuelContainer_MouseUp,
        b_FuelCost_MouseDown, b_FuelCost_MouseUp, b_FuelTank_MouseDown, b_FuelTank_MouseUp,
        b_GettingStarted_Click, b_GettingStarted_Image_Click, b_GettingStarted_Image_MouseDown, b_GettingStarted_Image_MouseUp,
        b_GettingStarted_MouseDown, b_GettingStarted_MouseUp, b_Help1_Click, b_Help1_MouseDown,
        b_Help1_MouseUp, b_Help2_Click, b_Help2_MouseDown, b_Help2_MouseUp,
        b_Insurance_Image_MouseDown, b_Insurance_Image_MouseUp, b_Insurance_MouseDown, b_Insurance_MouseUp,
        b_LeavePlanet1_Click, b_LeavePlanet1_MouseDown, b_LeavePlanet1_MouseUp, b_LeavePlanet2_Click,
        b_LeavePlanet2_MouseDown, b_LeavePlanet2_MouseUp, b_Loan_Image_MouseDown, b_Loan_Image_MouseUp,
        b_Loan_MouseDown, b_Loan_MouseUp, b_Market_Click, b_Market_Image_Click,
        b_Market_Image_MouseDown, b_Market_Image_MouseUp, b_Market_MouseDown, b_Market_MouseUp,
        b_Money_Click, b_Money_Image_Click, b_Money_Image_MouseDown, b_Money_Image_MouseUp,
        b_Money_MouseDown, b_Money_MouseUp, b_Passengers_Image_MouseDown, b_Passengers_Image_MouseUp,
        b_Passengers_MouseDown, b_Passengers_MouseUp, b_Stock_Click, b_Stock_Image_Click,
        b_Stock_Image_MouseDown, b_Stock_Image_MouseUp, b_Stock_MouseDown, b_Stock_MouseUp,
        b_Supply_Click, b_Supply_Image_Click, b_Supply_Image_MouseDown, b_Supply_Image_MouseUp,
        b_Supply_MouseDown, b_Supply_MouseUp, b_Tax_Image_MouseDown, b_Tax_Image_MouseUp,
        b_Tax_MouseDown, b_Tax_MouseUp, b_Utilities_Click, b_Utilities_Image_Click,
        b_Utilities_Image_MouseDown, b_Utilities_Image_MouseUp, b_Utilities_MouseDown, b_Utilities_MouseUp,
        b_ViewCity_Click, b_ViewCity_Image_Click, b_ViewCity_Image_MouseDown, b_ViewCity_Image_MouseUp,
        b_ViewCity_MouseDown, b_ViewCity_MouseUp, b_Warehouse_Click, b_Warehouse_Image_Click,
        b_Warehouse_Image_MouseDown, b_Warehouse_Image_MouseUp, b_Warehouse_MouseDown, b_Warehouse_MouseUp,
        b_ZinnLoan_Click, b_ZinnLoan_Image_Click, b_ZinnLoan_Image_MouseDown, b_ZinnLoan_Image_MouseUp,
        b_ZinnLoan_MouseDown, b_ZinnLoan_MouseUp, openAdvertising, openBank,
        cheatRerollFuelPrice, cheatRerollPassengers, cheatRerollInsuranceCost, openCrew,
        openExplore, openFuel, openGettingStarted, showMainMenuHelp,
        openInsurance, openLeavePlanet, openLoan, refreshMenu,
        openMarket, openMoney, openPassengers, openStockMarket,
        openSupply, openTaxes, openFileOptions, openViewCity,
        openWarehouse, openZinnLoan, Form_Activate, Form_KeyPress,
        Form_Load,
    };
});
