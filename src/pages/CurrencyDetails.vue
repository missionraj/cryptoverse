<template >
    <div
        class="text-center text-4xl text-blue-500"
    >{{ data?.data?.coin.name }} ({{ data?.data?.coin.symbol }}) Price</div>

    <p
        class="text-center"
    >{{ data.data.coin.name }} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
    <div style="display: flex;flex-direction:column;">
        <vue3-chart-js v-bind="{ ...lineChart }" />
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from 'vue-router';
import coinsApi from '../composables/services/coinsApi';
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

const route = useRoute();

console.log("route ", route.params.id);

const params = { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h' }

// coinsApi.getCoinsdetail(route.params.id as string, params).then(res => {
//     console.log('coins detail ...', res);
// })

// coinsApi.getCoinsPriceHistory(route.params.id as string, params).then(res => {
//     console.log("coins history ......", res);
// })

const data = {
    "status": "success",
    "data": {
        "coin": {
            "uuid": "Qwsogvtv82FCd",
            "symbol": "BTC",
            "name": "Bitcoin",
            "description": "<p>Bitcoin is the first digital currency that allows users to send and receive money, without the interference of a central bank or government. Instead, a network of thousands of peers is controlling the transactions; a decentralized system.</p>\n\n<h3>Why does bitcoin have value?</h3>\n\n<p>Bitcoin&rsquo;s useful qualities (decentralized, borderless, secure) aren&rsquo;t the only reason the coin is worth so much. Due to its scarcity (and it&rsquo;s hard to produce), Bitcoin is often nicknamed &lsquo;Digital Gold&rsquo;, in reference to &lsquo;classic&rsquo; physical gold. Like gold, Bitcoin also has a finite supply of coins available; there will only ever be 21 million bitcoin. And now you know why the creation of new bitcoins is also called mining.</p>\n\n<h3>No inflation in bitcoin</h3>\n\n<p>Bitcoin was invented in response to a few concerns the inventor(s) had, such as inflation. Its supply is limited, so one cannot just devalue the currency by printing more, as governments often do with fiat currencies (USD, EUR, etc.).</p>\n\n<p>As people look for alternative places to keep their money rather than losing value in a negative interest rate account, Bitcoin becomes more appealing. Big global companies, such as Tesla and MicroStrategy already purchased serious amounts of Bitcoin. And it&#39;s only a matter of time that other companies will follow. This also ensures that the value remains or continues to increase.</p>\n\n<h3>Who built Bitcoin</h3>\n\n<p>In 2008, Bitcoin was invented by an anonymous person or group named Satoshi Nakamoto. In 2009, Bitcoin was released as open-source software. Nakamoto&rsquo;s real identity is still unknown, although there are many theories about who it might be. Decentralization is one of Bitcoin&rsquo;s most important principles, and that&rsquo;s why this anonymity is perfectly in line.</p>\n\n<h3>The technology of Bitcoin</h3>\n\n<p>The Bitcoin blockchain is a database, the so-called &lsquo;ledger&rsquo;, that consists of bitcoin transaction records. For new transactions to be added to the ledger, the nodes must agree that the transaction is real and valid. The blockchain is public and contains records of all the transactions taking place.</p>\n\n<h3>How to buy bitcoin?</h3>\n\n<p>Continue reading <a href=\"https://coinranking.com/blog/how-to-buy-your-first-bitcoin/\" rel=\"nofollow noopener\" target=\"_blank\">this blog article</a> on how to buy your first bitcoin.</p>\n",
            "color": "#f7931A",
            "iconUrl": "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
            "websiteUrl": "https://bitcoin.org",
            "links": [
                {
                    "name": "bitcoin.org",
                    "type": "website",
                    "url": "https://bitcoin.org"
                },
                {
                    "name": "Bitcoin Whitepaper",
                    "url": "https://bitcoin.org/bitcoin.pdf",
                    "type": "website"
                },
                {
                    "name": "bitcoinmagazine.com",
                    "url": "https://bitcoinmagazine.com/",
                    "type": "website"
                },
                {
                    "name": "BitcoinTalk",
                    "url": "https://bitcointalk.org/",
                    "type": "bitcointalk"
                },
                {
                    "name": "blockchain.com",
                    "url": "https://www.blockchain.com/explorer",
                    "type": "explorer"
                },
                {
                    "name": "bitcoin/bitcoin",
                    "url": "https://github.com/bitcoin/bitcoin",
                    "type": "github"
                },
                {
                    "name": "r/bitcoin",
                    "url": "https://www.reddit.com/r/bitcoin/",
                    "type": "reddit"
                },
                {
                    "name": "Bitcoin_Magazine",
                    "url": "https://t.me/Bitcoin_Magazine",
                    "type": "telegram"
                },
                {
                    "name": "bitcoin",
                    "url": "https://t.me/bitcoin",
                    "type": "telegram"
                }
            ],
            "supply": {
                "confirmed": true,
                "total": "18947693",
                "circulating": "18947693"
            },
            "numberOfMarkets": 16460,
            "numberOfExchanges": 233,
            "24hVolume": "20035607601",
            "marketCap": "692935171157",
            "price": "36570.951997001735",
            "btcPrice": "1",
            "priceAt": 1643891280,
            "change": "-5.3",
            "rank": 1,
            "sparkline": [
                "38618.2138399455563009180000",
                "38653.8243399079278497730000",
                "38452.1339693341633220260000",
                "37879.9460407131984002340000",
                "37510.4673251507412978700000",
                "37302.6486723949103044120000",
                "37425.6069238888114792480000",
                "37481.7645799376088126470000",
                "37561.7751480106999213530000",
                "37551.9295076601660686910000",
                "37117.5606270945747687160000",
                "37021.7778770176229687350000",
                "37002.9330099899850788120000",
                "36943.3170406205431442920000",
                "36954.9039295108254128580000",
                "36874.5016833814121463430000",
                "36930.9182697099190067730000",
                "36892.0794830219342931820000",
                "36971.3420803712759658980000",
                "36967.7088507944216648970000",
                "36993.9415023241374151800000",
                "37076.1903559817973429290000",
                "37029.3591964004949577240000",
                "36704.2897222216028472280000",
                "36417.6532758624475781950000",
                "36675.9223644175311433180000",
                "36570.9519970017356092370000"
            ],
            "allTimeHigh": {
                "price": "68763.41083248306",
                "timestamp": 1636502400
            },
            "coinrankingUrl": "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
            "tier": 1,
            "lowVolume": false,
            "listedAt": 1330214400
        }
    }
}


const historyData = {
    "status": "success",
    "data": {
        "change": "-4.74",
        "history": [
            {
                "price": "36708.9695185979",
                "timestamp": 1643895000
            },
            {
                "price": "36701.09846083969",
                "timestamp": 1643894700
            },
            {
                "price": "36724.522064314966",
                "timestamp": 1643894400
            },
            {
                "price": "36722.55742938104",
                "timestamp": 1643894100
            },
            {
                "price": "36661.72861927461",
                "timestamp": 1643893800
            },
            {
                "price": "36685.91745809589",
                "timestamp": 1643893500
            },
            {
                "price": "36657.806289348264",
                "timestamp": 1643893200
            },
            {
                "price": "36535.455875738284",
                "timestamp": 1643892900
            },
            {
                "price": "36474.34199386181",
                "timestamp": 1643892600
            },
            {
                "price": "36483.29005524547",
                "timestamp": 1643892300
            },
            {
                "price": "36451.80514722213",
                "timestamp": 1643892000
            },
            {
                "price": "36412.62051281711",
                "timestamp": 1643891700
            },
            {
                "price": "36489.98627907949",
                "timestamp": 1643891400
            },
            {
                "price": "36706.71348798965",
                "timestamp": 1643891100
            },
            {
                "price": "36683.64084002098",
                "timestamp": 1643890800
            },
            {
                "price": "36670.056218091086",
                "timestamp": 1643890500
            },
            {
                "price": "36672.21217303959",
                "timestamp": 1643890200
            },
            {
                "price": "36733.53594723219",
                "timestamp": 1643889900
            },
            {
                "price": "36753.831412620675",
                "timestamp": 1643889600
            },
            {
                "price": "36710.94371709619",
                "timestamp": 1643889300
            },
            {
                "price": "36715.0416527262",
                "timestamp": 1643889000
            },
            {
                "price": "36668.168244695444",
                "timestamp": 1643888700
            },
            {
                "price": "36637.85602165696",
                "timestamp": 1643888400
            },
            {
                "price": "36591.801342778446",
                "timestamp": 1643888100
            },
            {
                "price": "36393.8250440513",
                "timestamp": 1643887800
            },
            {
                "price": "36366.231769216276",
                "timestamp": 1643887500
            },
            {
                "price": "36397.03180737156",
                "timestamp": 1643887200
            },
            {
                "price": "36429.629100910846",
                "timestamp": 1643886900
            },
            {
                "price": "36424.38503865939",
                "timestamp": 1643886600
            },
            {
                "price": "36423.355314675784",
                "timestamp": 1643886300
            },
            {
                "price": "36427.86450093749",
                "timestamp": 1643886000
            },
            {
                "price": "36462.94270647526",
                "timestamp": 1643885700
            },
            {
                "price": "36455.23723839407",
                "timestamp": 1643885400
            },
            {
                "price": "36397.00001494138",
                "timestamp": 1643885100
            },
            {
                "price": "36439.55049396702",
                "timestamp": 1643884800
            },
            {
                "price": "36411.33298023428",
                "timestamp": 1643884500
            },
            {
                "price": "36414.409990240536",
                "timestamp": 1643884200
            },
            {
                "price": "36408.81638783699",
                "timestamp": 1643883900
            },
            {
                "price": "36437.882193317506",
                "timestamp": 1643883600
            },
            {
                "price": "36474.93274475427",
                "timestamp": 1643883300
            },
            {
                "price": "36477.98728382338",
                "timestamp": 1643883000
            },
            {
                "price": "36560.58979761855",
                "timestamp": 1643882700
            },
            {
                "price": "36818.717423169066",
                "timestamp": 1643882400
            },
            {
                "price": "36955.59450383748",
                "timestamp": 1643882100
            },
            {
                "price": "36983.62498138438",
                "timestamp": 1643881800
            },
            {
                "price": "36983.60530355398",
                "timestamp": 1643881500
            },
            {
                "price": "36987.012862692536",
                "timestamp": 1643881200
            },
            {
                "price": "36939.75095175766",
                "timestamp": 1643880900
            },
            {
                "price": "36948.25836476956",
                "timestamp": 1643880600
            },
            {
                "price": "36936.70782953866",
                "timestamp": 1643880300
            },
            {
                "price": "36981.234751722775",
                "timestamp": 1643880000
            },
            {
                "price": "37030.19961931621",
                "timestamp": 1643879700
            },
            {
                "price": "37037.43346050101",
                "timestamp": 1643879400
            },
            {
                "price": "37071.487587224765",
                "timestamp": 1643879100
            },
            {
                "price": "37084.97264039705",
                "timestamp": 1643878800
            },
            {
                "price": "37059.63486592672",
                "timestamp": 1643878500
            },
            {
                "price": "37045.27585518168",
                "timestamp": 1643878200
            },
            {
                "price": "37073.89422635836",
                "timestamp": 1643877900
            },
            {
                "price": "37075.37799269199",
                "timestamp": 1643877600
            },
            {
                "price": "37087.45880905162",
                "timestamp": 1643877300
            },
            {
                "price": "37074.92707517499",
                "timestamp": 1643877000
            },
            {
                "price": "37090.943814929306",
                "timestamp": 1643876700
            },
            {
                "price": "37106.90854876647",
                "timestamp": 1643876400
            },
            {
                "price": "37096.68184746718",
                "timestamp": 1643876100
            },
            {
                "price": "37090.408758070545",
                "timestamp": 1643875800
            },
            {
                "price": "37069.190133446136",
                "timestamp": 1643875500
            },
            {
                "price": "37053.119051428606",
                "timestamp": 1643875200
            },
            {
                "price": "37067.24896746808",
                "timestamp": 1643874900
            },
            {
                "price": "37075.34790673442",
                "timestamp": 1643874600
            },
            {
                "price": "37058.56580070665",
                "timestamp": 1643874300
            },
            {
                "price": "37017.13806586433",
                "timestamp": 1643874000
            },
            {
                "price": "37025.34999278422",
                "timestamp": 1643873700
            },
            {
                "price": "37035.04259153509",
                "timestamp": 1643873400
            },
            {
                "price": "37016.80782807278",
                "timestamp": 1643873100
            },
            {
                "price": "37027.86449027666",
                "timestamp": 1643872800
            },
            {
                "price": "37038.43204362672",
                "timestamp": 1643872500
            },
            {
                "price": "37007.566408330094",
                "timestamp": 1643872200
            },
            {
                "price": "36957.133204390615",
                "timestamp": 1643871900
            },
            {
                "price": "36959.523170849345",
                "timestamp": 1643871600
            },
            {
                "price": "36957.54463651033",
                "timestamp": 1643871300
            },
            {
                "price": "36931.42118627463",
                "timestamp": 1643871000
            },
            {
                "price": "36913.719809525326",
                "timestamp": 1643870700
            },
            {
                "price": "36899.78913978135",
                "timestamp": 1643870400
            },
            {
                "price": "36910.6358259276",
                "timestamp": 1643870100
            },
            {
                "price": "36906.59965205794",
                "timestamp": 1643869800
            },
            {
                "price": "36917.42457397148",
                "timestamp": 1643869500
            },
            {
                "price": "36955.59364822943",
                "timestamp": 1643869200
            },
            {
                "price": "37001.45139703573",
                "timestamp": 1643868900
            },
            {
                "price": "37022.43655720993",
                "timestamp": 1643868600
            },
            {
                "price": "37014.143943238545",
                "timestamp": 1643868300
            },
            {
                "price": "37031.76770169392",
                "timestamp": 1643868000
            },
            {
                "price": "37008.15079376711",
                "timestamp": 1643867700
            },
            {
                "price": "37000.423557416245",
                "timestamp": 1643867400
            },
            {
                "price": "37031.693082368234",
                "timestamp": 1643867100
            },
            {
                "price": "37050.67687735732",
                "timestamp": 1643866800
            },
            {
                "price": "37037.69689485992",
                "timestamp": 1643866500
            },
            {
                "price": "37011.18096116763",
                "timestamp": 1643866200
            },
            {
                "price": "36999.39215215485",
                "timestamp": 1643865900
            },
            {
                "price": "36956.42176097931",
                "timestamp": 1643865600
            },
            {
                "price": "36900.61180494959",
                "timestamp": 1643865300
            },
            {
                "price": "36900.874501257415",
                "timestamp": 1643865000
            },
            {
                "price": "36928.420952183755",
                "timestamp": 1643864700
            },
            {
                "price": "36948.57986205972",
                "timestamp": 1643864400
            },
            {
                "price": "36973.86547326628",
                "timestamp": 1643864100
            },
            {
                "price": "36954.22303918888",
                "timestamp": 1643863800
            },
            {
                "price": "36929.54713586816",
                "timestamp": 1643863500
            },
            {
                "price": "36890.10711762036",
                "timestamp": 1643863200
            },
            {
                "price": "36880.66834103268",
                "timestamp": 1643862900
            },
            {
                "price": "36896.69669343803",
                "timestamp": 1643862600
            },
            {
                "price": "36898.175689232674",
                "timestamp": 1643862300
            },
            {
                "price": "36939.705060333356",
                "timestamp": 1643862000
            },
            {
                "price": "36926.6882034667",
                "timestamp": 1643861700
            },
            {
                "price": "36905.84044548413",
                "timestamp": 1643861400
            },
            {
                "price": "36866.39272060501",
                "timestamp": 1643861100
            },
            {
                "price": "36846.203639310945",
                "timestamp": 1643860800
            },
            {
                "price": "36869.9475279912",
                "timestamp": 1643860500
            },
            {
                "price": "36873.985158847114",
                "timestamp": 1643860200
            },
            {
                "price": "36921.45148752979",
                "timestamp": 1643859900
            },
            {
                "price": "36900.47068001887",
                "timestamp": 1643859600
            },
            {
                "price": "36873.33639872874",
                "timestamp": 1643859300
            },
            {
                "price": "36886.4713706886",
                "timestamp": 1643859000
            },
            {
                "price": "36951.11931520442",
                "timestamp": 1643858700
            },
            {
                "price": "36965.35366926922",
                "timestamp": 1643858400
            },
            {
                "price": "36940.58045277448",
                "timestamp": 1643858100
            },
            {
                "price": "36952.5910827366",
                "timestamp": 1643857800
            },
            {
                "price": "36979.61143306952",
                "timestamp": 1643857500
            },
            {
                "price": "36950.43622975843",
                "timestamp": 1643857200
            },
            {
                "price": "36958.27495888236",
                "timestamp": 1643856900
            },
            {
                "price": "36937.90073934931",
                "timestamp": 1643856600
            },
            {
                "price": "36902.16376740079",
                "timestamp": 1643856300
            },
            {
                "price": "36895.95244581117",
                "timestamp": 1643856000
            },
            {
                "price": "36906.4861650637",
                "timestamp": 1643855700
            },
            {
                "price": "36869.83298605629",
                "timestamp": 1643855400
            },
            {
                "price": "36840.296464110004",
                "timestamp": 1643855100
            },
            {
                "price": "36862.388701746815",
                "timestamp": 1643854800
            },
            {
                "price": "36817.06205823701",
                "timestamp": 1643854500
            },
            {
                "price": "36840.062409236125",
                "timestamp": 1643854200
            },
            {
                "price": "36889.85712909638",
                "timestamp": 1643853900
            },
            {
                "price": "36886.87840668773",
                "timestamp": 1643853600
            },
            {
                "price": "36893.79361598563",
                "timestamp": 1643853300
            },
            {
                "price": "36942.34577266671",
                "timestamp": 1643853000
            },
            {
                "price": "36994.59660618924",
                "timestamp": 1643852700
            },
            {
                "price": "36987.484870140135",
                "timestamp": 1643852400
            },
            {
                "price": "36970.85315755581",
                "timestamp": 1643852100
            },
            {
                "price": "36955.044411214716",
                "timestamp": 1643851800
            },
            {
                "price": "36954.05070622768",
                "timestamp": 1643851500
            },
            {
                "price": "36955.493927400814",
                "timestamp": 1643851200
            },
            {
                "price": "36952.79713736906",
                "timestamp": 1643850900
            },
            {
                "price": "36930.53273677505",
                "timestamp": 1643850600
            },
            {
                "price": "36941.16872785367",
                "timestamp": 1643850300
            },
            {
                "price": "36953.37396228397",
                "timestamp": 1643850000
            },
            {
                "price": "36941.384068979765",
                "timestamp": 1643849700
            },
            {
                "price": "36906.811295107735",
                "timestamp": 1643849400
            },
            {
                "price": "36934.278117400136",
                "timestamp": 1643849100
            },
            {
                "price": "36977.123078655895",
                "timestamp": 1643848800
            },
            {
                "price": "36974.34472719635",
                "timestamp": 1643848500
            },
            {
                "price": "36990.7747930268",
                "timestamp": 1643848200
            },
            {
                "price": "36909.23787888586",
                "timestamp": 1643847900
            },
            {
                "price": "36975.364816501045",
                "timestamp": 1643847600
            },
            {
                "price": "36968.50622000007",
                "timestamp": 1643847300
            },
            {
                "price": "36874.86140501771",
                "timestamp": 1643847000
            },
            {
                "price": "36926.66068227477",
                "timestamp": 1643846700
            },
            {
                "price": "36925.953184571415",
                "timestamp": 1643846400
            },
            {
                "price": "36906.86987987482",
                "timestamp": 1643846100
            },
            {
                "price": "36924.47991655066",
                "timestamp": 1643845800
            },
            {
                "price": "36920.20361522048",
                "timestamp": 1643845500
            },
            {
                "price": "36936.48362849299",
                "timestamp": 1643845200
            },
            {
                "price": "36990.79138192565",
                "timestamp": 1643844900
            },
            {
                "price": "37005.10941540378",
                "timestamp": 1643844600
            },
            {
                "price": "37042.180961467115",
                "timestamp": 1643844300
            },
            {
                "price": "37102.69209782265",
                "timestamp": 1643844000
            },
            {
                "price": "37088.56687212908",
                "timestamp": 1643843700
            },
            {
                "price": "37083.900265351425",
                "timestamp": 1643843400
            },
            {
                "price": "37062.565708976916",
                "timestamp": 1643843100
            },
            {
                "price": "37054.741848299076",
                "timestamp": 1643842800
            },
            {
                "price": "37116.21864992865",
                "timestamp": 1643842500
            },
            {
                "price": "37145.68098005639",
                "timestamp": 1643842200
            },
            {
                "price": "37158.58800719283",
                "timestamp": 1643841900
            },
            {
                "price": "37094.48717703483",
                "timestamp": 1643841600
            },
            {
                "price": "37028.478220065015",
                "timestamp": 1643841300
            },
            {
                "price": "37013.58611063277",
                "timestamp": 1643841000
            },
            {
                "price": "36934.44160030384",
                "timestamp": 1643840700
            },
            {
                "price": "36881.939728049096",
                "timestamp": 1643840400
            },
            {
                "price": "36913.62682653714",
                "timestamp": 1643840100
            },
            {
                "price": "36929.69671492006",
                "timestamp": 1643839800
            },
            {
                "price": "36979.54998173636",
                "timestamp": 1643839500
            },
            {
                "price": "36876.90692439181",
                "timestamp": 1643839200
            },
            {
                "price": "36789.76828753003",
                "timestamp": 1643838900
            },
            {
                "price": "36816.45701319902",
                "timestamp": 1643838600
            },
            {
                "price": "36864.61003180443",
                "timestamp": 1643838300
            },
            {
                "price": "36897.21026990888",
                "timestamp": 1643838000
            },
            {
                "price": "37225.52951994714",
                "timestamp": 1643837700
            },
            {
                "price": "37294.35073130481",
                "timestamp": 1643837400
            },
            {
                "price": "37215.871312112584",
                "timestamp": 1643837100
            },
            {
                "price": "37387.404411660274",
                "timestamp": 1643836800
            },
            {
                "price": "37374.77828161585",
                "timestamp": 1643836500
            },
            {
                "price": "37442.657962860685",
                "timestamp": 1643836200
            },
            {
                "price": "37552.59238781411",
                "timestamp": 1643835900
            },
            {
                "price": "37584.43211569683",
                "timestamp": 1643835600
            },
            {
                "price": "37478.709098192645",
                "timestamp": 1643835300
            },
            {
                "price": "37507.09669536119",
                "timestamp": 1643835000
            },
            {
                "price": "37467.00615443437",
                "timestamp": 1643834700
            },
            {
                "price": "37486.6888077274",
                "timestamp": 1643834400
            },
            {
                "price": "37530.39734638407",
                "timestamp": 1643834100
            },
            {
                "price": "37561.07434472645",
                "timestamp": 1643833800
            },
            {
                "price": "37617.83958044815",
                "timestamp": 1643833500
            },
            {
                "price": "37637.1302974315",
                "timestamp": 1643833200
            },
            {
                "price": "37610.6785112137",
                "timestamp": 1643832900
            },
            {
                "price": "37598.453033012294",
                "timestamp": 1643832600
            },
            {
                "price": "37565.85730192277",
                "timestamp": 1643832300
            },
            {
                "price": "37605.7717869948",
                "timestamp": 1643832000
            },
            {
                "price": "37629.87413777052",
                "timestamp": 1643831700
            },
            {
                "price": "37619.96043585357",
                "timestamp": 1643831400
            },
            {
                "price": "37613.023156677344",
                "timestamp": 1643831100
            },
            {
                "price": "37601.27943914852",
                "timestamp": 1643830800
            },
            {
                "price": "37534.586373309605",
                "timestamp": 1643830500
            },
            {
                "price": "37507.51140961821",
                "timestamp": 1643830200
            },
            {
                "price": "37514.603898576665",
                "timestamp": 1643829900
            },
            {
                "price": "37473.456981571195",
                "timestamp": 1643829600
            },
            {
                "price": "37511.62633550246",
                "timestamp": 1643829300
            },
            {
                "price": "37531.04999606184",
                "timestamp": 1643829000
            },
            {
                "price": "37540.5428761467",
                "timestamp": 1643828700
            },
            {
                "price": "37488.26887980563",
                "timestamp": 1643828400
            },
            {
                "price": "37454.257057583935",
                "timestamp": 1643828100
            },
            {
                "price": "37478.29257405814",
                "timestamp": 1643827800
            },
            {
                "price": "37487.60244554997",
                "timestamp": 1643827500
            },
            {
                "price": "37472.49759996385",
                "timestamp": 1643827200
            },
            {
                "price": "37480.601884093165",
                "timestamp": 1643826900
            },
            {
                "price": "37453.24301353388",
                "timestamp": 1643826600
            },
            {
                "price": "37471.29358238532",
                "timestamp": 1643826300
            },
            {
                "price": "37467.64592637649",
                "timestamp": 1643826000
            },
            {
                "price": "37450.30127797574",
                "timestamp": 1643825700
            },
            {
                "price": "37472.473547851216",
                "timestamp": 1643825400
            },
            {
                "price": "37482.849959650506",
                "timestamp": 1643825100
            },
            {
                "price": "37421.694284465884",
                "timestamp": 1643824800
            },
            {
                "price": "37414.906443753316",
                "timestamp": 1643824500
            },
            {
                "price": "37434.07947991536",
                "timestamp": 1643824200
            },
            {
                "price": "37380.03621002514",
                "timestamp": 1643823900
            },
            {
                "price": "37386.98300555234",
                "timestamp": 1643823600
            },
            {
                "price": "37376.72154046009",
                "timestamp": 1643823300
            },
            {
                "price": "37426.76777950457",
                "timestamp": 1643823000
            },
            {
                "price": "37426.39995205065",
                "timestamp": 1643822700
            },
            {
                "price": "37432.03153656407",
                "timestamp": 1643822400
            },
            {
                "price": "37461.780294854834",
                "timestamp": 1643822100
            },
            {
                "price": "37421.07284707827",
                "timestamp": 1643821800
            },
            {
                "price": "37332.32312557869",
                "timestamp": 1643821500
            },
            {
                "price": "37332.561558215966",
                "timestamp": 1643821200
            },
            {
                "price": "37338.27228108541",
                "timestamp": 1643820900
            },
            {
                "price": "37256.152070634074",
                "timestamp": 1643820600
            },
            {
                "price": "37215.648250892446",
                "timestamp": 1643820300
            },
            {
                "price": "37201.05278175632",
                "timestamp": 1643820000
            },
            {
                "price": "37273.939565514425",
                "timestamp": 1643819700
            },
            {
                "price": "37337.02634732374",
                "timestamp": 1643819400
            },
            {
                "price": "37279.753413248494",
                "timestamp": 1643819100
            },
            {
                "price": "37180.268924308344",
                "timestamp": 1643818800
            },
            {
                "price": "37270.22010590085",
                "timestamp": 1643818500
            },
            {
                "price": "37316.21275742265",
                "timestamp": 1643818200
            },
            {
                "price": "37391.62707842702",
                "timestamp": 1643817900
            },
            {
                "price": "37519.34814282162",
                "timestamp": 1643817600
            },
            {
                "price": "37552.039215798584",
                "timestamp": 1643817300
            },
            {
                "price": "37616.66280261511",
                "timestamp": 1643817000
            },
            {
                "price": "37610.16763148102",
                "timestamp": 1643816700
            },
            {
                "price": "37566.37826331467",
                "timestamp": 1643816400
            },
            {
                "price": "37655.32445135494",
                "timestamp": 1643816100
            },
            {
                "price": "37718.64976367007",
                "timestamp": 1643815800
            },
            {
                "price": "37652.2773727694",
                "timestamp": 1643815500
            },
            {
                "price": "37651.40566561416",
                "timestamp": 1643815200
            },
            {
                "price": "37669.45672103162",
                "timestamp": 1643814900
            },
            {
                "price": "37697.29166422426",
                "timestamp": 1643814600
            },
            {
                "price": "37728.5458592038",
                "timestamp": 1643814300
            },
            {
                "price": "37734.178539864726",
                "timestamp": 1643814000
            },
            {
                "price": "37786.262918223634",
                "timestamp": 1643813700
            },
            {
                "price": "37807.29777061479",
                "timestamp": 1643813400
            },
            {
                "price": "37930.48743624917",
                "timestamp": 1643813100
            },
            {
                "price": "38034.064354095644",
                "timestamp": 1643812800
            },
            {
                "price": "38196.183491997115",
                "timestamp": 1643812500
            },
            {
                "price": "38370.96737374966",
                "timestamp": 1643812200
            },
            {
                "price": "38327.307718872325",
                "timestamp": 1643811900
            },
            {
                "price": "38412.28211061505",
                "timestamp": 1643811600
            },
            {
                "price": "38415.41986663429",
                "timestamp": 1643811300
            },
            {
                "price": "38402.42054203872",
                "timestamp": 1643811000
            },
            {
                "price": "38413.48774074692",
                "timestamp": 1643810700
            },
            {
                "price": "38403.11527859432",
                "timestamp": 1643810400
            },
            {
                "price": "38411.25463993389",
                "timestamp": 1643810100
            },
            {
                "price": "38483.54975972444",
                "timestamp": 1643809800
            },
            {
                "price": "38545.950542366474",
                "timestamp": 1643809500
            },
            {
                "price": "38546.163866142386",
                "timestamp": 1643809200
            },
            {
                "price": "38533.81365799506",
                "timestamp": 1643808900
            }
        ]
    }
}
const coinPrice = ref(Array<string>());
const coinTimestamp = ref(Array<any>());

for (let i = 0; i < historyData?.data?.history?.length; i += 1) {
    coinPrice.value.push(historyData?.data?.history[i].price);
}

for (let i = 0; i < historyData?.data?.history?.length; i += 1) {
    coinTimestamp.value.push(new Date(historyData?.data?.history[i].timestamp).toLocaleDateString());
}


const lineChart = {
    type: "line",
    // locally registered and available for this chart
    data: {
        labels: coinTimestamp.value,
        datasets: [
            {
                label: "Price in usd",
                data: coinPrice.value,
                fill: false,
                borderColor: "#00D8FF",
                backgroundColor: "blue",
            },
        ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    },
};

</script>
<style scoped></style>