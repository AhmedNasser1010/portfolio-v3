import Image from "next/image";
import Link from "next/link";
import { Container, Button } from "@/components/ui";

const About = () => {
  return (
    <section className="w-full bg-[#202020]">
      <Container className="text-white z-50" id="about">
        <main className="flex flex-col items-center justify-center py-28">
          <div className="min-w-[271px] min-h-[272px] pb-16">
            <Image
              src="/images/office.jpg"
              width={271}
              height={272}
              alt="Picture of"
            />
          </div>

          <h3 className="pb-2 text-xs font-bold">ABOUT</h3>
          <h2 className="pb-7 font-dmSerif text-3xl">Ahmed Nasser</h2>
          <p className="pb-11 text-[14px] text-center leading-7 max-w-xs">
            Passionate Front-End Web Developer with solid experience in HTML,
            CSS, JavaScript, and React. He crafts seamless, engaging user
            experiences and brings creativity and precision to every digital
            project.
          </p>

          <div className="flex gap-5">
            <Button variant="normalDark" className="px-11" asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
            <Button variant="outlineDark" asChild>
              <a href="#">Resume</a>
            </Button>
          </div>
        </main>
      </Container>
    </section>
  );
};

export default About;
