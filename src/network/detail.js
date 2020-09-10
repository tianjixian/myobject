import {request} from './request.js'

export function detail01(iid){
    return request({
        url:'/detail',
        params:{
            iid:iid
        }
    })
}