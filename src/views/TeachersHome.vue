<template>
<BlueBanner/>
<LeftPanel/>
<ClassList/>
</template>

<script>
import BlueBanner from '@/components/BlueBanner.vue'
import LeftPanel from '@/components/LeftPanel.vue'
import ClassList from '@/components/ClassList.vue'

export default {
  name: 'App',
  components: {
    BlueBanner,
    LeftPanel,
    ClassList
  }
}
</script>