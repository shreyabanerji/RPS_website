<template>
  
<main>
<!-- Breadcrumbs -->
    <div class="a-spacing-top-medium"></div>
    <div class="container-fluid">
      <div class="wayfinding-breadcrumbs-container">
        <ul class="a-unordered-list a-horizontal a-size-small">
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#">City</a>
            </span>
          </li>
          <li>
            <span class="a-list-item">></span>
          </li>
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#">Hotel</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container-fluid">
      <div class="dp-container">
        <div class="row">
          <!-- First 3 grid Hotel Image-->
          <div class="col-lg-3 col-md-3 col-sm-4">
            <div class="leftCol">
              <!-- Image -->
              <div clas="imgBlock">
                <div class="eBooksimg">
                 <img :src="hotel.photo.data" class="img-fluid" style="width:500px;height:200px"/>
                </div>
              </div>

            </div>
          </div>
          <!-- Middle 6 grid Description -->
          <div class="col-lg-6 col-md-6 col-sm-8">
            <div class="centerCol">
              <!-- Hotel Title -->
              <div class="titleDiv">
                <h1 class="HotelTitle">
                  <span class="largeTitle">{{hotel.name}}</span>
                </h1>
              </div>
              <!-- City name -->
              <div class="bylineinfo">
                in
                <a href="#" class="authorName">
                  {{hotel.city.name}}
                  <i
                    class="fas fa-chevron-down"
                    style="font-size: 8px !important; color: #555 !important;"
                  ></i>
                </a> (City)
              </div>
              <div class="reviewGroup"></div>
              <!--Description-->
              <div class="bookDescription">
                <div class="bookDescriptionInner">{{hotel.description}}</div>
              </div>
              
              <!-- Hotel specification -->
              <div class="aboutEbooksFeature">
                
                <div class="row">
                  <div class="col-sm-4 mb-1">
                    <div class="a-declarative">
                      Rating
                      <span>
                        
                          {{liked}}
                          <i class="a-icon a-icon-popover"></i>
                     
                      </span>
                    </div>
                  </div>
                </div>
                 <div class="row">
                  <div class="col-sm-4 mb-1">
                    <div class="a-declarative">
                      {{hotel.likes.length}} people have rated this hotel.
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              
              <div>
              <template v-if="$auth.$state.loggedIn">
              <div class="combinedBuyBox" style="width:50%">
              <div class="buyBox">
                <div class="a-section">
                  <div class="clearfix">
                    <div class="a-spacing-base">
                      <h3 class="a-spacing-base">Give your rating</h3>
                        <input type="number" placeholder="Give rating" style="width: 20%;" min="1" max="5" v-model="liked"/>
                    </div>
                    <div class="a-row text-right a-spacing-top-large">
                      <span class="a-button-register">
                        <span class="a-button-inner">
                          <span class="a-button-text" @click="onLiked">Rate</span>
                        </span>
                        </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
               
              </template>
              </div>
              

        
            </div>
          </div>
          <!-- Last 3 grid Buying section -->
          <template v-if="$auth.$state.loggedIn">
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="combinedBuyBox">
              <div class="buyBox">
                  <div class="a-section">
                    <div class="clearfix">
                    <!-- Hotel Price -->
                    <div class="float-right">
                      <span class="a-size-medium a-color-price offer-price a-text-normal">Rs.{{hotel.avg_price}}</span>
                    </div>
                  </div>
                </div>

                <div class="a-section a-spacing-none">
                  <div class="row">
                    <div class="col-sm-5 col-5">
                      <select v-model="rooms">
                        <option value="1">Rooms: &nbsp; 1</option>
                        <option value="2">Rooms: &nbsp; 2</option>
                        <option value="3">Rooms: &nbsp; 3</option>
                        <option value="4">Rooms: &nbsp; 4</option>
                        <option value="5">Rooms: &nbsp; 5</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="a-section a-spacing-small a-spacing-top-micro">
                  <div class="row">
                    <span class="a-color-base buyboxShippingLabel"></span>
                  </div>
                </div>
                <input type="date" v-model="checkin" id="checkin" name="Check-in">
                <input type="date" v-model="checkout" id="checkout" name="Check-out">
                <div class="a-section a-spacing-small">
                  <div class="a-section a-spacing-none">
                    <br>
                    <span class="a-size-medium a-color-success">Book from</span>
                  </div>
                  <div class="a-section a-spacing-mini"><b>From :</b> {{checkin}}  <b>to : {{checkout}}</b> </div>
                </div>

                <div class="a-section">
                  <div class="a-button-stack">
                    <span class="a-spacing-small a-button-primary a-button-icon">
                      <span class="a-button-inner">
                      
                        <input type="submit" name="submit.add-to-cart" class="a-button-input" @click="onBook" />
                        <span class="a-button-text">Book now</span>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="a-row">
                  <div class="a-spacing-top-small">
                    <div class="a-section a-spacing-none">
                      <div class="a-section a-spacing-none a-spacing-top-mini">
                       Book {{rooms}} rooms in 
                        <b>{{hotel.name}},{{hotel.city.name}}</b>
                        <!--<b>from Sept 23 - Monday, Sept. 30</b>-->
                       
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <span class="a-declarative">
                  <!--<a href="#" class="a-link-normal">
                    <div class="a-row a-spacing-mini">
                      <i class="fal fa-map-market-alt"></i>
                      <span class="a-size-small">Deliver to California</span>
                    </div>
                  </a>-->
                </span>
                <br />
               
                <div class="a-section">
                  <div class="clearfix">
                    
                    <div class="float-right">
                      <span class="a-color-base offer-price a-text-normal">Rs.{{rooms*hotel.avg_price}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

      
          </div>
          </template>
          <template v-else>
            <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="a-row">
                      <b>
                        Want to book this hotel?
                        <nuxt-link to="/signup" class="a-link-emphasis">Sign up</nuxt-link>
                        or
                        <nuxt-link to="/login" class="a-link-emphasis">Login</nuxt-link>
                      </b>
                    </div>
            </div>
            <br><br>

          </template>
        </div>
        <br />
        
          </div>
        </div>
     
  </main>
</template>
    
<script lang="ts">
import axios from 'axios';

export default {
  
  async asyncData({$axios,params})
    {
        try{
            
            let singleHotel=axios.get(`http://localhost:3000/api/hotels/${params.id}`);
            let likes= axios.get(`http://localhost:3000/api/getAvgRating/${params.id}`);
            const [hotelResponse,rating]= await Promise.all([
             singleHotel,likes
            ])
            console.log(likes)
            //console.log(singleHotel.data.hotel.photo.data)
            //console.log(reviewResponse)
            return{
                hotel:hotelResponse.data.hotel,
      
                liked:rating.data.avglike
              
            }
        }
        catch(err){
            console.log(err)

        }
  },
 data(){
        return{
            scrollAmt:100,
            liked:0,
            checkin:new Date("2020-04-16").getFullYear()+"-"+new Date("2020-04-16").getMonth()+"-"+new Date("2020-04-16").getDate(),
            checkout:new Date("2020-04-17").getFullYear()+"-"+new Date("2020-04-17").getMonth()+"-"+new Date("2020-04-17").getDate(),
            rooms:1,
            total_cost:0
          
        };
    },
  methods:{
    async onLiked(){
      try{      console.log("Onliked")
                let data=new FormData();
                this.liked=parseInt(this.liked,10)
                data.append("likes",this.liked);
                //data.append("review",this.review);
                console.log(this.liked)
                let response=await this.$axios.post(`/api/likes/${this.$route.params.id}/${this.liked}`);
               
                console.log(response)
                this.$router.push(`/hotels/${this.$route.params.id}`);

            }
            catch(err){
                console.log(err);
            }

  },
  async onBook(){
    try{
      console.log("Onbooked")
      let data=new FormData();
      data.append("checkin",this.checkin);
      data.append("checkout",this.checkout);
      
      let response =await this.$axios.$post(`/api/book/${this.$route.params.id}/${this.rooms}`,data)
      console.log(response)
      alert("Successfully booked!")
    }
    catch(err){
                console.log(err);
            }
      
     
  },
  async handleScroll () {

      console.log(window.scrollY)
          var scroll=window.scrollY;
          console.log(scroll)
          if(scroll>this.scrollAmt)
          {
            console.log("in if")
            this.scrollAmt=scroll;
            console.log(this.start)
            console.log(this.end)
            /*let read=await this.$axios.get(`/api/read/${this.start}/${this.end}`).then(function (response) {
           
            if(response.status==200)
              {
                
              document.getElementById("content").innerHTML+=response.data;
              
              
              }
            })*/
            //this.start=this.start+500
            //this.end=this.end+500
            //console.log(this.start)
            //document.getElementById("content").innerHTML+=read.data;
       
          }
          
    }
  ,
  beforeMount () {
    window.addEventListener('load', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('load', this.handleScroll);
  }

}
}
</script>
