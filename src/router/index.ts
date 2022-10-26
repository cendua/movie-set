import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

//? 自动导入
function loadRoutes() {
  const mods = import.meta.globEager("../views/*/route.ts");
  const list = Object.values(mods).map((item: any) => item.default);
  return list;
}

//? 路由信息
const routes: RouteRecordRaw[] = [
  { path: "/", component: () => import("@/views/One/One-Index.vue") },
  ...loadRoutes(),
];

//? 挂载路由信息
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
