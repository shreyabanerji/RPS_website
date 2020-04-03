<template>
  <main>
  <div class="a-spacing-large"></div><div class="container-fluid browsing-history">
    <div class="row">
      <div class="col-sm-8 col-8">
        <h1 class="a-size-large a-spacing-none a-text-normal">All hotels</h1>
        <div class="a-spacing-large"></div>
        <!--Button-->
        <a href="#" class="a-button-buy-again">Add a new hotel</a>
        <a href="#" class="a-button-history margin-right-10">Add a new City</a>
        <a href="#" class="a-button-history margin-right-10">Add a new Room Type</a>
        <!--Listing page-->
      </div>
    </div>
  </div>
  <div class="a-spacing-large"></div>
  <div class="container-fluid browsing-history">
    <div class="row">
    <div v-for="hotel in hotels" 
    :key="hotel.id"
    class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb">
  
        <div class="history-box">
          <div class="text-center">
            <!--hotel Image-->
            <a href="#" class="a-link-normal">
              <img src=":hotel.photo.path" class="img-fluid"/>
            </a>
            <!--hotel Title-->
          <div class="a-spacing-to-base asin-title">
            <span class="a-text-normal">
              <div class ="p13n-sc-truncated">{{hotel.name}}</div>
            </span>
          </div>
          <!--hotel rating-->
          <div class="a-row">
            <a href="#" class="a-link-normal"></a>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <span class="a-letter-space"></span>
              <span class="a-color tertiary a-size-small asin-reviews">{1732}</span>
          </div>
          <!--hotel price-->
          <div class="a-row">
            <span class="a-size-base a-color-price">
              <span class="p13n-sc-price">Price</span>
              </span>
            
          <div class="a-row">
            <a href="#" class="a-button-history margin-right-10">Update</a>
            <a href="#" class="a-button-history margin-right-10">Delete</a>
          </div>
          </div>
          </div>
        </div>
      </div>
       

      </div>

  </div>
  
  </main>
</template>

<script>

import axios from 'axios'
export default {
  //asyncData is fetching data before nuxt app finish loading on the browser.
  //it is good for SEQ because the data will be loaded first
  async asyncData({ $axios }) { 
    try{
      let response = await axios.get("http://localhost:3000/api/hotels");
      console.log(response.data);
      return{
        hotels:response.data.hotels
      };
    }
    catch(err){
        console.log(err);
    }
  }
};
</script>


