<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 pt-5">
          <table class="table table-hover">
            <thead class="thead-light">
              <tr>
                <th>Size</th>
                <th>Price</th>
                <th>Add to cart</th>
              </tr>
            </thead>
            <tbody v-for="item in getMenuItems" :key="item['.key']">
              <tr>
                <td><strong>{{ item.name }}</strong></td>
              </tr>
              <tr v-for="(option, ndx) in item.options" :key="ndx">
                <td>{{ option.size }}"</td>
                <td>{{ option.price }}</td>
                <td>
                  <button
                    @click="addToCart(item, option)"
                    class="btn btn-outline-success btn-sm"
                    type="button">+</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- cart -->
        <div class="col-sm-12 col-md-6 py-5">
          <div v-if="cart.length">
            <table class="table table-hover">
              <thead class="thead-light">
                <tr>
                  <th>Quantity</th>
                  <th>Item</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody v-for="(item, ndx) in cart" :key="ndx">
                <tr>
                  <td>
                    <button
                      @click="decreaseQuantity(item)"
                      class="btn btn-sm btn-light"
                      type="button">-</button>
                    <span> {{ item.quantity }} </span>
                    <button
                      @click="increaseQuantity(item)"
                      class="btn btn-sm btn-light"
                      type="button">+</button>
                  </td>
                  <td>{{ item.name }} {{ item.size }}"</td>
                  <td>{{ item.price * item.quantity }}</td>
                </tr>
              </tbody>
            </table>
            <p><b>Order total:</b></p>
            <button @click="addNewOrder" class="btn btn-success btn-block" type="button">Place Order</button>
          </div>
          <div v-else>
            <p><b>{{ cartText }}</b></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { dbOrdersRef } from '@/firebase'

export default {
  name: 'MenuPage',

  data () {
    return {
      cart: [],
      cartText: 'Your cart is empty!'
    }
  },

  computed: {
    ...mapGetters('menu', [ 'getMenuItems' ])
  },

  methods: {
    ...mapMutations('orders', [ 'addOrder' ]),

    addToCart (item, option) {
      this.cart.push({
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      })
    },

    removeFromCart (item) {
      this.cart.splice(this.cart.indexOf(item), 1)
    },

    increaseQuantity (item) {
      item.quantity++
    },

    decreaseQuantity (item) {
      item.quantity--

      if (item.quantity === 0) this.removeFromCart(item)
    },

    addNewOrder () {
      dbOrdersRef.push(this.cart)
      this.cart = []
      this.cartText = 'Thank you, your order has been placed! :)'
    }
  }
}
</script>
