<script>
import MainContentBoxes from './MainContentBoxes.vue';
import MainContentTutoring from './MainContentTutoring.vue';
import MainContentPotential from './MainContentPotential.vue';
import MainContentQuotes from './MainContentQuotes.vue';

import { boxes } from '@/assets/data';

export default {
	components: { MainContentBoxes, MainContentTutoring, MainContentPotential, MainContentQuotes },
	data() {
		return { boxes };
	},
};
</script>

<template>
	<section id="main-content">
		<div class="boxes container">
			<MainContentBoxes
				v-for="(box, i) in boxes.labels"
				:label="box"
				:img="`${boxes.baseUrl}${i + 1}.png`" />
		</div>
		<MainContentTutoring />
		<MainContentPotential />
		<MainContentQuotes />
	</section>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/mixins' as *;
.boxes.container {
	@include grid(repeat(6, 1fr), 1.5rem);
	background-color: white;
}

#main-content {
	background-color: white;
}
</style>
