<template>
  <div class="form-floating mb-3">
    <Field
      type="text"
      class="form-control"
      id="HouseAdd"
      placeholder="Toevoeging huisnummer"
      name="HouseAdd"
      :rules="validateHouseAdd"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <ErrorMessage class="alert alert-warning py-0 my-5" role="alert" name="HouseAdd" />
    <label for="HouseAdd">Toevoeging huisnummer</label>
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
export default class InputHouseAdd extends Vue {
  created(): void {
    console.log("Component InputHouseAdd created");
  }

  validateHouseAdd(value: string): any {
    // if the field is empty
    if (!value) {
      return "This field is required";
    }
    // if the field is not a valid email
    const regex = /^[A-Z0-9]*$/;
    if (!regex.test(value)) {
      return "This field only allows numbers and/or capital letters.";
    }
    // if (value.length !== 6) {
    //   return "This field must have 6 digits.";
    // }
    // All is good
    return true;
  }
}
</script>

<style scoped></style>
