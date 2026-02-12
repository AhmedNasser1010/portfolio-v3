"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { HiMiniLanguage } from "react-icons/hi2";

export default function LangSwitch() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div>
      {locale === "en" ? (
        <Link href={pathname} locale="ar">
          <HiMiniLanguage className="text-lg" />
        </Link>
      ) : (
        <Link href={pathname} locale="en">
          <HiMiniLanguage className="text-lg" />
        </Link>
      )}
    </div>
  );
}
