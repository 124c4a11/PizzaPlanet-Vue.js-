<template>
  <div class="main">
    <div class="hero">
      <div class="hero__content">
        <h1>Welcome to Pizza Planet!</h1>
        <h2>Feeling hungry?</h2>
        <button class="btn btn-primary mt-5">Let`s order!</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home'
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
  color: #fff;
  text-shadow: 0 0 .5em rgba(0, 0, 0, .8);
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
</style>
