<script>
import AppLogo from '../AppLogo.vue';

export default {
	components: { AppLogo },
};
</script>

<template>
	<div class="grid-container">
		<div class="col">
			<AppLogo />
			<p>Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home</p>
			<div class="links">
				<a href="tel:1-677-124-44227">
					<font-awesome-icon
						:icon="['fas', 'phone-volume']"
						class="me-2" />
					1-677-124-44227</a
				>
			</div>
			<div class="links">
				<a href="#">
					<font-awesome-icon
						:icon="['far', 'clock']"
						class="me-2" />
					Mon - Sat 8.00 - 18.00</a
				>
			</div>
		</div>
		<div class="col">
			<h3>Popular Courses</h3>
			<ul class="corses">
				<li>
					<a href="#"> <h4>Business English</h4></a>
					<a href="#"><span>Preston Marshall</span></a>
				</li>
				<li>
					<a href="#"><h4>Social Computing</h4></a>
					<a href="#"><span>David Sanders</span></a>
				</li>
				<li>
					<a href="#"><h4>Learn Spanish</h4></a>
					<a href="#"><span>Jennie King</span></a>
				</li>
			</ul>
		</div>
		<div class="col">
			<h3>Support</h3>
			<ul class="support">
				<li><a href="#">User Dashboard</a></li>
				<li><a href="#">Contact Us</a></li>
				<li><a href="#">FAQ</a></li>
				<li><a href="#">Course Offer</a></li>
				<li><a href="#">Events</a></li>
			</ul>
		</div>
		<div class="col">
			<h3>Flexible Learning</h3>
			<img
				src="@/assets/img/footer-img-1.png"
				alt="A map with the sites" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/index' as *;
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/mixins' as *;

.grid-container {
	@include grid(repeat(4, 25%));
}

p {
	font-size: 1rem;
}

.links a {
	display: inline-block;
	font-size: 0.85rem;
	padding: 0.5rem 0;
	color: white;

	svg {
		transition: color 300ms;
	}

	&:hover svg {
		color: $background-blue;
	}
}

h3,
h4 {
	color: white;
	font-family: $font-primary;
}

h4 {
	margin-bottom: 0;
	font-size: 1rem;
}

h3 {
	font-weight: 900;
}

.logo {
	width: 50%;
}

h3,
.logo {
	margin-bottom: 3rem;
}

ul {
	padding: 0;
}
.corses {
	li {
		margin-bottom: 1rem;
	}
	* {
		cursor: pointer;
		transition: color 300ms;
	}

	h4:hover {
		color: $background-blue;
	}

	span {
		color: $text-light-gray;
	}

	span:hover {
		color: #555;
	}
}

.support {
	a {
		display: inline-block;
		color: $text-dark-gray;
		transition: color 300ms;
		margin: 0.3rem 0;

		&:hover {
			color: $background-blue;
		}
	}
}

.col {
	min-height: 200px;
	padding: 1rem;
}
</style>
