<template>
  <div>Is Value bigger then 4 {{ warningStore.isBigger(4) }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useWarningStore from '../stores/warningStore';

export default defineComponent({
  setup() {
    const warningStore = useWarningStore();
    return { warningStore };
  },
});
</script>

<style scoped></style>
