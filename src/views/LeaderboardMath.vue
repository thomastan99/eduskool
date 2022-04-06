<template>
<BlueBanner/>
<LeftPanel/>
<div id="main" class= "a">
<br><br>
    <button @click="change"> Math </button> <button @click="change2"> Sci </button>  <button @click="change3"> Eng </button>
    
  <div v-if= "sub==='math'"> <LeaderboardM/></div>
   <div v-if= "sub==='sci'"><LeaderboardS/></div>
    <div v-if= "sub==='eng'"><LeaderboardE/></div>
</div>
</template>

<script>

import LeftPanel from '../components/LeftPanel.vue'
import BlueBanner from '../components/BlueBanner.vue'
import LeaderboardM from '../components/Leaderboards/LeaderboardM.vue'
import LeaderboardS from '../components/Leaderboards/LeaderboardS.vue'
import LeaderboardE from '../components/Leaderboards/LeaderboardE.vue'
import { getAuth, onAuthStateChanged } from "@firebase/auth";

export default {
    name: "App",
    components : {
        LeaderboardM,
        LeaderboardS,
        LeaderboardE,
        LeftPanel,
        BlueBanner,

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
    },
    mounted(){

    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user= auth.currentUser
      }
    });
    }

}
</script>

<style scoped>
#main {
  margin-top: 40px;
  margin-left: 280px;

}
button {
  align-items: center;
  background-clip: padding-box;
  background-color:#00bcd4;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
  margin-right: 50px;
}

button:hover,
button:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  background-color: #c85000;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  transform: translateY(0);
}


</style>