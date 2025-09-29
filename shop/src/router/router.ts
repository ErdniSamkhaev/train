import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      name: "main",
      path: "/main",
      component: () => import("@/views/MainView.vue"),
    },
    {
      name: "settings",
      path: "/settings",
      component: () => import("@/views/SettingsView.vue"),
    },
  ],
});

export default router;
