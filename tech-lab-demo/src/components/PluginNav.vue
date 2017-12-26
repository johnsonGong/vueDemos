<template lang="html">
  <div class="comm-nav">
    <p>This is common plugin -- Navigation.</p>
    <div class="">
      <router-link to="/">
        <p>welcome</p>
      </router-link>

      <router-link :to="{ name: 'productList', params: {} }">
        <p>ProductList</p>
      </router-link>

      <router-link :to="{ name: 'productDetail', params: {
        prodId:110, tmpId: 'p_asdf110'
        } }">
        <p>ProductDetail</p>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.comm-nav {
  background-color: #cddc39;
}
</style>
