import { motion } from "motion/react";

const BurgerMenu = ({
  open,
  handleMnuToggle,
  ref,
}: {
  open: boolean;
  handleMnuToggle: (arg0?: boolean) => void;
  ref: React.Ref<HTMLButtonElement>;
}) => {
  return (
    <motion.button
      ref={ref}
      onClick={() => handleMnuToggle()}
      className="flex flex-col gap-[7px] justify-center z-40 p-2"
      whileHover={open ? {} : "hover"}
      initial="normal"
      animate={open ? "close" : "normal"}
    >
      <motion.span
        className="w-10 h-[3px] block rounded-md"
        variants={{
          normal: { backgroundColor: "#202020" },
          hover: { rotate: 8 },
          close: {
            rotate: 45,
            y: 5,
            backgroundColor: "white",
          },
        }}
      />
      <motion.span
        className="w-10 h-[3px] block rounded-md"
        variants={{
          normal: { backgroundColor: "#202020" },
          hover: { rotate: -8 },
          close: {
            rotate: -45,
            y: -5,
            backgroundColor: "white",
          },
        }}
      />
    </motion.button>
  );
};

export default BurgerMenu;
