<template>
  <div id="page-top">
    <!-- Loader icon -->
    <!-- <div class="se-pre-con"></div> -->
    <default-header/>
    <default-nav/>
    <default-slider/>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
 head() : Object {
   return {
     link: [
       { rel: '"shortcut icon', type: 'image/x-icon', href: '/images/fev-icon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900' },
        { rel: 'stylesheet', href: '/default/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/default/css/jquery-ui.min.css' },
        { rel: 'stylesheet', href: '/default/font-awesome/css/font-awesome.min.css' },
        { rel: 'stylesheet', href: '/default/css/flaticon.css' },
        { rel: 'stylesheet', href: '/default/owl-carousel/owl.carousel.css' },
        { rel: 'stylesheet', href: '/default/owl-carousel/owl.theme.css' },
        { rel: 'stylesheet', href: '/default/owl-carousel/owl.transitions.css' },
        { rel: 'stylesheet', href: '/default/revolution/css/settings.css' },
        { rel: 'stylesheet', href: '/default/revolution/css/layers.css' },
        { rel: 'stylesheet', href: '/default/revolution/css/navigation.css' },
        { rel: 'stylesheet', href: '/default/css/style.css' },
     ], 
     script: [
       { src: '/default/js/jquery.min.js', body: true, defer: true },
       { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBVtjo9eO4klWhYbHwL9jObfuke4rxSWWc', body: true, defer: true },
       { src: '/default/js/bootstrap.min.js', body: true, defer: true },
       { src: '/default/revolution/js/jquery.themepunch.tools.min.js', body: true, defer: true },
       { src: '/default/revolution/js/jquery.themepunch.revolution.min.js', body: true, defer: true },
       { src: '/default/revolution/js/extensions/revolution.extension.actions.min.js', body: true, defer: true },
       { src: '/default/revolution/js/extensions/revolution.extension.carousel.min.js', body: true, defer: true },
       { src: '/default/revolution/js/extensions/revolution.extension.kenburn.min.js', body: true, defer: true },
       { src: '/default/revolution/js/extensions/revolution.extension.layeranimation.min.js', body: true, defer: true },
       { src: '/default/revolution/js/extensions/revolution.extension.migration.min.js', body: true, defer: true },
       { src: '/default/revolution/js/extensions/revolution.extension.navigation.min.js', body: true, defer: true },
       { src: '/default/revolution/js/extensions/revolution.extension.parallax.min.js', body: true, defer: true },
       { src: '/default/revolution/js/extensions/revolution.extension.slideanims.min.js', body: true, defer: true },
       { src: '/default/owl-carousel/owl.carousel.min.js', body: true, defer: true },
       { src: '/default/js/jquery.easing.min.js', body: true, defer: true },
       { src: '/default/js/jquery-ui.min.js', body: true, defer: true },
       { src: '/default/js/custom.js', body: true, defer: true },
       
     ]
   }
 }
})
</script>