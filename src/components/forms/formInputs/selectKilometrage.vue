<template>
  <div class="form-floating mb-3">
    <select
      class="form-select"
      id="Kilometrage"
      name="Kilometrage"
      aria-label="Default select example"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option :value="1">0 t/m 7500 KM</option>
      <option :value="2" selected>7501 t/m 10000 KM</option>
      <option :value="3">10001 t/m 12000 KM</option>
      <option :value="4">12001 t/m 15000 KM</option>
      <option :value="5">15000 t/m 20000 KM</option>
      <option :value="6">20001 t/m 25000 KM</option>
      <option :value="7">25001 t/m 30000 KM</option>
      <option :value="8">30001 t/m 90000 KM</option>
    </select>
    <label for="Kilometrage">Kilometerstand</label>
  </div>
  <!-- End LicensePlate -->
</template>

<script lang="ts">
import { Field, ErrorMessage } from "vee-validate";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Field,
    ErrorMessage,
  },
})
export default class SelectKilometrage extends Vue {
  created(): void {
    console.log("Component SelectKilometrage created");
  }
}
</script>

<style scoped></style>
