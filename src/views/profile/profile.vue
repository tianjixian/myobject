<template>
<div class="fme">
    <navbar class="navbarP"><div slot="center">我的</div></navbar>
    <div class="me" @click="click01">555555555555555555555555
      5555555555555555555555555555555555555555555555555555555
      5555555555555555555555555555555555555555555555555555555
      5555555555555555555555555555555555555555555555555555555
      5555555555555555
    </div>
</div>
    
</template>

<script>
import navbar from '@/components/common/navbar.vue';

export default {
  name: 'profile',
  components:{
    navbar
  },
  methods:{
    click01(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fme{width: 100%;}
.navbarP div{ color: black;}
.me{height: 1000px; width: 100%; word-break: break-all;}
</style>
