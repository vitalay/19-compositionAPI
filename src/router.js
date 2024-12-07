import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Reusable from './views/Reusable.vue';
import VuexPage from './views/VuexPage.vue'; // Добавляем импорт VuexPage

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/reusable', component: Reusable },
    { path: '/vuex', component: VuexPage }, // Используем импортированный компонент
  ],

  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;





  
 