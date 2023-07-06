<template>
    <div class="row row-cols-2">
        <div class="col" v-for="item in content" :key="item.id">
            <BaseMenuFoodmenuItem :item="item" />
        </div>
    </div>
</template>

<script setup>
defineProps({
    content: {
        type: Array,
        default: () => []
    }
})

</script>