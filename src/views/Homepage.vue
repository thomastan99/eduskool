<template>
<BlueBanner/>
<LeftPanel/>
<Topics/>
</template>

<script>
import LeftPanel from '../components/LeftPanel.vue'
import BlueBanner from '../components/BlueBanner.vue'
import Topics from '../components/Topics.vue'
import { onAuthStateChanged, getAuth } from '@firebase/auth'

export default {
  name: 'App',
  components: {
    LeftPanel,
    BlueBanner,
    Topics,
  },

  data() {
    return {
      user: false,
    }
  },

  mounted() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) =>{
    if (user) {
      this.user = user;
      // console.log(user)
    }
  })
}
}
</script>

<style>

</style>
