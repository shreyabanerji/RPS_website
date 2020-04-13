<template>
    <div class="registerPage">
        <br><br><br><br><br><br>
        <div class="container">
            <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <nuxt-link to="/" class="a-link-emphasis">
                    <div>Home</div>
                    </nuxt-link>
                    <form class="mt-4">
                        <div class="a-box a-spacing-extra-large">
                            <div class="a-box-inner">
                                <h1 class="a-spacing-small">Sign In</h1>
                               
                                <!--Email-->
                                <div class="a-row a-spacing-base">
                                    <label form="ap_customer_name" class="a-form-label">Email</label>
                                    <input type="email" 
                                    id="ap_email" 
                                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                                    v-model="email"/>

                                </div>
                                <!--Passowrd-->
                                <div class="a-row a-spacing-base">
                                    <label form="ap_customer_name" class="a-form-label" >Password</label>
                                    <input type="password" 
                                    id="ap_password" 
                                    v-model="password"
                                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"/>
                                </div>
                                <div class="a-alert-container">
                                    <div class="a-alert-content">Password must be atleast 6 characters</div>
                                </div>
                                <div class="a-row a-spacing-extra-large mb-4">
                                    <span class="a-button-primary">
                                        <span class="a-button-inner">
                                            <span class="a-button-text" @click="onLogin">Continue</span>
                                        </span>
                                    </span>
                                </div>
                                <div class="a-row">
                                    <b>
                                        Don't have an account?
                                        <nuxt-link to="/signup" class="a-link-emphasis">Sign up</nuxt-link>
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
    middleware:"auth",
    auth:"guest",
    layout:"none",
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        
        async onLogin(){
            //const axios = require('axios');
            
            try
            {
                   //console.log("in if statement")
                    this.$auth.loginWith("local",{
                        data:{
                            email:this.email,
                            password:this.password
                        }
                    });
                    //console.log("before push");
                    this.$router.push("/");
                    //console.log("after push");
                
            }
            catch(err){
                console.log(err)
            }
        }
    }
}
</script>
