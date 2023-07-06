<template>
    <div>
        {{ item.name }}
    </div>
</template>

<script setup>
defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})

</script>