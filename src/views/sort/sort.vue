<template>
  <div class="sort">
    <navbar class="navbarSort"><div slot="center">分类</div></navbar>
    <scroll style="height:200px;overflow:hidden">
    <div>测试数据1</div>
    <div>测试数据2</div>
    <div>测试数据3</div>
    <div>测试数据4</div>
    <div>测试数据5</div>
    <div>测试数据6</div>
    <div>测试数据7</div>
    <div>测试数据8</div>
    <div>测试数据9</div>
    <div>测试数据10</div>
    <div>测试数据11</div>
    <div>测试数据12</div>
    <div>测试数据13</div>
    <div>测试数据14</div>
    <div>测试数据15</div>
    <div>测试数据16</div>
    <div>测试数据17</div>
    <div>测试数据18</div>
    <div>测试数据19</div>
    <div>测试数据20</div>
    </scroll>
  </div>
   
</template>

<script>
import navbar from '@/components/common/navbar.vue';
import scroll from '@/components/common/scroll.vue'
export default {
  name: 'sort',
  components:{
    navbar,
    scroll
  },
  data(){
    return{
      scroll:null,
    }
  },

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.navbarSort div{ color: black;}
.wrapper{ height: 300px; background: red; overflow: hidden; margin-top: 44px;}
</style>
