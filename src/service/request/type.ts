import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface nReqInterceptors {
  reqInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  reqInterceptorCatch?: (err: any) => any;
  resInterceptor?: (res: AxiosResponse) => AxiosResponse;
  resInterceptorCatch?: (err: any) => any;
}

export interface nRequestConfig extends AxiosRequestConfig {
  interceptors?: nReqInterceptors;
}
