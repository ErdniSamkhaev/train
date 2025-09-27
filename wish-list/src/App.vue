<template>
  <div class="container">
    <FormEdit
      :card="cardForEdit"
      @set-card="updateCard"
      @save-card="saveCard"
    />
    <WishList
      v-if="!cardIsLoading"
      :cards="cards"
      @click-by-card="openCardForEdit"
    />
    <img v-else src="/loading.gif" alt="loading" width="400" />
  </div>
</template>

<script setup>
import WishList from "./components/WishList.vue";
import { ref } from "vue";
import FormEdit from "./components/FormEdit.vue";
const cards = ref([]);
const cardIsLoading = ref(false);

const loadCards = () => {
  cardIsLoading.value = true;
  setTimeout(() => {
    cards.value = [
      {
        id: 1,
        title: "Card 1",
        description: "Description 1",
        completed: false,
      },
      {
        id: 2,
        title: "Card 2",
        description: "Description 2",
        completed: true,
      },

      {
        id: 3,
        title: "Card 3",
        description: "Description 3",
        completed: false,
      },
    ];
    cardIsLoading.value = false;
  }, 2000);
};

loadCards();
// Реактивная переменная для хранения карточки для редактирования
const cardForEdit = ref({
  id: 0,
  title: "",
  description: "",
  completed: false,
});
// Функция для сохранения карточки
const saveCard = () => {
  const newCard = Object.assign({}, cardForEdit.value);
  cards.value = cards.value.map((el) => (el.id === newCard.id ? newCard : el));
};
// Функция для обновления карточки для редактирования
const updateCard = (card) => {
  cardForEdit.value = card;
};
// Функция для открытия карточки для редактирования
const openCardForEdit = (card) => {
  // не мутируем карточку для редактирования
  cardForEdit.value = Object.assign({}, card);
};
</script>

<style scoped>
@import "./assets/global.css";
</style>
