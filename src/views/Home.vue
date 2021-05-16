<template>
  <div class="home">
    <!-- <sidebar class="leftcomp"/> -->
    <div class="content">
      <h1>FREEZLEX</h1>
      <p>Oh no the <a href="/flashbang" style="color: #FFFFFF">flashbang</a> is gone !</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style>
.home{
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  /* Wave color : #bb3658ff */
  background: url("../assets/wave.svg") no-repeat right bottom;
  background-size: cover;
}
.content{
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
}

.content > h1{
  font-family: "Big John", Avenir, Helvetica, Arial, sans-serif;
  color: #E5E5E5;
  font-size: 72px;
}

.content > p{
  font-family: "Big John", Avenir, Helvetica, Arial, sans-serif;
  color: #E5E5E5;
  font-size: 15px;
}
</style>
