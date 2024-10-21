import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/', 
    component: () => import('../views/Home.vue')
  },
  { 
    path: '/post/:id', 
    component: () => import('../views/BlogPost.vue')
  },
  { 
    path: '/auth', 
    component: () => import('../views/Auth.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router