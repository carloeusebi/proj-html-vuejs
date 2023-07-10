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
		<div class="container">
			<HeaderNavbar />
			<div class="flex">
				<HeaderJumbo />
			</div>
			<AppOwlDots
				:active="3"
				type="hollow" />
		</div>
	</header>
</template>

<style scoped>
header {
	background-image: url('../assets/img/h5-slide-3-background.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;

	color: white;
	padding: 2rem 5rem;
}
.container {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
</style>
