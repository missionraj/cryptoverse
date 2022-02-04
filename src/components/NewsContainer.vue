<template>
    <div class="flex mb-2">
        <div class="flex-1 text-5xl">CryptoNews</div>
        <div>
            <router-link to="/news" class="text-blue-600">ShowMore</router-link>
        </div>
    </div>
    <div class="grid grid-cols-4 gap-3">
        <NewsCard v-for="news in newsList" :news="news" />
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NewsCard } from '.';
import coinsApi from '../composables/services/coinsApi';

const query = { q: 'Cryptocurrency', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off', count: '12' }

const newsList = ref(Array<any>())
coinsApi.getCoinsNews(query).then(response => {
    console.log("news response .....", response);
    newsList.value = response.data.value;
})


coinsApi

</script>
<style scoped>
</style>