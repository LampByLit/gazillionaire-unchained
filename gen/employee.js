// Originally translated from src/EMPLOYEE.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Employee",
  ["Form", "frm_Employee", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Employee Salary Owed", "BackColor": 0, "Left": 1050, "Top": 2190, "Width": 7995, "Height": 4725, "WindowState": 2, "ScaleMode": 1, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 1050, "ClientTop": 2190, "ClientWidth": 7995, "ClientHeight": 4725}, [
    ["Timer", "b_Timer", {"Enabled": 0, "Interval": 1, "Left": 3240, "Top": 1020}],
    ["VideoSoftElastic", "FillElastic", {"BackColor": 16744576, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16744576}, [
      ["MMControl", "b_Sound", {"Left": 4950, "Top": 0, "Width": 3540, "Height": 330, "TabIndex": 14, "Visible": 0}],
      ["VideoSoftElastic", "VSElastic4", {"BackColor": 16744576, "Left": 300, "Top": 5220, "Width": 9045, "Height": 1515, "TabIndex": 10, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 16744576}, [
        ["VideoSoftElastic", "b_Help1", {"BackColor": 12632256, "ForeColor": 128, "Left": 6030, "Top": 0, "Width": 3015, "Height": 1515, "TabIndex": 13, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 25, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 10, "FloodColor": 0, "Caption": "Help", "CaptionPos": 5, "AccessKey": -1, "ShadowColor": 8388608}, [
          ["Image", "b_Help2", {"Picture": {"frx": "frx/EMPLOYEE/b_Help2.Picture.ico"}, "Left": 1140, "Top": 270, "Width": 705, "Height": 495, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_Pay1", {"BackColor": 12632256, "Left": 3015, "Top": 0, "Width": 3015, "Height": 1515, "TabIndex": 12, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 25, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 10, "FloodColor": 0, "Caption": "Pay Employees", "CaptionPos": 5, "AccessKey": -1}, [
          ["Image", "b_Pay2", {"Picture": {"frx": "frx/EMPLOYEE/b_Pay2.Picture.ico"}, "Left": 1080, "Top": 270, "Width": 870, "Height": 330, "Stretch": -1}]
        ]],
        ["VideoSoftElastic", "b_ExitEmployee1", {"BackColor": 12632256, "ForeColor": 8388608, "Left": 0, "Top": 0, "Width": 3015, "Height": 1515, "TabIndex": 11, "FontName": "Arial", "FontSize": 13.5, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 25, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 10, "FloodColor": 0, "Caption": "Continue", "CaptionPos": 5, "AccessKey": -1, "ShadowColor": 8388608}, [
          ["Image", "b_ExitEmployee2", {"Picture": {"frx": "frx/EMPLOYEE/b_ExitEmployee2.Picture.ico"}, "Left": 1140, "Top": 180, "Width": 735, "Height": 585, "Stretch": -1}]
        ]]
      ]],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 4194304, "Left": 300, "Top": 225, "Width": 3615, "Height": 4710, "TabIndex": 7, "AutoSizeChildren": 7, "BorderWidth": 12, "ChildSpacing": 2, "BevelInner": 0, "BevelOuter": 1, "BevelInnerWidth": 0, "BevelOuterWidth": 5, "IntBkg": 4194304}, [
        ["Image", "Image1", {"Left": 240, "Top": 180, "Width": 3135, "Height": 4005, "Stretch": -1}],
        ["Label", "Label1", {"Caption": "Union Boss", "ForeColor": 16777215, "Left": 240, "Top": 4245, "Width": 3120, "Height": 285, "FontName": "Arial", "FontSize": 8.25, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 8, "Alignment": 2, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "VSElastic", {"BackColor": 8388608, "ForeColor": 16777215, "Left": 4140, "Top": 225, "Width": 5205, "Height": 1140, "TabIndex": 6, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 1, "BorderWidth": 15, "BevelInner": 0, "BevelOuter": 3, "BevelInnerWidth": 0, "BevelOuterWidth": 7, "FloodColor": 8454143, "Caption": " ", "CaptionPos": 4, "ShadowColor": 4194304, "IntBkg": 8388608}, [
        ["Label", "b_Message", {"ForeColor": 16777215, "Left": 225, "Top": 225, "Width": 4755, "Height": 690, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 9, "Alignment": 2, "BackStyle": 0}]
      ]],
      ["VideoSoftElastic", "VSElastic2", {"BackColor": 16744576, "Left": 3915, "Top": 1335, "Width": 5670, "Height": 3885, "TabIndex": 1, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 7, "BevelOuter": 0, "BevelInnerWidth": 8, "BevelOuterWidth": 0, "ShadowColor": 4194304, "IntBkg": 16744576}, [
        ["VideoSoftElastic", "b_Cash", {"BackColor": 4210688, "ForeColor": 16777215, "Left": 420, "Top": 2925, "Width": 4800, "Height": 525, "TabIndex": 5, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "   Cash................................................", "IntBkg": 4210688}],
        ["VideoSoftElastic", "b_Total", {"BackColor": 4210688, "ForeColor": 16777215, "Left": 390, "Top": 1140, "Width": 4830, "Height": 555, "TabIndex": 4, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "  Total Wages Owed.......................", "IntBkg": 4210688}],
        ["VideoSoftElastic", "b_Salary", {"BackColor": 4210688, "ForeColor": 16777215, "Left": 420, "Top": 2025, "Width": 4800, "Height": 570, "TabIndex": 3, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "   Weekly Salary per Person.........", "IntBkg": 4210688}],
        ["VideoSoftElastic", "b_Employee", {"BackColor": 4210688, "ForeColor": 16777215, "Left": 390, "Top": 240, "Width": 4890, "Height": 555, "TabIndex": 2, "FontName": "Arial", "FontSize": 12, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "Caption": "   Number of Employee (Crew).....", "IntBkg": 4210688}]
      ]]
    ]]
  ]],
function (me) {
    const { b_Timer, FillElastic, b_Sound, VSElastic4, b_Help1, b_Help2, b_Pay1, b_Pay2 } = me.controls;
    const { b_ExitEmployee1, b_ExitEmployee2, VSElastic3, Image1, Label1, VSElastic, b_Message, VSElastic2 } = me.controls;
    const { b_Cash, b_Total, b_Salary, b_Employee } = me.controls;
    const HOURGLASS = 11;
    const WHITE = 16777215;
    const ARROW_CURSOR = 1;
    const RED = 255;
    let animFrame = 0;
    let animTicks = 0;

    async function b_ExitEmployee1_Click() {
        me.MousePointer = HOURGLASS;
        b_Timer.Enabled = 0;
        me.BackColor = 0x404040;
        FillElastic.Visible = 0;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_ExitEmployee1_MouseDown(Button, Shift, X, Y) {
        b_ExitEmployee1.BackColor = 0xFFFFFF;
    }

    function b_ExitEmployee1_MouseUp(Button, Shift, X, Y) {
        b_ExitEmployee1.BackColor = 0xC0C0C0;
    }

    async function b_ExitEmployee2_Click() {
        me.MousePointer = HOURGLASS;
        b_Timer.Enabled = 0;
        me.BackColor = 0x404040;
        FillElastic.Visible = 0;
        await frm_MainMenu.Show();
        await Unload(me);
    }

    function b_ExitEmployee2_MouseDown(Button, Shift, X, Y) {
        b_ExitEmployee1.BackColor = 0xFFFFFF;
    }

    function b_ExitEmployee2_MouseUp(Button, Shift, X, Y) {
        b_ExitEmployee1.BackColor = 0xC0C0C0;
    }

    async function b_Help1_Click() {
        await showHelp();
    }

    function b_Help1_MouseDown(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xFFFFFF;
    }

    function b_Help1_MouseUp(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xC0C0C0;
    }

    async function b_Help2_Click() {
        await showHelp();
    }

    function b_Help2_MouseDown(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xFFFFFF;
    }

    function b_Help2_MouseUp(Button, Shift, X, Y) {
        b_Help1.BackColor = 0xC0C0C0;
    }

    async function b_Pay1_Click() {
        await payCrew();
    }

    function b_Pay1_MouseDown(Button, Shift, X, Y) {
        b_Pay1.BackColor = 0xFFFFFF;
    }

    function b_Pay1_MouseUp(Button, Shift, X, Y) {
        b_Pay1.BackColor = 0xC0C0C0;
    }

    async function b_Pay2_Click() {
        await payCrew();
    }

    function b_Pay2_MouseDown(Button, Shift, X, Y) {
        b_Pay1.BackColor = 0xFFFFFF;
    }

    function b_Pay2_MouseUp(Button, Shift, X, Y) {
        b_Pay1.BackColor = 0xC0C0C0;
    }

    function b_Timer_Timer() {
        if (animFrame == 1) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "crew.bmp");
        } else if (animFrame == 2) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "crew2.bmp");
        } else if (animFrame == 3) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "crew3.bmp");
        } else if (animFrame == 4) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "crew2.bmp");
        } else if (animFrame == 5) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "crew.bmp");
        }
        animFrame = animFrame + 1;
        if (animFrame == 6) {
            animFrame = 1;
        }
        animTicks = animTicks + 1;
        if (animTicks == 2) {
            b_Timer.Interval = 100;
        }
        if (animTicks == 6) {
            b_Timer.Enabled = 0;
            animTicks = 0;
            animFrame = 1;
        }
    }

    function updateDisplay() {
        b_Employee.Caption = "      Number of Employees (Crew):   " + Format(player.crewSize, "#,#0");
        b_Salary.Caption = "      Weekly Salary per Person:   " + Format(player.crewSalary, "#,#0");
        b_Total.Caption = "      Total Wages Owed:   " + Format(player.wagesOwed, "#,#0");
        b_Cash.Caption = "      Cash:   " + Format(player.cash, "#,#0");
    }

    async function payCrew() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        b_Message.ForeColor = WHITE;
        if (player.wagesOwed == 0) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Employees";
            frm_Box0.b_Message.Caption = "\n" + "You don't owe your employees any money. Check total wages owed.";
            await frm_Box0.Show(1);
            b_Message.Caption = "You don't owe your employees any money.";
        } else if (player.wagesOwed > player.cash) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_Box0.FillElastic.Caption = "Employees";
            frm_Box0.b_Message.Caption = "\n" + "You don't have enough money. Check your cash.";
            await frm_Box0.Show(1);
            b_Message.Caption = "You don't have enough money.";
        } else {
            if (player.wagesOwed == 1) {
                b_Message.Caption = "You paid your employees " + Format(player.wagesOwed, "#,#0") + " kubar.";
            } else {
                b_Message.Caption = "You paid your employees " + Format(player.wagesOwed, "#,#0") + " kubars.";
            }
            player.cash = player.cash - player.wagesOwed;
            player.wagesOwed = 0;
            if (settings.soundOn == -1) {
                b_Sound.Command = "Close";
                b_Sound.FileName = Trim(paths.soundDir) + "crew.wav";
                b_Sound.Command = "Open";
                b_Sound.Command = "Play";
            }
            b_Timer.Enabled = -1;
        }
        updateDisplay();
        me.MousePointer = ARROW_CURSOR;
    }

    async function showHelp() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "help.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        frm_Box1.FillElastic.Caption = "Help (Crew)";
        frm_Box1.b_Message.Caption = "The number of employees you have depends on the size and type of your ship. Your company currently employs " + Format(player.crewSize, "#,#0") + " crew members. You must pay each employee a weekly salary of " + Format(player.crewSalary, "#,#0") + " kubars. You will not be required to hire any additional employees until you purchase a larger ship.";
        await frm_Box1.Show(1);
    }

    function toggleCrewPicture() {
        if (animFrame == -1) {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "crew.bmp");
            animFrame = 0;
        } else {
            Image1.Picture = LoadPicture(Trim(paths.imageDir) + "crew2.bmp");
            animFrame = -1;
        }
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_ExitEmployee1_Click();
        }
    }

    function Form_Load() {
        animTicks = 0;
        animFrame = 1;
        b_Message.Caption = "";
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "crew.bmp");
        if (player.wagesOwed >= player.crewSize * player.crewSalary * 4) {
            b_Message.ForeColor = RED;
            b_Message.Caption = "Your crew demands that you pay them their salary!";
        } else if ((player.crewSize * player.crewSalary * 3) <= player.wagesOwed && player.wagesOwed < (player.crewSize * player.crewSalary * 4)) {
            b_Message.Caption = "Your crew appears to be upset over the fact that you haven't paid them.";
        } else if ((player.crewSize * player.crewSalary * 2) <= player.wagesOwed && player.wagesOwed < (player.crewSize * player.crewSalary * 3)) {
            b_Message.Caption = "Your crew seems mildly annoyed over the fact that you haven't paid them.";
        } else if (player.wagesOwed < (player.crewSize * player.crewSalary * 2)) {
            b_Message.Caption = "Your crew's morale is high and everyone seems to be happy.";
        }
        updateDisplay();
    }

    return {
        b_ExitEmployee1_Click, b_ExitEmployee1_MouseDown, b_ExitEmployee1_MouseUp, b_ExitEmployee2_Click,
        b_ExitEmployee2_MouseDown, b_ExitEmployee2_MouseUp, b_Help1_Click, b_Help1_MouseDown,
        b_Help1_MouseUp, b_Help2_Click, b_Help2_MouseDown, b_Help2_MouseUp,
        b_Pay1_Click, b_Pay1_MouseDown, b_Pay1_MouseUp, b_Pay2_Click,
        b_Pay2_MouseDown, b_Pay2_MouseUp, b_Timer_Timer, updateDisplay,
        payCrew, showHelp, toggleCrewPicture, Form_Activate,
        Form_KeyPress, Form_Load,
    };
});
