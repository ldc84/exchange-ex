import Decimal from 'decimal.js';

const setGlobalFilters = (Vue) => {
  Vue.filter('toFixed', (v, pos) => {
    const _val = new Decimal(v);
    return _val.toFixed(pos);
  });
  // v1, v2를 받아 v2에서 v1의 변화량(v2 - v1)을 리턴
  Vue.filter('diffOf', (v, v2) => {
    return new Decimal(v).minus(v2).toNumber();
  });
  // v1, v2를 받아 v1이 v2의 몇 %인지를 리턴( v1 / v2 * 100)
  Vue.filter('percOf', (v1, v2) => {
    return new Decimal(v1).div(v2).mul(100).toNumber();
  });
};

export default setGlobalFilters;