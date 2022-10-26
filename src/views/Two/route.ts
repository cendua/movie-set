export default {
  path: "/two",
  name: "nameTwo",
  component: () => import("@/views/Two/Two-index.vue"),
  meat: {
    title: "我是two",
  },
};
