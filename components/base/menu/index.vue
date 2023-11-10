<template>
  <div>
    <BaseMenuNavbar
      :activeTab="activeTab"
      @select="activeTab = $event"
      :navItems="navItems"
    />
    <BaseMenuContent :content="selectedContent" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  menu: {
    type: Array as PropType<Menu[]>,
    default: () => [],
  },
});

const activeTab = ref(1);

const navItems = computed(() => {
  if (!props.menu.length) return;
  return props.menu.map((item) => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
    };
  });
});

const selectedContent = computed(() => {
  if (!props.menu.length) return;
  return props.menu.find((item) => item.id === activeTab.value)?.content;
});
</script>
