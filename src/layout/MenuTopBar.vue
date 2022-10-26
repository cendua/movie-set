<template>
  <el-menu class="menu-container">
    <el-menu-item
      v-for="item in routeList"
      :key="item.name"
      :index="item.name"
      @click="jump(item.routePath)"
    >
      <template #title>
        <el-icon :size="40"><component :is="item.icon"></component></el-icon>
        <span>{{ item.name }}</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "menuTopBar", //头部菜单栏
  setup() {
    const routeList = [
      {
        name: "在线观看",
        routeName: "One",
        routePath: "one",
        icon: "house",
      },
      {
        name: "资源检索",
        routeName: "Two",
        routePath: "two",
        icon: "search",
      },
      {
        name: "影视信息",
        routeName: "movieInformation",
        routePath: "movie-information",
        icon: "user",
      },
      {
        name: "其他一",
        routeName: "four",
        routePath: "four",
        icon: "present",
      },
      {
        name: "其他二",
        routeName: "Five",
        routePath: "five",
        icon: "operation",
      },
    ];

    //?路由跳转
    const router = useRouter();
    function jump(path: any) {
      console.log("进行跳转");
      router.push(path);
    }

    return { routeList, jump };
  },
});
</script>

<style lang="less" scoped>
.menu-container {
  background-color: rgb(89, 77, 142);
  width: 150px;
  height: 350px;
  padding: 30px 0px 30px 0px;
  margin: 0px 30px 0 30px;
  border: none;
  border-radius: 100px;
  position: relative;
  top: calc(50% - 300px);
  span {
    font-size: 16px;
    color: rgb(224, 224, 224);
  }
}
</style>
