<template>
  <main>
    <h1>Tasks</h1>
    <input type="text" v-model="newTaskText" />
    <button @click="addTask">Add</button>
    <div v-for="(task, index) in tasks" :key="index" class="task-item">
      {{ task.text }}
      <button @click="completeTask(index)">Complete</button>
      <button @click="deleteTask(index)">Delete</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Task {
  text: string
  completed: boolean
}
const newTaskText = ref('')
const tasks = ref<Task[]>([])

const addTask = () => {
  if (newTaskText.value.trim()) {
    tasks.value.push({
      text: newTaskText.value,
      completed: false,
    })
    newTaskText.value = ''
  }
}

const deleteTask = (index: number) => {
  tasks.value.splice(index, 1)
}

const completeTask = (index: number) => {
  tasks.value[index].completed = !tasks.value[index].completed
}
</script>
