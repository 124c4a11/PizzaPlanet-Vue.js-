<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">Pizza Planet</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data () {
    return {
      links: [
        { title: 'Home', url: '/' },
        { title: 'Menu', url: '/menu' }
      ]
    }
  }

}
</script>
