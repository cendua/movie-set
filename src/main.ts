import { createApp } from "vue";

import App from "./entry/index/App.vue";
import router from "./router";
//?配置elment-plus
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//?配置pinia
import store from "./store/index";
//?配置axios

const app = createApp(App);

//?循环引入icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
//?

app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
