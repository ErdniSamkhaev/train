<template>
  <h1>Wish List</h1>

  <AppCard
    v-for="(item, index) in cards"
    :key="item.id"
    :card="item"
    :index="index"
    @click="($event) => emit('click-by-card', item)"
  />
</template>

<script setup>
import AppCard from "./AppCard.vue";
const props = defineProps({
  cards: {
    type: Array,
  },
});

const emit = defineEmits(["click-by-card"]);
</script>

<style scoped></style>
