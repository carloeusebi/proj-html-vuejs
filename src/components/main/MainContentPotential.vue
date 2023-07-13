<script>
export default {};
</script>

<template>
	<div class="container">
		<section id="potential">
			<div class="grid">
				<div class="left-column">
					<img
						src="@/assets/img/h5-img-2.jpg"
						alt="People holding a globe" />
				</div>
				<div class="right-column">
					<h2>Empowering children to reach their full potential</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor itaque nemo eligendi saepe unde incidunt
						adipisci porro assumenda quasi voluptas, labore modi et. Nihil labore ratione eius deserunt consectetur.
					</p>
					<div class="grid">
						<div class="left-column blue-text">
							<div class="number">168</div>
							<div class="description">User Stories</div>
						</div>
						<div class="right-column blue-text">
							<div class="number">347</div>
							<div class="description">Events</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/index' as *;
@use '@/assets/sass/mixins' as *;

img {
	padding: 0 2rem;
}
.grid {
	@include grid(60% 40%);
}

.number,
.description {
	font-family: $font-primary;
	font-weight: 500;
}

.number {
	font-size: 4rem;
}

.description {
	font-size: 1.1rem;
}
</style>
