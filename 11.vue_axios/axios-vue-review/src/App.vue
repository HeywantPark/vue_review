<script setup></script>

<template>
  <nav>
    <router-link to="/">홈 페이지</router-link>
    &nbsp;
    <router-link to="/login">로그인 페이지</router-link>
    &nbsp;
    <router-link to="/todo">todo 페이지</router-link>
  </nav>
  <router-view />
</template>

<style scoped></style>
