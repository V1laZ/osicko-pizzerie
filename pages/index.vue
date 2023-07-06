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
      <BaseMenuFoodmenu />
    </div>
  </div>
</template>

<style scoped>
.service-text {
  max-width: 203px;
}
.bottom-line {
  border-bottom: 1px solid rgba(0, 0, 0, 0.10);
}
</style>