<template>
	<li>
		<div class="post-title">
			{{ item.title }}
		</div>
		<div class="post-contents">
			{{ item.contents }}
		</div>
		<div class="post-time">
			{{ item.createdAt }}
			<i class="icon ion-md-create"></i>
			<i class="icon ion-md-trash" @click="deleteItem"></i>
		</div>
	</li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	methods: {
		async deleteItem() {
			await deletePost(this.item._id);
		},
	},
};
</script>

<style></style>
