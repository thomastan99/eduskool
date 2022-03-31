<template>
    <div id="main">
        <a href = "/home" > <img id ="logo" src="../assets/elogo.png" alt="EDU'skool logo" > </a>
        <h2 id="welcome">Welcome Back James!</h2>
        <a id="courses" href="./">Courses</a>
        <a id="help" href="./">Help</a>
        <!-- <a id="profile" href="./profile">Profile</a> -->
    </div><br><br>
</template>

<script>

export default {
}
</script>

<style scoped>
#logo {
    float: left;
}

#welcome {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    display:inline-block;
    padding: 5px 200px 0px 200px;
}

/* welcome {
    float: left;
    display: inline-block;
    margin: 5px 0px 0px 500px;
} */

h2 {
    color: white;
}

#main {
    background-color: #00bcd4;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

#courses {
    display:inline-block;
    padding: 0px 100px 0px 0px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

#help {
    display:inline-block;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
button {
    background-color: #00bcd4;
    border: none;
    color: white;
    font-size: 24px;
    
}

/* #courses {
    display: inline-block;
    margin: 25px 50px 0 600px
} */

/* #help {
    display: inline-block;
    margin: 25px 0 0 0;
} */

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

@media all and (max-width: 900px) {
    #courses {
        display:inline-block;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        display:none;
        visibility: hidden;
    }
    #welcome {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        display:inline-block;
        padding: 5px 200px 0px 200px;
        display:none;
        visibility: hidden;
    }
    #help {
        display:inline-block;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        display:none;
        visibility: hidden;
    }
}
</style>
