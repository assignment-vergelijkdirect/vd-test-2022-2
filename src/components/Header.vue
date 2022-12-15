<template>
  <div class="text-center my-3">
    <h4>Cat 🐱 Facts</h4>
    <div class="d-flex justify-content-center">
      <HeaderLink to="/" exact>Home</HeaderLink>
      <HeaderLink to="/results">List</HeaderLink>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeaderLink from "./HeaderLink.vue";
@Options({
  components: {
    HeaderLink,
  },
})
export default class Results extends Vue {}
</script>
