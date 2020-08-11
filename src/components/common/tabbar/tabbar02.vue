<template>
   <div class="tabbar02" @click="go" >
       <div v-if="!onclass"><slot name="img"></slot></div>
        <div v-else><slot name="onimg"></slot></div>
       <div :style="oncolor02"><slot name="text"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'tabbar02',
  props:{
    path:String,
    oncolor:{
      type:String,
      default:"red"
    }
  },
  data:function(){
    return{
      // onclass:true
    }
  },
  methods:{
    go(){
      this.$router.push(this.path)
    }
  },
  computed:{
    onclass(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    oncolor02(){
      return this.onclass?{color:this.oncolor}:{}
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbar02{flex: 1; -webkit-box-flex: 1;  text-align: center;}
.tabbar02 img{width: 24px; height: 24px; vertical-align: middle; margin-top: 3px;}
.tabbar02 div{ font-size: 14px;}

</style>
