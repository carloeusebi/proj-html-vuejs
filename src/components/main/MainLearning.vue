<script>
import { learningList, descriptions } from '@/assets/data';

export default {
	data() {
		return {
			learningList,
			descriptions,
			active: learningList[0].id,
		};
	},
};
</script>

<template>
	<section id="learning-possibilities">
		<div class="container">
			<div class="grid">
				<div class="left-column">
					<ul>
						<li
							v-for="item in learningList"
							@click="active = item.id"
							:key="item.id"
							:class="{ active: item.id === active }"
							class="cell">
							{{ item.text }}
						</li>
					</ul>
				</div>
				<div class="right-column">
					<h2>Learning Possibilities</h2>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/colors' as *;
@use '@/assets/sass' as *;

section {
	margin: 8rem 0;
}
.grid {
	display: grid;
	grid-template-columns: 30% 70%;
	gap: 2rem;
}

* {
	color: $text-light-gray;
}

h2 {
	color: black;
}

li {
	font-family: $font-primary;
	font-weight: 600;
	padding: 1.5rem;
	border: 1px solid #eee;
	user-select: none;
	cursor: pointer;
	transition: all 250ms ease-out;

	&.active,
	&:hover {
		background-color: #fcfcfc;
		color: $background-blue;
		border-left: 7px solid $background-blue;
	}
}
</style>
