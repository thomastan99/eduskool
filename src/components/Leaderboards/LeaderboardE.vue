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

  
  <div id="prog">
          <div id="test" class="prog">
<circle-progress id = "progress" :show-percent=true :percent='this.pEng' :transition=20 />
<p id = "subject"> % Completion for English</p>
          </div>

<div id="test2" class = "prog">
    <circle-progress id = "progress" :show-percent=true :percent='this.pTot' :transition=20 />
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

const db = getFirestore(firebaseApp);
const auth = getAuth(auth);


export default {
components: {CircleProgress},
data(){
    return {
        user: auth.currentUser.email,
           eng:0,
        total:0,
        pEng:0,
        pTot:0,
        role:"",


    }
    
},
methods:{
    score(role){
        if(role.includes("5")){
            getDoc(doc(db,"Questions", "index")).then((doc)=>{
                let s = doc.data()
                let eng = s.Primary5English
                let all = s.Primary5Maths + s.Primary5English + s.Primary5Science
                this.pEng = this.eng/eng * 100
                this.pTot = this.total/all * 100
                console.log(all)
                console.log(this.total)
                console.log(this.pTot)
            })
        }
        else{
              getDoc(doc(db,"Questions", "index")).then((doc)=>{
                let s = doc.data()
                let eng= s.Primary6English
                let all = s.Primary6Maths + s.Primary6English + s.Primary6Science
                this.pEng = this.eng/eng * 100
                this.pTot = this.total/all * 100
            })
        }
    
    }

},


    mounted() {


                const auth = getAuth(auth);
            
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user = user;
                }
        });
        console.log(this.user)
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

 
          
          

  console.log(this.total)
            
        },
        beforeMount(){
            getDoc(doc(db,"Students",this.user)).then((x) =>{
            let s = x.data()

            this.eng = s.wk_eng
            this.pEng = s.wk_eng
            this.total = s.wk_eng + s.wk_math + s.wk_sci
            this.role = s.role
            this.score(this.role)

            }).then(()=>{
                console.log("total added")
            })

        }

      

        







    
    

}

</script>

<style scoped>
table{
    float: left;
    width: 70%;
    align-items: center;
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