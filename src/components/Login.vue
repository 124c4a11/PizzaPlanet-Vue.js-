<template>
  <form v-if="!currentUser">
    <p><b>Please login to continue!</b></p>
    <div class="form-group">
      <label>Email</label>
      <input v-model="email" type="email" class="form-control" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label>Password</label>
      <input v-model="password" type="password" class="form-control" placeholder="Enter password">
    </div>
    <button @click.prevent="signIn" type="submit" class="btn btn-primary">Sign in</button>
  </form>

  <p v-else class="text-right"><b>Logged as:</b> {{ currentUser }}
  <button @click.prevent="signOut" type="button" class="btn btn-danger ml-2">Sign out</button>
  </p>
</template>

<script>
import Firebase from 'firebase'
import store from '@/store'
import { mapGetters } from 'vuex'

Firebase.auth().onAuthStateChanged((user) => {
  if (user) store.dispatch('users/setUser', user)
  else store.dispatch('users/setUser', null)
})

export default {
  name: 'Login',

  data () {
    return {
      email: '',
      password: ''
    }
  },

  computed: {
    ...mapGetters('users', [ 'currentUser' ])
  },

  methods: {
    signIn () {
      Firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch((error) => {
          if (error.code === 'auth/wrong-password') alert('Wrong password')
          else alert(error.message)
        })
    },

    signOut () {
      Firebase.auth().signOut()
        .then(() => alert('Logged out'))
        .catch((error) => alert(error.message))
    }
  }
}
</script>
