<template>
    <navbar class="navbarP">
      <div slot="center">我的</div>
    </navbar>
</template>

<script>
import navbar from '@/components/common/navbar.vue';

export default {
  name: 'profile',
  components:{
    navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.navbarP div{ color: black;}
</style>
