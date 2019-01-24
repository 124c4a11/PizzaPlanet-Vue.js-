<template>
  <footer class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <ul class="navbar-nav ml-auto">
        <router-link
          v-for="(link, ndx) in links"
          :key="ndx"
          :to="link.url"
          tag="li"
          exact
          active-class="active"
          class="nav-item"
        ><a class="nav-link" >{{ link.title }}</a></router-link>
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
