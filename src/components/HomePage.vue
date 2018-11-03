<template>
  <div class="container">
    <div class="same">
      <h1>Same Stop/Limit Percent Calculation</h1>
      <div class="sameInput">
        <p>
          <label for="sameSatoshi">Satoshi:</label>
          <input
            class="space input-width"
            type="number"
            pattern="^\d{1,}(\.\d{0,4})?$"
            name="sameSatoshi"
            :value="sameSatoshi"
            @keyup="updateSameSatoshi"
            :input="positiveGain + negativeGain"
          >
        </p>
        <p class="percentSpace">
          <label for="Sell">Percent: &nbsp;</label>
          <input
            class="percent"
            type="number"
            pattern="^\d{1,}(\.\d{0,4})?$"
            name="samePercent"
            :value="samePercent"
            @keyup="updateSamePercent"
            :input="positiveGain + negativeGain"
          > %
        </p>
      </div>
      <div class="sameOutput">
        <p class="space">Sell Limit: {{ positiveGain }}</p>
        <p class="space">Stop Loss: {{ negativeGain }}</p>
      </div>
    </div>
    <div class="diff">
      <h1>Different Stop/Limit Percent Calculation</h1>
      <div class="diffInput">
        <p>
          <label for="diffSatoshi">Satoshi:</label>
          <input
            class="space input-width"
            type="number"
            pattern="^\d{1,}(\.\d{0,4})?$"
            name="diffSatoshi"
            :value="diffSatoshi"
            @keyup="updateDiffSatoshi"
            :input="sellLimit + stopLoss"
          >
        </p>
        <p class="percentSpace">
          <label for="Sell">Sell Limit: &nbsp;</label>
          <input class="percent" type="number" pattern="^\d{1,}(\.\d{0,4})?$" name="sellPercent" :value="sellPercent" @keyup="updateSellPercent" :input="sellLimit"> %
        </p>
        <p class="percentSpace">
          <label for="Stop">Stop Loss: &nbsp;</label>
          <input
            class="percent"
            type="number"
            pattern="^\d{1,}(\.\d{0,4})?$"
            name="stopPercent"
            :value="stopPercent"
            @keyup="updateStopPercent"
            :input="stopLoss"
          > %
        </p>
      </div>
      <div class="diffOutput">
      <p class="space">Sell Limit: {{ sellLimit }}</p>
      <p class="space">Stop Loss: {{ stopLoss }}</p>
      </div>
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
	grid-column-end: 2;
	margin: 16px 0;
	justify-items: center;
	align-items: center;
}

.diff {
	grid-column-start: 2;
	grid-column-end: 2;
	margin: 16px 0;
	justify-items: center;
	align-items: center;
}

.sameInput {
	display: flex;
	justify-content: center;
	align-items: center;
}

.sameOutput {
	display: flex;
	justify-content: center;
	align-items: center;
}

.diffInput {
	display: flex;
	justify-content: center;
	align-items: center;
}

.diffOutput {
	display: flex;
	justify-content: center;
	align-items: center;
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
	margin: 0 8px;
}

.percentSpace {
	margin: 0 16px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
</style>
