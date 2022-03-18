<template>
<BlueBanner/>
<LeftPanel/>
<StudentList/>
</template>

<script>
import BlueBanner from '@/components/BlueBanner.vue'
import LeftPanel from '@/components/LeftPanel.vue'
import StudentList from '@/components/StudentList.vue'

export default {
  name: 'App',
  components: {
    BlueBanner,
    LeftPanel,
    StudentList
  }
}
</script>