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
      <router-link to="/product">商品一覧</router-link>
      <!-- queryはパラを付与する -->
      <!--<router-link :to="{ path: '/product', query: { page: 1 } }">商品情報</router-link>-->
      <!-- paramsで受け取る場合はnameを指定しないと受け取れない -->
      <router-link :to="{ name: 'product', params: { id: 1 } }">商品情報</router-link>
      <!-- つまりこれは受け取れない -->
      <!--<router-link :to="{ path: '/product', params: { id: 1 } }">商品情報</router-link>-->
    </nav>

    <transition name="view">
      <router-view/>
    </transition>
    <LoadingOverlay/>
  </div>
</template>

<script>
import EditForm from "./component/EditForm.vue";
import LoadingOverlay from "./component/LoadingOverlay.vue";

export default {
  name: "App",
  components: { EditForm, LoadingOverlay },
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

.view {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s;
  }
  &-leave-active {
    position: absolute;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
