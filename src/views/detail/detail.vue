<template>
  <div class="detail">
      <navbarD></navbarD>
      <scroll class="scrollcon" ref="scroll" :probeType="3" :click="true" :pullUpLoad="true" @showBacktop="showBacktop" @loadmore="loadmore" >
          <mainswiper :images="banner"></mainswiper>
          <div>{{id}}</div>
      </scroll>
  </div>
</template>

<script>
import navbarD from '@/views/detail/navbarD.vue';
import scroll from '@/components/common/scroll.vue'
import mainswiper from '@/views/detail/mainswiper.vue';
import {detail01} from '@/network/detail.js'

export default {
    name:'detail',
    data(){
        return{
           id:null,
           banner:[],
        }
    },
    components:{
        navbarD,
        scroll,
        mainswiper
    },
    created(){
        // 获取iid
        this.id=this.$route.params.id
        //根据iid请求对应数据
        detail01(this.id).then(res=>{
            this.banner=res.data.result.itemInfo.topImages
            
        })

    },
    methods:{
       showBacktop(position){

       },
       loadmore(){

       }
    }
   
}
</script>

<style scoped>
.detail{ position: relative; height: 100vh;}
.navbarL{display: block; font-size: 28px; color: black; text-align: center;font-weight: 100;}
.navbarC{display: flex;}
.navbarC a{flex: 1; font-size: 16px; color: black;}
.navbarC .navbarCon{color:#ff699c;}

.scrollcon{ width: 100%; position: absolute; top: 0px; bottom: 49px;  overflow: hidden; }
</style>>
