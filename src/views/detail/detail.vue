<template>
  <div class="detail">
      <navbarD @navClick="navClick"></navbarD>
      <scroll class="scrollcon" ref="scroll" :probeType="3" :click="true" :pullUpLoad="true" @showBacktop="showBacktop" @loadmore="loadmore" >
         <mainswiper :images="goodsInfo.topImages"></mainswiper>
          <titleD :goodsInfo02="goodsInfo"></titleD>
          <imgD :images='img' @imageload="imageload"></imgD>
          <parameterD ref="parameterD" :parameter0="parameter"></parameterD>
          <commentsD ref="commentsD" :commentsD='comments'></commentsD>
          <goodlist ref="goodlist" :goodslist='recomments'></goodlist>
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
import goodlist from '@/components/content/goodlist.vue';
import {detail01,goods,recommend00} from '@/network/detail.js';
import {mixin} from '@/common/mixin.js'

export default {
    name:'detail',
    mixins: [mixin],
    components:{
        navbarD,
        scroll,
        mainswiper,
        titleD,
        imgD,
        parameterD,
        commentsD,
        goodlist
    },
    data(){
        return{
           id:null,
           goodsInfo:{},
           img:[],
           parameter:null,
           comments:{},
           recomments:[],
           navscroll:[]
        }
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
            // 获取参数信息
            this.parameter=data.itemParams
            // 获取评论信息
            if(data.rate.cRate!==0){
                this.comments=data.rate.list[0]
            }
            
           
        })
        recommend00().then(res=>{
            this.recomments=res.data.data.list
            console.log(this.recomments)
        })
    },
    updated(){},
    methods:{
       showBacktop(position){
           if(position==this.navscroll[1]){
               
           }
       },
       loadmore(){

       },
    //    监听详情页大图加载完成之后重新获取better-scroll的高度，解决下滑不全bug
       imageload(){
         this.$refs.scroll.scroll.refresh()
         //navscroll的offsettop获取
        this.navscroll=[]
        this.navscroll.push(0)
        this.navscroll.push(this.$refs.parameterD.$el.offsetTop)
        this.navscroll.push(this.$refs.commentsD.$el.offsetTop)
        this.navscroll.push(this.$refs.goodlist.$el.offsetTop)
       },
    //    导航接收子组件的点击
       navClick(index){
           this.$refs.scroll.scroll.scrollTo(0,-this.navscroll[index],100)

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
