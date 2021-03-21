<template>
  <div id="page-not-found">
    <p id="quatrecenquatre">404</p>
    <p id="desc">Where are you trying to go ?</p>
    <p id="home"><a href="/">> HOME</a></p>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style scoped>
#page-not-found{
  transition: .5s;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E5E5E5;
  height: 100vh;
  width: 100vw;
  flex-flow: column;
}

#quatrecenquatre{
  font-family: "Big John", Avenir, Helvetica, Arial, sans-serif;
  color: #171717;
  font-size: 100px;
}

#desc{
  font-family: "Slim Joe", Avenir, Helvetica, Arial, sans-serif;
  color: #171717;
  font-size: 20px;
}
</style>
