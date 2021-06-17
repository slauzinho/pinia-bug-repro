<template>
  <div>Hello from home</div>
  <div>Current count value is: {{ counterStore.currentValue }}</div>
  <div>
    <button @click="counterStore.increment">Increment</button>
    <button @click="counterStore.decrement">Decrement</button>
  </div>
  <router-link to="/warning">Go to warning screen</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useCounterStore from '../stores/counterStore';

export default defineComponent({
  setup() {
    const counterStore = useCounterStore();
    return { counterStore };
  },
});
</script>

<style scoped></style>
