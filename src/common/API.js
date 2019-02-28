import { Comm } from './Modules';

const errorChx = res => {
  if(res.status !== 'ok' || !res.hasOwnProperty('data')) {
    throw new Error(res);
  }
}

// 코인 목록
export const getCoinList = (params) =>
  Comm('/v2/beta/common/currencies')(params).then((response) => {
    errorChx (response);
    return response.data;
  });

// 마켓 목록
export const getSymbols = (params) =>
  Comm('/v2/beta/common/symbols')(params).then((response) => {
    errorChx (response);
    return response.data;
  });