<script>
export default {
	props: {
		active: {
			type: Number,
			default: 1,
		},
		type: {
			type: String,
			default: 'default',
			validator: type => ['hollow', 'default', 'blue'].includes(type),
		},
	},
};
</script>

<template>
	<div class="owl-dots">
		<div
			class="dot"
			v-for="n in 3"
			:class="[type, { active: n === 3 }]"></div>
	</div>
</template>

<style lang="scss" scoped>
.owl-dots {
	display: flex;
}
.dot {
	width: 25px;
	height: 25px;
	border-radius: 50%;
	margin: 0.5rem;

	background-color: rgba(255, 255, 255, 0.4);

	cursor: pointer;
}

.active {
	background-color: white;
}

.hollow.active {
	border: 3px solid white;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;

	&:after {
		content: '';
		display: inline-block;
		width: 7px;
		height: 7px;
		background-color: white;
		border-radius: 10px;
	}
}
</style>
