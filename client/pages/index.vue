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
          <template v-if="$auth.$state.loggedIn">
              <FeaturedProduct :recommendation="recommendation"/>
          </template>
          
          
  

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
                            <a :href="`/city/${hotel.city._id}`">
                        <div class="a-row a-spacing-small">
                         
                          {{hotel.city.name}}
                          
                        </div>
                        </a>
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
    <br><br>
    <div id="intro">
    <h1 align="center" style="color:orange">A note from us... </h1>
    <div style="border-style: groove;width:85%;margin:0 auto;" align="center">
    <div style="width:85%; text-align: justify;text-justify: inter-word;margin:0 auto;" align="center">
        <p id="content" style="font-size: 120%;color:blue ;"></p>

      </div>

      </div>
      <br>
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
    async asyncData({$axios}){
      try
      {
        
        let response= await $axios.$get("http://localhost:3000/api/hotels");
        let recommendation=$axios.$get("http://localhost:3000/api/getRec");
        const [hotel,recom]=await Promise.all([
          response,recommendation
        ])
        //console.log(response)
        return {
          hotels:hotel.hotels,
         recommendation:recom.hotel
          
        }
        //app.getFP();
      }
      catch(err){
        console.log(err);
      }
    
    },
    methods:{
    async handleScroll () {

      console.log(window.scrollY)
          scroll=window.scrollY;
          console.log(scroll)
          if(scroll>this.scrollAmt)
          {
            console.log("in if")
            this.scrollAmt=scroll;

            this.start=this.start+500
            this.end=this.end+500
            console.log(this.start)
            console.log(this.end)
            let read=await this.$axios.get(`/api/read/${this.start}/${this.end}`).then(function (response) {
           
            if(response.status==200)
              {
                
              document.getElementById("content").innerHTML+=response.data;
              
              
              }
            })
         
            //console.log(this.start)
            //document.getElementById("content").innerHTML+=read.data;
       
          }
          
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  }
  
  </script>
