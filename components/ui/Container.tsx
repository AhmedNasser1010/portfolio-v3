import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn("mx-auto w-full px-4 overflow-hidden", className)}
      {...props}
    />
  );
};

export default Container;
