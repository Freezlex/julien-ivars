<template>
  <div class="home">
    <div id="header">
      <div class="item-nav about">
        <p>About</p>
      </div>
      <div class="item-nav twitch">
        <p>Twitch</p>
      </div>
      <a href="https://twitch.tv/Freezlex_"><img height="100px" src="../assets/freezlex-logo.png" alt="Freezlex logo"></a>
      <div class="item-nav project">
        <p>Project</p>
      </div>
      <div class="item-nav more">
        <p>More</p>
      </div>
    </div>
    <div id="body">
      <h1>I AM A</h1>
      <vue-typed-js :loop="true" :showCursor="false" :strings="['Developer', 'Streamer', 'Gamer', 'Athlete']" :typeSpeed="50" :backSpeed="20">
        <p class="typing"></p>
      </vue-typed-js>
    </div>
    <div id="footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,96L30,80C60,64,120,32,180,48C240,64,300,128,360,154.7C420,181,480,171,540,144C600,117,660,75,720,96C780,117,840,203,900,202.7C960,203,1020,117,1080,112C1140,107,1200,181,1260,202.7C1320,224,1380,192,1410,176L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
<style>
.home {
  top: 0;
  left: 0;
  height: 100vh;
}

#header {
  margin-right: auto;
  margin-left: auto;
  max-width: 750px;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
}

.item-nav {
  width: 100px;
}

#body{
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-flow: column;
  width: 50%;
  text-align: left;
}

.typing{
  text-align: left;
  color: #ff2835;
}

#footer{
}

.typed-element{
  text-align: left;
}
</style>
