<template>
	<nav>
		<ul>
			<li>
				<router-link to="/" exact>ᠵᠤᠬᠢᠶᠠᠯ</router-link>
				<router-link to="/add" exact>ᠰᠢᠨ᠎ᠡ ᠵᠤᠬᠢᠶᠠᠯ</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default{
		name:"blog-header"
	}
</script>

<style scoped>
	ul{
		list-style-type: none;
		margin:0;
		text-align: center;
	}
	li{
		display: inline-block;
		margin: 0 10px;
	}
	a{
		padding: 12px;
		border-radius: 5px;
		text-decoration: none;;
		color: #fff;
	}
	nav{
		background: crimson;
		padding: 20px 0;
		margin-right: 10px;
		box-sizing: border-box;
	}
	.router-link-active{
		background: rgba(255,255,255,0.7);
		color: #444;
	}
</style>