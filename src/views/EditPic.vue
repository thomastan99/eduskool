<template>
  <BlueBanner />
  <div v-if="userrole == 'P5Student' || userrole == 'P6Student'">
    <LeftPanel />
  </div>
  <div v-if="userrole == 'Teacher'">
    <LeftPanelTeachers />
  </div>
  <div id="editPic">
    <img id="profilePic" alt="No picture yet" />
    <form id="editPicForm" class="editPic" @submit.prevent="update">
      <h1 class="title">Upload a new Profile Picture</h1>
      <!-- <br />
      <input type="file" id="profilepic" @change="onFileChange" />
      <br /> -->
      <!-- <input type="submit" value="Update" /> -->

      <label for="url">Please enter a valid URL:</label>
      <input type="text" id="url" v-model="url" /> <br />
      <button id="updateBtn" @click.prevent="update">Update</button>
      <!-- <p>Message is: {{ message }}</p>
<input v-model="message" placeholder="edit me" /> -->
    </form>
    <br />
    <br />
    <a href="/profile" id="cancelBtn"> Back to Profile </a>
  </div>
  <Footer/>
</template>

<script>
// import { ref } from "vue";
import Footer from "@/components/Footer.vue"
import { getAuth, onAuthStateChanged, updateProfile } from "@firebase/auth"; //
// import { useStore } from "vuex";
import BlueBanner from "../components/BlueBanner.vue";
// import { getDownloadURL } from "firebase/storage"
import LeftPanelTeachers from "@/components/LeftPanelTeachers.vue";
import LeftPanel from "../components/LeftPanel.vue";
var userrole = ref("");
import { ref } from 'vue'
import { getDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import firebaseApp from "../firebase.js"
const db = getFirestore(firebaseApp);

export default {
  name: "EditPic",

  components: {
    LeftPanel,
    BlueBanner,
    Footer,
    LeftPanelTeachers
  },

  data() {
    return {
      user: false,
      image: null,
      //   message: "",
      url: "",
      userrole: userrole
    };
  },

  mounted() {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        console.log(user);
        document.getElementById("profilePic").src = user.photoURL;
        check(user);
      }
    });
    async function check(user) {
      let docRef = doc(db, "Users", user.email);
      let docSnap = await getDoc(docRef);
      userrole.value = docSnap.data().role;
      updateDoc(doc(db,"Achievements", user.email), {
          smile: true,
      })   
    }
  },

  methods: {
    onFileChange(e) {
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
      console.log(this.file);
    },
    // removeImage: function (e) {
    //   this.image = "";
    // },
    async update() {
      // console.log(this.user.displayName);
      // console.log(this.url);
      try {
        await updateProfile(this.user, {
          photoURL: this.url,
        });
      } catch (error) {
        switch (error.code) {
          case "auth/invalid-profile-attribute":
            alert("Image URL too long");
            break;
          default:
            alert("Something went wrong");
        }
        return;
      }
      document.getElementById("profilePic").src = this.url;
    },
  },
};
</script>

<style scoped>
#editPic {
  margin-top: 150px;
  margin-left: 210px;
}

#updateBtn {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background-color: #00bcd4;
    color: white;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
}

#updateBtn:hover {
  background-color: #fb8332;
  border-radius: 8px;
}

#profilePic {
  width: 400px;
  height: auto;
}

a {
  margin-right: 130px;
  margin-left: 130px;
  /*   background-color:rgb(217, 224, 224);
  border-radius: 8px; */
  padding: 8px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
  padding-bottom: 2s0px;
}

a:hover {
  color: #fb8332;
}

h1 {
  font-size: 40px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

input {
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 20px;
  /* box-sizing: border-box; */
  height: auto;
  font-size: 25px;
}

input[type="submit"] {
  /* background-color: rgb(217, 224, 224); */
  border-radius: 8px;
  font-size: 30px;
  height: 40px;
}

input[type="submit"]:hover {
  background-color: rgb(230, 46, 40);
  border-radius: 8px;
}

label {
  display: inline-block;
  text-align: right;
  width: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  padding-right: 5px;
}

p {
  font-weight: bold;
  font-size: 18px;
  display: inline-block;
  text-align: left;
  color: black;
  margin-right: 135px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>