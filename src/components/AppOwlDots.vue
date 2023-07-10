<script>
export default {
	props: {
		modelValue: Number,
		type: {
			type: String,
			default: 'default',
			validator: type => ['hollow', 'default', 'blue'].includes(type),
		},
		numberOfDots: {
			type: Number,
			required: true,
		},
	},

	emits: ['update:modelValue'],
};
</script>

<template>
	<div class="owl-dots">
		<div
			class="dot"
			v-for="(n, i) in numberOfDots"
			:class="[type, { active: i === modelValue }]"
			@click="$emit('update:modelValue', i)"></div>
	</div>
</template>

<style lang="scss" scoped>
.owl-dots {
	display: flex;
	justify-content: center;
}
.dot {
	width: 20px;
	height: 20px;
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
