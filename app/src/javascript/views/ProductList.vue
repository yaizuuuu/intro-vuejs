<template>
  <div class="product-list">
    <h1>商品一覧</h1>
    <ul>
      <li
        v-for="{ id, name } in list"
        :key="id">
        <router-link :to="`/product/${id}`">{{ name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import products from "../api/products";

export default {
  beforeRouteEnter(to, from, next) {
    setTimeout(next, 1000);
  },
  name: "ProductList",
  computed: {
    list: () => products.fetch()
  }
};
</script>
