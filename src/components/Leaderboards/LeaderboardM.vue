<template>
<h1> Math Leaderboard </h1>
  <table id = "table">
      <tr>
          <th> Ranking </th>
          <th> Name </th>
          <th>Score </th>
        </tr>
  </table> <br><br>
</template>

<script>
import firebaseApp from '../../firebase.js'
import {getFirestore} from "firebase/firestore";
import {collection,getDocs} from "firebase/firestore";
const db = getFirestore(firebaseApp)



export default {
   

    mounted() {
        async function getScores(){
          
            let x = await getDocs(collection(db,"Students"))
            let ind = 1;
            const map =[]
            x.forEach((docs) =>{
                let s = docs.data()
                let name = s.Name
                let score = s.wk_math
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

</style>