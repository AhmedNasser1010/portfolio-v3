import {
  Header,
  Hero,
  About,
  TechStack,
  Projects,
  Contact,
} from "@/components";
import WindowSize from "@/components/WindowSize";
import Footer from "@/components/features/footer/Footer";
import { getLocale, setRequestLocale } from "next-intl/server";

const Home = async () => {
  const locale = await getLocale();
  setRequestLocale(locale);
  return (
    <main className="overflow-x-hidden">
      <WindowSize />

      <Header />

      <Hero />

      <About />

      <TechStack />

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
};

export default Home;
