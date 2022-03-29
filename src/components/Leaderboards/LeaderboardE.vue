<template>
<div id="main">
<h1> English Leaderboard </h1>
  <table id = "table">
      <tr>
          <th> Ranking </th>
          <th> Name </th>
          <th>Score </th>
        </tr>
  </table> <br><br>
</div>
</template>

<script>
import firebaseApp from '../../firebase.js'
import {getFirestore} from "firebase/firestore";
import {collection,getDocs} from "firebase/firestore";
const db = getFirestore(firebaseApp)



export default {
//    beforeMount(){
//        async function updateScores(){
//            let x = await getDocs(collection(db,"Students"))
//            x.forEach((docs)=>{
//                if(docs.id =="testnew2@gmail.com"){
//                let s= docs.data()
//                let scores = s.scores
//                let eng = scores.eng
//                let math = scores.math
//                let sci = scores.sci
//                let temp_eng = 0
//                let temp_sci = 0
//                let temp_math = 0
//                for (const [key,value] of Object.entries(eng)){
//                    console.log(key,value)
//                    temp_eng = temp_eng + value
//                }
//             for (const [key,value] of Object.entries(math)){
//                    console.log(key,value)
//                    temp_math = temp_math + value
//                }
//             for (const [key,value] of Object.entries(sci)){
//                    console.log(key,value)
//                    temp_sci = temp_sci + value
//                }
//                updateDoc(docs.ref,{
//                    wk_eng: temp_eng,
//                    wk_math: temp_math,
//                    wk_sci: temp_sci
//                })
//            }
//            })
//            console.log("Leaderboard Updated")


//        }
//        updateScores()

//    },

    mounted() {
        async function getScores(){
          
            let x = await getDocs(collection(db,"Students"))
            let ind = 1;
            const map =[]
            x.forEach((docs) =>{
                let s = docs.data()
                let name = s.Name
                let score = s.wk_eng
                map.push([name,score])
            })
            map.sort(function(a,b){

                if (a[1] == b[1]) {
                    return 1
                }
                else if(a[1]<b[1]){
                    return 1
                }
                else{
                    return -1
                }
            })
            for (let i in map){
   
                var table = document.getElementById("table")
                var row = table.insertRow(ind)
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = ind;
                cell2.innerHTML = map[i][0];
                cell3.innerHTML = map[i][1];
                ind ++
            }
        }
        getScores()
        



    }
    

}

</script>

<style scoped>
table{
    width: 70%;
    align-items: center;
}
#main {
    top:50px;
    left:100px;
}

</style>