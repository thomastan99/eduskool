<template>
    <div id="helpPage">
        <div id="logo"><img src="../assets/elogo.png" onclick="location.href='/'" alt="EDU'skool logo"> 
            <h2 id="about" onclick="location.href='/about'"> About Us </h2>
            <h2 id="help" onclick="location.href='/help'"> Help </h2>
        </div>
        <h1 id="pageTitle"> About Us </h1>
        <div id="faq">
            <div class="question"> EDU'skool was founded in 2022 by a group of NUS students to help tuition centres and their students...
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