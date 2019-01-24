export default {
  namespaced: true,

  state: {
    orders: []
  },

  getters: {
    numberOfOrders: (state) => state.orders.length
  },

  mutations: {
    addOrder: (state, orders) => state.orders.push(orders)
  }
}
