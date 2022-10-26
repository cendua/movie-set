<template>
  <button @click="test">收发测试</button>
  <button @click="test2">count++</button>

  <div class="item-container">
    <!-- //?卡片列表 -->
    <div
      v-for="item in list"
      :key="item.id"
      class="card"
      @click="jumpDetail(item)"
    >
      <span> {{ item.name }}</span>
      <img :src="item.poster" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useMovieDetailStore } from "@/store/movieDetail.store";

export default defineComponent({
  props: ["list"],
  setup() {
    //?收发测试
    function test() {}

    //?获取信息+跳转
    const router = useRouter();
    function jumpDetail(item: any) {
      //初始化信息
      const store = useMovieDetailStore();
      store.initMovieDetail(item);
      //路由跳转
      const to = router.resolve({
        path: "/detail",
      });
      window.open(to.href, "_blank");
    }

    return { test, jumpDetail, useMovieDetailStore };
  },
});
</script>

<style scoped lang="less">
.item-container {
  display: flex;
  width: 100%;
  flex-flow: wrap;
  height: 500px;
  overflow: auto;
  // overflow-y: auto;
  // overflow: hidden;

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 10px;
    cursor: pointer;

    span {
      width: 150px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    img {
      height: 200px;
      width: 150px;
    }
  }
}
</style>
