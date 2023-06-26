import React, { useState } from "react";

export default function HookCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementbBy5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementbBy5}>Increment by 5</button>
    </div>
  );
}
