<template>
    <Product />
</template>

<script>
import Product from "@/components/Product.vue";
export default {
    name: "ProductList",
    components: {
        Product,
    },
    mounted() {
    this.loadScripts();
},

methods: {
    loadScripts() {
      const scriptUrls = [
        '/js/bootstrap.min.js',
        '/js/bootstrap.bundle.min.js',
        '/js/jquery-3.6.0.min.js',
        
      ];

      const head = document.getElementsByTagName('head')[0];

      scriptUrls.forEach((scriptUrl) => {
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;
        head.appendChild(script);
      });
    },
 },

};



</script>

<style>
/* Import your CSS files here */
@import '@/assets/assets/css/bootstrap.min.css';



</style>