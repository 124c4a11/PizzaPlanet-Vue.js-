<template>
  <form>
    <div class="form-group">
      <label>Email</label>
      <input v-model="email" type="email" class="form-control" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label>Password</label>
      <input v-model="password" type="password" class="form-control" placeholder="Enter password">
    </div>
    <button @click.prevent="signIn" type="submit" class="btn btn-primary">Sign in</button>
    <button @click.prevent="signOut" type="submit" class="btn btn-danger ml-2">Sign out</button>
  </form>
</template>

<script>
import Firebase from 'firebase'

export default {
  name: 'Login',

  data () {
    return {
      email: '',
      password: ''
    }
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
