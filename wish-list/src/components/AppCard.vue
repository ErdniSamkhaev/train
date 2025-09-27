<template>
  <div class="card-container">
    <div class="card">
      <div class="card-title">{{ card.title }}</div>
      <div class="card-description">{{ card.description }}</div>
      <div class="card-completed">
        <div
          :class="{
            'card-is-completed': card.completed,
            'card-is-not-completed': !card.completed,
          }"
        >
          {{ card.completed ? "Исполнено" : "Не исполнено" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Передаем пропсы из родительского компонента в дочерний
const props = defineProps({
  index: {
    type: Number,
  },
  card: {
    type: Object,
  },
});
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 10px;
}
.card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #a296ee;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    background-color: #e0e0e0;
  }
}
.card-title {
  font-size: 20px;
  font-weight: bold;
}
.card-description {
  font-size: 16px;
  color: #666;
}
.card-completed {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-is-completed {
  background-color: #dbd9e3;
}
.card-is-not-completed {
  background-color: #f0f0f0;
}
</style>
