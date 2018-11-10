<template>
  <header>
		<nav>
			<ul class="navbar">
				<li>
					<nuxt-link to="/">
						Crypto Analyze
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/contact">
						Contact Us
					</nuxt-link>
				</li>
			</ul>
		</nav>
  </header>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
header {
	height: 56px;
	background-color: #35495e;
}

.navbar {
	list-style-type: none;
	padding: 0;
	display: flex;
}

li {
	flex: 1; /* distribute all available space evenly among flex items */
	display: flex; /* make each flex item a flex container, as well */
	align-items: center; /* center text vertically (in this case) */
	justify-content: center;
	margin: 16px;
}

a {
	font-size: 1.5em;
	line-height: 1;
	letter-spacing: 0.02em;
	font-weight: 400;
	color: #ffffff;
	text-decoration: none;
}

@media screen and (max-width: 576px) {
	a {
		font-size: 1.25em;
	}
}
</style>
