<template>
<div>
    <navbar class="navbarP"><div slot="center">我的</div></navbar>
    <div class="me" @click="click01">5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
      555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555</div>
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
      alert(666)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbarP div{ color: black;}
.me{height: 1000px; width: 100%;}
</style>
