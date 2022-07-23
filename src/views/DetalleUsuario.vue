<template>
  <div>
    <div class="container-fluid bg-success bg-opacity-75 mb-5">
      <div
        class="d-flex flex-column align-items-center justify-content-center"
        style="min-height: 200px"
      >
        <h3 class="display-4 font-weight-bold text-white">
          Posteos del Usuario
        </h3>
        <div class="d-inline-flex text-white">
          <h4 class="m-0">{{ usuarios[0].name }}</h4>
        </div>
      </div>
    </div>
    <div class="container mb-5">
      <div class="accordion" id="accordionExample"> 
        <div class="accordion-item" v-for="(post, i) in posts" :key="post.id">
          <h2 class="accordion-header colorAccord text-white" :id="`heading${post.id}`">
            <button
              class="accordion-button"
              :class="{ collapsed: i > 0 }"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapse${post.id}`"
              :aria-expanded="i === 0"
              :aria-controls="`collapse${post.id}`"
            >
              <i class="bi bi-chat-left-dots-fill"></i>&nbsp;&nbsp;{{ post.title }}
            </button>
          </h2>
          <div
            :id="`collapse${post.id}`"
            class="accordion-collapse collapse"
            :class="{ show: i === 0 }"
            :aria-labelledby="`heading${post.id}`"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {{ post.body }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DetalleUsuario-app",
  components: {},
  props: ["userId"],
  data() {
    return {
      posts: {},
      nombre: '   ',
      id: null,
    };
  },

  computed: {
    ...mapGetters(["usuarios"]),
  },

  async created() {
    try {
      this.id = this.userId;
      this.fetchUsuarios({ id: this.id });
      const responsePosts = await this.$http.get(
        `https://jsonplaceholder.typicode.com/users/${this.userId}/posts`
      );
      this.posts = responsePosts.data;
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
