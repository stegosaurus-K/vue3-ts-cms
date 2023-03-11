import axios from "axios";
import type { AxiosInstance } from "axios";
import { WJLRequestInterceptors, WJLRequestConfig } from "./type";

class WJLRequest {
  instance: AxiosInstance;
  interceptors?: WJLRequestInterceptors;

  constructor(config: WJLRequestConfig) {
    this.instance = axios.create(config);

    // 保存基本信息
    this.interceptors = config.interceptors;

    // 从config中取出的拦截器是对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 添加所有实例都有的拦截器   比如loading
    this.instance.interceptors.request.use(
      (res) => {
        // 返回成功的数据处理
        const data = res.data;
        return data;
      },
      (err) => err
    );
    this.instance.interceptors.response.use(
      (config) => config,
      (err) => err
    );
  }

  request<T>(config: WJLRequestConfig<T>): Promise<T> {
    return new Promise((reslove, reject) => {
      // 单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          reslove(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get<T>(config: WJLRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T>(config: WJLRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
  delete<T>(config: WJLRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }
  patch<T>(config: WJLRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH " });
  }
}

export default WJLRequest;
