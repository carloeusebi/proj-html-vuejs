<script>
import { courses } from '@/assets/data';
import MainCoursesCard from './MainCoursesCard.vue';

import AppOwlDots from '../AppOwlDots.vue';
export default {
	data() {
		return { courses, active: 0 };
	},
	components: { MainCoursesCard, AppOwlDots },
};
</script>

<template>
	<section id="courses">
		<div class="container">
			<h2>Popular online courses</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est aliquam aliquid maiores dolore amet, voluptate
				unde nemo facilis temporibus quae, officia ullam magni repudiandae minus ea ratione sapiente eaque alias.
			</p>
			<div class="cards-container">
				<MainCoursesCard
					v-for="course in courses"
					v-bind="course" />
			</div>
		</div>
		<AppOwlDots
			v-model="active"
			:number-of-dots="courses.length / 3"
			type="blue" />
	</section>
</template>

<style lang="scss" scoped>
section {
	padding: 8rem 0;
}

p {
	margin-bottom: 8rem;
}

.cards-container {
	display: flex;
	flex-wrap: nowrap;
	margin-bottom: 5rem;
	overflow-x: hidden;
	column-gap: 2rem;

	.course-card {
		flex: 0 0 calc((100% - 4rem) / 3);
	}
}

h2,
p {
	text-align: center;
}
</style>
