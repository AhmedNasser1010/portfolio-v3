import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans, DM_Serif_Display, Archivo_Black } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import {
  getLocale,
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { CONSTANTS } from "@/constants";

const openSans = Open_Sans({
  variable: "--font-open",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dmSerif",
  subsets: ["latin"],
  weight: "400",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "400",
});

const dreamAvenue = localFont({
  variable: "--font-dream",
  src: "../../../public/fonts/DreamAvenue.ttf",
});

const palatinoArabic = localFont({
  variable: "--font-palatino",
  src: "../../../public/fonts/PalatinoArabic-Regular.ttf",
});

const myriadArabic = localFont({
  variable: "--font-myriad",
  src: "../../../public/fonts/MyriadArabic-Regular.otf",
});

const montserratArabic = localFont({
  variable: "--font-montserrat",
  src: "../../../public/fonts/Montserrat-Arabic-Regular.ttf",
});

const futura = localFont({
  variable: "--font-futura",
  src: [
    {
      path: "../../../public/fonts/futura-pt/FuturaCyrillicMedium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/futura-pt/FuturaCyrillicDemi.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/futura-pt/FuturaCyrillicBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("HomePage.metadata");

  return {
    metadataBase: new URL(CONSTANTS.baseUrl),
    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },

    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `${CONSTANTS.baseUrl}/${locale}`,
      siteName: "Ahmed Nasser",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: `${CONSTANTS.baseUrl}/og-image.webp`,
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [`${CONSTANTS.baseUrl}/og-image.webp`],
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`
          ${openSans.variable}
          ${dmSerifDisplay.variable}
          ${archivoBlack.variable}
          ${dreamAvenue.variable}
          ${palatinoArabic.variable}
          ${myriadArabic.variable}
          ${montserratArabic.variable}
          ${futura.variable}
          antialiased
          `}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
