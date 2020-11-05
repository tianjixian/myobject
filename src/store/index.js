import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2创建store对象
const store=new Vuex.Store({
    state:{
        cartlist:[]
    },
    mutations:{
        addcar(state,payload){
            let oldProduct=null;
            for(let item of state.cartlist){
                if(item.id === payload.id){
                    oldProduct=item
                }
            }
            if(oldProduct){
                oldProduct.count += 1
            }else{
                payload.count=1
                state.cartlist.push(payload)
            }
            console.log(state.cartlist[0].count)
        }
    }
})
 
// 3挂载到vue实例上
export default store