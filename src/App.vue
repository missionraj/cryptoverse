<script setup lang="ts">
import { Header } from './components'
</script>

<template>
  <Header />
  <div class="ml-[300px] p-2 content bg-gray-100 min-h-[100vh]">
    <router-view></router-view>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  .content {
    margin-left: 0;
  }
}
</style>
