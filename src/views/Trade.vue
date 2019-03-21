<template>
  <div class="trade">
    <h1>Trade</h1>
    <h2>{{ market }} 마켓</h2>
    <h3>{{ coin }}</h3>
  </div>
</template>

<script>

const defaultMarket = 'BTC';
const defaultCoin = 'ETH';

export default {
  data(){
    return {
      market: this.$route.params.marketName || defaultMarket,
      coin: this.$route.params.coinName || defaultCoin
    }
  },
  created(){

  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  
</style>