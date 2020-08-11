<template>
    <div class="tabbar01">
          <slot></slot>
      </div>
</template>

<script>
export default {
  name: 'tabbar01',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.tabbar01{display: flex; box-shadow: 0.5px -0.5px 0px #888888;  position: fixed; width: 100%; height: 49px; background: #f6f6f6; left: 0; bottom: 0; right: 0;}
</style>
