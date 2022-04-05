import Vue from 'vue';
import VueRouter from 'vue-router';

// 초기화 위해서 필요한 코드
Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage.vue'),
		},
		{
			path: '/add',
			component: () => import('@/views/PostAddPage.vue'),
		},
		{
			path: '/post/:id',
			component: () => import('@/views/PostEditPage.vue'),
		},
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});
