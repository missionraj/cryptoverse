<template>
    <div
        class="margin-0 padding-0 w-[300px] fixed top-0 left-0 bottom-0 overflow-auto bg-blue-gray-700 h-[100%] sidebar"
        :class="[toggle ? 'slide' : '']"
    >
        <div class="flex p-2">
            <img src="@/assets/cryptocurrency.png" alt="crypto" height="40" width="40" />
            <span class="text-white text-2rem ml-1">Crypto Verse</span>
            <span class="ml-auto tablet:hidden" @click.prevent="toggle = false">
                <CloseThick class="close" />
            </span>
        </div>
        <div class="flex p-2 text-white items-center" :class="{ 'bg-blue-600': activePage == '/' }">
            <home class="text-1.5rem" />
            <span class="text-1.5rem ml-1">
                <router-link to="/">Home</router-link>
            </span>
        </div>
        <div
            class="flex p-2 text-white items-center"
            :class="{ 'bg-blue-600': activePage == '/currencies' }"
        >
            <ChartLine class="text-1.5rem" />
            <span class="text-1.5rem ml-1">
                <router-link to="/currencies">CryptoCurrencies</router-link>
            </span>
        </div>
        <div
            class="flex p-2 text-white items-center"
            :class="{ 'bg-blue-600': activePage == '/exchanges' }"
        >
            <SwapHorizontal class="text-1.5rem" />
            <span class="text-1.5rem ml-1">
                <router-link to="/exchanges">Exchange</router-link>
            </span>
        </div>
        <div
            class="flex p-2 text-white items-center"
            :class="{ 'bg-blue-600': activePage == '/news' }"
        >
            <NewspaperVariantMultipleOutline class="text-1.5rem" />
            <span class="text-1.5rem ml-1">
                <router-link to="/news">News</router-link>
            </span>
        </div>
    </div>
    <div class="hidden head p-2">
        <span @click.prevent="toggle = true">
            <Menu />
        </span>
    </div>
</template>
<script setup lang="ts">

import { ref, watch } from "vue";
import Home from 'vue-material-design-icons/Home.vue';
import ChartLine from 'vue-material-design-icons/ChartLine.vue';
import SwapHorizontal from 'vue-material-design-icons/SwapHorizontal.vue';
import NewspaperVariantMultipleOutline from 'vue-material-design-icons/NewspaperVariantMultipleOutline.vue';
import Menu from 'vue-material-design-icons/Menu.vue';
import CloseThick from 'vue-material-design-icons/CloseThick.vue';
import { useRouter } from "vue-router";


const toggle = ref(false);
const activePage = ref("/");
const route = useRouter();

watch(() => route.currentRoute.value, () => {
    activePage.value = route.currentRoute.value.path;
})


</script>
<style scoped>
.slide {
    width: 300px !important;
    z-index: 10;
}

.close {
    font-size: 2em;
    color: #fff;
}

@media only screen and (max-width: 600px) {
    .sidebar {
        width: 0;
        transition: width 0.3s linear 0.5s;
    }

    .head {
        display: block;
    }
}
</style>