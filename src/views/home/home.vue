<template>
  <div class="home">
    <navbar class="navbarHome"><div slot="center">全民购物街</div></navbar>
    <topnav class="topnavOn" ref="topnav02" :navtitle="nav" v-show="showtopnav"   @showGoods="showGoods"></topnav>
    <scroll class="scrollcon" ref="scroll" :probeType="3" :click="true" :pullUpLoad="true" @showBacktop="showBacktop" @loadmore="loadmore" >
      <mainswiper :images="bannerimg"></mainswiper>
      <homechild01 :recommend="recommend"></homechild01>
      <homechild02></homechild02>
      <topnav ref="topnav" :navtitle="nav"  @showGoods="showGoods"></topnav>
      <goodlist :goodslist="showmainGoods"></goodlist>
    </scroll>
    <backtop ref="backtop" @click.native="backtop" v-show="isShowBacktop"></backtop>
  </div>
    

</template>

<script>
// 组件
import navbar from '@/components/common/navbar.vue';
import mainswiper from '@/views/home/swiper/mainswiper.vue';
import topnav from '@/components/content/topnav.vue';
import homechild01 from '@/views/home/homechild01.vue';
import homechild02 from '@/views/home/homechild02.vue'
import goodlist from '@/components/content/goodlist.vue'
import scroll from '@/components/common/scroll.vue'
import backtop from '@/components/common/backtop.vue';
// 数据请求
import {home01,home02} from '@/network/home.js'



export default {
  name: 'home',
  data(){
      return{
          nav:['流行','新款','精选'],
          ison:0,
          bannerimg:[],
          recommend:[],
          goods:{
            "pop":{page:1,list:[]},
            "new":{page:1,list:[]},
            "sell":{page:1,list:[]}
          },
          goodsOnType:'pop',
          isShowBacktop:false,
          offsetTop:0,
          showtopnav:false,
          scrollleave:-44

      }
  },
  // 组件注册
  components:{
    navbar,
    mainswiper,
    topnav,
    homechild01,
    homechild02,
    goodlist,
    scroll,
    backtop
  },
  //生命周期（组件创建成功后执行）
  created(){
    // 网络请求
    this.home01();
    this.home02("pop")
    this.home02("new")
    this.home02("sell")
    
    
  },
  // 一般在初始化页面完成后，再对dom节点进行相关操作
  mounted(){
    this.$bus.$on('imgload01',()=>{
       this.$refs.scroll&&this.$refs.scroll.scroll.refresh()
      //  console.log("图片加载执行refresh函数") 
    })

   
    
    
  },
  computed:{
    showmainGoods(){
      return this.goods[this.goodsOnType].list
    }
    
    

  },
  methods:{
    //事件处理-----------------------------
    backtop(){
      this.$refs.scroll.scroll.scrollTo(0,0,500);
    },
    showBacktop(position){
      this.offsetTop=this.$refs.topnav.$el.offsetTop
      this.isShowBacktop=-position.y>1000
      this.showtopnav=(-position.y)>this.offsetTop
      
    },
    loadmore(){
      this.home02(this.goodsOnType)
      console.log("加载更多")
      
    },
    //网络请求处理----------------------------------------------
    //请求bnnner以及homechild01数据
    home01(){
      home01().then(res=>{
        this.bannerimg=res.data.data.banner.list
        this.recommend=res.data.data.recommend.list
        }).catch(err=>{
          alert('数据请求失败')
      });
    },
    //请求home商品列表数据
    home02(type){
      
      home02(type,this.goods[type].page).then(res=>{
      for(let n of res.data.data.list){
         this.goods[type].list.push(n)
      }
      });
      this.goods[type].page+=1
    },
    showGoods(index){
      switch(index){
        case 0: this.goodsOnType="pop";break; 
        case 1: this.goodsOnType="new";break; 
        case 2: this.goodsOnType="sell";break; 
      }
      this.$refs.topnav02.ison=index
      this.$refs.topnav.ison=index
    }

  },
  // 离开组件的三个操作区
  //1销毁首页
  destroyed(){
    
  },
  //2进入首页执行的记录
  activated(){
    this.$refs.scroll.scroll.refresh()
    this.$refs.scroll.scroll.scrollTo(0,this.scrollleave,0)
    // alert("设置了坐标值"+this.scrollleave)
  },
  //3离开首页的记录
  deactivated(){
    this.scrollleave=this.$refs.scroll.scroll.y
    // alert("记录了坐标值"+this.scrollleave)
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{height: 100vh; position: relative;}
.navbarHome{ background:#ff699c;}
.scrollcon{ width: 100%; position: absolute; top: 44px; bottom: 49px;  overflow: hidden; }
/* height: calc(100% - 98px); */
.topnavOn{ position: relative;z-index: 99; }
</style>
