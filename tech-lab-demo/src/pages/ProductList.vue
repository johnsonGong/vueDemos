<template lang="html">
<div class="">
  <!-- <header></header> -->
  <plugin-header></plugin-header>
  <plugin-nav></plugin-nav>
  <p>Hello, {{name}} This is Product Page!</p>
  <div class="" v-if="data.length > 0">
    <div class="" v-for="item in data">
      <div class="">
        list {{item.name}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import PluginHeader from '../components/PluginHeader'
import PluginNav from '../components/PluginNav'
import axios from 'axios'

export default {
  data: function () {
    return {
      name: 'GongLong',
      data: [{
      "name": "牛奶",
      "price": "35",
      "seriaNo": "s10001"
    }]
    }
  },
  components: {
    PluginHeader,
    PluginNav
  },
  mounted: function () {
    this.getList()
  },
  methods: {
    getList: function () {
      console.log('[getList getList getList]')

      var that = this
      axios({
        method: 'get',
        // url: '/api/list',
        url: '/api',
        responseType: 'json'
      })
      .then(function (response) {

        console.log('[getList]--then!')
        that.data = that.data.concat(response.data.list)
      })
      .catch(function (error) {
        try {
          console.log('[getList]--catch!\n' + error)
        } catch (e) {

        } finally {

        }
      })
      // axion -- end.
    }
  }
}
</script>

<style lang="css" scoped>
</style>
