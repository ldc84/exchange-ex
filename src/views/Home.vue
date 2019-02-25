<template>
  <div class="home">
    <div class="market">
      <h2>Market</h2>
      <Spin fix v-if="$store.getters.symbols.KRW <= 0">
        <Icon type="ios-loading" size=50 class="demo-spin-icon-load"></Icon>
        <div>Loading...</div>
      </Spin>
      <Tabs @on-click="tabAction">
        <TabPane v-for="(markets, index, key) in $store.getters.symbols" :label="index" :class="{'active': tabNum == key}" :key="key">
          <ul>
            <li v-for="(coin, key) in markets" :key="key">
              <p>
                {{ coin.base_currency }}
              </p>
            </li>
          </ul>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

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
    ul {
      height:300px;
      border:1px solid #d1d1d1;
      overflow-x:hidden;
      overflow-y:auto;
      > li {
        padding:5px;
        opacity:0;
        transform:rotateX(-120deg);
        transition:all .5s ease-in-out;
        @for $i from 1 through 200 {
          &:nth-child(#{$i + 1}) { transition-delay:0.05s * $i; }
        }
        p {
          text-transform:uppercase;
        }
        &:nth-child(even) {
          background-color:#f1f1f1;
        }
      }
    }
    .ivu-tabs-tabpane.active {
      ul {
        li {
          transform:rotateX(0);
          opacity:1;
        }
      }
    }
  }
</style>
