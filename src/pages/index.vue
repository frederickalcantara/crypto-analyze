<template>
  <div id="app">
    <Header />
    <main class="container">
      <div class="same">
        <h1>Same Stop/Limit Percent Calculation</h1>
        <SameCoinLimit />
      </div>
      <div class="diff">
        <h1>Different Stop/Limit Percent Calculation</h1>
        <DiffCoinLimit />
      </div>
    </main>
  </div>
</template>

<script>
import SameCoinLimit from '../components/SameCoinLimit'
import DiffCoinLimit from '../components/DiffCoinLimit'
import Header from '../components/Header'

export default {
  components: {
    DiffCoinLimit,
    Header,
    SameCoinLimit,
  },
  head () {
    return {
      title: 'Crypto Analyze',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Application that Calculates Stop Losses & Sell Limits for Crypto Investing'
        }
      ]
    }
  }
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
.container {
	display: grid;
	grid-template-columns: 10px 1fr 10px;
	grid-template-rows: 40% auto;
	text-align: center;
	margin-top: 20px;
}

.same {
	grid-column-start: 2;
	grid-column-end: 3;
}

.diff {
	grid-column-start: 2;
	grid-column-end: 3;
	margin: 24px 0px 12px 0;
}

h1 {
	margin: 12px;
}

@media screen and (min-width: 450px) and (max-width: 576px) {
	.container {
		grid-template-columns: 10px 1fr 10px;
	}
}
</style>
