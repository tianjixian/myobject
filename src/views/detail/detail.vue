<template>
  <div class="detail">
      <navbar/>
      <div style="margin-top:44px">{{id}}</div> 
  </div>
</template>

<script>
import navbar from '@/views/detail/navbar.vue';
import {detail01} from '@/network/detail.js'

export default {
    name:'detail',
    data(){
        return{
           id:null,
           banner:null,
        }
    },
    components:{
        navbar
    },
    created(){
        // 获取iid
        this.id=this.$route.params.id
        //根据iid请求对应数据
        detail01(this.id).then(res=>{
            console.log(res);
        })

    },
    methods:{
       
    }
   
}
</script>

<style scoped>
.navbarL{display: block; font-size: 28px; color: black; text-align: center;font-weight: 100;}
.navbarC{display: flex;}
.navbarC a{flex: 1; font-size: 16px; color: black;}
.navbarC .navbarCon{color:#ff699c;}
</style>>
