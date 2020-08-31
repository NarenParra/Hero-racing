<template>
  <div id="app">
    <div class="bacck-color">
      <Header />
      <!---->
      <div
        class="columns is-mobile is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd top-div"
      >
        <div class="column">
          <SearchHero class="left-searc" :info="onResult" />
        </div>
        <div class="column">
          <SearchHero class="rigt-searc" :info="onResult2" />
        </div>
      </div>
      <!---->
      <div
        class="columns is-mobile is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
      >
        <div class="column">
          <div v-if="showCard1" class="color" id="card1">
            <CardHero :hero="selectedHero" class="hero-card-child" />
          </div>
        </div>
        <div class="column">
          <div class="versus">
            <h2 class="vs-title">
              <span class="is-info has-text-dark">VS</span>
            </h2>
          </div>
        </div>
        <div class="column">
          <div id="card2" v-if="showCard2" class="color">
            <CardHero :hero="selectedHero2" class="hero-card-child" />
          </div>
        </div>
      </div>
      <!---->
      <div class="buttons buton-margin">
        <div class="button-center">
          <button v-on:click="run" class="button is-info button-width">
            <span class="text-button">RUN</span>
          </button>
          <button v-on:click="fight" class="button is-info button-width">
            <span class="text-button">FIGHT</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchHero from "./components/SearchHero";
import CardHero from "./components/CardHero";
import Header from "./components/Header";

export default {
  name: "App",
  data() {
    return {
      inputName: "",
      selectedHero: [],
      selectedHero2: [],
      showCard1: false,
      showCard2: false,
    };
  },
  components: {
    SearchHero,
    CardHero,
    Header,
  },
  methods: {
    onResult(data) {
      this.selectedHero = data;
      this.showCard1 = true;
      this.defaultSelectedCar();
    },

    onResult2(data) {
      this.selectedHero2 = data;
      this.showCard2 = true;
      this.defaultSelectedCar();
    },

    run() {
      let _card1 = document.getElementById("card1");
      let _card2 = document.getElementById("card2");
      this.defaultSelectedCar();
      if (this.showCard1 && this.showCard2) {
        if (
          parseInt(this.selectedHero[0].powerstats.speed) >
          parseInt(this.selectedHero2[0].powerstats.speed)
        ) {
          _card1.style.backgroundColor = "#1d8dd7";

          console.log(`ganador ${this.selectedHero[0].name}`);
        } else if (
          parseInt(this.selectedHero[0].powerstats.speed) ===
          parseInt(this.selectedHero2[0].powerstats.speed)
        ) {
          _card1.style.backgroundColor = "#1d8dd7";
          _card2.style.backgroundColor = "#1d8dd7";
          console.log(`Empate ${this.selectedHero[0].name}`);
        } else {
          _card2.style.backgroundColor = "#1d8dd7";
          console.log(`Ganador ${this.selectedHero2[0].name}`);
        }
      } else {
        alert("debe seleccionar un hero");
      }
    },
    fight() {
      let _card1 = document.getElementById("card1");
      let _card2 = document.getElementById("card2");
      this.defaultSelectedCar();
      if (this.showCard1 && this.showCard2) {
        if (
          parseInt(this.selectedHero[0].powerstats.power) >
          parseInt(this.selectedHero2[0].powerstats.power)
        ) {
          _card1.style.backgroundColor = "#159EEE";

          console.log(`ganador ${this.selectedHero[0].name}`);
        } else if (
          parseInt(this.selectedHero[0].powerstats.power) ===
          parseInt(this.selectedHero2[0].powerstats.power)
        ) {
          _card1.style.backgroundColor = "#159EEE";
          _card2.style.backgroundColor = "#159EEE";
          console.log(`Empate ${this.selectedHero[0].name}`);
        } else {
          _card2.style.backgroundColor = "#159EEE";
          console.log(`Ganador ${this.selectedHero2[0].name}`);
        }
      } else {
        alert("debe seleccionar un hero");
      }
    },
    defaultSelectedCar() {
      let _card1 = document.getElementById("card1");
      let _card2 = document.getElementById("card2");
      if (this.showCard1 && this.showCard2) {
        _card1.style.backgroundColor = "#f1f1f1";
        _card2.style.backgroundColor = "#f1f1f1";
      }
    },
  },
};
</script>
<style>
#app {
  background-color: #f1f1f1;
}

.bacck-color {
  text-align: center;
  max-width: 80%;
  padding-top: 20px;
  margin: auto;
}

.top-div {
  padding-top: 40px;
}

.rigt-searc {
  float: right;
}
.left-searc {
  float: left;
}

.versus {
  background-color: #1d8dd7;
  width: 35%;
  margin: 40% auto;
}
.vs-title {
  font-size: 90px;
}

.button-center {
  margin: auto;
}

.color {
  border-radius: 20px;
}

.hero-card-child {
  width: 95%;
  margin: auto;
  padding: 15px 5px;
}

.buton-margin {
  padding: 40px 20px;
}
.button-width {
  width: 200px;
  height: 150px;
}
.text-button {
  color: #363636;
  font-size: 40px;
}
</style>
