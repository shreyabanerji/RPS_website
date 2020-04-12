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
                 <img :src="hotel.photo.data" class="img-fluid" />
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
                        <a href="#">
                          4.5 stars
                          <i class="a-icon a-icon-popover"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <!-- A tags Dummy Data -->
              <div class="mediaMatrix">
                <div class="formats">
                  <a href="#" class="link-expander">
                    >
                    <span class="tmmShowPrompt">See more options in the same price_range</span>
                  </a>
                </div>
              </div>
              <div>
              <template v-if="$auth.$state.loggedIn">
              <div class="combinedBuyBox">
              <div class="buyBox">
                <div class="a-section">
                  <div class="clearfix">
                    <div class="a-spacing-base">
                      <h2 class="a-spacing-base">Write your review</h2>
                        <input type="number" placeholder="Give rating" style="width: 10%;" v-model="liked"/>
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
          <div class="col-lg-3 col-md-3 col-sm-6">

                    <!-- Hotel Price -->
                    <div class="float-right">
                      <span class="a-size-medium a-color-price offer-price a-text-normal">Rs.{{hotel.avg_price}}</span>
                    </div>
                  </div>
                </div>

                <div class="a-section a-spacing-none">
                  <div class="row">
                    <div class="col-sm-5 col-5">
                      <select>
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
                <div class="a-section a-spacing-small">
                  <div class="a-section a-spacing-none">
                    <span class="a-size-medium a-color-success">Available</span>
                  </div>
                  <div class="a-section a-spacing-mini">From this to this date</div>
                </div>

                <div class="a-section">
                  <div class="a-button-stack">
                    <span class="a-spacing-small a-button-primary a-button-icon">
                      <span class="a-button-inner">
                      
                        <input type="submit" name="submit.add-to-cart" class="a-button-input" />
                        <span class="a-button-text">Book now</span>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="a-row">
                  <div class="a-spacing-top-small">
                    <div class="a-section a-spacing-none">
                      <div class="a-section a-spacing-none a-spacing-top-mini">
                       Book 3 rooms in 
                        <b>{{hotel.name}},{{hotel.city.name}}</b>
                        <b>from Sept 23 - Monday, Sept. 30</b>
                        Choose the payment method at checkout.
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
                      <span class="a-color-base offer-price a-text-normal">Rs.{{hotel.avg_price}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

      
          </div>
        </div>
        <br />
        
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
    
<script>
import axios from 'axios'

export default {
  
  async asyncData({params})
    {
        try{
          
            let singleHotel=  await axios.get(`http://localhost:3000/api/hotels/${params.id}`);
            //let manyReviews= axios.get(`http://localhost:3000/api/reviews/${params.id}`);
            //const [hotelResponse,reviewRespone]= await Promise.all([
             // singleHotel//,manyReviews
            //])
            //console.log(singleHotel.data.hotel.photo.data)
            //console.log(reviewResponse)
            return{
                hotel:singleHotel.data.hotel,
                //reviews:reviewResponse.data.reviews
                liked:0
            }
        }
        catch(err){
            console.log(err)

        }
  },
 data(){
        return{
            liked:0
          
        };
    },
  methods:{
    async onLiked(){
      try{      console.log("Onliked")
                let data=new FormData();
                data.append("liked",this.liked);
                //data.append("review",this.review);
             
                let response=await axios.post(`/api/likes/${this.$route.params.id}`,data);
               
                console.log(response)
                this.$router.push(`/hotels/${this.$route.params.id}`);

            }
            catch(err){
                console.log(err);
            }

  }

}
}
</script>
