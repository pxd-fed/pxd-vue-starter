import Vue from 'vue';
import Vuex from 'vuex';
import common from '@/store/modules/common';
import modules1 from '@/store/modules/modules1';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		common,
		modules1,
	},
	strict: process.env.NODE_ENV !== 'production',
});
