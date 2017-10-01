Vue.component('input-component',{
	props:[
		'items',
		'current_item'
	],
	template:'#input-template',
	methods:{
		onSubmit:function(){
			this.current_item.created_at = Date.now();
			//本来ならここでサーバーにデータをサクセスする
			this.items.push(Object.assign({},this.current_item));
			this.current_item.title = '';
			this.current_item.description = '';
		}
	}
});

Vue.component('todo-component',{
	props:[
		'items'
	],
	template:'#items-template',
	methods:{
		onRemove:function(item){
			var delNum = null;
			this.items.forEach(function(v,i){
				if(item.title===v.title){
					delNum = i
				}
			});
			this.items.splice(delNum,1);
			console.log(delNum);
		}
	}
});

var app = new Vue({
	el:'#app',
	data:{
		current_item:{
			title:'',
			description:''
		},
		todo_items:[
			{
				title:"課題をする",
				description:"月曜までに数学の課題をする",
				created_at:Date.now()
			},
			{
				title:"実家に帰る",
				description:"実家にお土産を持って帰る",
				created_at:Date.now()
			}
		]
	},
	methods:{
		onSubmit:function(event){
			var newData = {
				title:this.item_title,
				description:this.item_description,
				created_at:Date.now()
			};
			this.todo_items.push(newData);
		}
	}
});
