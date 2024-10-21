<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Header from '../components/Header.vue';
import LoadingBall from '../components/LoadingBall.vue';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
}

const router = useRouter();

const blogPosts = ref<BlogPost[]>([
  { id: 1, title: '星际旅行的未来', summary: '探索人类在宇宙中的下一步。' },
  { id: 2, title: '量子计算机革命', summary: '量子位如何改变我们的数字世界。' },
  {
    id: 3,
    title: '人工智能的伦理困境',
    summary: '在智能机器时代，我们如何保持人性？',
  },
]);

const navigateToBlogPost = (id: number) => {
  router.push(`/post/${id}`);
};

const showLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    showLoading.value = false;
  }, 2 * 1000);
});
</script>

<template>
  <div class="home-container" v-newloading="showLoading">
    <Header />

    <div class="content">
      <h1 class="glow-text" v-newloading="showLoading">欢迎来到无风博客</h1>
      <a-list item-layout="horizontal" :data-source="blogPosts">
        <template #renderItem="{ item }">
          <a-list-item
            @click="navigateToBlogPost(item.id)"
            class="blog-post-item neon-border"
          >
            <a-list-item-meta :description="item.summary">
              <template #title>
                <span class="post-title glow-text">{{ item.title }}</span>
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
      <!-- <LoadingBall :width="500" :height="200" /> -->
    </div>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  width: 90%;
  margin: 84px auto 20px;
  padding: 20px;
  border-radius: 8px;
  box-sizing: border-box;
}
.glow-text {
  position: relative;
}

h1 {
  text-align: center;
  margin-bottom: 24px;
  font-weight: 700;
}

.blog-post-item {
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.blog-post-item:hover {
  transform: translateY(-5px);
}

:deep(.ant-list-item-meta-title) {
  font-size: 18px;
  font-weight: 600;
}

:deep(.ant-list-item-meta-description) {
  line-height: 1.5;
}

@media (max-width: 768px) {
  .content {
    margin-top: 64px;
    padding: 15px;
  }
}
</style>
