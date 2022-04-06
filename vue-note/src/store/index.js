import Vue from 'vue';
import Vuex from 'vuex';
import {
	saveAuthToCookie,
	saveUserToCookie,
	getAuthFromCookie,
	getUserFromCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
	// state: 여러 컴포넌트간에 공유되는 데이터
	state: {
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
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
		setToken(state, token) {
			state.token = token;
		},
		clearToken(state) {
			state.token = '';
		},
	},
	actions: {
		async LOGIN({ commit }, userData) {
			const { data } = await loginUser(userData);
			console.log(data.token);
			commit('setToken', data.token);
			commit('setUsername', data.user.username);

			// 브라우저 저장소에 쿠키 저장
			saveAuthToCookie(data.token); // 토큰값 저장
			saveUserToCookie(data.user.username); // 유저명 저장
			return data;
		},
	},
});
