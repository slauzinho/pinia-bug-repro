import { defineStore } from 'pinia';

const useCounterStore = defineStore({
  id: 'counterStore',
  state: () => ({
    filter: 'done',
  }),
});

export default useCounterStore;
