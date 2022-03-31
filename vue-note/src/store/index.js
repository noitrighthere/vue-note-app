import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	// state: 여러 컴포넌트간에 공유되는 데이터
	state: {
		username: '',
	},
	// getters: state 값이 변경됐을 때 상태를 계산
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	// mutations: 데이터를 갖고 옴
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		clearUsername(state) {
			state.username = '';
		},
	},
});
