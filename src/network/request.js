import axios from 'axios'

// 终极方案
export function request(config){
    const request01=axios.create({
        baseURL:'http://152.136.185.210:8000/api/w6'
    })
    return request01(config)
}