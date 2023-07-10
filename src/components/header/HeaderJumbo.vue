<script>
import AppButton from '../AppButton.vue';

export default {
	props: {
		title: String,
		subtitle: String,
	},
	data() {
		return {
			hasChanged: true,
		};
	},
	components: { AppButton },
	// watch title, when title changes it resets changed class triggering the animation
	watch: {
		title() {
			this.hasChanged = false;
			setTimeout(() => {
				this.hasChanged = true;
			}, 200);
		},
	},
};
</script>

<template>
	<div
		id="jumbotron"
		:class="{ changed: hasChanged }"
		class="text-center">
		<h1>{{ title }}</h1>
		<p>
			{{ subtitle }}
		</p>
		<AppButton
			class="button"
			text="Register now" />
	</div>
</template>

<style lang="scss" scoped>
p {
	font-size: 1.1rem;
	line-height: 2;
	margin-bottom: 3rem;
}

:is(h1, p, .button) {
	opacity: 0;
}

.changed {
	* {
		animation: fade-in 500ms ease-in-out 1 forwards;
	}

	h1 {
		animation-delay: 300ms;
	}

	p {
		animation-delay: 600ms;
	}

	.button {
		animation-delay: 900ms;
	}
}

@keyframes fade-in {
	from {
		opacity: 0;
		transform: translateY(50px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
