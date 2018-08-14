<template>
  <div id="chapter8-44">
    <p>{{ message }}</p>
    <EditForm/>

    <nav>
      <router-link
        to="/"
        tag="button"
        exact>Home
      </router-link>
      <router-link to="/product">商品情報</router-link>
      <router-link :to="{ path: '/product', query: { page: 1 } }">商品情報</router-link>
      <router-link :to="{ name: 'product', params: { id: 1 } }">商品情報</router-link>
      <router-link :to="{ path: '/product', params: { id: 1 } }">商品情報</router-link>
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

<style scoped lang="scss">
.router-link-active {
  background-color: #e25193;
}
</style>
