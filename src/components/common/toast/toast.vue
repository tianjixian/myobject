<template>
  <div class="toast" v-show="isshow">{{message}}</div>
</template>

<script>
export default {
    name:"toast",
    data(){
        return {
            message:"",
            isshow:false
        }
    },
    methods:{
        show(content="请设置吐司内容",time=1500){
            this.isshow=true;
            this.message=content;
            setTimeout(()=>{
                this.isshow=false;
                this.message=''
            },time)
        }
    }
}
</script>

<style scoped>
    .toast{position: fixed; top: 50%; left: 50%; z-index: 1000; background: black; opacity: 0.6; color: white; padding: 8px; transform: translate(-50%,-50%);}
</style>