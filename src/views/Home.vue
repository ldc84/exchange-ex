<template>
  <div class="home">
    <MarketList />
  </div>
</template>

<script>
import MarketList from '~@/MarketList';

export default {
  data() {
    return {
      
    }
  },
  components: {
    MarketList
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
