<template>
    <button class="ff-sans text-white text-nowrap border border-0 fs-4 bg-primary p-2" @click="$emit('click')">
        {{ text }}
    </button>
</template>

<script setup>
const emit = defineEmits(['click']);
defineProps({
    text: {
        type: String,
        default: ''
    },
})
</script>