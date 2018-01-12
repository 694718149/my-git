<template>
	<div id="single-blog">
		<h1>{{blog.title}}</h1>
		<article>{{blog.content}}</article>
		<p>作者：{{blog.author}}</p>
		<p>分类：<span class="category" v-for="category in blog.categories">{{category}} </span></p>
	</div>
</template>

<script>
	export default{
		name:"single-blog",
		data(){
			return{
				id:this.$route.params.id,
				blog:{}
			}
		},
		created(){
			//http://jsonplaceholder.typicode.com/posts/
			this.$http.get('https://vue-blog-jun.firebaseio.com/posts/'+this.id+'.json')
				.then(function(data){
					// console.log(data);
					return data.json();
				})
				.then(function(data){
					this.blog = data;
				})
		}
	}
</script>

<style scoped>
	#single-blog{
		height: 100%;
		margin: auto 0;
		padding: 20px;
		background: #eee;
		border:1px dotted #aaa;
		box-sizing: border-box;
	}
	.category{
		/*border: 1px solid #aaa;*/
		font-size: 12px;
		color: #fff;
		border-radius: 4px;
		padding: 10px 5px;
		width: 84px;
		margin-top: 5px;
		background: rgba(255,38,0,0.6);
	}
</style>