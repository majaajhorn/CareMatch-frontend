<template>
    <div class="navbar">
      <div class="nav-left">
        <router-link to="/" class="logo-link">
          <h2>CareMatch</h2>
        </router-link>
      </div>
      <div class="nav-right">
        <router-link to="/login" class="nav-button">Login</router-link>
        <router-link to="/signup" class="nav-button signup-button">Sign Up</router-link>
      </div>
    </div>
  </template>
  
  <style scoped>
  .nav-right {
    padding-right: 1.8rem;
  }
  
  /* Styles the navigation bar */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #ffffff;
    border-bottom: 2px solid #75E6A4;
  }
  
  /* Styles for buttons */
  .nav-button {
    margin-left: 2rem;
    background: none;
    border: none;
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }
  
  .signup-button {
    background-color: #75E6A4;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    color: #fff;
  }

  .logo-link {
    text-decoration: none; /* Remove underline */
    color: #75E6A4; /* Change color to 75E6A4 */
  }
  </style>
  
