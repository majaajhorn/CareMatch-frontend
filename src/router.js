import { createRouter, createWebHistory } from 'vue-router';
//import App from './App.vue';
import LoginUser from './components/LoginUser.vue'; // Import your new component

const routes = [
 // { path: '/', component: App }, // Main page
  { path: '/login', component: LoginUser }, // Login page
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
