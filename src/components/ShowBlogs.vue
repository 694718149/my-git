<template>
  <!-- v-theme:column="'wide'" main.js里设定的自定义指令-->
  <div id="show-blogs">
    <h1>ᠪᠦᠬᠦ ᠵᠤᠬᠢᠶᠠᠯ</h1>
    <input type="text" v-model="search" placeholder="ᠬᠠᠢᠬᠤ">
    <div v-for="blog in filteredBlogs" class="single-blog">
    	<router-link v-bind:to="'/blog/' + blog.id">
        <h4 v-rainbow>{{blog.title | to-uppercase}}</h4>
      </router-link>
    	<article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data(){
	return{
		blogs:[],
		search:""
	}  	
  },
  created(){
  	// http://jsonplaceholder.typicode.com/posts
    //本地json文件 './../static/posts.json'
  	this.$http.get('https://vue-blog-jun.firebaseio.com/posts.json')
  		.then(function(data){
  			console.log(data.json());
  			//this.blogs = data.body.slice(0,10);
        return data.json(); //json解析
  		})
      .then(function(data){
        var blogsArray = [];
        console.log(data);
        for(let key in data){
          //console.log(data[key]);
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      })
  },
  computed:{
  	filteredBlogs:function(){
  		return this.blogs.filter((blog) => {
  			return blog.title.match(this.search);
  		})
  	}
  },
  filters:{
  	// "to-uppercase":function(value){
  	// 	return value.toUpperCase();
  	// }
  	//此方法是上面的"to-uppercase":function(value)一样，写法不一样而已
  	toUppercase(value){
  		return value.toUpperCase();
  	}
  },
  //全局的指令改为局部的指令
  directives:{
  	"rainbow":{
  		bind(el,binding,vode){
  			el.style.color = "#" + Math.random().toString(16).slice(2,8);
  		}
  	}
  }
}
</script>

<style>
	#show-blogs{
		max-height: 100%;
		margin: auto 0;
	}
	.single-blog{
		background:#eee;
		margin: 0 20px;
		padding: 20px;
		box-sizing: border-box;
		border-radius: 8px;
    height: 100%;
	}
	h4{
		margin: 0 0 10px 0;
		color: crimson;
	}
  #show-blogs a{
    text-decoration: none;
  }
  input[type="text"]{
    display: table-cell;
    margin-right: 20px;
    padding: 8px;
    height: 100%;
    min-width: 50px;
    box-sizing: border-box; 
  }
</style>
