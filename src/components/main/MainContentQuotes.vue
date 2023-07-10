<script>
import AppOwlDots from '../AppOwlDots.vue';
import { quotes } from '@/assets/data';

export default {
	components: { AppOwlDots },
	data() {
		return { quotes, currentQuote: 1 };
	},
	computed: {
		current() {
			return quotes[this.currentQuote];
		},
		src() {
			const url = new URL(`../../assets/img/${this.current.img}`, import.meta.url);
			return url.href;
		},
	},
};
</script>

<template>
	<section id="quotes">
		<div class="container">
			<img
				:src="src"
				alt="" />
			<p>"{{ current.quote }}"</p>
			<p class="author">{{ current.author }}</p>
			<p class="occupation">{{ current.occupation }}</p>
			<AppOwlDots />
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use '@/assets/sass' as *;

#quotes {
	background-image: url('@/assets/img/h5-parallax-img-1.png');
	text-align: center;
	padding: 7rem 0;
	color: white;
}

img {
	margin: 0 auto 2rem;
}

.author {
	margin-top: 3rem;
	font-size: 1.75rem;
	font-family: $font-primary;
}

.occupation {
	text-transform: uppercase;
	font-weight: 600;
	margin-bottom: 3rem;
}
</style>
