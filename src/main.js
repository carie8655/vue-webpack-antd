import { createApp } from "vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import "./index.less";

import App from "./App.vue";

createApp(App).use(router).use(store).use(Antd).mount("#app");
