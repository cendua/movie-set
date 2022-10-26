<template>
  <div class="app-container">
    <top-bar></top-bar>
    <main>
      <menu-top-bar></menu-top-bar>
      <app-router></app-router>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuTopBar from "@/layout/MenuTopBar.vue";
import AppRouter from "@/layout/AppRouter.vue";
import TopBar from "@/layout/TopBar.vue";

export default defineComponent({
  components: { MenuTopBar, AppRouter, TopBar },
  setup() {
    return {};
  },
});
</script>

<style lang="less">
@import "~styles/common";
</style>

<style lang="less">
.app-container {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  main {
    display: flex;
    height: 100%;
    width: 100%;
  }
}
</style>
