export const Locale = {
  ua: "uk-UA",
  en: "en-US",
  pl: "pl-PL",
} as const;

export type Locales = (typeof Locale)[keyof typeof Locale];
