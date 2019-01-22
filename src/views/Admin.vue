<template>
  <div class="main">
    <div class="container">
      <div class="row pt-5">
        <div class="col-sm-12 col-md-6">
          <pp-new-pizza></pp-new-pizza>
        </div>
        <div class="col-sm-12 col-md-6">
          <h3>Menu:</h3>
          <table class="table table-hover">
            <thead class="thead-light">
              <tr>
                <th>Item</th>
                <th>Remove from menu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Margherita</td>
                <td>
                  <button class="btn btn-sm btn-outline-danger" type="button">&times;</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-sm-12">
          <h3>Current orders:</h3>
          <table class="table table-hover">
            <thead class="thead-light">
              <tr>
                <th>Item</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <div class="py-2">
                <b><i>Order Number: 1</i></b>
                <button class="btn btn-sm btn-outline-danger ml-3" type="button">&times;</button>
              </div>
              <tr>
                <td>Margherita</td>
                <td>9"</td>
                <td>1</td>
                <td>6.95</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ppNewPizza from '@/components/NewPizza.vue'

export default {
  name: 'Admin',

  components: { ppNewPizza }
}
</script>
