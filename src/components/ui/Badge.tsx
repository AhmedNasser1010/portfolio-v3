import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const divVariants = cva(
  "text-xs font-medium px-2 py-1 rounded-full",
  {
    variants: {
      variant: {
        light: "bg-neutral-500 text-white",
        dark: "bg-neutral-800 text-white",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof divVariants> {
  asChild?: boolean;
}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <div className={cn(divVariants({ variant }), className)} {...props} />;
};

export default Badge;
