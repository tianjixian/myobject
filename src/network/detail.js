import {request} from './request.js'

export function detail01(iid){
    return request({
        url:'/detail',
        params:{
            iid:iid
        }
    })
}

// 整合请求数据
export class goods{
    constructor(itemInfo,columns,services){
        this.topImages=itemInfo.topImages;
        this.desc=itemInfo.desc;
        this.itemInfo=itemInfo;
        this.columns=columns;
        this.services=services;
    }
}