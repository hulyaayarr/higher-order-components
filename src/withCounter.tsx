import { useState } from "react";

export interface WithCounterComponentProps {
  count: number;
  increaseCount(): () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withCounter(OriginalComponent: any) {
  function NewComponent() {
    const [count, setCount] = useState(0);

    function handleIncrementCount() {
      setCount((oldCount) => oldCount + 1);
    }
    return (
      <OriginalComponent count={count} increaseCount={handleIncrementCount} />
    );
  }
  return NewComponent;
}
//1
