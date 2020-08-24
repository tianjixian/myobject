<template>
  <ul class="homechild01">
      <li v-for="(item,index) in recommend" :key='index'><img :src="item.image" alt=""><a :href="item.link">{{item.title}}</a></li>

  </ul>
</template>

<script>
export default {
    name:'homechild02',
    props:{
        recommend:{
            type:Array
        }
    },
    data(){
        return{

        }
    },
    created(){

    }
}
</script>

<style scoped>
.homechild01{display: flex; margin-top: 20px;}
.homechild01 li{flex: 1; text-align: center;}
.homechild01 li a{display:block; margin-top: 5px; font-size: 16px; color: black;}
.homechild01 li img{width: 50px; height: 50px;}
</style>