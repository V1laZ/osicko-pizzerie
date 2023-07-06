<template>
  <div class="ff-sans">
    <!-- Header -->
    <PageHeader title="Pizzerie Osíčko" background="/img/pizza-main.png" main>
      <BaseMenuDailyMenu />
    </PageHeader>
    <div class="container">
      <!-- Services -->
      <div class="py-5 d-flex justify-content-center align-items-center flex-column bottom-line w-100">
        <h3 class="fs-1 mb-4">Nabízíme</h3>
        <div class="row gx-4 gy-4 w-100">
          <div class="col-12 col-md d-flex flex-column align-items-center gap-3">
            <h4 class="text-center text-primary fs-4">Restauraci s letním posezením</h4>
            <img src="@/assets/icons/outside-table.svg" />
            <p class="text-center service-text">Restaurace s klimatizací pojme až 70 zákázníků, terasa s letním posezením pak dalších 40.</p>
          </div>
          <div class="col-12 col-md d-flex flex-column align-items-center gap-3">
            <h4 class="text-center text-primary fs-4">Cateringové služby</h4>
            <img src="@/assets/icons/plate.svg" />
            <p class="text-center service-text">Jsme schopni uspořádat a zajistit široké spektrum akcí jako jsou rauty, recepce, firemní večírky, srazy po letech, rodinné oslavy, svatby apod.</p>
          </div>
          <div class="col-12 col-md d-flex flex-column align-items-center gap-3">
            <h4 class="text-center text-primary fs-4">Ubytování</h4>
            <img src="@/assets/icons/house.svg" />
            <p class="text-center service-text">Všechny pokoje jsou vybaveny zdravotními matracemi, připojením k internetu, televizorem, vlastní koupelnou a toaletou.</p>
          </div>
        </div>
      </div>
      <!-- Food menu -->
      <h3 class="fs-1 text-center mt-4 mb-3">Jídelní lístek</h3>
      <div class="bottom-line pb-5">
        <BaseMenuFoodmenu :content="foodNavItemsContent" />
      </div>
      <!-- Drinks menu -->
      <h3 class="fs-1 text-center mt-4 mb-3">Nápojový lístek</h3>
        <BaseMenuFoodmenu :content="drinksNavItemsContent" />
    </div>
  </div>
</template>

<script setup>
const foodNavItemsContent = ref([
    {
        id: 1,
        "name": "Pizza",
        "description": "Při vyžádání půlené porce - příplatek 10kč",
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
        "name": "Špagety",
    },
    {
        id: 3,
        "name": "Tortelini",
    },
    {
        id: 4,
        "name": "Maso",
    },
    {
        id: 5,
        "name": "Zapékané speciality",
    },
    {
        id: 6,
        "name": "Polévky",
    },
    {
        id: 7,
        "name": "Saláty",
    },
])

const drinksNavItemsContent = ref([
    {
        id: 1,
        "name": "Alkoholické nápoje",
        "content": [
          {
            id: 1,
            "name": "Pivo",
            "description": "500ml",
            "price": 35
          },
          {
            id: 2,
            "name": "Bacardi",
            "description": "4cl",
            "price": 60
          },
          {
            id: 3,
            "name": "Becherovka",
            "description": "4cl",
            "price": 60
          },
          {
            id: 4,
            "name": "Fernet",
            "description": "4cl",
            "price": 60
          },
          {
            id: 5,
            "name": "Gin",
            "description": "4cl",
            "price": 60
          }
        ]
    },
    {
        id: 2,
        "name": "Nealkoholické nápoje",
    },
    {
        id: 3,
        "name": "Káva",
    },
    {
        id: 4,
        "name": "Čaj",
    },
    {
        id: 5,
        "name": "Víno",
    },
    {
        id: 6,
        "name": "Pivo",
    },
    {
        id: 7,
        "name": "Destiláty",
    },
])
</script>

<style scoped>
.service-text {
  max-width: 203px;
}
.bottom-line {
  border-bottom: 1px solid rgba(0, 0, 0, 0.10);
}
</style>