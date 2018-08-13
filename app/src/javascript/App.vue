<template>
  <div id="chapter8-44">
    <p>{{ message }}</p>
    <EditForm />
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
