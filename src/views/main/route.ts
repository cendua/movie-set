export default {
  path: "/main",
  name: "main",
  component: () => import("@/views/main/Main-index.vue"),
  meta: {
    title: "名字main",
  },
  children: [],
};
