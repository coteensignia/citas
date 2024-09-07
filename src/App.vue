<script setup>
import { RouterView,RouterLink } from 'vue-router';
// import AdminCitas from './components/AdminCitas.vue'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
  </nav>
  <!-- AdminCitas -->
  <RouterView/>
</template>

<style scoped></style>
