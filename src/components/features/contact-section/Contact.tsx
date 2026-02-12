import Image from "next/image";
import { Container, Button } from "@/components/ui";
import { getLocale, getTranslations } from "next-intl/server";
import { styleEnAr } from "@/lib/utils/styleEnAr";

export default async function Contact() {
  const locale = await getLocale();
  const t = await getTranslations("HomePage.contact");
  return (
    <section className="w-full overflow-hidden" id="contact">
      <Container className="py-10 pb-28">
        <div className="relative flex flex-col gap-10 text-center max-w-96 mx-auto">
          <div>
            <div className="pb-6">
              <h2
                className={`${styleEnAr(locale, "font-dmSerif", "font-montserrat")} pt-3 text-3xl`}
              >
                {t("title")}
              </h2>
              <p
                className={`${styleEnAr(locale, "font-dream", "font-palatino")} text-xl text-black/70`}
              >
                {t("subtitle")}
              </p>
            </div>
            <p className="max-w-60 mx-auto text-[14px] text-xs text-black/70 mb-4">
              {t("description")}
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <label className="flex flex-col gap-2 text-sm font-medium">
              <input
                className="w-full rounded-md border-[3px] border-[#202020] bg-transparent px-3 py-2 text-sm text-black outline-none transition focus:border-black/40 placeholder:text-[#202020]"
                name="name"
                type="text"
                placeholder={t("name")}
                autoComplete="name"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              <input
                className="w-full rounded-md border-[3px] border-[#202020] bg-transparent px-3 py-2 text-sm text-black outline-none transition focus:border-black/40 placeholder:text-[#202020]"
                name="email"
                type="email"
                placeholder={t("email")}
                autoComplete="email"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              <textarea
                className="w-full min-h-40 rounded-md border-[3px] border-[#202020] bg-transparent px-3 py-2 text-sm text-black outline-none transition focus:border-black/40 placeholder:text-[#202020]"
                name="subject"
                placeholder={t("subject")}
                required
              />
            </label>

            <Button className="w-full text-sm">{t("send")}</Button>
          </form>

          <div className="absolute bottom-[-145px] right-[-85px] -z-10">
            <Image
              src="/images/telephone.webp"
              width={257}
              height={291}
              alt="Telephone"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
