<template>
  <div class="container">
    <h1 class="h1 text-center my-4">REPORT</h1>
    <form>
      <div class="row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck"> Check me out </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
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
