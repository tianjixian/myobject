import axios from 'axios'


export function request(config,success,failure){
    //创建实例
    const request01 = axios.create({
        baseURL:'http://152.136.185.210:8000/api/z8',
        
    })
    request01(config).then(res=>{
        success(res)
    }).catch(err=>{
        failure(err)
    })
}