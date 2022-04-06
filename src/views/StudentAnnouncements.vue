<template>
    <BlueBanner/>
    <LeftPanel/>
    <div id="root">
        <h1>Announcements</h1>
    </div>
    <AnnouncementsDisplay/>
</template>

<script>
import BlueBanner from '@/components/BlueBanner.vue'
import LeftPanel from '@/components/LeftPanel.vue'
import AnnouncementsDisplay from '@/components/AnnouncementsDisplay.vue'

export default {
  name: 'App',
  components: {
    LeftPanel,
    BlueBanner,
    AnnouncementsDisplay
  }
}
</script>

<style scoped>
#root {
  margin-top: 80px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-left: 220px;
}
</style>