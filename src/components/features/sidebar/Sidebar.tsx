"use client";
import { motion } from "motion/react";
import { ListItem } from "@/components/ui";
import { useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { LINKS } from "@/constants";

interface MenuProps {
  open: boolean;
  handleMenuToggle: (arg0?: boolean) => void;
  menuBtnRef: React.RefObject<HTMLButtonElement | null>;
}

const Sidebar = ({ open, handleMenuToggle, menuBtnRef }: MenuProps) => {
  const locale = useLocale();
  const t = useTranslations("HomePage.navigation");
  const asideRef = useRef<HTMLDivElement | null>(null);
  const isEn = locale === "en";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!open) return;

      const aside = asideRef.current;
      const menuBtn = menuBtnRef?.current ?? null;

      if (aside && aside.contains(e.target as Node)) return;

      if (menuBtn && menuBtn.contains(e.target as Node)) return;

      handleMenuToggle(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <motion.aside
      ref={asideRef}
      className={`bg-[#202020] px-12 pb-9 pt-10 fixed top-0 ${isEn ? "left-0" : "right-0"} w-[320px] h-full p-6 text-white gap-10 lg:flex z-50 flex flex-col justify-between`}
      variants={{
        open: {
          x: 0,
          borderRadius: 0,
          transition: { duration: 0.6, ease: "circInOut" },
        },
        closed: {
          x: isEn ? "-100%" : "100%",
          borderTopLeftRadius: isEn ? 0 : "50%",
          borderBottomLeftRadius: isEn ? 0 : "50%",
          borderTopRightRadius: isEn ? "50%" : 0,
          borderBottomRightRadius: isEn ? "50%" : 0,
          transition: { duration: 0.6, ease: "circInOut" },
        },
      }}
      initial="closed"
      animate={open ? "open" : "closed"}
    >
      <div className="h-[60%] flex flex-col justify-between">
        <div className="pb-8">
          <div className="pb-4 flex items-center justify-between">
            <span className="font-bold text-[#b5b5b5]">{t("menu")}</span>
          </div>
          <ul className="flex flex-col gap-3">
            <ListItem
              title={t("home")}
              link="#home"
              onClick={() => handleMenuToggle(false)}
            />
            <ListItem
              title={t("about")}
              link="#about"
              onClick={() => handleMenuToggle(false)}
            />
            <ListItem
              title={t("technologies")}
              link="#tech-stack"
              onClick={() => handleMenuToggle(false)}
            />
            <ListItem
              title={t("projects")}
              link="#projects"
              onClick={() => handleMenuToggle(false)}
            />
            <ListItem
              title={t("contact")}
              link="#contact"
              onClick={() => handleMenuToggle(false)}
            />
          </ul>
        </div>

        <div>
          <span className="block font-bold text-[#b5b5b5] pb-4">
            {t("social")}
          </span>
          <ul>
            <li className="mt-1 text-lg">
              <a href={LINKS.github} target="_blank">{t("github")}</a>
            </li>
            <li className="mt-1 text-lg">
              <a href={LINKS.linkedin} target="_blank">{t("linkedin")}</a>
            </li>
            <li className="mt-1 text-lg">
              <a href={LINKS.whatsapp} target="_blank">{t("whatsapp")}</a>
            </li>
            {/* <li className="mt-1 text-lg">
              <a href="#" target="_blank">{t("oldVersion")}</a>
            </li> */}
          </ul>
        </div>
      </div>

      <div>
        <span className="block font-bold text-[#b5b5b5] pb-6">
          {t("ctaContact")}
        </span>
        <a href="mailto:ahmedn.coder@gmail.com" className="block mb-1">
          {LINKS.email}
        </a>
        <a href={`tel:${LINKS.phone}`}>{LINKS.phone}</a>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
