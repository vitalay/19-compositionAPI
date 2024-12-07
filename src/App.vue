<template>


  <header class="navbar">
    <strong>Composition API</strong>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Главная</router-link>
      </li>
      <li>
        <router-link to="/reusable">Переиспользование</router-link>
      </li>
    </ul>
  </header>
  <div class="container wide-nav">
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar strong {
  font-size: 18px;
  font-weight: bold;
}

.navbar-menu {
  list-style-type: none;
  display: flex;
  gap: 10px;
}

.navbar-menu li a {
  text-decoration: none;
  color: #333;
  transition: color 0.15s ease-in-out;
}

.navbar-menu li a.router-link-exact-active {
  color: #007bff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

</style>