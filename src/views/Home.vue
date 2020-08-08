<template>
  <div class="home">
    <div class="bgimg w3-display-container w3-animate-opacity w3-text-white">
      <div class="w3-display-topleft w3-padding-large w3-xlarge">
        Freezlex
      </div>
      <div class="w3-display-middle">
        <h1 class="w3-jumbo w3-animate-top" :style="{'color':`#${this.color}`}">COMING SOON</h1>
        <hr class="w3-border-grey" style="margin:auto;width:40%">
        <p class="w3-large w3-center">I'm working on</p>
        <p class="w3-large w3-center" style="color : black;">Rends-toi ici : https://www.freezlex.com/#/surprise</p>
      </div>
      <div class="w3-display-bottomleft w3-padding-large">
        Check my <a href="https://www.twitch.tv/Freezlex_" target="_blank">Twitch Channel</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
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
.bgimg {
  background-color: black;
  height: 100vh;
  background-position: center;
  background-size: cover;
}
</style>
