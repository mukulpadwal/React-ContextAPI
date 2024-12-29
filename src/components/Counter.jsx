import { useContext } from "react";
import { CounterContext } from "../context/Counter";

function Counter() {

  const counterState = useContext(CounterContext);


  return (
    <div className="flex gap-2">
      <button onClick={() => counterState.setCount(counterState.count + 1)}>Increment by 1</button>
      <button onClick={() => counterState.setCount(counterState.count - 1)}>Decrement by 1</button>
    </div>
  );
}
export default Counter;
