<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app,
.box {
  height: 100%;
  overflow: hidden;
}

.swiper-pagination-bullet{
  margin: 0 5px;
}
</style>
