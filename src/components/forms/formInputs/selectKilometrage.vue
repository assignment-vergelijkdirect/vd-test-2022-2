<template>
  <div class="form-floating mb-3">
    <!-- <Field
            type="text"
            class="form-control"
            id="Kilometrage"
            placeholder="Kilometerstand"
            v-model="carDetails.kilometrage"
            name="Kilometrage"
          />
          <ErrorMessage class="alert alert-warning py-0 my-5" role="alert" name="Kilometrage" />

          <label for="Kilometrage">Kilometerstand</label> -->
    <select
      class="form-select"
      id="Kilometrage"
      aria-label="Default select example"
      @option="$emit('update:claimFreeValue', $event.target.value)"
    >
      <option :value="1">0 t/m 7500 KM</option>
      <option :value="2" selected>7501 t/m 10000 KM</option>
      <option :value="4">10001 t/m 12000 KM</option>
      <option :value="5">12001 t/m 15000 KM</option>
      <option :value="6">15000 t/m 20000 KM</option>
      <option :value="7">20001 t/m 25000 KM</option>
      <option :value="8">25001 t/m 30000 KM</option>
      <option :value="9">30001 t/m 90000 KM</option>
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

  validateLicence(value: string): any {
    // if the field is empty
    if (!value) {
      return "This field is required";
    }
    // if the field is not a valid email
    const regex = /^[A-Z0-9]*$/;
    if (!regex.test(value)) {
      return "This field must be a valid format";
    }
    // All is good
    return true;
  }
}
</script>

<style scoped>
.vd-form {
  width: 70%;
}

@media only screen and (max-width: 768px) {
  .vd-form {
    width: 100%;
  }
}

.btn {
  background: #0cbe3b;
  text-align: center;
  padding: 10px 10px;
  font-weight: 600;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.1s ease;
}

.btn:hover {
  background: #0ed642;
}
</style>
