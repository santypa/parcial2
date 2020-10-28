<template>
 

    <div>
      <h1>Iniciar sesion</h1>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email</label>
          <input type="email" v-model="email" id="email">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" v-model="password" id="password">
        </div>

          <div  v-if="error" class="bg-primary" >
            <samp >Incorrecto intente de nuevo</samp>
          </div>
          <button type="submit" >Iniciar Sesion</button>
      </form>
    </div>

</template>

<script>
export default {
  name: 'registro',
    data(){
      return{
        email: '',
        password: '',
        error: false,
      }
    },

  methods: {
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
          return response.json()
      })
      .then((data) => {
          localStorage.setItem('token', data.jwt)
          localStorage.setItem('user', JSON.stringify(data.user))
          this.$router.push('/')
            
     })
      .catch((err)=> {
          this.error = true
      });
    }
  }

}
</script>

