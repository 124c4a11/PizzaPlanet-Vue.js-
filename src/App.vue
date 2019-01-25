<template>
  <div id="app" class="page">
    <pp-header />
    <router-view/>
    <pp-footer />
  </div>
</template>

<script>
import { dbMenuRef } from '@/firebase'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    ppHeader: Header,
    ppFooter: Footer
  },

  created () {
    this.$store.dispatch('menu/setMenuRef', dbMenuRef)
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
