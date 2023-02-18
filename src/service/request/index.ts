import axios from "axios";
import type { AxiosInstance } from "axios";
import { WJLRequestInterceptors, WJLRequestConfig } from "./type";

class WJLRequest {
  instance: AxiosInstance;
  interceptors?: WJLRequestInterceptors;
  constructor(config: WJLRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.inteceptors;

    // 从config中取出的拦截器时对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (res) => res,
      (err) => err
    );
    this.instance.interceptors.response.use(
      (config) => config,
      (err) => err
    );
  }
  request(config: WJLRequestConfig): void {
    if (config.inteceptors?.requestInterceptor) {
      config = config.inteceptors.requestInterceptor(config);
    }

    this.instance.request(config).then((res) => {
      if (config.inteceptors?.responseInterceptor) {
        res = config.inteceptors.responseInterceptor(res);
      }
      console.log(res);
    });
  }
}

export default WJLRequest;
