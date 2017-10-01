<template>
    <div>
        <ul>
            <li v-for="item in items">
                <p>
                    タイトル: {{item.title}}
                </p>
                <p>
                    詳細: {{item.description}}
                </p>
                <p>
                    作成日: {{item.created_at}}
                </p>
                <p>
                    <button v-on:click=onRemove(item)>削除</button>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [
        'items'
    ],
    methods:{
		onRemove:function(item){
			let delNum = null;
			this.items.forEach(function(v,i){
				if(item.title===v.title){
					delNum = i
				}
			});
			this.items.splice(delNum,1);
			console.log(delNum);
		}
	}
}
</script>

<style>

</style>
