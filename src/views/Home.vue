<template>
  <div class="main">
    <div class="hero">
      <div class="hero__content">
        <h1 class="hero__text">Welcome to Pizza Planet!</h1>
        <h2 class="hero__text">Feeling hungry?</h2>
        <router-link to="/menu" class="btn btn-primary mt-5">Let`s order!</router-link>
      </div>
    </div>
    <div class="container">
      <div class="card-deck py-5">
        <pp-ordering-guide></pp-ordering-guide>
        <pp-delivery></pp-delivery>
        <pp-history></pp-history>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ppDelivery from '@/components/Delivery.vue'
import ppHistory from '@/components/History.vue'
import ppOrderingGuide from '@/components/OrderingGuide.vue'

export default {
  name: 'Home',

  components: {
    ppDelivery,
    ppHistory,
    ppOrderingGuide
  }
}
</script>

<style lang="scss">

.hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 480px;
  padding: 15px;
  background-image: url(../assets/pizza.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
  }

  .btn {
    box-shadow: 0 0 .5em rgba(0, 0, 0, .5);
  }
}

.hero__content {
  position: relative;
  z-index: 2;
  max-width: 1140px;
  text-align: center;
}

.hero__text {
  color: #fff;
  text-shadow: 0 0 .5em rgba(0, 0, 0, .8);
}
</style>
