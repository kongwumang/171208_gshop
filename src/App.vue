<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show = "$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  data() {
    return {};
  },
  components:{
    FooterGuide
  }
};

</script>
<style lang='stylus' rel="stylesheet/stylus">
 .app
   width 100%
   height 100%
   color yellow
   background #f5f5f5
</style>