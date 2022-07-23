import Vue from 'vue'
import Vuex from 'vuex'
import http  from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios:[],
    posts: [],
  },
  getters: {
    usuarios(state){
      return state.usuarios
    },
    posts(state){
      return state.posts
    },
  },
  mutations: {
    setUsuarios(state,value){
      state.usuarios = value
    },
    setPosts(state,value){
      state.posts = value
    },
  },
  actions: {
    async fetchUsuarios({commit},parametros={}){
      try {
        const response = await http.get(
          "https://jsonplaceholder.typicode.com/users",
          {params: parametros}
        );
        commit('setUsuarios',response.data)  
      } catch (error) {
        console.log(error) 
      }
    },
    async fetchPosts({commit},parametros={}){
      try {
        const response = await http.get(
          "https://jsonplaceholder.typicode.com/posts",
          {params: parametros}
        );
        commit('setPosts',response.data)  
      } catch (error) {
        console.log(error) 
      }
    }
  }
})
