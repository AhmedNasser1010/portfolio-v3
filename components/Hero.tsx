import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div
        className="bg-white pt-0 h-screen flex flex-col justify-between px-0"
        id="home"
      >
        <div className="flex items-center justify-center h-[40%]">
          <h3 className="text-center">
            👋, my name is Ahmed and Im a freelance
          </h3>
        </div>

        <main className="relative h-[60%]">
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

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 min-w-[410px] min-h-[564px]">
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
            <Button variant="normalLight" asChild>
              <Link href="#contact">Hire me</Link>
            </Button>
            <Button className="px-11" variant="outlineLight" asChild>
              <Link href="#projects">My works</Link>
            </Button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;
