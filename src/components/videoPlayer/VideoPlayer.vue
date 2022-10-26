<template>
  <button @click="getIqyUrls">videoer收发测试</button>
  <div class="video-player">
    <h1>video Player</h1>
    <!-- //?爱奇艺 -->
    <div class="iqy">
      <h2>爱奇艺</h2>
      <!-- 播放源头 -->
      <div class="button-list">
        <span
          v-for="item in playList"
          :key="item.id"
          @click="playVideo(item.url)"
        >
          {{ item.id + 1 }}
        </span>
      </div>
      <!-- 播放区域 -->
      <video ref="video" class="video-js">
        <source />
      </video>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref } from "vue";

import videojs from "video.js";
import "video.js/dist/video-js.css";

import * as Api from "@/api";

export default defineComponent({
  props: ["name"],
  setup(props) {
    const state = reactive({
      playList: {},
      qianmentUrl: "",
      playerOptions: {},
      name: props.name,
    });

    console.log("nnnnnn", props.name);

    onMounted(() => {
      getIqyUrls();
    });

    //?收发测试
    async function test2() {}

    //?获取后端iqy链接
    async function getIqyUrls() {
      console.log("props名字", state.name);
      const tmp = await Api.getIqy(props.name);
      state.playList = tmp.data.data;
      console.log(tmp.data);
    }

    //?点击获取m3u8   //?点击播放？？
    async function playVideo(url: String) {
      // console.log("对应", url);
      //?获取url=>解析=>得到m3u8格式=>进行播放
      const res = await Api.urlAnalysis(url);
      state.qianmentUrl = res.data.url;
      console.log("千梦", state.qianmentUrl);

      videoInit(res.data.url);
    }

    // src: "//vjs.zencdn.net/v/oceans.mp4",
    // type: "video/mp4",
    // //?配置video
    const video = ref();
    function videoInit(url: any) {
      videojs(
        video.value,
        {
          width: 960,
          height: 400,
          controls: true,
          sources: [
            {
              src: url,
              type: "application/x-mpegURL",
            },
          ],
        },
        function () {
          videojs.log("播放器已准备好了");
        }
      );
    }

    return { getIqyUrls, ...toRefs(state), playVideo, video };
  },
});
</script>

<style lang="less">
.video-player {
  // background-color: red;
  .iqy {
    // background-color: blue;

    .button-list {
      display: flex;
      flex-wrap: wrap;
      // background-color: yellow;
      span {
        text-align: center;
        border-radius: 10px;
        background-color: rgba(255, 166, 0, 0.945);
        width: 100px;
        margin: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
