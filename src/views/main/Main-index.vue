<template>
  <div>我是main</div>
  <div class="main-container">
    <span>视频框</span>
    <video ref="player" class="video-js">
      <source />
    </video>
  </div>
  <div>详情框</div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

//?配置viode.js

import videojs from "video.js";
import "video.js/dist/video-js.min.css";
import "@videojs/http-streaming";

export default defineComponent({
  setup() {
    //?vioder配置
    const player = ref(null);
    onMounted(() => {
      console.log("player", player.value);
      const options = {
        controls: true,
        width: "500",
        height: "500",
        // aspectRatio: "4:3",
        // fluid: true,
        sources: [
          {
            src: " http://1252093142.vod2.myqcloud.com/4704461fvodcq1252093142/f865d8a05285890787810776469/playlist.f3.m3u8",
            type: "application/x-mpegURL",
          },
        ],
      };
      videojs(player.value, options, function onPlayerReady() {
        console.log("i am ready");
      });
    });

    return { player };
  },
});
</script>

<style lang="less">
.main-container {
  width: 100%;
}
</style>
