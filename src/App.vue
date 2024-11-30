<template>
  <div class="app-container">
    <!-- Navbar is here, this is the global navbar -->
    <Navbar />
    
    <!-- Render the route-specific content -->
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'; // Import Navbar component

export default {
  components: {
    Navbar
  }
};
</script>

<style scoped>
/* Global styles */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  font-family: 'Roboto', sans-serif;
}
</style>
