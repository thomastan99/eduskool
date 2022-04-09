<template>
    <div v-if="userlevel == 'P5Student'" id="main">
        <div id="pageTitle">
            <br><br><br>
            <h1> Topics </h1>
        </div>

        <div id="maths">
            <router-link to="p5maths">
                <img src="../assets/maths.png"  alt="Maths" width="750" height="130">
                </router-link>
        </div>

        <div id="english">
            <router-link to="p5english">
                <img src="../assets/english.png" alt="English" width="750" height="130">
            </router-link>
        </div>
        <div id="science">
            <router-link to="p5science">
                <img src="../assets/science.png" alt="Science" width="750" height="130">
            </router-link>
        </div>
    </div>
        <div v-if="userlevel == 'P6Student'" id="main">
        <div id="pageTitle">
            <h1> Topics </h1>
        </div>

        <div id="maths">
            <router-link to="p6maths">
                 <img src="../assets/maths.png"  alt="Maths" width="750" height="130">
            </router-link>
        </div>

        <div id="english">
            <router-link to="p6english">
                <img src="../assets/english.png" alt="English" width="750" height="130">
            </router-link>
        </div>
        <div id="science">
            <router-link to="p6science">
                <img src="../assets/science.png" alt="Science" width="750" height="130">
            </router-link>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import firebaseApp from '../firebase.js'
import {getFirestore} from "firebase/firestore";
import {doc, getDoc} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

const db = getFirestore(firebaseApp)
var userlevel = ref("");

export default {
  data: () => {
    return {
        userlevel: userlevel,
    }
  },

  mounted() {
    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        check(user);
      }
    });

    async function check(user) {
      let docRef = doc(db, "Users", user.email);
      let docSnap = await getDoc(docRef);
      userlevel.value = docSnap.data().role
    }
  }
} 
</script>

<style scoped>
/* img {
    margin-left: 120px;
} */
#main {
    display:inline-block;
    margin-left:35%;
    margin-right: 20%;
    text-align: center;
}
#pageTitle {
    display: inline-block;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    width: max-content;
    max-height: 90px;
}

#maths {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 30px 0px 20px 0px;
}
#english {
    padding: 0px 0px 20px 0px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
#science {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>