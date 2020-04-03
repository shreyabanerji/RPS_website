<template>
  <div>
    <Navbar/>

    <nuxt />
    
  </div>
</template>
<script>
import Navbar from "~/components/Navbar"
import Footer from "~/components/Footer"
import Search from "~/components/Search"
export default {
  components:{
    Navbar,
    Footer,
    Search
  }
};
</script>
