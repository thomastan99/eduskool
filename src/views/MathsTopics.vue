<template>
  <BlueBanner/>
  <LeftPanel/>
  <ListOfTopics />

</template>

<script>
import LeftPanel from '../components/LeftPanel.vue'
import BlueBanner from '../components/BlueBanner.vue'
import ListOfTopics from '../components/ListOfTopics.vue'


export default {
  name: 'App',
  components: {
    LeftPanel,
    BlueBanner,
    ListOfTopics,

  },

  }

</script>

<style>

</style>