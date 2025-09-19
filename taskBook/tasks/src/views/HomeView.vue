<template>
  <main>
    <h1>Tasks</h1>
    <input type="text" v-model="newTaskText" />
    <button @click="addTask">Add</button>
    <div v-for="(task, index) in tasks" :key="index" class="task-item">
      {{ task.text }}
      <button @click="completeTask(index)">Complete</button>
      <button @click="deleteTask(index)">Delete</button>
      <button @click="editTask(index)">Edit</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/tasks'

// реактивная переменная для привязки к инпуту
const newTaskText = ref('')
// реактивная переменная с типом интерфейса Task
const taskStore = useTasksStore()

const { tasks } = storeToRefs(taskStore)

const addTask = () => {
  // trim - удаляет пробелы в начале и конце строки
  taskStore.add(newTaskText.value)
  // очищаем инпут
  newTaskText.value = ''
}

const editTask = (index: number) => {
  tasks.value[index].text = newTaskText.value
  newTaskText.value = ''
}

const deleteTask = (index: number) => {
  tasks.value.splice(index, 1)
}

const completeTask = (index: number) => {
  tasks.value[index].completed = !tasks.value[index].completed
}
</script>

<style scoped></style>
