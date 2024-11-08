import { useState, useEffect } from "react"

const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  return (width)
}

export default useScreenSize