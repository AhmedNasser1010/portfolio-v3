"use client";
import { LuHash } from "react-icons/lu";
import { BurgerMenu, Container } from "@/components/ui";
import { useLocale, useTranslations } from "next-intl";
import { Sidebar } from "@/components";
import { useRef, useState } from "react";
import LangSwitch from "@/components/ui/LangSwitch";
import { styleEnAr } from "@/lib/utils/styleEnAr";

const Header = () => {
  const locale = useLocale();
  const t = useTranslations("HomePage.hero");

  const [open, setOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleMenuToggle = (value?: boolean) => {
    if (typeof value === "boolean") {
      setOpen(value);
      return;
    }
    setOpen(!open);
  };

  return (
    <>
      <div>
        <p className="w-full mt-2 mb-[5px] font-palatino text-center">
          بِـسْـمِ الـلَّـهِ الـرَّحْـمَـنِ الـرَّحِـيـمِ
        </p>
        <header>
          <Container>
            <nav className="flex text-xs justify-between items-center">
              <div
                className={`${styleEnAr(locale, "font-dmSerif", "font-myriad")} flex items-center text-[28px]`}
              >
                <LuHash />
                <h1>{t("firstName")}</h1>
              </div>

              <div className="flex items-center gap-2">
                <LangSwitch />
                <BurgerMenu
                  open={open}
                  handleMnuToggle={handleMenuToggle}
                  ref={menuBtnRef}
                />
              </div>
            </nav>
          </Container>
        </header>
      </div>
      <Sidebar
        open={open}
        handleMenuToggle={handleMenuToggle}
        menuBtnRef={menuBtnRef}
      />
    </>
  );
};

export default Header;
