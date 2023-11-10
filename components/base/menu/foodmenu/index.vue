<template>
  <div>
    <BaseMenuFoodmenuNavbar
      :activeTab="activeTab"
      @click="setActiveContent"
      :navItems="navItems"
    />
    <BaseMenuFoodmenuMenu :content="selectedContent" />
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Array,
    default: () => [],
  },
});

const selectedContent = ref([]);
const activeTab = ref(1);

setActiveContent(1);

const navItems = computed(() => {
  if (!props.content.length) return;
  return props.content.map((item) => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
    };
  });
});

function setActiveContent(id) {
  if (!props.content.length) return;
  selectedContent.value = props.content.find((item) => item.id === id)?.content;
  activeTab.value = id;
}
</script>
