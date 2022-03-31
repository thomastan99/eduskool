<template>
  <div id="logged" >
    <div id="nav">
      <router-link to="LeaderboardMath">Math</router-link>|
      <router-link to="LeaderboardSci"> Science </router-link>|
      <router-link to="LeaderboardEng"> Eng </router-link>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: 'NavBar',

    data() {
        return {
            user:false,
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        })
    }
}
</script>

<style scoped>
#nav {
    padding: 30px;
    text-align: center;
}

#nav a {
    font-weight: bold;
    color: rgb(173, 233, 62);
}

#nav a.router-link-exact-active {
    color:rgb(223, 47, 3);
}

</style>