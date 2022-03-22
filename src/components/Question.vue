<template>
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
                <button class="hintButton">
                    Hint
                </button>

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
import {collection,getDocs} from "firebase/firestore";


    const db = getFirestore(firebaseApp)

    const questions = ref([])
   getDocs(collection(db,"Questions","Science","Chap1")).then(querySnapshot => {
        querySnapshot.forEach((docs) =>{
        let s = docs.data()
        questions.value.push({
            question: s.question,
            answer: s.answer,
            options: s.Options,
            selected: null

        })

    })

    })




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
</style>