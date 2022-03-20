<template>
<h1> Leaderboard Math </h1>
    <button @click="change"> Math </button> <button @click="change2"> Sci </button>  <button @click="change3"> Eng </button>
    
  <div v-if= "sub==='math'"> <LeaderboardM/></div>
   <div v-if= "sub==='sci'"><LeaderboardS/></div>
    <div v-if= "sub==='eng'"><LeaderboardE/></div>
</template>

<script>

import LeaderboardM from '../components/Leaderboards/LeaderboardM.vue'
import LeaderboardS from '../components/Leaderboards/LeaderboardS.vue'
import LeaderboardE from '../components/Leaderboards/LeaderboardE.vue'


export default {
    name: "App",
    components : {
        LeaderboardM,
        LeaderboardS,
        LeaderboardE
    },
    data(){
        return{
        sub : "sci"
    }
    },
    methods: {
        change(){
            this.sub = "math"
        },
        change2(){
            this.sub = "sci"
        },
        change3(){
            this.sub = "eng"
        }
    }

}
</script>

<style>

</style>