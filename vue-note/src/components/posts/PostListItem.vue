<template>
	<li>
		<div class="post-title">
			{{ postItem.title }}
		</div>
		<div class="post-contents">
			{{ postItem.contents }}
		</div>
		<div class="post-time">
			{{ postItem.createdAt }}
			<i class="icon ion-md-create"></i>
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
	methods: {
		async deleteItem() {
			if (confirm('You want to delete it?')) {
				// props id이기 때문에 this로 정의
				await deletePost(this.postItem._id);
				this.$emit('refresh'); // refresh 이벤트를 올려보냄
			}
			// console.log('deleted');
		},
	},
};
</script>

<style></style>
