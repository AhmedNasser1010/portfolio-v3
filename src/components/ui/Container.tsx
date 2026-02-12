// import { cn } from "@/lib/utils";

import { cn } from "@/lib/utils";

// interface ContainerProps {
//   className?: string;
//   children: React.ReactNode;
// }

// const Container = ({ className, ...props }: ContainerProps) => {
//   return (
//     <div
//       className={cn("mx-auto w-full px-[39px] overflow-hidden", className)}
//       {...props}
//     />
//   );
// };

// export default Container;

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
};

export default function Container({
  className = "",
  size = "lg",
  children,
}: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-8", sizes[size], className)}>
      {children}
    </div>
  );
}
