import axios from "axios";

//? 创建axios实例
const instance = axios.create({
  // baseURL: "http://127.0.0.1:3000/",
  timeout: 1000,
});

//?:固定urlget的方法
export function getax(url: string) {
  return instance.get(url);
}
//?固定urlpost的方法
export function postax(url: string, param = {}, config = {}) {
  return instance.post(url, param, config);
}

//?自定义get方法
export function dfGetax(url: string) {
  const instance = axios.create({});
  return instance.get(url);
}
