<template>
<BlueBanner/>
<LeftPanelTeachers/>
<div id="root">
  <div id="cs"><h1 style="font-size: 40px">Classes & Students</h1></div>
  <div id="accordions">
  <Accordion class="level1" title="Maths5A">
    <br>
    <table id="Maths5A" class="noscopetable">
      <tr class="noscopetr">
        <th class="noscopeth">Name</th>
        <th class="noscopeth">Chapter 1 Score</th>
        <th class="noscopeth">Chapter 2 Score</th>
        <th class="noscopeth">Chapter 3 Score</th>
      </tr>
    </table>
  </Accordion><br><br>
  <Accordion class="level1" title="Science5A">
    <br>
    <table id="Science5A">
      <tr class="noscopetr">
        <th class="noscopeth">Name</th>
        <th class="noscopeth">Chapter 1 Score</th>
        <th class="noscopeth">Chapter 2 Score</th>
        <th class="noscopeth">Chapter 3 Score</th>
      </tr>
    </table>
    </Accordion><br><br>
    <Accordion class="level1" title="Science6B">
      <br>
    <table id="Science6B">
      <tr class="noscopetr">
        <th class="noscopeth">Name</th>
        <th class="noscopeth">Chapter 1 Score</th>
        <th class="noscopeth">Chapter 2 Score</th>
        <th class="noscopeth">Chapter 3 Score</th>
      </tr>
    </table>
    </Accordion><br><br>
</div>
</div>


</template>

<script>
import BlueBanner from '@/components/BlueBanner.vue'
import LeftPanelTeachers from '@/components/LeftPanelTeachers.vue'
import Accordion from '@/components/Accordion.vue'
import firebaseApp from "../firebase.js"
import { getFirestore, getDoc, doc } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const db = getFirestore(firebaseApp)


export default {
  name: 'App',
  components: {
    BlueBanner,
    LeftPanelTeachers,
    Accordion
  },
  mounted() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user
        display(user)
      }
    })

    async function display(user) {
      let z = await getDoc(doc(db, "Teachers", user.email))
      let classeslist = z.data().Classes

      for (let i = 0; i < classeslist.length; i++) {
        let currclass = classeslist[i]
        let y = await getDoc(doc(db, "Classes", currclass))
        let currstudentlist = y.data().students

        for (let j = 0; j < currstudentlist.length ; j++) {
          let currstudent = currstudentlist[j]
          let x = await getDoc(doc(db, "Students", currstudent))
          let info = x.data()
          let name = info.Name
          let score1
          let score2
          let score3
          if (currclass == "Maths5A") {
            score1 = info.scores.math.Chap1
            score2 = info.scores.math.Chap2
            score3 = info.scores.math.Chap3
          } else {
            score1 = info.scores.sci.Chap1
            score2 = info.scores.sci.Chap2
            score3 = info.scores.sci.Chap3
          }
          
          let table = document.getElementById(currclass)
          let row = table.insertRow(-1)
          let cell0 = row.insertCell(0)
          let cell1 = row.insertCell(1)
          let cell2 = row.insertCell(2)
          let cell3 = row.insertCell(3)
          cell0.innerHTML = name
          cell1.innerHTML = score1
          cell2.innerHTML = score2
          cell3.innerHTML = score3
        }
      }   
    }
  }
}
</script>

<style scoped>
#accordions {
  margin-top: 20px;
  padding-left: 20px;
  width: 900px;
  float: left;
}

#cs {
    float: left;
}

#root {
  margin-top: 50px;
  margin-left: 320px;
  display: inline-block;
}

table {
    border: 1px solid black;
    border-collapse: collapse;
    width: 750px;
}

tr:nth-child(even) {
    background-color: #e3edee;
}

tr.border {
  outline: thin solid;
}

th, td {
    border: 1px solid black;
    text-align: center;
    padding: 8px;
    color: #00bcd4;
}
</style>