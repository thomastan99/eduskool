<template>
  <BlueBanner />
  <div v-if="userrole == 'P5Student' || userrole == 'P6Student'">
    <LeftPanel />
  </div>
  <div v-if="userrole == 'Teacher'">
    <LeftPanelTeachers />
  </div>
  <div id="header">
    <br />
    <br />
    <br />
    <br />
    <a href="./editPic"
      ><img id="profilePic" alt="Click to add a Profile Picture"
    /></a>
    <h1>
      Profile Details
      <a href="/editprofile"><img id="editlogo" src="../assets/edit.png" /></a>
    </h1>
  </div>
  <div id="userDetails">
    <div id="details">
      <p><strong>Name:</strong> {{ user.displayName }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><span id="wk_eng"></span></p>
      <p><span id="wk_math"></span></p>
      <p><span id="wk_sci"></span></p>
      <p><span id="classes"></span></p>
    </div>
  </div>
  <Footer />
</template>

<script>
import LeftPanelTeachers from "@/components/LeftPanelTeachers.vue";
import Footer from "@/components/Footer.vue";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import BlueBanner from "../components/BlueBanner.vue";
import LeftPanel from "../components/LeftPanel.vue";
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { getDoc, doc } from "firebase/firestore";
import { ref } from "vue";
const db = getFirestore(firebaseApp);
var userrole = ref("");

export default {
  name: "Profile",
  components: {
    LeftPanel,
    BlueBanner,
    Footer,
    LeftPanelTeachers,
  },

  data() {
    return {
      user: false,
      wk_eng: 0,
      wk_sci: 0,
      wk_math: 0,
      image: null,
      userrole: userrole,
    };
  },

  methods: {
    handleFile(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.file = files[0];
      this.createImage(files[0]);
    },
    createImage(file) {
      // var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
      console.log(file.name);
    },
    // removeImage: function (e) {
    //   this.image = "";
    // },
  },

  mounted() {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        getClasses(user);
        document.getElementById("profilePic").src = user.photoURL;
        check(user);
      }
    });
    async function check(user) {
      let docRef = doc(db, "Users", user.email);
      let docSnap = await getDoc(docRef);
      userrole.value = docSnap.data().role;
    }
    async function getClasses(user) {
      // console.log(user.photoURL);
      let docRef = doc(db, "Users", user.email);
      let docSnap = await getDoc(docRef);
      let role = docSnap.data().role;
      if (role == "P5Student" || role == "P6Student") {
        userrole.value = role;
        let docRef = doc(db, "Students", user.email);
        let docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log(docSnap.data().wk_eng);
          let data = docSnap.data();
          document.getElementById("wk_eng").innerHTML =
            "English Score: " + data.wk_eng;
          document.getElementById("wk_math").innerHTML =
            "Maths Score: " + data.wk_math;
          document.getElementById("wk_sci").innerHTML =
            "Science Score: " + data.wk_sci;
        } else {
          console.log("no such document");
        }
      } else {
        userrole.value = "Teacher";
        let docRef = doc(db, "Teachers", user.email);
        let docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log(docSnap.data().Classes);
          let classes = docSnap.data().Classes;
          document.getElementById("classes").innerHTML =
            "Classes taught: " + classes;
        } else {
          console.log("no such document");
        }
      }
    }
  },
};
</script>

<style scoped>
#main {
  margin-left: 200px;
  margin-top: 80px;
}
#header {
  display: inline;
}
#userDetails {
  text-align: center;
  border: 1px solid black;
  outline-style: solid;
  outline-color: grey;
  outline-width: medium;
  width: 650px;
  margin: 0 auto;
}

#profilePic {
  width: 400px;
  height: auto;
}

h1 {
  margin-bottom: 30px;
  margin-top: 45px;
}

#editlogo {
  height: 28px;
  /* width: 25px; */
  padding-left: 10px;
}

p {
  font-weight: bold;
  font-size: 18px;
  color: black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>