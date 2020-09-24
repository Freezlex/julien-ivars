<template>
  <div class="about">
    <div class="bgimg w3-display-container w3-animate-opacity w3-text-white">
      <div class="w3-display-topleft w3-padding-large w3-xlarge">
        Freezlex
      </div>
      <div class="w3-display-middle">
      </div>
      <div class="w3-display-bottomleft w3-padding-large">
      Check my <a href="https://www.twitch.tv/Freezlex_" target="_blank">Twitch Channel</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data(){
    return{
      color: '#000000'
    }
  },
  created() {
    return this.color = Math.floor(Math.random()*16777215).toString(16);
  }
}
</script>

<style>
@import url(https://www.w3schools.com/w3css/4/w3.css);
@import url(https://fonts.googleapis.com/css?family=Raleway);
body,h1 {font-family: "Raleway", sans-serif}
body, html {height: 100%}
.about {
  background-color: black;
  height: 100vh;
  background-position: center;
  background-size: cover;
}
</style>