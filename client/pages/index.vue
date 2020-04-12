<template >
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-3 md-4 col-sm-4">
          <!--Sidebar-->
        </div>

        <!--Main Content-->
        <div class="col-xl-10 col-lg-9 md-8 col-sm-8">
          <FeaturedProduct/>
          
  

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
                            
                            <img :src="hotel.photo.data" style="width:150px height 100px" class="img-fluid"/><!--product.photo-->
                            <!--<p>{{hotel.photo.data}}</p>-->
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
                               </h2>
                            </a>
                            
                            <div class="a-row a-spacing-small">
              
                              <span class="a-size-small a-color-secondary">Apr 3,2020</span>
                            </div>
                            
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
import axios from 'axios';
import FeaturedProduct from './FeaturedProduct.vue';
import Vue from 'vue'


  export default {
    plugins: ['~/plugins/multi-stage.js'],
    components:{
      FeaturedProduct
    },
    data(){
      return{
      isFP:false
      }
    },
    async asyncData(){
      try
      {
        let response=await axios.get("http://localhost:3000/api/hotels");
        
        return {
          hotels:response.data.hotels,
          
        }
        //app.getFP();
      }
      catch(err){
        console.log(err);
      }
    
    }
  
  };
  </script>
