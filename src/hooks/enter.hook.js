import { useEffect, useState } from "react";

export default function useEnter() {
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setEnter(true), 10);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return enter;
}
