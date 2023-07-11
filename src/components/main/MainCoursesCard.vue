<script>
export default {
	props: {
		img: String,
		title: String,
		pricing: Number,
		author: String,
		description: String,
		type: String,
	},
	computed: {
		imgSrc() {
			return new URL(`../../assets/img/${this.img}`, import.meta.url).href;
		},
		price() {
			return this.pricing === 0 ? 'FREE' : `$${this.pricing}`;
		},
		pillColor() {
			return this.pricing === 0 ? 'yellow' : 'blue';
		},
	},
};
</script>

<template>
	<a
		href="#"
		class="course-card">
		<figure>
			<img
				:src="imgSrc"
				:alt="title" />
		</figure>
		<font-awesome-icon
			class="heart-hover"
			:icon="['far', 'heart']" />
		<div class="course-card-body">
			<div class="d-flex justify-content-between mb-3">
				<div>
					<a href="#">
						<h5>{{ title }}</h5>
					</a>
					<a href="#">
						<div class="author">{{ author }}</div>
					</a>
				</div>
				<div>
					<div :class="`pill ${pillColor}`">
						{{ price }}
					</div>
				</div>
			</div>
			<p>{{ description }}</p>
			<div class="tags">
				<font-awesome-icon
					:icon="['fas', 'user']"
					size="sm" />
				<span class="ms-2 me-3">1</span>
				<font-awesome-icon
					:icon="['fas', 'tag']"
					flip="horizontal" />
				<a href="#">
					<span class="card-type">{{ type }}</span>
				</a>
			</div>
		</div>
	</a>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/index' as *;
@use '@/assets/sass/colors' as *;

$text-hover-gray: #444;

.course-card {
	display: block;
	position: relative;
	background-color: white;
	border: 1px solid $border-gray;
	height: 100%;

	transition: transform 300ms;
}

.course-card-body {
	padding: 1.5rem;
}

figure {
	position: relative;
}

img {
	height: 240px;
	width: 100%;
	object-fit: fill;
	position: relative;
}

h5 {
	font-size: 1.3rem;
	font-family: $font-primary;
	color: black;
	font-weight: 700;
	transition: color 200ms;

	&:hover {
		color: $background-blue;
	}
}

.author {
	font-weight: 700;
	color: $text-light-gray;

	transition: color 200ms;

	&:hover {
		color: $text-hover-gray;
	}
}

p {
	color: $text-dark-gray;
}

.pill {
	color: white;
	font-size: 0.85rem;
	padding: 1px;
	border-radius: 20px;
	min-width: 65px;
	text-align: center;
}

.pill.yellow {
	background-color: $background-yellow;
}

.pill.blue {
	background-color: $background-blue;
}

.tags {
	font-size: 0.85rem;
	color: $text-light-gray;
}

.card-type {
	text-transform: uppercase;
	margin-left: 0.2rem;
	font-weight: 900;
	color: $text-light-gray;

	&:hover {
		color: $text-hover-gray;
	}
}

// animations on hover

.heart-hover {
	position: absolute;
	top: 1rem;
	right: 1rem;
	color: white;
	opacity: 0;
	transition: opacity 0.2s ease-in-out;
}

figure::after {
	content: '';
	position: absolute;
	inset: 0;
	background-color: rgba(7, 7, 7, 0.1);
	opacity: 0;
	transition: opacity 0.2s ease-in-out;
}

.course-card:hover {
	transform: translateY(-3px);
	box-shadow: -2px 4px 13px 0 rgba(81, 137, 162, 0.05);

	figure::after {
		opacity: 1;
	}

	.heart-hover {
		opacity: 1;
	}
}
</style>
