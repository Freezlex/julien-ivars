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
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
