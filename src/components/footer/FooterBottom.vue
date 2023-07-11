<script>
export default {};
</script>

<template>
	<div class="d-flex justify-content-between">
		<div class="credits">
			<a
				href="https://qodeinteractive.com/?_gl=1*ue7h9v*_gcl_au*MTgxMzQ1NzgzMC4xNjg4OTgwOTc5&_ga=2.254523592.1579392402.1688980980-362677612.1688980980"
				target="_blank"
				>&copy; 2017 Qode Interactive, All Rights Reserved</a
			>
		</div>
		<div class="right-column">
			<span> CALL +44 300 303 0266 </span>
			<span> FOLLOW US </span>
			<div class="social-icons">
				<a href="https://twitter.com/QodeInteractive?_ga=2.254523592.1579392402.1688980980-362677612.1688980980">
					<font-awesome-icon :icon="['fab', 'twitter']" />
				</a>
				<a href="https://www.instagram.com/qodeinteractive/?_ga=2.254523592.1579392402.1688980980-362677612.1688980980">
					<font-awesome-icon :icon="['fab', 'instagram']"
				/></a>
				<a href="https://www.facebook.com/QodeInteractive/?_ga=2.11581556.1579392402.1688980980-362677612.1688980980">
					<font-awesome-icon :icon="['fab', 'facebook']"
				/></a>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/colors' as *;
* {
	font-size: 0.8rem;
}

a {
	color: $text-dark-gray;
}

.social-icons {
	svg {
		font-size: 1rem;
		margin: 0 0.75rem;
	}

	a {
		transition: color 200ms;

		&:hover {
			color: $background-blue;
		}
	}
}

.right-column > * {
	display: inline-block;
	margin: 0 0.5rem;
}
</style>
