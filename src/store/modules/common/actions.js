import { commonActionType } from '@/store/actionsType';
import { commonMutationType } from '@/store/mutationsType';

const actions = {
	/**
	 * @description action 설명
	 * @param commit
	 * @param payload 전달 받은 값
	 */
	[commonActionType.ACTION_SAMPLE]({ commit }, payload) {
		commit(commonMutationType.SET_LOADING_COMPLETE, true);
	},
};

export default actions;
