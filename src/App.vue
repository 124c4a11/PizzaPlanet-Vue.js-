<template>
  <div id="app" class="page">
    <pp-header />
    <router-view/>
    <pp-footer />
  </div>
</template>

<script>
import { dbMenuRef, dbOrdersRef } from '@/firebase'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    ppHeader: Header,
    ppFooter: Footer
  },

  created () {
    this.$store.dispatch('menu/setMenuRef', dbMenuRef)
    this.$store.dispatch('orders/setOrdersRef', dbOrdersRef)
  }
}
</script>

<style>
  .page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main { flex-grow: 1; }
</style>
