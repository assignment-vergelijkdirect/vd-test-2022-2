<template>
  <div class="form-floating mb-3">
    <Field
      type="text"
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
    const regex = /^[A-Z][A-Z][A-Z][A-Z]\d\d*$/;
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
