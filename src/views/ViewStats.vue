<template>
    <BlueBanner/>
    <LeftPanelTeachers/>
    <Charts/>
    <Footer/>
</template>

<script>
import Footer from "@/components/Footer.vue"
import BlueBanner from '@/components/BlueBanner.vue'
import LeftPanelTeachers from '@/components/LeftPanelTeachers.vue'
import Charts from '@/components/Charts.vue'

export default {
  name: 'App',
  components: {
    BlueBanner,
    LeftPanelTeachers,
    Charts,
    Footer
  }
}


</script>

<style scoped>

</style>