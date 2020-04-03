<template>
<main>
    <div class="container">
        <div class="row">
            <div class="col-sm-3"></div>
                <div class="col-sm-6"></div>
                <div class="a-section">
                    <div class="a-spacing-top-medium"></div>
                <h2 style="text-align: center">Add a new hotel</h2>
                <form>
                    <!--city dropdown-->
                    <div class="a-spacing-top-medium">
                        <label>City</label>
                        <select class="a-select-option" v-model="cityID">
                            <option v-for="city in cities" 
                            :value="city._id" 
                            :key="city._id">{{city.name}}
                            </option>
                        </select>
                    </div>
                    <!--owner dropdown
                    <div class="a-spacing-top-medium">
                        <label>Owner</label>
                        <select class="a-select-option" v-model="ownerID">
                            <option v-for="owner in owners" 
                            :value="owner._id" 
                            :key="owner._id">{{owner.name}}
                            </option>
                        </select>
                    </div>-->

                    <!--Name Dropwdown-->
                    <div class="a-spacing-top-medium">
                        <label style="margin-bottom: 0px;">Name</label>
                        <input type="text" class="a-input-text" style="width: 100%" v-model="title"/>
                    </div>

                    <!--Address dropdown-->
                    <div class="a-spacing-top-medium">
                        <label style="margin-bottom: 0px;">Address</label>
                        <input type="text" class="a-input-text" style="width: 100%" v-model="price"/>
                    </div>
                    <!--Description-->
                    <div class="a-spacing-top-medium">
                        <label style="margin-bottom: 0px;">Description</label>
                        <textarea placeholder="Provide detais such as hotel description" 
                        style="width:100%"
                        v-model="description"></textarea>
                    </div>

                    <!--image upload-->
                    <div class="a-spacing-top-medium">
                        <label style="margin-bottom: 0px;">Title</label>
                        <div class="a-row a-spacing-top-medium">
                            <label class="choosefile-button">
                                <i class="fal fa-plus"></i>
                                <input type="file"/><!--@change="onFileSelected"/>-->
                                <p style ="margin-top:-70px">Something</p>
                            </label>
                        </div>
                    </div>
                
                    <div class="a-spacing-top-large">
                        <hr>
                        <span class="a-button-register">
                            <span class="a-button-inner">
                                <span class="a-button-text">Add a hotel</span>
                            </span>
                        </span>
                    </div>
                </form>
                </div>
            </div>
        </div>
        <div class="col-sm-3"></div>
        </div>

        
    </div>
</main>
</template>
<script>
import axios from 'axios'
export default{
    async asyncData(){
        try{
        let cities=axios.get("http://localhost:3000/api/cities");
        //let owners=axios.get("http://localhost:3000/api/owners");
        const cityResponse=await cities;
        console.log(cityResponse.data);
        //console.log(ownerResponse.data);
        return {
            cities:cityResponse.data.cities,
            
        };
        }
        catch(err){
            console.log(err);
        }
    },
    //process on the client data
    data(){
        return {
            cityID:null,
            title:"",
            price:0,
            description:"",
            selectedFile:null,
            //filename:""

        };
    },
    methods:{
        onFileSelectedFile(event){
            this.selectedFile=event.target.files[0];
            console.log(this.selectedFile);
            //this.fileName=event.target.files[0].name;
        }
    },
    async onAddhotel(){
        let data=new FormData();
        data.append("name",this.title);
        data.append("price",this.price);
        data.append("description",this.description);
        //data.append('ownerID',this.ownerID);
        data.append('cityID',this.cityID);
        data.append('photo',this.selectedFile);

        let result=await this.axios.post(
        "http://localhost:3000/api/hotels",
        data);
        this.$router.push("/");

    }
}
</script>