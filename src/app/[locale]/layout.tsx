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

    verification: {
      google: "t7xTRdDTMoG_WrKoDcYA8XCZnhN2qZ-u6YYfkSTWaQg",
    },

    alternates: {
      canonical: `${CONSTANTS.baseUrl}/${locale}`,
      languages: {
        en: `${CONSTANTS.baseUrl}/en`,
        ar: `${CONSTANTS.baseUrl}/ar`,
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
  const t = await getTranslations("HomePage.metadata");

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const personStructuredData = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: t("name"),
    url: `${CONSTANTS.baseUrl}/${locale}`,
    image: `${CONSTANTS.baseUrl}/og-image.webp`,
    sameAs: [
      "https://www.linkedin.com/in/ahmednasser2004/",
      "https://github.com/AhmedNasser1010",
      `${CONSTANTS.baseUrl}/${locale}`,
    ],
    jobTitle: t("jobTitle"),
    description: t("description"),
    homeLocation: {
      "@type": "Place",
      name: "Egypt",
    },
    worksFor: {
      "@type": "Organization",
      name: t("worksFor"),
    },
    knowsAbout: [
      "Next.js",
      "React",
      "Backend-as-a-Service",
      "Firebase",
      "Supabase",
      "TypeScript",
      "SEO",
      "Web Performance",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Taiba Institute",
    },
    inLanguage: locale,
  };

  const websiteStructuredData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: t("name"),
    url: `${CONSTANTS.baseUrl}/${locale}`,
    inLanguage: locale,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${CONSTANTS.baseUrl}/${locale}/projects?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const faqT = await getTranslations("HomePage.faq");
  const faqItems = faqT.raw("items") as Array<{ question: string; answer: string }>;
  const faqStructuredData = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const isEn = locale === "en";

  return (
    <html lang={locale} dir={isEn ? "ltr" : "rtl"}>
      <body
        className={`
          ${isEn ? `${openSans.variable} ${dmSerifDisplay.variable} ${archivoBlack.variable} ${dreamAvenue.variable}` : `${palatinoArabic.variable} ${myriadArabic.variable} ${montserratArabic.variable} ${openSans.variable}`}
          ${futura.variable}
          antialiased
          `}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personStructuredData, websiteStructuredData, faqStructuredData]),
          }}
        />
      </body>
    </html>
  );
}
