<template>
  <div id="add-blog">
    <h1>写博客</h1>
    <form v-if="!submited">
      <label>主题</label>
      <input type="text" v-model="blog.title" required />

      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Angular4</label>
        <input type="checkbox" value="Angular4" v-model="blog.categories">
      </div>

      <label class="inlineBlock">作者：</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>

      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <h3 v-if="submited">您的博客添加成功！</h3>
    <hr>
    <div id="preview">
      <h3>博客预览</h3>
      <p class="title">博客主题：</p>
      <p>{{blog.title}}</p>
      <p class="title">博客内容：</p>
      <p>{{blog.content}}</p>
      <p class="title">博客分类：</p>
      <ul>
        <li v-for="caterory in blog.categories">{{caterory}}</li>
      </ul>
      <p><label class="title" style="display:inline-block;margin-top:0;">作者：</label>{{blog.author}}</p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  //http://jsonplaceholder.typicode.com/
  //http://jsonplaceholder.typicode.com/posts
  name: 'add-blog',
  data () {
    return {
      blog:{
        title:"",
        content:"",
        categories:[],
        author:""
      },
      authors:["Guojun Liang","Anar","Jirimu"],
      submited:false
    }
  },
  methods:{
    post:function(){
      //http://jsonplaceholder.typicode.com/posts
      this.$http.post("https://vue-blog-jun.firebaseio.com/posts.json",this.blog)
          .then(function(data){
            //console.log(data);
            this.submited = true;
          });
    }
  }
}
</script>

<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label{
  display: block; /*独占一行显示*/
  margin: 20px 0 10px;
}
.inlineBlock{
  display: inline-block;
}
input[type="text"],select,textarea{
  display: table-cell;
  width: 100%;
  padding: 8px;
}
select{
  height: 30px;
  width: auto;
  display: inline-block;
}
textarea{
  height: 200px;
}

#checkboxes label{
  display: inline-block;
  margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}

button{
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

#preview p{
  color: #797979;
  font-size: 14px;
}

#preview .title{
  color: #000;
  font-size: 16px;
}

h3{
  margin-top: 10px;
}

</style>
