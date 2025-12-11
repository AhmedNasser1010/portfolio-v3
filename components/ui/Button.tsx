import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva("block ring-2 rounded-sm text-center", {
  variants: {
    variant: {
      normalLight: "bg-[#202020] text-white ring-black",
      normalDark: "bg-white text-[#202020] ring-white",
      outlineLight: "bg-transparent text-black ring-[#202020]",
      outlineDark: "bg-transparent text-white ring-white",
    },
    size: {
      normal: "px-6 py-1 text-base",
      small: "px-4 py-1 text-sm",
      large: "px-8 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "normalLight",
    size: "normal",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({
  className,
  asChild,
  variant,
  size,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};

export default Button;
