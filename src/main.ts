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

// nRequest.get("/get");
// console.log(nRequest);

// nRequest.instance.get("/get").then((res) => {
//   console.log(res);
// });

nRequest.request({
  url: "/get",
  method: "GET",
  interceptors: {
    reqInterceptor: (config) => {
      console.log("单独请求的config", config);
      return config;
    },
    resInterceptor: (res) => {
      console.log("单独请求的res", res);
      return res;
    },
  },
});

app.mount("#app");
