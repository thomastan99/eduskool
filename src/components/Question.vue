<template>
  <div class="top">
        <br>
        <h1>Subject - Topic</h1>
        <hr>
    </div>

    <div class="exit">
      <a href="/home" tag="button" style="appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #d9534f;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  display: inline-block;">Exit </a>
    </div> 
    

    <div class="question">
        <h2>Question {{ getCurrentQuestion.index + 1 }}</h2> <!---show question number--->

        <section class="quiz" v-if="!quizCompleted"> <!--- if not last question--->
            <div class="quizInfo">{{ getCurrentQuestion.question }}</div>

            <div class="options">
                <!---for every option available, if the option selected is the answer, mark it as correct else mark it as wrong--->
                <!---else, if the unselected question is correct, mark it as correct. else mark it as disabled--->
                <label 
                    v-for="(option, index) in getCurrentQuestion.options" 
          :key="index"
          :class="`option ${ 
            getCurrentQuestion.selected == index 
              ? index == getCurrentQuestion.answer 
                ? 'correct' 
                : 'wrong'
              : ''
          } ${
            getCurrentQuestion.selected != null &&
            index != getCurrentQuestion.selected && index == getCurrentQuestion.answer
              ? 'correct'
              : getCurrentQuestion.selected != null && index != getCurrentQuestion.selected
                                ? 'disabled'
                                : ''
          }`">
                    <!---disable every other option once an option is selected and set the selected option as the answer--->
                    <input 
                        type="radio" 
                        :name="getCurrentQuestion.index" 
                        :value="index" 
                        v-model="getCurrentQuestion.selected"
                        :disabled="getCurrentQuestion.selected"
                        @change="setAnswer"
                    />
                    <!---show each option--->
                    <span>{{ option }}</span>
                </label>
            </div>
            <div class="buttons">
                <button class="hintButton" @click="() => TogglePopup('buttonTrigger')">Hint</button>
                <Hint v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')">
                  <h2>Hint</h2>
                  <p>{{getCurrentQuestion.hint}}</p> <br>
                </Hint>

                <button class="nextButton"
        @click="nextQuestion" 
        :disabled="!getCurrentQuestion.selected">
                    {{ 
                        getCurrentQuestion.index == questions.length - 1 
                            ? 'Submit' 
                            : getCurrentQuestion.selected == null
                                ? 'Select your answer'
                                : 'Next'
                    }}
      </button>
            </div>
        </section>

        <!---if current question is last question, show final page with score--->
        <section v-else>
            <h2>You have finished the quiz!</h2>
      <p>Your score is {{ score }}/{{ questions.length }}</p>
        </section>
    </div>
    
</template>

<script setup>
import { ref, computed } from 'vue'
import firebaseApp from '../firebase.js'
import {getFirestore} from "firebase/firestore";
import {collection,getDocs, doc, getDoc, updateDoc} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Hint from "./Hint.vue";

const db = getFirestore(firebaseApp)
const auth = getAuth();
const fbuser = auth.currentUser.email

let subject =""
let chap = ""

const questions = ref([])
//const docRef = doc(db, "Questions", "index");
const docRef = doc(db, "Students", String(fbuser));

getDoc(docRef).then(doc =>{
    let s = doc.data()
    console.log(s)
    subject = s.currQuizSubject
    chap = s.currQuizChapter

getDocs(collection(db,"Questions",String(subject),String(chap))).then(querySnapshot => {
        querySnapshot.forEach((docs) =>{
        let s = docs.data()

        questions.value.push({
            question: s.question,
            answer: s.answer,
            options: s.Options,
            selected: null,
            hint: s.hint
        })

    })

    })
    }

)
console.log(questions)
// const data = docSnap.data()
// subject = String(data.subject)
//  chap = String(data.chapter)
//  return subject,chap






    console.log(questions)
         function update(score, subject, chapter){
            let sub = subject.toLowerCase()
            if (sub == "science"){
                sub = "sci"
            }
     
             
          updateDoc(doc(db,"Students",fbuser),{
        ["scores."+sub+"."+chapter] : score

    }).then(() =>{
        console.log("updated")
    })
        }
    // function update(score, subject, chapter){
    //     let scores = null
    //     console.log(scores)
    //     getDocs (db,"Students",String(fbuser)).then(doc=>{
    //         let s = doc.data()
    //         console.log(s)
    //         let scores = s.scores
    //         console.log(score, subject,chapter,scores)
            
    //     //     if(subject == "Math"){
    //     //         scores = s.scores.math
    //     //     }
    //     //     else if(subject =="Sci"){
    //     //         scores = s.scores.sci
    //     //     }
    //     //     scores.set(chapter, score)
    //     //     updateDoc(doc.ref,{
    //     //         scores: scores
    //     //     })
    //     // }).then(()=>{
    //     //     console.log("Updated")
    //     }).then(()=>{
    //         console.log("done")
    //     })
    // }




    const quizCompleted = ref(false)
    const currentQuestion = ref(0)
    console.log(currentQuestion.value)


    //Calculate score
    const score = computed(() => {
        let value = 0
        questions.value.map(q => {
            if (q.selected != null && q.answer == q.selected) {
                console.log('correct');
                value++
            }
        })
   
        
        update(value, subject, chap)
        return value
    })

    //Get current question
    const getCurrentQuestion = computed(() => {
        let question = questions.value[currentQuestion.value]
        question.index = currentQuestion.value
        return question
    })

    const setAnswer = (e) => {
        questions.value[currentQuestion.value].selected = e.target.value
        e.target.value = null
    }

    const nextQuestion = () => {
        if (currentQuestion.value < questions.value.length - 1) {
            currentQuestion.value++
            return
        }
        
        quizCompleted.value = true
    }

  const popupTriggers = ref({
			buttonTrigger: false,
		});
	const TogglePopup = (trigger) => {
			popupTriggers.value[trigger] = !popupTriggers.value[trigger]
		}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Varela Round', sans-serif;
}

.question {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100vh;
}

.quiz {
  width: 100%;
}

.quizInfo {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.options {
  margin-bottom: 1rem;
}

.option {
  padding: 1rem;
  display: block;
  background-color: #F3EEEE;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: left;
}

.option:hover {
  background-color: #C4C4C4;
}

.option input {
  display: none;
}

.option.correct {
  background-color: #2cce7d;
}

.option.wrong {
  background-color: #ff5a5f;
}

.buttons {
    text-align: right;
}

.exit {
  text-align: right;
  margin-right: 20px;
  margin-top: 10px;
}

button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #00BCD4;
  color: #2d213f;
  font-weight: 700;
  font-size: 1.2rem;
  display: inline-block;
}

button:disabled {
  opacity: 0.5;
}

.hintButton {
    margin-right: 20px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.hint {
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.2);
	align-items: center;
	justify-content: center;
  text-align: center;
  width: 100%;
}

.top {
    overflow: hidden;
    font-family: 'Varela Round', sans-serif;
    font-size: 14px;
}

h1 {
    font-family: 'Varela Round', sans-serif;
    text-align: left;  
}


</style>