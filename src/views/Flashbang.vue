<template>
  <div class="flashbang">
    <sidebar class="leftcomp"/>
    <div class="fluent">
      <p id="freezlex">FREEZLEX</p>
      <p id="subtitle"><a href="/" style="color: #C82647">Back in safe mode for your eyes</a></p>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  name: "Flashbang",
  components: {Sidebar}
}
</script>

<style>
.flashbang{
  display: flex;
  align-items: center;
  background-color: #E5E5E5;
  height: 100vh;
  width: 100vw;
}
.fluent{
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
}
#freezlex{
  font-family: "Big John", Avenir, Helvetica, Arial, sans-serif;
  color: #171717;
  font-size: 72px;
}
#subtitle{
  font-family: "Big John", Avenir, Helvetica, Arial, sans-serif;
  font-size: 15px;
}
</style>
