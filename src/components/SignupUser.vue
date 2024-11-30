<template>
  <div class="signup-container">
    <!-- Main Content -->
    <div class="main-content">
      <h1>Sign Up</h1>
      <p class="intro-text">
        Join CareMatch to connect with dedicated carers or find meaningful job opportunities.
      </p>
      <form @submit.prevent="handleSignup" class="signup-form">
        <div class="form-group">
          <label for="name">Full Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="userType">I am signing up as:</label>
          <select id="userType" v-model="userType" required>
            <option disabled value="">Select user type</option>
            <option value="business">Business or Organization</option>
            <option value="individual">Private Family or Individual</option>
            <option value="jobseeker">Jobseeker</option>
          </select>
        </div>
        <button type="submit" class="signup-button">Create Account</button>
      </form>
      <div class="account-info">
        <p>Already have an account?</p>
        <router-link to="/login" class="link-text">Log in now!</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensures full-screen layout */
.signup-container {
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
  max-width: 400px; /* Make the main content narrower */
  margin: 0 auto; /* Center the content */
}

.intro-text {
  text-align: center;
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
}

.signup-form {
  width: 100%; /* Full width for the form */
}

.form-group {
  margin-bottom: 1rem; /* Space between form groups */
}

label {
  display: block; /* Block display for labels */
  margin-bottom: 0.5rem; /* Space below label */
}

input,
select { /* Add select styles */
  width: 100%; /* Full width for input fields */
  padding: 0.5rem; /* Padding inside input */
  border: 1px solid #ccc; /* Border color */
  border-radius: 5px; /* Rounded corners */
}

.signup-button {
  background-color: #8c75e6; /* Background color */
  color: white; /* Text color */
  border: none; /* Remove default border */
  padding: 0.5rem 1rem; /* Padding for the button */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  width: 100%; /* Full width */
}

.account-info {
  margin-top: 1.5rem; /* Space above the account info */
  text-align: center; /* Center the account info text */
}

.link-text {
  color: #8c75e6; /* Purple color for the link */
  text-decoration: none; /* Remove underline */
  cursor: pointer; /* Pointer cursor on hover */
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'SignupUser',
  data() {
    return {
      selectedUserType: '',
      name: '',
      email: '',
      password: '',
      employerType: ''
    };
  },
  methods: {
    selectUserType(type) {
      this.selectedUserType = type;
    },
    async handleSignup() {
      try {
        // Determine the user type to send to the backend
        const userType =
          this.selectedUserType === 'employer'
            ? this.employerType
            : 'jobseeker';
        
        if (!userType) {
          alert('Please select a user type.');
          return;
        }

        // Make an async POST request
        const response = await axios.post('http://localhost:5000/signup', {
          name: this.name,
          email: this.email,
          password: this.password,
          userType
        });

        // Show a success message
        alert(response.data.message);

        // Clear form fields after successful signup
        this.name = '';
        this.email = '';
        this.password = '';
        this.employerType = '';
        this.selectedUserType = '';
      } catch (error) {
        // Handle error response
        if (error.response && error.response.data.message) {
          alert(error.response.data.message); // Backend-provided error message
        } else {
          alert('Something went wrong. Please try again.'); // Generic error message
        }
      }
    }
  }
};
</script>
