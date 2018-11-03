<template>
  <div class="container">
    <div class="same">
      <h1>Same Stop/Limit Percent Calculation</h1>
      <p><label for="sameSatoshi">Satoshi:</label>
      <input class="space input-width" type="number" name="sameSatoshi" :value="sameSatoshi" @keyup="updateSameSatoshi" :input="positiveGain + negativeGain"></p>
      <p><label for="Sell">Percent:</label>
      <input class="percent percentSpace" type="number" name="samePercent" :value="samePercent" @keyup="updateSamePercent" :input="positiveGain + negativeGain">%</p>
      <p class="space">Sell Limit: {{ positiveGain }}</p>
      <p class="space">Stop Loss: {{ negativeGain }}</p>
    </div>
    <div class="diff">
      <h1>Different Stop/Limit Percent Calculation</h1>
      <p><label for="diffSatoshi">Satoshi:</label>
      <input class="space input-width" type="number" name="diffSatoshi" :value="diffSatoshi" @keyup="updateDiffSatoshi" :input="sellLimit + stopLoss"></p>
      <p><label for="Sell">Sell Limit:&nbsp;</label>
      <input class="percent percentSpace" type="number" name="sellPercent" :value="sellPercent" @keyup="updateSellPercent" :input="sellLimit">%</p>
      <p><label for="Stop">Stop Loss:</label>
      <input class="percent percentSpace" type="number" name="stopPercent" :value="stopPercent" @keyup="updateStopPercent" :input="stopLoss">%</p>
      <p class="space">Sell Limit: {{ sellLimit }}</p>
      <p class="space">Stop Loss: {{ stopLoss }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      sellPercent: '',
      stopPercent: '',
      diffSatoshi: '',
      sameSatoshi: '',
      samePercent: ''
    }
  },
  methods: {
    updateSameSatoshi (e) {
      this.sameSatoshi = e.target.value
    },
    updateSamePercent (e) {
      this.samePercent = e.target.value
    },
    updateDiffSatoshi (e) {
      this.diffSatoshi = e.target.value
    },
    updateSellPercent (e) {
      this.sellPercent = e.target.value
    },
    updateStopPercent (e) {
      this.stopPercent = e.target.value
    }
  },
  computed: {
    positiveGain () {
      return parseFloat(this.sameSatoshi * (1.00 + (this.samePercent / 100))).toFixed(2)
    },
    negativeGain () {
      return parseFloat(this.sameSatoshi * (1.00 - (this.samePercent / 100))).toFixed(2)
    },
    sellLimit () {
      return parseFloat(this.diffSatoshi * (1.00 + (this.sellPercent / 100))).toFixed(2)
    },
    stopLoss () {
      return parseFloat(this.diffSatoshi * (1.00 - (this.stopPercent / 100))).toFixed(2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container {
	display: grid;
	grid-template-columns: 15% auto 15%;
	grid-template-rows: 40% auto;
}

.same {
	grid-column-start: 2;
	grid-column-end: 3;
}

.diff {
	grid-column-start: 2;
	grid-column-end: 3;
}

h1,
h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #35495e;
}

.input-width {
	width: 80px;
}

.percent {
	width: 50px;
}

.space {
	margin: 8px 16px;
}

.percentSpace {
	margin: 0 2px 0px 16px;
}
</style>
