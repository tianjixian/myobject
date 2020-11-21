import toast from './toast.vue'

const obj={};

obj.install=function(Vue){
    // 1.创建组件构造器
    const toastContrustor=Vue.extend(toast)
    // 2.new的方式，根据组件构造器，可以创建一个组件对象
    const toast02=new toastContrustor()
    // 3.将组件对象手动挂载到某一元素上
    toast02.$mount(document.createElement('div'))
    // 4.toast02.$el对应的就是div
    document.body.appendChild(toast02.$el)
    // 5.在vue实例上创建公共的原型$toast
    Vue.prototype.$toast=toast02
}

export default obj