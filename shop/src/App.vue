<template>
  <div class="container">
    <header class="header">
      <router-link to="/main">Main</router-link>
      <router-link @click="routerToSettings">Settings</router-link>
    </header>
    <h1>Project title</h1>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";

// мокаем юзера
const user = {
  isManager: true,
}

const router = useRouter()
const routerToSettings = () => {
  if (user.isManager) {
    router.push({name: 'manager-settings'})
  }else {
    router.push({name: 'settings'})
  }
}
</script>

<style scoped>
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
