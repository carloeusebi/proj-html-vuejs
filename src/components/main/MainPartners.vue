<script>
import { clients as partners } from '@/assets/data';

export default {
	data() {
		return { partners };
	},
	methods: {
		imgSrc(img) {
			return new URL(`../../assets/img/${img}`, import.meta.url).href;
		},
	},
};
</script>

<template>
	<section id="partners">
		<div class="container">
			<ul class="row row-cols-4 justify-content-center align-items-center">
				<li
					v-for="partner in partners"
					:key="partner.title">
					<a :href="partner.website">
						<img
							class="original"
							:src="imgSrc(partner.img)"
							:alt="partner.title"
							:title="partner.title" />

						<img
							class="on-hover"
							:src="imgSrc(partner.hover)"
							:alt="partner.title"
							:title="partner.title" />
					</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<style lang="scss" scoped>
section {
	padding: 8rem 0;
	background-color: white;
}

.on-hover {
	display: none;
}

li:hover {
	cursor: pointer;
	.original {
		display: none;
	}

	.on-hover {
		display: block;
	}
}
</style>
