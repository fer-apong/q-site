import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

// 获取本地JSON数据-GET
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

// 获取远程网站信息API-POST

export function remoteRequest (url, params = {}, config) {
  // 创建实例
  const remoteData = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })

  remoteData.interceptors.request.use(config => {
    console.log(config)
    return config
  }, err => {
    console.log(err)
  })

  remoteData.post(url, params).then((result) => {
    return result.data
  }).catch((err) => {
    console.log(err)
  })

  return remoteData(url, params, config)
}
