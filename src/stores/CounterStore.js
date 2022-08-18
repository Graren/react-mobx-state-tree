import { types } from "mobx-state-tree";

const CounterType = types
  .model("Counter", {
    value: 0,
  })
  .actions((self) => {
    const privateFn = () => {
      console.log(
        "Hey I'm private, I have my own scope and can trigger side effects"
      );
    };
    return {
      increment() {
        self.value += 1;
      },
      decrement() {
        privateFn();
        self.value -= 1;
      },
    };
  })
  .views((self) => ({
    get double() {
      return self.value * 2;
    },
  }));

export default CounterType;
