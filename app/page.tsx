"use client";
import { Container, Button, BurgerMenu, ListItem } from "@/components/ui";
import { LuHash } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const Home = () => {
  const [open, setOpen] = useState(false);

  const asideRef = useRef<HTMLDivElement | null>(null);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!open) return;

      const aside = asideRef.current;
      const menuBtn = menuBtnRef.current;

      if (aside && aside.contains(e.target as Node)) return;

      if (menuBtn && menuBtn.contains(e.target as Node)) return;

      setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <Container className="bg-white pt-0 h-screen flex flex-col justify-between px-0">
      <motion.aside
        ref={asideRef}
        className="bg-[#202020] px-12 pb-9 pt-16 fixed top-0 right-0 translate-x-full w-[320px] h-full p-6 text-white gap-10 lg:flex z-30 flex flex-col justify-between"
        variants={{
          open: {
            x: 0,
            borderRadius: 0,
            transition: { duration: 0.6, ease: "circInOut" },
          },
          closed: {
            x: "100%",
            borderTopLeftRadius: "50%",
            borderBottomLeftRadius: "50%",
            transition: { duration: 0.6, ease: "circInOut" },
          },
        }}
        initial="closed"
        animate={open ? "open" : "closed"}
      >
        <div className="h-[60%] flex flex-col justify-between">
          <div>
            <span className="block font-bold text-[#b5b5b5] pb-6">Menu</span>
            <ul className="flex flex-col gap-3">
              <ListItem
                title="Home"
                link="#home"
                onClick={() => setOpen(false)}
              />
              <ListItem
                title="About"
                link="#about"
                onClick={() => setOpen(false)}
              />
              <ListItem
                title="Tech Stack"
                link="#tech-stack"
                onClick={() => setOpen(false)}
              />
              <ListItem
                title="Project"
                link="#project"
                onClick={() => setOpen(false)}
              />
            </ul>
          </div>

          <div>
            <span className="block font-bold text-[#b5b5b5] pb-6">Social</span>
            <ul>
              <li className="mt-1 text-lg">
                <a href="#">GitHub</a>
              </li>
              <li className="mt-1 text-lg">
                <a href="#">LinkedIn</a>
              </li>
              <li className="mt-1 text-lg">
                <a href="#">WhatsApp</a>
              </li>
              <li className="mt-1 text-lg">
                <a href="#">Old version</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <span className="block font-bold text-[#b5b5b5] pb-6">
            Get in touch
          </span>
          <a href="mailto:ahmedn.coder@gmail.com" className="block">
            ahmedn.coder@gmail.com
          </a>
        </div>
      </motion.aside>

      <header>
        <p className="w-full text-lg mt-2 mb-[5px] font-palatino text-center">
          بِـسْـمِ الـلَّـهِ الـرَّحْـمَـنِ الـرَّحِـيـمِ
        </p>

        <nav className="flex justify-between content-center px-[45px] pt-3">
          <div className="font-dmSerif flex content-center items-center text-[28px]">
            <LuHash />
            <h1>Ahmed</h1>
          </div>

          <BurgerMenu
            open={open}
            handleMnuToggle={handleMenuToggle}
            ref={menuBtnRef}
          />
        </nav>
      </header>

      <h3 className="text-center">👋, my name is Ahmed and Im a freelance</h3>

      <main className="relative min-h-[70%]">
        <div className="absolute bottom-[422px] left-1/2 -translate-x-1/2 w-max">
          <div>
            <h2 className="text-[42px] font-archivo text-center mb-4">
              Webdeveloper
            </h2>
            <div className="w-fit mx-auto">
              <h2 className="text-[38px]  font-dream text-center block tracking-widest">
                & Problem Solving
              </h2>
              <span className="text-[12px] text-xs mt-[-6px] block">
                based in Giza, Egypt
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[410px] h-[564px] min-w-[410px] min-h-[564px]">
          <Image
            src="/images/me.png"
            width={410}
            height={564}
            alt="Picture of the author"
            priority
          />
        </div>

        <div className="h-[349px] w-full absolute bottom-0 translate-y-4 bg-gradient-to-t from-gray-200 via-gray-200 to-transparent"></div>

        <div className="flex gap-5 absolute bottom-[103px] left-1/2 -translate-x-1/2 w-max">
          <Button variant="normal" asChild>
            <Link href="#contact">Hire me</Link>
          </Button>
          <Button className="px-11" variant="outline" asChild>
            <Link href="#projects">My works</Link>
          </Button>
        </div>
      </main>
    </Container>
  );
};

export default Home;
