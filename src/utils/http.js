import axios from 'axios';

let rootUrl = 'https://api.juooo.com/';                  // 你的域名

// get post请求封装
export function get(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(rootUrl + url, {params: param}).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        }).catch((error) => {
            reject(error)
        })
    })
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(rootUrl + url, params).then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        }).catch((error) => {
            reject(error)
        })
    })
}