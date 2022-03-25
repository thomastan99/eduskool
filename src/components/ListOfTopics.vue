<template>

    <div id="main">
        <div id="pageTitle">
            <h1> P5 Maths </h1>
            
        </div>

        <table id = "topicstable">
            <th> Syllabus </th>
            <th> Learning Videos </th>
            <th> Quiz Score </th>
            <th> Last Attempted Score </th>

            <tr>
                <td> 
                    <h3 class="syllabus"> Chapter 1: Whole Numbers </h3>
                </td>
                <td> 
                    <button id="watch">Watch</button>
                </td>
                <td> 
                    <!-- <button id="attempt">Attempt</button> -->
                    <router-link to="/ready" tag="button" v-on:click="update('Chap1','Science')">Attempt </router-link>
                    <!-- <a id="homeworkText" href="/quiz"> </a> -->
                </td>
                <td> 
                    <h3 class="marks"> 10/10 </h3>
                </td>
            </tr>

            <tr>
                <td>
                    <h2 class="syllabus"> Chapter 2: Fractions </h2>
                </td>

                <td> 
                    <button id="watch">Watch</button>
                </td>

                <td> 
                    <router-link to="/ready" tag="button" v-on:click="update('Chap1','Math')">Attempt </router-link>
                </td>

                <td> 
                    <h3 class="marks"> 10/10 </h3>
                </td>
            </tr>

            <tr>
                <td>
                    <h3 class="syllabus"> Chapter 3: Decimals </h3>
                </td>
                <td> 
                    <button id="watch">Watch</button>
                </td>
                
                <td> 
                    <button id="attempt">Attempt</button>
                </td>
                <td> 
                    <h3 class="marks"> 8/10 </h3>
                </td>

            </tr>

             <tr>
                <td>
                    <h3 class="syllabus"> Chapter 4: Percentage </h3>
                </td>
                <td> 
                    <button id="watch">Watch</button>
                </td>
                
                <td> 
                    <button id="attempt">Attempt</button>
                </td>
                <td> 
                    <h3 class="marks"> No Attempt </h3>
                </td>

            </tr>
            <tr>
                <td>
                    <h3 class="syllabus"> Chapter 5: Ratio </h3>
                </td>
                <td> 
                    <button id="watch">Watch</button>
                </td>
                
                <td> 
                    <button id="attempt">Attempt</button>
                </td>
                <td> 
                    <h3 class="marks"> No Attempt </h3>
                </td>
            </tr>

             <tr>
                <td>
                    <h3 class="syllabus"> Chapter 6: Measurement </h3>
                </td>
                <td> 
                    <button id="watch">Watch</button>
                </td>
                
                <td> 
                    <button id="attempt">Attempt</button>
                </td>
                <td> 
                    <h3 class="marks"> No Attempt </h3>
                </td>
            </tr>
            
             <tr>
                <td>
                    <h3 class="syllabus"> Chapter 7: Geometry </h3>
                </td>
                <td> 
                    <button id="watch">Watch</button>
                </td>
                
                <td> 
                    <button id="attempt">Attempt</button>
                </td>
                <td> 
                    <h3 class="marks"> No Attempt </h3>
                </td>

            </tr>
        </table>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js'
import {getFirestore} from "firebase/firestore";
import { doc, updateDoc} from "firebase/firestore";
const db = getFirestore(firebaseApp)
export default {

    data(){
        return{
            chapter :1,
            subject :"math"
        }
    },
    methods : {
        update(chapter,subject){
            updateDoc(doc(db,"Questions","index"),{
                chapter: chapter,
                subject: subject
            }).then(() =>{
                console.log("updated")
            })

        }

    }

}
</script>

<style scoped>
#main {
    top:50px;
    left:100px;
}
#pageTitle {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  position:relative;
  top:30px;
  left:75px;
  font-size:30px;
}
#topicstable {
    display: inline-block;
    float:center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    position: relative;
    left: 100px;
    
}
.marks {
    text-align:center;
    color: #6cc1cc;
    font-size: 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
}
th{
    text-align: center;
    font-size: 20px;
    padding: 10px 25px 5px 25px;
    border-bottom: 1px solid black;
}
td {
    font-size: 15px;
    border-bottom: 1px solid;
    padding: 10px 20px 20px 10px;
    text-align:center;
}
#watch {
    text-align:center;
    font-size:15px;
    padding: 10px 20px 10px 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
}
#attempt {
    text-align:center;
    font-size:15px;
    padding: 10px 20px 10px 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
}
.syllabus{
    text-align:left;
    color: #6cc1cc;
    font-size: 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
    float: left;
}

</style>