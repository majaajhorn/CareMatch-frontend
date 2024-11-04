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
          <p class="spacing">Don't have an account?</p>
          <router-link to="/signup" class="link-text">Join free today!</router-link>
        </div>

        <!-- Employer Container -->
        <div class="container employer">
          <img src="@/assets/employer-icon.png" alt="Employer Icon" />
          <h3>I'm an employer</h3>
          <button class="login-button">Login</button>
          <p class="spacing">Need an account?</p>
          <router-link to="/signup" class="link-text">Sign up now!</router-link>
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
  padding: 0.75rem 1.5rem; /* Increase padding for a larger button */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  margin-top: 2rem; /* Increase space above button */
  font-size: 1rem; /* Button font size */
}

/* Additional spacing for paragraphs */
.spacing {
  margin-top: 1rem; /* Add margin for spacing below the button */
  font-size: 0.9rem; /* Reduce font size */
}

/* Link styles */
.link-text {
  color: #8c75e6; /* Purple color */
  cursor: pointer; /* Pointer cursor on hover */
  text-decoration: none; /* No underline */
  font-size: 0.9rem; /* Reduce font size */
}

.link-text:hover {
  text-decoration: underline; /* Underline on hover for better UX */
}
</style>

<script>
export default {
  name: 'LoginUser',
};
</script>
