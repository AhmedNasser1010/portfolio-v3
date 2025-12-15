import { cn } from "@/lib/utils";

const Title = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <h2 className={cn("text-3xl font-bold mb-8 font-dmSerif", className)}>
      # {children}
    </h2>
  );
};

export default Title;
