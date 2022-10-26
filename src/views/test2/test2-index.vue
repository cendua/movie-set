<template>
  <div>teset2</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMovieDetailStore } from "@/store/movieDetail.store";
export default defineComponent({
  setup() {
    function test() {
      const store = useMovieDetailStore();
      console.log(store.count);
    }
    test();
    return { test };
  },
});
</script>

<style scoped></style>
