<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const timing = performance.timing;
  const whiteScreenTime = timing.responseStart - timing.navigationStart;
  const firstScreenTime = timing.domContentLoadedEventEnd - timing.navigationStart;
  
  console.log('白屏时间：', whiteScreenTime);
  console.log('首屏时间：', firstScreenTime);
});
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Orbitron', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #00ffff;
}
</style>