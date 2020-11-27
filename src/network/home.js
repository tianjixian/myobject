import {request} from './request.js'

export function home01(){
    return request ({
        url:'/home/multidata'
    })
}

export function home02(type,page){
    return request ({
        url:'/home/data',
        params:{
            type,
            page,
        }
    })
}

