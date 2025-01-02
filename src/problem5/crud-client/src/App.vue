<script setup>

</script>

<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="">
        <img src="https://cdn-icons-png.freepik.com/256/17641/17641110.png?semt=ais_hybrid" alt="" width="30"
          height="30" class="d-inline-block align-text-top">
        CRUD 
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</template>
