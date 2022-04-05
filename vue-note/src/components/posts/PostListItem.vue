<template>
	<li>
		<div class="post-title">
			{{ postItem.title }}
		</div>
		<div class="post-contents">
			{{ postItem.contents }}
		</div>
		<div class="post-time">
			{{ postItem.createdAt | formatDate }}
			<i class="icon ion-md-create" @click="routeEditPage"></i>
			<i class="icon ion-md-trash" @click="deleteItem"></i>
		</div>
	</li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
	/*
	filters: {
		formatDate(value) {
			return new Date(value);
		},
	},
	*/
	methods: {
		async deleteItem() {
			if (confirm('You want to delete it?')) {
				// props id이기 때문에 this로 정의
				await deletePost(this.postItem._id);
				this.$emit('refresh'); // refresh 이벤트를 올려보냄
			}
			// console.log('deleted');
		},
		routeEditPage() {
			// 포스트를 수정할 수 있는 화면으로 전환
			const id = this.postItem._id;
			this.$router.push(`/post/${id}`);
		},
	},
};
</script>

<style></style>
