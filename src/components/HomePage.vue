<template>
  <div class="container">
    <div class="same">
      <h1>Same Stop/Limit Percent Calculation</h1>
      <div class="sameInput">
        <p class="sameSatoshiSpace">
          <label for="sameSatoshi">Satoshi (BTC): &nbsp;</label>
          <input
            class="sameWidth"
            type="number"
            pattern="^\d{1,}(\.\d{0,4})?$"
            name="sameSatoshi"
            :value="sameSatoshi"
            @keyup="updateSameSatoshi"
            :input="positiveGain + negativeGain"
          >
        </p>
        <p class="samePercentSpace">
          <label for="Sell">Stop Loss / Sell Limit (%): &nbsp;</label>
          <input
            class="samePercent"
            type="number"
            pattern="^\d{1,}(\.\d{0,4})?$"
            name="samePercent"
            :value="samePercent"
            @keyup="updateSamePercent"
            :input="positiveGain + negativeGain"
          >
        </p>
      </div>
      <div class="output">
        <p class="space">Sell Limit: {{ positiveGain }}</p>
        <p class="space">Stop Loss: {{ negativeGain }}</p>
      </div>
    </div>
    <div class="diff">
      <h1>Different Stop/Limit Percent Calculation</h1>
      <div class="diffInput">
        <p class="satoshiSpace">
          <label for="diffSatoshi">Satoshi (BTC): &nbsp;</label>
          <input
            class="diffWidth"
            type="number"
            pattern="^\d{1,}(\.\d{0,4})?$"
            name="diffSatoshi"
            :value="diffSatoshi"
            @keyup="updateDiffSatoshi"
            :input="sellLimit + stopLoss"
          >
        </p>
        <p class="percentSpace">
          <label for="Sell">Sell Limit (%): &nbsp;</label>
          <input class="diffPercent" type="number" pattern="^\d{1,}(\.\d{0,4})?$" name="sellPercent" :value="sellPercent" @keyup="updateSellPercent" :input="sellLimit">
        </p>
        <p class="percentSpace">
          <label for="Stop">Stop Loss (%): &nbsp;</label>
          <input
            class="diffPercent"
            type="number"
            pattern="^\d{1,}(\.\d{0,4})?$"
            name="stopPercent"
            :value="stopPercent"
            @keyup="updateStopPercent"
            :input="stopLoss"
          >
        </p>
      </div>
      <div class="output">
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
	grid-template-columns: 10px 1fr 10px;
	grid-template-rows: 40% auto;
}

h1 {
	margin: 12px;
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

.sameInput {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.diffInput {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	flex-wrap: wrap;
}

.output {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	margin-bottom: 16px;
}

.sameWidth {
	width: 95%;
}

.samePercent {
	width: 70%;
}

.diffWidth {
	width: 100%;
}

.space {
	margin: 8px 8px;
}

.diffPercent {
	width: 50%;
}

.percentSpace {
	margin: 8px 36px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

@media screen and (min-width: 450px) and (max-width: 576px) {
	.container {
		grid-template-columns: 10px 1fr 10px;
	}
	.sameSatoshiSpace {
		margin: 4px 0;
	}
}
</style>
