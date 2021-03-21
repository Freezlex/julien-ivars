<template>
 <div class="sidebar">
   <div class="text-bar">
     <p class="vtext">{{text[3]}}</p>
     <p class="vtext">{{text[2]}}</p>
     <p class="vtext">{{text[1]}}</p>
     <p class="vtext">{{text[0]}}</p>
   </div>
   <div class="icon-bar">
     <a href="https://www.discord.gg/mFQMxqx">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#171717" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.248 18.348l-.371-1.295.896.833.847.784 1.505 1.33v-12.558c0-.798-.644-1.442-1.435-1.442h-9.38c-.791 0-1.435.644-1.435 1.442v9.464c0 .798.644 1.442 1.435 1.442h7.938zm-1.26-3.206l-.462-.567c.917-.259 1.267-.833 1.267-.833-.287.189-.56.322-.805.413-.35.147-.686.245-1.015.301-.672.126-1.288.091-1.813-.007-.399-.077-.742-.189-1.029-.301-.161-.063-.336-.14-.511-.238l-.028-.016-.007-.003-.028-.016-.028-.021-.196-.119s.336.56 1.225.826l-.469.581c-1.547-.049-2.135-1.064-2.135-1.064 0-2.254 1.008-4.081 1.008-4.081 1.008-.756 1.967-.735 1.967-.735l.07.084c-1.26.364-1.841.917-1.841.917l.413-.203c.749-.329 1.344-.42 1.589-.441l.119-.014c.427-.056.91-.07 1.414-.014.665.077 1.379.273 2.107.672 0 0-.553-.525-1.743-.889l.098-.112s.959-.021 1.967.735c0 0 1.008 1.827 1.008 4.081 0 0-.573.977-2.142 1.064zm-.7-3.269c-.399 0-.714.35-.714.777 0 .427.322.777.714.777.399 0 .714-.35.714-.777 0-.427-.315-.777-.714-.777zm-2.555 0c-.399 0-.714.35-.714.777 0 .427.322.777.714.777.399 0 .714-.35.714-.777.007-.427-.315-.777-.714-.777z"/></svg>
     </a>
     <a href="https://github.com/Freezlex">
       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#171717"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>
     </a>
     <a href="https://twitch.tv/Freezlex_">
       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#171717"><path d="M10.224 17.806l1.776-1.776h3.343l2.09-2.09v-6.686h-10.03v8.776h2.821v1.776zm3.866-8.149h1.254v3.653h-1.254v-3.653zm-3.344 0h1.254v3.653h-1.254v-3.653zm1.254-9.657c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.687 14.567l-3.657 3.657h-2.716l-1.777 1.776h-1.88v-1.776h-3.344v-9.821l.941-2.403h12.433v8.567z"/></svg>
     </a>
   </div>
   <!--<svg xmlns="http://www.w3.org/2000/svg" width="100vh" viewBox="0 0 1440 320" id="wave">
     <path fill="#171717" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,149.3C672,160,768,224,864,213.3C960,203,1056,117,1152,96C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
   </svg>-->
 </div>
</template>

<script>

String.prototype.replaceAt = function(index, replacement) {
  if (index >= this.length) {
    return this.valueOf();
  }

  return this.substring(0, index) + replacement + this.substring(index + 1);
}

export default {
  name: "Sidebar",
  data: function (){
    return{
      text: ["www.freezlex.com", "1199837265778 :: 828388 ? 38", "twitch.tv/Freezlex",  `${new Date().toDateString()}()`],
      characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!_-?;:$*ù^ ",
       color: "#79c120"
    }
  },
  mounted() {
    setInterval(() => {
      let arrIndex = Math.floor(Math.random() * this.text.length)
      this.$set(this.text, 1, this.text[1].replaceAt(Math.floor(Math.random() * this.text[arrIndex].length), this.characters.charAt(Math.floor(Math.random() * this.characters.length))))
    }, 100)
  },
  computed: {
    cssVars() {
      return {
        '--w-main-color': this.color
      }
    }
  }
}
</script>

<style scoped>
.sidebar{
  display: flex;
  flex-flow: row;
  align-items: center;
}

.text-bar{
  height: 100vh;
  background-color: #171717;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column;
}

.icon-bar{
  padding-left: 10px;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column;
}

.vtext{
  margin: 5px;
  font-family: VcrOsdMono,serif;
  color: #E5E5E5;
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  text-orientation: mixed;
}

@media (prefers-color-scheme: dark) {
  
}
</style>
