<template>
  <div class="page">
    <div class="container">
      <header class="header">
        <router-link to="/main">Main</router-link>
      </header>
      <h1>Project title</h1>
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRouter, useRoute } from "vue-router";

// мокаем юзера
const user = {
  isManager: true,
};

const router = useRouter();
const route = useRoute();

console.log(route);
</script>

<style>
.page {
  background-color: #f0f0f0;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.header {
  display: flex;
  gap: 16px;
}

.header a {
  text-decoration: none;
  color: #d12424;
}

container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}
</style>
