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
		<img
			class="mb-3"
			:src="imgSrc"
			:alt="title" />
		<div class="course-card-body">
			<div class="d-flex justify-content-between mb-3">
				<div>
					<h5>{{ title }}</h5>
					<div class="author">{{ author }}</div>
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
				<span class="text-uppercase fw-bold ms-2">{{ type }}</span>
			</div>
		</div>
	</a>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/index' as *;
@use '@/assets/sass/colors' as *;

.course-card {
	display: block;
	max-width: 33%;
	background-color: white;
	border: 1px solid #eee;
	color: $text-light-gray;
}

.course-card-body {
	padding: 1.5rem;
}

h5 {
	font-size: 1.3rem;
	font-family: $font-primary;
	color: black;
	font-weight: 700;
}

.author {
	font-weight: 700;
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
}
</style>
