<template>
  <div class="app-router-container"><router-view> </router-view></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.app-router-container {
  width: 100%;
  overflow-y: scroll;
  border-radius: 50px;
  margin-top: 70px;
  background-color: blueviolet;
}
</style>
