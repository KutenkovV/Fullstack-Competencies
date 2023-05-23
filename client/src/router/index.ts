import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/indicator",
      // @ts-ignore
      component: () => import('@/views/IndicatorView.vue'),
      meta: {}
    },
    {
      path: "/education",
      // @ts-ignore
      component: () => import('@/views/EducationView.vue'),
      meta: {}
    },
    {
      path: "/educational-program/:id?",
      // @ts-ignore
      name: "program",
      component: () => import('@/views/EducationProgramView.vue'),
      meta: {}
    },
    {
      path: "/correction",
      // @ts-ignore
      component: () => import('@/views/CorrectionView.vue'),
      meta: {}
    },
  ]
})

export default router
