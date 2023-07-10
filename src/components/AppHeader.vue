<script>
import HeaderJumbo from './header/HeaderJumbo.vue';
import HeaderNavbar from './header/HeaderNavbar.vue';
import { jumbo } from '@/assets/data';
import AppOwlDots from './AppOwlDots.vue';

export default {
	data() {
		return { jumbo, active: 0, timer: null };
	},
	computed: {
		backgroundImage() {
			const url = new URL(`../assets/img/${jumbo[this.active].img}`, import.meta.url);
			return url.href;
		},
		// max value is the number of different jumbos we have
		maxValue() {
			return this.jumbo.length - 1;
		},
		nextValue() {
			return this.active === this.maxValue ? 0 : ++this.active;
		},
		prevValue() {
			return this.active === 0 ? this.maxValue : --this.active;
		},
	},
	methods: {
		/**
		 * Starts a countdown of 10 seconds
		 */
		startCountdown() {
			this.timer = setTimeout(() => {
				this.active = this.nextValue;
			}, 10000);
		},
	},
	// watch active variables, when it changes it clears timeout. It is needed to stop timeout when active changes because of user input
	watch: {
		active() {
			clearTimeout(this.timer);
			this.startCountdown();
		},
	},
	components: { HeaderJumbo, HeaderNavbar, AppOwlDots },
	mounted() {
		// at mounted it starts the countdown
		this.startCountdown();
	},
};
</script>

<template>
	<!-- Inline style changes the background -->
	<header :style="`background-image: url(${backgroundImage})`">
		<!-- NEXT & PREV ARROWS -->
		<font-awesome-icon
			:icon="['fas', 'angle-left']"
			@click="active = prevValue" />
		<font-awesome-icon
			:icon="['fas', 'angle-right']"
			@click="active = nextValue" />

		<div class="container">
			<HeaderNavbar />
			<div class="flex">
				<HeaderJumbo
					:title="jumbo[active].title"
					:subtitle="jumbo[active].subtitle" />
			</div>
			<AppOwlDots
				v-model="active"
				type="hollow" />
		</div>
	</header>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/colors' as *;

header {
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;
	position: relative;

	color: white;
	padding: 2rem 5rem;
}
.container {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}

svg {
	position: absolute;
	top: 50%;
	font-size: 6rem;
	transform: translateY(-50%);
	color: $text-light-gray;
	transition: color 300ms;
	cursor: pointer;

	&:hover {
		color: white;
	}

	&.fa-angle-left {
		left: 1rem;
	}

	&.fa-angle-right {
		right: 1rem;
	}
}
</style>
