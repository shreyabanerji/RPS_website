<template>
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
            <ul class="s-result-list">
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
                            <img src="/img/hotel_1.jpg" class="img-fluid"/><!--product.photo-->
                          </a>
                      </div>
                      <div class="col-sm-9">
                        <div class="a-row-spacing-small">
                          <!--Date-->
                          <a href="#" class="a-link-normal">
                            <h2 class="a-size-medium">
                              RPS HOTELS
                              <span class="a-letter-space"></span>
                              <span class="a-letter-space"></span>
                              <span class="a-size-small a-color-secondary">Apr 3,2020</span>
                            </h2>
                          </a>
                        </div>
                        <!--City-->
                        <div class="a-row a-spacing-small">
                          City
                        </div>
                        <!--Price-->
                        <div class="a-row-spacing-none">
                          <a href="#" class="a-link-normal a-text-normal">
                          <span class="a-offscreen">$99</span>
                            <span class="a-color-base sx-zero-spacing">
                            <span class="sx-price sx-price-large">
                              <sup class="sx-price-company">$</sup>
                              <span class="sx-price-whole">99</span>
                              <sup class="sx-price-fractional">00</sup>
                            </span>
                          </span>
                          </a>
                          <span class="a-letter-space"></span>
                          <span class="a-size-base-plus a-color-secondary a-text-strike">$28</span>

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
  export default {
    componenets:{
      FeaturedProduct
    }
  };
  </script>
