import { firebaseAction } from 'vuexfire'

export default {
  namespaced: true,

  state: {
    orders: []
  },

  getters: {
    getOrders: (state) => state.orders,

    numberOfOrders: (state) => state.orders.length
  },

  mutations: {
    addOrder: (state, orders) => state.orders.push(orders)
  },

  actions: {
    setOrdersRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
      bindFirebaseRef('orders', ref)
    })
  }
}
