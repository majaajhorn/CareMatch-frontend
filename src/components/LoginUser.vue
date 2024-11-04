<template>
  <div class="login-container">
    <!-- Main Content -->
    <div class="main-content">
      <h1>Welcome back</h1>
      <p class="intro-text">
        Log in to your CareMatch account to continue your journey toward finding
        the perfect care opportunities or reliable carers. Your next step toward
        personalized care is just a click away.
      </p>
      <div class="container-wrapper">
        <!-- Jobseeker Container -->
        <div class="container jobseeker">
          <img src="@/assets/jobseeker-icon.png" alt="Jobseeker Icon" />
          <h3>I'm a jobseeker</h3>
          <button class="login-button">Login</button>
        </div>

        <!-- Employer Container -->
        <div class="container employer">
          <img src="@/assets/employer-icon.png" alt="Employer Icon" />
          <h3>I'm an employer</h3>
          <button class="login-button">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensures full-screen layout */
.login-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff; /* White background */
  font-family: 'Roboto', sans-serif; /* Font family */
}

/* Main content styles */
.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center align content */
  padding: 2rem;
  max-width: 800px; /* Make the main content narrower */
  margin: 0 auto; /* Center the content */
}

.intro-text {
  text-align: center;
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
}

.container-wrapper {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 2rem;
}

.container {
  background-color: #d9f9e2; /* Background color */
  padding: 2rem; /* Padding inside the container */
  text-align: center; /* Center text */
  border-radius: 10px; /* Rounded corners */
  width: 30%; /* Adjust the width as needed */
}

/* Button styles */
.login-button {
  background-color: #8c75e6; /* Background color */
  color: white; /* Text color */
  border: none; /* Remove default border */
  padding: 0.5rem 1rem; /* Padding for the button */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  margin-top: 1rem; /* Space above button */
}
</style>

<script>
export default {
  name: 'LoginUser',
};
</script>
