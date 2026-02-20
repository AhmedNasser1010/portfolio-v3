import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Container, Button } from "@/components/ui";
import { getLocale, getTranslations } from "next-intl/server";
import { styleEnAr } from "@/lib/utils/styleEnAr";
import { LINKS } from "@/constants";

const About = async () => {
  const locale = await getLocale();
  const t = await getTranslations("HomePage.about");
  return (
    <section className="w-full bg-[#202020]" id="about">
      <Container className="text-white z-50">
        <div className="flex flex-col items-center justify-center py-28 md:flex-row md:align-center md:gap-12">
          <div className="min-w-[271px] min-h-[272px] pb-16 md:pb-0 overflow-hidden md:scale-[1.06]">
            <Image
              src="/images/office.webp"
              width={271}
              height={272}
              alt="Picture of"
            />
          </div>

          <div>
            <div>
              <div
                className={`${styleEnAr(locale, "md:text-left", "md:text-right")} text-center`}
              >
                <h3
                  className={`${styleEnAr(locale, "", "font-montserrat")} pb-2 text-xs font-bold`}
                >
                  {t("sectionTitle")}
                </h3>
                <h2
                  className={`${styleEnAr(locale, "font-dmSerif", "font-myriad")} pb-7 text-3xl`}
                >
                  {t("fullName")}
                </h2>
              </div>
              <p
                className={`${styleEnAr(locale, "md:text-left", "md:text-right")} pb-11 text-[14px] text-center leading-7 max-w-xs md:max-w-md`}
              >
                {t("description")}
              </p>
            </div>

            <div className="flex gap-5">
              <Button variant="normalDark" className="px-11" asChild>
                <Link href="#contact">{t("ctaContact")}</Link>
              </Button>
              <Button variant="outlineDark" asChild>
                <a href={LINKS.resume} target="_blank">{t("ctaResume")}</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
