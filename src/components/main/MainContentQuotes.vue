<script>
import AppOwlDots from '../AppOwlDots.vue';
import { quotes } from '@/assets/data';

export default {
	components: { AppOwlDots },
	data() {
		return { quotes, active: 0, timer: null };
	},
	computed: {
		current() {
			return quotes[this.active];
		},
	},
	methods: {
		/**
		 * The offset regulates which image is displayed on the center
		 * @param {number} selected
		 */
		changeSelection(selected) {
			const offset = -100 * selected;
			this.active = selected;
			this.$refs.quote.forEach(q => {
				q.style.transform = `translateX(${offset}%)`;
			});
		},
		src(img) {
			const url = new URL(`../../assets/img/${img}`, import.meta.url);
			return url.href;
		},
		startTimeout() {
			this.timer = setTimeout(() => {
				const next = this.active === this.quotes.length - 1 ? 0 : this.active + 1;
				this.changeSelection(next);
			}, 7500);
		},
		// clears timeout when mouse enters over the text
		handleMouseEnter() {
			clearTimeout(this.timer);
		},
	},
	watch: {
		// watching active allows to clear the timeout when active changes because of user input
		active(newValue) {
			clearTimeout(this.timer);
			this.changeSelection(newValue);
			this.startTimeout();
		},
	},
	mounted() {
		this.startTimeout();
	},
};
</script>

<template>
	<section id="quotes">
		<div
			class="container"
			@mouseenter="handleMouseEnter"
			@mouseleave="startTimeout">
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
			v-model="active"
			:number-of-dots="quotes.length" />
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
