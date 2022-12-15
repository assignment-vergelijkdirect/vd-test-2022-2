<template>
  <div class="card">
    <car-form />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CarForm from "@/components/forms/carForm.vue";

@Options({
  components: {
    CarForm,
  },
})
export default class Home extends Vue {}
</script>
<style scoped></style>
