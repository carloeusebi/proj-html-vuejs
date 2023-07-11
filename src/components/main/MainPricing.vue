<script>
import { perks, plans } from '@/assets/data';
import TableHead from './table/TableHead.vue';

import AppButton from '../AppButton.vue';
export default {
	data() {
		return { plans, perks };
	},
	components: { TableHead, AppButton },
};
</script>

<template>
	<section id="pricing">
		<div class="container text-center">
			<h2>Pricing plans</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus numquam magni fugiat, dolor placeat enim quisquam
			</p>
			<table>
				<thead>
					<tr>
						<th><h5>Save up to 40% by paying weekly</h5></th>
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
							<font-awesome-icon :icon="['fas', plan.perks.includes(perk) ? 'check' : 'xmark']" />
						</td>
					</tr>
				</tbody>
				<tfoot>
					<td class="empty"></td>
					<td>
						<AppButton
							text="get it now"
							type="secondary" />
					</td>
					<td><AppButton text="get it now" /></td>
					<td>
						<AppButton
							text="get it now"
							type="secondary" />
					</td>
				</tfoot>
			</table>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/index' as *;
@use '@/assets/sass/colors' as *;

section {
	padding: 8rem;
	border-bottom: 1px solid $border-gray;
}

p {
	margin-bottom: 6rem;
}

table {
	width: 100%;
}

th,
td {
	border: 1px solid $border-gray;
	background-color: white;
	color: #555;
	font-size: 1.2rem;
}

th {
	border-top: 5px solid $background-light-blue;
	width: 25%;
	padding: 2rem;
}

th:first-of-type {
	vertical-align: bottom;
	text-align: left;

	h5 {
		font-size: 1.9rem;
	}
}

td {
	color: $text-dark-gray;
}

tfoot td {
	background-color: $background-box;
	padding: 1.25rem;
}

tfoot :deep(a) {
	font-size: 0.9rem;
}

td:first-child {
	font-family: $font-primary;
	font-weight: 900;
	font-size: 1rem;
	padding: 1.2rem;
	text-align: left;
	text-transform: capitalize;
}

th:nth-child(3) {
	border-top-color: $background-blue;
}

:deep(h5) {
	font-family: $font-primary;
	font-weight: 900;
}

.fa-check {
	color: $background-blue;
}

td.empty {
	border: none;
	background-color: transparent;
}
</style>
