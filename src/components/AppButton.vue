<script>
export default {
	props: {
		text: {
			type: String,
			required: true,
		},
		href: {
			type: String,
			default: '#',
		},
		type: {
			type: String,
			default: 'primary',
			validator: type => ['primary', 'secondary'].includes(type),
		},
	},
	computed: {},
};
</script>

<template>
	<a
		:href="href"
		:class="type"
		>{{ text }}</a
	>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/colors' as *;
a {
	display: inline-block;
	padding: 1rem 3rem;
	font-weight: bold;
	text-transform: uppercase;
	transition: all 300ms;

	&:hover {
		background-color: #2face6;
		border-color: #2face6;
		color: white;
	}
}

.primary {
	background-color: $background-blue;
	color: white;
}

.secondary {
	background-color: white;
	border: 2px solid #eee;
	color: rgb(128, 128, 128);
}
</style>
