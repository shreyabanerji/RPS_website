<template>
    <main>
        <div class="container-fluid c-section">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-spacing-top-medium"></div>
                    <h2>Profile Page</h2>
                    <a href="#" @click="onLogout">Logout</a>
                    <form>
                        <!--Name-->
                        <div class="a-spacing-top-medium">
                            <label>Name:</label>
                            <label style="width:100px">{{$auth.$state.user.name}}</label>
                        </div>
                        <!--Email-->
                        <div class="a-spacing-top-medium">
                            <label>Email:</label>
                            <label style="width:100px">{{$auth.$state.user.email}}</label>
                        </div>
                        <!--Password-->
                          
                           
                
                        </form>
                        <br/>
                    </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </main>
    
</template>

<script>
export default {
    data(){
        return {
            name:"",
            email:"",
            password:""

        };
    },
    methods:{
        async onLogout(){
            await this.$auth.logout();
        }
    }
};
</script>
