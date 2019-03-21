<template>
  <div class="market">
    <h1>Markets</h1>
    <Spin fix v-if="!$store.getters.symbols">
      <Icon type="ios-loading" size=50 class="demo-spin-icon-load"></Icon>
      <div>Loading...</div>
    </Spin>
    <Tabs @on-click="tabAction">
      <TabPane v-for="(markets, index, key) in $store.getters.symbols" :label="index.toUpperCase()" :class="{'active': tabNum == key}" :key="key">
        <div class="market-list">
          <div class="list-head">
            <p>코인명</p>
            <p>현재가</p>
            <p>전일가 대비</p>
          </div>
          <div class="list-body">
            <div v-for="(coin, key) in markets" :key="key">
              <transition name="trans" mode="out-in">
                <div :key="tickers(coin.symbol_code).close" :class="[tickers(coin.symbol_code).open <= tickers(coin.symbol_code).close ? 'plus' : 'minus']">
                  <p class="coin">
                    <router-link :to="`/trade/${coin.quote_currency.toUpperCase()}/${coin.base_currency.toUpperCase()}`">
                      {{ coin.base_currency }}
                    </router-link>
                  </p>
                  <p>
                    {{ pricePrecision(tickers(coin.symbol_code).close, coin.trade_price_precision) }}
                  </p>
                  <p>
                    {{ tickers(coin.symbol_code).close | diffOf(tickers(coin.symbol_code).open) | toFixed(coin.trade_price_precision) }}
                    <span class="percent">
                      {{ tickers(coin.symbol_code).close | diffOf(tickers(coin.symbol_code).open) | percOf(tickers(coin.symbol_code).open) | toFixed(2) }}%
                    </span>
                  </p>
                </div>
              </transition>
            </div>
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
      height:400px;
      overflow-x:hidden;
      overflow-y:auto;
      .list-head {
        padding:10px;
        font-size:16px;
        display:flex;
        justify-content: space-between;
        align-items:center;
        width:100%;
        padding:10px 5px;
        background-color:#3A9FF0;
        > p {
          width:33.3%;
          padding:0 10px;
          color:#fff;
          font-weight:700;
        }
      }
      .list-body > div {
        div {
          display:flex;
          justify-content: space-between;
          align-items:center;
          width:100%;
          padding:5px;
          p {
            width:33.333%;
            padding:0 10px;
            text-transform:uppercase;
            .percent {
              display:block;
            }
            &.coin {
              color:#333;
              font-weight:700;
            }
          }
          &.plus {
            p:not(.coin) {
              color:#4F7EFF;
            }
          }
          &.minus {
            p:not(.coin) {
              color:#E57373;
            }
          }
        }
        &:nth-child(even) {
          background-color:#f1f1f1;
        }
        &:hover {
          background-color:#EAF5FD;
        }
      }
    }
  }

  /* moving */
  .trans-move {
    transition: all 300ms ease-in-out 50ms;
  }

  /* appearing */
  .trans-enter-active {
    transition: all 200ms ease-out;
  }

  /* disappearing */
  .trans-leave-active {
    transition: all 100ms ease-in;
  }

  /* appear at / disappear to */
  .trans-enter,
  .trans-leave-to {
    transform:rotateX(-180deg);
    opacity: 0;
  }
</style>
