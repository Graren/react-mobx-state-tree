import { observer } from "mobx-react-lite";
import React from "react";
import Counter from "../components/Counter";

const MobxCounter = ({ counter }) => {
  const { value, double, increment, decrement } = counter;
  return (
    <Counter
      onIncrement={() => increment()}
      onDecrement={() => decrement()}
      count={value}
      double={double}
    />
  );
};

export default observer(MobxCounter);
