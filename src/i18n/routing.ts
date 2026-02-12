import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "ar",
  localePrefix: "always",
  localeDetection: false,
  localeCookie: {
    name: "USER_LOCALE",
    // Expire in one year
    maxAge: 60 * 60 * 24 * 365,
  },
});
