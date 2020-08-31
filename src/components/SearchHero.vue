<template>
  <div>
    <div class="field has-addons">
      <div class="control input-width">
        <input v-model="inputName" class="input is-info" type="text" placeholder="Name Hero" />
      </div>
      <div class="control">
        <a v-on:click="getData" class="button is-link is-outlined">🔎</a>
      </div>
    </div>
    <div class="select-div">
      <div class="select is-multiple">
        <select multiple size="4" v-model="selectedHero" @change="change()">
          <option
            class="selected-hero"
            v-for="(item, index) in hero"
            :key="index"
            :value="item"
          >{{ item.name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { APIService } from "../../middleware/APIService";
const apiService = new APIService();

export default {
  name: "App",
  data() {
    return {
      inputName: "",
      hero: [],
      selectedHero: [],
    };
  },

  props: ["info"],
  methods: {
    getData() {
      apiService
        .getHero(this.inputName)
        .then((data) => {
          this.hero = data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    change() {
      if (this.info) {
        this.info(this.selectedHero);
      }
    },
  },
};
</script>
<style>
.input-width {
  width: 20em;
}
.select-div {
  margin-top: -12px;
}
.selected-hero {
  width: 20em;
  text-align: center;
}
</style>
