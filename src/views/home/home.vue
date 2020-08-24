<template>
  <div class="home">
    <navbar class="navbarHome"><div slot="center">全民购物街</div></navbar>
    <scroll class="scrollcon" ref="scroll" :probeType="3" :click="true" :pullUpLoad="true" @showBacktop="showBacktop" @loadmore="loadmore" >
      <mainswiper :images="bannerimg"></mainswiper>
      <homechild01 :recommend="recommend"></homechild01>
      <homechild02></homechild02>
      <topnav :navtitle="nav"  @showGoods="showGoods"></topnav>
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
          isShowBacktop:false  
      }
  },
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
  mounted(){
    
  },
  computed:{
    showmainGoods(){
      return this.goods[this.goodsOnType].list
    }
  },
  methods:{
    //事件署处理-----------------------------
    backtop(){
      this.$refs.scroll.scroll.scrollTo(0,0,500);
    },
    showBacktop(position){
      this.isShowBacktop=-position.y>1000
    },
    loadmore(){
      this.home02(this.goodsOnType)
      this.$refs.scroll.scroll.refresh()
      console.log("1")
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
    }

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{height: 100vh; position: relative;}
.navbarHome{ background:#ff699c;}
.scrollcon{ width: 100%; position: absolute; top: 44px; bottom: 49px;  overflow: hidden; }
/* height: calc(100% - 98px); */
</style>
