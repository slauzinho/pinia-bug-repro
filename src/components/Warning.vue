<template>
  <div>Is Value bigger then 4 {{ isBigger }}</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import useWarningStore from '../stores/warningStore';

export default defineComponent({
  setup() {
    const warningStore = useWarningStore();

    const isBigger = computed(() => {
      return warningStore.isBigger(4);
    });
    return { isBigger };
  },
});
</script>
