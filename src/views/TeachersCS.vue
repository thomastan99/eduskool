<template>
<BlueBanner/>
<LeftPanelTeachers/>
<div id="root">
  <div id="cs"><h1 style="font-size: 40px">Classes & Students</h1></div>
  <div id="accordions">
  <Accordion class="level1" title="English5A">
    <br>
    <table id="English5A">
      <tr>
        <th>Name</th>
        <th>Chapter 1 Score</th>
        <th>Chapter 2 Score</th>
        <th>Chapter 3 Score</th>
      </tr>
    </table>
    <!-- <Accordion class="level2" title="Tay Chung Tak">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion> -->
    <!-- <Accordion class="level2" title="Nasry">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
    <Accordion class="level2" title="Chase Ng">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion> -->
  </Accordion><br><br>
  <!-- <Accordion class="level1" title="Math 3">
    <Accordion class="level2" title="Tay Chung Tak">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
    <Accordion class="level2" title="Nasry">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
    <Accordion class="level2" title="Chase Ng">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
  </Accordion>
  <Accordion class="level1" title="Science 2">
    <Accordion class="level2" title="Tay Chung Tak">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
    <Accordion class="level2" title="Nasry">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
    <Accordion class="level2" title="Chase Ng">
      Chapter 1 Score - 95
      <br> Chapter 2 Score - 92
      <br> Chapter 3 Score - 91
    </Accordion>
  </Accordion> -->
  <Accordion class="level1" title="English5B">
    <br>
    <table id="English5B">
      <tr>
        <th>Name</th>
        <th>Chapter 1 Score</th>
        <th>Chapter 2 Score</th>
        <th>Chapter 3 Score</th>
      </tr>
    </table>
    </Accordion><br><br>
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
    <Accordion class="level1" title="Math5B">
      <br>
    <table id="Math5B">
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
    <Accordion class="level1" title="Science5B">
      <br>
    <table id="Science5B">
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
import { getFirestore, collection, getDocs } from "firebase/firestore"

const db = getFirestore(firebaseApp)


export default {
  name: 'App',
  components: {
    BlueBanner,
    LeftPanelTeachers,
    Accordion
  },
  mounted() {
    async function display() {
      let z = await getDocs(collection(db, "Students2"))
      

      z.forEach((docs) => {
        let d = docs.data()
        let eclass = d.classes.eng
        let mclass = d.classes.math
        let sclass = d.classes.sci

        let escore1 = d.scores.eng.chap1
        let escore2 = d.scores.eng.chap2
        let escore3 = d.scores.eng.chap3

        let mscore1 = d.scores.math.chap1
        let mscore2 = d.scores.math.chap2
        let mscore3 = d.scores.math.chap3

        let sscore1 = d.scores.sci.chap1
        let sscore2 = d.scores.sci.chap2
        let sscore3 = d.scores.sci.chap3

        var etable = document.getElementById(eclass)
        var erow = etable.insertRow(-1)
        var ecell0 = erow.insertCell(0)
        var ecell1 = erow.insertCell(1)
        var ecell2 = erow.insertCell(2)
        var ecell3 = erow.insertCell(3)

        ecell0.innerHTML = d.name
        ecell1.innerHTML = escore1
        ecell2.innerHTML = escore2
        ecell3.innerHTML = escore3

        var mtable = document.getElementById(mclass)
        var mrow = mtable.insertRow(-1)
        var mcell0 = mrow.insertCell(0)
        var mcell1 = mrow.insertCell(1)
        var mcell2 = mrow.insertCell(2)
        var mcell3 = mrow.insertCell(3)

        mcell0.innerHTML = d.name
        mcell1.innerHTML = mscore1
        mcell2.innerHTML = mscore2
        mcell3.innerHTML = mscore3

        var stable = document.getElementById(sclass)
        var srow = stable.insertRow(-1)
        var scell0 = srow.insertCell(0)
        var scell1 = srow.insertCell(1)
        var scell2 = srow.insertCell(2)
        var scell3 = srow.insertCell(3)

        scell0.innerHTML = d.name
        scell1.innerHTML = sscore1
        scell2.innerHTML = sscore2
        scell3.innerHTML = sscore3

      })
    }
    display()
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