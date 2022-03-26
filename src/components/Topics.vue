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
    display:inline-block;
    margin-top:40px;
    margin-left:150px;
    text-align: center;
}
#pageTitle {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    font-size:23px;
    margin-left:50px;
}

#maths {
    text-align: center;
    margin-top:80px;
    margin-left:100px;
    display:inline-block;
    padding:0px 80px 0px 0px;
    color: grey;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
#english {
    text-align: center;
    display:inline-block;
    padding:0px 80px 0px 0px;
    color: grey;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
#science {
    display:inline-block;
    text-align:center;
    color: grey;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>