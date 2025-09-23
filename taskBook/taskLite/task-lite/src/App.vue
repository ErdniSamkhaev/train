<template>
  <main class="container">
    <h1>Task Lite (Composition API)</h1>

    <section class="add">
      <input
        v-model="newTitle"
        @keyup.enter="addTask"
        placeholder="Новая задача..."
        autofocus
      />
      <button @click="addTask">Добавить</button>
    </section>

    <section class="filters">
      <button :class="{ active: filter === 'all' }" @click="filter = 'all'">
        Все
      </button>
      <button
        :class="{ active: filter === 'active' }"
        @click="filter = 'active'"
      >
        Активные
      </button>
      <button :class="{ active: filter === 'done' }" @click="filter = 'done'">
        Выполненные
      </button>
    </section>

    <section class="stats">
      <span>Всего: {{ total }}</span>
      <span>Осталось: {{ remaining }}</span>
      <button @click="clearCompleted" :disabled="total === remaining">
        Очистить выполненные
      </button>
    </section>

    <ul class="list">
      <li v-for="t in filtered" :key="t.id">
        <label>
          <input type="checkbox" :checked="t.done" @change="toggle(t.id)" />
          <span :class="{ done: t.done }">{{ t.title }}</span>
        </label>
        <button class="remove" @click="removeOne(t.id)">×</button>
      </li>
      <li v-if="filtered.length === 0" class="empty">Нет задач</li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

type Task = {
  id: string;
  title: string;
  done: boolean;
  createdAt: number;
};

const STORAGE_KEY = "tasks_v1";

// Загрузка задач из localStorage
function load(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Task[]) : [];
  } catch {
    return [];
  }
}
function save(list: Task[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

// Хранение задач с типом Task в localStorage
const tasks = ref<Task[]>(load());
// Наблюдение за изменениями задач и сохранение в localStorage
watch(tasks, (v) => save(v), { deep: true });

const newTitle = ref("");
const filter = ref<"all" | "active" | "done">("all");

function addTask() {
  const title = newTitle.value.trim();
  if (!title) return;
  tasks.value.push({
    id: crypto.randomUUID(),
    title,
    done: false,
    createdAt: Date.now(),
  });
  newTitle.value = "";
}

function toggle(id: string) {
  const t = tasks.value.find((t) => t.id === id);
  if (t) t.done = !t.done;
}

function removeOne(id: string) {
  tasks.value = tasks.value.filter((t) => t.id !== id);
}

function clearCompleted() {
  tasks.value = tasks.value.filter((t) => !t.done);
}

const filtered = computed(() => {
  if (filter.value === "active") return tasks.value.filter((t) => !t.done);
  if (filter.value === "done") return tasks.value.filter((t) => t.done);
  return tasks.value;
});

const total = computed(() => tasks.value.length);
const remaining = computed(() => tasks.value.filter((t) => !t.done).length);
</script>

<style scoped>
.container {
  max-width: 720px;
  margin: 40px auto;
  padding: 0 16px;
  font-family: system-ui, sans-serif;
}
h1 {
  margin-bottom: 16px;
}
.add {
  display: flex;
  gap: 8px;
}
.add input {
  flex: 1;
  padding: 8px 10px;
}
.filters,
.stats {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 12px 0;
  flex-wrap: wrap;
}
.filters button.active {
  font-weight: 700;
  text-decoration: underline;
}
.list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}
.list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 6px;
  border-bottom: 1px solid #eee;
}
.list li .done {
  text-decoration: line-through;
  color: #888;
}
.remove {
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #c33;
}
.empty {
  color: #666;
  font-style: italic;
  padding: 8px 0;
}
</style>
