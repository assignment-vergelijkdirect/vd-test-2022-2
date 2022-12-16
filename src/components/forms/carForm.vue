<template>
  <simple-card class="card mt-3 vd-form">
    <template #title>Autoverzekering vergelijken</template>

    <template #content>
      <Form as="div" @submit="onSubmit">
        <form action="/results" method="get">
          <p>Replace me for Field fields</p>

          <!-- LicensePlate -->
          <input-licence v-model="carDetails.licenseplate" />
          <!-- End LicensePlate -->

          <!-- Zipcode -->
          <input-post-code v-model="carDetails.zipcode" />
          <!-- End Zipcode -->

          <!-- Housenumber -->
          <input-house-number v-model="carDetails.housenumber" />
          <!-- End Housenumber -->

          <!-- Housenumber addition -->
          <input-house-add v-model="carDetails.houseAdd" />
          <!-- End Housenumber addition -->

          <!-- birthdate -->
          <input-birth-date v-model="carDetails.birthdate" @change="birthDateChanged" />
          <!-- End birthdate -->

          <!-- ClaimFree years -->
          <select-claim-free v-model="carDetails.claimFree" ref="claimFreeComponent" />
          <!-- End ClaimFree years -->

          <!-- Kilometrage -->
          <select-kilometrage v-model="carDetails.kilometrage" />
          <!-- Kilometrage -->

          <button type="submit" class="btn me-2">Vergelijken</button>
          <button type="reset" class="btn">Reset</button>
        </form>
      </Form>
    </template>
  </simple-card>
</template>

<script lang="ts">
import { Form } from "vee-validate";
import CarDetails from "@/models/carDetails.model";
import { Options, Vue } from "vue-class-component";
import router from "@/router";
import HttpRequest from "@/plugin/services/httpRequest";
import SimpleCard from "./simpleCard.vue";
import InputLicence from "./formInputs/inputLicence.vue";
import InputPostCode from "./formInputs/inputPostCode.vue";
import InputHouseNumber from "./formInputs/inputHouseNumber.vue";
import InputHouseAdd from "./formInputs/inputHouseAdd.vue";
import InputBirthDate from "./formInputs/inputBirthDate.vue";
import SelectClaimFree from "./formInputs/selectClaimFree.vue";
import SelectKilometrage from "./formInputs/selectKilometrage.vue";

@Options({
  components: {
    InputLicence,
    InputPostCode,
    InputHouseNumber,
    InputHouseAdd,
    InputBirthDate,
    SelectClaimFree,
    SelectKilometrage,
    SimpleCard,
    Form,
  },
})
export default class CarForm extends Vue {
  public carDetails!: CarDetails;

  public httpRequest: HttpRequest = new HttpRequest();

  birthDateChanged() {
    console.log(`Date of birth changed to ${this.carDetails.birthdate}`);
    let claimFreeComponentRef = <SelectClaimFree>this.$refs.claimFreeComponent;

    claimFreeComponentRef.updating(this.carDetails.birthdate);
    // console.log(claimFreeComponentRef);
  }

  created(): void {
    console.log("Component car form created");
    this.carDetails = new CarDetails();
    console.log(this.carDetails);
    // this.httpRequest = new HttpRequest();
  }

  onSubmit(): void {
    console.log("form submited :");
    // console.log(this.carDetails);
    const licencePlate: any = this.carDetails.licenseplate;
    console.log(`Sending requisition to plate: ${licencePlate}`);

    this.httpRequest.getCars(licencePlate).then((data) => {
      //type cast to Array<any>
      let castToArray = <Array<any>>data;
      if (castToArray.length === 1 && castToArray != null) {
        //fetch first item of the array
        const response = castToArray[0];
        this.carDetails.merk = response.merk;
        this.carDetails.datumEersteToelating = response.datum_eerste_toelating;

        console.log(this.carDetails);

        this.$router.push({
          name: "Results",
          query: {
            LicensePlate: this.carDetails.licenseplate,
            Zipcode: this.carDetails.zipcode,
            Housenumber: this.carDetails.housenumber,
            HouseAdd: this.carDetails.houseAdd,
            birthdate: this.carDetails.birthdate?.toString(),
            ClaimFree: this.carDetails.claimFree,
            Kilometrage: this.carDetails.kilometrage,
            Merk: this.carDetails.merk,
            DatumEersteToelating: this.carDetails.datumEersteToelating,
          },
        });
      } else {
        alert("Invalid Licence Plate");
        return;
      }
    });
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
