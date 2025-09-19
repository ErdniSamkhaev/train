import { defineStore } from 'pinia'

export interface Task {
  text: string
  completed: boolean
}

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as Task[],
  }),
  actions: {
    add(text: string) {
      const t = text.trim()
      if (!t) return
      this.tasks.push({ text: t, completed: false })
    },
  },
  persist: true,
})
