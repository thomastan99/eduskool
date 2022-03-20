<template>
<h1> Leaderboard Math </h1>
    
  <LeaderboardM/>
  <LeaderboardS/>
  <LeaderboardE/>
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
    }
  

}
</script>

<style>

</style>