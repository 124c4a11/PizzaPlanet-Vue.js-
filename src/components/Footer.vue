<template>
  <footer class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <ul class="navbar-nav ml-auto">
        <li v-for="(link, ndx) in links" :key="ndx" class="nav-item">
          <a class="nav-link" :href="link.url">{{ link.title }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  data () {
    return {
      links: [
        { title: 'Home', url: '/' },
        { title: 'Menu', url: '/menu' },
        { title: 'Admin', url: '/admin' }
      ]
    }
  }
}
</script>
