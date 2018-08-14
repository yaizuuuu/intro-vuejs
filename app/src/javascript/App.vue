<template>
  <div id="chapter8-44">
    <p>{{ message }}</p>
    <EditForm />

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/product">商品情報</router-link>
    </nav>

    <router-view/>
  </div>
</template>

<script>
import EditForm from "./component/EditForm.vue";

export default {
  name: "App",
  components: { EditForm },
  computed: {
    message() {
      return this.$store.getters.message;
    }
  }
};
</script>
