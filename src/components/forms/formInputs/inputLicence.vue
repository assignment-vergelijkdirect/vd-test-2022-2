<template>
  <div class="form-floating mb-3">
    <Field
      type="text"
      maxlength="6"
      class="form-control"
      id="LicensePlate"
      placeholder="Nummerplaat"
      name="LicensePlate"
      :rules="validateLicence"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <ErrorMessage class="alert alert-warning py-0 my-5" role="alert" name="LicensePlate" />
    <label for="LicensePlate">Nummerplaat</label>
  </div>
  <!-- End LicensePlate -->
</template>

<script lang="ts">
import { Field, ErrorMessage } from "vee-validate";
import { Options, Vue } from "vue-class-component";
import HttpRequest from "@/plugin/services/httpRequest";

@Options({
  components: {
    Field,
    ErrorMessage,
  },
})
export default class InputLicence extends Vue {
  public validLicence!: boolean;
  public httpRequest: HttpRequest = new HttpRequest();

  created(): void {
    console.log("Component InputLicence created");
  }

  validateLicence(value: string): any {
    // if the field is empty
    if (!value) {
      return "This field is required";
    }
    // if the field is not a valid format
    const regex = /^[A-Z0-9]*$/;
    if (!regex.test(value)) {
      return "This field only allows numbers and/or capital letters.";
    }
    if (value.length !== 6) {
      return "This field must have 6 digits.";
    } else {
      // if the licence is invalid
      const licencePlate = this.httpRequest.getCars(value).then((data) => {
        let castToArray = <Array<any>>data;
        console.log(castToArray);
        if (castToArray.length === 0 || castToArray === null) {
          this.validLicence = false;
        } else {
          this.validLicence = true;
        }
        console.log(this.validLicence);
      });
      console.log("Licence plate validvalidation = " + licencePlate);
    }
    if (this.validLicence === false) {
      return "This licence is invalid. Check your typing and try again.";
    }
    // All is good
    return true;
  }
}
</script>

<style scoped></style>
