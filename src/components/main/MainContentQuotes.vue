<script>
import AppOwlDots from '../AppOwlDots.vue';
import { quotes } from '@/assets/data';

export default {
	components: { AppOwlDots },
	data() {
		return { quotes, currentQuote: 0, timer: null };
	},
	computed: {
		current() {
			return quotes[this.currentQuote];
		},
	},
	methods: {
		changeSelection(selected) {
			const offset = -100 * selected;
			this.currentQuote = selected;
			this.$refs.quote.forEach(q => {
				q.style.transform = `translateX(${offset}%)`;
			});
		},
		src(img) {
			const url = new URL(`../../assets/img/${img}`, import.meta.url);
			return url.href;
		},
		startCountdown() {
			clearInterval(this.timer);
			this.timer = setInterval(() => {
				const next = this.currentQuote === this.quotes.length - 1 ? 0 : ++this.currentQuote;
				this.changeSelection(next);
			}, 5000);
		},
	},
	mounted() {
		this.startCountdown();
	},
};
</script>

<template>
	<section id="quotes">
		<div class="container">
			<div
				v-for="(quote, i) in quotes"
				ref="quote"
				class="quote">
				<img
					:src="src(quote.img)"
					alt="" />
				<p>"{{ quote.quote }}"</p>
				<p class="author">{{ quote.author }}</p>
				<p class="occupation">{{ quote.occupation }}</p>
			</div>
		</div>
		<AppOwlDots
			v-model="currentQuote"
			@change-selection="changeSelection" />
	</section>
</template>

<style lang="scss" scoped>
@use '@/assets/sass' as *;

.container {
	display: flex;
	overflow-x: hidden;
}

#quotes {
	background-image: url('@/assets/img/h5-parallax-img-1.png');
	text-align: center;
	padding: 7rem 0;
	color: white;
}

img {
	margin: 0 auto 2rem;
}

.quote {
	min-width: 100%;
	transition: transform 400ms ease-in-out;
	padding: 0 8rem;
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
