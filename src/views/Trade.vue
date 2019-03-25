<template>
  <div class="trade">
    <h1>Trade</h1>
    <h2>{{ symbol }}</h2>
  </div>
</template>

<script>

const defaultSymbol = 'BTCETH';

export default {
  data(){
    return {
      symbol: this.$route.params.symbol || defaultMarket
    }
  },
}
</script>

<style lang="scss" scoped>
  
</style>