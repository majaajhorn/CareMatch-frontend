<template>
  <div class="app-container">
    
    <!-- Conditionally render main content or route-specific content -->
    <div v-if="$route.path === '/'" class="main-content">
      <div class="text-section">
        <h1>CareMatch</h1>
        <h2>Your Trusted Care Connection</h2>
        <p>
          Our platform is designed to connect dedicated carers with families and
          individuals looking for compassionate and skilled care. Whether you're a
          carer seeking meaningful work or someone in need of trustworthy in-home
          support, you've come to the right place.
        </p>
      </div>
      <div class="image-section">
        <img src="@/assets/nurse-helping-patient-concept-illustration_114360-15674.jpg" alt="CareMatch illustration" />
      </div>
    </div>

    <!-- Render route-specific content -->
    <router-view v-else></router-view>
  </div>
</template>

<script>

</script>

<style scoped>
/* Add your existing styles here without any changes */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  font-family: 'Roboto', sans-serif;
}

/* Centers and aligns the main content */
.main-content {
  flex-grow: 1;
  display: flex;
  justify-content: space-between; /* Aligns items side by side */
  align-items: center; /* Vertically center the content */
  padding: 2rem;
}

/* Add any additional styles you need */
.text-section {
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 2rem;
}

.image-section {
  max-width: 40%;
}
.image-section img {
  width: 100%;
  height: auto;
}

/* Style the h1 and h2 if needed */
h1 {
  font-size: 73px;
  color: #75E6A4;
}

h2 {
  font-size: 32px;
}

p {
  line-height: 1.5rem;
}
</style>