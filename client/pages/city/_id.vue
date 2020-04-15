<template >

  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
          <div class="col-xl-2 col-lg-3 md-4 col-sm-4">
          <!--Sidebar-->
         
        </div>
          <!--
           <div class="col-xl-7 col-lg-9 md-8 col-sm-8">
          <img src="http://localhost:3000/main_img.jpg" style="width:200px height:25px object-fit:cover"  class="img-fluid" @load="feature"/>
        </div>-->
        <!--Main Content-->
        <!--
        </div>
           <div class="col-xl-5 col-lg-9 md-8 col-sm-8">
          <img src="#" style="width:100px height:50px object-fit:cover"  id="img" class="img-fluid"/>
        </div>-->
         <div class="col-xl-10 col-lg-9 md-8 col-sm-8">
        
  

          <div class="mainResults">
            
            <ul class="s-result-list" v-for="(hotel,index) in hotels" :key="hotel._id" v-if="index <=3">
              <li class="s-result-item celwidget">
                 
                <div class="s-item-container">
                  <!--Best Rated-->
                  <div class="a-spacing-micro">
                    <div class="bestSeller">
                      Book now
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
                         
                         <!-- <nuxt-link :to="`hotels/${hotel._id}`" class="a-link-normal" prefetch>
                            <h2 class="a-size-medium">
                              {{hotel.name}}
                               </h2>
                          </nuxt-link>-->
                          <a :href="`/hotels/${hotel._id}`" class="a-link-normal" prefetch>
                            <h2 class="a-size-medium">
                              {{hotel.name}}
                               </h2>
                          </a>
                            
                            <div class="a-row a-spacing-small">
              
                              <span class="a-size-small a-color-secondary">April 16,2020</span>
                            </div>
                            
                        </div>
                        <!--City-->
                     
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
      </div>
    </div>
    </main>


  </template>

  <script>
import axios from 'axios';

import FeaturedProduct from '~/components/FeaturedProduct'
import Vue from 'vue'



  export default {
   components:{FeaturedProduct},
   
    data(){
      return{
      start:-500,
      end:0,
      scrollAmt:50,
      count:0,
      city:""
      }
    },
    async asyncData({$axios,params}){
      try
      {
        
        let response= await $axios.$get(`http://localhost:3000/api/getHotels/${params.id}`);
        //console.log(response)
        return {
          hotels:response.hotels,
          //city:response.hotels.city.name
  
          
        }
      }
      catch(err){
        console.log(err);
      }
    
    }
   
  
  }
  
  </script>
