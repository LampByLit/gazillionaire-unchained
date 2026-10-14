// Originally translated from src/BANKRPT1.FRM by tools/vb2js.py; this JavaScript is now the source.

VB.form("frm_Bankrupt1",
  ["Form", "frm_Bankrupt1", {"BorderStyle": 0, "ControlBox": 0, "ClipControls": 0, "Caption": "Bankrupt Image", "BackColor": 0, "ForeColor": 255, "Left": 750, "Top": 1875, "Width": 7350, "Height": 3990, "WindowState": 2, "ScaleMode": 1, "FillStyle": 0, "FillColor": 255, "Icon": null, "LinkTopic": "Form1", "KeyPreview": -1, "ClientLeft": 750, "ClientTop": 1875, "ClientWidth": 7350, "ClientHeight": 3990}, [
    ["VideoSoftElastic", "VSElastic1", {"BackColor": 255, "Left": 0, "Top": 0, "Width": 9600, "Height": 6915, "TabIndex": 0, "FontName": "Arial", "FontSize": 24, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "Align": 5, "AutoSizeChildren": 7, "BorderWidth": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 255}, [
      ["MMControl", "b_Sound", {"Left": 3930, "Top": 0, "Width": 3540, "Height": 330, "TabIndex": 5, "Visible": 0}],
      ["VideoSoftElastic", "b_Continue", {"BackColor": 64, "ForeColor": 16777215, "Left": 600, "Top": 6225, "Width": 8415, "Height": 540, "TabIndex": 3, "FontName": "MS Sans Serif", "FontSize": 9.75, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "BorderWidth": 8, "BevelOuterWidth": 8, "Caption": "Continue", "CaptionPos": 4, "AccessKey": -1, "IntBkg": 64}],
      ["VideoSoftElastic", "VSElastic3", {"BackColor": 255, "Left": 600, "Top": 690, "Width": 8415, "Height": 5400, "TabIndex": 1, "AutoSizeChildren": 1, "BorderWidth": 20, "BevelInnerWidth": 10, "BevelOuterWidth": 20, "IntBkg": 255}, [
        ["VideoSoftElastic", "VSElastic2", {"BackColor": 255, "Left": 300, "Top": 300, "Width": 7815, "Height": 4800, "TabIndex": 2, "AutoSizeChildren": 1, "BorderWidth": 0, "ChildSpacing": 0, "BevelInner": 0, "BevelOuter": 0, "BevelInnerWidth": 0, "BevelOuterWidth": 0, "IntBkg": 255}, [
          ["Image", "Image1", {"Left": 0, "Top": 0, "Width": 7815, "Height": 4800, "Stretch": -1}]
        ]]
      ]],
      ["Label", "b_Company", {"Caption": "12345678901234567890 Bankrupts!!!", "Left": 45, "Top": 45, "Width": 9540, "Height": 630, "FontName": "Arial", "FontSize": 24, "FontBold": -1, "FontItalic": 0, "FontStrikethru": 0, "FontUnderline": 0, "TabIndex": 4, "Alignment": 2, "BackStyle": 0}]
    ]]
  ]],
function (me) {
    const { VSElastic1, b_Sound, b_Continue, VSElastic3, VSElastic2, Image1, b_Company } = me.controls;
    const HOURGLASS = 11;
    const ARROW_CURSOR = 1;
    let blankColor = 0;  // Static in b_Continue_Click

    async function b_Continue_Click() {
        let company = 0;
        let bankruptCount = 0;
        const HOURGLASS = 11;
        me.MousePointer = HOURGLASS;
        VSElastic1.BackColor = blankColor;
        me.BackColor = blankColor;
        VSElastic1.Visible = 0;
        frm_Box1Port.b_Yes.Visible = 0;
        frm_Box1Port.b_No.Visible = 0;
        frm_Box1Port.b_OK.Visible = -1;
        frm_Box1Port.b_Container.BackColor = 0xC0;
        frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "NEWS.BMP");
        frm_Box1Port.b_ImageLable.Caption = "Headline News";
        if ((player.cash + player.bankBalance + player.creditLimit) < player.loan) {
            frm_Box1Port.b_Message.Caption = "Big news on the financial front. " + Trim(game.companyNames[game.currentPlayer]) + " has gone bankrupt! Our sources inform us that all the assets are being liquidated to pay off creditors." + "\n" + "\n" + "We have reports of angry citizens taking to the streets demanding a full investigation, but there is little anyone can do." + "\n" + "\n" + Trim(game.companyNames[game.currentPlayer]) + " is too deeply in debt to continue operating, and no financial institution is willing to loan it any more money.";
        } else {
            frm_Box1Port.b_Message.Caption = "Big news on the financial front. " + Trim(game.companyNames[game.currentPlayer]) + " has gone bankrupt!" + "\n" + "\n" + "Our sources inform us that the government has revoked " + Trim(game.companyNames[game.currentPlayer]) + "'s trading license because it has exceeded its credit limit." + "\n" + "\n" + "Apparently, " + Trim(game.companyNames[game.currentPlayer]) + " had enough money to keep its loan below the credit limit, but for some unknown reason, it refused to pay. A full investigation is now underway to determine just what went wrong with " + Trim(game.companyNames[game.currentPlayer]) + ".";
        }
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "news.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        await frm_Box1Port.Show(1);
        await Load(frm_LineGraph);
        frm_LineGraph.Tag = "BANKRUPT";
        frm_LineGraph.b_Help.Visible = 0;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "bankrupt.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        await frm_LineGraph.Show(1);
        VSElastic1.BackColor = blankColor;
        VSElastic1.Visible = 0;
        frm_Box1Port.b_Yes.Visible = 0;
        frm_Box1Port.b_No.Visible = 0;
        frm_Box1Port.b_OK.Visible = -1;
        frm_Box1Port.b_Container.BackColor = 0xC0;
        frm_Box1Port.Image1.Picture = LoadPicture(Trim(paths.imageDir) + "DRED.BMP");
        frm_Box1Port.b_ImageLable.Caption = "Emperor Dred Nicolson";
        frm_Box1Port.b_Message.Caption = "The latest word from the capital is that Supreme Commander Dred Nicolson is terribly upset over the bankruptcy." + "\n" + "\n" + "The Supreme Commander addressed the Kukubian Senate this morning, saying that what happened to " + Trim(game.companyNames[game.currentPlayer]) + " is a big setback for the Empire." + "\n" + "\n" + "At the end of the speech, Dred Nicolson promised to do his best to support the remaining companies and see that the Kukubian Colonies continue to grow and prosper.";
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            b_Sound.FileName = Trim(paths.soundDir) + "good3.wav";
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        await frm_Box1Port.Show(1);
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
        }
        bankruptCount = 0;
        for (company = 1; company <= game.numPlayers; company++) {
            if (game.graphShowCompany[company] == -1) {
                bankruptCount = bankruptCount + 1;
            }
        }
        if (bankruptCount == game.numPlayers) {
            await frm_Bankrupt2.Show();
            await Unload(me);
        } else {
            await frm_Bankrupt3.Show();
            await Unload(me);
        }
    }

    function b_Continue_MouseDown(Button, Shift, X, Y) {
        b_Continue.BackColor = 0x80;
    }

    function b_Continue_MouseUp(Button, Shift, X, Y) {
        b_Continue.BackColor = 0x40;
    }

    function Form_Activate() {
        me.MousePointer = ARROW_CURSOR;
    }

    async function Form_KeyPress(KeyAscii) {
        if (KeyAscii == 13 || KeyAscii == 27 || KeyAscii == 32) {
            await b_Continue_Click();
        }
    }

    function Form_Load() {
        me.MousePointer = HOURGLASS;
        if (settings.soundOn == -1) {
            b_Sound.Command = "Close";
            if (game.shipType[game.currentPlayer] <= 6) {
                b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer])) + ".wav";
            } else {
                b_Sound.FileName = Trim(paths.soundDir) + "ship" + Trim(Str(game.shipType[game.currentPlayer] - 6)) + ".wav";
            }
            b_Sound.Command = "Open";
            b_Sound.Command = "Play";
        }
        game.graphShowCompany[game.currentPlayer] = -1;
        Image1.Picture = LoadPicture(Trim(paths.imageDir) + "LOSE.BMP");
        b_Company.Caption = Trim(game.companyNames[game.currentPlayer]) + " Bankrupts!!!";
    }

    return {
        b_Continue_Click, b_Continue_MouseDown, b_Continue_MouseUp, Form_Activate,
        Form_KeyPress, Form_Load,
    };
});
