type Props = {
  className?: string;
  children: React.ReactNode;
  style?: "normal" | "outline";
};

export function Btn({ className = "", children, style = "normal" }: Props) {
  const base = "block ring-2 rounded-sm text-[18px] px-6 py-1";
  const styles = {
    normal: "bg-[#202020] text-white ring-black",
    outline: "bg-transparent text-black ring-[#202020]",
  };

  return (
    <button className={`${base} ${styles[style]} ${className}`}>
      {children}
    </button>
  );
}
