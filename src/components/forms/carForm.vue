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
            placeholder="Nummerplaat"
            v-model="carDetails.licenseplate"
          />
          {{ carDetails.licenseplate }}
          <label for="LicensePlate">Nummerplaat</label>
        </div>
        <!-- End LicensePlate -->

        <!-- Zipcode -->
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="Zipcode"
            placeholder="Postcode"
            v-model="carDetails.zipcode"
          />
          {{ carDetails.zipcode }}
          <label for="Postcode">Postcode</label>
        </div>
        <!-- End Zipcode -->

        <!-- Housenumber -->
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="Housenumber"
            placeholder="Huisnummer"
            v-model="carDetails.housenumber"
          />
          {{ carDetails.housenumber }}
          <label for="Housenumber">Huisnummer</label>
        </div>
        <!-- End Housenumber -->

        <!-- Housenumber addition -->
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="HouseAdd"
            placeholder="Toevoeging huisnummer"
            v-model="carDetails.houseAdd"
          />
          {{ carDetails.houseAdd }}
          <label for="HouseAdd">Toevoeging huisnummer</label>
        </div>
        <!-- End Housenumber addition -->

        <!-- birthdate -->
        <div class="form-floating mb-3">
          <input
            type="date"
            class="form-control"
            id="birthdate"
            placeholder="Toevoeging huisnummer"
            v-model="carDetails.birthdate"
          />
          {{ carDetails.birthdate }}
          <label for="birthdate">Geboortedatum</label>
        </div>
        <!-- End birthdate -->

        <!-- ClaimFree years -->
        <div class="form-floating mb-3">
          <input
            type="date"
            class="form-control"
            id="ClaimFree"
            placeholder="Claimvrije jaren"
            v-model="carDetails.claimFree"
          />
          {{ carDetails.claimFree }}
          <label for="ClaimFree">Claimvrije jaren</label>
        </div>
        <!-- End ClaimFree years -->

        <!-- Kilometrage -->
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="Kilometrage"
            placeholder="Kilometerstand"
            v-model="carDetails.kilometrage"
          />
          {{ carDetails.kilometrage }}
          <label for="Kilometrage">Kilometerstand</label>
        </div>

        <button type="button" class="btn" @click="onSubmit">Vergelijken</button>
      </form>
    </template>
  </simple-card>
</template>

<script lang="ts">
import CarDetails from "@/models/carDetails.model";
import { Options, Vue } from "vue-class-component";
import SimpleCard from "./simpleCard.vue";

@Options({
  components: {
    SimpleCard,
  },
})
export default class CarForm extends Vue {
  public carDetails!: CarDetails;

  created(): void {
    console.log("Component car form created");
    this.carDetails = new CarDetails();
    console.log(this.carDetails);
  }

  onSubmit(): void {
    console.log("form submited");
    console.log(this.carDetails);
  }

  // validImput(): void {
  //   const trigger = this.carDetails.licenseplate;
  //   const regexp = new RegExp("^[A-Z0-9]+$");
  //   const test = regexp.test(trigger);
  //   if (test) {
  //     this.carDetails.licenseplate = trigger.toUpperCase();
  //     console.log(this.carDetails.licenseplate);
  //   } else {
  //     this.carDetails.licenseplate = "Erro";
  //     console.log(this.carDetails.licenseplate);
  //   }
  //   console.log(test + ""); // will display true
  // }
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
