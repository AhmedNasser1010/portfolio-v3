import { Container } from "@/components/ui";
import { cleanLink } from "@/lib/utils/cleanLink";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FaGithub, FaLongArrowAltLeft } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import Loading from "./loading";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { styleEnAr } from "@/lib/utils/styleEnAr";
import { titleToKebab } from "@/lib/utils";
import { CONSTANTS, PROJECTS } from "@/constants";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale();
  const { project } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Projects",
  });

  const currentProject = PROJECTS.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === project,
  );

  if (!currentProject) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: currentProject.title,
    description: currentProject.description,

    alternates: {
      canonical: `/${locale}/projects/${project}`,
      languages: {
        en: `/en/projects/${project}`,
        ar: `/ar/projects/${project}`,
      },
    },

    openGraph: {
      title: currentProject.title,
      description: currentProject.description,
      url: `${CONSTANTS.baseUrl}/${locale}/projects/${project}`,
      type: "article",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      images: [
        {
          url: `${CONSTANTS.baseUrl}${currentProject.ogImage}`,
          width: 1200,
          height: 630,
          alt: currentProject.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: currentProject.title,
      description: currentProject.description,
      images: [`${CONSTANTS.baseUrl}${currentProject.ogImage}`],
    },
  };
}

interface Props {
  params: Promise<{ project: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const locale = await getLocale();
  setRequestLocale(locale);
  const t = await getTranslations("ProjectPage");
  const { project } = await params;

  const currentProject = PROJECTS.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === project,
  );

  if (!currentProject) {
    notFound();
  }

  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <main className="relative min-h-screen py-8">
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(181,181,181,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(181,181,181,0.2) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
              backgroundPosition: "top left",
            }}
          />
          <div className="mb-12">
            <div className="flex items-center justify-between mb-3">
              <Link href={`/#${titleToKebab(currentProject.title)}`}>
                <FaLongArrowAltLeft
                  className={`${styleEnAr(locale, "", "-scale-x-100")} text-[#b5b5b5]`}
                />
              </Link>
              <span
                className={`${styleEnAr(locale, "font-futura", "font-myriad")} text-lg`}
              >
                {t("backToProjects")}
              </span>
            </div>
            <span className="block w-full border-b border-[#b5b5b5]"></span>
          </div>

          <div className="flex flex-col justify-center items-center text-center mb-12">
            <div className="w-full">
              <h1 className="text-3xl font-futura font-bold mb-4">
                {currentProject.title}
              </h1>
              <p className="mb-6 text-[#545454] mx-auto w-5/6 md:w-full">
                {currentProject.summary}
              </p>
            </div>

            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-fit h-[300px] md:h-[400px] mb-6 object-cover pointer-events-none shadow-xl rounded-2xl"
            >
              <source src={currentProject.video} type="video/webm" />
            </video>
          </div>

          <div className="md:flex md:flex-row-reverse md:items-start md:justify-between md:gap-8 md:mb-12">
            <div className="w-full md:flex-1">
              <h3
                className={`${styleEnAr(locale, "font-futura", "font-montserrat")} text-3xl mb-4`}
              >
                {t("description")}
              </h3>
              <p className="mb-6 text-[#545454]">
                {currentProject.description}
              </p>
            </div>

            <div className="w-full md:w-[320px] md:shrink-0">
              <div>
                <h3
                  className={`${styleEnAr(locale, "font-futura", "font-montserrat")} text-3xl mb-4`}
                >
                  {t("technologies")}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                  {currentProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#e0e0e0] text-sm rounded-md font-bold shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <IoEarthSharp className="text-[#b5b5b5] text-3xl" />
                    <h4 className="font-futura text-xl pl-2">{t("website")}</h4>
                  </div>

                  <a
                    href={currentProject.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-mono text-sm font-bold"
                  >
                    {cleanLink(currentProject.view)}
                  </a>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <FaGithub className="text-[#b5b5b5] text-3xl" />
                    <h4 className="font-futura text-xl pl-2">{t("github")}</h4>
                  </div>

                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-mono text-sm font-bold"
                  >
                    {cleanLink(currentProject.github)}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`${styleEnAr(locale, "font-futura", "font-montserrat")} text-3xl mb-4`}
            >
              {t("gallery")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {currentProject.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${currentProject.title} screenshot ${index + 1}`}
                  className="w-full h-auto rounded-lg object-cover shadow-md"
                />
              ))}
            </div>
          </div>
        </main>
      </Container>
    </Suspense>
  );
}
