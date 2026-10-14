// Minimal Visual Basic 3 runtime for the translated Gazillionaire code (gen/*.js).
// Forms and controls are drawn with HTML elements on a 640x480 "screen"; 1 pixel = 15 twips.
"use strict";

const TW = 15;
const SCREEN_W = 640, SCREEN_H = 480;
const VB = { forms: {}, scripts: [], assets: [], running: 0, waiting: 0, zstack: [], active: null };

// ============================================================================ errors

const ERROR_TEXT = {
    3: "Return without GoSub", 5: "Illegal function call", 6: "Overflow", 7: "Out of memory",
    9: "Subscript out of range", 11: "Division by zero", 13: "Type mismatch", 20: "Resume without error",
    52: "Bad file name or number", 53: "File not found", 61: "Disk full", 62: "Input past end of file",
};

class VBError extends Error {
    constructor(number, text) {
        super(text || ERROR_TEXT[number] || `Error ${number}`);
        this.number = number;
    }
}

const END_SIGNAL = { end: true };

const Err = {
    Number: 0,
    Description: "",
    Catch(e) {
        if (e === END_SIGNAL) throw e;
        if (e instanceof VBError) {
            this.Number = e.number;
            this.Description = e.message;
        } else {
            console.error(e);
            this.Number = 5;
            this.Description = String(e && e.message || e);
        }
    },
};

function ErrorText(n) { n = CLng(n); return n === 0 ? "" : (ERROR_TEXT[n] || "Application-defined or object-defined error"); }

// ============================================================================ numbers & strings

function toNum(v) {
    if (typeof v === "number") return v;
    if (typeof v === "boolean") return v ? -1 : 0;
    if (v === undefined || v === null) return 0;
    const s = String(v).trim();
    if (s === "") return 0;
    const n = Number(s.replace(/,/g, ""));
    if (!Number.isNaN(n)) return n;
    if (/^&H[0-9A-F]+&?$/i.test(s)) return parseInt(s.slice(2), 16);
    throw new VBError(13);
}

function roundEven(x) {
    if (Math.abs(x % 1) === 0.5) return 2 * Math.round(x / 2);
    return Math.round(x);
}

function noNegZero(n) { return n === 0 ? 0 : n; }
function CLng(v) {
    const n = roundEven(toNum(v));
    if (!(n >= -2147483648 && n <= 2147483647)) throw new VBError(6);
    return noNegZero(n);
}
function CInt(v) {
    const n = roundEven(toNum(v));
    if (!(n >= -32768 && n <= 32767)) throw new VBError(6);
    return noNegZero(n);
}
function CSng(v) { return toNum(v); }
function CDbl(v) { return toNum(v); }
function CCur(v) { return Math.round(toNum(v) * 10000) / 10000; }
function Fix(v) { return noNegZero(Math.trunc(toNum(v))); }
function Int(v) { return noNegZero(Math.floor(toNum(v))); }
function Abs(v) { return Math.abs(toNum(v)); }
function Sgn(v) { return Math.sign(toNum(v)); }
function Sqr(v) { return Math.sqrt(toNum(v)); }
function Exp(v) { return Math.exp(toNum(v)); }
function Log(v) { return Math.log(toNum(v)); }
function Sin(v) { return Math.sin(toNum(v)); }
function Cos(v) { return Math.cos(toNum(v)); }
function Tan(v) { return Math.tan(toNum(v)); }
function Atn(v) { return Math.atan(toNum(v)); }
function Rnd() { return Math.random(); }
function Randomize() { }
function IsNumeric(v) { try { toNum(v); return String(v).trim() !== "" ? -1 : 0; } catch { return 0; } }

function IDiv(a, b) {
    a = CLng(a); b = CLng(b);
    if (b === 0) throw new VBError(11);
    return noNegZero(Math.trunc(a / b));
}
function Mod(a, b) {
    a = CLng(a); b = CLng(b);
    if (b === 0) throw new VBError(11);
    return noNegZero(a % b);
}
function Add(a, b) {
    if (typeof a === "string" && typeof b === "string") return a + b;
    if (typeof a === "string" || typeof b === "string") {
        try { return toNum(a) + toNum(b); } catch { return String(a) + String(b); }
    }
    return toNum(a) + toNum(b);
}

function numToStr(n) {
    if (Number.isInteger(n)) return String(n);
    let s = String(parseFloat(n.toPrecision(15)));
    if (s.startsWith("0.")) s = s.slice(1);
    else if (s.startsWith("-0.")) s = "-" + s.slice(2);
    return s;
}
function CStr(v) {
    if (typeof v === "string") return v;
    if (typeof v === "number") return numToStr(v);
    if (v === undefined || v === null) return "";
    return String(v);
}
function Str(v) { const n = toNum(v); return (n >= 0 ? " " : "") + numToStr(n); }
function Val(s) {
    if (typeof s === "number") return s;
    s = String(s).replace(/[ \t\r\n]/g, "");
    if (/^&H/i.test(s)) { const m = /^&H([0-9A-F]+)/i.exec(s); return m ? parseInt(m[1], 16) : 0; }
    const m = /^[+-]?(\d+\.?\d*|\.\d+)([eEdD][+-]?\d+)?/.exec(s);
    return m ? parseFloat(m[0].replace(/[dD]/, "e")) : 0;
}
function Hex(v) { const n = CLng(v); return (n < 0 ? n >>> 0 : n).toString(16).toUpperCase(); }

function Trim(s) { return CStr(s).replace(/^ +| +$/g, ""); }
function LTrim(s) { return CStr(s).replace(/^ +/, ""); }
function RTrim(s) { return CStr(s).replace(/ +$/, ""); }
function UCase(s) { return CStr(s).toUpperCase(); }
function LCase(s) { return CStr(s).toLowerCase(); }
function Len(s) { return CStr(s).length; }
function Chr(n) { return String.fromCharCode(CLng(n)); }
function Asc(s) { s = CStr(s); if (!s) throw new VBError(5); return s.charCodeAt(0); }
function Space(n) { return " ".repeat(Math.max(0, CLng(n))); }
function StringN(n, ch) { return (typeof ch === "number" ? String.fromCharCode(ch) : CStr(ch)[0]).repeat(Math.max(0, CLng(n))); }
function Left(s, n) { return CStr(s).slice(0, Math.max(0, CLng(n))); }
function Right(s, n) { s = CStr(s); n = CLng(n); return n <= 0 ? "" : s.slice(-n); }
function Mid(s, start, n) {
    s = CStr(s);
    const a = CLng(start) - 1;
    return n === undefined ? s.slice(a) : s.substr(a, Math.max(0, CLng(n)));
}
function InStr(a, b, c) {
    if (c === undefined) return CStr(a).indexOf(CStr(b)) + 1;
    return CStr(b).indexOf(CStr(c), CLng(a) - 1) + 1;
}
function FixStr(s, n) {
    s = CStr(s);
    return s.length >= n ? s.slice(0, n) : s + " ".repeat(n - s.length);
}

