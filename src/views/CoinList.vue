<template>
  <div class="about">
    <h1>Coin List</h1>
    <Spin fix v-if="$store.getters.coins.length <= 0">
      <Icon type="ios-loading" size=50 class="demo-spin-icon-load"></Icon>
      <div>Loading...</div>
    </Spin>
    <ul class="coin-list">
      <li v-for="(coin, key) in $store.getters.coins" :key="key">
        <strong>{{ coin.display_name }}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data(){
    return {
      
    }
  },
  created(){
    this.getCoinList();
  },
  methods: {
    ...mapActions(['getCoinList'])
  }
}
</script>

<style lang="scss" scoped>
  .coin-list {
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    > li {
      width:19%;
      margin:.5%;
      padding:5px;
      color:#fff;
      background-color:#808695;
      border-radius:5px;
      text-align:center;
      box-sizing:border-box;
      transition:all .3s ease-in-out;
      &:hover {
        transform:scale(1.1) rotate(-2deg);
      }
    }
  }
</style>