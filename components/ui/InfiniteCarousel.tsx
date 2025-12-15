import { motion } from "motion/react";
import { ReactNode } from "react";

const InfiniteCarousel = ({
  children,
  speed = 25,
  direction = "left",
}: {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
}) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex items-center h-32 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }} // direction control
        transition={{
          duration: speed, // speed control
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
