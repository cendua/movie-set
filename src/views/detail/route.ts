export default {
  path: "/detail",
  name: "MovieDetail",
  qury: { id: Number },
  component: () => import("@/views/detail/MovieDetail.vue"),
};
