<template>
  <div class="container">
    <h1 class="h1 text-center my-4">RAPPORT</h1>
    <form>
      <h2 class="h2 my-4">Auto Details</h2>
      <div class="row mb-1">
        <div class="col-md-6 form-floating">
          <input
            class="form-control mb-1"
            id="licenseplate"
            readonly
            v-model="carDetailsResults.licenseplate"
          />
          <label for="licenseplate">Nummerplaat</label>
        </div>
        <div class="col-md-6 form-floating">
          <input class="form-control mb-1" id="merk" readonly v-model="carDetailsResults.merk" />
          <label for="merk">Merk</label>
        </div>
      </div>
      <div class="row mb-1">
        <div class="col-md-6 form-floating">
          <input
            class="form-control mb-1"
            id="DatumEersteToelating"
            readonly
            v-model="carDetailsResults.datumEersteToelating"
          />
          <label for="DatumEersteToelating">Datum Eerste Toelating</label>
        </div>
        <div class="col-md-6 form-floating">
          <input
            class="form-control mb-1"
            id="Kilometrage"
            readonly
            v-model="carDetailsResults.kilometrage"
          />
          <label for="Kilometrage">Kilometrage</label>
        </div>
      </div>
      <h2 class="h2 my-4">Persoonlijke Gegevens</h2>
      <div class="row mb-1">
        <div class="col-md-4 form-floating">
          <input
            class="form-control mb-1"
            id="Zipcode"
            readonly
            v-model="carDetailsResults.zipcode"
          />
          <label for="Zipcode">Postcode</label>
        </div>
        <div class="col-md-4 form-floating">
          <input
            class="form-control mb-1"
            id="housenumber"
            readonly
            v-model="carDetailsResults.housenumber"
          />
          <label for="housenumber">Huisnummer</label>
        </div>
        <div class="col-md-4 form-floating">
          <input
            class="form-control mb-1"
            id="claimFree"
            readonly
            v-model="carDetailsResults.houseAdd"
          />
          <label for="claimFree">Toevoeging housenumber</label>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6 form-floating">
          <input
            class="form-control mb-1"
            id="birthdate"
            readonly
            v-model="carDetailsResults.birthdate"
          />
          <label for="birthdate">Geboortedatum</label>
        </div>
        <div class="col-md-6 form-floating">
          <input
            class="form-control mb-1"
            id="claimFree"
            readonly
            v-model="carDetailsResults.claimFree"
          />
          <label for="claimFree">Claimvrije jaren</label>
        </div>
      </div>

      <router-link to="/" exact>
        <button class="btn btn-primary">Terug naar de startpagina</button>
      </router-link>
    </form>
  </div>
</template>
<script lang="ts">
import CarDetailsResults from "@/models/carDetailsResults.model";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Results extends Vue {
  public carDetailsResults!: CarDetailsResults;

  created(): void {
    console.log("Component Results created");
    this.carDetailsResults = new CarDetailsResults();
    this.reportMaker();
    console.log(this.carDetailsResults);
  }

  reportMaker(): void {
    console.log(this.$route.query);
    if (this.$route.query) {
      this.carDetailsResults.licenseplate = this.$route.query.LicensePlate;
      this.carDetailsResults.zipcode = this.$route.query.Zipcode;
      this.carDetailsResults.housenumber = this.$route.query.Housenumber;
      this.carDetailsResults.houseAdd = this.$route.query.HouseAdd;
      this.carDetailsResults.birthdate = this.$route.query.birthdate;
      this.carDetailsResults.claimFree = this.$route.query.ClaimFree;
      this.carDetailsResults.kilometrage = this.$route.query.Kilometrage;
      this.carDetailsResults.merk = this.$route.query.Merk;
      this.carDetailsResults.datumEersteToelating = this.$route.query.DatumEersteToelating;
    }
  }
}
</script>
<style scoped></style>
