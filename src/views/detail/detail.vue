<template>
  <div class="detail">
      <navbarD></navbarD>
      <scroll class="scrollcon" ref="scroll" :probeType="3" :click="true" :pullUpLoad="true" @showBacktop="showBacktop" @loadmore="loadmore" >
         <mainswiper :images="goodsInfo.topImages"></mainswiper>
          <titleD :goodsInfo02="goodsInfo"></titleD>
          <!-- <imgD :images='img'></imgD> -->
          <parameterD :parameter0="parameter"></parameterD>
          <commentsD></commentsD>
      </scroll>
  </div>
</template>

<script>
import navbarD from '@/views/detail/navbarD.vue';
import scroll from '@/components/common/scroll.vue'
import mainswiper from '@/views/detail/mainswiper.vue';
import titleD from '@/views/detail/titleD.vue';
import imgD from '@/views/detail/imgD.vue';
import parameterD from '@/views/detail/parameterD.vue';
import commentsD from '@/views/detail/commentsD.vue';
import {detail01,goods} from '@/network/detail.js'

export default {
    name:'detail',
    data(){
        return{
           id:null,
           goodsInfo:{},
           img:[],
           parameter:null
        }
    },
    components:{
        navbarD,
        scroll,
        mainswiper,
        titleD,
        imgD,
        parameterD,
        commentsD
    },
    created(){
        // 获取iid
        this.id=this.$route.params.id
        //根据iid请求对应数据
        detail01(this.id).then(res=>{
            // 中转
            const data=res.data.result
            // 获取封装成一个对象goods的数据
            this.goodsInfo=new goods(data.itemInfo,data.columns,data.shopInfo)
            //获取详情图
            this.img=data.detailInfo.detailImage
            this.parameter=data.itemParams
            console.log(data)
        })
       
        

    },
    methods:{
       showBacktop(position){
        //    console.log(position)
       },
       loadmore(){

       }
    }
   
}
</script>

<style scoped>
.detail{ position: relative; height: 100vh; }
.navbarL{display: block; font-size: 28px; color: black; text-align: center;font-weight: 100;}
.navbarC{display: flex;}
.navbarC a{flex: 1; font-size: 16px; color: black;}
.navbarC .navbarCon{color:#ff699c;}

.scrollcon{ position: absolute; width: 100%; top: 44px; bottom: 0;background: white;  overflow: hidden;  z-index: 9; }
</style>>
