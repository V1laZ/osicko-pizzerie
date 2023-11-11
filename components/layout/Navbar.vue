<template>
  <div class="bg-body-tertiary">
    <nav class="navbar container navbar-expand-lg">
      <div class="container-fluid">
        <NuxtLink to="/" class="navbar-brand">
          <img src="~/assets/icons/home.svg" width="30" height="30" />
        </NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse navbar-text"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav" ref="menu">
            <NuxtLink
              v-for="(link, index) in links"
              :key="index"
              :to="link.path"
              class="nav-link px-3"
              :class="{
                'border-right': index !== links.length - 1
              }"
            >
              <span>{{ link.name }}</span>
              <!-- <span class="ms-3 opacity-25" v-if="index < links.length - 1">|</span> -->
            </NuxtLink>
            <span class="indicator" :style="indicatorStyle"></span>
          </div>
        </div>
      </div>
      <div class="d-flex gap-2 align-items-center navbar-text">
        <img src="@/assets/icons/cart.svg" />
        <span class="language-text"> CZ </span>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
interface Link {
  path: string;
  name: string;
}

interface MoveIndicatorOptions {
  target: EventTarget | null;
}

const route = useRoute();

const links = <Link[]>[
  {
    path: "/menu",
    name: "Jídelní lístek",
  },
  {
    path: "/drinks-menu",
    name: "Nápojový lístek",
  },
  {
    path: "/about",
    name: "O nás",
  },
  {
    path: "/contact",
    name: "Kontakt",
  },
];
const indicatorStyle = ref({});
const menu = ref<Element>();

const moveIndicator = ({ target }: MoveIndicatorOptions) => {
  if (!target || !(target instanceof HTMLElement)) return;
  indicatorStyle.value = {
    width: `${target.offsetWidth}px`,
    transform: `translateX(${target.offsetLeft}px)`,
  };
}

const updateIndicator = () => {
  if (!menu.value) return;
  if (route.fullPath === "/") {
    indicatorStyle.value = {
      width: "0px",
      transform: `translateX(0px)`,
    };
    return;
  }

  const activeLink = menu.value.querySelector(".router-link-active");
  if (activeLink) {
    moveIndicator({ target: activeLink.firstChild });
  }
}

onMounted(() => {
  nextTick(() => {
    updateIndicator();
  });
});

watch(
  () => route.fullPath,
  () => {
    nextTick(() => {
      updateIndicator();
    });
  }
);
</script>

<style scoped>
.border-right {
  border-right: 1px solid #45301f;
}
.navbar-text {
  color: #45301f;
  font-size: 20px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.2px;
}
.language-text {
  color: #000;
  font-size: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.navbar-nav {
  position: relative;
}
.indicator {
  position: absolute;
  height: 2px;
  background-color: #45301f;
  transition: all 0.3s ease-in-out;
  bottom: 0;
}
</style>
