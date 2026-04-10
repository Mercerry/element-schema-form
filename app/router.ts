import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/test-common'
    },
    {
      path: '/test-common',
      component: () => import('@/views/test-common/index.vue')
    },
    {
      path: '/test-extend',
      component: () => import('@/views/test-extend/index.vue')
    }
  ]
})
