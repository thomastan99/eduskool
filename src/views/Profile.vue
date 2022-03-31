<template>
  <BlueBanner/>
  <LeftPanel/>
  <div id="main"> 
    <h1>Profile Details</h1>
    <div id="userDetails">
      <div id="details">
        <p><strong>Name:</strong> {{ user.displayName }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Weekly English Score:</strong><span id = "wk_eng"></span></p>
        <p><strong>Weekly Mathematics Score:</strong><span id = "wk_math"></span></p>
        <p><strong>Weekly Science Score:</strong><span id = "wk_sci"></span></p>
        <button>Upload Profile Image </button>
      </div>
    </div>
</div>

</template>

<script>
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import BlueBanner from "../components/BlueBanner.vue";
import LeftPanel from "../components/LeftPanel.vue"
import firebaseApp from "../firebase.js"
import { getFirestore } from "firebase/firestore";
import { getDoc, doc, updateDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);
export default {
  name: "Profile",
  components: {
    BlueBanner,
    LeftPanel
  },

  data() {
    return {
      user: false,
      wk_eng: 0,
      wk_sci: 0,
      wk_math: 0,
    };
  },
  mounted() {
    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        getClasses(user);
        updateAchievement(user);
      }
    });
    async function updateAchievement(user) {
      await updateDoc(doc(db, "Achievements", user.email), {
        smile: true
      })
    }
    async function getClasses(user) {
        // console.log(user.photoURL);
      if (user.photoURL == "Student") {
        let docRef = doc(db, "Students", user.email);
        let docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log(docSnap.data().wk_eng);
            let data = docSnap.data();
            document.getElementById("wk_eng").innerHTML = data.wk_eng;
            document.getElementById("wk_math").innerHTML = data.wk_math;
            document.getElementById("wk_sci").innerHTML = data.wk_sci;
        } else {
            console.log("no such document")
        }
      } else {
          return null;
      }
    }
    

  },
};
</script>

<style scoped>
#userDetails {
  text-align: center;
  border: 1px solid black;
  outline-style: solid;
  outline-color: grey;
  outline-width: medium;
  width: 50%;
  margin: 0 auto;
}

#main {
  display:inline-block;
  width:100%;
  margin-top:100px;
  margin-left:100px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-size:23px;
}

#details {
  width: 38%;
  margin: auto;
  text-align: left;
}

span {
    padding-left: 5px;
}
</style>