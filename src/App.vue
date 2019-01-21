<template>
  <div id="app">
    <pp-header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    ppHeader: Header
  }
}
</script>
