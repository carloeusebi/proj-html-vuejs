<script>
import HeaderJumbo from './header/HeaderJumbo.vue';
import HeaderNavbar from './header/HeaderNavbar.vue';
import AppOwlDots from './AppOwlDots.vue';

export default {
	components: { HeaderJumbo, HeaderNavbar, AppOwlDots },
};
</script>

<template>
	<header>
		<HeaderNavbar />
		<div class="flex container">
			<HeaderJumbo />
		</div>
		<AppOwlDots />
	</header>
</template>

<style scoped>
header {
	background-image: url('../assets/img/h5-slide-3-background.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	color: white;
}
</style>
