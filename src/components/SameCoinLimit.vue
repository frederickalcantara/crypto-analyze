<template>
  <div>
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
</template>

<script>
export default {
  name: 'SameCoinLimit',
  data () {
    return {
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
    }
  },
  computed: {
    positiveGain () {
      return parseFloat(this.sameSatoshi * (1.00 + (this.samePercent / 100))).toFixed(2)
    },
    negativeGain () {
      return parseFloat(this.sameSatoshi * (1.00 - (this.samePercent / 100))).toFixed(2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.sameInput {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.sameSatoshiSpace,
.samePercentSpace {
	margin: 8px 16px;
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

.space {
	margin: 16px 8px;
}

@media screen and (min-width: 450px) and (max-width: 576px) {
	.sameSatoshiSpace {
		margin: 4px 0;
	}
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
</style>
