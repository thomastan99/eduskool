<template>
<BlueBanner/>
<br><br>

<h1> Are you ready ? </h1>
<router-link to="/quiz"><button class="button">Enter Quiz</button> </router-link>



</template>

<script>


import BlueBanner from '../components/BlueBanner.vue'

export default {

  name: 'Ready',

  components: {

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
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 160px;
  margin: 4px 2px;
  cursor: pointer;
  padding: 140px 400px;
}
</style>
