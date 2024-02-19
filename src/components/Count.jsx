import { useState } from "react";
import { useConsole } from "./useConsole";

export default function Count() {
  const [count, setCount] = useState(0);
  const test = useConsole(count);

  if (test) {
    console.log(count);
  }

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count&nbsp;&nbsp;{count}
      </button>
    </>
  );
}
