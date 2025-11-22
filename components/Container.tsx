interface Props {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className = "", children }: Props) {
  return <div className={`${className}`}>{children}</div>;
}
