<template>
  <tabbar01 class="maintabbar">
         <tabbar02 path="/home" oncolor="green"> 
            <img slot="img" src="@/assets/img/q1.png" alt="">
             <img slot="onimg" src="@/assets/img/q9.png" alt="">
            <div slot="text">首页</div>
        </tabbar02>
         <tabbar02 path="/sort" oncolor="green"> 
            <img slot="img" src="@/assets/img/q2.png" alt="">
             <img slot="onimg" src="@/assets/img/q9.png" alt="">
            <div slot="text">分类</div>
        </tabbar02>
         <tabbar02 path="/car" oncolor="green"> 
            <img slot="img" src="@/assets/img/q3.png" alt="">
             <img slot="onimg" src="@/assets/img/q9.png" alt="">
            <div slot="text">购物车</div>
        </tabbar02>
         <tabbar02 path="/profile" oncolor="green"> 
             <img slot="img" src="@/assets/img/q4.png" alt="">
              <img slot="onimg" src="@/assets/img/q9.png" alt="">
            <div slot="text">我的</div>
        </tabbar02>
    </tabbar01>
</template>

<script>
import tabbar01 from'@/components/common/tabbar/tabbar01';
import tabbar02 from'@/components/common/tabbar/tabbar02';
export default {
  name: 'maintabbar',
  components:{
    tabbar01,
    tabbar02
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.maintabbar{z-index: 8;}
</style>
