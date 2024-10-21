<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useThemeStore } from '../stores/theme';
import Logo from './Logo.vue';

const router = useRouter();
const user = ref(null);
const themeStore = useThemeStore();
const logoColor = ref('');

const themes = [
  { value: 'natural', label: '自然风格' },
  { value: 'sci-fi', label: '科幻风格' },
  { value: 'gray', label: '灰白风格' },
  { value: 'fresh', label: '清新风格' },
  { value: 'glass', label: '玻璃风格' }
];

onMounted(() => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    user.value = JSON.parse(storedUser);
  }
});

const goToAuth = () => {
  router.push('/auth');
};

const logout = () => {
  localStorage.removeItem('user');
  user.value = null;
  router.push('/');
};

const handleThemeChange = (value: string) => {
  themeStore.setTheme(value);
};

watchEffect(() => {
  document.body.className = themeStore.currentTheme;
  logoColor.value = getComputedStyle(document.body).getPropertyValue('--logo-color').trim();
});
</script>

<template>
  <a-layout-header class="header">
    <div class="header-content">
      <div class="logo-title" @click="router.push('/')">
        <Logo :color="logoColor" :size="32" />
        <span class="title">无风博客</span>
      </div>
      <div class="user-section">
        <a-select
          v-model:value="themeStore.currentTheme"
          style="width: 120px; margin-right: 16px;"
          @change="handleThemeChange"
        >
          <a-select-option v-for="theme in themes" :key="theme.value" :value="theme.value">
            {{ theme.label }}
          </a-select-option>
        </a-select>
        <template v-if="user">
          <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
              <a-avatar
                :style="{ backgroundColor: '#00ffff', verticalAlign: 'middle' }"
              >
                {{ user.username.charAt(0).toUpperCase() }}
              </a-avatar>
              <span class="username">{{ user.username }}</span>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item @click="logout">
                  <span>退出登录</span>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>
        <template v-else>
          <a-button type="primary" class="auth-button" @click="goToAuth">登录</a-button>
          <a-button class="auth-button" @click="goToAuth">注册</a-button>
        </template>
      </div>
    </div>
  </a-layout-header>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.header-content {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 64px;
  box-sizing: border-box;
}

.logo-title {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.title {
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
}

.user-section {
  display: flex;
  align-items: center;
}

.auth-button {
  margin-left: 10px;
}

.username {
  margin-left: 8px;
}

.ant-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>