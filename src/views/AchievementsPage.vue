<template>
  <BlueBanner/>
  <LeftPanel/>
    <div id="main">
        <div id="pageTitle"><h1> Achievements </h1></div>
        <table id = "topicstable"> 
            <th id="awardTitle"> Award </th>
            <th> Title </th>
            <th> Description </th>
            <tr>
                <td>   
                    <div v-if="loading"> <Preloader color="grey" scale="0.6"/> </div>
                    <img v-if="firststeps && !loading" class="picture" src="@/assets/firststeps.png">
                    <img v-if="!firststeps && !loading" class="picture" src="@/assets/locked.png">
                </td>
                <td> 
                    <h3 class="award"> Owl's First Steps </h3>
                </td>
                <td> 
                   <h3 class="description"> You have just embarked your journey in eduSkool. </h3>
                </td>
            </tr>
            <tr>
                <td>
                    <div v-if="loading"> <Preloader color="grey" scale="0.6"/> </div>
                    <img v-if="firstmaths && !loading" class="picture" src="@/assets/firstmaths.png">
                    <img v-if="!firstmaths && !loading" class="picture" src="@/assets/locked.png">
                </td>
                <td> 
                  <h3 class="award"> Counting Owls </h3>
                </td>
                <td> 
                  <h3 class="description"> You have completed your first Maths quiz. </h3>
                </td>

                <td> 

                </td>
            </tr>
            <tr>
                <td>
                    <div v-if="loading"> <Preloader color="grey" scale="0.6"/> </div>
                    <img v-if="smile && !loading" class="picture" src="@/assets/smile.png">
                    <img v-if="!smile && !loading" class="picture" src="@/assets/locked.png">
                </td>
                <td> 
                   <h3 class="award"> Smile! You're on camera! </h3>
                </td>
                <td> 
                  <h3 class="description"> Uploaded a new profile picture. </h3>
                </td>
                <td> 

                </td>
            </tr>
             <tr>
                <td>
                    <div v-if="loading"> <Preloader color="grey" scale="0.6"/> </div>
                    <img v-if="firstenglish && !loading" class="picture" src="@/assets/firstenglish.png">
                    <img v-if="!firstenglish && !loading" class="picture" src="@/assets/locked.png">
                </td>
                <td> 
                   <h3 class="award"> What comes after A B C? </h3>
                </td>
                <td> 
                  <h3 class="description"> You completed your first English quiz! </h3>
                </td>
                <td> 

                </td>
            </tr>
            <tr>
                <td>
                    <div v-if="loading"> <Preloader color="grey" scale="0.6"/> </div>
                    <img v-if="firstscience && !loading" class="picture" src="@/assets/firstscience.png">
                    <img v-if="!firstscience && !loading" class="picture" src="@/assets/locked.png">
                </td>
                <td> 
                    <h3 class="award"> Experiments!! </h3>
                </td>
                <td> 
                    <h3 class="description"> You completed your first Science quiz! </h3>
                </td>
                <td>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { ref } from 'vue'
import firebaseApp from '../firebase.js'
import {getFirestore} from "firebase/firestore";
import {doc, getDoc} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import BlueBanner from "../components/BlueBanner.vue";
import LeftPanel from "../components/LeftPanel.vue"
import Preloader from '../components/Preloader.vue'

const db = getFirestore(firebaseApp)
var firststeps = ref(false)
var firstmaths = ref(false)
var smile = ref(false)
var loading = ref(true)
var firstenglish = ref(false)
var firstscience = ref(false)

export default {
  data: () => {
    return {
      loading: loading,
      firststeps: firststeps,
      firstmaths: firstmaths,
      firstenglish: firstenglish,
      firstscience: firstscience,
      smile: smile,
    }
  },
  name: 'Achievements',
  components: {
    LeftPanel,
    BlueBanner,
    Preloader,
  },

  mounted() {
    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        achievements(user);
      }
    });

    async function achievements(user) {
      let docRef = doc(db, "Achievements", user.email);
      let docSnap = await getDoc(docRef);
      firststeps.value = docSnap.data().firststeps;
      firstmaths.value = docSnap.data().firstmaths;
      smile.value = docSnap.data().smile;
      loading.value = docSnap.data().loading;
      firstenglish.value = docSnap.data().firstenglish;
      firstscience.value = docSnap.data().firstscience;
    }
  }
} 

</script>

<style scoped>
#awardTitle {
  width:12%;
}
.picture {
  width:100%;
  float:left;
}
#main{
    display:inline-block;
    margin-left:25%;
    margin-top:2%;

}

#pageTitle {
    display:inline-block;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    font-size:23px;
    margin-right:10%;
    margin-top:1%;
}
#topicstable {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
.marks {
    text-align:center;
    color: #6cc1cc;
    font-size: 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
}
th{

    font-size: 20px;
    border-bottom: 1px solid black;
}
td {

    font-size: 15px;
    border-bottom: 1px solid;
}

</style>