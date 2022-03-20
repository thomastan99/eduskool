<template>
    <div id="main">
        <div id="pageTitle">
            <h1> Topics </h1>
        </div>

        <div id="maths">
            <router-link to="MathsTopics">
                <img src="../assets/maths.png"  alt="Maths">
                </router-link>
            <h2> Maths </h2>
        </div>

        <div id="english">
            <img src="../assets/english.png" alt="English">
            <h2> English </h2>
        </div>

        <div id="science">
            <img src="../assets/science.png" alt="Science">
            <h2> Science </h2>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#main {
    top:50px;
    left:100px;
}
#pageTitle {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  position:relative;
  top:25px;
  left:75px;
  font-size:30px;
}

#maths {
    margin-top:100px;
    margin-left:75px;
    position:relative;
    text-align:center;
    display:inline-block;
    width:20%;
    color: grey;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
#english {
    margin-top:100px;
    margin-left:100px;
    position:relative;
    text-align: center;
    display:inline-block;
    padding:0px 0px 0px 0px;
    width:20%;
    color: grey;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
#science {
    margin-top:100px;
    margin-left:100px;
    position:relative;
    display:inline-block;
    text-align:center;
    padding:0px 0px 0px 0px;
    width:20%;
    color: grey;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>