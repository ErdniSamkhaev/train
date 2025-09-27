<template>
  <h2>Форма создания</h2>
  <form @submit.prevent="addCard" class="form">
    <label>
      <span>Название:</span>
      <input type="text" v-model="newCard.title" />
    </label>
    <label>
      <span>Описание:</span>
      <input type="text" v-model="newCard.description" />
      <button type="submit">Добавить</button>
    </label>
  </form>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["set-card"])
const newCard = ref({
  id: 0,
  title: "",
  description: "",
  completed: false,
});
// Функция для добавления карточки
const addCard = () => {
  console.log(newCard.value);
  emit("set-card", newCard.value);
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form label {
  display: flex;
  flex-direction: column;
}
.form input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin: 0 0 10px 0;
}
.form button {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100px;
  margin: 0 0 10px 0;
}
</style>
