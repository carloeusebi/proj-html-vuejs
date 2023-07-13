<script>
import { learningList, descriptions } from '@/assets/data';

export default {
	data() {
		return {
			learningList,
			descriptions,
			active: learningList[0].id,
			hasChanged: false,
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
	watch: {
		// hasChanged triggers animation
		active() {
			this.hasChanged = true;
			setTimeout(() => {
				this.hasChanged = false;
			}, 200);
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
				<div
					class="right-column"
					:class="{ changed: hasChanged }">
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
@use '@/assets/sass/vars' as *;
@use '@/assets/sass/mixins' as *;
@use '@/assets/sass' as *;

section {
	padding-bottom: $section-padding;
	background-color: white;
	border-bottom: $section-border;
}
.grid {
	@include grid(30% 70%, 2rem);
}

* {
	color: $text-dark-gray;
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
	border: 1px solid $border-gray;
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

.changed.right-column {
	opacity: 0;
	animation: solve-into-view 150ms linear 1 forwards;
}

.fa-check {
	color: $background-blue;
	margin-right: 0.5rem;
}

@keyframes solve-into-view {
	from {
		opacity: 0;
		transform: translateY(1rem);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
