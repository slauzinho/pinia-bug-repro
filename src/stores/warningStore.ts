import { defineStore } from 'pinia';
import useCounterStore from './counterStore';

const useWarningStore = defineStore({
  id: 'warningStore',
  actions: {
    isBigger(value: number) {
      const counterStore = useCounterStore();
      return counterStore.currentValue > value;
    },
  },
});

export default useWarningStore;
