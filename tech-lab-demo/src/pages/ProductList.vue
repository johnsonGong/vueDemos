<template lang="html">
<div class="">
  <!-- <header></header> -->
  <plugin-header></plugin-header>
  <plugin-nav></plugin-nav>
  <p>This is Product Page!</p>
</div>
</template>

<script>
import PluginHeader from '../components/PluginHeader'
import PluginNav from '../components/PluginNav'

export default {
  components: {
    PluginHeader,
    PluginNav
  }
}
</script>

<style lang="css" scoped>
</style>
