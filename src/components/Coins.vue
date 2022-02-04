<template>
    <div v-if="searchBar" class="pt-5 pb-5 flex items-center justify-center">
        <div class="p-1 bg-white rounded-lg">
            <input type="text" class="outline-none text-sm font-light" />
            <Magnify class="text-xl" />
        </div>
    </div>
    <div v-else class="flex pt-5 pb-5">
        <div class="flex-1">Top 10 Cryptos in the world</div>
        <div>
            <router-link to="/currencies" class="text-blue-600">ShowMore</router-link>
        </div>
    </div>
    <div class="grid grid-cols-4 gap-3">
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from 'vue-router';
import Magnify from 'vue-material-design-icons/Magnify.vue';


import CoinCard from "./CoinCard.vue";


const route = useRoute();
const searchBar = ref(route.path == '/currencies' ? true : false);
console.log("route ....", route.path);


</script>
<style scoped>
</style>