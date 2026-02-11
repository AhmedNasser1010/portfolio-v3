import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans, DM_Serif_Display, Archivo_Black } from "next/font/google";
import "./globals.css";

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
  src: "../public/fonts/DreamAvenue.ttf",
});

const palatinoArabic = localFont({
  variable: "--font-palatino",
  src: "../public/fonts/PalatinoArabic-Regular.ttf",
});

const myriadArabic = localFont({
  variable: "--font-myriad",
  src: "../public/fonts/MyriadArabic-Regular.otf",
});

const montserratArabic = localFont({
  variable: "--font-montserrat",
  src: "../public/fonts/Montserrat-Arabic-Regular.ttf",
});

const futura = localFont({
  variable: "--font-futura",
  src: [
    {
      path: "../public/fonts/futura-pt/FuturaCyrillicMedium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/futura-pt/FuturaCyrillicDemi.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/futura-pt/FuturaCyrillicBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Ahmed Nasser | Frontend Web Developer",
  description:
    "Passionate Front-End Web Developer with solid experience in HTML, CSS, JavaScript, and React. He crafts seamless, engaging user experiences and brings creativity and precision to every digital project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        {children}
      </body>
    </html>
  );
}
