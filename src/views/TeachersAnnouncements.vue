<template>
    <BlueBanner/>
    <LeftPanel/>
    <CreateAnnouncements @created="change"/>
    <AnnouncementsDisplay :key="refreshComp"/>
</template>

<script>
import BlueBanner from '@/components/BlueBanner.vue'
import LeftPanel from '@/components/LeftPanel.vue'
import CreateAnnouncements from '@/components/CreateAnnouncements.vue'
import AnnouncementsDisplay from '@/components/AnnouncementsDisplay.vue'

export default {
  name: 'App',
  components: {
    LeftPanel,
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



