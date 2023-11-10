<template>
  <div :style="{ backgroundImage: `url(${background})` }" class="bg-header">
    <div
      class="d-flex flex-column align-items-center justify-content-center text-center"
    >
      <h1
        :class="{
          'main-title': main,
          title: !main,
        }"
      >
        {{ title }}
      </h1>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Pizzerie Osíčko",
  },
  background: {
    type: String,
    default: "",
  },
  main: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.main-title {
  color: #fff;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: "Kolker Brush";
  font-size: 250px;
  font-style: normal;
  font-weight: 400;
  line-height: 200px;
}
@media only screen and (max-width: 576px) {
  .main-title {
    font-size: 150px;
    line-height: 120px;
  }
}

.title {
  color: #fff;
  font-family: "Kolker Brush";
  font-size: 100px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.bg-header {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}
</style>
