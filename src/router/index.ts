import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import Content from "@/pages/Content.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        transition: "slide-left",
      },
    },
    {
      path: "/content",
      component: Content,
      meta: {
        transition: "slide-left",
      },
      children: [
        {
          path: "",
          redirect: { name: "content-summary" },
        },
        {
          path: "summary",
          name: "content-summary",
          component: () => import("@/pages/Content/ContentSummary.vue"),
          meta: { transition: "slide-left" },
        },
        {
          path: "vocabulary",
          name: "content-vocabulary",
          component: () => import("@/pages/Content/ContentVocabulary.vue"),
          meta: { transition: "slide-left" },
        },
        {
          path: "conversations",
          name: "content-conversations",
          component: () => import("@/pages/Content/ContentConversations.vue"),
          meta: { transition: "slide-left" },
        },
      ],
    },
  ],
});

export default router;
