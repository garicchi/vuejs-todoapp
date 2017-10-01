<template>
  <div id="app">
    <input-component v-bind:current_item="item" v-bind:items="todo_items"></input-component>
    <items-component v-bind:items="todo_items"></items-component>
  </div>
</template>

<script>

import Input from './Input.vue'
import Items from './Items.vue'

export default {
  name: 'app',
  components: {
    InputComponent: Input,
    ItemsComponent: Items
  },
  data() {
    return {
      item:{
        title:'',
        description:''
      },
      todo_items: [
        {
          title: "課題をする",
          description: "月曜までに数学の課題をする",
          created_at: Date.now()
        },
        {
          title: "実家に帰る",
          description: "実家にお土産を持って帰る",
          created_at: Date.now()
        }
      ]
    }
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 60px;
}
</style>
