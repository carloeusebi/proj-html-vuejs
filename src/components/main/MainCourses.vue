<script>
import { courses } from '@/assets/data';
import MainCoursesCard from './MainCoursesCard.vue';

export default {
	data() {
		return { courses };
	},
	components: { MainCoursesCard },
};
</script>

<template>
	<section id="courses">
		<div class="container">
			<h2>Popular online courses</h2>
			<MainCoursesCard v-bind="courses[0]" />
		</div>
	</section>
</template>

<style scoped>
section {
	padding: 8rem 0;
}

h2 {
	text-align: center;
}
</style>
