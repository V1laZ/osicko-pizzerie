<template>
    <div class="row justify-content-center mb-4">
        <div class="col-auto p-1" v-for="item in navItems" :key="item.id">
            <BaseMenuFoodmenuButton 
                @click="$emit('click', item.id)" 
                :text="item.text" 
                :active="activeTab === item.id" 
            />
        </div>
    </div>
</template>


<script setup>
const emit = defineEmits(['click'])
defineProps({
    navItems: {
        type: Array,
        default: () => []
    },
    activeTab: {
        type: Number,
        default: 0
    }
})
</script>