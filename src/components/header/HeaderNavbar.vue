<script>
import { navbarLinks } from '@/assets/data';

import AppLogo from '../AppLogo.vue';
export default {
	data() {
		return { navbarLinks, itemsInCart: 0 };
	},
	components: { AppLogo },
};
</script>

<template>
	<nav>
		<AppLogo />
		<ul>
			<li v-for="link in navbarLinks">
				<a href="#">{{ link }}</a>
			</li>
		</ul>
		<font-awesome-icon
			:icon="['fas', 'magnifying-glass']"
			size="lg"
			flip="horizontal" />
		<div class="position-relative">
			<font-awesome-icon
				:icon="['fas', 'bag-shopping']"
				size="lg" />
			<span class="items-in-cart">{{ itemsInCart }}</span>
		</div>
		<font-awesome-icon
			:icon="['fas', 'bars']"
			size="lg" />
	</nav>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/colors' as *;
.logo {
	height: 32px;
}

nav,
ul {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}

.svg-inline--fa {
	margin: 0 1rem;
	cursor: pointer;
}

ul {
	flex-grow: 1;
	justify-content: space-evenly;
	height: 100%;
	margin-bottom: 0;
}

a {
	color: white;
	text-transform: uppercase;
	font-family: sans-serif;
	font-weight: 600;
	font-size: 14px;
}

.items-in-cart {
	position: absolute;
	top: 15%;
	left: 75%;
	transform: translate(-50%, -50%);

	display: flex;
	justify-content: center;
	align-items: center;
	width: 20px;
	height: 20px;
	font-size: 0.75rem;
	background-color: $background-blue;
	border-radius: 50%;
}
</style>
