import axios from "axios";

export function request(config) {
  // 1. 创建axios实例对象
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5000
  });

  // 2. 拦截器
  // 请求拦截
  axios.interceptors.request.use(
    res => {
      // 1. 不符合服务器的信息

      // 2. 需要加载动画

      // 3. 登录携带token
      return res;
    },
    err => {
      console.log(err);
    }
  );

  // 响应拦截

  axios.interceptors.response.use(
    res => {
      return res;
    },
    err => {
      console.log(err);
    }
  );

  // 3. 发送网络请求
  return instance(config);
}
