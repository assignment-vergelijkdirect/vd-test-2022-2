<template v-if="bdValue">
  <div class="form-floating mb-3">
    <select
      class="form-select"
      id="ClaimFree"
      name="ClaimFree"
      aria-label="Default select example"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="item in options"
        :value="item.value"
        :key="item.id"
        :selected="item.id === '5' ? true : false"
      >
        {{ item.text }}
      </option>
    </select>
    <label for="ClaimFree">Claimvrije jaren</label>
  </div>
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
  public bdValue: any = "2004-01-01";

  public options: { id: string; value: number; text: string }[] = [];

  updating(date: Date | undefined): void {
    if (date !== null) {
      this.bdValue = date;
      this.selectOptions();
    }
  }

  created(): void {
    console.log("Component SelectClaimFree created");
    // console.log(this.bdValue);
    this.selectOptions();
  }

  selectOptions(): void {
    this.options = [
      { id: "0", value: -5, text: "-5" },
      { id: "1", value: -4, text: "-4" },
      { id: "2", value: -3, text: "-3" },
      { id: "3", value: -2, text: "-2" },
      { id: "4", value: -1, text: "-1" },
      { id: "5", value: 0, text: "0" },
    ];
    if (this.bdValue) {
      const range: number = this.climeFreeYears();
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < range; i++) {
        this.options.push({ id: (i + 6).toString(), value: i + 1, text: (i + 1).toString() });
      }
    } else {
      console.log(this.bdValue);
    }
  }

  climeFreeYears(): number {
    const currentYear: number = new Date().getFullYear();
    const birthYear: number = new Date(this.bdValue).getFullYear();
    const difference: number = currentYear - birthYear;
    const cfy = difference - 18;
    console.log(cfy);
    return cfy;
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
