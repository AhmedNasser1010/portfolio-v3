"use client";
import { useRef, useState } from "react";
import { Menu, Header, Hero, About, TechStack } from "@/components";

const Home = () => {
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
    <div className="overflow-x-hidden">
      <Header
        open={open}
        handleMenuToggle={handleMenuToggle}
        menuBtnRef={menuBtnRef}
      />

      <Menu
        open={open}
        handleMenuToggle={handleMenuToggle}
        menuBtnRef={menuBtnRef}
      />

      <Hero />

      <About />

      <TechStack />

      <div className="h-[2000px]"></div>
    </div>
  );
};

export default Home;
