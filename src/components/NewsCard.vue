<template >
    <a :href="news.url" target="_blank">
        <div class="min-h-60 bg-white p-2 rounded-lg">
            <p class="flex items-start">
                <span class="flex-1 text-xl font-bold">{{ news.name }}</span>
                <img
                    :src="news.image.thumbnail.contentUrl"
                    height="100"
                    width="100"
                    class="object-contain float-right"
                    alt="coin"
                />
            </p>
            <p class="flex">
                <span class="flex-1">{{ news.provider[0].name }}</span>
                <span>{{ moment(news.datePublished).startOf('day').fromNow() }}</span>
            </p>
        </div>
    </a>
</template>
<script setup lang="ts">
import { News } from '../types';
import moment from 'moment';

interface Props {
    news: News
}

const props = defineProps<Props>()
</script>
<style scoped>
</style>