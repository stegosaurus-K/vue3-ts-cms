let BASE_URL = "http://wjl.org/dev";
const TIME_OUT = 1000;
if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://wjl.org/dev";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://wjl.org/prod";
} else {
  BASE_URL = "http://wjl.org/test";
}
export { BASE_URL, TIME_OUT };
