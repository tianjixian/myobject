<template>
  <div class="detail">
      <navbar>
         <a class="navbarL" @click="navbarL" slot="left">＜</a>
         <div class="navbarC" slot='center'>
             <a :class="{navbarCon:index==navbarCon}" v-for='(iteam,index) in navbar' :key='index' @click="navbarCon02(index)">{{iteam}}</a>
         </div>
      </navbar>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue';

export default {
    name:'detail',
    data(){
        return{
           navbar:['商品','参数','评论','推荐'],
           navbarCon:0 
        }
    },
    components:{
        navbar
    },
    methods:{
        navbarCon02(index){
            this.navbarCon=index
        },
        navbarL(){
            this.$router.back()
        }
    }
   
}
</script>

<style scoped>
.navbarL{display: block; font-size: 28px; color: black; text-align: center;font-weight: 100;}
.navbarC{display: flex;}
.navbarC a{flex: 1; font-size: 16px; color: black;}
.navbarC .navbarCon{color:#ff699c;}
</style>>
