<script>
import AppButton from '../AppButton.vue';
export default { components: { AppButton } };
</script>

<template>
	<div
		id="jumbotron"
		class="text-center">
		<h1>Contemporary Ideas</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odit illo consequuntur exercitationem dolore,
			ipsam molestiae labore eveniet cupiditate voluptatibus ullam doloremque cum officiis harum tenetur ipsum
			repellendus libero. Excepturi!
		</p>
		<AppButton text="Register now" />
	</div>
</template>

<style scoped>
p {
	font-size: 1.1rem;
	line-height: 2;
	margin-bottom: 3rem;
}
</style>
