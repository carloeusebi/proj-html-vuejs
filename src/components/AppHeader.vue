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
	},
	methods: {
		startCountdown() {
			this.timer = setTimeout(() => {
				this.hasChanged = false;
				this.active = this.active === this.jumbo.length - 1 ? 0 : ++this.active;
			}, 5000);
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

<style scoped>
header {
	/* background-image: url('../assets/img/h5-slide-3-background.jpg'); */
	background-repeat: no-repeat;
	background-size: cover;
	height: 100vh;

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
</style>
