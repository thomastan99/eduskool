<template>
<div id="main">
<h1 id="title"> Science Leaderboard </h1>
  <table id = "table">
      <tr>
          <th> Ranking </th>
          <th> Name </th>
          <th>Score </th>
        </tr>
  </table> 
  <br><br>

</div>


  
  <div id="prog">
          <div id="test" class="prog">
<circle-progress id = "progress" :show-percent=true :percent='this.pSci'/>
<p id = "subject"> % Completion for Science</p>
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
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

const db = getFirestore(firebaseApp)



export default {
   
components: {CircleProgress},
data(){
    return {
        user: false,
        sci:0,
        total:0,
        pSci:0,
        pTot:0,
        role:'',



    }
    
},
methods:{
    score(role){
        if(role.includes("5")){
            getDoc(doc(db,"Questions", "index")).then((doc)=>{
                let s = doc.data()
                let sci = s.Primary5Science
                let all = s.Primary5Maths + s.Primary5English + s.Primary5Science
                this.pSci = this.sci/sci * 100
                this.pTot = this.total/all * 100
            })
        }
        else{
              getDoc(doc(db,"Questions", "index")).then((doc)=>{
                let s = doc.data()
                let sci = s.Primary6Science
                let all = s.Primary6Maths + s.Primary6English + s.Primary6Science
                this.pSci = this.sci/sci * 100
                this.pTot = this.total/all * 100
            })
        }
        console.log("doneeee")
    
    }

},
    mounted() {
            const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
                    getDoc(doc(db,"Students",user.email)).then((x) =>{
            let s = x.data()
            this.sci = s.wk_sci
            this.total = s.wk_eng + s.wk_math + s.wk_sci
            this.role = s.role
            this.score(this.role)

            }).then(()=>{
                console.log("total added")
            })
      }
    });

        async function getScores(){
          
            let x = await getDocs(collection(db,"Students"))
            let ind = 1;
            const map =[]
            x.forEach((docs) =>{
                let s = docs.data()
                let name = s.Name
                let score = s.wk_sci
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


          

  console.log(this.total)
  
        



    }
    

}

</script>

<style scoped>
#title {
    margin-right: 220px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
table{
    float: left;
    width: 70%;
    align-items: center;
}
#main {
    margin-left: 180px;
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