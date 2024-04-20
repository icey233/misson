import { createApp } from "vue";
import router from "./routes/routes";
import "./font.css";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import weather from 'vue3-mini-weather'
import App from "./App.vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(weather)
app.mount("#app");