function Format(v, fmt) {
    if (fmt === undefined || fmt === "") return CStr(v);
    let n = toNum(v);
    const sections = fmt.split(";");
    if (n < 0 && sections.length > 1) { fmt = sections[1]; n = -n; } else fmt = sections[0];
    const m = /^([^#0,.]*)([#0,]*)(?:\.([#0]*))?(.*)$/.exec(fmt);
    if (!m) return CStr(v);
    const [, prefix, intPart, decPart = "", suffix] = m;
    const decimals = decPart.length;
    const minDec = (decPart.match(/0/g) || []).length;
    const minInt = (intPart.match(/0/g) || []).length;
    const neg = n < 0;
    const f = 10 ** decimals;
    let r = Math.round(Math.abs(n) * f) / f;
    let [ip, dp = ""] = r.toFixed(decimals).split(".");
    if (ip === "0" && minInt === 0) ip = "";
    while (ip.length < minInt) ip = "0" + ip;
    if (intPart.includes(",")) ip = ip.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    while (dp.length > minDec && dp.endsWith("0")) dp = dp.slice(0, -1);
    const body = ip + (decimals && (dp || decPart.length) ? (dp ? "." + dp : (minDec ? "." : "")) : "");
    return (neg && r !== 0 ? "-" : "") + prefix + body + suffix;
}

function RGB(r, g, b) { return CLng(r) + CLng(g) * 256 + CLng(b) * 65536; }
const QB_COLORS = [0x000000, 0x800000, 0x008000, 0x808000, 0x000080, 0x800080, 0x008080, 0xC0C0C0,
    0x808080, 0xFF0000, 0x00FF00, 0xFFFF00, 0x0000FF, 0xFF00FF, 0x00FFFF, 0xFFFFFF];  // as VB BGR longs
function QBColor(i) { return QB_COLORS[CLng(i) & 15]; }

function Now() { return Date.now() / 86400000 + 25569; }
function Timer() { const d = new Date(); return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds() + d.getMilliseconds() / 1000; }
function pad2(n) { return String(n).padStart(2, "0"); }
function DateStr() { const d = new Date(); return `${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}-${d.getFullYear()}`; }
function TimeStr() { const d = new Date(); return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`; }
function CurDir() { return "C:"; }

function DimArray(bounds, init) {
    const make = (i) => {
        const a = new Array(CLng(bounds[i]) + 1);
        for (let k = 0; k < a.length; k++) a[k] = i + 1 < bounds.length ? make(i + 1) : (typeof init === "function" ? init() : init);
        return a;
    };
    return make(0);
}

// ============================================================================ colors & fonts

const SYS_COLORS = {
    0: "#C0C0C0", 1: "#008080", 2: "#000080", 3: "#808080", 4: "#C0C0C0", 5: "#FFFFFF", 6: "#000000",
    7: "#000000", 8: "#000000", 9: "#FFFFFF", 10: "#C0C0C0", 11: "#C0C0C0", 12: "#808080", 13: "#000080",
    14: "#FFFFFF", 15: "#C0C0C0", 16: "#808080", 17: "#808080", 18: "#000000", 19: "#C0C0C0", 20: "#FFFFFF",
};
function cssColor(c) {
    c = Number(c);
    if (c >= 0x80000000) return SYS_COLORS[c - 0x80000000] || "#C0C0C0";
    if (c < 0) return SYS_COLORS[(c >>> 0) - 0x80000000] || "#C0C0C0";
    const r = c & 255, g = (c >> 8) & 255, b = (c >> 16) & 255;
    return `rgb(${r},${g},${b})`;
}
const FONT_MAP = {
    "ms sans serif": "'Microsoft Sans Serif', Tahoma, Arial, sans-serif",
    "ms serif": "'Times New Roman', Times, serif",
    "arial": "Arial, Helvetica, sans-serif",
    "times new roman": "'Times New Roman', Times, serif",
    "courier new": "'Courier New', Courier, monospace",
    "courier": "'Courier New', Courier, monospace",
    "system": "'Microsoft Sans Serif', Tahoma, sans-serif",
};
function cssFont(name) { return FONT_MAP[String(name).toLowerCase()] || `'${name}', Arial, sans-serif`; }

function mnemonic(s, on) {
    s = CStr(s).replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    if (!on) return s;
    return s.replace(/&&|&/g, (m) => (m === "&&" ? "&" : ""));
}

// ============================================================================ assets, pictures, sound

const ASSET_INDEX = {};
function assetUrl(path) {
    const base = String(path).replace(/\\/g, "/").split("/").pop().toLowerCase();
    if (ASSET_INDEX[base]) return ASSET_INDEX[base];
    const stem = base.replace(/\.[^.]*$/, "");
    return ASSET_INDEX[stem + ".png"] || null;
}
function LoadPicture(path) {
    if (path === undefined || Trim(path) === "") return null;
    const url = assetUrl(Trim(path));
    if (!url) { console.warn("LoadPicture: missing " + path); throw new VBError(53); }
    return { url };
}
function pictureUrl(p) {
    if (!p) return null;
    if (p.url) return p.url;
    if (p.frx) return "assets/" + p.frx;
    return null;
}

let audioCtx = null;
function Beep() {
    try {
        audioCtx = audioCtx || new AudioContext();
        const o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.frequency.value = 880;
        g.gain.value = 0.05;
        o.connect(g); g.connect(audioCtx.destination);
        o.start(); o.stop(audioCtx.currentTime + 0.08);
    } catch { /* no audio */ }
}

// ============================================================================ files (saved games live in localStorage)

function migrateRecord(item) {
    if (!item || typeof item !== "object" || Array.isArray(item)) return item;
    return Object.fromEntries(Object.entries(item).map(([k, v]) => [LEGACY_FIELDS[k] || k, v]));
}

const VFS = {
    prefix: "gazfull:",
    rel(path) { return String(path).replace(/\\/g, "/").replace(/^[a-z]:/i, "").replace(/^\/+/, "").toLowerCase(); },
    key(path) { return this.prefix + this.rel(path); },
    read(path) { const s = localStorage.getItem(this.key(path)); return s === null ? null : JSON.parse(s).map(migrateRecord); },
    write(path, items) { localStorage.setItem(this.key(path), JSON.stringify(items)); },
    exists(path) { return localStorage.getItem(this.key(path)) !== null; },
    list(dir, pattern) {
        const d = this.rel(dir).replace(/\/?$/, "/").replace(/^\/$/, "");
        const re = new RegExp("^" + String(pattern || "*.*").toLowerCase().replace(/[.+^${}()|[\]\\]/g, "\\$&")
            .replace(/\*/g, ".*").replace(/\?/g, ".").replace(/\\\.\.\*$/, "(\\..*)?") + "$");
        const out = [];
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (!k.startsWith(this.prefix + d)) continue;
            const name = k.slice(this.prefix.length + d.length);
            if (!name.includes("/") && re.test(name)) out.push(name);
        }
        return out.sort();
    },
};
if (!VFS.exists("units/config.dat")) {
    VFS.write("units/config.dat", [{ cdDrive: "D:", emailDir: FixStr("C:\\email\\", 128), soundOn: -1 }]);
}
for (let i = 1; i <= 5; i++) {
    if (!VFS.exists(`savegame/game${i}`)) VFS.write(`savegame/game${i}`, [FixStr(".......", 20)]);
}
const fileHandles = {};
function FileOpen(n, path) { fileHandles[n] = { path, items: VFS.read(path) || [], pos: 0 }; }
function fileHandle(n) { const h = fileHandles[n]; if (!h) throw new VBError(52); return h; }
function FileGet(n, pos, current) {
    const h = fileHandle(n);
    const i = pos === null ? h.pos : CLng(pos) - 1;
    h.pos = i + 1;
    const v = h.items[i];
    return v === undefined ? current : structuredClone(v);
}
function FilePut(n, pos, value) {
    const h = fileHandle(n);
    const i = pos === null ? h.pos : CLng(pos) - 1;
    h.items[i] = structuredClone(value);
    h.pos = i + 1;
}
function FileClose(...nums) {
    for (const n of nums.length ? nums : Object.keys(fileHandles)) {
        const h = fileHandles[n];
        if (h) { VFS.write(h.path, h.items); delete fileHandles[n]; }
    }
}
function Dir(path) {
    if (path === undefined) return "";
    return VFS.exists(path) ? String(path).replace(/\\/g, "/").split("/").pop() : "";
}

// ============================================================================ global objects

const Screen = {
    Width: SCREEN_W * TW,
    Height: SCREEN_H * TW,
    _mp: 0,
    get MousePointer() { return this._mp; },
    set MousePointer(v) { this._mp = CLng(v); VB.updateCursor(); },
};
const App = { PrevInstance: 0, Path: "", EXEName: "GAZ2", Title: "Gazillionaire" };

// ============================================================================ event dispatch

// VB runs one event handler at a time; new input is only accepted while every running
// handler is parked in a modal Show / MsgBox / DoEvents.
VB.canDispatch = () => VB.running <= VB.waiting;

VB.call = function (fn, args) {
    VB.running++;
    let r;
    try {
        r = fn(...args);
    } catch (e) {
        VB.running--;
        VB.fail(e);
        return undefined;
    }
    if (r && typeof r.then === "function") {
        return r.catch(VB.fail).finally(() => { VB.running--; VB.updateCursor(); });
    }
    VB.running--;
    return r;
};

VB.wait = async function (promise) {
    VB.waiting++;
    try { return await promise; } finally { VB.waiting--; }
};

VB.fail = function (e) {
    if (e === END_SIGNAL) return;
    console.error(e && e.stack || e);
    const msg = e instanceof VBError ? `Run-time error ${e.number}: ${e.message}` : `Internal error: ${e && e.message}`;
    VB.toast(msg);
};

VB.toast = function (msg) {
    const t = document.createElement("div");
    t.className = "vb-toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 8000);
};

async function DoEvents() {
    await VB.wait(new Promise((r) => setTimeout(r, 0)));
    return 0;
}

function End() {
    VB.ended = true;
    for (const f of Object.values(VB.forms)) f.$stopAll();
    VB.screen.innerHTML = "";
    const d = document.createElement("div");
    d.className = "vb-ended";
    d.innerHTML = "<div>Gazillionaire has ended.</div><button>Play again</button>";
    d.querySelector("button").onclick = () => location.reload();
    VB.screen.appendChild(d);
    throw END_SIGNAL;
}

VB.updateCursor = function () {
    const busy = Screen._mp === 11 || (VB.active && VB.active.p.MousePointer === 11);
    VB.screen.style.cursor = busy ? "wait" : "";
};

// ============================================================================ message box

async function MsgBox(prompt, flags = 0, title = "Gazillionaire") {
    flags = CLng(flags);
    const kind = flags & 7;
    const buttons = [[["OK", 1]], [["OK", 1], ["Cancel", 2]], [["Abort", 3], ["Retry", 4], ["Ignore", 5]],
        [["Yes", 6], ["No", 7], ["Cancel", 2]], [["Yes", 6], ["No", 7]], [["Retry", 4], ["Cancel", 2]]][kind] || [["OK", 1]];
    const overlay = document.createElement("div");
    overlay.className = "vb-modal-overlay";
    overlay.style.zIndex = 10000;
    const box = document.createElement("div");
    box.className = "vb-msgbox";
    box.innerHTML = `<div class="vb-titlebar"></div><div class="vb-msgtext"></div><div class="vb-msgbuttons"></div>`;
    box.querySelector(".vb-titlebar").textContent = CStr(title);
    box.querySelector(".vb-msgtext").textContent = CStr(prompt);
    const result = new Promise((resolve) => {
        for (const [label, code] of buttons) {
            const b = document.createElement("button");
            b.textContent = label;
            b.onclick = () => { overlay.remove(); resolve(code); };
            box.querySelector(".vb-msgbuttons").appendChild(b);
        }
    });
    overlay.appendChild(box);
    VB.screen.appendChild(overlay);
    box.querySelector("button").focus();
    return VB.wait(result);
}

async function InputBox(prompt, title = "Gazillionaire", def = "") {
    const overlay = document.createElement("div");
    overlay.className = "vb-modal-overlay";
    overlay.style.zIndex = 10000;
    const box = document.createElement("div");
    box.className = "vb-msgbox";
    box.innerHTML = `<div class="vb-titlebar"></div><div class="vb-msgtext"></div><input><div class="vb-msgbuttons"><button>OK</button><button>Cancel</button></div>`;
    box.querySelector(".vb-titlebar").textContent = CStr(title);
    box.querySelector(".vb-msgtext").textContent = CStr(prompt);
    const input = box.querySelector("input");
    input.value = CStr(def);
    const [ok, cancel] = box.querySelectorAll("button");
    const result = new Promise((resolve) => {
        ok.onclick = () => { overlay.remove(); resolve(input.value); };
        cancel.onclick = () => { overlay.remove(); resolve(""); };
    });
    overlay.appendChild(box);
    VB.screen.appendChild(overlay);
    input.focus();
    return VB.wait(result);
}

// ============================================================================ controls

const DEFAULTS = {
    common: { Left: 0, Top: 0, Width: 0, Height: 0, Visible: -1, Enabled: -1, Tag: "", MousePointer: 0, Index: 0,
        FontName: "MS Sans Serif", FontSize: 8.25, FontBold: -1, FontItalic: 0, FontUnderline: 0, FontStrikethru: 0,
        ForeColor: 0x80000008, BackColor: 0x8000000F },
    VideoSoftElastic: { Align: 0, AutoSizeChildren: 0, BorderWidth: 6, ChildSpacing: 6, BevelInner: 3, BevelOuter: 2,
        BevelInnerWidth: 1, BevelOuterWidth: 2, FloodDirection: 0, FloodColor: 192, FloodPercent: 0, Caption: "",
        CaptionPos: 1, BevelChildren: 0, AccessKey: 0, WordWrap: -1, Picture: null, PicturePos: 4, CaptionStyle: 0,
        ShadowColor: 0x80000010, Style: 0, Value: 0, Text: "", SelStart: 0, SelLength: 0 },
    Label: { Caption: "", Alignment: 0, BackStyle: 1, BorderStyle: 0, AutoSize: 0, WordWrap: 0, BackColor: 0x80000005 },
    TextBox: { Text: "", Alignment: 0, BorderStyle: 1, MultiLine: 0, MaxLength: 0, SelStart: 0, SelLength: 0, BackColor: 0x80000005 },
    Image: { Picture: null, Stretch: 0, BorderStyle: 0 },
    Timer: { Interval: 0 },
    MMControl: { Command: "", FileName: "", DeviceType: "", Notify: 0, Wait: 0 },
    SSCheck: { Caption: "", Value: 0, Alignment: 0, Font3D: 0 },
    SSOption: { Caption: "", Value: 0, Alignment: 0, Font3D: 0 },
    SpinButton: { Value: 0 },
    ComboBox: { Text: "", Sorted: 0, Style: 0, BackColor: 0x80000005 },
    FileListBox: { Path: "", Pattern: "*.*" },
    DirListBox: { Path: "C:\\" },
    DriveListBox: { Drive: "c:" },
    Grid: { Rows: 2, Cols: 2, FixedRows: 1, FixedCols: 1, Row: 1, Col: 1, ScrollBars: 3, GridLines: -1,
        HighLight: -1, BackColor: 0x80000005, Picture: null, TopRow: 1, LeftCol: 1 },
    GRAPH: { NumSets: 1, NumPoints: 5, ThisSet: 1, ThisPoint: 1, GraphType: 3, GraphStyle: 0, DrawMode: 2,
        GraphTitle: "", BottomTitle: "", LeftTitle: "", AutoInc: 1, Background: 15, Foreground: 16, DataReset: 0,
        ExtraData: 0, YAxisStyle: 0, YAxisMax: 0, YAxisMin: 0, YAxisTicks: 0, Labels: 1, GridStyle: 0,
        LegendStyle: 0, Palette: 0, RandomData: 1, BackColor: 0xFFFFFF },
};

class Control {
    constructor(form, parent, cls, name, props, kids) {
        this.$f = form;
        this.$parent = parent;
        this.$cls = cls;
        this.$name = name;
        this.$kids = [];
        this.$design = Object.assign({}, DEFAULTS.common, DEFAULTS[cls] || {}, props);
        this.p = Object.assign({}, this.$design);
        this.r = { x: 0, y: 0, w: 0, h: 0 };
        this.el = document.createElement("div");
        this.el.className = "vbctl vb-" + cls;
        this.el.dataset.name = name;
        this.el.$ctl = this;
        this.build();
        for (const k of kids || []) this.$kids.push(form.$makeControl(this, k));
        for (const k of this.$kids) (this.$content || this.el).appendChild(k.el);
        this.$wire();
    }
    get Name() { return this.$name; }
    get Index() { return this.p.Index; }
    get Parent() { return this.$f; }
    build() { }
    reset() {
        this.p = Object.assign({}, this.$design);
        this.onReset();
        for (const k of this.$kids) k.reset();
    }
    onReset() { }
    get(name) {
        this.$f.$ensure();
        if (name === "Left" || name === "Top" || name === "Width" || name === "Height") {
            this.$f.$layoutNow();
            if (this.r.laid) return Math.round({ Left: this.r.x, Top: this.r.y, Width: this.r.w, Height: this.r.h }[name] * TW);
        }
        return this.p[name];
    }
    set(name, v) {
        this.$f.$ensure();
        if (typeof this.$design[name] === "number" && typeof v !== "number" && v !== null && typeof v !== "object") v = toNum(v);
        if (typeof this.$design[name] === "string") v = CStr(v);
        if (typeof v === "boolean") v = v ? -1 : 0;
        const old = this.p[name];
        this.p[name] = v;
        this.changed(name, old);
        this.$f.$dirty();
    }
    changed(name, old) { }
    Move(l, t, w, h) {
        this.set("Left", l); this.set("Top", t);
        if (w !== undefined) this.set("Width", w);
        if (h !== undefined) this.set("Height", h);
    }
    Refresh() { this.$f.$layoutNow(); }
    SetFocus() { const i = this.el.querySelector("input,textarea"); if (i) i.focus(); }
    ZOrder() { }
    isVisible() { return !!this.p.Visible; }
    // geometry: nominal twips (p.Left...) -> pixel rect r relative to parent element
    layoutChildren() {
        const kids = this.$kids;
        if (!kids.length) return;
        const W = this.r.w, H = this.r.h;
        const dw = this.p.Width / TW, dh = this.p.Height / TW;
        const mode = this.$cls === "VideoSoftElastic" ? this.p.AutoSizeChildren : 0;
        if ((mode === 1 || mode === 3) && kids.some((k) => k.isVisible())) {
            const vis = kids.filter((k) => k.isVisible() && k.$cls !== "MMControl" && k.$cls !== "Timer")
                .sort((a, b) => (mode === 1 ? a.p.Left - b.p.Left : a.p.Top - b.p.Top));
            const bw = this.p.BorderWidth + (this.p.BevelOuter ? this.p.BevelOuterWidth : 0);
            const gap = this.p.ChildSpacing;
            const n = vis.length;
            const span = (mode === 1 ? W : H) - 2 * bw - gap * (n - 1);
            let pos = bw;
            vis.forEach((k, i) => {
                const size = Math.round(span * (i + 1) / n) - Math.round(span * i / n);
                if (mode === 1) k.place(pos, bw, size, H - 2 * bw);
                else k.place(bw, pos, W - 2 * bw, size);
                pos += size + gap;
            });
            for (const k of kids) if (!vis.includes(k)) k.place(k.p.Left / TW, k.p.Top / TW, k.p.Width / TW, k.p.Height / TW);
            return;
        }
        const sx = mode && dw ? W / dw : 1, sy = mode && dh ? H / dh : 1;
        let free = { x: 0, y: 0, w: W, h: H };
        for (const k of kids) {
            const a = k.p.Align || 0;
            if (k.$cls === "VideoSoftElastic" && a) {
                if (a === 1) { k.place(free.x, free.y, free.w, k.p.Height / TW); free.y += k.r.h; free.h -= k.r.h; }
                else if (a === 2) { k.place(free.x, free.y + free.h - k.p.Height / TW, free.w, k.p.Height / TW); free.h -= k.r.h; }
                else if (a === 3) { k.place(free.x, free.y, k.p.Width / TW, free.h); free.x += k.r.w; free.w -= k.r.w; }
                else if (a === 4) { k.place(free.x + free.w - k.p.Width / TW, free.y, k.p.Width / TW, free.h); free.w -= k.r.w; }
                else k.place(free.x, free.y, free.w, free.h);
            } else {
                k.place(k.p.Left / TW * sx, k.p.Top / TW * sy, k.p.Width / TW * sx, k.p.Height / TW * sy);
            }
        }
    }
    place(x, y, w, h) {
        const r = this.r;
        r.x = Math.round(x); r.y = Math.round(y); r.w = Math.max(0, Math.round(w)); r.h = Math.max(0, Math.round(h)); r.laid = true;
        const s = this.el.style;
        s.left = r.x + "px"; s.top = r.y + "px"; s.width = r.w + "px"; s.height = r.h + "px";
        this.layoutChildren();
    }
    render() {
        const p = this.p, s = this.el.style;
        s.display = p.Visible ? "" : "none";
        s.color = cssColor(p.ForeColor);
        s.fontFamily = cssFont(p.FontName);
        s.fontSize = (p.FontSize * 4 / 3).toFixed(2) + "px";
        s.fontWeight = p.FontBold ? "bold" : "normal";
        s.fontStyle = p.FontItalic ? "italic" : "normal";
        s.textDecoration = [p.FontUnderline ? "underline" : "", p.FontStrikethru ? "line-through" : ""].join(" ").trim() || "none";
        this.paint();
        for (const k of this.$kids) k.render();
    }
    paint() { }
    // events
    $wire() {
        const el = this.el;
        el.addEventListener("pointerdown", (e) => {
            if (e.target.closest(".vbctl") !== el || !this.$live()) return;
            this.onPointerDown(e);
            this.fire("MouseDown", ...this.mouseArgs(e));
        });
        el.addEventListener("pointerup", (e) => {
            if (e.target.closest(".vbctl") !== el || !this.$live()) return;
            this.fire("MouseUp", ...this.mouseArgs(e));
        });
        el.addEventListener("pointermove", (e) => {
            if (e.target.closest(".vbctl") !== el || !this.$live()) return;
            this.fire("MouseMove", ...this.mouseArgs(e));
        });
        el.addEventListener("click", (e) => {
            if (e.target.closest(".vbctl") !== el || !this.$live()) return;
            this.onClick(e);
        });
        el.addEventListener("dblclick", (e) => {
            if (e.target.closest(".vbctl") !== el || !this.$live()) return;
            this.fire("DblClick");
        });
    }
    $live() {
        for (let c = this; c; c = c.$parent) if (!c.p.Enabled || !c.p.Visible) return false;
        return this.$f.$acceptsInput();
    }
    onClick() { this.fire("Click"); }
    onPointerDown() { }
    mouseArgs(e) {
        const rect = this.el.getBoundingClientRect();
        const k = rect.width ? this.r.w / rect.width : 1;
        return [e.button === 2 ? 2 : 1, (e.shiftKey ? 1 : 0) | (e.ctrlKey ? 2 : 0) | (e.altKey ? 4 : 0),
            (e.clientX - rect.left) * k * TW, (e.clientY - rect.top) * k * TW];
    }
    fire(evt, ...args) {
        const h = this.$f.$handlers[this.$name + "_" + evt];
        if (!h || !VB.canDispatch()) return undefined;
        if (this.$array) args.unshift(this.p.Index);
        return VB.call(h, args);
    }
}

const CONTROL_PROPS = ["Left", "Top", "Width", "Height", "Visible", "Enabled", "Tag", "MousePointer",
    "FontName", "FontSize", "FontBold", "FontItalic", "FontUnderline", "FontStrikethru", "ForeColor", "BackColor",
    "Caption", "Text", "Picture", "Value", "Alignment", "BackStyle", "BorderStyle", "WordWrap", "AutoSize", "Stretch",
    "Align", "AutoSizeChildren", "BorderWidth", "ChildSpacing", "BevelInner", "BevelOuter", "BevelInnerWidth",
    "BevelOuterWidth", "FloodColor", "FloodPercent", "FloodDirection", "CaptionPos", "PicturePos", "CaptionStyle",
    "ShadowColor", "AccessKey", "SelStart", "SelLength", "Interval", "Command", "FileName", "DeviceType", "Notify",
    "Wait", "MaxLength", "MultiLine", "Font3D",
    "Rows", "Cols", "Row", "Col", "FixedRows", "FixedCols", "ScrollBars", "GridLines", "HighLight", "TopRow", "LeftCol",
    "NumSets", "NumPoints", "ThisSet", "ThisPoint", "GraphData", "ColorData", "LabelText", "LegendText", "ExtraData",
    "GraphTitle", "BottomTitle", "LeftTitle", "GraphType", "GraphStyle", "DrawMode", "DataReset", "AutoInc",
    "YAxisStyle", "YAxisMax", "YAxisMin", "YAxisTicks", "Background", "Foreground", "Labels", "GridStyle",
    "LegendStyle", "PatternData", "SymbolData", "XPosData", "FontFamily", "FontStyle", "FontUse", "Palette",
    "Path", "Pattern", "Drive", "Sorted", "Style"];
for (const name of CONTROL_PROPS) {
    Object.defineProperty(Control.prototype, name, {
        get() { return this.get(name); },
        set(v) { this.set(name, v); },
        configurable: true,
    });
}

function bevelCss(el, style, w, outline) {
    const s = el.style;
    if (!style || !w) { s.display = "none"; return; }
    s.display = "";
    const light = "#FFFFFF", dark = "#808080";
    let tl = light, br = dark;
    if (style === 3 || style === 4 || style === 9) { tl = dark; br = light; }
    s.borderWidth = w + "px";
    s.borderStyle = "solid";
    if (style === 5 || style === 6) {  // fillet / groove
        s.borderStyle = style === 6 ? "groove" : "ridge";
        s.borderColor = "#C0C0C0";
    } else if (style === 7) {  // shadow
        s.borderColor = `transparent ${dark} ${dark} transparent`;
    } else {
        s.borderColor = `${tl} ${br} ${br} ${tl}`;
    }
    s.outline = (style === 2 || style === 4 || outline) ? "1px solid #000" : "none";
    s.outlineOffset = "-1px";
}

class Elastic extends Control {
    build() {
        const el = this.el;
        this.$flood = document.createElement("div");
        this.$flood.className = "vb-flood";
        this.$pic = document.createElement("div");
        this.$pic.className = "vb-pic";
        this.$caption = document.createElement("div");
        this.$caption.className = "vb-caption";
        this.$innerBevel = document.createElement("div");
        this.$innerBevel.className = "vb-bevel";
        this.$outerBevel = document.createElement("div");
        this.$outerBevel.className = "vb-bevel";
        this.$childBevels = document.createElement("div");
        this.$childBevels.className = "vb-childbevels";
        el.append(this.$pic, this.$flood, this.$caption, this.$childBevels, this.$innerBevel, this.$outerBevel);
    }
    innerInset() {
        const p = this.p;
        return (p.BevelOuter ? p.BevelOuterWidth : 0) + (this.$kids.length ? 0 : p.BorderWidth);
    }
    paint() {
        const p = this.p, el = this.el;
        el.style.backgroundColor = cssColor(p.BackColor);
        bevelCss(this.$outerBevel, p.BevelOuter, p.BevelOuterWidth);
        const inset = this.innerInset();
        const showInner = !this.$kids.length && p.BevelInner && p.BevelInnerWidth;
        if (showInner) {
            Object.assign(this.$innerBevel.style, { left: inset + "px", top: inset + "px", right: inset + "px", bottom: inset + "px" });
            bevelCss(this.$innerBevel, p.BevelInner, p.BevelInnerWidth);
        } else this.$innerBevel.style.display = "none";
        const ci = inset + (showInner ? p.BevelInnerWidth : 0);
        // flood (progress bar)
        const f = this.$flood.style;
        if (p.FloodDirection && p.FloodPercent > 0) {
            const pct = Math.max(0, Math.min(100, p.FloodPercent));
            const iw = Math.max(0, this.r.w - 2 * ci), ih = Math.max(0, this.r.h - 2 * ci);
            f.display = "";
            f.backgroundColor = cssColor(p.FloodColor);
            let x = ci, y = ci, w = iw, h = ih;
            if (p.FloodDirection === 1) w = iw * pct / 100;
            else if (p.FloodDirection === 2) { w = iw * pct / 100; x = ci + iw - w; }
            else if (p.FloodDirection === 3) { h = ih * pct / 100; y = ci + ih - h; }
            else h = ih * pct / 100;
            Object.assign(f, { left: x + "px", top: y + "px", width: w + "px", height: h + "px" });
        } else f.display = "none";
        // picture
        const url = pictureUrl(p.Picture);
        const ps = this.$pic.style;
        if (url) {
            ps.display = "";
            ps.backgroundImage = `url("${url}")`;
            const pos = p.PicturePos;
            if (pos === 9) { ps.backgroundSize = "100% 100%"; ps.backgroundRepeat = "no-repeat"; ps.backgroundPosition = "0 0"; }
            else if (pos === 10) { ps.backgroundSize = "auto"; ps.backgroundRepeat = "repeat"; ps.backgroundPosition = "0 0"; }
            else if (pos === 11) { ps.backgroundSize = "contain"; ps.backgroundRepeat = "no-repeat"; ps.backgroundPosition = "center top"; }
            else {
                ps.backgroundSize = "auto"; ps.backgroundRepeat = "no-repeat";
                ps.backgroundPosition = `${["left", "center", "right"][Math.floor(pos / 3)]} ${["top", "center", "bottom"][pos % 3]}`;
            }
            Object.assign(ps, { left: ci + "px", top: ci + "px", right: ci + "px", bottom: pos === 11 ? "30%" : ci + "px" });
        } else ps.display = "none";
        // caption
        const c = this.$caption, cs = c.style;
        c.textContent = mnemonic(p.Caption, p.AccessKey);
        const pos = p.CaptionPos;
        cs.justifyContent = ["flex-start", "center", "flex-end"][Math.floor(pos / 3)];
        cs.textAlign = ["left", "center", "right"][Math.floor(pos / 3)];
        cs.alignItems = ["flex-start", "center", "flex-end"][pos % 3];
        cs.whiteSpace = p.WordWrap ? "pre-wrap" : "pre";
        Object.assign(cs, { left: ci + "px", top: ci + "px", right: ci + "px", bottom: ci + "px" });
        const sh = cssColor(p.ShadowColor);
        cs.textShadow = p.CaptionStyle === 1 || p.CaptionStyle === 3 ? `1px 1px 0 ${sh}` :
            p.CaptionStyle === 2 || p.CaptionStyle === 4 ? `-1px -1px 0 ${sh}` : "none";
        // bevels drawn around children
        const cb = this.$childBevels;
        cb.textContent = "";
        if (this.$kids.length && p.BevelInner && p.BevelInnerWidth && p.BevelChildren !== 3) {
            const w = p.BevelInnerWidth;
            for (const k of this.$kids) {
                if (!k.isVisible() || k.$cls === "MMControl" || k.$cls === "Timer") continue;
                if (p.BevelChildren === 2 && k.$cls === "VideoSoftElastic") continue;
                if (p.BevelChildren === 1 && k.$cls !== "VideoSoftElastic") continue;
                const b = document.createElement("div");
                b.className = "vb-bevel";
                Object.assign(b.style, { left: (k.r.x - w) + "px", top: (k.r.y - w) + "px", width: (k.r.w + 2 * w) + "px", height: (k.r.h + 2 * w) + "px", boxSizing: "border-box" });
                bevelCss(b, p.BevelInner, w);
                cb.appendChild(b);
            }
        }
    }
}

class Label extends Control {
    paint() {
        const p = this.p, s = this.el.style;
        s.backgroundColor = p.BackStyle ? cssColor(p.BackColor) : "transparent";
        s.textAlign = ["left", "right", "center"][p.Alignment] || "left";
        s.border = p.BorderStyle ? "1px solid #000" : "none";
        this.el.textContent = mnemonic(p.Caption, true);
    }
}

class TextBox extends Control {
    build() {
        this.$input = document.createElement("input");
        this.$input.spellcheck = false;
        this.el.appendChild(this.$input);
        this.$input.addEventListener("input", () => {
            this.p.Text = this.$input.value;
            this.fire("Change");
        });
    }
    get(name) {
        if (name === "Text") return this.$input.value;
        if (name === "SelStart") return this.$input.selectionStart || 0;
        if (name === "SelLength") return (this.$input.selectionEnd || 0) - (this.$input.selectionStart || 0);
        return super.get(name);
    }
    set(name, v) {
        if (name === "Text") {
            v = CStr(v);
            if (this.$input.value !== v) { this.$input.value = v; this.p.Text = v; this.fire("Change"); }
            return;
        }
        if (name === "SelStart") { const a = CLng(v); try { this.$input.setSelectionRange(a, a); } catch { } return; }
        if (name === "SelLength") { const a = this.$input.selectionStart || 0; try { this.$input.setSelectionRange(a, a + CLng(v)); } catch { } return; }
        super.set(name, v);
    }
    onReset() { this.$input.value = this.p.Text; }
    paint() {
        const p = this.p, s = this.$input.style;
        s.backgroundColor = cssColor(p.BackColor);
        s.color = cssColor(p.ForeColor);
        s.textAlign = ["left", "right", "center"][p.Alignment] || "left";
        s.border = p.BorderStyle ? "1px solid #000" : "none";
        if (p.MaxLength) this.$input.maxLength = p.MaxLength; else this.$input.removeAttribute("maxlength");
        if (this.$input.value !== p.Text && document.activeElement !== this.$input) this.$input.value = p.Text;
    }
}

class ComboBox extends Control {
    build() {
        this.$items = [];
        this.$sel = document.createElement("select");
        this.el.appendChild(this.$sel);
        this.$sel.addEventListener("change", () => {
            this.p.Text = this.$sel.value;
            this.fire("Click");
        });
        Object.defineProperty(this, "List", { value: new Proxy([], { get: (t, k) => /^\d+$/.test(k) ? (this.$items[k] ?? "") : t[k] }) });
    }
    get ListCount() { return this.$items.length; }
    get ListIndex() { return this.$items.indexOf(this.p.Text); }
    set ListIndex(i) { this.set("Text", this.$items[CLng(i)] ?? ""); this.fire("Click"); }
    AddItem(s) { this.$items.push(CStr(s)); if (this.p.Sorted) this.$items.sort(); this.$f.$dirty(); }
    RemoveItem(i) { this.$items.splice(CLng(i), 1); this.$f.$dirty(); }
    Clear() { this.$items = []; this.$f.$dirty(); }
    onReset() { this.$items = []; }
    paint() {
        const p = this.p, s = this.$sel.style;
        const opts = this.$items.includes(p.Text) || p.Text === "" ? this.$items : [p.Text, ...this.$items];
        if (this.$sel.options.length !== opts.length || [...this.$sel.options].some((o, i) => o.value !== opts[i])) {
            this.$sel.replaceChildren(...opts.map((t) => new Option(t, t)));
        }
        this.$sel.value = p.Text;
        s.backgroundColor = cssColor(p.BackColor);
        s.color = cssColor(p.ForeColor);
    }
}

class ListCtl extends Control {
    build() {
        this.$box = document.createElement("div");
        this.$box.className = "vb-list";
        this.el.appendChild(this.$box);
        this.$items = [];
        this.$index = -1;
        Object.defineProperty(this, "List", { value: new Proxy([], { get: (t, k) => /^\d+$/.test(k) ? (this.items()[k] ?? "") : t[k] }) });
        this.$box.addEventListener("click", (e) => {
            const row = e.target.closest("[data-i]");
            if (!row || !this.$live()) return;
            this.pick(+row.dataset.i);
            this.fire("Click");
        });
    }
    items() { return this.$items; }
    get ListCount() { return this.items().length; }
    get ListIndex() { return this.$index; }
    set ListIndex(i) { this.pick(CLng(i)); this.fire("Click"); }
    pick(i) { this.$index = i; this.$f.$dirty(); }
    onClick() { }
    paint() {
        const p = this.p, items = this.items();
        this.$box.style.backgroundColor = cssColor(p.BackColor === 0x8000000F ? 0x80000005 : p.BackColor);
        this.$box.replaceChildren(...items.map((t, i) => {
            const d = document.createElement("div");
            d.dataset.i = i;
            d.textContent = t;
            if (i === this.$index) d.className = "sel";
            return d;
        }));
    }
}

class FileListBox extends ListCtl {
    items() { return VFS.list(this.p.Path, this.p.Pattern); }
    get(name) {
        if (name === "FileName") { const it = this.items(); return this.$index >= 0 && this.$index < it.length ? it[this.$index] : ""; }
        return super.get(name);
    }
    set(name, v) {
        if (name === "FileName") { this.pick(this.items().indexOf(VFS.rel(v).split("/").pop())); return; }
        super.set(name, v);
        if (name === "Path" || name === "Pattern") { this.$index = -1; this.fire("PathChange"); }
    }
}

class DirListBox extends ListCtl {
    items() { return [this.p.Path || "C:\\"]; }
    set(name, v) {
        const old = this.p[name];
        super.set(name, v);
        if (name === "Path" && old !== this.p.Path) this.fire("Change");
    }
}

class DriveListBox extends ListCtl {
    items() { return ["c: [browser storage]"]; }
    set(name, v) {
        if (name === "Drive") v = CStr(v).slice(0, 2).toLowerCase() || "c:";
        const old = this.p[name];
        super.set(name, v);
        if (name === "Drive" && old !== this.p.Drive) this.fire("Change");
    }
}

class ImageCtl extends Control {
    build() {
        this.$img = document.createElement("img");
        this.$img.draggable = false;
        this.el.appendChild(this.$img);
        this.$img.addEventListener("load", () => {
            if (!this.p.Stretch) {
                this.p.Width = this.$img.naturalWidth * TW;
                this.p.Height = this.$img.naturalHeight * TW;
                this.$f.$dirty();
            }
        });
    }
    paint() {
        const url = pictureUrl(this.p.Picture);
        if (!url) { this.$img.style.display = "none"; this.$img.removeAttribute("src"); return; }
        this.$img.style.display = "";
        if (this.$img.getAttribute("src") !== url) this.$img.src = url;
    }
}

class TimerCtl extends Control {
    changed() { this.restart(); }
    onReset() { this.stop(); }
    stop() { if (this.$t) clearInterval(this.$t); this.$t = null; }
    restart() {
        this.stop();
        if (!this.$f.loaded || !this.p.Enabled || !this.p.Interval) return;
        this.$t = setInterval(() => {
            if (this.$busy || VB.ended) return;
            const r = this.fire("Timer");
            if (r && r.then) { this.$busy = true; r.finally(() => { this.$busy = false; }); }
        }, Math.max(55, this.p.Interval));
    }
    render() { this.el.style.display = "none"; }
}

class MMControl extends Control {
    set(name, v) {
        super.set(name, v);
        if (name !== "Command") return;
        const cmd = CStr(v).toLowerCase();
        if (cmd === "open") {
            this.close();
            const url = assetUrl(this.p.FileName);
            if (url && !VB.muted) this.$audio = new Audio(url);
        } else if (cmd === "play") {
            if (this.$audio) this.$audio.play().catch(() => { });
        } else if (cmd === "stop" || cmd === "pause") {
            if (this.$audio) this.$audio.pause();
        } else if (cmd === "close") this.close();
        else if (cmd === "prev") { if (this.$audio) this.$audio.currentTime = 0; }
    }
    close() { if (this.$audio) { this.$audio.pause(); this.$audio = null; } }
    onReset() { this.close(); }
    render() { this.el.style.display = "none"; }
}

class SSCheck extends Control {
    build() {
        this.$box = document.createElement("span");
        this.$box.className = "vb-checkbox";
        this.$label = document.createElement("span");
        this.el.append(this.$box, this.$label);
    }
    onClick() {
        this.set("Value", this.p.Value ? 0 : -1);
        this.fire("Click", this.p.Value);
    }
    paint() {
        const p = this.p;
        this.el.style.backgroundColor = cssColor(p.BackColor);
        this.el.style.flexDirection = p.Alignment ? "row-reverse" : "row";
        this.$box.textContent = p.Value ? "\u2714" : "";
        this.$label.textContent = mnemonic(p.Caption, true);
        this.el.style.opacity = p.Enabled ? 1 : 0.5;
    }
}

class SSOption extends SSCheck {
    build() { super.build(); this.$box.className = "vb-radio"; }
    onClick() {
        this.select();
        this.fire("Click", -1);
    }
    select() {
        const siblings = this.$parent ? this.$parent.$kids : this.$f.$top;
        for (const k of siblings) if (k !== this && k.$cls === "SSOption" && k.p.Value) k.set("Value", 0);
        this.set("Value", -1);
    }
    set(name, v) {
        super.set(name, v);
        if (name === "Value" && toNum(v)) {
            const siblings = this.$parent ? this.$parent.$kids : this.$f.$top;
            for (const k of siblings) if (k !== this && k.$cls === "SSOption" && k.p.Value) { k.p.Value = 0; }
        }
    }
    paint() { super.paint(); this.$box.textContent = this.p.Value ? "\u25CF" : ""; }
}

class SpinButton extends Control {
    build() {
        this.$up = document.createElement("div");
        this.$up.className = "vb-spin-up";
        this.$up.textContent = "\u25B2";
        this.$down = document.createElement("div");
        this.$down.className = "vb-spin-down";
        this.$down.textContent = "\u25BC";
        this.el.append(this.$up, this.$down);
    }
    onClick(e) {
        this.fire(e.target === this.$down ? "SpinDown" : "SpinUp");
    }
}

// ---------------------------------------------------------------------------- Grid

class Grid extends Control {
    build() {
        this.$table = document.createElement("div");
        this.$table.className = "vb-grid";
        this.el.appendChild(this.$table);
        this.onReset();
        const self = this;
        const arr = (store, def) => new Proxy([], {
            get(t, k) {
                if (typeof k === "string" && /^\d+$/.test(k)) { self.$f.$ensure(); const v = self[store][k]; return v === undefined ? def(+k) : v; }
                return t[k];
            },
            set(t, k, v) { self[store][k] = toNum(v); self.$f.$dirty(); return true; },
        });
        this.ColWidth = arr("$colW", () => 64 * TW);
        this.RowHeight = arr("$rowH", () => 16 * TW);
        this.ColAlignment = arr("$colA", () => 0);
        this.FixedAlignment = arr("$fixA", () => 0);
    }
    onReset() {
        this.$cells = [];
        this.$pics = [];
        this.$colW = {}; this.$rowH = {}; this.$colA = {}; this.$fixA = {};
    }
    cell(r, c) { return (this.$cells[r] && this.$cells[r][c]) || ""; }
    setCell(r, c, v) { (this.$cells[r] = this.$cells[r] || [])[c] = v; }
    get(name) {
        if (name === "Text") { this.$f.$ensure(); return this.cell(this.p.Row, this.p.Col); }
        if (name === "Picture") { this.$f.$ensure(); return (this.$pics[this.p.Row] || [])[this.p.Col] || null; }
        return super.get(name);
    }
    set(name, v) {
        if (name === "Text") { this.$f.$ensure(); this.setCell(this.p.Row, this.p.Col, CStr(v)); this.$f.$dirty(); return; }
        if (name === "Picture") { this.$f.$ensure(); (this.$pics[this.p.Row] = this.$pics[this.p.Row] || [])[this.p.Col] = v; this.$f.$dirty(); return; }
        if (name === "Rows") {
            const n = CLng(v);
            this.$cells.length = Math.min(this.$cells.length, n);
            this.$pics.length = Math.min(this.$pics.length, n);
        }
        super.set(name, v);
    }
    AddItem(item, index) {
        this.$f.$ensure();
        const row = CStr(item).split("\t");
        const at = index === undefined ? this.p.Rows : CLng(index);
        this.$cells.splice(at, 0, row);
        this.$pics.splice(at, 0, []);
        this.p.Rows++;
        this.$f.$dirty();
    }
    RemoveItem(index) {
        this.$f.$ensure();
        const at = CLng(index);
        this.$cells.splice(at, 1);
        this.$pics.splice(at, 1);
        this.p.Rows--;
        this.$f.$dirty();
    }
    Clear() { this.$cells = []; this.$pics = []; this.$f.$dirty(); }
    // VB grids move the selection on mouse-down, so MouseDown/MouseUp handlers already see the clicked Row/Col.
    onPointerDown(e) {
        const cell = e.target.closest("[data-r]");
        if (cell) {
            const r = +cell.dataset.r, c = +cell.dataset.c;
            if (r >= this.p.FixedRows) this.p.Row = r;
            if (c >= this.p.FixedCols) this.p.Col = c;
            this.$f.$dirty();
        }
    }
    paint() {
        const p = this.p, t = this.$table;
        t.textContent = "";
        t.style.backgroundColor = cssColor(p.BackColor);
        this.el.style.overflow = p.ScrollBars ? "auto" : "hidden";
        let y = 0;
        for (let r = 0; r < p.Rows; r++) {
            const h = (this.$rowH[r] ?? 16 * TW) / TW;
            let x = 0;
            for (let c = 0; c < p.Cols; c++) {
                const w = (this.$colW[c] ?? 64 * TW) / TW;
                const d = document.createElement("div");
                const fixed = r < p.FixedRows || c < p.FixedCols;
                d.className = "vb-cell" + (fixed ? " fixed" : "") + (p.HighLight && r === p.Row && c === p.Col && !fixed ? " sel" : "");
                d.dataset.r = r; d.dataset.c = c;
                Object.assign(d.style, { left: x + "px", top: y + "px", width: w + "px", height: h + "px", lineHeight: h + "px" });
                const al = r < p.FixedRows ? (this.$fixA[c] ?? this.$colA[c] ?? 0) : (this.$colA[c] ?? 0);
                d.style.textAlign = ["left", "right", "center"][al] || "left";
                d.textContent = this.cell(r, c);
                const pic = pictureUrl((this.$pics[r] || [])[c]);
                if (pic) { d.style.backgroundImage = `url("${pic}")`; }
                t.appendChild(d);
                x += w;
            }
            t.style.width = x + "px";
            y += h;
        }
        t.style.height = y + "px";
    }
}

// ---------------------------------------------------------------------------- Graph (GRAPH.VBX)

const GRAPH_COLORS = ["#000000", "#000080", "#008000", "#008080", "#800000", "#800080", "#808000", "#C0C0C0",
    "#808080", "#0000FF", "#00FF00", "#00FFFF", "#FF0000", "#FF00FF", "#FFFF00", "#FFFFFF"];

class Graph extends Control {
    build() {
        this.$canvas = document.createElement("canvas");
        this.el.appendChild(this.$canvas);
        this.onReset();
    }
    onReset() {
        const d = this.$design;
        this.$data = [];
        this.$colors = (d.ColorData || []).slice();
        this.$labels = (d.LabelText || []).slice();
        this.$legends = (d.LegendText || []).slice();
        this.$extra = [];
        this.$ci = this.$li = this.$gi = 0;
        this.$cursor = 0;
        this.$drawn = false;
        this.p.GraphData = 0; this.p.ColorData = 0; this.p.LabelText = ""; this.p.LegendText = "";
        const gd = d.GraphData || [];
        gd.forEach((v, i) => { this.$data[i] = v; });
    }
    set(name, v) {
        this.$f.$ensure();
        const p = this.p;
        switch (name) {
            case "GraphData": {
                const i = (p.ThisSet - 1) * p.NumPoints + (p.ThisPoint - 1);
                this.$data[i] = toNum(v);
                if (p.AutoInc) this.advance();
                return;
            }
            case "ColorData": this.$colors[this.$ci++] = CLng(v); return;
            case "LabelText": this.$labels[this.$li++] = CStr(v); return;
            case "LegendText": this.$legends[this.$gi++] = CStr(v); return;
            case "ExtraData": this.$extra[p.ThisPoint - 1] = CLng(v); this.$f.$dirty(); return;
            case "DataReset": {
                const k = CLng(v);
                if (k === 1 || k === 9) { this.$data = []; p.ThisSet = 1; p.ThisPoint = 1; }
                if (k === 2 || k === 9) { this.$colors = []; this.$ci = 0; }
                if (k === 3 || k === 9) this.$extra = [];
                if (k === 4 || k === 9) { this.$labels = []; this.$li = 0; }
                if (k === 5 || k === 9) { this.$legends = []; this.$gi = 0; }
                return;
            }
            case "DrawMode": {
                const k = CLng(v);
                if (k === 1) { this.$drawn = false; this.$f.$dirty(); }
                if (k >= 2) { this.$drawn = true; this.$f.$dirty(); }
                p.DrawMode = k;
                return;
            }
            case "NumSets": case "NumPoints":
                super.set(name, v);
                return;
        }
        super.set(name, v);
    }
    advance() {
        const p = this.p;
        p.ThisPoint++;
        if (p.ThisPoint > p.NumPoints) { p.ThisPoint = 1; p.ThisSet = p.ThisSet >= p.NumSets ? 1 : p.ThisSet + 1; }
    }
    value(s, i) { return this.$data[s * this.p.NumPoints + i] || 0; }
    paint() {
        const cv = this.$canvas, w = this.r.w, h = this.r.h;
        if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
        const g = cv.getContext("2d");
        const p = this.p;
        g.fillStyle = GRAPH_COLORS[p.Background] || "#FFFFFF";
        g.fillRect(0, 0, w, h);
        if (!this.$drawn) return;
        const fg = p.Foreground === 16 ? ([0, 1, 4, 5, 6, 8].includes(p.Background) ? "#FFFFFF" : "#000000") : GRAPH_COLORS[p.Foreground];
        g.fillStyle = fg; g.strokeStyle = fg;
        g.font = "bold 13px Arial";
        g.textAlign = "center"; g.textBaseline = "top";
        let top = 6;
        if (p.GraphTitle) { g.fillText(p.GraphTitle, w / 2, top); top += 20; }
        const sets = Math.max(1, p.NumSets), pts = Math.max(1, p.NumPoints);
        const color = (s, i) => {
            const idx = sets > 1 ? this.$colors[s] : this.$colors[i];
            return GRAPH_COLORS[(idx ?? (sets > 1 ? s : i) + 9) & 15];
        };
        g.font = "11px Arial";
        const legends = this.$legends.filter((x) => x);
        const legendW = legends.length ? Math.min(140, 22 + Math.max(...legends.map((t) => g.measureText(t).width))) : 0;
        const type = p.GraphType;
        if (type === 1 || type === 2) {
            const vals = []; for (let i = 0; i < pts; i++) vals.push(Math.max(0, this.value(0, i)));
            const total = vals.reduce((a, b) => a + b, 0) || 1;
            const cx = (w - legendW) / 2, cy = top + (h - top - 10) / 2, rad = Math.max(10, Math.min(cx - 20, (h - top - 30) / 2));
            let a = -Math.PI / 2;
            vals.forEach((v, i) => {
                const da = v / total * Math.PI * 2;
                const off = this.$extra[i] ? 10 : 0;
                const ox = Math.cos(a + da / 2) * off, oy = Math.sin(a + da / 2) * off;
                g.beginPath(); g.moveTo(cx + ox, cy + oy); g.arc(cx + ox, cy + oy, rad, a, a + da); g.closePath();
                g.fillStyle = color(0, i); g.fill(); g.strokeStyle = "#000"; g.stroke();
                if (this.$labels[i] && da > 0.2) {
                    g.fillStyle = fg;
                    g.fillText(this.$labels[i], cx + ox + Math.cos(a + da / 2) * (rad + 12), cy + oy + Math.sin(a + da / 2) * (rad + 12) - 6);
                }
                a += da;
            });
        } else {
            const left = 60, right = w - 10 - legendW, bottom = h - (p.BottomTitle ? 40 : 24);
            let max = -Infinity, min = 0;
            for (let s = 0; s < sets; s++) for (let i = 0; i < pts; i++) { max = Math.max(max, this.value(s, i)); min = Math.min(min, this.value(s, i)); }
            if (p.YAxisStyle === 2) { max = p.YAxisMax; min = p.YAxisMin; }
            if (!(max > min)) max = min + 1;
            const step = niceStep((max - min) / 5);
            max = Math.ceil(max / step) * step; min = Math.floor(min / step) * step;
            const Y = (v) => bottom - (v - min) / (max - min) * (bottom - top - 6);
            g.strokeStyle = fg; g.fillStyle = fg; g.textAlign = "right"; g.textBaseline = "middle";
            for (let v = min; v <= max + step / 2; v += step) {
                g.fillText(Format(v, "#,#0"), left - 4, Y(v));
                g.globalAlpha = 0.25; g.beginPath(); g.moveTo(left, Y(v)); g.lineTo(right, Y(v)); g.stroke(); g.globalAlpha = 1;
            }
            g.beginPath(); g.moveTo(left, top); g.lineTo(left, bottom); g.lineTo(right, bottom); g.stroke();
            const slot = (right - left) / pts;
            g.textAlign = "center"; g.textBaseline = "top";
            for (let i = 0; i < pts; i++) if (this.$labels[i]) g.fillText(this.$labels[i], left + slot * (i + 0.5), bottom + 4);
            if (p.BottomTitle) g.fillText(p.BottomTitle, (left + right) / 2, h - 18);
            if (type === 6 || type === 7 || type === 9 || type === 8) {
                for (let s = 0; s < sets; s++) {
                    g.strokeStyle = color(s, s); g.lineWidth = 2; g.beginPath();
                    for (let i = 0; i < pts; i++) { const x = left + slot * (i + 0.5), y = Y(this.value(s, i)); i ? g.lineTo(x, y) : g.moveTo(x, y); }
                    g.stroke();
                }
                g.lineWidth = 1;
            } else {
                const bw = slot * 0.8 / sets;
                for (let s = 0; s < sets; s++) for (let i = 0; i < pts; i++) {
                    const v = this.value(s, i), x = left + slot * i + slot * 0.1 + bw * s;
                    const y0 = Y(Math.max(0, min)), y1 = Y(v);
                    g.fillStyle = color(s, i);
                    g.fillRect(x, Math.min(y0, y1), bw - 1, Math.abs(y0 - y1));
                    if (type === 4) { g.fillStyle = "rgba(0,0,0,.35)"; g.fillRect(x + bw - 4, Math.min(y0, y1) + 3, 3, Math.abs(y0 - y1) - 3); }
                    g.strokeStyle = "#000"; g.strokeRect(x, Math.min(y0, y1), bw - 1, Math.abs(y0 - y1));
                }
            }
        }
        if (legends.length) {
            g.textAlign = "left"; g.textBaseline = "middle"; g.font = "11px Arial";
            let y = top + 10;
            this.$legends.forEach((t, s) => {
                if (!t) return;
                g.fillStyle = color(s, s); g.fillRect(w - legendW, y - 5, 10, 10);
                g.fillStyle = fg; g.fillText(t, w - legendW + 14, y);
                y += 16;
            });
        }
    }
}
function niceStep(x) {
    const e = 10 ** Math.floor(Math.log10(Math.max(x, 1e-9)));
    const f = x / e;
    return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * e;
}

const CONTROL_CLASSES = {
    VideoSoftElastic: Elastic, Label, TextBox, Image: ImageCtl, Timer: TimerCtl, MMControl, SSCheck, SSOption,
    SpinButton, Grid, GRAPH: Graph, ComboBox, FileListBox, DirListBox, DriveListBox,
};

// ============================================================================ forms

const FORM_DEFAULTS = { Caption: "", Tag: "", MousePointer: 0, BackColor: 0x80000005, ForeColor: 0x80000008,
    Left: 0, Top: 0, Width: 4800, Height: 3600, WindowState: 0, BorderStyle: 2, KeyPreview: 0, Visible: 0, Enabled: -1,
    ControlBox: -1, Picture: null, FontSize: 8.25 };

class Form {
    constructor(name, layout, factory) {
        const [, , props, kids] = layout;
        this.$name = name;
        this.$design = Object.assign({}, FORM_DEFAULTS, props, { Visible: 0 });
        this.p = Object.assign({}, this.$design);
        this.loaded = false;
        this.visible = false;
        this.el = document.createElement("div");
        this.el.className = "vbform";
        this.el.dataset.name = name;
        this.$title = document.createElement("div");
        this.$title.className = "vb-titlebar";
        this.$client = document.createElement("div");
        this.$client.className = "vb-client";
        this.el.append(this.$title, this.$client);
        this.controls = {};
        this.$top = (kids || []).map((k) => this.$makeControl(null, k));
        for (const k of this.$top) this.$client.appendChild(k.el);
        for (const [n, c] of Object.entries(this.controls)) if (!(n in this)) this[n] = c;
        this.$handlers = factory(this) || {};
        this.$wire();
    }
    $makeControl(parent, [cls, name, props, kids]) {
        const C = CONTROL_CLASSES[cls] || Control;
        const ctl = new C(this, parent, cls, name, props, kids);
        if ("Index" in props) {
            const arr = this.controls[name] || (this.controls[name] = []);
            arr[props.Index] = ctl;
            ctl.$array = true;
        } else this.controls[name] = ctl;
        return ctl;
    }
    $all() {
        const out = [];
        const walk = (ks) => { for (const k of ks) { out.push(k); walk(k.$kids); } };
        walk(this.$top);
        return out;
    }
    // ---- lifecycle
    $ensure() {
        if (this.loaded) return;
        this.loaded = true;
        VB.forms[this.$name] = this;
        this.$loading = this.$fire("Form_Load");
        for (const c of this.$all()) if (c instanceof TimerCtl) c.restart();
    }
    async $load() {
        this.$ensure();
        if (this.$loading && this.$loading.then) await this.$loading;
    }
    $fire(name, ...args) {
        const h = this.$handlers[name];
        if (!h) return undefined;
        return h(...args);
    }
    async Show(modal) {
        await this.$load();
        if (VB.ended) throw END_SIGNAL;
        if (!this.visible) {
            this.visible = true;
            this.p.Visible = -1;
            VB.screen.appendChild(this.el);
            this.$layoutNow();
            this.render();
        }
        VB.zstack = VB.zstack.filter((f) => f !== this);
        VB.zstack.push(this);
        this.$modal = modal ? 1 : 0;
        if (modal) {
            this.$overlay = this.$overlay || document.createElement("div");
            this.$overlay.className = "vb-modal-overlay";
            VB.screen.appendChild(this.$overlay);
        }
        this.$restack();
        await this.$activate();
        this.$focusFirst();
        if (modal) {
            await VB.wait(new Promise((resolve) => { this.$closeModal = resolve; }));
        }
    }
    async $activate() {
        if (VB.active === this) return;
        VB.active = this;
        VB.updateCursor();
        if (this.$activating) return;
        this.$activating = true;
        try { await this.$fire("Form_Activate"); } finally { this.$activating = false; }
    }
    $focusFirst() {
        const inputs = this.$all().filter((c) => c instanceof TextBox && c.p.Visible);
        inputs.sort((a, b) => (a.p.TabIndex || 0) - (b.p.TabIndex || 0));
        if (inputs[0]) setTimeout(() => { inputs[0].$input.focus(); inputs[0].$input.select(); }, 0);
    }
    $restack() {
        let z = 10;
        for (const f of VB.zstack) {
            if (f.$modal && f.$overlay) f.$overlay.style.zIndex = z++;
            f.el.style.zIndex = z++;
        }
    }
    Hide() {
        if (!this.visible) return;
        this.visible = false;
        this.p.Visible = 0;
        this.el.remove();
        if (this.$overlay) this.$overlay.remove();
        VB.zstack = VB.zstack.filter((f) => f !== this);
        if (VB.active === this) {
            VB.active = null;
            const top = VB.zstack[VB.zstack.length - 1];
            if (top) top.$activate().catch(VB.fail);
        }
        const done = this.$closeModal;
        this.$closeModal = null;
        if (done) done();
    }
    async $unload() {
        if (!this.loaded) return;
        let cancel = await this.$fire("Form_QueryUnload", 0, 1);
        if (cancel) return;
        cancel = await this.$fire("Form_Unload", 0);
        if (cancel) return;
        this.Hide();
        this.loaded = false;
        this.$stopAll();
        this.p = Object.assign({}, this.$design);
        for (const c of this.$top) c.reset();
        this.$isDirty = true;
    }
    $stopAll() {
        for (const c of this.$all()) {
            if (c instanceof TimerCtl) c.stop();
            if (c instanceof MMControl) c.close();
        }
    }
    $acceptsInput() {
        if (!this.visible || !VB.canDispatch() || VB.ended) return false;
        for (let i = VB.zstack.length - 1; i >= 0; i--) {
            const f = VB.zstack[i];
            if (f === this) return true;
            if (f.$modal) return false;
        }
        return true;
    }
    // ---- properties
    get(name) {
        this.$ensure();
        if (name === "Width" || name === "Height" || name === "Left" || name === "Top") {
            const g = this.geom();
            return Math.round({ Left: g.x, Top: g.y, Width: g.w, Height: g.h }[name] * TW);
        }
        if (name === "ScaleWidth") return Math.round(this.clientRect().w * TW);
        if (name === "ScaleHeight") return Math.round(this.clientRect().h * TW);
        return this.p[name];
    }
    set(name, v) {
        this.$ensure();
        if (typeof this.$design[name] === "number" && typeof v !== "number" && v !== null && typeof v !== "object") v = toNum(v);
        if (name === "Caption" || name === "Tag") v = CStr(v);
        this.p[name] = v;
        if (name === "MousePointer") VB.updateCursor();
        if (name === "Visible") { if (toNum(v)) this.Show(); else this.Hide(); }
        this.$dirty();
    }
    Move(l, t, w, h) {
        this.set("Left", l); this.set("Top", t);
        if (w !== undefined) this.set("Width", w);
        if (h !== undefined) this.set("Height", h);
    }
    Refresh() { this.$layoutNow(); }
    SetFocus() { }
    ZOrder() { }
    Cls() { }
    PrintForm() { }
    // ---- geometry & painting
    geom() {
        const p = this.p;
        if (p.WindowState === 2) return { x: 0, y: 0, w: SCREEN_W, h: SCREEN_H };
        return { x: p.Left / TW, y: p.Top / TW, w: p.Width / TW, h: p.Height / TW };
    }
    frame() {
        const p = this.p;
        if (p.WindowState === 2 && !p.BorderStyle) return { b: 0, t: 0 };
        const b = p.BorderStyle === 0 ? 0 : p.BorderStyle === 2 ? 4 : p.BorderStyle === 3 ? 4 : 1;
        const t = p.BorderStyle !== 0 && (p.Caption || p.ControlBox) ? 18 : 0;
        return { b, t };
    }
    clientRect() {
        const g = this.geom(), f = this.frame();
        return { x: f.b, y: f.b + f.t, w: Math.max(0, g.w - 2 * f.b), h: Math.max(0, g.h - 2 * f.b - f.t) };
    }
    $dirty() {
        if (this.$isDirty) return;
        this.$isDirty = true;
        requestAnimationFrame(() => { if (this.$isDirty) this.$layoutNow(); });
    }
    $layoutNow() {
        if (!this.$isDirty && this.$laidOnce) return;
        this.$isDirty = false;
        this.$laidOnce = true;
        const g = this.geom(), f = this.frame(), c = this.clientRect();
        Object.assign(this.el.style, { left: g.x + "px", top: g.y + "px", width: g.w + "px", height: g.h + "px", borderWidth: f.b + "px" });
        Object.assign(this.$client.style, { left: "0px", top: f.t + "px", width: c.w + "px", height: c.h + "px" });
        this.$title.style.display = f.t ? "" : "none";
        this.$title.style.height = f.t + "px";
        // align + absolute placement of top-level controls
        let free = { x: 0, y: 0, w: c.w, h: c.h };
        for (const k of this.$top) {
            const a = k.$cls === "VideoSoftElastic" ? k.p.Align : 0;
            if (a === 1) { k.place(free.x, free.y, free.w, k.p.Height / TW); free.y += k.r.h; free.h -= k.r.h; }
            else if (a === 2) { k.place(free.x, free.y + free.h - k.p.Height / TW, free.w, k.p.Height / TW); free.h -= k.r.h; }
            else if (a === 3) { k.place(free.x, free.y, k.p.Width / TW, free.h); free.x += k.r.w; free.w -= k.r.w; }
            else if (a === 4) { k.place(free.x + free.w - k.p.Width / TW, free.y, k.p.Width / TW, free.h); free.w -= k.r.w; }
            else if (a === 5) k.place(free.x, free.y, free.w, free.h);
            else k.place(k.p.Left / TW, k.p.Top / TW, k.p.Width / TW, k.p.Height / TW);
        }
        this.render();
    }
    render() {
        const p = this.p;
        this.$client.style.backgroundColor = cssColor(p.BackColor);
        const url = pictureUrl(p.Picture);
        this.$client.style.backgroundImage = url ? `url("${url}")` : "none";
        this.$title.textContent = p.Caption;
        this.el.style.cursor = p.MousePointer === 11 ? "wait" : "";
        for (const k of this.$top) k.render();
    }
    // ---- keyboard
    $wire() {
        this.el.addEventListener("pointerdown", () => { if (this.$acceptsInput() && VB.active !== this) this.$activate(); });
    }
    $key(e) {
        let code = null;
        if (e.key === "Enter") code = 13;
        else if (e.key === "Escape") code = 27;
        else if (e.key === "Backspace") code = 8;
        else if (e.key === "Tab") code = 9;
        else if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) code = e.key.charCodeAt(0);
        if (code === null) return;
        const inText = e.target && e.target.tagName === "INPUT" && !e.target.closest(".vb-msgbox");
        if (!inText) e.preventDefault();
        if (!this.$handlers.Form_KeyPress || !this.p.KeyPreview && inText) return;
        if (!VB.canDispatch()) return;
        if (inText) {
            VB.running++;
            let r;
            try { r = this.$handlers.Form_KeyPress(code); } catch (err) { VB.fail(err); } finally { VB.running--; }
            if (r && r.then) { VB.running++; r.catch(VB.fail).finally(() => { VB.running--; }); }
            else if (r === 0) e.preventDefault();
        } else {
            VB.call(this.$handlers.Form_KeyPress, [code]);
        }
    }
}

for (const name of ["Caption", "Tag", "MousePointer", "BackColor", "ForeColor", "Left", "Top", "Width", "Height",
    "WindowState", "KeyPreview", "Visible", "Enabled", "ScaleWidth", "ScaleHeight", "Picture", "FontSize", "Icon"]) {
    Object.defineProperty(Form.prototype, name, {
        get() { return this.get(name); },
        set(v) { this.set(name, v); },
        configurable: true,
    });
}

async function Load(form) { await form.$load(); }
async function Unload(form) { await form.$unload(); }

VB.form = function (name, layout, factory) {
    const f = new Form(name, layout, factory);
    window[name] = f;
    VB.forms[name] = f;
};

// ============================================================================ boot

VB.fit = function () {
    const scr = document.getElementById("screen");
    const k = Math.min(window.innerWidth / SCREEN_W, window.innerHeight / SCREEN_H);
    scr.style.transform = `scale(${k})`;
    scr.style.left = Math.max(0, (window.innerWidth - SCREEN_W * k) / 2) + "px";
    scr.style.top = Math.max(0, (window.innerHeight - SCREEN_H * k) / 2) + "px";
};
window.addEventListener("resize", () => VB.fit());
document.addEventListener("DOMContentLoaded", () => VB.fit());

VB.boot = async function () {
    VB.screen = document.getElementById("screen");
    document.addEventListener("keydown", (e) => {
        if (e.key === "F11" || e.key === "F12" || e.key === "F5") return;
        if (VB.active) VB.active.$key(e);
    });
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    for (const a of VB.assets) ASSET_INDEX[a.split("/").pop()] = "assets/" + a;
    for (const src of VB.scripts) {
        await new Promise((resolve, reject) => {
            const s = document.createElement("script");
            s.src = "gen/" + src + "?" + VB.build;
            s.onload = resolve;
            s.onerror = () => reject(new Error("failed to load " + src));
            document.head.appendChild(s);
        });
    }
    VB.call(Main, []);
};
