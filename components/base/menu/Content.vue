<template>
  <div class="row gy-3 row-cols-1 row-cols-md-2">
    <div class="col" v-for="item in content" :key="item.id">
      <BaseMenuItem :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  content: {
    type: Array as PropType<MenuItem[]>,
    default: () => [],
  },
});
</script>
