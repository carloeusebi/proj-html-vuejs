<script>
export default {
	props: {
		img: String,
		name: String,
		price: Number,
	},
	computed: {
		imgSrc() {
			return new URL(`../../../assets/img/${this.img}`, import.meta.url).href;
		},
	},
};
</script>

<template>
	<th>
		<img
			:src="imgSrc"
			:alt="name" />
		<h5>{{ name }}</h5>
		<div class="price">${{ price }}</div>
	</th>
</template>

<style scoped></style>
