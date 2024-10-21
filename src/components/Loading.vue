<!-- src/components/Loading.vue -->
<template>
  <div class="loading-spinner" :style="{ width: '100%', height: '100%' }">
    <div
      class="spinner"
      :style="{ width: size, height: size }"
      :size="size"
    ></div>
    <div class="loading-text">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    size: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '正在加载中...',
    },
  },
});
</script>

<style scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  z-index: 9999;
  position: absolute;
}

.spinner {
  border: 8px solid rgba(245, 245, 245, 0.6);
  border-top: 8px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.loading-text {
  margin-top: 15px;
  font-size: 18px;
  color: #333;
  font-weight: 600;
  text-align: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
