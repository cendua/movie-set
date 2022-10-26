<template>
  <div class="top-container">
    <span>i am the title</span>
    <div class="button-container">
      <el-input placeholder="pleainput">
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
      <el-icon><User /></el-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.top-container {
  height: 50px;
  background-color: rgb(57, 51, 102);
  display: flex;
  position: relative;
  span {
    position: absolute;
    left: calc(50% - 100px);
  }
  .button-container {
    position: absolute;
    display: flex;
    right: 0px;
  }
}
</style>
