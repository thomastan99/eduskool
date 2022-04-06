<template>
  <form v-on:change= update() onsubmit = submit() >
<label for="Question">Choose a Subject</label>
<select id="sub" name="sub">
  <option value="Chapter">Primary5English</option>
  <option value="saab">Primary5Maths</option>
  <option value="fiat">Primary5Science</option>
  <option value="audi">Primary6English</option>
<option value="saab">Primary6Maths</option>
  <option value="fiat">Primary6Science</option>
</select> <br> <br>
<label for="Question">Choose a Chapter</label>
<select id="chap" name="chap">
  <option value="Chapter">Chap1</option>
  <option value="Chapter">Chap2</option>
  <option value="Chapter">Chap3</option>
  <option value="Chapter">Chap4</option>
  <option value="Chapter">Chap5</option>
</select> <br> <br>
<label for="Question">Please input the question </label> 
<input required v-on:change =  update() type="text" id="Question"><br><br>
<label for="Options">Options (Please seperate options by "/") </label>
<input v-on:change =  update() type="text" id="Options">
<br><br>
<label  for="options-finished"> Completed Options</label>
<input required type="checkbox" id="options-finished" v-on:change = next()>
<br><br>


<label for="Hint"> Hint </label>
<input v-on:change = update() type = "text" id="Hint">
<br><br>
<select v-on:change = select() required id="select">
    <option>Choose the correct answer</option>
</select>
<br><br>
<input type="submit" value = "Add to Database!" v-on:click= count(this.subject)>
<button  v-on:click= count(this.subject)> Add to database! </button>
  </form>
</template>

<script>

import firebaseApp from '../firebase.js'
import {getFirestore, updateDoc,} from "firebase/firestore";
import {collection,addDoc, getDoc, doc} from "firebase/firestore";
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


        }
    },
    methods :{
        update(){

            var e = document.getElementById("sub");
            var text=e.options[e.selectedIndex].text;
            this.subject = text 
             var f = document.getElementById("chap");
            var val=f.options[f.selectedIndex].text;
            this.chapter = val
            var num = document.getElementById("Options").value
            this.Options=[]
            this.Options = num.split("/")
            this.hint = document.getElementById("Hint").value
            this.question = document.getElementById("Question").value

        },
        next(){
            var select= document.getElementById("select")
            for(var i=0; i<this.Options.length; i++){
                var opt = this.Options[i];
                var el = document.createElement("option");
                el.textContent= opt
                el.value = opt
                select.appendChild(el)

            }
        },
            select(){
       
              var x = document.getElementById("select").selectedIndex;
            var y = document.getElementById("select").options;
            this.correct= y[x].index


            },
            submit(){
                this.select()
                console.log("made it here")
                console.log(String(this.subject))
                console.log(String(this.chapter))
                addDoc(collection(db,"Questions",String(this.subject),String(this.chapter)),{
                    question: this.question,
                    Options: this.Options,
                    selected:"",
                    answer : this.correct,
                    hint: this.hint,

                }).then(console.log("done"))

            },
             count(chap){
                getDoc(doc(db,"Questions","index")).then((doc)=>{
                    let s = doc.data()
                    let val =  s[String(chap)] + 1
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

}

</script>

<style>

</style>