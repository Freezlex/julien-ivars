<template>
  <div class="home">
    <sidebar class="leftcomp"/>
    <div class="content">
      <p id="freezlex">FREEZLEX</p>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  name: 'Home',
  components: {Sidebar}
}
</script>
<style>

.home{
  transition: .5s;
  display: flex;
  align-items: center;
  background-color: #E5E5E5;
  height: 100vh;
  width: 100vw;
}

.content{
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
}

#freezlex{
  font-family: "Big John", Avenir, Helvetica, Arial, sans-serif;
  color: #171717;
  font-size: 72px;
}
</style>
