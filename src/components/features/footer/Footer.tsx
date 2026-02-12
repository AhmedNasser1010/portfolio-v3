"use client";
import { Container } from "@/components/ui";
import { styleEnAr } from "@/lib/utils/styleEnAr";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("HomePage.footer");
  return (
    <footer className="w-full border-t border-black/10 bg-[#202020] text-white">
      <Container className="py-3 text-center">
        <div className="w-full space-y-2 text-xs">
          <p className={`${styleEnAr(locale, "font-futura", "font-palatino")}`}>
            {t("tagline")}
          </p>
          <p className="text-[9px]">{t("copyright")}</p>
        </div>
      </Container>
    </footer>
  );
}
