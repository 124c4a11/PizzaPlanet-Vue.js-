import { firebaseAction } from 'vuexfire'

export default {
  namespaced: true,

  state: {
    menuItems: []
  },

  getters: {
    getMenuItems: (state) => state.menuItems
  },

  actions: {
    setMenuRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
      bindFirebaseRef('menuItems', ref)
    })
  }
}
