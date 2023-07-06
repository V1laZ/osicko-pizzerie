<template>
    <div>
        <BaseMenuFoodmenuNavbar :activeTab="activeTab" @click="setActiveContent" :navItems="navItems" />
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
                "allergens": "1, 3, 7",
                "description": "sýr, rajčatový základ",
                "price": 148
            },
            {
                id: 2,
                "name": "Pizza Salame",
                "allergens": "1, 3, 7",
                "description": "sýr, salám, rajčatový základ",
                "price": 148
            },
            {
                id: 3,
                "name": "Pizza Prosciutto",
                "allergens": "1, 3, 7",
                "description": "sýr, šunka, rajčatový základ",
                "price": 148
            },
            {
                id: 4,
                "name": "Pizza Capricciosa",
                "allergens": "1, 3, 7",
                "description": "sýr, šunka, žampiony, rajčatový základ",
                "price": 148
            },
            {
                id: 5,
                "name": "Pizza Quattro Formaggi",
                "allergens": "1, 3, 7",
                "description": "sýr, gorgonzola, eidam, mozzarella, rajčatový základ",
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
        id: 7,
        "text": "Saláty",
    },
])
const selectedContent = ref([])
const activeTab = ref(0)

onMounted(() => {
    setActiveContent(1)
})

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
    activeTab.value = id
}
</script>