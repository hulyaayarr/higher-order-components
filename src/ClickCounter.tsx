import { WithCounterComponentProps, withCounter } from "./withCounter";

interface ClickCounterOriginalProps extends WithCounterComponentProps {
  title: string;
}
function ClickCounterOriginal({
  title,
  count,
  increaseCount,
}: ClickCounterOriginalProps) {
  return (
    <div>
      <div>{title}</div>
      <div>Counter For Click: {count}</div>
      <button onClick={increaseCount}>Increment by click</button>
    </div>
  );
}

export const ClickCounter = withCounter(ClickCounterOriginal);
//2
