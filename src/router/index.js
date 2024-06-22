//creatRouter: 创建路由实例对象
//createWebHistory: 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path和component的映射关系
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: 'music/category/:id',
          component: () => import('@/views/Category/index.vue')
        },
        {
          path: 'music/searchResults/',
          component: () => import('@/views/Category/results.vue')
        },
      ]
    }
  ]
})

export default router
