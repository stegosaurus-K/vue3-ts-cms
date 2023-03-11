// service统一出口
import WJLRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";

const wjlRequest = new WJLRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {},
});
export default wjlRequest;
