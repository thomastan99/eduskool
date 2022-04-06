<template>
  <form onsubmit = submit() >
<label for="Question">Choose a Subject  </label>
<select id="sub" name="sub" v-on:change= update()>
  <option value="Chapter">Primary5English</option>
  <option value="saab">Primary5Maths</option>
  <option value="fiat">Primary5Science</option>
  <option value="audi">Primary6English</option>
<option value="saab">Primary6Maths</option>
  <option value="fiat">Primary6Science</option>
</select> <br> <br>
<label for="Question">Choose a Chapter  </label>
<select id="chap" name="chap" v-on:change= update()>
  <option value="Chapter">Chap1</option>
  <option value="Chapter">Chap2</option>
  <option value="Chapter">Chap3</option>
  <option value="Chapter">Chap4</option>
  <option value="Chapter">Chap5</option>
</select> <br> <br>
<label for="select">Choose a Question   </label>
<select v-on:change= select() required id="select">
    <option>Choose the Question to delete! </option>

</select>
<br><br>
<button v-on:click = count(this.subject)> Delete !</button>
  </form>
      <div id="ques">
          <h1>Full Question: </h1><br>
  <h3>{{this.question}}</h3>
  </div>
</template>

<script>

import firebaseApp from '../firebase.js'
import { getFirestore, updateDoc,} from "firebase/firestore";
import {collection, deleteDoc,getDoc,getDocs, doc} from "firebase/firestore";
const db = getFirestore(firebaseApp)

export default {
    name: "AddQues",
    data(){
        return{
            numOptions:0,
            subject:"",
            chapter:"",
            question:"",
            Options:[],
            correct:-1,
            hint:"Sorry the teacher didn't provide a hint!",
            ids:[],
            toDel:"",


        }
    },
    methods :{
        update(){
            this.question=""
            var e = document.getElementById("sub");
            var text=e.options[e.selectedIndex].text;
            this.subject = text
             var f = document.getElementById("chap");
            var val=f.options[f.selectedIndex].text;
            this.chapter = val
            const myNode = document.getElementById("select");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }
            this.next()

        },
        next(){

            let Questions = []
            this.ids = []
            getDocs(collection(db,"Questions",String(this.subject),String(this.chapter))).then(querySnapshot =>{
                querySnapshot.forEach((doc)=>{
                    let s=doc.data()
                    this.ids.push(doc.id)
                    Questions.push(s.question)
                })
            }).then(()=>{
                console.log("done")
                console.log(this.ids)
                this.temp(Questions)
            })

        },
        temp(Questions){
            var select= document.getElementById("select")
                var placeholder = "Choose the Question to delete";
                var ell = document.createElement("option");
                ell.textContent= placeholder
                ell.value = placeholder
                select.appendChild(ell)
                
                for(var i=0; i<Questions.length; i++){
                var opt = Questions[i];
                var el = document.createElement("option");
                el.textContent= opt
                el.value = opt
                select.appendChild(el)
            }

        },
            select(){
       
            var x = document.getElementById("select").selectedIndex;
            var y = document.getElementById("select").options;
            console.log(y[x].text)
            this.question  = y[x].text
            var ref = y[x].index
            console.log(ref)
            console.log(this.ids[ref])
            this.toDel = this.ids[ref]

            




            },
            submit(){
            alert("You are going to delete the selected question, this action cannot be undone")
            var x = document.getElementById("select").selectedIndex;
            var y = document.getElementById("select").options;
            console.log(y[x].text)
            this.question  = y[x].text
            var ref = y[x].index
            console.log(ref)
            console.log(this.ids[ref])
            this.toDel = this.ids[ref]
            console.log(this.question)
            console.log(this.subject)
            console.log(this.chapter)
            console.log(this.ids[ref])
            deleteDoc(doc(db,"Questions", String(this.subject), String(this.chapter),String(this.ids[ref]))).then(console.log("deleted"))

            },
             count(chap){
                getDoc(doc(db,"Questions","index")).then((doc)=>{
                    let s = doc.data()
                    let val =  s[String(chap)] -1
                    this.change(chap,val)
                    console.log(chap)
                    console.log(val)
                })

             },
             change(chap, val){
                 updateDoc(doc(db,"Questions","index"),{
                     chap : val
                 }).then(()=>{
                     console.log("Score Added")
                 })
             }
                

    // }).then(() =>{
    //         updateDoc(doc(db,"Questions","index"),{
    //                 chap: 1
                
    //             })
    //     console.log("updated")
    // })
                

    //         }
    },
    mounted(){
        this.update()
    }

}

</script>

<style scoped>
form{
    max-width: 70%;
}

#ques{
    margin-left: 400px;
    width: 50%;
}

select{
    width:150px;
}
select option{
    width:120px;
    overflow:hidden;
}

</style>