<template>
  <div class="ff-inter">
    <div
      class="d-flex align-items-center justify-content-between"
      itemscope
      itemtype="https://schema.org/MenuItem"
    >
      <div>
        <h5 class="p-0 m-0">
          <span class="me-2" itemprop="name">{{ item.name }}</span>
          <span
            v-if="item.allergens"
            itemprop="suitableForDiet"
            itemscope
            itemtype="https://schema.org/RestrictedDiet"
            >{{ item.allergens }}</span
          >
        </h5>
        <p
          v-if="item.description"
          class="text-body-secondary p-0 m-0"
          itemprop="description"
        >
          ({{ item.description }})
        </p>
      </div>
      <span
        class="fs-5 text-nowrap"
        itemprop="offers"
        itemscope
        itemtype="https://schema.org/Offer"
      >
        <meta itemprop="priceCurrency" content="CZK" />
        <span itemprop="price">{{ item.price }}</span>
        <span> Kč</span>
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
</script>
