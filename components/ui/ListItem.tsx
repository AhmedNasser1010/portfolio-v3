import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export interface ListItemProps {
  className?: string;
  title: string;
  link?: string;
  isExternal?: boolean;
  onClick?: () => void;
}

const ListItem = ({
  className,
  title,
  link = "#",
  isExternal = false,
  onClick
}: ListItemProps) => {
  const LinkTag = isExternal ? "a" : Link;

  return (
    <motion.li
      onClick={onClick}
      className={cn("text-xl", className)}
      whileHover="hover"
      initial="normal"
      animate="normal"
    >
      <LinkTag
        href={link}
        className="flex items-center gap-3 cursor-pointer w-fit"
      >
        <motion.span
          className="relative block w-3 h-3 rounded-full bg-[#b5b5b5]"
          variants={{
            normal: { scale: 1 },
            hover: { scale: 1.4 },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="absolute inset-[-4] flex items-center justify-center pointer-events-none">
            <motion.span
              variants={{
                normal: { opacity: 0, scale: 0.5 },
                hover: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.2 }}
            >
              <MdArrowOutward className="text-black text-sm" />
            </motion.span>
          </span>
        </motion.span>

        <span>{title}</span>
      </LinkTag>
    </motion.li>
  );
};

export default ListItem;
