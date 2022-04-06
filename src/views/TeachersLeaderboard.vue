<template>
<BlueBanner/>
<LeftPanelTeachers/>
<StudentList/>
<Footer/>
</template>

<script>
import Footer from "@/components/Footer.vue"
import BlueBanner from '@/components/BlueBanner.vue'
import LeftPanelTeachers from '@/components/LeftPanelTeachers.vue'
import StudentList from '@/components/StudentList.vue'

export default {
  name: 'App',
  components: {
    BlueBanner,
    LeftPanelTeachers,
    StudentList,
    Footer,
  }
}
</script>