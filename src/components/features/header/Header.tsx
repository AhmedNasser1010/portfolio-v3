"use client";

import { LuHash } from "react-icons/lu";
import { BurgerMenu, Container } from "@/components/ui";
import { useLocale, useTranslations } from "next-intl";
import { Sidebar } from "@/components";
import { useEffect, useRef, useState } from "react";
import LangSwitch from "@/components/ui/LangSwitch";
import { styleEnAr } from "@/lib/utils/styleEnAr";

const parseRgb = (color: string) => {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!match) return null;

  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
  };
};

const isDarkColor = (color: string) => {
  const rgb = parseRgb(color);
  if (!rgb) return false;

  const luminance = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
  return luminance < 0.5;
};

const getSolidBackground = (element: HTMLElement | null) => {
  let current = element;

  while (current) {
    const backgroundColor = window.getComputedStyle(current).backgroundColor;
    if (
      backgroundColor &&
      backgroundColor !== "rgba(0, 0, 0, 0)" &&
      backgroundColor !== "transparent"
    ) {
      return backgroundColor;
    }
    current = current.parentElement;
  }

  return (
    window.getComputedStyle(document.body).backgroundColor ||
    "rgb(255, 255, 255)"
  );
};

const Header = () => {
  const locale = useLocale();
  const t = useTranslations("HomePage.hero");
  const [open, setOpen] = useState(false);
  const [useLightIcons, setUseLightIcons] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const controlsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateControlsContrast = () => {
      const controlsRect = controlsRef.current?.getBoundingClientRect();
      const x = controlsRect
        ? Math.round(controlsRect.left + controlsRect.width / 2)
        : locale === "ar"
          ? 28
          : window.innerWidth - 28;
      const y = controlsRect
        ? Math.round(controlsRect.top + controlsRect.height / 2)
        : 56;

      const stackedElements = document.elementsFromPoint(x, y) as HTMLElement[];
      const elementAtPoint =
        stackedElements.find((el) => !controlsRef.current?.contains(el)) ??
        null;
      const background = getSolidBackground(elementAtPoint);
      setUseLightIcons(isDarkColor(background));
    };

    updateControlsContrast();
    window.addEventListener("scroll", updateControlsContrast, {
      passive: true,
    });
    window.addEventListener("resize", updateControlsContrast);

    return () => {
      window.removeEventListener("scroll", updateControlsContrast);
      window.removeEventListener("resize", updateControlsContrast);
    };
  }, [locale]);

  const handleMenuToggle = (value?: boolean) => {
    if (typeof value === "boolean") {
      setOpen(value);
      return;
    }
    setOpen((prevOpen) => !prevOpen);
  };

  const iconColor = useLightIcons ? "#ffffff" : "#202020";

  return (
    <>
      <p className="w-full mt-2 mb-[5px] font-palatino text-center">
        بِـسْـمِ الـلَّـهِ الـرَّحْـمَـنِ الـرَّحِـيـمِ
      </p>
      <div>
        <header>
          <Container>
            <nav className="flex text-xs justify-between items-center">
              <div
                className={`${styleEnAr(locale, "font-dmSerif", "font-myriad")} flex items-center text-[28px]`}
              >
                <LuHash />
                <h1 className="z-0">{t("firstName")}</h1>
              </div>
            </nav>
          </Container>
        </header>
      </div>

      <div
        ref={controlsRef}
        className={`${styleEnAr(
          locale,
          "right-4 md:right-6",
          "left-4 md:left-6",
        )} fixed top-4 z-50 flex items-center gap-2 md:top-5 translate-y-[15px]`}
      >
        <LangSwitch color={iconColor} />
        <BurgerMenu
          open={open}
          handleMnuToggle={handleMenuToggle}
          ref={menuBtnRef}
          color={iconColor}
          closeColor={iconColor}
        />
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
