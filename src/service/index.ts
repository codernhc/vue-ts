import NRequest from "./request";
import { BASE_URL, TIMEOUT } from "./request/config";

const nRequest = new NRequest({
  url: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    reqInterceptor: (config) => {
      console.log(config);
      return config;
    },
    reqInterceptorCatch: (res) => {
      console.log(res);
      return res;
    },
    resInterceptor: (res) => {
      console.log(res);
      return res;
    },
    resInterceptorCatch: (res) => {
      console.log(res);
      return res;
    },
  },
});

export default nRequest;
