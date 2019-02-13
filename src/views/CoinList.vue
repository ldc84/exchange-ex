<template>
  <div class="about">
    <h1>Coin List</h1>
    <Spin fix v-if="coins.length <= 0">
      <Icon type="ios-loading" size=50 class="demo-spin-icon-load"></Icon>
      <div>Loading...</div>
    </Spin>
    <ul class="coin-list">
      <li v-for="(coin, key) in coins" :key="key">
        <strong>{{ coin }}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
import url from '^@/config';
export default {
  data(){
    return {
      coins: [],
    }
  },
  created(){
    this.coinListGet();
  },
  methods: {
    coinListGet() {
      let list = [];
      fetch(url+'/v2/beta/common/currencies')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          list = json.data.reduce((key, val)=> {          
            return list.push(val.display_name);
          }, [])
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })
      this.coins = list;
    }
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