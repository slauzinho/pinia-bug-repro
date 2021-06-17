import { createRouter, createWebHistory } from 'vue-router';
import HomeVue from './components/Home.vue';
import WarningVue from './components/Warning.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeVue,
    },
    {
      path: '/warning',
      component: WarningVue,
    },
  ],
});

export default router;
