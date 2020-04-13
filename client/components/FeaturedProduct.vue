<template>
    <div class=MainContent>
        <div class="unified_widget pageBanner">
            <h1>Recommended</h1>
            <br>
                    
                
            <div class="bx-root">
                <div class="row">
                    <div class="col-sm-5 text-center">
                        <div class="bx-root-image">
                            <img :src="recommendation.photo.data" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="col-sm-7 m-auto">
                        <div class="bx-root-dtls">
                            <div class="bx-root-heading">
                                {{recommendation.name}}
                            </div>
                        </div>
                    </div>

                <div/>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:["recommendation"]
}
</script>
