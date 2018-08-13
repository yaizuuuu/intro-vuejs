<template>
  <div class="edit-form">
    <input
      v-model="message"
      type="text">
  </div>
</template>

<script>
export default {
  name: "EditForm",
  computed: {
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("doUpdate", value);
      }
    }
  },
  methods: {
    doUpdate(event) {
      this.$store.dispatch("doUpdate", event.target.value);
    }
  }
};
</script>

<style scoped>
</style>
