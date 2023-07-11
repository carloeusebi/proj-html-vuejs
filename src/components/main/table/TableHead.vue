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

<style lang="scss" scoped>
@use '@/assets/sass/colors' as *;

table th {
	background-color: $background-box;
}
h5 {
	font-size: 1.5rem;
	padding: 1.5rem;
}
</style>
