import axios from "axios";
import type { AxiosInstance } from "axios";
import type { nRequestConfig, nReqInterceptors } from "./type";

export default class NRequest {
  instance: AxiosInstance;
  interceptors?: nReqInterceptors;

  constructor(config: nRequestConfig) {
    this.instance = axios.create(config);
    this.instance.interceptors.request.use(
      this.interceptors?.reqInterceptor,
      this.interceptors?.reqInterceptorCatch
    );

    this.instance.interceptors.response.use(
      this.interceptors?.resInterceptor,
      this.interceptors?.resInterceptorCatch
    );
  }
}
