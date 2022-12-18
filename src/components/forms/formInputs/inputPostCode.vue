<template>
  <div class="form-floating mb-3">
    <Field
      type="text"
      maxlength="6"
      class="form-control"
      id="Zipcode"
      placeholder="Postcode"
      name="Zipcode"
      :rules="validateZipCode"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <ErrorMessage class="alert alert-warning py-0 my-5" role="alert" name="Zipcode" />
    <label for="Postcode">Postcode</label>
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
export default class InputPostCode extends Vue {
  created(): void {
    console.log("Component InputPostCode created");
  }

  validateZipCode(value: string): any {
    // if the field is empty
    if (!value) {
      return "This field is required";
    }
    // if the field is not a valid email
    const regex = /^[\d]{4}[A-Z]{2}$/;
    if (!regex.test(value)) {
      return "This field must have 6 digits and only allows numbers and/or capital letters. (Ex: 1052HM)";
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
