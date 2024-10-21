<template>
  <div class="loader">
    <div
      class="circle"
      v-for="index in 4"
      :key="index"
      :style="{ width: `${size}px`, height: `${size}px` }"
    >
      <div
        class="dot"
        :style="{ width: `${size - 4}px`, height: `${size - 4}px` }"
      ></div>
      <div
        class="outline"
        :style="{ width: `${size}px`, height: `${size}px` }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 20, // 默认大小
    },
  },
};
</script>

<style scoped>
.loader {
  --color: hsl(120, 50%, 50%);
  --colordot: hsl(120, 70%, 50%);
  --animation: 2s ease-in-out infinite;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  display: flex;
  z-index: 9999;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
}

.loader .circle {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: solid 2px var(--color);
  margin: 0 10px;
  background-color: transparent;
  animation: circle-keys var(--animation);
  border-radius: 50%;
}

.loader .circle .dot {
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: var(--colordot);
  animation: dot-keys var(--animation);
}

.loader .circle .outline {
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  animation: outline-keys var(--animation);
}

.circle:nth-child(2) {
  animation-delay: 0.3s;
}

.circle:nth-child(3) {
  animation-delay: 0.6s;
}

.circle:nth-child(4) {
  animation-delay: 0.9s;
}

.circle:nth-child(2) .dot {
  animation-delay: 0.3s;
}

.circle:nth-child(3) .dot {
  animation-delay: 0.6s;
}

.circle:nth-child(4) .dot {
  animation-delay: 0.9s;
}

.circle:nth-child(1) .outline {
  animation-delay: 0.9s;
}

.circle:nth-child(2) .outline {
  animation-delay: 1.2s;
}

.circle:nth-child(3) .outline {
  animation-delay: 1.5s;
}

.circle:nth-child(4) .outline {
  animation-delay: 1.8s;
}

@keyframes circle-keys {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes dot-keys {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes outline-keys {
  0% {
    transform: scale(0);
    outline: solid 20px var(--color);
    outline-offset: 0;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    outline: solid 0 transparent;
    outline-offset: 20px;
    opacity: 0;
  }
}
</style>
