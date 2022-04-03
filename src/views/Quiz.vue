<template>
<BlueBanner/>
  <!-- <TopBar/> -->
  <Question/>
  <router-view/>
</template>

<script>
// import TopBar from '../components/TopBar.vue'
import Question from '../components/Question.vue'
import BlueBanner from '../components/BlueBanner.vue'

export default {

  name: 'Quiz',

  components: {
    //TopBar,
    Question,
    BlueBanner
  }
  
}
</script>

<style scoped>

#app {
  font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
