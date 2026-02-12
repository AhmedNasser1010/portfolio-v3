export function styleEnAr(
  locale: string,
  en: string,
  ar: string,
): string {
  return locale === "en" ? en : ar;
}
