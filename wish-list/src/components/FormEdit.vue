<template>
  <h2>Форма редактирования</h2>
  <form @submit.prevent="saveCard" class="form">
    <label>
      <span>Название:</span>
      <input type="text" :value="card.title" @input="setTitle" />
    </label>
    <label>
      <span>Описание:</span>
      <input type="text" :value="card.description" @input="setDescription" />
      <button type="submit">Сохранить</button>
    </label>
  </form>
</template>

<script setup>
// Передаем эмит из дочернего компонента в родительский
const emit = defineEmits(["set-card", "save-card"]);
// Передаем пропсы из родительского компонента в дочерний
const props = defineProps({
  card: {
    type: Object,
  },
});
// Функция для установки названия карточки
const setTitle = (event) => {
  // не меняем пропс напрямую, а меняем склонированный объект
  const data = Object.assign({}, props.card);
  data.title = event.target.value;
  emit("set-card", data);
};
// Функция для установки описания карточки
const setDescription = (event) => {
  const data = Object.assign({}, props.card);
  data.description = event.target.value;
  emit("set-card", data);
};
// Функция для сохранения карточки
const saveCard = () => {
  emit("save-card");
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
