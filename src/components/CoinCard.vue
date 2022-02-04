<template>
    <router-link :to="{ path: `/crypto/${data.uuid}` }">
        <div class="min-h-60 bg-white p-2 rounded-lg">
            <div class="flex">
                <div class="flex-1">{{ data.rank }}. {{ data.name }}</div>
                <img :src="data.iconUrl" class="h-5 w-5" />
            </div>
            <div>
                <p>Price : {{ millify(parseInt(data.price)) }}</p>
                <p>MarketCap : {{ millify(parseInt(data.marketCap)) }}</p>
                <p>DailyChange : {{ data.change }}%</p>
            </div>
        </div>
    </router-link>
</template>
<script setup lang="ts">
import millify from "millify";


const data = {
    "uuid": "Qwsogvtv82FCd",
    "symbol": "BTC",
    "name": "Bitcoin",
    "color": "#f7931A",
    "iconUrl": "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
    "marketCap": "706983860812",
    "price": "37313.94776602625",
    "listedAt": 1330214400,
    "tier": 1,
    "change": "-3.85",
    "rank": 1,
    "sparkline": [
        "38810.0145632419514226500000",
        "38961.9389356186646407050000",
        "38857.2024836373944969180000",
        "38777.6356166275467174210000",
        "38461.8210011572996163840000",
        "38600.1402006143083233530000",
        "38737.9786695093648510040000",
        "38726.4998757423246504150000",
        "38746.2391802382665933710000",
        "38694.7725763152621228840000",
        "38535.1052097667636944740000",
        "38554.2715960504962334670000",
        "38664.0997387023241068890000",
        "38524.8130932660027111230000",
        "38445.2431066950823534250000",
        "38431.5197601696349931510000",
        "38319.6350573587617036520000",
        "38348.9222523660251309800000",
        "38440.6629526393984364720000",
        "38500.1946468756760464290000",
        "38533.2863816521276564880000",
        "38548.0428404430729751080000",
        "38668.9590527821107199530000",
        "38476.5200223829445756530000",
        "37964.0340012064118257920000",
        "37583.5001788315320027630000",
        "37313.9477660262457615520000"
    ],
    "lowVolume": false,
    "coinrankingUrl": "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
    "24hVolume": "16937655716",
    "btcPrice": "1"
}

</script>
<style scoped></style>