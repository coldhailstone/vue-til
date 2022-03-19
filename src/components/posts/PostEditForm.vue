<template>
	<div class="contents">
		<h1 class="page-header">Edit Post</h1>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">Title:</label>
					<input id="title" type="text" v-model="title" />
				</div>
				<div>
					<label for="contents">Contents:</label>
					<textarea id="contents" type="text" rows="5" v-model="contents" />
					<p v-if="!isContentsValid" class="validation-text warning">
						Contents length must be less then 250
					</p>
				</div>
				<button type="submit" class="btn">Edit</button>
			</form>
			<p class="log">
				{{ logMessage }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	computed: {
		isContentsValid() {
			return this.contents.length <= 250;
		},
	},
	methods: {
		async submitForm() {
			try {
				// await createPost({
				// 	title: this.title,
				// 	contents: this.contents,
				// });
				// this.$router.push('/main');
			} catch (error) {
				this.logMessage = error.response.data.message;
			}
		},
	},
};
</script>

<style scoped>
.form-wrapper .form {
	width: 100%;
}
.btn {
	color: white;
}
</style>
