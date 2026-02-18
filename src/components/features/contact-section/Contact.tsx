"use client";

import Image from "next/image";
import { Container, Button } from "@/components/ui";
import { useLocale, useTranslations } from "next-intl";
import { styleEnAr } from "@/lib/utils/styleEnAr";
import { useActionState, useEffect, useRef } from "react";
import { ContactInputType, ContactSchema } from "@/lib/validations/contact";
import { sendEmail } from "@/actions/contact";

type FieldErrors = Partial<Record<keyof ContactInputType, string>>;
type FormState = {
  fieldErrors: FieldErrors;
  statusMessage: string;
};

const initialState: FormState = {
  fieldErrors: {},
  statusMessage: "",
};

export default function Contact() {
  const locale = useLocale();
  const t = useTranslations("HomePage.contact");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (
    _previousState: FormState,
    formData: FormData,
  ): Promise<FormState> => {
    const rawData: ContactInputType = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    ContactSchema.parse(rawData);

    try {
      const result = await sendEmail(formData);
      return {
        fieldErrors: {},
        statusMessage: result.message,
      };
    } catch {
      return {
        fieldErrors: {},
        statusMessage: "Oops, an error occurred. Please try again later.",
      };
    }
  };
  const [formState, formAction, isPending] = useActionState(
    handleSubmit,
    initialState,
  );

  useEffect(() => {
    if (formState.statusMessage === "Email sent") {
      formRef.current?.reset();
    }
  }, [formState.statusMessage]);

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

          <form ref={formRef} className="flex flex-col gap-4" action={formAction}>
            <label className="flex flex-col gap-2 text-sm font-medium">
              <input
                className="w-full rounded-md border-[3px] border-[#202020] bg-transparent px-3 py-2 text-sm text-black outline-none transition focus:border-black/40 placeholder:text-[#202020]"
                name="name"
                type="text"
                placeholder={t("name")}
                autoComplete="name"
                required
                disabled={isPending}
                aria-invalid={Boolean(formState.fieldErrors.name)}
              />
              {formState.fieldErrors.name ? (
                <span className="text-left text-xs text-red-700">{formState.fieldErrors.name}</span>
              ) : null}
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              <input
                className="w-full rounded-md border-[3px] border-[#202020] bg-transparent px-3 py-2 text-sm text-black outline-none transition focus:border-black/40 placeholder:text-[#202020]"
                name="email"
                type="email"
                placeholder={t("email")}
                autoComplete="email"
                required
                disabled={isPending}
                aria-invalid={Boolean(formState.fieldErrors.email)}
              />
              {formState.fieldErrors.email ? (
                <span className="text-left text-xs text-red-700">{formState.fieldErrors.email}</span>
              ) : null}
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              <textarea
                className="w-full min-h-40 rounded-md border-[3px] border-[#202020] bg-transparent px-3 py-2 text-sm text-black outline-none transition focus:border-black/40 placeholder:text-[#202020]"
                name="message"
                placeholder={t("subject")}
                required
                disabled={isPending}
                aria-invalid={Boolean(formState.fieldErrors.message)}
              />
              {formState.fieldErrors.message ? (
                <span className="text-xs text-red-700">{t(formState.fieldErrors.message)}</span>
              ) : null}
            </label>

            {formState.statusMessage ? (
              <p className="text-xs text-black/70">{t(formState.statusMessage)}</p>
            ) : null}

            <Button type="submit" disabled={isPending} className="w-full text-sm">
              {isPending ? t("sendingEmail") : t("send")}
            </Button>
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
