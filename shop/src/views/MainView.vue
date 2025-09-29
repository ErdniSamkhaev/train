<template>
  <div class="page">
    <div class="container">
      <h3>Main page</h3>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}
</style>
