<script>
import { perks, plans } from '@/assets/data';
import TableHead from './table/TableHead.vue';

export default {
	data() {
		return { plans, perks };
	},
	components: { TableHead },
};
</script>

<template>
	<section id="pricing">
		<div class="container">
			<header class="text-center mb-5">
				<h2>Pricing plans</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus numquam magni fugiat, dolor placeat enim
					quisquam
				</p>
			</header>
			<table>
				<thead>
					<tr>
						<th>Save up to 40% by paying weekly</th>
						<TableHead
							v-for="plan in plans"
							:img="plan.img"
							:name="plan.name"
							:price="plan.price"
							:key="plan.name" />
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Number of Courses</td>
						<td
							v-for="plan in plans"
							:key="plan.name">
							{{ plan.numOfCourses }}
						</td>
					</tr>
					<tr>
						<td>Time</td>
						<td
							v-for="plan in plans"
							:key="plan.name">
							{{ plan.days }} Days
						</td>
					</tr>
					<tr
						v-for="(perk, i) in perks"
						:key="i">
						<td>{{ perk }}</td>
						<td
							v-for="plan in plans"
							:key="plan.name">
							{{ plan.perks.includes(perk) ? 'yes' : 'no' }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>

<style scoped>
section {
	padding: 8rem;
}
</style>
