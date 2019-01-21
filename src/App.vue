<template>
  <div id="app">
    <pp-header />
    <router-view/>
    <pp-footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    ppHeader: Header,
    ppFooter: Footer
  }
}
</script>
