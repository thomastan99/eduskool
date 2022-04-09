<template>
  <BlueBanner/>
  <LeftPanel/>
  <div v-if="loading" id="loader"> <Preloader color="grey" scale="1"/> </div>
    <div v-if="!loading" id="main">
        <div id="pageTitle"><h1> Achievements </h1></div>
        <table id = "topicstable"> 
            <th id="awardTitle"> Award </th>
            <th> Title </th>
            <th> Description </th>
            <tr>
                <td>   
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
            <tr>
                <td>
                    <img v-if="humancal && !loading" class="picture" src="@/assets/humancal.png">
                    <img v-if="!humancal && !loading" class="picture" src="@/assets/locked.png">
                </td>
                <td> 
                    <h3 class="award"> Human Calculator </h3>
                </td>
                <td> 
                    <h3 class="description"> Completed all quizzes for Maths. </h3>
                </td>
                <td>
                </td>
            </tr>
            <tr>
                <td>
                    <img v-if="madsci && !loading" class="picture" src="@/assets/madsci.png">
                    <img v-if="!madsci && !loading" class="picture" src="@/assets/locked.png">
                </td>
                <td> 
                    <h3 class="award"> Mad Scientist </h3>
                </td>
                <td> 
                    <h3 class="description"> Completed all quizzes for Science. </h3>
                </td>
                <td>
                </td>
            </tr>
            <tr>
                <td>
                    <img v-if="dic && !loading" class="picture" src="@/assets/dictionary.png">
                    <img v-if="!dic && !loading" class="picture" src="@/assets/locked.png">
                </td>
                <td> 
                    <h3 class="award"> Dictionary Boy </h3>
                </td>
                <td> 
                    <h3 class="description"> Completed all quizzes for English. </h3>
                </td>
                <td>
                </td>
            </tr>
        </table>
    </div>
    <div v-if="!loading"> <Footer/> </div>
</template>

<script>
import Footer from "@/components/Footer.vue"
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
var humancal = ref(false)
var madsci = ref(false)
var dic = ref(false)
export default {
  data: () => {
    return {
      loading: loading,
      firststeps: firststeps,
      firstmaths: firstmaths,
      firstenglish: firstenglish,
      firstscience: firstscience,
      smile: smile,
      humancal: humancal,
      madsci: madsci,
      dic: dic,
    }
  },
  name: 'Achievements',
  components: {
    LeftPanel,
    BlueBanner,
    Preloader,
    Footer,
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
      humancal.value = docSnap.data().humancal;
      madsci.value = docSnap.data().madsci;
      dic.value = docSnap.data().dic;
    }
  }
} 

</script>

<style scoped>
#loader {
  display: inline-block;
  /* margin-top: 300px;
  margin-left:250px; */

}

.picture {
  width: 30%;
  float:center;

}
#main {
    display:inline-block;
    margin-left: 35%;
    margin-right: 20%;
    margin-top:2%;
}

#pageTitle {
    display:inline-block;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    margin-left: 5%;
    /* margin-right: 35px;
    margin-top:40px; */
}
#topicstable {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    /* margin-right: 60px;*/
    margin-top: 20px;
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