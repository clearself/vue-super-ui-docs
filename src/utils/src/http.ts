import axios from "axios"

export const orginHost = import.meta.env.DEV
  ? `http://${location.hostname}:3000`
  : "https://api.kuangyx.cn"
  export const orginHost1 = import.meta.env.DEV
  ? `http://${location.hostname}:8080`
  : "https://www.flypa.cn/api"
export const baseUrl = orginHost + "/api"
export const baseUrl1 = orginHost1
export const http = axios.create({
  baseURL:baseUrl
})

export const request  = axios.create({
  baseURL:baseUrl1,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
})
