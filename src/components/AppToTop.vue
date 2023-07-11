<script>
export default {};
</script>

<template>
	<a href="#">
		<div id="to-top">
			<div class="text-center">
				<font-awesome-icon
					:icon="['fas', 'angle-up']"
					size="2xl" />
				<div class="text">TOP</div>
			</div>
		</div>
	</a>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/colors' as *;

#to-top {
	position: fixed;
	bottom: 0;
	right: 0;

	width: 58px;
	height: 58px;

	background-color: $background-blue;
	color: white;

	cursor: pointer;

	font-size: 0.8rem;
	font-weight: bold;

	&:hover .text {
		opacity: 0;
	}

	&:hover .fa-angle-up {
		top: 50%;
	}
}

.fa-angle-up {
	position: absolute;
	left: 50%;
	top: 35%;
	transform: translate(-50%, -50%);
	transition: top 200ms ease-in-out;
}

.text {
	position: absolute;
	left: 50%;
	top: 65%;
	transform: translate(-50%, -50%);
	transition: opacity 200ms;
}
</style>
