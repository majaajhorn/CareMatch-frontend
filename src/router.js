import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue'; // Import HomePage.vue
import LoginUser from '@/components/LoginUser.vue';
import LoggingIn from '@/components/LoggingIn.vue';
import SignupUser from '@/components/SignupUser.vue';
import Dashboard from '@/components/Dashboard.vue'; // Example

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // Use the new HomePage component
  },
  { 
    path: '/login', 
    name: 'LoginUser',
    component: LoginUser 
  },
  {
    path: '/logging-in/:userType', // Dynamic route for logging in
    name: 'LoggingIn',
    component: LoggingIn,
  },
  {
    path: '/signup',
    name: 'SignupUser',
    component: SignupUser, // Add the signup route
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard, // Redirect to dashboard after successful login
  },
];

const router = createRouter({
  // Change this line
  history: createWebHistory('/'), // <-- Changed to simple '/' base URL
  routes,
});

export default router;
