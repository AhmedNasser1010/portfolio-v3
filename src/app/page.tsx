"use client";
import { useRef, useState } from "react";
import {
  Sidebar,
  Header,
  Hero,
  About,
  TechStack,
  Projects,
  Contact,
} from "@/components";
import WindowSize from "@/components/WindowSize";
import { Container } from "@/components/ui";

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
    <main className="overflow-x-hidden">
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

      <Contact />

      <footer className="w-full border-t border-black/10 bg-[#202020] text-white">
        <Container className="py-3 text-center">
          <div className="w-full space-y-2 text-xs">
            <p className="font-futura">
              Building clean, scalable and user-focused web experiences.
            </p>
            <p className="text-[9px]">
              &copy; 2026 Ahmed Nasser. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </main>
  );
};

export default Home;
