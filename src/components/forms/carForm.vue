<template>
  <simple-card class="card vd-form">
    <template #title>Autoverzekering vergelijken</template>

    <template #content>
      <form>
        <p>Replace me for input fields</p>
        <!-- LicensePlate -->
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="LicensePlate" placeholder="Nummerplaat" />
          <label for="LicensePlate">Nummerplaat</label>
        </div>
        <!-- End LicensePlate -->

        <!-- Zipcode -->
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="Postcode" placeholder="Postcode" />
          <label for="Postcode">Postcode</label>
        </div>
        <!-- End Zipcode -->

        <!-- Housenumber -->
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="Huisnummer" placeholder="Huisnummer" />
          <label for="Huisnummer">Huisnummer</label>
        </div>
        <!-- End Housenumber -->

        <!-- Housenumber addition -->
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="Toevoeging_huisnummer"
            placeholder="Toevoeging huisnummer"
          />
          <label for="Toevoeging_huisnummer">Toevoeging huisnummer</label>
        </div>
        <!-- End Housenumber addition -->

        <!-- birthdate -->
        <div class="form-floating mb-3">
          <input
            type="date"
            class="form-control"
            id="geboortedatum"
            placeholder="Toevoeging huisnummer"
          />
          <label for="geboortedatum">Geboortedatum</label>
        </div>
        <!-- End birthdate -->

        <!-- ClaimFree years -->
        <div class="form-floating mb-3">
          <input
            type="date"
            class="form-control"
            id="Claimvrije_jaren"
            placeholder="Claimvrije jaren"
          />
          <label for="Claimvrije_jaren">Claimvrije jaren</label>
        </div>
        <!-- End ClaimFree years -->

        <!-- Kilometrage -->
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="Kilometrage" placeholder="Claimvrije jaren" />
          <label for="Kilometrage">Kilometerstand</label>
        </div>

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
