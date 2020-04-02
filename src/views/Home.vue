<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import { mapGetters } from 'vuex';
import HelloWorld from '@/components/HelloWorld';
import { commonMutationType } from '@/store/mutationsType';
import { commonActionType } from '@/store/actionsType';

export default {
	name: 'Home',
	components: {
		HelloWorld,
	},
	computed: { ...mapGetters(['loadingComplete', 'screenGettersLoadingComplete']) },
	mounted() {
		console.log('getters1', this.loadingComplete);
		this.$store.dispatch(commonActionType.ACTION_SAMPLE);
		console.log('getters2', this.loadingComplete);
		this.$store.commit(commonMutationType.SET_LOADING_COMPLETE, false);
		console.log('getters3', this.loadingComplete);

		const data = {
			userId: 2,
		};
		this.axiosGet('/posts', data);
		this.$globalFunctions.sample();
	},
	methods: {
		async axiosGet(url, data) {
			const get = await this.$globalFunctions.module1.getModule(url, data);
			const get2 = await Vue.prototype.$globalFunctions.module1.getModule(url, data);
			console.log(get.data);
			console.log(get2.data);
		},
	},
};
</script>
