<template>
  <div>
    Is Value bigger then {{ warningAt }}
    {{ warningStore.isBigger(warningAt) }}
  </div>
  <button @click="warningAt++">Increment</button>
  <button @click="warningAt--">Decrement</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useWarningStore from '../stores/warningStore';

export default defineComponent({
  setup() {
    const warningStore = useWarningStore();
    const warningAt = ref(2);

    return { warningStore, warningAt };
  },
});
</script>

<style scoped></style>
