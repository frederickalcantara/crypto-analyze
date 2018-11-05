<template>
  <div>
    <Header />
    <div class="container">
      <div class="calcrisk">
        <h1>In the Works of Coming up with a Risk Calculator</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'CalculateRisk',
  components: {
    Header,
  },
  head () {
    return {
      title: 'Crypto Risk',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Application that Calculates Risks for Crypto Investing'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container {
	display: grid;
	grid-template-columns: 10% 1fr 10%;
	grid-template-rows: 40% auto;
	text-align: center;
	margin-top: 20px;
}

.calcrisk {
	grid-column-start: 2;
	grid-column-end: 3;
}

h1 {
	margin: 12px;
}
</style>
