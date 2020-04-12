<template>
  <!--MAIN-->
  <main>
    <!--REVIEW ADDRESS-->
    <div class="reviewPage mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8">
            <div class="a-spacing-top-medium">
              <h1 class="a-spacing-base">
                <b>Create Review</b>
              </h1>
              <div class="row">
                <!-- hotel Photo -->
                <div class="col-md-2 col-sm-3 col-3">
                  <img :src="hotel.photo.data" style="width: 80px" /><!--:src="hotel.photo" -->
                </div>
                <!-- hotel name -->
                <div class="col-md-10 col-sm-9 col-9 m-auto">
                  <h4>
                    <b>{{hotel.name}}</b><!--{{hotel.name}}-->
                  </h4>
                </div>
              </div>
              <div class="a-spacing-top-medium"></div>
              <hr />
              <h2 class="a-spacing-base">Overall Rating</h2>
              <div class="a-row">
                <!-- Rating -->
                <client-only>
                <div class="a-spacing-top-medium">
                        <label style="margin-bottom: 0px;">Rating</label>
                        <input type="number" class="a-input-text" style="width: 100%" v-model="rating"/>
                </div>
                </client-only>
              </div>
              <!-- Headline -->
              <div class="headline a-spacing-large">
                <h2 class="a-spacing-base">Add a headline</h2>
                <input
                  type="text"
                  class="a-input-text"
                  style="width: 70%;"
                  placeholder="What's most important to know?"
                  v-model="headline"
                />
              </div>
              <!-- Body -->
              <div class="a-spacing-base">
                <h2 class="a-spacing-base">Write your review</h2>
                <textarea
                  placeholder="What do you like or dislike? What did you see this hotel for?"
                  style="height:6em; width: 100%;"
                  v-model="body"
                ></textarea>
              </div>
              <div class="a-row text-right a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onAddReview">Submit</span>
                </span>
              </span>
            </div>
            </div>
            <br />
            <br />
            <hr />
          </div>
          <div class="col-sm-2"></div>
        </div>
        <div class="a-spacing-large pb-5"></div>
        <hr />
      </div>
    </div>
    <!--/REVIEW ADDRESS-->
  </main>
  <!--/MAIN-->
</template>
<script>
import axios from 'axios';
export default {

    async asyncData({params}){
        try{
          
            let singleHotel= axios.get(`http://localhost:3000/api/hotels/${params.id}`);
            //let manyReviews= axios.get(`http://localhost:3000/api/reviews/${params.id}`);
            const [hotelResponse,reviewRespone]= await Promise.all([
              singleHotel//,manyReviews
            ])
            //console.log(hotelResponse)
            return{
                hotel:hotelResponse.data.hotel,
                //reviews:reviewResponse.data.reviews
            }
        }
        catch(err){
            console.log(err)

        }
    },
    data(){
        return{
            rating:0,
            body:"",
            headline:"",
          
        };
    },
    methods:{
        async onAddReview(){
            try{
                let data=new FormData();
                data.append("headline",this.headline);
                data.append("body",this.body);
                data.append("rating",this.rating);
                //data.append("review",this.review);
                let response=await axios.post(`/api/reviews/${this.$route.params.id}`,data);
                
                this.$router.push(`/hotels/${this.$route.params.id}`);

            }
            catch(err){
                console.log(err);
            }
        }
    }
}
</script>
