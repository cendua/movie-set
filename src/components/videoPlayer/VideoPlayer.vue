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
      <video controls ref="videoPlayer">
        <source />
      </video>
    </div>
  </div>
  <div>
    <video src=""></video>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs, ref } from "vue";
// import "videojs-contrib-hls";
// import videojs from "videojs";
import * as Api from "@/api";

export default defineComponent({
  props: ["name"],
  setup(props) {
    const state = reactive({
      playList: {},
      qianmentUrl: "",
    });

    onMounted(() => {
      getIqyUrls();
      setTimeout(() => {
        initVideoer();
      }, 10);
    });

    //?收发测试
    async function test2() {}

    //?获取后端iqy链接

    async function getIqyUrls() {
      const tmp = await Api.getIqy(props.name);
      state.playList = tmp.data.data;
      console.log(tmp.data);
    }

    //?点击播放
    async function playVideo(url) {
      // console.log("点击进行播放");
      //?获取url=>解析=>得到m3u8格式=>进行播放
      // console.log(url);
      const res = await Api.urlAnalysis(url);
      state.qianmentUrl = res.data.url;
      console.log(state.qianmentUrl);
    }

    //?配置video
    const videoPlayer = ref();
    function initVideoer() {
      const option = {
        autoplay: false,
        controls: true,
        sources: [
          {
            src: "/apis/attachFiles/admin/2020/6/2016561465586925611.m3u8",
            type: "application/x-mpegURL",
          },
        ],
      };
      videojs(videoPlayer.value, option);
    }

    return { getIqyUrls, ...toRefs(state), playVideo, videoPlayer };
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
