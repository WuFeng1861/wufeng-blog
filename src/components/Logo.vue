<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  size?: number;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  color: 'currentColor'
});

const style = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`
}));
</script>

<template>
  <svg
    :style="style"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L1 21h22L12 2z"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M12 6.5L5.5 18.5h13L12 6.5z" :fill="color" />
  </svg>
</template>