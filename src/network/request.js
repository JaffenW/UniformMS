import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    // baseURL: 'http://wanxiang.test.utools.club',
    // baseURL: 'http://jaffen.test.utools.club',
    // baseURL: 'http://wjfeng.test.utools.club',
    // baseURL:'http://wjinfeng.cn.utools.club',
    baseURL: 'http://jaffen.cn.utools.club',
    // baseURL: 'http://jaffen.hk.utools.club',
    // baseURL:'http://localhost:8181',
    timeout: 10000
  })
  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
