import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState(undefined);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

export default useScreenSize;