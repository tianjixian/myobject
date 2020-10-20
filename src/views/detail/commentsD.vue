<template>
  <div class="comments" v-if='Object.keys(commentsD).length!==0'>
      <div class="comList">
        <div class="comList01 cf"><span>用户评价</span> <a href="">更多</a></div>
        <div class="comList02 cf">
            <img :src="commentsD.user.avatar" alt=""> 
            <a>{{commentsD.user.uname}}</a>
        </div>
        <div class="comList03">{{commentsD.content}}</div>
        <div class="comList04 cf">
            <span>{{commentsD.created|showDate}}</span>
            <span>{{commentsD.style}}</span>
        </div>
        <div class="img cf">
            <img v-for="(item,index) in commentsD.images" :key="index+'1'" :src="item" alt="">
        </div>
      </div>
  </div>
</template>

<script>
import {formatDate} from '@/common/const.js'

export default {
    name:'commentsD',
    props:{
        commentsD:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        showDate(value){
            const date=new Date(value*1000)
            return formatDate(date,'yyyy-MM-dd')
        }
       
    }
   
   
}
</script>

<style scoped>
.comList01{ height: 50px; line-height: 50px; border-top: 1px solid #8e8e8e; border-bottom: 1px solid #8e8e8e; overflow: hidden; margin-top: 10px;}
.comList01 span{float: left; font-size: 14px;}
.comList01 a{float: right; font-size: 14px;}
.comList02{ height: 40px;  width: 100%; overflow: hidden; margin-top: 10px;}
.comList02 img{float: left; width: 40px; height: 40px;}
.comList02 a{float: left;  font-size: 14px; margin-top: 15px;}
.comList03{ font-size: 14px; margin: 10px 0; line-height: 20px;}
.img{width: 105%; margin-bottom: 20px; }
.comList04{font-size: 12px; color: #8e8e8e;}
.img img{ float: left;  margin-right: 10px; width: 30%; height: 80px; margin-top: 10px;}
</style>
