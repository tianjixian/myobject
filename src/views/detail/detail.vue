<template>
  <div class="detail">
      <navbarD ref="navbarD" @navClick="navClick"></navbarD>
      <scroll class="scrollcon" ref="scroll" :probeType="3" :click="true" :pullUpLoad="true" @showBacktop="showBacktop" @loadmore="loadmore" >
         <mainswiper :images="goodsInfo.topImages"></mainswiper>
          <titleD :goodsInfo02="goodsInfo"></titleD>
          <imgD :images='img' @imageload="imageload"></imgD>
          <parameterD ref="parameterD" :parameter0="parameter"></parameterD>
          <commentsD ref="commentsD" :commentsD='comments'></commentsD>
          <goodlist ref="goodlist" :goodslist='recomments'></goodlist>
      </scroll>
      <backtop  @click.native="backtop" v-if="isShowBacktop"></backtop>
      <buttonD @addgoods="addgoods"/>
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
import backtop from '@/components/common/backtop.vue';
import buttonD from '@/views/detail/buttonD.vue';
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
        goodlist,
        backtop,
        buttonD
    },
    data(){
        return{
           id:null,
           goodsInfo:{},
           img:[],
           parameter:null,
           comments:{},
           recomments:[],
           navscroll:[],
           positionindex:0,
           isShowBacktop:false
           
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
        })
    },
    updated(){},
    methods:{
        // 回到顶部
       showBacktop(position){
           for(let i=0;i<this.navscroll.length-1;i++){
               if((this.positionindex!==i)&&(-position.y>=this.navscroll[i]&&-position.y<this.navscroll[i+1])){
                   this.positionindex=i
                    this.$refs.navbarD.navbarCon=i
               }
           }
        //    回到顶部效果
           this.isShowBacktop=-position.y>1000
       },
    //    下拉加载更多
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
        this.navscroll.push(Number.MAX_VALUE)
       },
    //    导航接收子组件的点击
       navClick(index){
           this.$refs.scroll.scroll.scrollTo(0,-this.navscroll[index],100)
           
       },
    //    回到顶部
        backtop(){
            this.$refs.scroll.scroll.scrollTo(0,0,500)
        },
        addgoods(){
            const product={};
            product.id=this.id;
            product.title=this.goodsInfo.title;
            product.desc=this.goodsInfo.desc;
            product.img=this.goodsInfo.topImages[0];
            product.price=this.goodsInfo.highNowPrice;
            // 添加商品到购物车
            // this.$store.commit("addcar",product)
            this.$store.dispatch('addcar',product)
        }
       
    }
   
}
</script>

<style scoped>
.detail{ position: relative; height: calc(100vh - 49px); }
.navbarL{display: block; font-size: 28px; color: black; text-align: center;font-weight: 100;}
.navbarC{display: flex;}
.navbarC a{flex: 1; font-size: 16px; color: black;}
.navbarC .navbarCon{color:#ff699c;}

.scrollcon{ position: absolute; width: 100%; top: 44px; bottom: 0;background: white;  overflow: hidden;  z-index: 9; }
</style>>
