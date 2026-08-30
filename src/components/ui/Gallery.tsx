"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const Gallery = ({
  images,
  title,
}: {
  images: { src: string; alt: string }[];
  title: string;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);

  const prev = () => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length,
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % images.length,
    );
  };

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {images.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setActiveIndex(index)}
            className="group relative w-full cursor-pointer overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b5b5b5]"
            aria-label={`${title} screenshot ${index + 1} - ${activeIndex === index ? "open" : ""}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              loading="lazy"
              className="w-full h-auto rounded-lg object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshot ${activeIndex + 1}`}
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 z-10 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <FaTimes className="text-3xl" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 md:left-8 z-10 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <FaChevronLeft className="text-3xl md:text-5xl" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 md:right-8 z-10 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <FaChevronRight className="text-3xl md:text-5xl" />
            </button>

            <motion.button
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full cursor-zoom-out"
              aria-label={`${title} screenshot ${activeIndex + 1}`}
            >
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                width={1200}
                height={900}
                className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
            </motion.button>

            <span className="absolute bottom-5 text-white/70 font-mono text-sm">
              {activeIndex + 1} / {images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;