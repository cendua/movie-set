import { defineStore } from "pinia";

//? 电影详情页信息store
const useMovieDetailStore = defineStore("movieDetail", {
  state: () => {
    return {
      alias: "",
      originalName: "",
      imdbVotes: -1,
      imdbRating: "",
      doubanRating: "",
      doubanVotes: -1,
      id: "",
      poster: "",
      name: "",
      genre: "",
      description: "",
      language: "",
      country: "",
      lang: "",
      shareImage: "",
      movie: "",
    };
  },
  getters: {},
  actions: {
    initMovieDetail(item: any) {
      this.alias = item.alias;
      this.doubanRating = item.doubanRating;
      this.doubanVotes = item.doubanVotes;
      this.imdbRating = item.imdbRating;
      this.imdbVotes = item.imdbVotes;
      this.name = item.name;
      this.genre = item.genre;
      this.poster = item.poster;
      this.language = item.language;
      this.country = item.country;
      this.description = item.description;
    },
  },

  //?开启本地缓存模式，用于不同组件之间的读写
  persist: {
    enabled: true,
    strategies: [
      {
        key: "movieDetail",
        storage: localStorage,
      },
    ],
  },
});

export { useMovieDetailStore };
