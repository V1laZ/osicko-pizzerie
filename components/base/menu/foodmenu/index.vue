<template>
    <div>
        <BaseMenuFoodmenuNavbar @click="setActiveContent" :navItems="navItems" />
        <BaseMenuFoodmenuMenu :content="selectedContent" />
    </div>
</template>

<script setup>
const navItemsContent = ref([
    {
        id: 1,
        "text": "Pizza",
        "content": [
            {
                id: 1,
                "name": "Pizza Margherita",
                "alergens": "1, 3, 7",
                "description": "sýr, rajčatový základ",
                "price": 148
            },
            {
                id: 2,
                "name": "Pizza Salame",
                "alergens": "1, 3, 7",
                "description": "sýr, salám, rajčatový základ",
                "price": 148
            }
        ]
    },
    {
        id: 2,
        "text": "Špagety",
    },
    {
        id: 3,
        "text": "Tortelini",
    },
    {
        id: 4,
        "text": "Maso",
    },
    {
        id: 5,
        "text": "Zapékané speciality",
    },
    {
        id: 6,
        "text": "Polévky",
    },
    {
        id: 5,
        "text": "Saláty",
    },
])
const selectedContent = ref([])

const navItems = computed(() => {
    return navItemsContent.value.map(item => {
        return {
            id: item.id,
            text: item.text
        }
    })
})

function setActiveContent(id) {
    selectedContent.value = navItemsContent.value.find(item => item.id === id)?.content
}
</script>