<template>
  <div class="form-floating mb-3">
    <Field
      type="text"
      class="form-control"
      id="Housenumber"
      placeholder="Huisnummer"
      name="Housenumber"
      :rules="validateHouseNumber"
      :value="houseNumberValue"
      @input="$emit('update:houseNumberValue', $event.target.value)"
    />
    <ErrorMessage class="alert alert-warning py-0 my-5" role="alert" name="Housenumber" />

    <label for="Housenumber">Huisnummer</label>
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
export default class InputHouseNumber extends Vue {
  public houseNumberValue!: string;

  created(): void {
    console.log("Component ImputLicence created");
  }

  validateHouseNumber(value: string): any {
    // if the field is empty
    if (!value) {
      return "This field is required";
    }
    // if the field is not a valid email
    const regex = /^[0-9]*$/;
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
