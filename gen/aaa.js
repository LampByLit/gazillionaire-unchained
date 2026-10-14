// Originally translated from src/AAA.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_AAA",
  ["Form", "frm_AAA", {"BorderStyle": 0, "ClipControls": 0, "Caption": "AAA", "BackColor": 0, "Left": 1515, "Top": 1695, "Width": 7365, "Height": 4020, "WindowState": 2, "FontName": "MS Serif", "FontSize": 6.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "ScaleMode": 1, "Icon": {"frx": "frx/AAA/frm_AAA.Icon.ico"}, "LinkTopic": "Form1", "ClientLeft": 1515, "ClientTop": 1695, "ClientWidth": 7365, "ClientHeight": 4020}, [
    ["VideoSoftElastic", "VSElastic1", {"BackColor": 0, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "Align": 5, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 0}],
    ["Image", "b_Test", {"Left": 3090, "Top": 1770, "Width": 1245, "Height": 525, "Visible": 0}]
  ]],
function (me) {
    const { VSElastic1, b_Test } = me.controls;
    const ARROW_CURSOR = 1;

    async function loadConfig() {
        FileOpen(8, Trim(paths.configDir) + "CONFIG.DAT");
        settings = FileGet(8, 1, settings);
        FileClose(8);
        if (Left(settings.cdDrive, 1) >= "A" && Left(settings.cdDrive, 1) <= "Z" || Left(settings.cdDrive, 1) >= "a" && Left(settings.cdDrive, 1) <= "z" && Right(settings.cdDrive, 1) == ":") {
        } else {
            if (settings.soundOn == -1) {
                Beep();
            }
            await MsgBox("There has been an error reading your Configuration Data.  All Configuration Variables are being set to their default values.");
            settings.cdDrive = FixStr("D:", 2);
            settings.emailDir = FixStr(CurDir() + "\\email\\", 128);
            settings.soundOn = -1;
            saveConfig();
        }
    }

    function saveConfig() {
        FileOpen(7, Trim(paths.configDir) + "CONFIG.DAT");
        FilePut(7, 1, settings);
        FileClose(7);
    }

    async function Form_Activate() {
        let errorCount = 0;
        try {
            me.MousePointer = ARROW_CURSOR;
            errorCount = 0;
            Randomize();
            paths.saveDir = FixStr(CurDir() + "\\savegame\\", 128);
            paths.configDir = FixStr(CurDir() + "\\units\\", 128);
            await loadConfig();
            paths.imageDir = FixStr(settings.cdDrive + "\\lavamind\\gaz2\\graphics\\", 128);
            paths.soundDir = FixStr(settings.cdDrive + "\\lavamind\\gaz2\\sound\\", 128);
            b_Test.Picture = LoadPicture(Trim(paths.imageDir) + "test.bmp");
            await frm_BeginGame.Show();
            await Unload(me);
            return;
        } catch (e) {
            Err.Catch(e);
            errorCount = errorCount + 1;
            if (settings.soundOn == -1) {
                Beep();
            }
            if (errorCount == 1) {
                await MsgBox("Before you start the game, you must first configure the game to your system." + "\n" + "\n" + "We will now go to the System Configuration Menu." + "\n" + "\n" + "Make sure that your CD-ROM Drive is set to the correct drive letter, otherwise Gazillionaire will not function properly.", 64, "System Configuration");
                if (settings.soundOn == -1) {
                    Beep();
                }
                await frm_Config.Show(1);
                await MsgBox("Your CD-ROM Drive has been set to " + Trim(settings.cdDrive));
                return;
            } else if (errorCount == 2) {
                await MsgBox("There has been an error reading your CD-ROM drive." + "\n" + "\n" + "In order to play Gazillionaire, the Gazillionaire CD-ROM must be in the CD-ROM drive at all times." + "\n" + "\n" + "Please check to make sure the correct CD-ROM is in the CD-ROM drive, then click on the OK button.", 64, "Error Reading CD-ROM Drive");
                return;
            } else if (errorCount == 3) {
                await MsgBox("There has been another error reading your CD-ROM drive." + "\n" + "\n" + "We will now go to the System Configuration Menu. Please make sure that you selected the correct CD-ROM drive letter on the System Configuration Menu.", 32, "Error Reading CD-ROM Drive");
                await frm_Config.Show(1);
                await MsgBox("Your CD-ROM Drive has been set to " + Trim(settings.cdDrive));
                return;
            } else if (errorCount == 4) {
                await MsgBox("There has been another error reading your CD-ROM drive." + "\n" + "\n" + "We will now exit the program so you may check to make sure your CD-ROM drive is functioning properly.", 16, "Error Reading CD-ROM Drive");
                End();
            }
        }
    }

    return {
        loadConfig, saveConfig, Form_Activate,
    };
});
