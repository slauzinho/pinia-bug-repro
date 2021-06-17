import { defineStore } from 'pinia';
import useCounterStore from './counterStore';

interface State {
  filters: Record<string, string[]>;
}

const useWarningStore = defineStore({
  id: 'warningStore',
  state: (): State => ({
    filters: {
      done: ['go to the shop', 'say hello'],
      notDone: ['take a walk', 'give food to cat'],
    },
  }),
  actions: {
    isBigger(value: number) {
      const counterStore = useCounterStore();
      return (
        counterStore.filter &&
        this.filters[counterStore.filter as any].length > value
      );
    },
  },
});

export default useWarningStore;
