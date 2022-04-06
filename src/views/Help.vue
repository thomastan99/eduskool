<template>
    <div id="helpPage">
        <div id="logo"><img src="../assets/elogo.png" onclick="location.href='/'" alt="EDU'skool logo"> 
            <h2 id="about" onclick="location.href='/about'"> About Us </h2>
            <h2 id="help" onclick="location.href='/help'"> Help </h2>
        </div>
        <h1 id="pageTitle"> Common FAQs </h1>
        <div id="faq">
            <div class="question"> <b>Why do I only see a white page when I open EDU'skool? </b> <br><br>
            Please update your browser or use another computer to access EDU'skool. We recommend the latest version
            of Google Chrome, Firefox. Browser versions on Safari and Edge may not be compatible with our website. <br><br>
            If you're seeing a white page in an up-to-date Chrome, Firefox browser, do contact us at eduskool@gmail.com
            </div>
            <div class="question"> <b>How do I register as a student? </b> <br><br>
            On the Registration Page, input ur First Name, Last Name, Email, Password and indicate what level student you are! 
            Currently, our website tailors only to Primary 5 and Primary 6 students. Development for lower primary is in progress!
            </div>
            <div class="question"> <b>I want to cancel a class I've enrolled in. </b> <br><br>
            To cancel class, you have to inform your respective teachers allocated to your class or head down to the centre to cancel your class.
            </div>
            <div class="question"> <b>Quizzes are too difficult. </b> <br><br>
            Online quizzes on EDU'skool assists students for higher level academic learning. Our quizzes are based of your current cirriculum. 
            There is a hint function for every quiz question if you do face any difficulties. Do approach our tutors if you still do not understand any concepts or
            watch the online videos in the respective topics page.
            </div>
        </div>
        <div class="question">
            Any other problems faced and you still require any assistance, do submit a form and we'll get back to you on the problem.
            <form id="feedback">
                <label for="number"> <b>Name: </b></label>
                <input type="text" id="name" required="" placeholder="Name"> <br><br>
                <label for="number"> <b>Contact Number: </b></label>
                <input type="number" id="problem" required="" placeholder="Contact number"> <br><br>
                <label for="description"><b>Short Description of Problem: </b></label><br><br>
                <textarea id="desrip" required="" placeholder="Describe the problem faced"></textarea> <br><br>
            </form>
            <button id="submit">Submit</button>
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