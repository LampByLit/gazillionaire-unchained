// Originally translated from src/Module3.BAS by tools/vb2js.py; this JavaScript is now the source.


async function askNumber(position, defaultText, min, max, message, title) {
    let value = 0;
    let mid = 0;
    let ret = 0;
    position = CInt(position);
    min = CLng(min);
    max = CLng(max);
    try {
        frm_InputBox.Width = Screen.Width * 0.545;
        frm_InputBox.Height = Screen.Height * 0.8;
        if (position == 0) {
            if (frm_InputBox.WindowState == 0) {
                frm_InputBox.Move((Screen.Width - frm_InputBox.Width) / 2, ((Screen.Height - frm_InputBox.Height) / 2) + 200);
            }
        } else if (position == 1) {
            if (frm_InputBox.WindowState == 0) {
                frm_InputBox.Move(Screen.Width * 0.455, Screen.Height * 0.202);
            }
        } else if (position == 2) {
            if (frm_InputBox.WindowState == 0) {
                frm_InputBox.Move((Screen.Width - frm_InputBox.Width) / 4, ((Screen.Height - frm_InputBox.Height) / 2));
            }
        }
        frm_InputBox.FillElastic.Caption = "\n" + message;
        frm_InputBox.Caption = title;
        frm_InputBox.b_UpperLimit.Tag = Str(max);
        mid = CLng(max / 2);
        frm_InputBox.b_MidRange.Tag = Str(mid);
        frm_InputBox.b_LowerLimit.Tag = Str(min);
        frm_InputBox.b_Text.Text = defaultText;
        frm_InputBox.b_Text.SelStart = 0;
        frm_InputBox.b_Text.SelLength = Len(frm_InputBox.b_Text.Text);
        await frm_InputBox.Show(1);
        value = CLng(Val(frm_InputBox.b_Text.Text));
        if (value < 0 && value != -3333) {
            if (settings.soundOn == -1) {
                Beep();
            }
            frm_MsgBox.FillElastic.Caption = "\n" + "Nice try, but you cannot input a negative amount.";
            await frm_MsgBox.Show(1);
            ret = -3333;
        } else {
            ret = value;
        }
        await Unload(frm_InputBox);
        return ret;
    } catch (e) {
        Err.Catch(e);
        if (settings.soundOn == -1) {
            Beep();
        }
        frm_MsgBox.FillElastic.Caption = "\n" + "The number you entered is too large. Please try again.";
        await frm_MsgBox.Show(1);
        ret = -3333;
        await Unload(frm_InputBox);
        return ret;
    }
    return ret;
}

function randomBetween(low, high) {
    let ret = 0;
    low = CLng(low);
    high = CLng(high);
    Randomize();
    ret = Fix((high - low + 1) * Rnd()) + low;
    return ret;
}

function randomInt(low, high) {
    let ret = 0;
    low = CInt(low);
    high = CInt(high);
    Randomize();
    ret = Fix((high - low + 1) * Rnd()) + low;
    return ret;
}
