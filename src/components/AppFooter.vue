<script>
import AppLogo from './AppLogo.vue';
export default { components: { AppLogo, FooterTop, FooterBottom } };
import FooterBottom from './footer/FooterBottom.vue';
import FooterTop from './footer/FooterTop.vue';
</script>

<template>
	<footer>
		<div class="container">
			<FooterTop />
			<div class="footer-divider"></div>
			<FooterBottom />
		</div>
	</footer>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/index' as *;
@use '@/assets/sass/colors' as *;

footer {
	background-color: $background-gray;
	color: $text-light-gray;
	padding: 8rem 0 3rem;
}

.footer-divider {
	height: 1px;
	background-color: #555;
	margin: 3rem 0;
}
</style>
