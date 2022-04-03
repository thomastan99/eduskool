<template>
<BlueBanner/>
<LeftPanelTeachers/>
<div id="root">
  <div id="cs"><h1 style="font-size: 40px">Classes & Students</h1></div>
  <div id="accordions">
  <Accordion class="level1" title="Math5A">
    <br>
    <table id="Math5A">
      <tr>
        <th>Name</th>
        <th>Chapter 1 Score</th>
        <th>Chapter 2 Score</th>
        <th>Chapter 3 Score</th>
      </tr>
    </table>
  </Accordion><br><br>
  <Accordion class="level1" title="Science5A">
    <br>
    <table id="Science5A">
      <tr>
        <th>Name</th>
        <th>Chapter 1 Score</th>
        <th>Chapter 2 Score</th>
        <th>Chapter 3 Score</th>
      </tr>
    </table>
    </Accordion><br><br>
    <Accordion class="level1" title="Science6B">
      <br>
    <table id="Science6B">
      <tr>
        <th>Name</th>
        <th>Chapter 1 Score</th>
        <th>Chapter 2 Score</th>
        <th>Chapter 3 Score</th>
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
      let c = z.data().Classes
      let studentsList = []
      for (let i = 0; i < c.Math5A.Students.length; i++) {
        if (!studentsList.includes((c.Math5A.Students)[i])) {
          studentsList.push((c.Math5A.Students)[i])
        }
      }
      for (let i = 0; i < c.Science5A.Students.length; i++) {
        if (!studentsList.includes((c.Science5A.Students)[i])) {
          studentsList.push((c.Science5A.Students)[i])
        }
      }

      for (let i = 0; i < c.Science6B.Students.length; i++) {
        if (!studentsList.includes((c.Science6B.Students)[i])) {
          studentsList.push((c.Science6B.Students)[i])
        }
      }

      for (let i = 0; i < studentsList.length; i++) {
        let x = await getDoc(doc(db, "Students2", studentsList[i]))
        let d = x.data()
        if (d.classes.math == "Math5A") {
          let mscore1 = d.scores.math.chap1
          let mscore2 = d.scores.math.chap2
          let mscore3 = d.scores.math.chap3

          let mtable = document.getElementById("Math5A")
          let mrow = mtable.insertRow(-1)
          let mcell0 = mrow.insertCell(0)
          let mcell1 = mrow.insertCell(1)
          let mcell2 = mrow.insertCell(2)
          let mcell3 = mrow.insertCell(3)

          mcell0.innerHTML = d.name
          mcell1.innerHTML = mscore1
          mcell2.innerHTML = mscore2
          mcell3.innerHTML = mscore3
        }
        if (d.classes.sci == "Science5A") {
          let sscore1 = d.scores.sci.chap1
          let sscore2 = d.scores.sci.chap2
          let sscore3 = d.scores.sci.chap3

          let stable = document.getElementById("Science5A")
          let srow = stable.insertRow(-1)
          let scell0 = srow.insertCell(0)
          let scell1 = srow.insertCell(1)
          let scell2 = srow.insertCell(2)
          let scell3 = srow.insertCell(3)

          scell0.innerHTML = d.name
          scell1.innerHTML = sscore1
          scell2.innerHTML = sscore2
          scell3.innerHTML = sscore3
        }
        if (d.classes.sci == "Science6B") {
          let sscore1 = d.scores.sci.chap1
          let sscore2 = d.scores.sci.chap2
          let sscore3 = d.scores.sci.chap3

          let stable = document.getElementById("Science6B")
          let srow = stable.insertRow(-1)
          let scell0 = srow.insertCell(0)
          let scell1 = srow.insertCell(1)
          let scell2 = srow.insertCell(2)
          let scell3 = srow.insertCell(3)

          scell0.innerHTML = d.name
          scell1.innerHTML = sscore1
          scell2.innerHTML = sscore2
          scell3.innerHTML = sscore3
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