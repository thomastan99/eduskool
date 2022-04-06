<template>
<h1 id="title"> Math Leaderboard </h1>
  <table id = "table">
      <tr>
          <th> Ranking </th>
          <th> Name </th>
          <th>Score </th>
        </tr>
  </table> <br><br>
  <div id="prog">
          <div id="test" class="prog">
<circle-progress id = "progress" :show-percent=true :percent='this.pMath'/>
<p id = "subject"> % Completion for Math</p>
          </div>

<div id="test2" class = "prog">
    <circle-progress id = "progress" :show-percent=true :percent='this.pTot'/>
<p id = "subject"> % Overall Progress</p>

</div>
  </div>
</template>

<script>
import firebaseApp from '../../firebase.js'
import {getFirestore} from "firebase/firestore";
import {collection,getDocs, getDoc, doc} from "firebase/firestore";
import { getAuth} from "@firebase/auth";
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

const auth = getAuth(auth);
const db = getFirestore(firebaseApp)
export default {
   components: {CircleProgress},
   data(){
    return {
        user: auth.currentUser.email,
        math:0,
        total:0,
        pMath:0,
        pTot:0,
        questions:0,
        role:"",

    }
    
},
methods:{
    score(role){
        if(role.includes("5")){
            getDoc(doc(db,"Questions", "index")).then((doc)=>{
                let s = doc.data()
                let math = s.Primary5Maths
                let all = s.Primary5Maths + s.Primary5English + s.Primary5Science
                this.pMath = this.math/math * 100
                this.pTot = this.total/all * 100
            })
        }
        else{
              getDoc(doc(db,"Questions", "index")).then((doc)=>{
                let s = doc.data()
                let math = s.Primary6Maths
                let all = s.Primary6Maths + s.Primary6English + s.Primary6Science
                this.pMath = this.math/math * 100
                this.pTot = this.total/all * 100
                console.log(this.pMath)
            })
        }
    
    }

},

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
           

            getDoc(doc(db,"Students",this.user)).then((x) =>{
            let s = x.data()
            
            this.math = s.wk_math
            this.pMath = s.wk_math/35 * 100
            this.total = s.wk_eng + s.wk_math + s.wk_sci
            this.pTot = this.total/105 * 100
            this.role = s.role
            console.log(s.role)

            }).then(()=>{
                console.log("total added")
            })
            
            



          this.score(this.role)

  console.log(this.total)
        



    }
    

}

</script>

<style scoped>
#title {
    margin-right: 60px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
table{
    float: left;
    width: 70%;
    align-items: center;
    margin-left: 80px;
}
#main {
    top:50px;
    left:100px;
    
}
#prog{
display: inline-block;
padding: 2px;

/* margin-left:670px */

}
#subject{
    display: inline-block

/* margin-left: -550px */
}
#test{
    float: left;
    padding-right: 50px;


    /* margin-left: 30%;
    margin-right: 58%; */
}
#test2{
float: right


    /* margin-left: 50%;
    margin-right: 38%; */
}


</style>