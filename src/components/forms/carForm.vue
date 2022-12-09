<template>
  <simple-card class="card vd-form">
    <template #title>Autoverzekering vergelijken</template>

    <template #content>
      <Form @submit="onSubmit">
        <p>Replace me for Field fields</p>
        <!-- LicensePlate -->
        <div class="form-floating mb-3">
          <Field
            type="text"
            class="form-control"
            id="LicensePlate"
            placeholder="Nummerplaat"
            v-model="carDetails.licenseplate"
            name="LicensePlate"
            :rules="validateLicence"
          />
          <ErrorMessage class="alert alert-warning py-0 my-5" role="alert" name="LicensePlate" />
          <!-- {{ carDetails.licenseplate }} -->
          <label for="LicensePlate">Nummerplaat</label>
        </div>
        <!-- End LicensePlate -->

        <!-- Zipcode -->
        <div class="form-floating mb-3">
          <Field
            type="text"
            class="form-control"
            id="Zipcode"
            placeholder="Postcode"
            v-model="carDetails.zipcode"
            name="Zipcode"
            :rules="validateZipCode"
          />
          <ErrorMessage class="alert alert-warning py-0 my-5" role="alert" name="Zipcode" />

          <label for="Postcode">Postcode</label>
        </div>
        <!-- End Zipcode -->

        <!-- Housenumber -->
        <div class="form-floating mb-3">
          <Field
            type="text"
            class="form-control"
            id="Housenumber"
            placeholder="Huisnummer"
            v-model="carDetails.housenumber"
            name="Housenumber"
            :rules="validateHouseNumber"
          />
          <ErrorMessage class="alert alert-warning py-0 my-5" role="alert" name="Housenumber" />

          <label for="Housenumber">Huisnummer</label>
        </div>
        <!-- End Housenumber -->

        <!-- Housenumber addition -->
        <div class="form-floating mb-3">
          <Field
            type="text"
            class="form-control"
            id="HouseAdd"
            placeholder="Toevoeging huisnummer"
            v-model="carDetails.houseAdd"
            name="HouseAdd"
            :rules="validateHouseAdd"
          />
          <ErrorMessage class="alert alert-warning py-0 my-5" role="alert" name="HouseAdd" />

          <label for="HouseAdd">Toevoeging huisnummer</label>
        </div>
        <!-- End Housenumber addition -->

        <!-- birthdate -->
        <div class="form-floating mb-3">
          <Field
            type="date"
            class="form-control"
            id="birthdate"
            placeholder="Geboortedatum"
            v-model="carDetails.birthdate"
            name="birthdate"
          />
          <ErrorMessage class="alert alert-warning py-0 my-5" role="alert" name="birthdate" />

          <label for="birthdate">Geboortedatum</label>
        </div>
        <!-- End birthdate -->

        <!-- ClaimFree years -->
        <div class="form-floating mb-3">
          <Field
            type="date"
            class="form-control"
            id="ClaimFree"
            placeholder="Claimvrije jaren"
            v-model="carDetails.claimFree"
            name="ClaimFree"
          />
          <ErrorMessage class="alert alert-warning py-0 my-5" role="alert" name="ClaimFree" />

          <label for="ClaimFree">Claimvrije jaren</label>
        </div>
        <!-- End ClaimFree years -->

        <!-- Kilometrage -->
        <div class="form-floating mb-3">
          <Field
            type="text"
            class="form-control"
            id="Kilometrage"
            placeholder="Kilometerstand"
            v-model="carDetails.kilometrage"
            name="Kilometrage"
          />
          <ErrorMessage class="alert alert-warning py-0 my-5" role="alert" name="Kilometrage" />

          <label for="Kilometrage">Kilometerstand</label>
        </div>

        <button type="button" class="btn" @click="onSubmit">Vergelijken</button>
      </Form>
    </template>
  </simple-card>
</template>

<script lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import CarDetails from "@/models/carDetails.model";
import { Options, Vue } from "vue-class-component";
import HttpRequest from "@/plugin/services/httpRequest";
import SimpleCard from "./simpleCard.vue";

@Options({
  components: {
    SimpleCard,
    Form,
    Field,
    ErrorMessage,
  },
})
export default class CarForm extends Vue {
  public carDetails!: CarDetails;

  public httpRequest: HttpRequest = new HttpRequest();

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
    console.log(`Sending requisition to ${licencePlate}`);

    this.httpRequest.getCars(licencePlate).then((data) => {
      //type cast to Array<any>
      let castToArray = <Array<any>>data;
      if (castToArray.length === 1 && castToArray != null) {
        //fetch first item of the array
        const response = castToArray[0];
        this.carDetails.merk = response.merk;
        this.carDetails.datumEersteToelating = response.datum_eerste_toelating;
      } else {
        alert("Invalid Licence Plate");
      }

      console.log(this.carDetails);
    });
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

  validateHouseNumber(value: string): any {
    // if the field is empty
    if (!value) {
      return "This field is required";
    }
    // if the field is not a valid email
    const regex = /^[0-9]*$/;
    if (!regex.test(value)) {
      return "This field must be a valid format";
    }
    // All is good
    return true;
  }

  validateHouseAdd(value: string): any {
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
