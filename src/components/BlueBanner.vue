<template>
    <div id="main">
        <div id="logo"><img src="../assets/elogo.png" alt="EDU'skool logo"></div>
        <div id="welcome"><h2>Welcome Chase!</h2></div>
        <div id="courses"><a href="./">Courses</a></div>
        <div id="help"><a href="./">Help</a></div>
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
    vertical-align: top;
}

#welcome {
    float: left;
    display: inline-block;
    margin: 5px 0px 0px 500px;
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

button {
    background-color: #00bcd4;
    border: none;
    color: white;
    font-size: 24px;
    
}

#courses {
    display: inline-block;
    margin: 25px 50px 0 600px
}

#help {
    display: inline-block;
    margin: 25px 0 0 0;
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
