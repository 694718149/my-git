<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <blog-header></blog-header>
    <router-view></router-view>
    <!-- lorem -->
    <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis id, veritatis. Quam possimus repudiandae exercitationem, voluptas excepturi dignissimos repellat explicabo saepe illo pariatur, at, iure nesciunt similique autem unde placeat. -->
    <!-- ul.mylist>lorem10.item*4 -->
    <ul class="mylist">
    	<li class="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quo!</li>
    	<li class="item">Molestias explicabo culpa qui architecto officia quod aliquid velit vel.</li>
    	<li class="item">Molestias temporibus laborum ratione perspiciatis, ipsam nam laboriosam hic iusto.</li>
    	<li class="item">Voluptatem mollitia laudantium illum libero asperiores assumenda cumque magnam laborum.</li>
    </ul>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'app',
  components: {
    AddBlog,ShowBlogs,BlogHeader
  }
}
</script>

<style>
	@font-face{
	    font-family: 'bichimel';
	    src: url('./../static/font/Syurga.ttf');
	    font-weight: normal;
	    font-style: normal;
    }
	*{
    	font-family: "bichimel";
	}
	#app{
		margin: 10px 0;
	    padding: 10px 0;
	    -moz-writing-mode: vertical-lr;
	    -webkit-writing-mode: vertical-lr;
	    -o-writing-mode: vertical-lr;
	    -ms-writing-mode: tb-lr;
	    writing-mode: vertical-lr;
	    -webkit-text-orientation: sideways-right;
	    line-height: 1.5;
	    page-break-before: auto;
	    page-break-after: always;
	    height: 98%;
	}
	button{
	    transform: rotate(90deg);
	    background-color: #4CAF50;
	    border: none;
	    border-radius: 2px;
	    color: #FFFFFF;
	    padding: 10px;
	    text-align: center;
	    -webkit-transition-duration: 0.4s; /* Safari */
	    transition-duration: 0.4s;
	    text-decoration: none;
	    overflow: hidden;
	    cursor: pointer;
	    outline: none;
    }
</style>
