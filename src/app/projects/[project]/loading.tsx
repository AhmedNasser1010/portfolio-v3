import { Container } from "@/components/ui";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function Loading() {
  return (
    <Container>
      <main className="relative min-h-screen py-8 animate-pulse">
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
            <Link href="/">
              <FaLongArrowAltLeft className="text-[#b5b5b5]" />
            </Link>
            <span className="font-futura text-lg">Back to Projects.</span>
          </div>
          <span className="block w-full border-b border-[#b5b5b5]"></span>
        </div>

        <div className="flex flex-col justify-center items-center text-center mb-12">
          <div className="w-full">
            <div className="h-8 w-1/2 mx-auto bg-gray-300 rounded mb-4" />
            <div className="h-4 w-5/6 mx-auto bg-gray-300 rounded mb-2" />
            <div className="h-4 w-4/6 mx-auto bg-gray-300 rounded mb-6" />
          </div>

          <div className="w-[300px] md:w-[500px] h-[300px] md:h-[400px] bg-gray-300 rounded-2xl shadow-xl" />
        </div>

        <div className="md:flex md:flex-row-reverse md:items-start md:justify-between md:gap-8 md:mb-12">
          {/* Description */}
          <div className="w-full md:flex-1">
            <div className="h-8 w-40 bg-gray-300 rounded mb-4" />
            <div className="h-4 w-full bg-gray-300 rounded mb-2" />
            <div className="h-4 w-5/6 bg-gray-300 rounded mb-2" />
            <div className="h-4 w-4/6 bg-gray-300 rounded mb-6" />
          </div>

          <div className="w-full md:w-[320px] md:shrink-0">
            <div>
              <div className="h-8 w-32 bg-gray-300 rounded mb-4" />
              <div className="flex flex-wrap gap-2 mb-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-8 w-20 bg-gray-300 rounded-md" />
                ))}
              </div>
            </div>

            <div className="mb-6 space-y-6">
              {[1, 2].map((_, i) => (
                <div key={i}>
                  <div className="flex items-center mb-2 gap-2">
                    <div className="w-6 h-6 bg-gray-300 rounded" />
                    <div className="h-5 w-24 bg-gray-300 rounded" />
                  </div>
                  <div className="h-4 w-40 bg-gray-300 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="h-8 w-32 bg-gray-300 rounded mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-full h-48 bg-gray-300 rounded-lg" />
            ))}
          </div>
        </div>
      </main>
    </Container>
  );
}
