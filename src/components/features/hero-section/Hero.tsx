import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";
import { getLocale, getTranslations } from "next-intl/server";
import { styleEnAr } from "@/lib/utils/styleEnAr";

const Hero = async () => {
  const locale = await getLocale();
  const t = await getTranslations("HomePage.hero");
  return (
    <section className="w-full bg-white" id="home">
      <div
        className="bg-white pt-0 h-screen flex flex-col justify-between px-0"
        id="home"
      >
        <div className="flex items-center justify-center h-[40%]">
          <h3 className="text-center">{t("intro")}</h3>
        </div>

        <main className="relative h-[60%]">
          <div className="absolute bottom-[422px] left-1/2 -translate-x-1/2 w-max">
            <div>
              <h2
                className={`${styleEnAr(locale, "font-archivo", "font-montserrat")} text-[42px] text-center mb-4`}
              >
                {t("role")}
              </h2>
              <div className="w-fit mx-auto">
                <h2
                  className={`${styleEnAr(locale, "font-dream", "font-palatino")} text-[38px] text-center block tracking-widest`}
                >
                  {t("secondaryRole")}
                </h2>
                <span className="text-[12px] text-xs mt-[-6px] block">
                  {t("location")}
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 min-w-[410px] min-h-[564px]">
            <Image
              src="/images/me.webp"
              width={410}
              height={564}
              alt="Picture of the author"
              priority
            />
          </div>

          <div className="h-[349px] w-full absolute bottom-0 translate-y-4 bg-gradient-to-t from-gray-200 via-gray-200 to-transparent"></div>

          <div className="flex gap-5 absolute bottom-[103px] left-1/2 -translate-x-1/2 w-max">
            <Button variant="normalLight" asChild>
              <Link href="#contact">{t("ctaHire")}</Link>
            </Button>
            <Button className="px-11" variant="outlineLight" asChild>
              <Link href="#projects">{t("ctaWorks")}</Link>
            </Button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;
