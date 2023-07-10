<script>
import HeaderJumbo from './header/HeaderJumbo.vue';
import HeaderNavbar from './header/HeaderNavbar.vue';
import { jumbo } from '@/assets/data';
import AppOwlDots from './AppOwlDots.vue';

export default {
	data() {
		return { jumbo, active: 0, timer: null, hasChanged: true };
	},
	computed: {
		backgroundImage() {
			const url = new URL(`../assets/img/${jumbo[this.active].img}`, import.meta.url);
			return url.href;
		},
		maxValue() {
			return this.jumbo.length - 1;
		},
	},
	methods: {
		startCountdown() {
			this.timer = setTimeout(() => {
				this.hasChanged = false;
				this.active = this.active === this.maxValue ? 0 : ++this.active;
			}, 10000);
		},
		handlePrevClick() {
			this.active = this.active === 0 ? this.maxValue : --this.active;
		},
		handleNextClick() {
			this.active = this.active === this.maxValue ? 0 : ++this.active;
		},
	},
	watch: {
		active() {
			this.hasChanged = false;
			setTimeout(() => {
				this.hasChanged = true;
			}, 200);
			clearTimeout(this.timer);
			this.startCountdown();
		},
	},
	components: { HeaderJumbo, HeaderNavbar, AppOwlDots },
	mounted() {
		this.startCountdown();
	},
};
</script>

<template>
	<header :style="`background-image: url(${backgroundImage})`">
		<!-- NEXT & PREV ARROWS -->
		<font-awesome-icon
			:icon="['fas', 'angle-left']"
			@click="handlePrevClick" />
		<font-awesome-icon
			:icon="['fas', 'angle-right']"
			@click="handleNextClick" />

		<div class="container">
			<HeaderNavbar />
			<div class="flex">
				<HeaderJumbo
					:class="{ changed: hasChanged }"
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
	/* background-image: url('../assets/img/h5-slide-3-background.jpg'); */
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
