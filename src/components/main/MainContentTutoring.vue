<script>
export default {};
</script>

<template>
	<section id="tutoring">
		<div class="container">
			<h2>The trusted name <br />for in-home tutoring.</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto aspernatur dolores nobis nihil eius qui
				hic. Doloremque dolorem, et dolore quaerat asperiores a corrupti! Repellendus expedita culpa quisquam voluptate.
			</p>
			<a
				href="#"
				class="blue-text"
				>Learn more</a
			>
			<img
				src="@/assets/img/h5-img-1.jpg"
				alt="Home Tutoring" />
		</div>
	</section>
</template>

<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/vars' as *;

#tutoring {
	border-bottom: $section-border;
}

.blue-text {
	text-transform: uppercase;
	font-weight: 900;
	letter-spacing: 3px;
	margin-bottom: 0;
}

img {
	width: 100%;
}
</style>
