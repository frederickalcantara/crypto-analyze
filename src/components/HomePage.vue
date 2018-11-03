<template>
  <div>
    <div class="hello">
      <h1>Same Stop/Limit Percent Calculation</h1>
      <label for="sameSatoshi">Satoshi:</label>
      <input class="space" type="number" name="sameSatoshi" :value="sameSatoshi" @keyup="updateSameSatoshi" @change="updateSameSatoshi" :input="positiveGain + negativeGain">
      <label for="Sell">Percent:</label>
      <input class="percent percentSpace" type="number" name="samePercent" :value="samePercent" @change="updateSamePercent" :input="positiveGain + negativeGain">%
      <button class="space" type="submit" @click="positiveGain + negativeGain" >Calculate</button>
      <p><span class="space">Sell Limit: {{ positiveGain }}</span><span class="space">Stop Loss: {{ negativeGain }}</span></p>
    </div>
    <div class="hello">
      <h1>Different Stop/Limit Percent Calculation</h1>
      <label for="diffSatoshi">Satoshi:</label>
      <input class="space" type="number" name="diffSatoshi" :value="diffSatoshi" @keyup="updateDiffSatoshi" @change="updateDiffSatoshi" :input="sellLimit + stopLoss">
      <label for="Sell">Sell Limit:</label>
      <input class="percent percentSpace" type="number" name="sellPercent" :value="sellPercent" @change="updateSellPercent" :input="sellLimit">% &nbsp;
      <label for="Stop">Stop Loss:</label>
      <input class="percent percentSpace" type="number" name="stopPercent" :value="stopPercent" @change="updateStopPercent" :input="stopLoss">%
      <button class="space" type="submit" @click="sellLimit + stopLoss">Calculate</button>
      <p><span class="space">Sell Limit: {{ sellLimit }}</span><span class="space">Stop Loss: {{ stopLoss }}</span></p>
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
.percent {
	width: 50px;
}
.space {
	margin: 0 16px;
}
.percentSpace {
	margin: 0 4px 0px 16px;
}
</style>
