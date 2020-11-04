<template>
    
     <!-- <input type="button" id="f2" class="bt m-2"  @click="ocformulario()" value="OCULTAR FORMULARIO " style="display: block">
     <input type="button" id="f1" class="bt m-2" @click="verformulario()" value="VER FORMULARIO " style="display: none" > -->

    <div  class="container p-4 " >
       
          <label for=""><p class="p1">selecciona una imagen</p> </label> <br>
          <div class="d-flex justify-content-center">
                <div class="b2 row ">
                  <input type="file" ref="file" id="imagen" @change="cambiarArchivo" placeholder="" accept="image/jpeg, image/png, image/jpg, image/gif" >
                </div>
          </div>
           
           <h5>Cateoria del articulo</h5>
          <!-- <div class="row">   --> 
            <div id="add-blog">
              <form>
                <div id="checkboxes">
                  <input type="checkbox" v-model="hotel" value=1 >
                  <label for=""> hotel</label><br>
                  <input type="checkbox" v-model="restaurante" value=2 >
                  <label for=""> restaurante</label><br>
                  <input type="checkbox" v-model="bares" value=3 >
                  <label for=""> bares </label><br>
                  <input type="checkbox" v-model="heladeria" value=4 >
                  <label for=""> heladeria</label><br>
                  <input type="checkbox" v-model="ropa" value=5 >
                  <label for=""> ropa</label>
              </div>
              </form>
              
            </div>
              
         <!--  </div> -->
          <input type="button" @click="guardar" class="bt m-4 p-1 border-dark" value="Guardar Imagen"> <br>


    </div>
        
</template>

<script>
import axios from 'axios';

export default {
  name: 'agregar',

    data() {
    return{
      blog:{
          categories: []
           },
      categorias: [],
      imagen: null,
      
    }
    },

 mounted() {
        this.traerCateg()
    },
  methods: {

          

          traerCateg(){
            axios.get("http://localhost:1337/categorias")
            .then((response)=>{
            this.categorias =  response.data 
            console.log(this.categorias)
            
           /*  console.log(this.categorias) */
            });
            
        },

      cambiarArchivo(e){
        this.imagen = e.target.files[0]
        console.log(e.target.files[0])
    },

    guardar(){

      let form = new FormData()
      form.append('files.img', this.imagen)
      form.append('data', JSON.stringify({
        "categorias":"0"
      })),
      
      axios.post("http://localhost:1337/imagenes", form, {
        headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      }).then((response) => {
               /*  console.log(this.imagen) */
                console.log('se agrago una imagen')
             });  
  },
  },

};
</script>

<style >

#checkboxes input{
  display: inline-block;
  margin-right: 10px;

}
#checkboxes label{
  display: inline-block;
}
</style>