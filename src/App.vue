<template>
	<div id="app">
		<div id="nav"><router-link to="/home/homeView1">Home Default</router-link> | <router-link to="/about/aboutView1">About Default</router-link> | <router-link to="/home/homeView2">Home Router Code Split</router-link> | <router-link to="/about/aboutView2">About Router Code Split</router-link></div>
		<router-view />
	</div>
</template>

<style>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
