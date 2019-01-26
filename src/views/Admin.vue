<template>
  <div class="main">
    <div v-if="currentUser" class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 pt-5">
          <pp-new-pizza></pp-new-pizza>
        </div>

        <div class="col-sm-12 col-md-6 pt-5">
          <h3>Menu:</h3>
          <table class="table table-hover">
            <thead class="thead-light">
              <tr>
                <th>Item</th>
                <th>Remove from menu</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in getMenuItems" :key="item['.key']">
                <td>{{ item.name }}</td>
                <td>
                  <button
                    @click="removeMenuItem(item['.key'])"
                    type="button"
                    class="btn btn-sm btn-outline-danger"
                  >&times;</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- orders -->
      <div class="row py-5">
        <div class="col-sm-12">
          <h3>Current orders: {{ numberOfOrders }}</h3>
          <table v-for="(orders, ndx) in getOrders" :key="orders['.key']" class="table table-hover">
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
                <b><i>Order Number: {{ ndx + 1 }}</i></b>
                <button
                  @click="removeOrderItem(orders['.key'])"
                  type="button"
                  class="btn btn-sm btn-outline-danger ml-3"
                >&times;</button>
              </div>
              <tr v-for="(orderItems, ndx) in orders['.value']" :key="ndx">
                <td>{{ orderItems.name }}</td>
                <td>{{ orderItems.size }}"</td>
                <td>{{ orderItems.quantity }}</td>
                <td>{{ orderItems.price | currency }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row mb-5 justify-content-center">
        <div class="col-sm-12 col-md-6">
          <pp-login></pp-login>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dbMenuRef, dbOrdersRef } from '@/firebase'
import { mapGetters } from 'vuex'

import ppNewPizza from '@/components/NewPizza.vue'
import ppLogin from '@/components/Login.vue'

export default {
  name: 'Admin',

  components: {
    ppNewPizza,
    ppLogin
  },

  methods: {
    removeMenuItem (key) {
      dbMenuRef.child(key).remove()
    },

    removeOrderItem (key) {
      dbOrdersRef.child(key).remove()
    }
  },

  computed: {
    ...mapGetters('menu', [ 'getMenuItems' ]),

    ...mapGetters('orders', [ 'getOrders', 'numberOfOrders' ]),

    ...mapGetters('users', [ 'currentUser' ])
  }
}
</script>
