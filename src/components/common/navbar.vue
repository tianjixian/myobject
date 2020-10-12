<template>
    <div class="navbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue';

export default {
  name: 'tabbar01',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.navbar{width: 100%; display:flex;height: 44px;line-height: 44px; position: fixed; top: 0; left: 0; right: 0; z-index: 10; background: white;}
.center{flex: 1; text-align: center; font-size: 16px; color: white;}
.left,.right{ width: 60px;}
</style>
