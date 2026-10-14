// Originally translated from src/Module1.BAS by tools/vb2js.py; this JavaScript is now the source.


async function Main() {
    if (App.PrevInstance) {
        if (settings.soundOn == -1) {
            Beep();
        }
        await MsgBox("You can only have one instance of Gazillionaire running at a time.", 16, "Warning");
        End();
    }
    await frm_AAA.Show();
}
