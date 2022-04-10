<template>
    <div id="helpPage">
        <div id="logo"><img src="../assets/elogo.png" onclick="location.href='/'" alt="EDU'skool logo"> 
            <h2 id="about" onclick="location.href='/about'"> About Us </h2>
            <h2 id="help" onclick="location.href='/help'"> Help </h2>
        </div>
        <h1 id="pageTitle"> About Us </h1>
        <div id="faq">
            <div class="question"> EDU'skool was founded in 2022 by a group of NUS students to help the students and the teachers in tuition centres. <br> <br>
              The main objective is to construct an interactive platform for tuition centres to supplement the online learning of young students by keeping their students engaged through their learning process
              using visually appealing elements and gamification.
            </div>
            <div class="question"> For Students <br> <br>
              EDU'skool utilises elementary and manageable functionalities that allow Primary 5 and Primary 6 Students to select their classes that suit their own timetable and preferences. 
              The main feature of EDU'skool for students is to attempt quizzes in line with their syllabus for Mathematics, English or Science. Some questions also come with hints to aid the students if the question
              is too challenging for them. Students are also able to view videos for that relevant topic and chapter of the quiz that they are attempting. In order to keep students engaged in their own supplementary learning,
              there is a leaderboard to gamify the web application, instilling some healthy competition among the students. There are also attractive achievements that students can unlock after completing certain challenges.
            </div>
             <div class="question"> For Teachers <br> <br>
              EDU'skool has a variety of functionalities for the tutors to monitor their students' understanding and performance in their online learning. Teachers can view their student's score for each chapter quiz to better identify
              the chapters that their students show signs of struggle. The main feature of EDU'skool for studentsis to add and delete questions of their own making to allow their students to attempt during the chapter quizzes. Teachers can also
              view the distribution of a specific chapter quiz in the form of an interactive box plot. Teachers will also have the function to announce important details to their students for easy teacher-student communication.
            </div>
        </div>
    <Footer/>
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue"
export default {
  name: "Help",
  components: {
    Footer
  },
};
</script>

<style scoped>
#about:hover, #help:hover, img:hover {
  cursor:pointer;
}
@media all and (max-width: 900px) {
    #about, #help {
        display:none;
        visibility: hidden;
    }
}
img {
    position: relative;
    left: 80px;
}
#about {
  top:10px;
  float:right;
  position: relative;
  right: 200px;
  color: black;

}
#help {
  top: 9px;
  position: relative;
  float:right;
  color: black;
}
#logo {
  background-color: #00bcd4;
}
#name {
    margin-left: 80px;
}
#feedback {
    margin-top: 15px;
}

.question {
    border-radius: 10px;
    box-shadow: 5px 5px 5px 0px;
    background-color: white;
    text-align:left;
    margin: 20px 30px 0px 30px;
    padding: 10px;
}
#faq {
    margin-top: 80px;
}
#pageTitle {
    float: left;
    margin-left: 30px;
}
#logo {
  background-color: #00bcd4;
  width: 100%;
}
#helpPage {
  text-align: center;
  min-height: 100vh;
  background-image: linear-gradient(
      rgba(228, 218, 218, 0.9),
      rgba(131, 125, 125, 0.6)
    ),
    url("../assets/teacher2.jpg");
  background-size: cover;
}
</style>