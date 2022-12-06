<template>
  <simple-card class="card vd-form">
    <template #title>Autoverzekering vergelijken</template>

    <template #content>
      <form>
        <p>Replace me for input fields</p>
        <!-- LicensePlate -->
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="LicensePlate"
            placeholder="name@example.com"
          />
          <label for="LicensePlate">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <!-- Zipcode -->

        <!-- Housenumber -->

        <!-- Housenumber addition -->

        <!-- birthdate -->

        <!-- ClaimFree years -->

        <!-- Kilometrage -->

        <div class="btn" @click="onSubmit">Vergelijken</div>
      </form>
    </template>
  </simple-card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SimpleCard from "./simpleCard.vue";

@Options({
  components: {
    SimpleCard,
  },
})
export default class CarForm extends Vue {
  onSubmit(): void {
    console.log("Button is clicked");
  }
}
</script>

<style scoped>
.vd-form {
  width: 330px;
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
