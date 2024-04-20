import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";
import Home from "../components/home.vue";
const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
