// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

//自定义指令directive,在ShowBlogs里使用了
// Vue.directive('rainbow',{
// 	bind(el,binding,vnode){
// 		el.style.color = "#" + Math.random().toString(16).slice(2,8);
// 	}
// })
Vue.directive('theme',{
	bind(el,binding,vnode){
		if(binding.value == 'wide'){
			// el.style.maxWidth = "1000px";
			el.style.height = "100%";
		}else if(binding.value == 'narrow'){
			el.style.maxWidth = "600px";
		}
		if(binding.arg == 'column'){
			el.style.background = "#ffffff";
			el.style.padding = "10px";
		}
	}
})

//自定义过滤器
// Vue.filter("to-uppercase",function(value){
// 	return value.toUpperCase();
// })

Vue.filter('snippet',function(value){
	return value.slice(0,230) + "...";
})

//创建路由
const myRouter = new VueRouter({
	routes:Routes,
	mode:"history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router:myRouter
})
