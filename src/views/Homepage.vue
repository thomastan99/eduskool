<template>
<BlueBanner/>
<div v-if="userrole == 'P5Student' || userrole == 'P6Student'">
  <LeftPanel/>
  <Topics/>
  <Footer/>
</div>
<div v-if="userrole == 'Teacher'">
  <LeftPanelTeachers/>
  <ClassList/>
  <Footer/>
</div>

</template>

<script>
import Footer from "@/components/Footer.vue"
import LeftPanelTeachers from '@/components/LeftPanelTeachers.vue'
import LeftPanel from '../components/LeftPanel.vue'
import BlueBanner from '../components/BlueBanner.vue'
import Topics from '../components/Topics.vue'
import { onAuthStateChanged, getAuth } from '@firebase/auth'
import ClassList from '@/components/ClassList.vue'
import { ref } from 'vue'
import firebaseApp from '../firebase.js'
import {getFirestore} from "firebase/firestore";
import {doc, getDoc} from "firebase/firestore";
var userrole = ref("");
const db = getFirestore(firebaseApp)

export default {
  name: 'Home',
  components: {
    LeftPanel,
    BlueBanner,
    Topics,
    ClassList,
    LeftPanelTeachers,
    Footer,
  },

  data() {
    return {
      userrole: userrole,
      
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
      userrole.value = docSnap.data().role
    }
  }
} 
</script>

<style scoped>

</style>
