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
					<nuxt-link to="/calculaterisk">
						Risk Calculator
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
	color: #ffffff;
}

.navbar {
	list-style-type: none;
	padding: 0;
	display: flex;
}

a {
	font-size: 24px;
	line-height: 1;
	letter-spacing: 0.02em;
	font-weight: 400;
}
</style>
