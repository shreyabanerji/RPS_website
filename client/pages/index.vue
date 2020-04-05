<template>
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-3 md-4 col-sm-4">
          <!--Sidebar-->
        </div>

        <!--Main Content-->
        <div class="col-xl-10 col-lg-9 md-8 col-sm-8">
          <!--<FeaturedProduct />-->

          <div class="mainResults">
            <ul class="s-result-list" v-for="hotel in hotels" :key="hotel._id">
              <li class="s-result-item celwidget">
                <div class="s-item-container">
                  <!--Best Rated-->
                  <div class="a-spacing-micro"> 
                    <div class="bestSeller">
                      <a href="#">Best Rated</a>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <!--Image-->
                      <div class="col-sm-3 text-center"> 
                          <a href="#">
                            <!--arrayBufferToBase64(hotel.photo.data)-->
                            <img src="hotel.photo.data" style="width:150px" class="img-fluid"/><!--product.photo-->
                            <!--img :src="product.photo"
                            style="width:150px"
                            class="img-fluid"-->
                          </a>
                      </div>
                      <div class="col-sm-9">
                        <div class="a-row-spacing-small">
                          <!--Date-->
                          <a href="#" class="a-link-normal">
                            <h2 class="a-size-medium">
                              {{hotel.name}}
                              <span class="a-letter-space"></span>
                              <span class="a-letter-space"></span>
                              <span class="a-size-small a-color-secondary">Apr 3,2020</span>
                            </h2>
                          </a>
                        </div>
                        <!--City-->
                        <div class="a-row a-spacing-small">
                          {{hotel.city.name}}
                        </div>
                        <!--Price-->
                        <div class="a-row-spacing-none">
                          <a href="#" class="a-link-normal a-text-normal">
                          <span class="a-offscreen">${{hotel.avg_price}}</span>
                            <span class="a-color-base sx-zero-spacing">
                            <span class="sx-price sx-price-large">
                             
                              <span class="sx-price-whole">Rs.{{hotel.avg_price}}</span>
                              
                            </span>
                          </span>
                          </a>
                          <span class="a-letter-space"></span>
                          <span class="a-size-base-plus a-color-secondary a-text-strike">Rs.5000</span>

                        </div>
                        <!--Ratings-->
                        <div class="col-sm-5">
                          <div class="a-row a-spacing-mini">
                            <!--Star ratings-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>  
          </div>
        </div>
      </div>
    </div>
    </main>


  </template>

  <script>
  import FeaturedProduct from "~/components/FeaturedProduct";
  import axios from 'axios';
  export default {
    componenets:{
      FeaturedProduct
    },
    methods:{
    arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return 'data:image/jpeg;base64,'+window.btoa(binary);
    }
    },
    async asyncData(){
      try
      {
        let response=await axios.get("http://localhost:3000/api/hotels");
         //console.log(response.data.hotels);
        //let img=arrayBufferToBase64(response.data.hotels.img.data);
        
        return {
          hotels:response.data.hotels
          //img:img
       
      }
      }
      catch(err){
        console.log(err);
      }
    
    }
  
  };
  </script>
