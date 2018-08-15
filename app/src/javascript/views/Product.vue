<template>
  <div
    v-if="item"
    key="product"
    class="product">
    <h1>商品情報</h1>
    <!-- routeから受け取ると密結合になる -->
    <!--<p>このページはID.{{ this.$route.params.id }}</p>-->
    <!-- routerがpropsのオプションをtrueにすることで疎結合になる -->
    <p>このページはID.{{ id }}</p>

    <dl class="product-table">
      <dt>商品名</dt>
      <dd>{{ item.name }}</dd>
      <dt>価格</dt>
      <dd>{{ item.price }}</dd>
      <dt>商品説明</dt>
      <dd>{{ item.content }}</dd>
    </dl>
  </div>
  <div
    v-else
    key="loading">商品情報を読み込んでいます</div>
</template>

<script>
import products from "../api/products";

export default {
  name: "Product",
  // routerがpropsのオプションをtrueにすることで疎結合になる
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      item: null
    };
  },
  watch: {
    id: {
      handler() {
        products.asyncFind(this.id, item => {
          this.item = item;
        });
      },
      immediate: true
    }
  }
};
</script>
