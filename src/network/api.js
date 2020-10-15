import { remoteRequest } from 'boot/axios'

export function getHomeData (data) {
  return remoteRequest({
    url: '/home/multidata',
    method: 'get',
    data
  })
}
