<template>
    <div class="registerPage">
        <br><br><br><br><br><br>
        <div class="container">
            <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <a href="/" class="a-link-emphasis">
                    <div>Home</div>
                    </a>
                    <form class="mt-4">
                        <div class="a-box a-spacing-extra-large">
                            <div class="a-box-inner">
                                <h1 class="a-spacing-small">Create Account</h1>
                                <!--Your name-->
                                <div class="a-row a-spacing-base">
                                    <label form="ap_customer_name" class="a-form-label">Your name</label>
                                    <input type="text" 
                                    id="ap_customer_name" 
                                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                                    v-model="name"/>
                                </div>
                                <!--Email-->
                                <div class="a-row a-spacing-base">
                                    <label form="ap_customer_name" class="a-form-label">Email</label>
                                    <input type="email" 
                                    id="ap_email" 
                                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                                    v-model="email"/>

                                </div>
                                <!--password-->
                                <div class="a-row a-spacing-base">
                                    <label form="ap_customer_name" class="a-form-label" >Password</label>
                                    <input type="password" 
                                    id="ap_password" 
                                    v-model="password"
                                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"/>
                                </div>
                               
                                <div class="a-row a-spacing-extra-large mb-4">
                                    <span class="a-button-primary">
                                        <span class="a-button-inner">
                                            
                                            <span class="a-button-text" @click="OnSignup">Create your account</span>
                                        
                                        </span>
                                    </span>
                                </div>
                                <div class="a-row">
                                    <b>
                                        
                                        <nuxt-link to="/login" class="a-link-emphasis">Sign in</nuxt-link>
                                        if you already have an account.
                                    </b>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    layout:"none",
    middleware:"auth",
    auth:"guest",
    data(){
        return{
            name:"",
            email:"",
            password:""
        }
    },
    methods:{
        
        async OnSignup(){
            //const axios = require('axios');
            try{
                let data={
                    name:this.name,
                    email:this.email,
                    password:this.password
                }
                let response=await axios.post("/api/auth/signup",data);
                //console.log(response);
                if(response.status=200){
                    this.$auth.loginWith("local",{
                        data:{
                            email:this.email,
                            password:this.password
                        }
                    });
                    this.$router.go({path:'/', force: true});
                
                }
            }
            catch(err){
                console.log(err)
            }
        }
    }
}
</script>
