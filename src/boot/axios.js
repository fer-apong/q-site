import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

// 获取本地JSON数据-GET
export function jsonRequest (config) {
  // 创建实例
  const jsonData = axios.create({
    baseURL: process.env.API,
    // baseURL: '/statics',
    timeout: 5000
  })

  jsonData.interceptors.request.use(config => {
    // console.log(config)
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

// 获取远程网站信息API

export function remoteRequest (config) {
  // 创建实例
  const remoteData = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    baseURL: 'http://127.0.0.1:4523/mock/361712',
    timeout: 5000
    // headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })

  remoteData.interceptors.request.use(config => {
    // console.log(config)
    return config
  }, err => {
    console.log(err)
  })

  remoteData.interceptors.response.use(result => {
    console.log(result.data)
    return result.data
  }, err => {
    console.log(err)
  })

  return remoteData(config)
}
