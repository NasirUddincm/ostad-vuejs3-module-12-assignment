import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/products',
      component: () => import('../views/Products.vue')
    },
    
    {
      path: '/product/:id',
      component: () => import('../views/ProductDetails.vue')
    },
    
  ]
})

export default router
