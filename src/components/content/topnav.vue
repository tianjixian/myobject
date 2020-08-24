<template>
  <div class="topnav">
      <div v-for="(navname,index) in navtitle" :key="index" ><a :class="{onclass:ison==index}" @click="onclass(index)">{{navname}}</a></div>
     
  </div>
</template>

<script>
export default {
    name:'topnav',
    props:{
      navtitle:{
        type:Array
      }
    },
    data(){
      return{
        ison:0
      }
    },
    methods:{
        onclass(a){
            this.ison=a;
            this.$emit("showGoods",a);
        }   
    }
   

}
</script>

<style scoped>
.topnav{ height: 60px;line-height: 60px; display: flex;padding: 0 10%;  text-align: center; background: white;  position: sticky; top: 44px;}
.topnav div{flex: 1;justify-content: center; }
.topnav div a{color:black ; font-size: 18px; text-decoration: none;}
.topnav .onclass{ color: #ff699c; border-bottom: 1px solid #ff699c; padding:0 5px 8px 5px;}
</style>