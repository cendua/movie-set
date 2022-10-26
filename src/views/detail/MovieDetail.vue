<template>
  <button @click="test">收发测试</button>
  <div class="detail-container">
    <!-- //?相关信息 -->
    <div class="related-info">
      <h4>{{ name }}{{ originName }}</h4>
      <img :src="poster" alt="" />
      <div class="text-info">
        <span>别名：{{ alias }}</span>
        <span>类型：{{ genre }}</span>
        <span>语言：{{ language }}</span>
        <span>{{ description }}</span>
      </div>
    </div>
    <div class="mark-info">
      <span>
        <img src="@/assets/icon/豆瓣.png" alt="" />豆瓣评分{{ doubanRating }}
      </span>
      <span>{{ imdbVotes }}人品评分</span>
      <span>
        <img src="@/assets/icon/IMDb.png" alt="" />
        IMDB评分{{ imdbRating }}
      </span>
      <span>{{ imdbVotes }}人评分</span>
    </div>
  </div>
  <!-- //?视频播放 -->
  <video-player :name="name"></video-player>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useMovieDetailStore } from "@/store/movieDetail.store";
import videoPlayer from "@/components/videoPlayer/VideoPlayer.vue";

export default defineComponent({
  components: { videoPlayer },
  setup() {
    const state = reactive({
      description: "",
      name: "",
      alias: "",
      originName: "",
      doubanRating: "",
      doubanVotes: -1,
      imdbRating: "",
      imdbVotes: -1,
      genre: "",
      poster: "",
      language: "",
      coutry: "",
      shareImage: "",
    });

    //?收发测试
    function test() {}
    test();

    //?从localStorage中初始化数据
    onMounted(() => {
      const store = useMovieDetailStore();
      state.name = store.name;
      state.genre = store.genre;
      state.alias = store.alias;
      state.poster = store.poster;
      state.coutry = store.country;
      state.language = store.language;
      state.imdbVotes = store.imdbVotes;
      state.shareImage = store.shareImage;
      state.imdbRating = store.imdbRating;
      // state.originName = store.originName;
      state.description = store.description;
      state.doubanVotes = store.doubanVotes;
      state.doubanRating = store.doubanRating;
    });

    return { useMovieDetailStore, ...toRefs(state), test };
  },
});
</script>

<style scoped lang="less">
.detail-container {
  background-color: rgba(255, 166, 0, 0.945);
  color: white;
  font-size: 18px;
  font-weight: 2px;
  width: 900px;
  border-radius: 20px;
  margin: 10px;
  display: flex;

  .related-info {
    margin: 20px;
    img {
      float: left;
      width: 200px;
      border-radius: 10px;
    }
    .text-info {
      display: flex;
      flex-direction: column;
      line-height: 200%;
    }
  }
  .mark-info {
    display: flex;
    flex-direction: column;
    border-left: 1px solid white;
    width: 500px;
    span {
      flex: 1;
    }
    img {
      width: 30px;
    }
  }
}
</style>
