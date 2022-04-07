import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface nReqInterceptors {
  reqInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  reqInterceptorCatch?: (res: any) => any;
  resInterceptor?: (res: AxiosResponse) => AxiosResponse;
  resInterceptorCatch?: (res: any) => any;
}

export interface nRequestConfig extends AxiosRequestConfig {
  interceptors?: nReqInterceptors;
}
