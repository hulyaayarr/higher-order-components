import { WithCounterComponentProps, withCounter } from "./withCounter";

interface ClickCounterOriginalProps extends WithCounterComponentProps {
  imgSrc: string;
}
function MouseCounterOriginal({
  imgSrc,
  count,
  increaseCount,
}: ClickCounterOriginalProps) {
  return (
    <div>
      <img src={imgSrc} alt="" />
      <div>Counter For Hover Over Button: {count}</div>
      <button onMouseOver={increaseCount}>Increment by hovering</button>
    </div>
  );
}

export const MouseCounter = withCounter(MouseCounterOriginal);
//3
