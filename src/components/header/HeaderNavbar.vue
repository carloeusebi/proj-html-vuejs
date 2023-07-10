<script>
import { navbarLinks } from '@/assets/data';

export default {
	data() {
		return { navbarLinks };
	},
};
</script>

<template>
	<nav>
		<img
			class="logo"
			src="@/assets/img/logo-light.png"
			alt="logo" />
		<ul>
			<li v-for="link in navbarLinks">
				<a href="#">{{ link }}</a>
			</li>
		</ul>
		<font-awesome-icon
			:icon="['fas', 'magnifying-glass']"
			size="lg"
			flip="horizontal" />
		<font-awesome-icon
			:icon="['fas', 'bag-shopping']"
			size="lg" />
		<font-awesome-icon
			:icon="['fas', 'bars']"
			size="lg" />
	</nav>
</template>

<style scoped>
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
</style>
