import { Container, Button } from "@/components/ui";
import { LuHash } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <Container className="bg-white pt-0 h-screen flex flex-col justify-between px-0">
      <header>
        <p className="w-full text-lg mt-2 mb-[5px] font-palatino text-center">
          بِـسْـمِ الـلَّـهِ الـرَّحْـمَـنِ الـرَّحِـيـمِ
        </p>

        <nav className="flex justify-between content-center px-[45px] pt-3">
          <div className="font-dmSerif flex content-center items-center text-[28px]">
            <LuHash />
            <h1>Ahmed</h1>
          </div>

          <div className="flex flex-col gap-[7px] justify-center">
            <span className="w-10 h-[3px] bg-neutral-900 block rounded-md"></span>
            <span className="w-10 h-[3px] bg-neutral-900 block rounded-md"></span>
          </div>
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
