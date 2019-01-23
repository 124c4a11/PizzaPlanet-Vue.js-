<template>
  <form>
    <h3>Add new pizza:</h3>
    <div class="form-group row">
      <label class="col-sm-3">Name</label>
      <div class="col-sm-9">
        <input v-model="newPizza.name" type="text" class="form-control">
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">Desctiption</label>
      <div class="col-sm-9">
        <textarea v-model="newPizza.description" class="form-control" rows="5"></textarea>
      </div>
    </div>

    <p><b>Option 1:</b></p>
    <div class="form-group row">
      <label class="col-sm-3">Size (")</label>
      <div class="col-sm-9">
        <input v-model="newPizza.options[0].size" type="text" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-3">Price</label>
      <div class="col-sm-9">
        <input v-model="newPizza.options[0].price" type="text" class="form-control">
      </div>
    </div>

    <p><b>Option 2:</b></p>
    <div class="form-group row">
      <label class="col-sm-3">Size (")</label>
      <div class="col-sm-9">
        <input v-model="newPizza.options[1].size" type="text" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-3">Price</label>
      <div class="col-sm-9">
        <input v-model="newPizza.options[1].price" type="text" class="form-control">
      </div>
    </div>

    <button @click="addMenuItem" class="btn btn-block btn-success" type="button">Add</button>
  </form>
</template>

<script>
import { dbMenuRef } from '../firebase'

export default {
  name: 'NewPizza',

  data () {
    return {
      newPizza: {
        'name': 'Eg. Margherita',
        'description': 'Eg. A delicious tomato based pizza topped with mozzarella',
        'options': [
          {
            'size': 9,
            'price': 6.95
          },
          {
            'size': 12,
            'price': 10.95
          }
        ]
      }
    }
  },

  methods: {
    addMenuItem () {
      dbMenuRef.push(this.newPizza)
    }
  }
}
</script>
