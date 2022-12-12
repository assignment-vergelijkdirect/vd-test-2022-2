<template>
  <!-- ClaimFree years -->
  <div class="form-floating mb-3">
    <select
      class="form-select"
      id="ClaimFree"
      aria-label="Default select example"
      @option="$emit('update:modelValue', $event.target.value)"
    >
      <option :value="1">-5</option>
      <option :value="2">-4</option>
      <option :value="4">-3</option>
      <option :value="5">-2</option>
      <option :value="6">-1</option>
      <option :value="7" selected>0</option>
      <option :value="8">1</option>
      <option :value="9">2</option>
      <option :value="10">3</option>
      <option :value="11">4</option>
    </select>
    <label for="ClaimFree">Claimvrije jaren</label>
  </div>
  <!-- End ClaimFree years -->
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
export default class SelectClaimFree extends Vue {
  // public claimFreeValue!: string;

  created(): void {
    console.log("Component SelectClaimFree created");
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
