<template>
  <div>
    <hr />
    <div class="reviewsMedley">
      <div class="row">
        <div class="col-lg-4 col-md-5 col-sm-12">
          <!-- Total Customer reviews -->
         
            
          <h3 class="a-spacing-micro">Review this product</h3>
          <div class="a-row a-spacing-large">Share your thoughts with other customers</div>
          <div class="a-row">
            <!-- Link to another Review page -->
            <span class="a-button-base writeReviewButton cm-cr-button-wide">
              <span class="a-button-inner">
                <a href="#" class="a-button-text">Write a customer review</a>
              </span>
            </span>
          </div>
          <div class="clearfix">
            <div class="float-left">
              <hr class="mt-4 a-spacing-large" />
            </div>
          </div>
        </div>
        
          <div class="cr-lighthut">
            <h3>Read reviews that mention</h3>
            <div class="cr-lighthouse-terms">
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">jeff bezos</span>
                </a>
              </span>
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">everything store</span>
                </a>
              </span>
              
            </div>
          </div>
          <div class="cr-widget-focalreviews">
            <div class="card-padding">
              <div class="review-header">
                <h3>
                  <span class="a-size-base">Showing 1-8 of 1,354 reviews</span>
                </h3>
              </div>
              <div class="review-sort-type">
                <span class="a-dropdown-container">
                  <span class="a-button a-button-dropdown">
                    <span class="a-button-inner">
                      <span class="a-button-text">
                        <span class="a-dropdown-prompt">Top Reviews</span>
                      </span>
                      <i class="a-icon a-icon-dropdown"></i>
                    </span>
                  </span>
                </span>
              </div>

              <!-- Reviews -->
              <div class="review-body" v-for="review in reviews" :key="review._id">
                <div class="genome-widget">
                  <a href="#">
                    <div class="profile-avatar">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"
                      />
                    </div>
                    <!-- Review Owner -->
                    <div class="profile-content">
                      <span class="a-profile-name">{{review.user.name}}</span>
                    </div>
                  </a>
                </div>
                <div class="a-row">
                  <!-- Review Star -->
                  <a href="#">
                    <i class="fas fa-star" v-for="i in review.rating" :key="i"></i>
                  </a>
                  <span class="a-letter-space"></span>
                  <!-- Review Headline -->
                  <a href="#" class="review-title">{{review.headline}}</a>
                </div>
                <span class="review-date">June 28, 2016</span>
                <div class="review-data">
                  <span class="a-color-secondary">Format: Hardcover</span>
                  <div
                    style="width: 1px !important; height: 15px !important; background-color: #ddd; display: inline-block; margin: 0px 5px -3px 5px;"
                  ></div>
                  <span class="avp-badge a-color-state">Verified Purchase</span>
                </div>
                <!-- Review Body -->
                <div class="review-body">
                  <span>{{review.body}}</span>
                </div>
                <div class="review-comments">
                  <div class="a-spacing-small">
                    <span class="a-size-base a-color-tertiary">60 people found this helpful</span>
                  </div>
                  <div class="cr-helpful-button">
                    <span class="a-button-base">
                      <span class="a-button-inner">
                        <a href="#" class="a-button-text">
                          <div class="cr-helpful-text">Helpful</div>
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <!-- Reviews -->
            </div>
          </div>
          <div class="review-footer">
            <div class="a-row">
              <span class="a-button a-button-base writeReviewButton" id="a-autoid-15">
                <span class="a-button-inner">
                  <nuxt-link :to="`reviews/${hotel._id}`" class="a-button-text" role="button">Write a customer review</nuxt-link>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-0 col-sm-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["hotel","reviews"]
};
</script>