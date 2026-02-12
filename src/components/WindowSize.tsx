import { useState, useEffect } from "react";

const WindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed bottom-0 right-0 bg-black text-white text-xs p-1 z-50 opacity-50">
      {size.width} x {size.height}
    </div>
  );
};

export default WindowSize;
