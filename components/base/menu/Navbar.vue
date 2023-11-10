<template>
  <div>
    <div v-if="navItems.length" class="row justify-content-center mb-3">
      <div class="col-auto p-1" v-for="item in navItems" :key="item.id">
        <BaseMenuButton
          @click="emit('select', item.id)"
          :text="item.name"
          :active="activeTab === item.id"
        />
      </div>
    </div>
    <div v-if="activeItem" class="ff-inter text-center mb-4">
      <h3 class="fw-bold m-0">{{ activeItem.name }}</h3>
      <p v-if="activeItem.name === 'Pizza'" class="text-body-secondary m-0">
        350–400g
      </p>
      <p v-if="activeItem.description" class="text-body-secondary">
        {{ activeItem.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  navItems: {
    type: Array as PropType<MenuNavbarItem[]>,
    default: () => [],
  },
  activeTab: {
    type: Number,
    default: 0,
  },
});
const emit = defineEmits<{
  (event: 'select', id: number): void
}>()

const activeItem = computed(() => {
  if (!props.navItems.length) return;
  return props.navItems.find((item) => item.id === props.activeTab);
});
</script>
