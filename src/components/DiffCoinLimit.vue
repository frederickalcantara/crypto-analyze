<template>
  <div>
    <div class="diffInput">
      <p class="diffSatoshiSpace">
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
      <p class="diffPercentSpace">
        <label for="Sell">Sell Limit (%): &nbsp;</label>
        <input class="diffPercent" type="number" pattern="^\d{1,}(\.\d{0,4})?$" name="sellPercent" :value="sellPercent" @keyup="updateSellPercent" :input="sellLimit">
      </p>
      <p class="diffPercentSpace">
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
</template>

<script>
export default {
  name: 'DiffCoinLimit',
  data () {
    return {
      sellPercent: '',
      stopPercent: '',
      diffSatoshi: '',
    }
  },
  methods: {
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
    sellLimit () {
      return parseFloat(this.diffSatoshi * (1.00 + (this.sellPercent / 100))).toFixed(2)
    },
    stopLoss () {
      return parseFloat(this.diffSatoshi * (1.00 - (this.stopPercent / 100))).toFixed(2)
    }
  }
}
</script>

<style>
.diffInput {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	flex-wrap: wrap;
}

.diffSatoshiSpace {
	margin: 0px 16px;
}

.output {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	margin-bottom: 16px;
}

.diffWidth {
	width: 100%;
}

.space {
	margin: 16px 8px;
}

.diffPercent {
	width: 50%;
}

.diffSatoshiSpace,
.diffPercentSpace {
	margin: 8px 16px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
</style>