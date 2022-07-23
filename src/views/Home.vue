<template>
  <div>
    <div class="container-fluid bg-success bg-opacity-75 mb-5">
      <div
        class="d-flex flex-column align-items-center justify-content-center"
        style="min-height: 200px"
      >
        <h2 class="display-4 font-weight-bold text-white">Usuarios</h2>
      </div>
    </div>
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 mb-5"
            v-for="(usuario, index) in usuarios"
            :key="index"
          >
            <cdIntegrantes :usuario="usuario"></cdIntegrantes>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import cdIntegrantes from "../components/cdIntegrantes.vue";

export default {
  name: "home-app",
  components: { cdIntegrantes },
  data() {
    return {
      categorias: "Hola",
    };
  },

  computed: {
    ...mapGetters(["usuarios"]),
  },
  async created() {
    try {
      this.fetchUsuarios();
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapActions(["fetchUsuarios"]),
  },
};
</script>

<style></style>
