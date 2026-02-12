"use client";

import { Container, InfiniteCarousel } from "@/components/ui";
import { styleEnAr } from "@/lib/utils/styleEnAr";
import { useLocale, useTranslations } from "next-intl";

const iconsPath = "/icons/tech-stack/";

const technologies = {
  frontend: [
    { name: "Javascript", icon: iconsPath + "js.svg" },
    { name: "Typescript", icon: iconsPath + "ts.svg" },
    { name: "React JS", icon: iconsPath + "react.svg" },
    { name: "Next JS", icon: iconsPath + "next.svg" },
    { name: "Redux", icon: iconsPath + "redux.svg" },
    { name: "TailwindCSS", icon: iconsPath + "tailwind.svg" },
    { name: "ShadCN", icon: iconsPath + "shadcn.svg" },
    { name: "Motion", icon: iconsPath + "motion.svg" },
    { name: "NPM", icon: iconsPath + "npm.svg" },
    { name: "Git", icon: iconsPath + "git.svg" },
    { name: "Github", icon: iconsPath + "github.svg" },
    { name: "LLM", icon: iconsPath + "llm.svg" },
  ],

  cloud: [
    { name: "Firebase", icon: iconsPath + "firebase.svg" },
    { name: "Supabase", icon: iconsPath + "supabase.svg" },
    { name: "Auth0", icon: iconsPath + "auth0.svg" },
    { name: "Vercel", icon: iconsPath + "vercel.svg" },
    { name: "Netlify", icon: iconsPath + "netlify.svg" },
  ],
};

const TechStack = () => {
  const locale = useLocale();
  const t = useTranslations("HomePage.tech");
  return (
    <section className="w-full bg-white" id="tech-stack" dir="ltr">
      <Container>
        <div className="py-12">
          <div className="pb-12">
            <h3
              className={`${styleEnAr(locale, "font-archivo", "font-montserrat")} text-center pb-5 font-bold text-xl`}
            >
              {t("frontend")}
            </h3>

            <div className="-mx-6">
              <InfiniteCarousel>
                {[...technologies.frontend, ...technologies.frontend].map(
                  (tech, i) => (
                    <div
                      key={tech.name + i}
                      className="select-none min-w-[80px] h-[80px] flex flex-col items-center justify-center mx-6 opacity-80"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-16 h-16 mb-2"
                      />
                      <span className="text-lg font-bold text-center w-max">
                        {tech.name}
                      </span>
                    </div>
                  ),
                )}
              </InfiniteCarousel>
            </div>
          </div>

          <div>
            <h3
              className={`${styleEnAr(locale, "font-archivo", "font-montserrat")} text-center pb-5 font-bold text-xl`}
            >
              {t("cloudBackend")}
            </h3>

            <div className="-mx-6">
              <InfiniteCarousel direction="right">
                {[
                  ...technologies.cloud,
                  ...technologies.cloud,
                  ...technologies.cloud,
                ].map((tech, i) => (
                  <div
                    key={tech.name + i}
                    className="select-none min-w-[80px] h-[80px] flex flex-col items-center justify-center mx-6 opacity-80"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-16 h-16 mb-2"
                    />
                    <span className="text-lg font-bold text-center w-max">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </InfiniteCarousel>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechStack;
