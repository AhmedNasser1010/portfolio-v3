"use client";
import { useRef, useState } from "react";
import { Sidebar, Header, Hero, About, TechStack, Projects } from "@/components";
import WindowSize from "@/components/WindowSize";

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
      <WindowSize />

      <Header
        open={open}
        handleMenuToggle={handleMenuToggle}
        menuBtnRef={menuBtnRef}
      />

      <Sidebar
        open={open}
        handleMenuToggle={handleMenuToggle}
        menuBtnRef={menuBtnRef}
      />

      <Hero />

      <About />

      <TechStack />

      <Projects />

      <div className="h-[2000px]"></div>
    </div>
  );
};

export default Home;
