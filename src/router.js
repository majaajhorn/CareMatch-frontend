import { createRouter, createWebHistory } from 'vue-router';
//import App from './App.vue';
import LoginUser from './components/LoginUser.vue'; // Import your new component
import SignupUser from './components/SignupUser.vue'; // Import the SignupUser component

const routes = [
 // { path: '/', component: App }, // Main page
  { 
    path: '/login', 
    name: 'LoginUser',
    component: LoginUser 
  },
  {
    path: '/signup',
    name: 'SignupUser',
    component: SignupUser, // Add the signup route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
