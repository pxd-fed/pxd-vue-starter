import { modules1ActionType } from '@/store/actionsType';
import { modules1MutationType } from '@/store/mutationsType';

const actions = {
	/**
	 * @description action 설명
	 * @param commit
	 * @param payload 전달 받은 값
	 */
	[modules1ActionType.ACTION_SAMPLE]({ commit }) {
		commit(modules1MutationType.SET_MODULE1, true);
	},
};

export default actions;
