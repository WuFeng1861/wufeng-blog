<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { PlusOutlined } from '@ant-design/icons-vue'
import type { UploadProps } from 'ant-design-vue'

const router = useRouter()
const activeKey = ref('login')

const loginForm = ref({
  username: '',
  password: ''
})

const registerForm = ref({
  username: '',
  password: '',
  confirmPassword: ''
})

const handleLogin = () => {
  if (loginForm.value.username === 'admin' && loginForm.value.password === '123456') {
    localStorage.setItem('user', JSON.stringify({ username: loginForm.value.username }))
    router.push('/')
  } else {
    // 显示错误消息
  }
}

const handleRegister = () => {
  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    // 显示错误消息
    return
  }
  // 模拟注册成功
  localStorage.setItem('user', JSON.stringify({ username: registerForm.value.username }))
  router.push('/')
}
</script>

<template>
  <div class="auth-container">
    <div class="auth-content">
      <div class="auth-header">
        <h1>无风博客</h1>
        <p>无风不浪，万事皆行</p>
      </div>
      <a-card class="auth-card">
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="login" tab="登录">
            <a-form :model="loginForm" @finish="handleLogin">
              <a-form-item name="username" :rules="[{ required: true, message: '请输入用户名' }]">
                <a-input v-model:value="loginForm.username" placeholder="用户名" />
              </a-form-item>
              <a-form-item name="password" :rules="[{ required: true, message: '请输入密码' }]">
                <a-input-password v-model:value="loginForm.password" placeholder="密码" />
              </a-form-item>
              <a-form-item>
                <a-button type="primary" html-type="submit" block>登录</a-button>
              </a-form-item>
            </a-form>
          </a-tab-pane>
          <a-tab-pane key="register" tab="注册">
            <a-form :model="registerForm" @finish="handleRegister">
              <a-form-item name="username" :rules="[{ required: true, message: '请输入用户名' }]">
                <a-input v-model:value="registerForm.username" placeholder="用户名" />
              </a-form-item>
              <a-form-item name="password" :rules="[{ required: true, message: '请输入密码' }]">
                <a-input-password v-model:value="registerForm.password" placeholder="密码" />
              </a-form-item>
              <a-form-item name="confirmPassword" :rules="[{ required: true, message: '请确认密码' }]">
                <a-input-password v-model:value="registerForm.confirmPassword" placeholder="确认密码" />
              </a-form-item>
              <a-form-item>
                <a-button type="primary" html-type="submit" block>注册</a-button>
              </a-form-item>
            </a-form>
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #000000, #1a1a1a);
  padding: 20px;
  box-sizing: border-box;
}

.auth-content {
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.auth-header {
  text-align: center;
  margin-bottom: 30px;
}

.auth-header h1 {
  /* color: #00ffff; */
  font-size: 20px;
  margin-bottom: 10px;
  /* text-shadow: 0 0 10px rgba(0, 255, 255, 0.5); */
}

.auth-header p {
  color: #ffffff;
  font-size: 18px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  color: #00ffff;
}

.auth-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 20px;
}

:deep(.ant-tabs-nav) {
  margin-bottom: 20px;
}

:deep(.ant-form-item) {
  margin-bottom: 24px;
}

:deep(.ant-btn-primary) {
  background-color: #00ffff;
  border-color: #00ffff;
  color: #000000;
}

:deep(.ant-btn-primary:hover) {
  background-color: #00cccc;
  border-color: #00cccc;
}

:deep(.ant-input), :deep(.ant-input-password) {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: #00ffff;
  color: #ffffff;
}

:deep(.ant-input::placeholder), :deep(.ant-input-password input::placeholder) {
  color: rgba(255, 255, 255, 0.5);
}

:deep(.ant-tabs-tab) {
  color: #ffffff;
}

:deep(.ant-tabs-tab-active) {
  color: #00ffff !important;
}

:deep(.ant-tabs-ink-bar) {
  background-color: #00ffff;
}
</style>