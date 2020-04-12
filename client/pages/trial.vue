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
        </div>
        <video width="320" height="240" controls>
                <source src="movie.mp4" type="video/mp4" id="vid">
  
        </video>
        </div>
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
  import FeaturedProduct from "~/components/FeaturedProduct";
  import axios from 'axios';
  export default {
    componenets:{
      FeaturedProduct
    },
    methods:{
        async getVideo(res,req)
        {

            document.getElementbyId("vid").src="http://localhost:3000/video.mp4"
        }
    },
 
     async asyncData(){
      try
      {
        let response=await axios.get("http://localhost:3000/api/hotels");
        setTimeout(getVideo,4000)
        return {
          hotels:response.data.hotels
      }
      setTimeout(getVideo,4000)
      }
      catch(err){
        console.log(err);
      }
    
    }
  
  };
  </script>
<!DOCTYPE HTML>
<html>
<head>
<title>Full Secondary Column, 1/3 x 1/3 x 1/3 Main Column.</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<link rel="stylesheet" type="text/css" href="styles.css" >
<script>
		function init(){
		
		xhr = new XMLHttpRequest();	
			if(xhr)
			{
				xhr.onreadystatechange = getContent;
				xhr.open("GET", "content.txt", true);
				xhr.send(null);
			}	
		}
		function getContent(){
		
		if(xhr.readyState=="4"&&xhr.status==200){
				var arr=(xhr.responseText).split(";");
				document.getElementById("secondary").innerHTML=arr[0];
				document.getElementById("logo").innerHTML=arr[3];
				document.getElementById("links").innerHTML=arr[3];
				document.getElementById("audio").innerHTML=arr[3];
				document.getElementById("picture").innerHTML=arr[3]; 
				setTimeout(getPic, 4000);	
		  }
		
		
		}
		function getPic(){
		
			xhr.open("GET", "image.txt", true);
			xhr.onreadystatechange = showImg;
			xhr.send(null);
		
		
		}
		function showImg()
		{
			if(xhr.readyState == 4 && xhr.status == 200)
			{
				document.getElementById("picture").innerHTML = xhr.responseText;	
			}
			setTimeout(getLinks,2000);
			
		}
		function getLinks(){
		
				xhr.onreadystatechange=showLinks;
				xhr.open("GET","links.txt",true);
				xhr.send();
		}
		function showLinks(){
		
				if(xhr.readyState==4 && xhr.status==200){
					document.getElementById("links").innerHTML=xhr.responseText
					//TODO:
					setTimeout(getAudio,4000);
				}
		
		
		}
		//TODO:Write code to fetch audio
		function getAudio(){}


</script>
