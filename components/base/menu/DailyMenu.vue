<template>
    <div class="d-flex flex-column align-items-center menu-wrapper">
        <div class="d-flex align-items-center gap-4">
            <div class="menu-line"></div>
            <h2 class="menu-title text-nowrap">Denní menu</h2>
            <div class="menu-line"></div>
        </div>
        <span class="day-text mb-3">Pátek 16.6</span>
        <ol class="menu-text container">
            <li v-for="item in menuItems" :key="item.id">
                <div class="d-flex gap-2 justify-content-between mb-1">
                    <span class="text-start">{{ item.name }}</span>
                    <span class="text-nowrap">{{ item.price }} Kč</span>
                </div>
            </li>
        </ol>
    </div>
</template>

<script setup>
const menuItems = ref([
    {
        id: 1,
        name: 'Sekaná, štouchaný brambor, kys. okurka',
        price: 165
    },
    {
        id: 2,
        name: 'Špagety Ala Bolognese',
        price: 165
    },
    {
        id: 3,
        name: 'Smažený sýr, hranolky, tatarka',
        price: 165
    },
    {
        id: 4,
        name: 'Kuřecí plátek na roštu, vařený brambor, pepřová omáčka',
        price: 165
    },
])

</script>

<style scoped>
.menu-wrapper {
    width: 50%;
}
@media only screen and (max-width: 1200px) {
    .menu-wrapper {
        width: 75%;
    }
}
.menu-line {
    border-bottom: 1px solid white;
    width: 136px;
}
@media only screen and (max-width: 576px) {
    .menu-line {
        width: 60px;
    }
}
.menu-title {
    color: #FFF;
    font-family: 'Open Sans';
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
@media only screen and (max-width: 576px) {
    .menu-title {
        font-size: 24px;
    }
}
.day-text {
    color: #FFF;
    font-family: 'Open Sans';
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
.menu-text {
    color: #FFF;
    font-family: 'Old Standard TT';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
}
</style>