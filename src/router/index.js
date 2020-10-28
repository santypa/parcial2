import { createRouter, createWebHistory } from 'vue-router'
/* import Home from '@/views/Home.vue'; */
import registro from '@/views/registro.vue'; 
import ingreso from '@/views/ingreso.vue';
import mostrar from '@/views/imagenes/mostrar.vue'
import inicio from '@/views/inicio.vue'
import productos from '@/views/imagenes/misproductos'
import imagenes from '@/views/imagenes/verimagenes'
import agregar from '@/views/imagenes/agregar.vue'

const routes = [
 

  {
    path:'/imagenes',
   name: 'imagenes',
   component: imagenes
  },
  {
    path:'/productos',
   name: 'productos',
   component: productos,
   meta:{
    requireAuth: true 
  } 
  },
    {
      path:'/',
     name: 'inicio',
     component: inicio
    },

  {
     path:'/ingreso',
     name: 'ingreso',
     component: ingreso
  },
  {
    path:'/agregar',
    name: 'agregar',
    component: agregar,
    meta:{
      requireAuth: true 
    } 
 },
  {
    path:'/registro',
    name: 'registro',
    component: registro
 },

  {
    path:'/mostrar',
    name:'mostrar',
    component: mostrar,
    meta:{
      requireAuth: true 
    } 
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.requireAuth)){
    //la ruta requiere autenticacion de ingreso
    const token = localStorage.getItem('token');
    
    if(!token){
      next('/')
    }
  }
  next()

})
export default router
