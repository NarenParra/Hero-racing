<template>
  <div>
    <div>
      <div class="card width-card hero-card">
        <div class="card-content">
          <div class="name-style">
            <p class="title is-4 color-backg" v-text="hero[0].name"></p>
          </div>

          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="hero[0].image.url" alt="Placeholder image" />
            </figure>
          </div>
          <div class="content">
            <p>
              <span>Speed:</span>
              {{ hero[0].powerstats.speed }}
            </p>
            <p>
              <span>Power:</span>
              {{ hero[0].powerstats.power }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["hero"],
};
</script>

<style>
.color-backg {
  background-color: royalblue;
  border-radius: 10px;
}
.hero-card {
  border: 1px solid #159eee;
  border-radius: 8px;
}
.name-style {
  padding: 5px 5px;
  background-color: royalblue;
  border-radius: 10px;
  width: 80%;
}
</style>
