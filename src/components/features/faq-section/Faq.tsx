import { Container } from "@/components/ui";
import { getLocale, getTranslations } from "next-intl/server";
import { styleEnAr } from "@/lib/utils/styleEnAr";

const Faq = async () => {
  const locale = await getLocale();
  const t = await getTranslations("HomePage.faq");
  const items = t.raw("items") as Array<{ question: string; answer: string }>;

  return (
    <section className="w-full bg-white" id="faq">
      <Container className="py-28">
        <h2
          className={`${styleEnAr(locale, "font-dmSerif", "font-montserrat")} text-3xl font-bold mb-8`}
        >
          {t("title")}
        </h2>
        <div className="max-w-3xl">
          {items.map((item, index) => (
            <details
              key={index}
              className="group border-b border-gray-200 py-4"
              {...(index === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer items-center justify-between font-futura font-semibold text-lg list-none [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="ml-4 transition-transform group-open:rotate-45 text-2xl font-light">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[#545454] leading-7">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Faq;
