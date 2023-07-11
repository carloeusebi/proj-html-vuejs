<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppSideButton from './components/AppSideButton.vue';

export default {
	components: { AppHeader, AppMain, AppFooter, AppSideButton },
};
</script>

<template>
	<AppHeader />
	<AppMain />
	<AppFooter />

	<!-- related button -->
	<AppSideButton
		background-color="crimson"
		img="svg/svg-0.svg"
		:bottom="250"
		text="related" />

	<!-- shop button -->
	<AppSideButton
		background-color="white"
		img="svg/svg-2.svg"
		:bottom="190"
		text="buy now" />
</template>
