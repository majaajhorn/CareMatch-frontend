<template>
    <div class="login-container">
      <!-- Main Content -->
      <div class="main-content">
        <h1>Login to your Account</h1>
        <p class="intro-text">
          Log in to your CareMatch account to continue your journey toward finding
          the perfect care opportunities or reliable carers.
        </p>
        <div class="form-container">
          <form @submit.prevent="handleLogin">
            <div class="input-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="email" required placeholder="Enter your email" />
            </div>
            
            <div class="input-group">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="password" required placeholder="Enter your password" />
            </div>
  
            <button type="submit" class="login-button">Login</button>
          </form>
  
          <p class="spacing">Don't have an account?</p>
          <router-link to="/signup" class="link-text">Sign up now!</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Same styles as LoginUser.vue, plus form styles */
  .login-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    font-family: 'Roboto', sans-serif;
  }
  
  .main-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .intro-text {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .form-container {
    width: 100%;
    max-width: 400px;
    margin-top: 1rem;
  }
  
  .input-group {
    margin-bottom: 1rem;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  
  .input-group input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .login-button {
    background-color: #8c75e6;
    color: white;
    padding: 1rem;
    width: 100%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .spacing {
    margin-top: 1rem;
    font-size: 0.9rem;
  }
  
  .link-text {
    color: #8c75e6;
    cursor: pointer;
    text-decoration: none;
  }
  </style>
  
  <script>
  import axios from 'axios'; // Axios to handle HTTP requests
  
  export default {
    name: 'LoggingIn',
    data() {
      return {
        email: '',
        password: '',
        userType: this.$route.params.userType, // Extract user type from route params
      };
    },
    methods: {
      async handleLogin() {
        try {
          // Send login request to backend
          const response = await axios.post('http://localhost:5000/login', {
            email: this.email,
            password: this.password,
            userType: this.userType,
          });
  
          if (response.status === 200) {
            // Login successful: Save token and redirect
            localStorage.setItem('authToken', response.data.token);

            console.log("Login successful, token saved:", response.data.token); // Debugging line

            // Redirect user to dashboard or home page
            this.$router.push('/dashboard');
          } else {
            // Handle login failure (optional)
            console.error('Login failed, server responded:', response.data.message); // Added logging
            alert('Login failed! Please check your credentials.');
          }
        } catch (error) {
          console.error('Login error:', error);
          alert('Something went wrong, please try again.');
        }
      },
    },
  };
  </script>
  