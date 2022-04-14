import axios from "axios";
import type { AxiosInstance } from "axios";
import { ElLoading } from "element-plus/es";
import "element-plus/theme-chalk/index.css";
import type { nRequestConfig, nReqInterceptors } from "./type";

class NRequest {
  instance: AxiosInstance;
  interceptors?: nReqInterceptors;

  loading?: any;

  constructor(config: nRequestConfig) {
    this.instance = axios.create(config);
    // 赋值
    this.interceptors = config.interceptors;

    this.instance.interceptors.request.use(
      this.interceptors?.reqInterceptor,
      this.interceptors?.reqInterceptorCatch
    );

    this.instance.interceptors.response.use(
      this.interceptors?.resInterceptor,
      this.interceptors?.resInterceptorCatch
    );

    this.instance.interceptors.request.use(
      (config) => {
        // console.log("all req", config);
        // loading
        this.loading = ElLoading.service({
          fullscreen: true,
          text: "加载数据中...",
          background: "rgba(0, 0, 0, 0.7)",
        });
        return config;
      },
      (err) => {
        // console.log("all req err", err);
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (config) => {
        setTimeout(() => {
          // Loading should be closed asynchronously
          this.loading?.close();
        }, 4000);
        // console.log("all res", config);
        return config;
      },
      (err) => {
        // console.log("all err res", err);
        return err;
      }
    );
  }

  request(config: nRequestConfig): void {
    if (config.interceptors?.reqInterceptor) {
      this.interceptors = config.interceptors;
    }

    this.instance.request(config).then((res) => {
      // console.log(res);
      return res;
    });
  }
}

export default NRequest;
