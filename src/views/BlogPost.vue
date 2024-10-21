<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '../components/Header.vue'

interface BlogPost {
  id: number
  title: string
  content: string
}

const route = useRoute()
const router = useRouter()
const post = ref<BlogPost | null>(null)

onMounted(() => {
  // 模拟 API 调用获取博客文章
  const postId = Number(route.params.id)
  post.value = {
    id: postId,
    title: `未来科技博客 ${postId}`,
    content: `这是未来科技博客 ${postId} 的完整内容。想象一下，在不久的将来，我们可能会生活在一个充满全息投影、量子计算机和人工智能助手的世界。这个世界里，我们可以瞬间传送到地球的任何角落，甚至可以在火星上度假。然而，随着技术的进步，我们也面临着新的挑战和伦理问题。我们如何在这个高度数字化的世界中保持我们的人性？我们如何确保技术造福所有人，而不是加剧不平等？这些都是我们需要思考和解决的重要问题。`
  }
})

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="blog-post-container">
    <Header />
    <div class="content" v-if="post">
      <a-button @click="goBack" class="back-button neon-border">返回主页</a-button>
      <h1 class="glow-text">{{ post.title }}</h1>
      <p class="post-content">{{ post.content }}</p>
    </div>
    <div v-else class="loading">
      <a-spin />
    </div>
  </div>
</template>

<style scoped>
.blog-post-container {
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

h1 {
  margin-bottom: 20px;
}

.post-content {
  line-height: 1.6;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.back-button {
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .content {
    margin-top: 64px;
    padding: 15px;
  }
}
</style>