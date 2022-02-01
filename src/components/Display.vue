<template>
    <div class="bg-gray-100">
        <div class="text-4xl">Global Crypto stats</div>
        <div class="grid grid-cols-2 pt-3">
            <div class="pb-2">
                <p>Total CryptoCurrencies</p>
                <div class="text-3xl">{{ data.totalCoins }}</div>
            </div>
            <div class="pb-2">
                <p>Total Exchanges</p>
                <div class="text-3xl">{{ data.totalExchanges }}</div>
            </div>
            <div class="pb-2">
                <p>Total Market Caps</p>
                <div class="text-3xl">{{ data.totalMarketCap }}</div>
            </div>
            <div class="pb-2">
                <p>Total 24hours Volume</p>
                <div class="text-3xl">{{ data.total24hVolume }}</div>
            </div>
            <div class="pb-2">
                <p>Total Markets</p>
                <div class="text-3xl">{{ data.totalMarkets }}</div>
            </div>
        </div>
    </div>
</template>
<script  setup lang="ts">

import { ref, onMounted } from "vue";
import CoinsApi from "../composables/services/coinsApi";
import { Coins, Stats } from "../types.d"

const queryParams = {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    tiers: '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
};

const data = ref(<Stats>{})

onMounted(() => {
    CoinsApi.get(queryParams).then((res) => {
        data.value = res.data.data.stats
        console.log('data value ....', res.data.data.stats);
    })
})

</script>
<style ></style>