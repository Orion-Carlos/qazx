import axios from 'axios';
// import { Toast, Notify } from 'vant'
import { Notify } from 'vant';
import { Toast } from 'vant'
import { AxiosResponse, AxiosRequestConfig } from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

const http = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '' : '/api',
});

interface AxiosRequest extends AxiosRequestConfig {
  timestamp: number
}

const loadings: { [index: number]: any } = {}

// request拦截器
http.interceptors.request.use((config: AxiosRequestConfig) => {
  // Do something before request is sent
  (<AxiosRequest>config).timestamp = new Date().getTime()
  if (!loadings[(<AxiosRequest>config).timestamp]) {
    loadings[(<AxiosRequest>config).timestamp] = Toast.loading({
      duration: 0,
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner'
    });
  }
  return config
}, (error: any) => {
  // Do something with request error
  return Promise.reject(error)
})

// respone拦截器
http.interceptors.response.use((response: AxiosResponse<any>) => {
  const timestamp = (<AxiosRequest>response.config).timestamp
  if (loadings[timestamp]) {
    loadings[timestamp].clear()
    delete loadings[timestamp]
  }
  return response
}, error => {
  const timestamp = error.config.timestamp
  if (loadings[timestamp]) {
    loadings[timestamp].clear()
    delete loadings[timestamp]
  }
  if (error.response.status == "401") {
    Notify({ type: 'danger', message: "登录超时，请重新登录" });
  } else if (error.response.status == "403") {
    Notify({ type: 'danger', message: "权限不足，请联系管理员" });
  } else {
    Notify({ type: 'danger', message: error.response.data.message || "处理异常" });
  }
  return Promise.reject(error)
})

// 下载文件
function download(url: string, data: any) {
  let stringData: string
  if (typeof data === 'string') {
    stringData = data
  } else if (typeof data === 'function' || data === undefined || data === null) {
    stringData = ''
  } else {
    stringData = "?" + objectToString(data)
  }
  window.open(window.location.origin + (window.location.pathname == "/" ? "" : window.location.pathname) + url + stringData)
}

// 把对象转换成字符串
function objectToString(data: any, key?: string) {
  let stringData: string = ''
  for (let k in data) {
    let string: string = key ? (isNaN(Number(k)) ? `${key}.${k}` : `${key}[${k}]`) : k
    if (typeof data[k] === 'object') {
      stringData += objectToString(data[k], string)
    } else if (typeof data[k] === 'function' || data[k] === undefined || data[k] === null) {
      continue
    } else {
      stringData += `${string}=${data[k]}&`
    }
  }
  return stringData
}

//上传文件
function upload(url: string, data: any) {
  return new Promise((resolve, reject) => {
    let formData: FormData = new FormData()
    if (data instanceof File) {
      formData.append('file', data)
    } else if (typeof data === 'object') {
      objectToFormData(formData, data)
    }
    http.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(function (res) {
      resolve(res)
    }).catch(function (error) {
      reject(error)
    })
  })

}
// 把对象转换成表单
function objectToFormData(formData: FormData, data: any, key?: string) {
  for (let k in data) {
    let string: string = key ? (isNaN(Number(k)) ? `${key}.${k}` : `${key}[${k}]`) : k
    if (typeof data[k] === 'object') {
      //如果是Date类型，直接放入formData中，不需要遍历
      if (data[k] instanceof Date) {
        formData.append(string, data[k])
      }
      //如果是file类型，直接放入formData中，不需要遍历
      else if (data[k] instanceof File) {
        formData.append(string, data[k])
      } else {
        objectToFormData(formData, data[k], string)
      }
    } else if (typeof data[k] === 'function' || data[k] === undefined || data[k] === null) {
      continue
    } else {
      formData.append(string, data[k])
    }
  }
}
export default {
  post: http.post,
  get: http.get,
  download: download,
  upload: upload
};
