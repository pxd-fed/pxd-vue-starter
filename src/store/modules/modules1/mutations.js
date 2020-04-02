import { modules1MutationType } from '@/store/mutationsType';

const mutations = {
	/**
	 * @description mutation 설명
	 * @param state
	 * @param payload 전달 받은 값: Boolean
	 */
	[modules1MutationType.SET_MODULE1](state, payload) {
		try {
			if (typeof payload === 'boolean') {
				state.module1state = payload;
			}
		} catch (e) {
			console.error(`[modules1MutationType.SET_MODULE1] error: ${e}`);
		}
	},
};

export default mutations;
