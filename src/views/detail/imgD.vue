<template>
  <div>
    <div class="img" v-show="images.length!=0" v-for="(img01,index01) in images" :key="index01">
      <!-- <h5>{{img01.key}}</h5> -->
      <img @load="imageload" v-for="(img02,index02) in img01.list" :key="index02" :src="img02" alt="">
    </div>
      
  </div>
</template>

<script>
export default {
    name:'imgD',
    props:{
      images:Array
    },
    data(){
      return{
       
      }
    },
    created(){
     
    },
    methods:{
      imageload(){
       
      }
    }
}
</script>

<style scoped>
.img{ margin-top: 5px;}
.img img{width: 100%;}
</style>