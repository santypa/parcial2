<template>
    
     <!-- <input type="button" id="f2" class="bt m-2"  @click="ocformulario()" value="OCULTAR FORMULARIO " style="display: block">
     <input type="button" id="f1" class="bt m-2" @click="verformulario()" value="VER FORMULARIO " style="display: none" > -->

    <div   class="c2 container p-3 " >
    

        <label for="" class="imge" id="bi" style="display: none"></label>
       

    <form id="app" style="display: block"
    class="form-orizontal"
    action="https://api.jeisontech.dev/api/images/"
    enctype="multipart/form-data"
    method="post"
    >
          <label for=""><p class="p1">selecciona una imagen</p> </label> <br>
              <div class="b2 row justify-content-center">
                   <input type="file" name="url" id="name"  class="bg-warnig" accept="image/jpeg, image/png, image/jpg, image/gif" value="" >
              </div>
          <input type="submit"  class="bt m-2 border-dark" value="Guardar Imagen">
    </form>

    </div>
 
 
</template>

<script>

export default {
  name: 'crear',

    data() {
    return{
      archivo: []
    }
  },

  methods: {
    
    verformulario(){
      document.getElementById("f1").style.display="none"
      document.getElementById("f2").style.display="block"
      document.getElementById("bi").style.display="none"
    },

    ocformulario(){
      document.getElementById("f1").style.display="block"
      document.getElementById("f2").style.display="none"
      document.getElementById("bi").style.display="block"
    } 


  },

};
</script>
