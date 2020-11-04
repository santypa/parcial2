<template>
 <nav class="navbar navbar-expand-lg navbar-light ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

   <img class="m-2" src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" alt="" style="width:auto; height: auto;">
  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
   
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <t v-for="categ in categorias" :key="categ.id" >
            <li class="nav-item active">
                 <a class="btn nav-link" href="/">{{categ.categ}}<span class="sr-only">(current)</span></a>
            </li>   
      </t>
      <!-- <li class="nav-item active"  style="margin-left: 10px">
          <a class="btn nav-link bg-dark text-white"  href="/registro">Ingresar<span class="sr-only">(current)</span></a>
      </li>  -->

    <!-- //////////////////////////////////////// block //// -->
      <div class="btn-group" id="ing" style="display: block">
      <button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Ingresar
      </button>
        <form class="dropdown-menu p-4" @submit.prevent="login" >
      <div class="form-group">
          <label for="email">Email </label>
           <input type="email" v-model="email"  class="form-control" id="email" placeholder="email@example.com">
       </div>
      <div class="form-group">
         <label for="password">Password</label>
         <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
       </div>
      <div  v-if="error" class="bg-primary" >
         <samp >las credenciales no son coreectas</samp>
      </div>
         <button type="submit"  >Iniciar Sesion</button>
      </form>
      
      </div>
      
      <!-- /////////////////////////////////////////////// -->

      
      <div class="btn-group" id="mi" style="display: none">
      <button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Mi Cuenta
      </button>
      <div class="dropdown-menu">
           
            <a class="dropdown-item" href="/productos">Ver Mis productos</a>
            <a class="dropdown-item" href="/agregar">Agregar Producto</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="mostraringreso()" >cerrar secion</a>
      </div>
      </div>
     
     <!-- ///////////////////////////////////////////////// -->
      <li class="nav-item active" style="margin-left: 10px " >
                 <a class="btn nav-link bg-dark text-white"  href="/ingreso">Registrarse<span class="sr-only">(current)</span></a>
      </li> 

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Buscar producto..." aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  </div>
</nav>
 <!--  
<Verimg  :imagenes="imagenes"/> 
 -->
  <router-view/>
</template>

<script>

import axios from 'axios'; 
/* 
import { computed } from 'vue';
import Verimg from '@/components/verimagen.vue' */



export default {
  
    name: "categorias",
    /* components: { Verimg }, */
    data(){
        return{
            categorias: [],
            cat:{},
            imagenes: [], 
            usuario:[],
            email: '',
            password: '',
            error: false,
        };
    },

    mounted() {
      
        this.traerCateg()
        this.consulta()
    },

    methods: {
      consulta(){

        console.log(localStorage.getItem('token'))
        if (localStorage.getItem('token')==null) {
          document.getElementById("ing").style.display="block"
          document.getElementById("mi").style.display="none"
        } else {
          document.getElementById("mi").style.display="block"
          document.getElementById("ing").style.display="none"
        }
          
      },
       login(){
      this.error=false
      fetch('http://localhost:1337/auth/local',{
        method: "POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({
          identifier: this.email,
	        password: this.password,
        }),
      }).then(async (response)=>{
          if(!response.ok){
            throw await response.json()
          }
          document.getElementById("mi").style.display="block"
          document.getElementById("ing").style.display="none"
          return response.json()
      })
      .then((data) => {
          localStorage.setItem('token', data.jwt)
          localStorage.setItem('user', JSON.stringify(data.user))  
          this.$router.push('/mostrar')
          
     })
      .catch((err)=> {
          this.error = true
      });
    },

       traerCateg(){
            axios.get("http://localhost:1337/categorias")
            .then((response)=>{
            this.categorias =  response.data 
            console.log(this.categorias)
            });
            
        },
        
        mostraringreso(){
          document.getElementById("ing").style.display="block"
           document.getElementById("mi").style.display="none"
           localStorage.removeItem('token'),
           localStorage.removeItem('user'),
           this.$router.push('/mostrar')
        },

        
    }
};
</script>

<style>
.navbar{
  background: rgb(155, 235, 235);
  
}

</style>

