import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

// 获取本地JSON数据
export function jsonRequest (config) {
  // 创建实例
  const jsonData = axios.create({
    baseURL: process.env.API,
    timeout: 5000
  })

  jsonData.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  jsonData.interceptors.response.use(result => {
    return result.data
  }, err => {
    console.log(err)
  })

  return jsonData(config)
}
