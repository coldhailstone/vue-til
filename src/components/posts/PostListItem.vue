<template>
	<li>
		<div class="post-title">
			{{ item.title }}
		</div>
		<div class="post-contents">
			{{ item.contents }}
		</div>
		<div class="post-time">
			{{ item.createdAt | formatDate }}
			<i class="icon ion-md-create" @click="routEditPage"></i>
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
	filters: {
		formatDate(value) {
			return new Date(value);
		},
	},
	methods: {
		routEditPage() {
			const id = this.item._id;
			this.$router.push(`/post/${id}`);
		},
		async deleteItem() {
			if (confirm('You want to delete it')) {
				await deletePost(this.item._id);
				this.$emit('refresh');
			}
		},
	},
};
</script>

<style></style>
