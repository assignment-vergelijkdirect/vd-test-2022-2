<template>
  <div class="form-floating mb-3">
    <Field
      type="date"
      class="form-control"
      id="birthdate"
      placeholder="Geboortedatum"
      name="birthdate"
      :rules="validatebirthDate"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <ErrorMessage class="alert alert-warning py-0 my-5" role="alert" name="birthdate" />

    <label for="birthdate">Geboortedatum</label>
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
export default class InputBirthDate extends Vue {
  public birthDate!: Date;
  created(): void {
    console.log("Component InputBirthDate created");
    // this.age("08-09-1980");
  }

  validatebirthDate(value: string): string | boolean {
    // if the field is empty
    if (!value) {
      return "This field is required";
    }
    // if the field is not a valid email
    // const regex = /^[A-Z0-9]*$/;
    // if (!regex.test(value)) {
    //   return "This field must be a valid format";
    // }
    const age: number = this.age(value);
    if (age > 101) {
      return "The age cant be more than 100 years old";
    }
    // All is good
    return true;
  }

  age(date: string): number {
    const currentDate: Date = new Date();
    const birthDate: Date = new Date(date);
    const difference: number = <any>currentDate - <any>birthDate;
    const age = Math.floor(difference / 31557600000);
    this.birthDate = birthDate;
    console.log(birthDate);
    return age;
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
