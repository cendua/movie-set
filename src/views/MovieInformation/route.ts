export default {
  path: "/movie-information",
  name: "nameOne",
  component: () => import("@/views/MovieInformation/information-index.vue"),
  meat: {
    title: "我是one",
  },
};
