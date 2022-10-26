import { createPinia } from "pinia";
import piniaPluginPersit from "pinia-plugin-persist";
const store = createPinia();
store.use(piniaPluginPersit);
export default store;
