import { remoteRequest } from 'boot/axios'

// 定义mainUrl
const mainUrl = '/q-site'

// Get首页数据 封装
export function getHomeData (branchUrl, params = {}) {
  return remoteRequest({
    // url: '/home/multidata',
    url: mainUrl + '/home' + branchUrl,
    method: 'get',
    params
  })
}
