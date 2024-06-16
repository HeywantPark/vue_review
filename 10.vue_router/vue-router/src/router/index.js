import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // 라우트 수준 코드 분할
      // 이 코드는 이 라우트를 위한 별도의 청크(About.[hash].js)를 생성합니다.
      // 이 청크는 라우트가 방문될 때 지연 로드됩니다.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
