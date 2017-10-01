<template>
  <div>
				<label>title</label>
				<input v-model="current_item.title"></input>
				<label>descrpition</label>
				<input v-model="current_item.description"></input>
				<button v-on:click="onSubmit()">Submit</button>
	</div>
</template>

<script>
export default {
  props:[
    'current_item',
    'items'
  ],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
	methods:{
		onSubmit:function(event){
			var newData = {
				title:this.current_item.title,
				description:this.current_item.description,
				created_at:Date.now()
			};
			this.items.push(newData);
		}
	}
}
</script>

<style>
</style>
