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
	computed: {
		activeDescription() {
			return descriptions.find(({ id }) => id === this.active);
		},
		imgSrc() {
			return new URL(`../../assets/img/${this.activeDescription.img}`, import.meta.url).href;
		},
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
					<h2>{{ activeDescription.title }}</h2>
					<p>{{ activeDescription.paragraph }}</p>
					<ul>
						<li
							v-for="point in activeDescription.bulletPoints"
							:key="point">
							<font-awesome-icon :icon="['fas', 'check']" />
							{{ point }}
						</li>
					</ul>
					<figure>
						<img
							:src="imgSrc"
							:alt="activeDescription.title" />
					</figure>
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

figure {
	position: absolute;
	bottom: 0;
	right: 0;
	width: 175px;
}

.left-column li {
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

.right-column {
	position: relative;

	li {
		font-size: 1.1rem;
		padding: 1rem 0;
	}
}

.fa-check {
	color: $background-blue;
	margin-right: 0.5rem;
}
</style>
