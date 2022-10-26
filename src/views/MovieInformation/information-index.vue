<template>
  <div class="home">
    <!-- //?轮播图 -->
    <el-carousel height="150px" class="rotater">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <!-- //?主体部分 -->
    <div class="home-main">
      <h1>豆瓣top250</h1>
      <!-- <douban :list="doubanList"></douban> -->
      <movie-items :list="doubanList"></movie-items>
      <h1>IMDB</h1>
      <!-- <imdb :list="imdbList"></imdb> -->
      <movie-items :list="imdbList"></movie-items>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import * as Api from "@/api/index";
import MovieItems from "./component/MovieItems.vue";

export default defineComponent({
  components: { MovieItems },
  setup() {
    const state = reactive({
      doubanList: {},
      imdbList: {},
    });

    //?获取豆瓣top250
    Api.getDoubanItems().then((dt) => {
      state.doubanList = dt;
    });
    //?获取IMDB信息
    Api.getImdbItems().then((dt) => {
      state.imdbList = dt;
    });

    return { ...toRefs(state) };
  },
});
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: rgb(22, 75, 65);

  .rotater {
    height: 200px;
    background-color: yellow;
  }

  .home-main {
    width: 100%;
    height: 100%;
  }
}
</style>
