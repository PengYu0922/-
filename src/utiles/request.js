import axios from 'axios'

const httpInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000
})

//请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, error => Promise.reject(error))

//响应拦截器
httpInstance.interceptors.response.use(response => response.data, error => {
  return Promise.reject(error)
})

export default httpInstance