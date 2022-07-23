import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetalleUsuario from '../views/DetalleUsuario.vue'
// import Favoritos from '../views/Favoritos.vue'
// import Producto from '../views/Producto.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:userId',
    name: 'DetalleUsuario',
    props: true,
    component: DetalleUsuario
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
