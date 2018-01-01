<template lang="html">
<div class="">
  <!-- <header></header> -->
  <plugin-header></plugin-header>
  <plugin-nav></plugin-nav>
  <p>Hello, {{name}} This is Product Page!</p>
  <div class="">
    <button type="button" name="button" v-on:click="getList">add Data</button>
  </div>
  <div class="comm-scroll-data" v-if="data.length > 0">
    <virtual-list :size="50" :remain="6" :onscroll="scrollOnscroll" :tobottom="scrollTobottom" >
    <div class="comm-list" v-for="(item, index) in data" :key="index">
      <div class="">
         <span>{{item.name}} -- </span>
         <span>{{item.price}} --</span>
         <span>{{index}}</span>
      </div>
    </div>
  </virtual-list>
  </div>
</div>
</template>

<script>
import PluginHeader from '../components/PluginHeader'
import PluginNav from '../components/PluginNav'
import axios from 'axios'
import virtualList from 'vue-virtual-scroll-list'

export default {
  data: function () {
    return {
      name: 'GongLong',
      data: [{
        name: '牛奶',
        price: '35',
        seriaNo: 's10001'
      }]
    }
  },
  components: {
    PluginHeader,
    PluginNav,
    'virtual-list': virtualList
  },
  mounted: function () {
    console.log('[life circle] --> mounted!')
    this.getList()
  },
  destroyed: function () {
    console.log('[life circle] --> destroyed!')
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
    },

    scrollTotop: function () {
      console.log('scrollTotop')
    },
    scrollTobottom: function () {
      console.log('scrollTobottom')
    },
    scrollOnscroll: function (event, data) {
      // stringify
      console.log('scrollOnscroll, data: ' + JSON.stringify(data))
    }
  }
}
</script>

<style lang="css" scoped>
.comm-list{
  box-sizing: border-box;
}
.comm-scroll-data{
  height: 300px;
  box-sizing: border-box;
}
</style>
