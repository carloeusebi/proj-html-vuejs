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
	h1 {
		animation: fade-in 500ms ease-in-out 300ms 1 forwards;
	}

	p {
		animation: fade-in 500ms ease-in-out 600ms 1 forwards;
	}

	.button {
		animation: fade-in 500ms ease-in-out 900ms 1 forwards;
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
