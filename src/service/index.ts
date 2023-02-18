// service统一出口
import WJLRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";

const wjlRequestuest = new WJLRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});
export default wjlRequestuest;
