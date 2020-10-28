<template>

  <Verimg  :imagenes="imagenes"/> 
</template>

<script>

import axios from 'axios'; 
import { computed } from 'vue';
import Verimg from '@/components/verimagen.vue'

export default {
    name: "/",
    components: { Verimg },
    data(){
      return{
        imagenes:[],
      }
    },
    mounted() {

        fetch ("http://localhost:1337/imagenes")
        .then((response) => response.json())
        .then((data) => {   
           this.imagenes = data;
          
        });
         
    },
}
</script>