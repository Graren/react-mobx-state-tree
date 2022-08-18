import { types } from "mobx-state-tree";
import CounterType from "./CounterStore";

const RootStore = types.model({
  counter: CounterType,
});

export default RootStore.create({
  counter: CounterType.create(),
});
