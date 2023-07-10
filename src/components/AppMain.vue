<script>
import MainContent from './main/MainContent.vue';
import MainCourses from './main/MainCourses.vue';
import MainLearning from './main/MainLearning.vue';
import MainPricing from './main/MainPricing.vue';
import MainPartners from './main/MainPartners.vue';

export default { components: { MainContent, MainLearning, MainCourses, MainPricing, MainPartners } };
</script>

<template>
	<!-- MAIN CONTENT -->
	<MainContent />
	<!-- LEARNING -->
	<MainLearning />
	<!-- COURSES -->
	<MainCourses />
	<!-- PRICING -->
	<MainPricing />
	<!-- PARTNERS -->
	<MainPartners />
</template>

<style scoped></style>
