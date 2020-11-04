<template>

 <div class="c1 container p-3 mt-3 ">

    <div class="c2 container" id="im"  style="display: block">
       <div class="row">
       <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"  v-for="imagen in imagenes" :key="imagen.id"> 
      
           <div class="card m-1">  
            <img :src="'http://localhost:1337'+imagen.img.url" alt="" id="image" class="card-img-top" >
              <div class="card-body">  

<!--                   <p>{{ imagen.user[0].username}}  </p> -->

               </div>
            </div>

       </div>

       </div>
    </div>

  </div> 
</template>
<script>
import axios from 'axios'; 

export default {
    name: "mostrar",
    data(){
        return{
            imagenes: [],
        }
    },

    mounted() {

        axios.get("http://localhost:1337/imagenes")
        .then((res) => {
            this.imagenes = res.data;
        });
         
    },
    
}
</script>