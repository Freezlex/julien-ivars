<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: "Big John";
  src: url("./assets/fonts/BigJohn.otf") format("truetype");
}

@font-face {
  font-family: "Slim Joe";
  src: url("./assets/fonts/SlimJoe.otf") format("truetype");
}

@font-face {
  font-family: "VcrOsdMono";
  src: url("./assets/fonts/VcrOsdMono.ttf") format("truetype");
}

:root {
  --w-main-color: #E5E5E5;
  --w-secondary-color: #171717;
}

body, html {
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
