<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App Code Split" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld';

export default {
	name: 'HomeCodeSplit',
	components: {
		HelloWorld,
	},
};
</script>
