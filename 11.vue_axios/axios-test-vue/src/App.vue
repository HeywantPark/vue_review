<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <router-link to="/">홈페이지</router-link>
    &nbsp;
    <router-link to="/Login">Login</router-link>
    &nbsp;
    <router-link to="/Todo">Todo</router-link>
    &nbsp;
  </nav>
  <router-view />
</template>

<style scoped></style>
