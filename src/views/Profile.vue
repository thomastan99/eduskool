<template>
  <BlueBanner />
  <h1>Profile Details</h1>
  <div id="userDetails">
    <div id="details">
      <p><strong>Name:</strong> {{ user.displayName }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Weekly English Score:</strong><span id = "wk_eng"></span></p>
      <p><strong>Weekly Mathematics Score:</strong><span id = "wk_math"></span></p>
      <p><strong>Weekly Science Score:</strong><span id = "wk_sci"></span></p>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import BlueBanner from "../components/BlueBanner.vue";
import firebaseApp from "../firebase.js"
import { getFirestore } from "firebase/firestore";
import { getDoc, doc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: "Profile",
  components: {
    BlueBanner,
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
      }
    });

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

<style>
#userDetails {
  text-align: center;
  border: 1px solid black;
  outline-style: solid;
  outline-color: grey;
  outline-width: medium;
  width: 50%;
  margin: 0 auto;
}

#details {
  width: 38%;
  margin: auto;
  text-align: left;
}

h1 {
  margin-bottom: 30px;
  margin-top: 45px;
}

span {
    padding-left: 5px;
}
</style>