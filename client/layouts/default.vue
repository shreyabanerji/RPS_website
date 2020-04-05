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
<style>
body{
  font-size: 13px;
  line-height: 19px;
  color: #111;
}

</style>
