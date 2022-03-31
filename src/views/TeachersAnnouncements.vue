<template>
    <BlueBanner/>
    <LeftPanelTeachers/>
    <CreateAnnouncements @created="change"/>
    <AnnouncementsDisplay :key="refreshComp"/>
</template>

<script>
import BlueBanner from '@/components/BlueBanner.vue'
import LeftPanelTeachers from '@/components/LeftPanelTeachers.vue'
import CreateAnnouncements from '@/components/CreateAnnouncements.vue'
import AnnouncementsDisplay from '@/components/AnnouncementsDisplay.vue'

export default {
  name: 'App',
  components: {
    LeftPanelTeachers,
    BlueBanner,
    CreateAnnouncements,
    AnnouncementsDisplay
  },
  data(){
    return{
      refreshComp:0
    }
  },
  methods: {
    change() {
      this.refreshComp += 1
    }
  }
}
</script>

<style scoped>

</style>

