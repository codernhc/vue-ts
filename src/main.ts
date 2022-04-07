import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import register from "./global";
import nRequest from "./service/index";

const app = createApp(App);

// register(app);
app.use(router);
app.use(store);

nRequest;

app.mount("#app");
