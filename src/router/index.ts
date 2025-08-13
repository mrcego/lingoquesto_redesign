import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/pages/Dashboard.vue'
import Content from '@/pages/Content.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        transition: 'slide-left'
      }
    },
    {
      path: '/content',
      name: 'content',
      component: Content,
      meta: {
        transition: 'slide-right'
      }
    }
  ]
})

export default router