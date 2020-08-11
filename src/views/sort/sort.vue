<template>
   <navbar class="navbarSort">
      <div slot="center">分类</div>
    </navbar>
</template>

<script>
import navbar from '@/components/common/navbar.vue';

export default {
  name: 'sort',
  components:{
    navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.navbarSort div{ color: black;}
</style>
