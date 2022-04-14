import NRequest from "./request";
import { BASE_URL, TIMEOUT } from "./request/config";

console.log(process.env.NODE_ENV);
console.log(BASE_URL);

const nRequest = new NRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    reqInterceptor: (config) => {
      console.log("请求成功的拦截");
      return config;
    },
    reqInterceptorCatch: (err) => {
      console.log("请求失败的拦截");
      return err;
    },
    resInterceptor: (res) => {
      console.log("响应成功的拦截");
      return res;
    },
    resInterceptorCatch: (err) => {
      console.log("响应失败的拦截");
      return err;
    },
  },
});

export default nRequest;
