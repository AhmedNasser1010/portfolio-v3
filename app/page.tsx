import { Container } from "@/components/Container";
import { Btn } from "@/components/Btn";
import { LuHash } from "react-icons/lu";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="bg-white pt-0 h-screen flex flex-col justify-between">
      <header>
        <p className="w-full text-[18px] mt-2 mb-4 font-palatino text-center">
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

      <p className="text-center">👋, my name is Ahmed and Im a freelance</p>

      <main className="relative h-[70%]">
        <div className="absolute bottom-[422px] left-1/2 -translate-x-1/2 w-max">
          <div>
            <h2 className="text-[42px] font-archivo text-center mb-4">
              Webdeveloper
            </h2>
            <div className="w-fit mx-auto">
              <span className="text-[38px] font-dream text-center block tracking-widest">
                & Problem Solving
              </span>
              <span className="text-[12px] mt-[-6px] block">
                based in Giza, Egypt
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[410px] h-[564px] min-w-[410px] min-h-[564px] object-cover">
          <Image
            src="/images/me.png"
            width={410}
            height={564}
            alt="Picture of the author"
            priority
          />
        </div>

        <div className="h-[349px] w-full flex flex-col absolute bottom-0">
          <span className="h-[201px] bg-gradient-to-t from-[#e9e9e9] to-white/0"></span>
          <span className="h-[148px] bg-[#e9e9e9]"></span>
        </div>

        <div className="flex gap-5 absolute bottom-[103px] left-1/2 -translate-x-1/2 w-max">
          <Btn style="normal">Hire me</Btn>
          {/* Padding is not applied!! */}
          <Btn className="px-11" style="outline">
            My works
          </Btn>
        </div>
      </main>
    </Container>
  );
}
