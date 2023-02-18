import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface WJLRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig | any;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: any) => any;
}
export interface WJLRequestConfig extends AxiosRequestConfig {
  inteceptors?: WJLRequestInterceptors;
}
