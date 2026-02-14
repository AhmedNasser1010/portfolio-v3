import { motion } from "motion/react";

const BurgerMenu = ({
  open,
  handleMnuToggle,
  ref,
  color = "#202020",
  closeColor = "white",
}: {
  open: boolean;
  handleMnuToggle: (arg0?: boolean) => void;
  ref?: React.Ref<HTMLButtonElement>;
  color?: string;
  closeColor?: string;
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
          normal: { backgroundColor: color },
          hover: { rotate: 8 },
          close: {
            rotate: 45,
            y: 5,
            backgroundColor: closeColor,
          },
        }}
      />
      <motion.span
        className="w-10 h-[3px] block rounded-md"
        variants={{
          normal: { backgroundColor: color },
          hover: { rotate: -8 },
          close: {
            rotate: -45,
            y: -5,
            backgroundColor: closeColor,
          },
        }}
      />
    </motion.button>
  );
};

export default BurgerMenu;
