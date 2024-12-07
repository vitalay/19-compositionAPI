import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Reusable from './views/Reusable.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/reusable', component: Reusable },
  ],

  linkActiveClass: "active",
    linkExactActiveClass: "active",

});


export default router;




  
 