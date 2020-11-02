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
            state.cartlist.push(payload)
            console.log(state.cartlist[0])
        }
    }
})
 
// 3挂载到vue实例上
export default store