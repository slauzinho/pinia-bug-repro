<template>
  <div>Hello from home</div>
  <div>
    <div>Current active filter {{ counterStore.filter }}</div>
    <button @click="toggleFilter">Toggle Filter</button>
  </div>
  <router-link to="/warning">Go to warning screen</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useCounterStore from '../stores/counterStore';

export default defineComponent({
  setup() {
    const counterStore = useCounterStore();

    const toggleFilter = () => {
      if (counterStore.filter === 'done') {
        counterStore.filter = 'notDone';
      } else {
        counterStore.filter = 'done';
      }
    };
    return { counterStore, toggleFilter };
  },
});
</script>

<style scoped></style>
