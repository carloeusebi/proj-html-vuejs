<script>
export default {
	props: {
		img: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			require: true,
		},
	},
	computed: {
		src() {
			const url = new URL(`../../assets/img/${this.img}`, import.meta.url);
			return url.href;
		},
	},
};
</script>

<template>
	<div class="box">
		<img
			:src="src"
			:alt="label" />
		<h4>{{ label }}</h4>
	</div>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/colors' as *;
@use '@/assets/sass' as *;

.box {
	background-color: $background-box;
	text-align: center;
	padding: 3rem 0;
	cursor: pointer;

	img {
		transition: transform 300ms;
	}

	&:hover img {
		transform: translateY(-7px);
	}
}

h4 {
	font-family: $font-primary;
	margin-top: 3rem;
}
</style>
