import { useEffect, useRef } from "react";

export function useConsole(initialValue) {
  const test = useRef(false);

  useEffect(() => {
    test.current = true;
  }, [initialValue]);

  return test.current;
}
