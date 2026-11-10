import { site } from "@/content/site";

export type City = (typeof site.geo.cities)[number];

export function telHref(): string {
  return "tel:" + site.contact.phoneE164;
}

function norm(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[\s\-_+]+/g, " ")
    .trim();
}

/** Matches a slug or name against the approved cities (case-insensitive; space, -, _ and + are equivalent). */
export function cityBySlugOrName(value: string | undefined | null): City | undefined {
  if (!value || typeof value !== "string") return undefined;
  const v = norm(value);
  if (!v) return undefined;
  return site.geo.cities.find((c) => norm(c.slug) === v || norm(c.name) === v);
}

/** Keeps only digits, max 10 (drops a leading US "1" from 11 digits). */
export function phoneDigits(value: string): string {
  let d = value.replace(/\D/g, "");
  if (d.length >= 11 && d.startsWith("1")) d = d.slice(1);
  return d.slice(0, 10);
}

/** Progressive US mask: (267 → (267) 223 → (267) 223-0222 */
export function formatPhone(value: string): string {
  const d = phoneDigits(value);
  if (d.length === 0) return "";
  if (d.length <= 3) return "(" + d;
  if (d.length <= 6) return "(" + d.slice(0, 3) + ") " + d.slice(3);
  return "(" + d.slice(0, 3) + ") " + d.slice(3, 6) + "-" + d.slice(6);
}

export function isValidUsPhone(value: string): boolean {
  const d = phoneDigits(value);
  if (d.length !== 10) return false;
  if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(d)) return false;
  if (/^(\d)\1{9}$/.test(d)) return false;
  return true;
}
