import { defineStore } from 'pinia';

const useCounterStore = defineStore({
  id: 'counterStore',
  state: () => ({
    currentValue: 0,
  }),
  actions: {
    increment() {
      this.currentValue++;
    },
    decrement() {
      this.currentValue--;
    },
  },
});

export default useCounterStore;
