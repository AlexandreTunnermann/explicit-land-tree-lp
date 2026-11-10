const KEY = "lp_attr";
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"] as const;

type Stored = Partial<Record<(typeof PARAMS)[number] | "landing_page" | "referrer" | "fbclid_ts", string>>;

export type Attribution = Stored & {
  fbp?: string;
  fbc?: string;
  device_type: "mobile" | "tablet" | "desktop";
  os: "iOS" | "Android" | "Windows" | "macOS" | "Linux" | "Other";
  visitor_timezone?: string;
};

function read(): Stored {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Stored) : {};
  } catch {
    return {};
  }
}

function write(v: Stored) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(v));
  } catch {
    /* storage blocked */
  }
}

/** Call once from a useEffect in __root. First touch wins. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  const stored = read();
  const params = new URLSearchParams(window.location.search);
  let changed = false;
  for (const p of PARAMS) {
    const v = params.get(p);
    if (v && !stored[p]) {
      stored[p] = v;
      changed = true;
      if (p === "fbclid" && !stored.fbclid_ts) stored.fbclid_ts = String(Date.now());
    }
  }
  if (!stored.landing_page) {
    stored.landing_page = window.location.href.split("#")[0];
    changed = true;
  }
  if (stored.referrer === undefined) {
    stored.referrer = document.referrer || "";
    changed = true;
  }
  if (changed) write(stored);
}

function cookie(name: string): string | undefined {
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : undefined;
}

function deviceType(): Attribution["device_type"] {
  const ua = navigator.userAgent;
  const isIpadOs = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
  if (isIpadOs || /iPad|Tablet|PlayBook|Silk/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua))) return "tablet";
  if (/Mobi|iPhone|iPod|Android/i.test(ua)) return "mobile";
  return "desktop";
}

function osName(): Attribution["os"] {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return "iOS";
  if (/Android/.test(ua)) return "Android";
  if (/Windows/.test(ua)) return "Windows";
  if (/Mac OS X|Macintosh/.test(ua)) return "macOS";
  if (/Linux|CrOS/.test(ua)) return "Linux";
  return "Other";
}

export function getAttribution(): Attribution {
  const s = read();
  const fbp = cookie("_fbp");
  let fbc = cookie("_fbc");
  if (!fbc && s.fbclid) fbc = `fb.1.${s.fbclid_ts || Date.now()}.${s.fbclid}`;
  let tz: string | undefined;
  try {
    tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    tz = undefined;
  }
  return { ...s, fbp, fbc, device_type: deviceType(), os: osName(), visitor_timezone: tz };
}
