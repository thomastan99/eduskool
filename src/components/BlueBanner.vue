<template>
    <div id="main">
        <img id ="logo" src="../assets/elogo.png" alt="EDU'skool logo">
        <h2 id="welcome">Welcome Back James!</h2>
        <a id="courses" href="./">Courses</a>
        <a id="help" href="./">Help</a>
    </div><br><br>
</template>

<script>

export default {
}
</script>

<style scoped>
#logo {
    float: left;
    display: inline-block;
}

#welcome {
    display: inline-block;
    position: relative;
    left:300px;
    top:5px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

h2 {
    color: white;
}

#main {
    background-color: #00bcd4;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

#courses {
    position:relative;
    float:right;
    right: 300px;
    top:25px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

#help {
    position:relative;
    float:right;
    right: 90px;
    top:25px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

a {
    color: white;
    font-size: 24px;
}

a:visited, a:link, a:active {
    text-decoration: none;
}

a:hover {
    color: #ececec;
}

</style>
