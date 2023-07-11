<script>
export default {
	props: {
		backgroundColor: String,
		img: String,
		text: String,
		link: {
			type: String,
			default: '#',
		},
		bottom: Number,
	},
	computed: {
		imgSrc() {
			return new URL(`../assets/img/${this.img}`, import.meta.url).href;
		},
	},
};
</script>

<template>
	<a :href="link">
		<div
			id="related"
			:class="`bg-${backgroundColor}`"
			:style="`bottom: ${bottom}px`">
			<figure>
				<img
					:src="imgSrc"
					:alt="text" />
			</figure>
			<span class="text-uppercase">{{ text }}</span>
		</div>
	</a>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/colors' as *;

#related {
	position: fixed;
	right: -100px;
	width: 150px;
	height: 50px;
	padding: 0.5rem;

	display: flex;
	align-items: center;
	cursor: pointer;
	font-size: 10px;
	font-weight: 500;
	font-family: 'Heebo Variable';

	box-shadow: 0 0 9.8px 0.2px rgba(0, 0, 0, 0.1);

	transition: right 500ms;

	figure {
		width: 50px;
		height: 100%;
		margin-bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		user-select: none;
		max-height: 20px;
		margin-right: 1rem;
	}

	&:hover {
		right: 0;
	}
}

.bg-white {
	background-color: white;
	color: black;
}

.bg-crimson {
	background-color: $background-crimson;
	color: white;
}
</style>
