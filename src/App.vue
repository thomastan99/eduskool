<template>
  <div id ="nav">
    <router-link to="/Homepage"></router-link>
  </div>
  <router-view/>
  <TopBar/>
  <Question/>
</template>

<script>
import TopBar from './components/TopBar.vue'
import Question from './components/Question.vue'

export default {

  name: 'App',

  components: {
    TopBar,
    Question
  }
  
}
</script>

<style>

#app {
  font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
