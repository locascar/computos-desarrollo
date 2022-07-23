<template>
    <div class="card border-0 bg-light shadow-sm pb-2">
    <img class="img-fluid rounded-circle mr-3 mt-1"
    src="../assets/img/muestraUno.png" alt="" style="width: 50%;margin: 0px auto;"/>
    <div class="card-body text-center">
        <h4 class="card-title">{{ usuario.name }}</h4>
        <p class="card-text">
        {{ usuario.email }}
        </p>
    </div>
    <div class="card-footer bg-transparent py-4 px-5">
        <div class="row border-bottom">
        <div class="col-6 py-1 text-right border-right">
            <strong>Dirección</strong>
        </div>
        <div class="col-6 py-1">{{ usuario.address.street }}</div>
        </div>
        <div class="row border-bottom">
        <div class="col-6 py-1 text-right border-right">
            <strong>Ciudad</strong>
        </div>
        <div class="col-6 py-1">{{ usuario.address.city }}</div>
        </div>
        <div class="row border-bottom">
        <div class="col-6 py-1 text-right border-right">
            <strong>Sitio Web</strong>
        </div>
        <div class="col-6 py-1">{{usuario.website}}</div>
        </div>
    </div>
    <!-- <a href="" class="btn btn-primary px-4 mx-auto mb-4">Join Now</a> -->
    <router-link :to="`./posts/${usuario.id}`" class="btn btn-success px-4 mx-auto mb-4">
    Ver Posteos
    </router-link>
    </div>
</template>
<script>
export default {
  name: "cdIntegrantes-app",
  props: {
    usuario: {
      type: Object,
    },
  },
};
</script>