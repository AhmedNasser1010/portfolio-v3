import Image from "next/image";
import { Container, Button } from "@/components/ui";

export default function Contact() {
  return (
    <section className="w-full overflow-hidden" id="contact">
      <Container className="py-10 pb-28">
        <div className="relative flex flex-col gap-10 text-center max-w-96 mx-auto">
          <div>
            <div className="pb-6">
              <h2 className="pt-3 text-3xl font-dmSerif">Let's Talk</h2>
              <p className="text-xl text-black/70 font-dream">
                I'd like to hear from you!
              </p>
            </div>
            <p className="max-w-60 mx-auto text-[14px] text-xs text-black/70 mb-4">
              If you have any inquiries or just want to say hi, please use the
              contact form.
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <label className="flex flex-col gap-2 text-sm font-medium">
              <input
                className="w-full rounded-md border-[3px] border-[#202020] bg-transparent px-3 py-2 text-sm text-black outline-none transition focus:border-black/40 placeholder:text-[#202020]"
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="name"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              <input
                className="w-full rounded-md border-[3px] border-[#202020] bg-transparent px-3 py-2 text-sm text-black outline-none transition focus:border-black/40 placeholder:text-[#202020]"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              <textarea
                className="w-full min-h-40 rounded-md border-[3px] border-[#202020] bg-transparent px-3 py-2 text-sm text-black outline-none transition focus:border-black/40 placeholder:text-[#202020]"
                name="subject"
                placeholder="Spark my curiosity ✨"
                required
              />
            </label>

            <Button className="w-full text-sm">Send</Button>
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
