<template>
  <div class="market">
    <h2>Markets</h2>
    <Spin fix v-if="$store.getters.symbols.KRW <= 0">
      <Icon type="ios-loading" size=50 class="demo-spin-icon-load"></Icon>
      <div>Loading...</div>
    </Spin>
    <Tabs @on-click="tabAction">
      <TabPane v-for="(markets, index, key) in $store.getters.symbols" :label="index.toUpperCase()" :class="{'active': tabNum == key}" :key="key">
        <div class="market-list">
          <div v-for="(coin, key) in markets" :key="key">
            <p class="coin">
              {{ coin.base_currency }}
            </p>
            <p class="close">
              {{ pricePrecision(tickers(coin.symbol_code).close, coin.trade_price_precision) }}
            </p>
          </div>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Decimal } from 'decimal.js';

export default {
  data() {
    return {
      tabNum:0
    }
  },
  created() {
    this.getSymbols();
  },
  methods: {
    tabAction(name){
      this.tabNum = name;
    },
    tickers(coin) {
      return this.$store.getters.tickers[coin] || { close: '-' } ;
    },
    pricePrecision(price, precision) {
      return (isNaN(Number(price))) ? '-' : new Decimal(price).toFixed(precision) ;
    },
    ...mapActions(['getSymbols'])
  }
}
</script>
<style lang="scss" scoped>
  .market {

    h2 {
      margin-bottom:5px;
      font-weight:700;
    }
    .market-list {
      height:300px;
      border:1px solid #d1d1d1;
      overflow-x:hidden;
      overflow-y:auto;
      > div {
        display:flex;
        justify-content: space-between;
        width:100%;
        padding:5px;
        opacity:0;
        transform:rotateX(-120deg);
        transition:all .5s ease-in-out;
        @for $i from 1 through 200 {
          &:nth-child(#{$i + 1}) { transition-delay:0.05s * $i; }
        }
        p {
          width:33.3%;
          padding:0 10px;
          text-transform:uppercase;
          &.precision,
          &.close {
            text-align:right;
          }
        }
        &:nth-child(even) {
          background-color:#f1f1f1;
        }
      }
    }
    .ivu-tabs-tabpane.active {
      .market-list {
        > div {
          transform:rotateX(0);
          opacity:1;
        }
      }
    }
  }
</style>
