<template>
<div>
    <header class="nav-opt-sprite nav-locate-us nav-lang-en nav-ssl nav-unrec">
        <div class="container-fluid desktop-nav">
            <div class="row">
                <!--Logo-->
                <div class="col-sm-2">
                    <p style="font-family:Times;font-size:350%;color:white">R.P.S</p>
                </div>
                <div class="col-sm-4">
                    
                </div>
                <div class="col-sm-6"></div>
            </div>
            <div class="row">
                <!--
                
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 pl-2">
                    <div class="nav-global-location">
                        <nuxt-link to="/address" class="nav-a nav-a-2">
                            <div class="nav-sprite" id="nav-packard-glow-loc-icon"></div>
                            <div id="glow-ingress-block">
                                <span class="nav-line-1" id="glow-ingress-line1">Search in</span>
                                <span class="nav-line-2" id="glow-ingress-line2">Delhi</span>
                            </div>
                        </nuxt-link>
                    </div>
                </div>-->
               
                <div class="col-xl-6 col-lg-5 col-md-4 col-sm-6 pl-0">
                    <div class="nav-fill">
                        <div class="nav-shop">
                            <a href="/" class="nav-a nav-a-2 nav-single-row-link">
                                <span class="nav-line-1">
                                                Home
                              
                                </span>
                            </a>
                        </div>
                        <div class="nav-xshop-container">
                            <div class="nav-xshop">
                                <template v-if="$auth.$state.loggedIn">
                            <nuxt-link  to="/profile" 
                                        class="nav-a nav-a-2"  
                                        id="nav-link-accountList" 
                                        tabindex="0">
                                <span class="nav-line-1">Hello,</span>
                                    <span class="nav-line-2">
                                    {{$auth.$state.user.name}}
                                    </span>
                            </nuxt-link>
                            </template>
                            <template v-else>
                                <nuxt-link to="/signup" 
                                            class="nav-a nav-a-2"  
                                            id="nav-link-accountList" 
                                            tabindex="0">
                                
                                 <span style="color:white">
                                        Hello, Sign in
                                </span>
                                  
                        
                                </nuxt-link>
                            </template>
                            </div>
                        </div>
                    </div>
                </div>
            
                <!--Accounts and booking-->
                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-4 p-0">
                    <div class="nav-tools">
                        <!--
                        <a href="#" id="icp-nav-flyout" class="nav-a nav-a-2 icp-link-style-2">
                            <span class="icp-nav-link-inner">
                                <span class="nav-line-1">
                                    <span class="icp-nav-globe-img-2"></span>
                                    <span class="icp-nav-language">EN</span>
                                </span>
                                <span class="nav-line-2">
                                    <span class="nav-icon nav-arrow" style="visibility :visible"></span>
                                </span>
                            </span>
                        </a>-->
                
                        <!--if user is logged in-->
                            
                            <!--
                            <nuxt-link to="/orders" class="nav-a nav-a-2 nav-single-row-link">
                                <span class="nav-line-1"></span>
                                <span class="nav-line-2">Orders</span>
                            </nuxt-link>
                            <nuxt-link to="/orders" class="nav-a nav-a-2 nav-single-row-link">
                                <span class="nav-line-1"></span>
                                <span class="nav-line-2">About</span>
                            </nuxt-link>
                            <nuxt-link to="/cart" class="nav-a nav-a-2" id="nav-cart">
                                <span aria-hidden="true" class="nav-line-1"></span>
                                <span aria-hidden="true" class="nav-line-2">Cart</span>

                            </nuxt-link> 
                       -->
                    </div>
              
                </div>
            </div>
        </div>
    </header>
</div>
</template>

<script>

export default {
  
}
</script>
