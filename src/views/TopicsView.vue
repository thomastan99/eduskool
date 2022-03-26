<template>
  <BlueBanner/>
  <LeftPanel/>
  <ListOfTopics2/>
</template>

<script>
import LeftPanel from '../components/LeftPanel.vue'
import BlueBanner from '../components/BlueBanner.vue'
import ListOfTopics2 from '../components/ListOfTopics2.vue'

export default {
  name: 'App',
  components: {
    LeftPanel,
    BlueBanner,
    ListOfTopics2,
  }
}
</script>

<style>

</style>