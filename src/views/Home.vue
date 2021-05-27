<template>
  <div class="home">
    <sidebar/>
    <div class="content">
      <h1>FREEZLEX</h1>
      <p>I'm still working on it !</p>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  name: 'Home',
  components: {
    sidebar: Sidebar
  }
}
</script>
<style>
.home{
  transition-duration: 1s;
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

#discord-logo{
  height: 30px;
  margin-right: 5px;
}

#discord-btn{
  font-family: "Big John", Avenir, Helvetica, Arial, sans-serif;
  background-color: #5865F2;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  margin: 15px 2px;
  border-radius: 25px;
}
</style>
