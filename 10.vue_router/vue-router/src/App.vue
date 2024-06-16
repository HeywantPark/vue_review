<script setup></script>

<template>
  <div>
    <nav>
      <router-link to="/">홈페이지</router-link>
      &nbsp;
      <router-link to="/about">어바웃 페이지</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped></style>
