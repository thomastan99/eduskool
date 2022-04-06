<template>
<BlueBanner/>
<br><br>
<div id="instruction">

<h1>Instructions</h1> <br>
<h4> You have unlimited time to attempt the quiz</h4> <br>
<h4> Once you click on an answer, that answer would be considered selected, so please 
    think carefully before you select an answer.
</h4><br>
<h4>
    If you are stuck, click on the hint button for a hint! (However, 
    not all questions have hints!)
</h4><br>
<h4>Try to attempt all the questions without referencing your
    notes to test yourself! You can always come back to attempt the quiz again later!
</h4><br>
<h4>
    At the end of the quiz, remember to click submit before you exit the page.
</h4><br>
<h2>Good Luck!</h2>

<input type="checkbox" v-on:change= change()>
<label for="checkbox">       I have read and understood the instructions above  </label> 
 <br><br>
<router-link v-show ='this.read' to="/quiz"><button class="button">Enter Quiz</button> </router-link>
</div>


</template>

<script>


import BlueBanner from '../components/BlueBanner.vue'

export default {

  name: 'Ready',
  data(){
      return{
          read : false

      }
  },
  methods:{
      change(){
          if(this.read ==false){
              this.read = true
          }
          else{
              this.read = false
          }
      }

  },

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
  font-size: 80px;
  margin: 4px 2px;
  cursor: pointer;
  padding: 25px 100px;
}
input[type=checkbox] {
    transform: scale(2);
}
   

</style>
