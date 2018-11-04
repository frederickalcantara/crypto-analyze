<template>
  <div id="app">
    <Header />
    <main>
      <home-page/>
    </main>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    HomePage,
    Header
  }
}
</script>

<style>
body {
	margin: 0;
}
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
main {
	text-align: center;
	margin-top: 20px;
}
</style>
